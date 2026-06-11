import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function MainLayout({
  children
}) {
  return (
    <div className="layout">

      <Sidebar />

      <div className="content">

        <Navbar />

        <div
          className="page-content"
        >
          {children}
        </div>

      </div>

    </div>
  );
}