import { MouseEvent } from "react";
import styles from "./styles.module.scss";


export type ButtonStyle = "primary " | "dark";


type Props = {
  type?: ButtonStyle;
  children?: React.ReactNode;
  htmlType?: "button",
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className: string
};

const Button = ({
  onClick,
  children,
 // type = "primary",
  htmlType = "button",
  className
}:Props) => {
  return (
    <button
      type={htmlType}
      onClick={onClick}
      className={(styles.container, className)}
    >
    {children}
    </button>
  );
};

export default Button;
