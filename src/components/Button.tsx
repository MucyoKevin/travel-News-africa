// @ts-nocheck

import Link from "next/link";
import { useRouter } from "next/navigation";
import clsx from "clsx";
interface IProps {
  path?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({ path, children, onClick, className }: IProps) => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push(`${path}`);
  };

  return (
    <Link
      href={path ? `${path}` : "#"}
      onClick={onClick || handleClick}
      className={clsx(
        className,
        `flex justify-center items-center uppercase bg-slate-600 text-white p-1 sm:p-2  sm:text-xs text-sm font-medium hover:bg-slate-900 rounded max-w-fit`
      )}
    >
      {children}
    </Link>
  );
};

export default Button;
