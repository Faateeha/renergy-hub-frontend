import { Route, Routes } from "react-router-dom";
import OrderManagement from "./pages/orderManagement";
import ProductManagement from "./pages/productManagement";
import VendorProfile from "./pages/vendorProfile";
import SaleAnalytics from "./pages/saleAnalytics";
import { Sidebar } from "./header/SideBar";

function Vendor() {
  return (
    <main className="bg-[#E6E6E6] flex overflow-hidden">
      <Sidebar />
      <section className="w-full">
        <Routes>
          <Route path="order-management" element={<OrderManagement />} />
          <Route path="product-management" element={<ProductManagement />} />
          <Route path="/vendorprofile" element={<VendorProfile />} />
          <Route path="sale-analytics" element={<SaleAnalytics />} />
        </Routes>
      </section>
    </main>
  );
}

export default Vendor;
