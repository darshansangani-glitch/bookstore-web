
import Footer from "../components/Footer";
import Header from "../components/Header";
import Protected from "../components/Protected";
import ScrollToTop from "../components/ScrollToTop";
import SocialNav from "../components/SocialNav";

export default function AppLayout() {
  return (
    <>
      <div className="w-full flex flex-col justify-center">
        <ScrollToTop />
        <div className="sticky overflow-hidden top-0 z-1030">
          <SocialNav />
          <Header />
        </div>
        <Protected />
        <Footer />
      </div>
    </>
  );
}
