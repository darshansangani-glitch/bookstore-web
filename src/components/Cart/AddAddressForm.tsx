import { RxCross1 } from "react-icons/rx";

interface AddAddressFormProps {
  loading: boolean;
  error: string;
  addOpen: boolean;
  setAddress: React.Dispatch<
    React.SetStateAction<{
      street: string;
      city: string;
      zipCode: string;
      state: string;
    }>
  >;
  handleAddAddress: () => void;
  setAddOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddAddressForm(props: AddAddressFormProps) {
  return (
    <div
      className={`fixed inset-0 z-4000 flex items-center justify-center transition-opacity ${props.addOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
        }`}
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        style={{
          WebkitBackdropFilter: "blur(6px)",
          backdropFilter: "blur(6px)",
        }}
      />
      <div
        className="w-screen h-full flex justify-center items-center relative -top-8 left-auto p-8 rounded-2xl"
        style={{ left: "-230px" }}
      >
        <form className="w-130.5  h-fit left-60 border right-50  bg-white flex flex-col  rounded-2xl items-center z-20 ">
          <div className="relative p-5  w-full flex justify-between border-b border-b-gray-300">
            <span className="text-xl font-bold  text-gray-400">
              Add Address
            </span>
            <button
              className="text-xl hover:bg-gray-50 p-1 rounded-3xl cursor-pointer"
              type="button"
              onClick={() => props.setAddOpen((prev) => !prev)}
            >
              <RxCross1 />
            </button>
          </div>

          <div className="w-full p-5 flex flex-col gap-3 text-[16px] font-medium font-plus">
            <label>
              Street:
              <textarea
                rows={3}
                name="street"
                id="street"
                className="w-full border p-2 font-medium rounded-lg my-2 focus:outline-none focus:ring-1 focus:ring-[#74642F]"
                placeholder="Enter Your Street Details Here"
                onChange={(e) => {
                  props.setAddress((prev) => ({
                    ...prev,
                    street: e.target.value,
                  }));
                }}
                required
              />
            </label>
            <div className="flex gap-5">
              <label className="w-1/2 flex flex-col">
                City:
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="border p-2 font-medium rounded-lg my-2 focus:outline-none focus:ring-1 focus:ring-[#74642F]"
                  placeholder="Surat"
                  onChange={(e) => {
                    props.setAddress((prev) => ({
                      ...prev,
                      city: e.target.value,
                    }));
                  }}
                  required
                />
              </label>
              <label className="w-1/2 flex flex-col">
                Zipcode:
                <input
                  type="text"
                  name="zipcode"
                  id="zipcode"
                  className="border p-2 font-medium rounded-lg my-2 focus:outline-none focus:ring-1 focus:ring-[#74642F]"
                  placeholder="394107"
                  onChange={(e) => {
                    props.setAddress((prev) => ({
                      ...prev,
                      zipCode: e.target.value,
                    }));
                  }}
                  required
                />
              </label>
            </div>
            <label className="flex flex-col">
              State:
              <input
                type="text"
                name="state"
                id="state"
                className="border p-2 font-medium rounded-lg my-2 focus:outline-none focus:ring-1 focus:ring-[#74642F]"
                placeholder="Gujarat"
                onChange={(e) => {
                  props.setAddress((prev) => ({
                    ...prev,
                    state: e.target.value,
                  }));
                }}
                required
                aria-required='true'
              />
            </label>
            {props.error !== "" ? <span>{props.error}</span> : ""}
            <button
              type="button"
              className="h-15 border rounded-lg bg-[#74642F] text-white hover:bg-[#5a4d26] transition delay-50 duration-150 ease-in-out hover:-translate-y-1 hover:scale-105 "
              onClick={props.handleAddAddress}
            >
              Add Address
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
