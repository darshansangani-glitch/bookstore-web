import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store/store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

import { useEffect, useRef } from "react";

interface OutsideClickHandlerProps {
  ref: React.RefObject<HTMLElement>;
  handler: () => void;
}

const useOutsideClick = ({ ref, handler }: OutsideClickHandlerProps) => {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handlerRef.current();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

export default useOutsideClick;
