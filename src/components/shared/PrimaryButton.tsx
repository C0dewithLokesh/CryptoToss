import React from "react";
import { Button } from "../ui/button";

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  title: string;
  position?: "left" | "right";
  otherClasses?: string;
  textClasses?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  icon,
  title,
  position = "left",
  otherClasses,
  textClasses,
  ...props
}) => {
  return (
    <Button
      className={`flex items-center gap-3 bg-gradient-to-b from-[#1A1A1A] to-[#262626] rounded-2xl py-[10px] px-5 ${otherClasses}`}
      {...props}
    >
      {position === "left" && icon}
      <span className={`${textClasses}`}>{title}</span>
      {position === "right" && icon}
    </Button>
  );
};

export default PrimaryButton;
