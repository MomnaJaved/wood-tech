import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "404 | This page could not be found.";
  });
  return (
    <div className="w-screen h-screen bg-black text-white flex items-center justify-center">
      <h1 className="text-1xl ">404 | This page could not be found.</h1>
    </div>
  );
};

export default Contact;
