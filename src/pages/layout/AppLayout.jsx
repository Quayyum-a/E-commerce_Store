import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import AppLayoutLoader from "../../components/AppLayoutLoader";
import Footer from "../../components/Footer";

const AppLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if(isLoading) return <AppLayoutLoader />

  return (
    <div className="flex flex-col min-h-screen">
      <Header onSearch={setSearchTerm} />
      <main className="flex-grow overflow-y-auto pt-8">
        <div className="mx-auto  py-6">
          <Outlet context={searchTerm} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
