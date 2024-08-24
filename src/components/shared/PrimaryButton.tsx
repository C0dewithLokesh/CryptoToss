import React from "react";
import { Button } from "../ui/button";

const PrimaryButton = ({
  icon,
  title,
  position = "left",
  otherClasses,
  textClasses,
}: {
  icon?: React.ReactNode;
  title: string;
  position?: string;
  otherClasses?: string;
  textClasses?: string;
}) => {
  return (
    <Button
      className={`flex items-center gap-3 bg-gradient-to-b from-[#1A1A1A] to-[#262626] rounded-2xl py-[10px] px-5 ${otherClasses}`}
    >
      {position === "left" && icon}
      <span className={`${textClasses}`}>{title}</span>
      {position === "right" && icon}
    </Button>
  );
};

export default PrimaryButton;
