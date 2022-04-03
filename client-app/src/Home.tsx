import React from "react";
import "./App.css";
import Paper from "@mui/material/Paper/Paper";
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
import BottomNav from "./BottomNav";
import AppBar from "@mui/material/AppBar/AppBar";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import ShopIcon from "@mui/icons-material/Shop";
import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useAppSelector } from "./app/hooks";

export default function Home() {
  const user = useAppSelector((x) => x.user);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppBar position="static">
        <Toolbar variant="dense">
          <ShopIcon sx={{ marginRight: "1rem" }} />
          <Typography variant="h6" color="inherit" component="div">
            ReactStore
          </Typography>
          <Box
            sx={{
              display: { marginLeft: "1rem", xs: "none", md: "flex" },
            }}
          >
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ShoppingCartIcon sx={{ marginRight: ".5rem" }} />
              Cart
            </Button>
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <AddCircleIcon sx={{ marginRight: ".5rem" }} />
              Create
            </Button>
          </Box>
          <div style={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex" }}>
            {user ? (
              <>
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AccountCircleIcon sx={{ marginRight: ".5rem" }} />
                  Account
                </Button>
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <LogoutIcon sx={{ marginRight: ".5rem" }} />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Login
                </Button>
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Register
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

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
