import Navigation from "@/components/navigation";

export default function UserLayout({ children }) {
  return (
    <div className="container">
      <div className="content">
        {children}
        <Navigation />
      </div>
    </div>
  );
}
