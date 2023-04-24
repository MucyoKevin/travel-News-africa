import React from "react";
import clsx from "clsx";

interface IProps {
  className?: string;
}

function Loading({ className }: IProps) {
  return <span className={clsx(className, "loader")}></span>;
}

export default Loading;
