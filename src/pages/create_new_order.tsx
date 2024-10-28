import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FiPlusCircle } from "react-icons/fi";
import Header from "@/components/header";
import axiosClient from "@/helpers/axios-client";
import { useAuthContext } from "@/contexts/stateContext";

interface Category {
  id: number;
  name: string;
  imgage: string;
}

const CreateNewOrder = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { data, setData } = useAuthContext();
  const [customerName, setCustomerName] = useState<string>(""); // Customer name
  const [order, setOrder] = useState<{ meals: any[]; totalPrice: number }>({
    meals: [],
    totalPrice: 0,
  });

  useEffect(() => {
    axiosClient.get<Category>(`categories`).then(({ data }) => {
      setData(data);
    });
  }, []);

  const categories = ["مقبلات", "الطبق الرئيسي", "الحلويات", "المشروبات"];
  const meals = {
    // Your meals data
  };

  const addMealToOrder = (meal: { name: string; price: number }) => {
    const existingMeal = order.meals.find((m) => m.name === meal.name);
    if (existingMeal) {
      existingMeal.quantity += 1;
      setOrder((prevOrder) => ({
        ...prevOrder,
        meals: [...prevOrder.meals],
        totalPrice: prevOrder.totalPrice + meal.price,
      }));
    } else {
      setOrder((prevOrder) => ({
        meals: [...prevOrder.meals, { ...meal, quantity: 1 }],
        totalPrice: prevOrder.totalPrice + meal.price,
      }));
    }
  };

  const updateQuantity = (index: number, quantity: number) => {
    const meal = order.meals[index];
    if (meal) {
      const updatedMeals = [...order.meals];
      updatedMeals[index] = { ...meal, quantity };
      const updatedTotalPrice = updatedMeals.reduce(
        (acc, m) => acc + m.price * m.quantity,
        0
      );
      setOrder({ meals: updatedMeals, totalPrice: updatedTotalPrice });
    }
  };

  const confirmOrder = () => {
    console.log("Order confirmed:", { customerName, order });
  };

  return (
    <>
      <div className="flex flex-col h-screen bg-gray-100" dir="rtl">
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          {/* ... (Same as before) */}

          {/* Meals Display */}
          {/* ... (Same as before) */}

          {/* Order Summary */}
          <div className="mt-10 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">ملخص الطلب</h3>
            <label className="block text-gray-800 mb-2">
              اسم العميل:
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="mt-1 p-2 border rounded w-full"
              />
            </label>
            {order.meals.length > 0 ? (
              <>
                <ul className="space-y-2">
                  {order.meals.map((meal, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span>{meal.name}</span>
                      <input
                        type="number"
                        value={meal.quantity}
                        min="1"
                        onChange={(e) =>
                          updateQuantity(index, parseInt(e.target.value, 10))
                        }
                        className="w-16 text-center border rounded"
                      />
                      <span>{meal.price * meal.quantity}$</span>
                    </li>
                  ))}
                </ul>
                <h4 className="mt-4 font-semibold">
                  الإجمالي: {order.totalPrice}$
                </h4>
                <Button
                  onClick={confirmOrder}
                  variant="primary"
                  className="mt-4 w-full bg-blue-500 hover:bg-blue-600"
                >
                  تأكيد الطلب
                </Button>
              </>
            ) : (
              <p className="text-gray-600">لم تقم بإضافة أي وجبات بعد.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewOrder;
