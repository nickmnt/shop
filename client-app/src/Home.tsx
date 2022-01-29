import React from "react";
import "./App.css";
import Paper from "@mui/material/Paper/Paper";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import Stack from "@mui/material/Stack/Stack";
import RedeemIcon from "@mui/icons-material/Redeem";
import StoreIcon from "@mui/icons-material/Store";
import IconButton from "@mui/material/IconButton/IconButton";
import Typography from "@mui/material/Typography/Typography";
import LaptopIcon from "@mui/icons-material/Laptop";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import Grid from "@mui/material/Grid/Grid";
import SearchIcon from "@mui/icons-material/Search";
import BottomNav from "./BottomNav";

export default function Home() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Paper
        sx={{
          width: "100%",
          height: "4rem",
          position: "fixed",
          top: "0",
        }}
        square
      >
        <Paper
          sx={{
            width: "99.5%",
            margin: "auto",
            backgroundColor: "#eee",
            height: "95%",
            display: "flex",
            alignItems: "center",
          }}
          elevation={0}
        >
          <SearchIcon />
          Search in store
        </Paper>
      </Paper>
      <Paper
        sx={{
          flex: "1",
          display: "flex",
          flexDirection: "center",
          justifyContent: "center",
          marginTop: "3.1rem",
        }}
        square
      >
        <Stack
          sx={{ marginTop: "1rem", width: "100%", height: "100%" }}
          direction="column"
        >
          <Carousel
            plugins={[
              "centered",
              "infinite",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2,
                },
              },
            ]}
          >
            <img
              src={"./images/sample-promotion.jpg"}
              style={{ width: "95%", borderRadius: "10px" }}
              alt="Promotion1"
            />
            <img
              src={"./images/sample-promotion.jpg"}
              style={{ width: "95%", borderRadius: "10px" }}
              alt="Promotion2"
            />
            <img
              src={"./images/sample-promotion.jpg"}
              style={{ width: "95%", borderRadius: "10px" }}
              alt="Promotion3"
            />
          </Carousel>
          <Stack
            sx={{
              marginTop: "1rem",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
            direction="column"
            spacing={2}
          >
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 8, sm: 16, md: 16 }}
              sx={{ width: "100%" }}
            >
              <Grid item xs={2} sm={4} md={4} zeroMinWidth>
                <Stack
                  direction="column"
                  spacing={1}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <IconButton
                    sx={{
                      backgroundImage:
                        "linear-gradient(to top, #eb3349, #ee3f47, #f04946, #f25344, #f45c43)",
                      width: 48,
                      height: 48,
                    }}
                  >
                    <StoreIcon sx={{ color: "#FFFAFA" }} />
                  </IconButton>
                  <Typography>Market</Typography>
                </Stack>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Stack
                  direction="column"
                  spacing={1}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <IconButton
                    sx={{
                      backgroundImage:
                        "linear-gradient(to top, #eb3349, #ee3f47, #f04946, #f25344, #f45c43)",
                      width: 48,
                      height: 48,
                    }}
                  >
                    <LaptopIcon sx={{ color: "#FFFAFA" }} />
                  </IconButton>
                  <Typography>Digital</Typography>
                </Stack>
              </Grid>
              <Grid item xs={2} sm={4} md={4} zeroMinWidth>
                <Stack
                  direction="column"
                  spacing={1}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <IconButton
                    sx={{
                      backgroundImage:
                        "linear-gradient(to top, #eb3349, #ee3f47, #f04946, #f25344, #f45c43)",
                      width: 48,
                      height: 48,
                    }}
                  >
                    <AssignmentIcon sx={{ color: "#FFFAFA" }} />
                  </IconButton>
                  <Typography>Missions</Typography>
                </Stack>
              </Grid>
              <Grid item xs={2} sm={4} md={4} zeroMinWidth>
                <Stack
                  direction="column"
                  spacing={1}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <IconButton
                    sx={{
                      backgroundImage:
                        "linear-gradient(to top, #eb3349, #ee3f47, #f04946, #f25344, #f45c43)",
                      width: 48,
                      height: 48,
                    }}
                  >
                    <RedeemIcon sx={{ color: "#FFFAFA" }} />
                  </IconButton>
                  <Typography>Big Gift</Typography>
                </Stack>
              </Grid>
              <Grid item xs={2} sm={4} md={4} zeroMinWidth>
                <Stack
                  direction="column"
                  spacing={1}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <IconButton
                    sx={{
                      backgroundImage:
                        "linear-gradient(to top, #eb3349, #ee3f47, #f04946, #f25344, #f45c43)",
                      width: 48,
                      height: 48,
                    }}
                  >
                    <CheckroomIcon sx={{ color: "#FFFAFA" }} />
                  </IconButton>
                  <Typography>Clothes</Typography>
                </Stack>
              </Grid>
              <Grid item xs={2} sm={4} md={4} zeroMinWidth>
                <Stack
                  direction="column"
                  spacing={1}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <IconButton
                    sx={{
                      backgroundImage:
                        "linear-gradient(to top, #eb3349, #ee3f47, #f04946, #f25344, #f45c43)",
                      width: 48,
                      height: 48,
                    }}
                  >
                    <LaptopIcon sx={{ color: "#FFFAFA" }} />
                  </IconButton>
                  <Typography>ABCD</Typography>
                </Stack>
              </Grid>
              <Grid item xs={2} sm={4} md={4} zeroMinWidth>
                <Stack
                  direction="column"
                  spacing={1}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <IconButton
                    sx={{
                      backgroundImage:
                        "linear-gradient(to top, #eb3349, #ee3f47, #f04946, #f25344, #f45c43)",
                      width: 48,
                      height: 48,
                    }}
                  >
                    <AssignmentIcon sx={{ color: "#FFFAFA" }} />
                  </IconButton>
                  <Typography>ABCD</Typography>
                </Stack>
              </Grid>
              <Grid item xs={2} sm={4} md={4} zeroMinWidth>
                <Stack
                  direction="column"
                  spacing={1}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <IconButton
                    sx={{
                      backgroundImage:
                        "linear-gradient(to top, #4ca1af, #6db1bc, #8bc0ca, #a8d0d7, #c4e0e5)",
                      width: 48,
                      height: 48,
                    }}
                  >
                    <MoreHorizIcon sx={{ color: "#FFFAFA" }} />
                  </IconButton>
                  <Typography>More</Typography>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      </Paper>
      <BottomNav value={0} />
    </div>
  );
}
