// React
import React from "react";
// React
// Models
import { DigitButtonProps } from "../../models/customTypes";
// Models

const DigitButton: React.FunctionComponent<DigitButtonProps> = ({
  dispatch,
  value,
  className,
}) => {
  return (
    <div className={className} onClick={() => dispatch}>
      {value}
    </div>
  );
};

export default DigitButton;
