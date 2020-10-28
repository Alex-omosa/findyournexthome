import React from "react";
import "fontsource-roboto";
import Grid from "@material-ui/core/Grid";

import "./App.css";
import HomesGrid from "./components/homesGrid/HomesGrid";
import BottomNav from "./components/bottomNavigation/BottomNav";
// import FilterColumn from "./components/filters/filtercolumn/FilterColumn";

function App() {
  return (
    <div>
      <Grid container>
        <Grid item md={12} lg={6}>
          <HomesGrid />
        </Grid>
      </Grid>
      <BottomNav />
    </div>
  );
}

export default App;
