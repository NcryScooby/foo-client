import { ButtonStyle } from "./style";

type ButtonProps = {
  children: React.ReactNode;
};

export const CategoryButton = ({
  children,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
};
