import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FormLabel from "@material-ui/core/FormLabel";
import FilterCheckBox from "../filter/FilterCheckBox";
const useStyles = makeStyles((theme) => {
  return {
    fullWidth: {
      // width: 100,
    },
    fieldTitle: {
      color: "rgba(0, 0, 0, .6)",
      fontWeight: 600,
      textTransform: "capitalize",
    },
    formBlock: {
      marginTop: 10,
    },
  };
});
function FilterBlock({ blockData: { fieldName, fieldItems } }) {
  const classes = useStyles();
  return (
    <div className={classes.formBlock}>
      <FormLabel>
        <Typography className={classes.fieldTitle} variant="subtitle2">
          {fieldName}
        </Typography>
      </FormLabel>
      <FormGroup className={classes.fullWidth}>
        {fieldItems.map((fieldItems, i) => (
          <FilterCheckBox key={i} name={fieldItems} />
        ))}
      </FormGroup>
    </div>
  );
}

export default FilterBlock;
