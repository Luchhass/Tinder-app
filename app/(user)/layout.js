import Header from "@/components/header";
import Navigation from "@/components/navigation";

export default function UserLayout({ children }) {
  return (
    <div className="container">
      <Header />
      
      <div className="content">
        {children}
        <Navigation />
      </div>
    </div>
  );
}
