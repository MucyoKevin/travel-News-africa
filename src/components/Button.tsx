import { useRouter } from "next/navigation";

interface IProps {
  path: string;
  children: React.ReactNode;
}

const Button = ({ path, children }: IProps) => {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.push(`${path}`)}
      className="hidden md:inline uppercase bg-slate-600 text-white px-2 lg;px-8 py-2 lg;py-4 text-xs font-medium hover:bg-slate-900 rounded"
    >
      {children}
    </button>
  );
};

export default Button;
