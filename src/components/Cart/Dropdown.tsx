import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import useOutsideClick, { useAppSelector } from "../../redux/hooks";

interface DropdownItem {
  id: string;
  name: string;
  price: string;
  imageUrl?: string;
}

interface DropdownProps {
  id: string;
  data: DropdownItem[];
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  hasImage?: boolean;
  style?: string;
  selectedId?: string;
  onSelect?: (id: string) => void;
  onChange?: (id: string) => void;
  orderType?: string;
}

const Dropdown = ({
  id,
  data,
  position = "bottom-left",
  style,
  selectedId,
  onSelect,
  onChange,
  orderType,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | undefined>(
    selectedId ? data?.find((item) => item.id === selectedId) : undefined,
  );
  const handleChange = (item: DropdownItem) => {
    setSelectedItem(item);
    onSelect && onSelect(item.id);
    onChange && onChange(item.id);
    setIsOpen(false);
  };

  useEffect(() => {
    if (selectedId && data) {
      const newSelectedItem = data.find((item) => item.id === selectedId);
      if (newSelectedItem) {
        setSelectedItem(newSelectedItem);
        onChange?.(newSelectedItem.id);
      }
    } else {
      setSelectedItem(undefined);
    }
  }, [selectedId, data]);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick({
    ref: dropdownRef as React.RefObject<HTMLElement>,
    handler: () => setIsOpen(false),
  });

  const dropdownClass = `absolute  z-10 mt-2 w-50  bg-white border rounded-xl shadow-lg ${position === "bottom-right" ? "right-0" : ""
    } ${position === "bottom-left" ? "left-0" : ""} ${position === "top-right" ? "right-0 bottom-full mb-2" : ""
    } ${position === "top-left" ? "left-0 bottom-full mb-2" : ""}`;
  const rentBooksData = useAppSelector((s) =>
    s.booksCart.cart.filter((item) => item.orderType == "Rent"),
  );

  const dropdownListItems = data?.map((item) => {
    return (
      <li
        key={item.id}
        onClick={() => handleChange(item)}
        className={`flex  items-center font-medium cursor-pointer  px-4 py-4 h-fit hover:bg-[#d9d2ba4d]  ${item.id == "Rent" ? "rounded-b-xl " : ""} ${item.id === selectedItem?.id ? "bg-gray-100" : ""}`}
        role="menuitem"
      >
        <button
          className="w-full flex flex-col items-start gap-2 leading-5 disabled:opacity-50 group"
          disabled={item.name == "Rent" && rentBooksData.length >= 2}
        >
          <span className={`text-gray-400`}>{item.name}</span>
          <span
            className={`text-[#74642F] font-bold ${item.name == "Rent" && rentBooksData.length >= 2 ? "text-gray-300" : ""}`}
          >
            {item.id !== "" ? `$${item.price}` : ""}
          </span>
        </button>
      </li>
    );
  });
  return (
    <div ref={dropdownRef} className="relative font-plus">
      <button
        id={id}
        aria-label="Toggle dropdown"
        aria-haspopup="true"
        aria-expanded={isOpen}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex w-50 items-center text-[20px] justify-between px-6 gap-3 transition-all font-medium text-gray-500 hover:border-gray-500 py-3 bg-white border-2 rounded-[20px] border-gray-300 ${style} ${orderType !== "" ? (orderType === "Buy" ? "" : "") : ""}`}
      >
        <span className="flex flex-col text-[18px] items-start">
          {orderType || "Select Type"}
          {selectedItem?.id !== undefined ? (
            <span className="font-bold">${selectedItem?.price}</span>
          ) : null}
        </span>
        <GoChevronDown
          size={20}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>
      {isOpen && (
        <div
          aria-label="Dropdown menu"
          className={`${dropdownClass}  border-gray-400  font-plus text-[20px]`}
        >
          <ul
            role="menu"
            aria-labelledby={id}
            aria-orientation="vertical"
            className="leading-10"
          >
            <li
              key={"select-type"}
              onClick={() =>
                handleChange({ id: "", name: "Select Type", price: "" })
              }
              className={`flex  items-center cursor-pointer px-4 rounded-t-xl hover:bg-[#d9d2ba4d] text-gray-400 ${!selectedItem?.id ? "bg-gray-100" : ""}`}
              role="menuitem"
            >
              <span>Select Type</span>
            </li>
            {dropdownListItems}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
