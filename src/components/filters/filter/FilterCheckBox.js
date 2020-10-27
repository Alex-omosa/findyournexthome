import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles((theme) => {
  return {
    labelSelected: {
      color: theme.palette.secondary.main,
      fontSize: 10,
      paddingBottom: 1,
      paddingTop: 1,
    },
    label: {
      fontSize: 10,
      paddingBottom: 1,
      paddingTop: 1,
      color: "rgb(169,169,169)",
    },
    fullWidth: {
      width: 100,
    },
  };
});
function FilterCheckBox({ name }) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const classes = useStyles();
  return (
    <FormControl component="fieldset">
      <FormControlLabel
        label={name}
        className={checked ? classes.labelSelected : classes.label}
        control={<Checkbox checked={checked} onChange={handleChange} />}
      />
    </FormControl>
  );
}

export default FilterCheckBox;
