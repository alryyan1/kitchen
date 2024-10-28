import React from "react";
import { Card } from "@/components/ui/card"; // Assuming Card component
import { FaPlus, FaUtensils, FaUserPlus } from "react-icons/fa"; // Importing icons

function Settings() {
  return (
    <>
      {/* Cards for orders settings */}
      <div className="container mx-auto px-4 py-8" dir="rtl">
        {/* Cards for actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <CardLink
            title="الطلبات"
            description="يمكنك إدارة الطلبات من هنا"
            href="/create_new_order"
            icon="/src/assets/icons/check-out.png" // Icon for new order
          />
          <CardLink
            title="الأقسام"
            description="يمكنك إدارة الأقسام من هنا"
            href="/create_new_category"
            icon="/src/assets/icons/menu.png" // Icon for new category
          />
          <CardLink
            title="الأصناف"
            description="يمكنك إدارة الأصناف من هنا"
            href="/create_new_order"
            icon="/src/assets/icons/fast-food.png" // Icon for new meal
          />
        </div>
      </div>

      {/* Cards for users settings */}
      <div className="container mx-auto px-4 py-8" dir="rtl">
        {/* Cards for actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <CardLink
            title="المستخدمين"
            description="يمكنك إدارة المستخدمين من هنا"
            href="/create_new_order"
            icon="/src/assets/icons/programmer.png" // Icon for new user
          />
          <CardLink
            title="العملاء"
            description="يمكنك إدارة العملاء من هنا"
            href="/create_new_category"
            icon="/src/assets/icons/man.png" // Icon for new client
          />
        </div>
      </div>
    </>
  );
}

const CardLink = ({ title, description, href, icon }) => {
  return (
    <a
      href={href}
      className="block bg-white shadow-md hover:shadow-lg rounded-lg p-4 transition"
    >
      <Card>
        <div className="p-4 flex items-center">
          <img src={icon} alt="" className="ml-2" width={50} height={50} />{" "}
          {/* Icon */}
          <div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      </Card>
    </a>
  );
};

export default Settings;
