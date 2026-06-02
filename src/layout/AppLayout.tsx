import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import Protected from "../components/Protected";
import ScrollToTop from "../components/ScrollToTop";
import SocialNav from "../components/Header/SocialNav";

export default function AppLayout() {
  return (
    <>
      <div className="w-full flex flex-col justify-center">
        <ScrollToTop />
        <div className="sticky top-0 z-1030">
          <SocialNav />
          <Header />
        </div>
        <Protected />
        <Footer />
      </div>
    </>
  );
}
