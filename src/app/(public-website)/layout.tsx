import Footer from "@/components/public-website/footer";
import Header from "@/components/public-website/header";
import { ReactNode } from "react";

const WebsiteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
