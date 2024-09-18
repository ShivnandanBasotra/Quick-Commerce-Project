import AuthPage from "./pages/AuthPage";
import BuyerHomePage from "./pages/buyer-pages/HomePage.jsx";
import Header from "./components/buyer-components/Header.jsx";
import CartPage from "./pages/buyer-pages/CartPage.jsx";
import Footer from "./components/buyer-components/Footer.jsx";
import WishListPage from "./pages/buyer-pages/WishListPage.jsx";
import NotificationsDashboard from "./components/buyer-components/NotificationsDashboard.jsx";
import { useRecoilValue } from "recoil";
import isNotificationsVisibleAtom from "./atoms/notificationsAtom.js";
import isProfileVisibleAtom from "./atoms/profileAtom.js";
import ProfileDashboard from "./components/buyer-components/ProfileDashboard.jsx";
import BuyerOrdersPage from "./pages/buyer-pages/OrdersPage.jsx";
import OrdersHistoryPage from "./pages/buyer-pages/OrdersHistoryPage.jsx";
import HelpPage from "./pages/buyer-pages/HelpPage.jsx";
import WalletPage from "./pages/buyer-pages/WalletPage.jsx";
import ProfilePage from "./pages/buyer-pages/ProfilePage.jsx";
import CouponPage from "./pages/buyer-pages/CouponPage.jsx";
import ItemVeiwPage from "./pages/buyer-pages/ItemVeiwPage.jsx";
import { Route, Routes } from "react-router-dom";
import LocationSelector from "./components/buyer-components/LocationSelector.jsx";
import { showLocationsAtom } from "./atoms/locationAtoms.js";
import AdminHomePage from "./pages/admin-pages/HomePage.jsx";
import isAdminNotificationsVisibleAtom from "./atoms/adminNotificationsAtom.js";
import AdminNotificationBar from "./components/admin-components/NotificationBar.jsx";
import AdminProfilePage from "./pages/admin-pages/AdminProfilPage.jsx";
import ChangePasswordPage from "./pages/admin-pages/ChangePasswordPage.jsx";
import AdminAcitivityLog from "./components/admin-components/ActivityLogsBar.jsx";
import isAdminActivityLogVisibleAtom from "./atoms/adminAcitivityLogAtom.js";
import UserProfileView from "./pages/admin-pages/UserProfilePage.jsx";
import ProductViewPage from "./pages/admin-pages/ProductViewPage.jsx";
import OrderViewPage from "./pages/admin-pages/OrderViewPage.jsx";
import AddProductPage from "./pages/admin-pages/AddProductPage.jsx";





function App() {
  const isNotificationsVisible = useRecoilValue(isNotificationsVisibleAtom);
  const isAdminActivityLogVisible = useRecoilValue(isAdminActivityLogVisibleAtom);
  const isAdminNotificationsVisible = useRecoilValue(isAdminNotificationsVisibleAtom);
  const isProfileVisible = useRecoilValue(isProfileVisibleAtom);
  const showLocations = useRecoilValue(showLocationsAtom);
  return (
    <div className={`relative bg-slate-100 ${isNotificationsVisible || isProfileVisible ? 'overflow-y-hidden h-screen' : null}`}>
      <Header/>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<BuyerHomePage />} />
        <Route path="/buyer/itemname/view" element={<ItemVeiwPage />} />
        <Route path="/buyer/cart" element={<CartPage />} />
        <Route path="/buyer/wishlist" element={<WishListPage />} />
        <Route path="/buyer/orders-page" element={<BuyerOrdersPage />} />
        <Route path="/buyer/orders-history" element={<OrdersHistoryPage />} />
        <Route path="/buyer/wallet" element={<WalletPage />} />
        <Route path="/buyer/profile" element={<ProfilePage />} />
        <Route path="/buyer/help" element={<HelpPage />} />
        <Route path="/buyer/claim-coupon" element={<CouponPage />} />
        {/* admin routes */}
        <Route path="/admin/*" element={<AdminHomePage/>}/>
        <Route path="/admin/profile" element={<AdminProfilePage/>}/>   
        <Route path="/admin/change-password" element={<ChangePasswordPage/>}/> 
        <Route path="/admin/user-profile" element={<UserProfileView/>}/> 
        <Route path="/admin/product-view" element={<ProductViewPage/>}/> 
        <Route path="/admin/add-product" element={<AddProductPage/>}/>   
        <Route path="/admin/order-view" element={<OrderViewPage/>}/>  
      </Routes>
      {isNotificationsVisible && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-20"></div>
          <NotificationsDashboard />
        </>
      )}
      {isProfileVisible && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-20"></div>
          <ProfileDashboard />
        </>
      )}
      {showLocations && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-20"></div>
          <LocationSelector />
        </>
      )}
      {/* admin */}
      {isAdminNotificationsVisible&&(
         <>
         <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-20"></div>
         <AdminNotificationBar/>
         </>    
       )}
       {isAdminActivityLogVisible&&(
         <>
         <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-20"></div>
         <AdminAcitivityLog/>
         </>    
       )} 
      <Footer />
    </div>
    
  );
}

export default App;

