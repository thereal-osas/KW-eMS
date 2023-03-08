import { Audio } from "react-loader-spinner";

function loader() {
  return (
    <div className="flex justify-center items-center w-screen h-screen absolute  bg-gray-400">
      <Audio
        height="200"
        width="200"
        radius="9"
        color="light-blue"
        ariaLabel="three-dots-loading"
        // wrapperStyle
        // wrapperClass
      />
    </div>
  );
}
export default loader;
