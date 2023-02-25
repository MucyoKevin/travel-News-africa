import { ReactNode, ComponentType } from "react";

interface ISmBtnProps {
  children?: ReactNode;
  icon: ComponentType<any>;
}

const IconBtn = ({ children, icon }: ISmBtnProps) => {
  const Icon = icon;
  return (
    <button className="hover:bg-gray-100 p-2 mr-2 flex border border-solid border-gray-800 rounded-full text-gray-800">
      <Icon className="text-gray-800" width="24px" height="24px" />
      {children}
    </button>
  );
};

export default IconBtn;
