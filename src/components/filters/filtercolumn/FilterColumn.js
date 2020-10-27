import React, { useState, useEffect } from "react";
import FilterBlock from "./../filterBlock/FilterBlock";
const data = [
  {
    fieldName: "propery Types",
    fieldItems: ["House", "Room", "Townhall", "Parking"],
  },
  {
    fieldName: "Style Of Home",
    fieldItems: ["A-frame", "Bungalow", "Cottage", "Dome", "Spanish"],
  },
  {
    fieldName: "accessibility Features",
    fieldItems: ["Ramp", "GrabBar", "Low counter hieghts"],
  },
];
const fetchFieldData = (data) => data;

function FilterColumn() {
  const [fieldData, setfieldData] = useState([]);

  useEffect(() => {
    setfieldData(fetchFieldData(data));
  }, []);

  return (
    <div>
      {fieldData.map((data, i) => (
        <FilterBlock key={i} blockData={data} />
      ))}
    </div>
  );
}

export default FilterColumn;
