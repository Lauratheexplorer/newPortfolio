import React, { useEffect } from "react";


const loader = document.querySelector(".preloader");

const showLoader = () => loader.classList.remove("preloader");
const addClass = () => loader.classList.add("loader-hide");

const Loader = () => {
  useEffect(() => {
    showLoader();
    addClass();
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
    </div>
  );
};

export default Loader;

