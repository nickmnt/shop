import React from "react";
import "./App.css";
import BottomNavigation from "@mui/material/BottomNavigation/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PersonIcon from "@mui/icons-material/Person";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Paper from "@mui/material/Paper/Paper";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";

function App() {
  const [value, setValue] = React.useState(0);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Paper
        sx={{
          width: "100%",
          height: "3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          sx={{
            width: "100%",
            margin: "10rem",
            backgroundColor: "#eee",
            height: "95%",
          }}
          elevation={0}
        ></Paper>
      </Paper>
      <Paper
        sx={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Carousel
          plugins={[
            "centered",
            "infinite",
            "arrows",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 2,
              },
            },
          ]}
        >
          <img src={'imageOne'} />
          <img src={'imageTwo'} />
          <img src={'imageThree'} />
        </Carousel>
      </Paper>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ width: "100%", height: "3rem", bottom: 0, position: "absolute" }}
      >
        <BottomNavigationAction
          label="Home"
          icon={value !== 0 ? <HomeOutlinedIcon /> : <HomeIcon />}
        />
        <BottomNavigationAction
          label="Categories"
          icon={value !== 1 ? <CategoryOutlinedIcon /> : <CategoryIcon />}
        />
        <BottomNavigationAction
          label="Shopping Cart"
          icon={
            value !== 2 ? <ShoppingCartOutlinedIcon /> : <ShoppingCartIcon />
          }
        />
        <BottomNavigationAction
          label="My account"
          icon={value !== 3 ? <PersonOutlineIcon /> : <PersonIcon />}
        />
      </BottomNavigation>
    </div>
  );
}

export default App;
