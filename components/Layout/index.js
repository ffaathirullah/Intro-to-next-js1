import Header from "./../Header";
import { ReactNode } from "react";

const children: ReactNode;

export default function Layout(props: children) {
  const { children } = props;
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}
