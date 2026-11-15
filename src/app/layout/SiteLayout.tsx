import { Outlet } from "react-router";
import { Navbar } from "../../components/navigation/Navbar";
import { Footer } from "../../components/navigation/Footer";

export function SiteLayout() {
  return (
    <div className="site-shell">
      <Navbar />
      <main><Outlet /></main>
      <Footer />
    </div>
  );
}