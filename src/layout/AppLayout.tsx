import Footer from "../components/Footer";
import Header from "../components/Header";
import Protected from "../components/Protected";
import ScrollToTop from "../components/ScrollToTop";
import SocialNav from "../components/SocialNav";

export default function AppLayout() {
  return (
    <>
      <div className="w-full!  flex flex-col flex-1  m-0! p-0! justify-center!">
        <ScrollToTop />
        <SocialNav />
        <Header />
        <Protected />
        <Footer />
      </div>
    </>
  )
}
