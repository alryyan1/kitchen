import { createBrowserRouter, RouteObject } from "react-router-dom";
import Error from "./Error";
import App from "./App";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import CreateNewOrder from "./pages/create_new_order";

import About from "./pages/About";
import Signup from "./pages/Signup";
import Config from "./pages/Config";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import MakeOrder from "./pages/MakeOrder";
import Meals from "./pages/Meals";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Expenses from "./pages/Expenses";
import MealCategoryForm from "./components/meal_category_form";
import OrdersPage from "./pages/orders_page";
import CreateCategory from "./pages/categories/create_category";
import Settings from "./pages/settings/settings";
import CreateMeal from "./pages/meals/CreateMeal";

const about: RouteObject = {
  path: "about",
  element: <About />,
};

const login: RouteObject = {
  path: "login",
  element: <Login />,
};
const signup: RouteObject = {
  path: "signup",
  element: <Signup />,
};
const config: RouteObject = {
  path: "config",
  element: <Config />,
};

const MealCategories: RouteObject = {
  path: "MealCategories",
  element: <MealCategoryForm />,
};
const CreateNewCategory: RouteObject = {
  path: "create_new_category",
  element: <CreateCategory />,
};
const orders: RouteObject = {
  path: "orders",
  element: <OrdersPage />,
};
const makeOrder: RouteObject = {
  path: "create_new_order",
  element: <CreateNewOrder />,
};
const landingPage: RouteObject = {
  path: "/home",
  element: <LandingPage />,
};
const meals: RouteObject = {
  path: "/meals",
  element: <Meals />,
};
const createMeal: RouteObject = {
  path: "/create_new_meal",
  element: <CreateMeal />,
};
const dashboard: RouteObject = {
  path: "/dashboard",
  element: <Dashboard />,
};
const customers: RouteObject = {
  path: "/customers",
  element: <Customers />,
};
const expenses: RouteObject = {
  path: "/expenses",
  element: <Expenses />,
};
const settings: RouteObject = {
  path: "/settings",
  element: <Settings />,
};
const authoroized: RouteObject = {
  path: "/",
  errorElement: <Error />,
  element: <DefaultLayout />,
  children: [
    about,
    config,
    MealCategories,
    CreateNewCategory,
    landingPage,
    orders,
    makeOrder,
    meals,
    createMeal,
    dashboard,
    customers,
    expenses,
    settings,
  ],
};

const guest: RouteObject = {
  path: "/",
  errorElement: <Error />,
  element: <GuestLayout />,
  children: [login, signup],
};

export const router = createBrowserRouter([authoroized, guest]);
