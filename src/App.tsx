import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { AppRoutes } from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
      <AppRoutes />
    </>
  );
}

export default App;
