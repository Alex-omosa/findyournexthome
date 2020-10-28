import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
const useStyles = makeStyles({
  root: {
    // width: 500,
  },
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
});
function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    // setValue(newValue);
  };
  return (
    <BottomNavigation
      className={classes.stickToBottom}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeOutlinedIcon />}
      />
      <BottomNavigationAction
        label="Search"
        value="search"
        icon={<SearchOutlinedIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Filter"
        value="filter"
        icon={<MoreVertOutlinedIcon />}
      />
    </BottomNavigation>
  );
}

export default BottomNav;
