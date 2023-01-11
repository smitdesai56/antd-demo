import { Route, Routes } from "react-router-dom";
import "antd/dist/reset.css";
import { LoginForm } from "./pages/Login/LoginForm";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
