import { useState } from "react";
import Header from "../components/Header.js";
import RequestCard from "../components/Requests.js";

interface Requests {
  _id: string;
  book_id: string;
  timestamp: string;
  req_status: string;
  bookDetails: {
    book_name: string;
    description: string;
    author: string;
    category: string;
    quantity: number;
    book_image: string;
  };
}

export default function BookRequests() {
  const [request, setRequest] = useState<Requests[]>();

  const token = localStorage.getItem('token-info')

  const fetchRequests = async ()=>{
    try {
      const url = `${import.meta.env.VITE_API_URL}/request/find`
      const response = await fetch(url, {
        method:'GET',
        headers:{       
          Authorization: token ? ` ${token}` : "",
        }
      });
      if(!response.ok){
        const errorText = await response.text();
        console.error("Server error response:", errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      
    }
  }
  return (
    <>
      <Header />
      <main>
        <RequestCard />
      </main>
    </>
  );
}
