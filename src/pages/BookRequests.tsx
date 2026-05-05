import { useEffect, useState } from "react";
import Header from "../components/Header.js";
import RequestCard from "../components/Requests.js";
import { useAppSelector } from "../redux/hooks.js";
import { api } from "../utils/api.js";
import Intro from "../components/Intro.js";
import bg1 from '../assets/hobbitbg.jpg'

export interface Requests {
  _id?: string;
  user_id?: string;
  book_id?: string;
  timestamp?: string;
  req_status?: "Pending" | "Approved";
  BookDetails:
  {
    _id: string;
    book_name: string;
    description: string;
    author: string;
    category: string;
    quantity: string;
    book_image: string;
    book_image_filename: string;
  }[],
}

export default function BookRequests() {
  const token = useAppSelector((s) => s.auth.token);

  const [request, setRequest] = useState<Requests[]>([
    {
      _id: "",
      user_id: "",
      book_id: "",
      timestamp: "",
      req_status: "Pending",
      BookDetails: [
        {
          _id: "",
          book_name: "",
          description: "",
          author: "",
          category: "",
          quantity: "",
          book_image: "",
          book_image_filename: "",
        },
      ],
    },
  ]);

  const LoadRequests = async () => {
    try {
      const data = await api.get('/request/find', token ? token : "");
      console.log("data", data);
      const withIds = data.map((item: Requests) =>
        item._id ? item : { ...item, _id: item._id },
      );
      setRequest(withIds);
    } catch (error) {
      if (error) {
        console.log({ message: error });
      }
    }
  };

  // const deleteRecord = async (row: Requests) => {
  //   try {
  //     await api.delete(`/request/delete/${row._id}`, token ? token : "");
  //     console.log(row)
  //     setRequest((prev) => prev.filter((record) => record._id !== row._id));
  //     return { success: true };
  //   } catch (error) {
  //     console.error("Error deleting record:", error);
  //     return { success: false, error: error };
  //   }
  // };

  useEffect(() => {
    LoadRequests();
  }, []);

  const requestData = request.map((r: Requests) => {
    return (
      <RequestCard
        key={r._id}
        id={r._id ? r._id : ''}
        category={r.BookDetails[0].category}
        book_name={r.BookDetails[0].book_name}
        req_status={r.req_status ?? "Pending"}
        timeStamp={r.timestamp ?? ""}
        book_image={r.BookDetails[0]._id}
      />
    );
  });

  return (
    <>
      <Header />
      <div className="w-full justify-center ">
        <Intro title={'Book Requests'} content={'Get Your All Requests and After Reading your book Return them...'} src={bg1} />
        <section className="flex my-20 flex-1 justify-center w-full ">
          <div className="grid grid-cols-2 gap-5">
            {requestData}
          </div>
        </section>
      </div>
    </>
  );
}
