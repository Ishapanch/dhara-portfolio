import "./App.css";
import Preloader from "./components/Preloader";
import RightSide from "./components/RightSide";
import { useState , useEffect } from "react";
function App() {

  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 2000);
  }, []);

  return (
  <div>{screenLoading ? <Preloader /> : <RightSide />}</div>
  )
}

export default App;
