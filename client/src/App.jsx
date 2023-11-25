import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Academics from "./pages/Academics";
import OurTeam from "./pages/OurTeam";
import Admission from "./pages/Admission";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/academics" element={<Academics />}></Route>
          <Route path="/our-team" element={<OurTeam />}></Route>
          <Route path="/admissions" element={<Admission />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
