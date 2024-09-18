
import Header from "../../components/admin-components/Header";
import Slidebar from "../../components/admin-components/Slidebar";

import { Outlet, Routes, Route } from "react-router-dom"
import UsersListPage from "./UsersListPage";
import AdminDashboard from "./DashboardPage";
import UserProfilePage from "./UserProfilePage";
import ProductsPage from "./ProductsPage";
import OrdersPage from "./OrdersPage";
import FeedbacksPage from "./FeedbackPage";


export default function HomePage() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Slidebar className="w-64 flex-shrink-0" />
      <div className="flex flex-col flex-grow overflow-hidden">
        <Header className="bg-white shadow-md" />
        <main className="flex-grow px-5 overflow-auto">
          <Routes>
          <Route path="/" element={<AdminDashboard />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/userlist" element={<UsersListPage />} />
            <Route path="/userprofile/username" element={<UserProfilePage/>} />
            <Route path="/productlist" element={<ProductsPage />} />
            <Route path="/orderlist" element={<OrdersPage />} />
            <Route path="/feedbackspage" element={<FeedbacksPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}