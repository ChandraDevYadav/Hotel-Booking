import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import HotelDetail from "./Pages/HotelDetail/HotelDetail";
import Payment from "./Pages/Payment/Payment";
import MainHome from "./Pages/MainHome/MainHome";
import ListYourProperty from "./Pages/ListYourProperty/ListYourProperty";
import Stay from "./Pages/Stay/Stay";
import Flight from "./Pages/Flight/Flight";
import Cars from "./Pages/Cars/Cars";
import Packages from "./Pages/Packages/Packages";
import ThingToDo from "./Pages/ThingToDo/ThingToDo";
import Cruises from "./Pages/Cruises/Cruises";
import Support from "./Pages/Support/Support";
import Trip from "./Pages/Trip/Trip";

import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";

// Auth
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminRoute from "./routes/AdminRoute";

// Example admin page
// import AdminDashboard from "./Pages/Admin/AdminDashboard";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/mainhome" element={<Home />} />
        <Route path="/hoteldetail" element={<HotelDetail />} />
        <Route path="/stay" element={<Stay />} />
        <Route path="/flight" element={<Flight />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/thingtodo" element={<ThingToDo />} />
        <Route path="/cruises" element={<Cruises />} />
        <Route path="/support" element={<Support />} />
        <Route path="/trip" element={<Trip />} />

        {/* Auth Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected User Routes */}
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />

        <Route
          path="/listproperty"
          element={
            <ProtectedRoute>
              <ListYourProperty />
            </ProtectedRoute>
          }
        />

        {/* Admin Routes */}
        {/* <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        /> */}
      </Routes>
    </AuthProvider>
  );
}

export default App;
