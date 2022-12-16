// React
import React from "react";
// React
// Models
import { DigitButtonProps } from "../../models/customTypes";
// Models

const DigitButton: React.FunctionComponent<DigitButtonProps> = ({
  onClick,
  value,
  className,
}) => {
  return (
    <div className={className} onClick={() => onClick()}>
      {value}
    </div>
  );
};

export default DigitButton;
