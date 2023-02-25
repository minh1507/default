import App from "pages/Home/Home";
import { Route, Routes } from "react-router-dom";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
  );
}

export default Routers;
