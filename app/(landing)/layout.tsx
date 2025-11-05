import { ReactChildren } from "@/lib/const/types";

const LandingLayout = ({ children }: ReactChildren) => {
  return (
    <main className="h-full bg-[#111827] overflow-auto">
      <div className="mx-auto max-w-screen-xl w-full h-full">{children}</div>
    </main>
  );
};

export default LandingLayout;
