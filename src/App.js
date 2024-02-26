import "./App.css";
import AppRoutes from "./Application Routes/Routes";
import { Toaster } from "react-hot-toast";
import { MyContext } from "./Component/SunBurst";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Axios from "axios";
import Loader from "./Component/UserComponent/Loader";


function App() {
  const [text, setText] = useState("");
  const token = useSelector((state) => state?.auth?.token);

  if (token) {
    Axios.defaults.headers.common["Authorization"] = "Bearer " + token;
   
  }

  // Loading
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loaderStyle">
          <Loader />
        </div>
      ) : (
        <div>
          <Toaster
            toastOptions={{
              className: "",
              duration: 3000,
            }}
          />
          <MyContext.Provider value={{ text, setText }}>
            <AppRoutes />
          </MyContext.Provider>
        </div>
      )}
    </>
  );
}

export default App;
