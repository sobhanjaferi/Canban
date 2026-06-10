import { ReactNode } from "react";
import { ToastContainer, Zoom } from "react-toastify";

function Toaster(): ReactNode {
  return (
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Zoom}
    />
  );
}

export default Toaster;
