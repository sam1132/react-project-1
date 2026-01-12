/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export const Button = ({ children, disabled,to }) => {
  const className = "sm:px-6 sm:py-4 bg-yellow-400 uppercase tracking-wide rounded-full font-semibold text-stone-800 py-3 px-4 inline-block  hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2"
  
  if(to) return <Link className={className} to={to}>{children}</Link>
  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
};
