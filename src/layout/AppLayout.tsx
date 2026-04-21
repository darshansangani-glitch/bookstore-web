import Footer from "../components/Footer";
import Header from "../components/Header";
import Protected from "../components/Protected";

export default function AppLayout() {
  return (
    <>
      <div className="w-fit  flex flex-col flex-1  m-0! p-0!">
        <Header />
        <Protected />
        <Footer />
      </div>
    </>
  )
}
