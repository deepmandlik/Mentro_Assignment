import React , {useState , useEffect} from "react";
import "../App.css";

import Box from "@mui/material/Box";
import img1 from "../media/image1.png"
import img2 from "../media/image2.png";
import img3 from "../media/image3.png";
import img4 from "../media/image4.png";
import img5 from "../media/image5.png";

function Wheel({index}) {
  const [image1, setImage1] = useState(img2);
  const [image2, setImage2] = useState(img3);
  const [image3, setImage3] = useState(img4);
  const [image4, setImage4] = useState(img5);

  useEffect(() => {
    if (index === 0) {
      setImage1(img2);
      setImage2(img3);
      setImage3(img4);
      setImage4(img5);
    } else if (index === 1) {
      setImage1(img3);
      setImage2(img4);
      setImage3(img5);
      setImage4(img1);
    } else if (index === 2) {
      setImage1(img4);
      setImage2(img5);
      setImage3(img1);
      setImage4(img2);
    } else if (index === 3) {
      setImage1(img5);
      setImage2(img1);
      setImage3(img2);
      setImage4(img3);
    } else if (index === 4) {
      setImage1(img1);
      setImage2(img2);
      setImage3(img3);
      setImage4(img4);
    }
  }, [index]);
  return (
    <Box sx={{
        position : 'absolute',
        zIndex: -10,
        top : '13%'
    }}>
      <Box
        sx={{
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          
        }}
      >
        <img src={image1} alt="image1" style={{width : "150px" , height : "150px" , borderRadius : '50%' , transform : 'translate(-25% , 50%)'}}></img>
        <img src={image2} alt="image1" style={{width : "150px" , height : "150px" , borderRadius : '50%' , transform : 'translate(-25% , -40%)'}}></img>
        <img src={image3} alt="image1" style={{width : "150px" , height : "150px" , borderRadius : '50%' , transform : 'translate(15% , -40%)'}}></img>
        <img src={image4} alt="image1" style={{width : "150px" , height : "150px" , borderRadius : '50%' , transform : 'translate(300% , -30%)'}}></img>
       </Box>
    </Box>
  );
}

export default Wheel;
