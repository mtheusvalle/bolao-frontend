import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Grid,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "./components/sideBar";
import Ranking from "./components/ranking";

import Matches from "./pages/matches";

function App() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Container maxWidth="xl">
          <Grid container component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
            <Grid item xs={8}>
              <Switch>
                <Route path="/" exact>
                  <h1>Home</h1>
                </Route>
                <Route path="/champions-league">
                  <Matches />
                </Route>
              </Switch>
            </Grid>
            <Grid item xs={4}>
              <Ranking />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
