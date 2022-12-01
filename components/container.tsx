import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => {
  return (<div className="max-w-[1200px] m-auto p-2 px-4">{children}</div>);
};
