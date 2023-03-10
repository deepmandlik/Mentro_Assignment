import React, {useState} from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Info from "./components/info";
import Photo from "./components/photo";
import Wheel from "./components/wheel";
import { data } from "./components/data";

function App() {
  
  const [index , setIndex] = useState(0);

  const left = () => {
    setIndex((index+4)%5);
  }

  const right = () => {
    setIndex((index+1)%5);
  }


  return (
    <Box>
      <div className="circle"></div>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box className="info-box">
            <Info person={data[index]} />
          </Box>
          <Box sx={{width : '70%'}}>
            <Box display="flex" justifyContent="center">
              <Wheel index={index} />
            </Box>
            <Box m={3}>
              <Photo person={data[index]} left={left} right={right} index={index} />
            </Box>
          </Box>
        </Box>
    </Box>
  );
}

export default App;
