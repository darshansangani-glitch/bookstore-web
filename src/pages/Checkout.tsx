import { createContext, SubmitEvent, useEffect, useState } from "react";
import CheckoutOrderSummary from "../components/Checkout/CheckoutOrderSummary";
import PaymentMethod from "../components/Checkout/PaymentMethod";
import PageHeader from "../components/PageHeader";
import {
  BooksData,
  CheckoutData,
  CheckoutPaymentsDataProps,
  FormData,
  FormErrors,
} from "../interfaces/interface";
import {
  checkoutSchema,
  upiIdValidation,
} from "../validation/checkoutValidation";
import { z } from "zod";
import { useAppSelector } from "../redux/hooks";
import { api } from "../utils/api";

export const PaymentMethodsContext =
  createContext<CheckoutPaymentsDataProps | null>(null);

export default function CheckoutPage() {
  const BooksData = useAppSelector((s) =>
    s.booksCart.cart.filter((item) => item.orderType !== ""),
  );
  const token = useAppSelector((s) => s.auth.token);

  const addressId = useAppSelector((s) => s.booksCart.address_id);
  const [errors, setErrors] = useState<FormErrors | string | null>(null);
  // console.group("error",errors)
  const [paymentData, setPaymentData] = useState<FormData>({
    cardNumber: "",
    holderName: "",
    expiry: "",
    cvv: "",
  });
  const [books, setBooks] = useState<BooksData[]>([]);
  const [type, setType] = useState<"Cod" | "Credit/Debit" | "UPI">("Cod");
  const [checkoutOrder, setCheckoutOrder] = useState<CheckoutData | null>();
  const [upiId, setUpiId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const validateCardDetails = (
    details: FormData | string,
  ): FormErrors | null => {
    try {
      console.log(details);
      const parsedDetails = checkoutSchema.parse(details);
      console.log(parsedDetails)
      return null;
    } catch (error) {
      if (error instanceof z.ZodError) {
        return error.flatten().fieldErrors;
      } else {
        console.error("Unexpected error: ", error);
      }
      return {};
    }
  };

  const validateUPIDetails = (details: string) => {
    try {
      const parsedDetails = upiIdValidation.parse(details);
      console.log("Parsed Details", parsedDetails);
      return null;
    } catch (error) {
      if (error instanceof z.ZodError) {
        return z.treeifyError(error).errors[0];
      } else {
        console.error("Unexpected error: ", error);
      }
      return null;
    }
  };

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      let newErrors = null;
      if (type !== "Cod") {
        if (type === "Credit/Debit") {
          newErrors = validateCardDetails(paymentData);
        }
        if (type === "UPI") {
          newErrors = validateUPIDetails(upiId);
          console.log("newErrors", newErrors);
        }
        setErrors(newErrors);
      }
      console.log(newErrors);
      if (newErrors == null) {
        setLoading(true);
        const result = await api.post(
          "/book/checkout",
          checkoutOrder,
          token ? token : "",
        );
        if (result) {
          console.log(result.message);
        }
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const booksData = BooksData.map((items) => {
      const newBook = { type: items.orderType, book_id: items._id };
      return newBook;
    });
    setBooks([...booksData]);
  }, [token]);

  useEffect(() => {
    setCheckoutOrder({
      ...checkoutOrder,
      purchase_type: type,
      payment_details:
        type === "Credit/Debit"
          ? paymentData
          : type === "UPI"
            ? { upi_id: upiId }
            : {},
      address_id: addressId,
      books: books,
    });
  }, [type, paymentData, books, upiId, addressId]);

  return (
    <div className="flex flex-col justify-center items-center h-fit">
      <PageHeader
        previousPagePath="/cart"
        path="cart"
        pageName="Payment"
        pageTitle="Payment"
        previousPage="Cart"
      />
      <div className="2xl:w-355 xl:w-280 md:w-180 flex-col sm:w-170 w-full flex xl:flex-row gap-5 justify-center my-10">
        <PaymentMethodsContext
          value={{
            paymentData,
            setPaymentData,
            errors,
            setUpiId,
          }}
        >
          <PaymentMethod
            handleSubmit={handleSubmit}
            setType={setType}
            loading={loading}
          />
        </PaymentMethodsContext>
        <CheckoutOrderSummary />
      </div>
    </div>
  );
}
