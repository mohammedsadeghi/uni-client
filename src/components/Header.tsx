import React from "react";

type HeaderProps = {
  title: string;
};
export const Header: React.FC<HeaderProps> = ({ title }) => {
  return <h3 className="font-family__PinyonScript header">{title}</h3>;
};
