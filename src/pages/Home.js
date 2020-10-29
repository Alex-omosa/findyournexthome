import React from 'react';
import Grid from '@material-ui/core/Grid';
import HomesGrid from './../components/homesGrid/HomesGrid';

function Home() {
  return (
    <Grid container>
      <Grid item md={12} lg={6}>
        <HomesGrid />
      </Grid>
    </Grid>
  );
}

export default Home;
