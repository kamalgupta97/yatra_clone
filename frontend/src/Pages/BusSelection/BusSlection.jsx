import React, { useState } from "react";
import SelectionCard from "./BusSelectionCard";
import CancelationPolicy from "./CancelationPolicy";

const BusSlection = () => {
  const [showCancelPolicy, setShowCancelPolicy] = useState(false);
  const handleCancelPolicy = () => {
    setShowCancelPolicy(!showCancelPolicy);
  };
  return (
    <>
      <h1>Bus selection</h1>
      <SelectionCard handleCancelPolicy={handleCancelPolicy} />
      {showCancelPolicy ? <CancelationPolicy /> : null}
    </>
  );
};

export default BusSlection;
