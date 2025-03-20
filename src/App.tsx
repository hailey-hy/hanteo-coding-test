import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Chart from "./pages/Chart";
import Whook from "./pages/Whook";
import Event from "./pages/Event";
import News from "./pages/News";
import Store from "./pages/Store";
import Cash from "./pages/Cash";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Chart />} />
        <Route path="/Whook" element={<Whook />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/News" element={<News />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Cash" element={<Cash />} />
      </Routes>
    </>
  );
}

export default App;
