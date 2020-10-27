import React from "react";
import "fontsource-roboto";
import Grid from "@material-ui/core/Grid";

import "./App.css";
import HomesGrid from "./components/homesGrid/HomesGrid";
import FilterColumn from "./components/filters/filtercolumn/FilterColumn";

function App() {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item sm={4} md={2}>
          <FilterColumn />
        </Grid>
        <Grid item sm={8} md={6}>
          <HomesGrid />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
