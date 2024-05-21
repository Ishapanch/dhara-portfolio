import { Button } from "react-bootstrap";
import "./App.css";
import Preloader from "./components/Preloader";
import RightSide from "./components/RightSide";
import { useState , useEffect } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

function App() {

  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 2000);
  }, []);

  const [bodyStyle , setbodyStyle] = useState({
    filter : 'invert(0)'
  });

  const [className , setclassName] = useState("light-theme")

  const [darkIcon , setdarkIcon] = useState(<MdOutlineDarkMode />)

  const [btnText , setbtnText] = useState("Get Dark Mode")

  const darkEnable = () => {
    if (bodyStyle.filter =="invert(0)"){
      setbodyStyle({
        filter : 'invert(1)'
      })
      setclassName ("dark-theme")
      setdarkIcon(<MdOutlineDarkMode />)
      setbtnText("Get Light Mode")
    }
    else{
      setbodyStyle({
        filter : 'invert(0)'
      })
      setclassName("light-theme")
      setdarkIcon(<MdDarkMode />)
      setbtnText("Get Dark Mode")
    };
  };
  
  return (
    <>
  <div style={bodyStyle} className={className}>
    {screenLoading ? <Preloader /> : <RightSide />}
    <div onClick={darkEnable} className="darkmodebtn">
      {darkIcon}
      <div className="text">
        {btnText}
      </div>
    </div>
    </div>
    
    </>
  )
}

export default App;
