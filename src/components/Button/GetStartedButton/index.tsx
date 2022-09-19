import React, { HTMLProps } from "react";
import styles from "./styles.module.scss";

export type ButtonStyle = "primary" | "default";

type ButtonProps= HTMLProps<HTMLButtonElement> & {
  className?: string;
  type?: ButtonStyle;
  onClick?: (event: React.MouseEvent) => void;
  htmlType?: "button"
}

const GetStartedButton = ({
  htmlType,
  children,
  className,
  type = "primary",
  onClick,
  ...rest
}: ButtonProps) => {

  return (
    <button 
      className={styles.button}
      type={htmlType}
      onClick={onClick}
      {...rest}
    >
      <span>GetStarted</span>
    </button>
  );
};

export default GetStartedButton;
