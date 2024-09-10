import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./login";
import MainPage from "./main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}></Route>
          <Route path="/mainPage" element={<MainPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
