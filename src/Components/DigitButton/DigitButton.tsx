// React
import React from "react";
// React

type DigitButtonProps = {
  className?: string;
  value: string;
  onClick: Function;
};

const DigitButton: React.FunctionComponent<DigitButtonProps> = ({
  onClick,
  value,
  className,
}) => {
  return (
    <div
      className={className}
      onClick={() => {
        onClick();
      }}
    >
      {value}
    </div>
  );
};

export default DigitButton;
