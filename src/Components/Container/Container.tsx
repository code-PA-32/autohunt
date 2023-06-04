import { ContainerProps } from "@mui/material";

export const Container = (props: ContainerProps) => {
  return <main className={props.className}>{props.children}</main>;
};
