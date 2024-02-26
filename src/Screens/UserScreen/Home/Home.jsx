
import { useEffect } from "react";
import Explore from "../../../Component/UserComponent/HomeComponent/Explore";
import HomePortal from "../../../Component/UserComponent/HomeComponent/HomePortal";
import Footer from "../../../Layouts/Footer";
import Header from "../../../Layouts/Header";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Explore />
      <HomePortal />
      <Footer />
    </>
  );
}

export default Home;
