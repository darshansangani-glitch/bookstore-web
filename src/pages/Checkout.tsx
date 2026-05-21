import CheckoutOrderSummary from "../components/Checkout/CheckoutOrderSummary";
import PaymentMethod from "../components/Checkout/PaymentMethod";
import PageHeader from "../components/PageHeader";

export default function CheckoutPage() {
  return (
    <div className="flex flex-col justify-center items-center h-fit">
      <PageHeader
        previousPagePath="/cart"
        path="cart"
        pageName="Payment"
        pageTitle="Payment"
        previousPage="Cart"
      />
      <div className="xl:w-355 md:w-180 flex-col sm:w-170 w-screen flex xl:flex-row gap-5 justify-center my-10">
        <PaymentMethod />
        <CheckoutOrderSummary />
      </div>
    </div>
  );
}
