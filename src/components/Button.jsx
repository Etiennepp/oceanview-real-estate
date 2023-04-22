import React from "react";

const defaultClass = `px-4 py-2 font-raleway font-semibold text-white border border-secondary rounded-xl drop-shadow-xl`;
const primaryClass = `bg-secondary text-white`;

export default function Button({
     label,
     primary = false,
     onClick = undefined,
     className,
}) {
     return (
          <button
               onClick={onClick}
               className={`${defaultClass} ${className} ${
                    primary ? primaryClass : ""
               }`}
          >
               {label}
          </button>
     );
}
