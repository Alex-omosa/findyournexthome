import React from "react";
import { Link } from "react-router-dom";
// import Link from '@material-ui/core/Link';
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
const useStyles = makeStyles((theme) => {
  return {
    root: {
      // color: green[600],
      "&$checked": {
        color: theme.palette.secondary.main,
      },
    },
    checked: {},
    stickToBottom: {
      width: "100%",
      position: "fixed",
      bottom: 0,
    },
  };
});

function BottomNav() {
  const classes = useStyles();
  // const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    // setValue(newValue);
  };
  return (
    <BottomNavigation className={classes.stickToBottom} onChange={handleChange}>
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Home"
        value="home"
        icon={<HomeOutlinedIcon />}
        className={classes.root}
      />
      <BottomNavigationAction
        component={Link}
        to="/map"
        label="Map"
        value="map"
        icon={<ExploreOutlinedIcon />}
      />

      <BottomNavigationAction
        component={Link}
        to="/favourite"
        label="Favorites"
        value="favorites"
        icon={<FavoriteBorderOutlinedIcon />}
      />

      <BottomNavigationAction
        component={Link}
        to="/filters"
        label="Filter"
        value="filters"
        icon={<MoreVertOutlinedIcon />}
      />
    </BottomNavigation>
  );
}

export default BottomNav;
