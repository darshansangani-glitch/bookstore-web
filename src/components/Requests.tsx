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
      <div className="w-full! rounded-2xl gap-10 p-2 justify-between min-w-50! border h-full flex mb-3">
        <div className="relative">
          <img src={`${import.meta.env.VITE_SERVER_URL}img/${props.book_image}`} className="w-40 relative h-45 rounded" alt="" />
          <span className="absolute bottom-0 text-white font-bold bg-amber-500 rounded-3xl w-15 justify-center flex text-[10px]">{props.category}</span>
        </div>
        <div className="w-full  flex justify-between">
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl text-black font-bold ">{props.book_name}</h3>
            <span className="text-[15px] text-grey-300">Request Date:  {props.timeStamp}</span>
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

            <span style={{ backgroundColor: props.req_status == 'Pending' ? 'red' : 'green' }} className="p-2 text-white w-20 h-7 items-center  font-bold text-[10px] rounded-4xl flex justify-center border-0 ">{props.req_status !== undefined && props.req_status}</span>
          </div>
        </div>
      </div>
    </>
  );
}
