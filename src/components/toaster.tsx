import { ReactNode } from "react";
import { Slide, ToastContainer } from "react-toastify";

function Toaster(): ReactNode {
  return (
    <ToastContainer
      position="top-center"
      autoClose={2000}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Slide}
    />
  );
}

export default Toaster;
