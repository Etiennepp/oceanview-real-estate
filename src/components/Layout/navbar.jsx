import React from "react";

export default function Navbar() {
     return (
          <div className="w-full fixed top-0 h-[96px] px-4 py-2 flex z-50 text-white bg-gradient-to-t  from-transparent justify-center to-black/40">
               <div className="h-full flex gap-4 items-center">
                    <img
                         src="/img/logo.png"
                         className="h-full drop-shadow-lg"
                    />
                    <div className="flex flex-col h-full justify-center text-[40px]">
                         <p className="font-pacifico [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                              OceanView
                         </p>
                         {/* <p className="font-julius">REAL ESTATE</p> */}
                    </div>
               </div>
          </div>
     );
}
