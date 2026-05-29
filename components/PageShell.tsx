import { Header } from "./Header";
import { Footer } from "./Footer";

type PageShellProps = {
  children: React.ReactNode;
  activePath?: string;
  className?: string;
};

export function PageShell({
  children,
  activePath,
  className = "",
}: PageShellProps) {
  return (
    <div className={`flex min-h-screen w-full min-w-0 flex-col ${className}`}>
      <Header activePath={activePath} />
      <main className="min-w-0 flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
}
