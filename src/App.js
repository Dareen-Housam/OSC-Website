import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
// import Form from "./pages/Form/Form";
import "../src/shares/main.css";
import { ThemeProvider } from "./components/Theme/Theme-provider";
import SummerTrainingForm from "./pages/SummerTrainingForm/SummerTrainingForm";
function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* Recruitment Form */}
            {/* <Route path="/registration" element={<Form />}></Route> */}
            <Route
              path="/registration"
              element={<SummerTrainingForm />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
