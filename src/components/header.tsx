import { FiMenu } from "react-icons/fi";
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import { LogOutIcon } from "lucide-react";
import { LoadingButton } from "@mui/lab";
import { Typography } from "@mui/material";
import { useAuthContext } from "@/contexts/stateContext";
import axiosClient from "@/helpers/axios-client";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const navigate = useNavigate();
  const { authenticate, user, setUser } = useAuthContext();
  const [loading, setLoading] = useState<boolean>();
  const logoutHandler = () => {
    setLoading(true);
    axiosClient
      .post("logout")
      .then(() => {
        authenticate(null);
        setUser(null);
        localStorage.clear();
        navigate("/login");
      })
      .finally(() => setLoading(false));
  };

  return (
    <header className="bg-primary text-white shadow-md" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-2xl font-bold">تطبيق المطبخ</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 space-x-reverse">
          <Link to="/dashboard" className="text-lg hover:underline">
            لوحة التحكم
          </Link>
          <Link to="/orders" className="text-lg hover:underline">
            الطلبات
          </Link>
          <Link to="/mealCategories" className="text-lg hover:underline">
            الفئات
          </Link>
          <Link to="/expenses" className="text-lg hover:underline">
            المصروفات
          </Link>
          <Link to="/settings" className="text-lg hover:underline">
            الإعدادات
          </Link>
          <LoadingButton
            onClick={logoutHandler}
            loading={loading}
            size="large"
            color="inherit"
            aria-label="logout"
            sx={{ mr: 2 }}
          >
            <LogOutIcon />
          </LoadingButton>
        </nav>

        {/* Mobile Menu Toggle */}
        <Button
          className="md:hidden"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle Menu"
        >
          <FiMenu size={24} />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden px-4 py-2 space-y-2 bg-primary-light text-white">
          <Link
            to="/dashboard"
            onClick={closeMenu}
            className="block text-lg hover:underline"
          >
            لوحة التحكم
          </Link>
          <Link
            to="/orders"
            onClick={closeMenu}
            className="block text-lg hover:underline"
          >
            الطلبات
          </Link>
          <Link
            to="/mealCategories"
            onClick={closeMenu}
            className="block text-lg hover:underline"
          >
            الفئات
          </Link>
          <Link
            to="/expenses"
            onClick={closeMenu}
            className="block text-lg hover:underline"
          >
            المصروفات
          </Link>
          <Link
            to="/settings"
            onClick={closeMenu}
            className="block text-lg hover:underline"
          >
            الإعدادات
          </Link>
          <LoadingButton
            onClick={logoutHandler}
            loading={loading}
            size="large"
            color="inherit"
            aria-label="logout"
            className="w-full text-center mt-2"
          >
            <LogOutIcon />
          </LoadingButton>
        </nav>
      )}
    </header>
  );
};

export default Header;
