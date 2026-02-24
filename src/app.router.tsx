import { createBrowserRouter, Navigate } from "react-router";
import { ShopLayout } from "./shop/layouts/ShopLayout";
import { HomePage } from "./shop/pages/home/HomePage";
import { ProductPage } from "./shop/pages/product/ProductPage";
import { GenderPage } from "./shop/pages/gender/GenderPage";
import { LoginPage } from "./auth/pages/login/LoginPage";
import { RegisterPage } from "./auth/pages/register/RegisterPage";
import { DashboardPage } from "./admin/pages/dashboard/DashboardPage";
import { AdminProductPage } from "./admin/pages/product/AdminProductPage";
import { lazy } from "react";

const AuthLayout = lazy(() => import("./auth/layouts/AuthLayout"));
const AdminLayout = lazy(() => import("./admin/layouts/AdminLayout"));

export const appRouter = createBrowserRouter([
  // Public routes
  {
    path: "/",
    element: <ShopLayout></ShopLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "product/:idSlug",
        element: <ProductPage></ProductPage>,
      },
      {
        path: "gender/:gender",
        element: <GenderPage></GenderPage>,
      },
    ],
  },

  // Auth Routes
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      { index: true, element: <Navigate to="/auth/login"></Navigate> },
      { path: "login", element: <LoginPage></LoginPage> },
      {
        path: "register",
        element: <RegisterPage></RegisterPage>,
      },
    ],
  },

  // Admin Routes
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        index: true,
        element: <DashboardPage></DashboardPage>,
      },
      {
        path: "products",
        element: <AdminProductPage></AdminProductPage>,
      },
      {
        path: "products/:id",
        element: <AdminProductPage></AdminProductPage>,
      },
    ],
  },

  {
    path: "*",
    element: <Navigate to="/"></Navigate>,
  },
]);
