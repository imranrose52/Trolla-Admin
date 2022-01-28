import ReactDOM from "react-dom";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Driver,
  Dashboard,
  Loader,
  Transporter,
  Loads,
  Vehicle,
  Quote,
  Confirmed,
  CloseTrip,
  CompleteTrip,
  MaterialType,
  VehicleType,
  Error404,
} from "../pages";

const UserNavigation = () => {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/transporters" element={<Transporter />} />
      <Route path="/loaders" element={<Loader />} />
      <Route path="/drivers" element={<Driver />} />
      <Route path="/loads" element={<Loads />} />
      <Route path="/vehicles" element={<Vehicle />} />

      <Route path="/quotes" element={<Quote />} />
      <Route path="/confirmed" element={<Confirmed />} />
      <Route path="/complete-trips" element={<CompleteTrip />} />
      <Route path="/close-trips" element={<CloseTrip />} />

      <Route path="/meterial-types" element={<MaterialType />} />
      <Route path="/vehicle-types" element={<VehicleType />} />

      <Route path="/*" element={<Error404 />} />
    </Routes>
    // </BrowserRouter>
  );
};

export default UserNavigation;
