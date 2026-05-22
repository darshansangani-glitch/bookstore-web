import { ClipLoader } from "react-spinners";

export default function ClipLoading({
  color,
  size,
}: {
  color?: string;
  size?: number;
}) {
  const override = {
    borderWidth: "3px", // Increase this value to make the line thicker
  };
  return (
    <div className="w-full  h-full  flex items-center justify-center relative ">
      <ClipLoader
        size={size ? size : 30}
        cssOverride={override}
        color={color ? color : "#686769"}
      />
    </div>
  );
}
