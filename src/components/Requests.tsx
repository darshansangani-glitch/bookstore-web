interface MyProps<T> {
  category: T,
  book_name: T,
  id: T,
  book_image: T,
  timeStamp: string,
  // deleteRecord: (request: T) => Promise<void>;
  req_status: 'Pending' | 'Approved'
}

export default function RequestCard(props: MyProps<string>) {
  return (
    <>
      <div className="max-w-250 h-76 border-2 rounded-2xl border-gray-300 flex  gap-2  mb-10 shadow-2xl shadow-gray-300">
          <img src={`${import.meta.env.VITE_SERVER_URL}img/${props.book_image}`} className="w-55 rounded-xl h-75" alt="" />
       
        <div className="flex w-110 justify-between flex-col p-3  ">
          <div className="flex items-center justify-between">
          <span className="  text-white font-extrabold text-[15px] bg-orange-300  rounded-2xl pl-4 pr-4 p-1 ">{props.category}</span>
          <span style={{ backgroundColor: props.req_status == 'Pending' ? 'red' : 'green' }} className="text-white font-extrabold text-[15px] bg-orange-300  rounded-2xl pl-4 pr-4 p-1 ">{props.req_status !== undefined && props.req_status}</span>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl text-black font-bold line-clamp-2 overflow-hidden ">{props.book_name}</h3>
            <span className="text-[18px] text-grey-300">Request Date:  {props.timeStamp}</span>
          </div>
          <div className="flex flex-col justify-between  items-end">
            {props.req_status == 'Approved' ? <button className="p-2 bg-amber-400 w-30 rounded-2xl text-white font-bold">Return</button> : null}
            {/* // : <button onClick={() => {if (
            //   confirm(
            //     "Are you sure you want to delete this record?",
            //   )
            // ) {
            //   props.deleteRecord(props.request._id? props.request._id: '');
            // }}
            // } className="p-2 text-red-500! text-xl w-20! flex justify-center rounded-2xl  font-bold"><FaTrash /></button>} */}

            
          </div>
        </div>
      </div>
    </>
  );
}
