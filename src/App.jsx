import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/dashboard/Home";
import SignIn from "./pages/auth/SignIn";
import SIgnUp from "./pages/auth/SIgnUp";
import Maintenance from "./pages/maintenance/Maintenance";
import ForgetPassword from "./pages/auth/ForgetPassword";
import Profile from "./pages/profile/Profile";
import ChangePassword from "./pages/profile/ChangePassword";
import "react-toastify/dist/ReactToastify.css";
import CompanyList from "./pages/master/company/CompanyList";
import BranchList from "./pages/master/branch/BranchList";
import TyrePositionList from "./pages/master/tyrePosition/TyrePositionList";
import TyreMakeList from "./pages/master/tyreMake/TyreMakeList";
import ServiceTypeList from "./pages/master/serviceType/ServiceTypeList";
import TeamList from "./pages/master/team/TeamList";
import DriverList from "./pages/master/driver/DriverList";
import AgenciesList from "./pages/master/agencies/AgenciesList";
import VendorList from "./pages/master/vendor/VendorList";
import VehiclesList from "./pages/vehicles/VehiclesList";
import PurchaseTyreList from "./pages/tyre/purchase/PurchaseTyreList";
import StockTyreList from "./pages/tyre/stock/StockTyreList";
import AssignTypeTyreList from "./pages/tyre/assignType/AssignTypeTyreList";
import UnassignTypeTyreList from "./pages/tyre/unassignType/UnassignTypeTyreList";
import InspectionTyreList from "./pages/tyre/inspection/InspectionTyreList";
import ServicesList from "./pages/services/ServicesList";
import TripList from "./pages/trip/TripList";
import TodoList from "./pages/todo/TodoList";
import AdvancePaymentList from "./pages/payment/advance/AdvancePaymentList";
import BranchPaymentList from "./pages/payment/branch/BranchPaymentList";
import DetailsPaymentList from "./pages/payment/details/DetailsPaymentList";
import CreateTodo from "./pages/todo/CreateTodo";
import EditTodo from "./pages/todo/EditTodo";
import AddBranchPayment from "./pages/payment/branch/AddBranchPayment";
import EditBranchPayment from "./pages/payment/branch/EditBranchPayment";
import AddAdvacnePayment from "./pages/payment/advance/AddAdvacnePayment";
import EditAdvancePayment from "./pages/payment/advance/EditAdvancePayment";
import AddDetailsPayment from "./pages/payment/details/AddDetailsPayment";
import EditDetailsPayment from "./pages/payment/details/EditDetailsPayment";
import AssignTypeTyreView from "./pages/tyre/assignType/AssignTypeTyreView";
import AddPurchaseTyre from "./pages/tyre/purchase/AddPurchaseTyre";
import EditPurchaseTyre from "./pages/tyre/purchase/EditPurchaseTyre";
import ViewPurchaseTyre from "./pages/tyre/purchase/ViewPurchaseTyre";
const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SIgnUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/change-password"
          element={<ChangePassword />} 
        />
        {/* master  */}
        <Route path="/master/company-list" element={<CompanyList />} />
        <Route path="/master/branch-list" element={<BranchList />} />
        <Route path="/master/tyreposition-list" element={<TyrePositionList />
      } />
        <Route path="/master/tyremake-list" element={<TyreMakeList />} />
        <Route path="/master/servicetype-list" element={<ServiceTypeList />} />
        <Route path="/master/team-list" element={<TeamList />} />
        <Route path="/master/driver-list" element={<DriverList />} />
        <Route path="/master/agencies-list" element={<AgenciesList />} />
        <Route path="/master/vendor-list" element={<VendorList />} />

        {/* vechiles  */}
        <Route path="/vechiles-list" element={<VehiclesList />} />
        {/* tyre  */}
        {/* purchase tyre  */}
        <Route path="/tyre/purchase-list" element={<PurchaseTyreList />} />
        <Route path="/tyre/createPurchase" element={<AddPurchaseTyre />} />
        <Route path="/tyre/purchase-edit/:id" element={<EditPurchaseTyre />} />
        <Route path="/tyre/purchase-view/:id" element={<ViewPurchaseTyre />} />


        {/* stock list */}
        <Route path="/tyre/stock-list" element={<StockTyreList />} />
        {/* assign tyre  */}
        <Route path="/tyre/assign-list" element={<AssignTypeTyreList />} />
        <Route path="/tyre/assign-view/:id" element={<AssignTypeTyreView />} />
         {/* unassign tyre */}
        <Route path="/tyre/unassign-list" element={<UnassignTypeTyreList />} />
        <Route path="/tyre/inspection-list" element={<InspectionTyreList />} />
        {/* services  */}
        <Route path="/service-list" element={<ServicesList />} />
        {/* trip  */}
        <Route path="/trip-list" element={<TripList />} />
        {/* payment  */}
        {/* payment branch  */}
        <Route path="/payment/branch-list" element={<BranchPaymentList />} />
        <Route path="/payment/edit-branchpay/:id" element={<EditBranchPayment />} />
        <Route path="/payment/createBranchPay" element={<AddBranchPayment />} />
        {/* payment advance  */}
        <Route path="/payment/advance-list" element={<AdvancePaymentList />} />
        <Route path="/payment/createAdvance" element={<AddAdvacnePayment />} />
        <Route path="/payment/edit-advance/:id" element={<EditAdvancePayment />} />
        {/* payment details  */}
        <Route path="/payment/details-list" element={<DetailsPaymentList />} />
        <Route path="/payment/createDetails" element={<AddDetailsPayment />} />
        <Route path="/payment/edit-details/:id" element={<EditDetailsPayment />} />
        {/* todo  */}
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/edit-todo/:id" element={<EditTodo />} />
        <Route path="/createTodo" element={<CreateTodo />} />
      </Routes>
    </>
  );
};

export default App;
