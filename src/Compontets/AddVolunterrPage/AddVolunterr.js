import React from "react";
import UseAuth from "../../Hooks/UseAuth";

const AddVolunterr = () => {
  const { selectedService } = UseAuth();
  return (
    <div>
      <h1>This is Add Volunterr Page {selectedService.name}</h1>
    </div>
  );
};

export default AddVolunterr;
