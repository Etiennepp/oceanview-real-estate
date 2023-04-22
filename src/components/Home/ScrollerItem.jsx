import { gsap } from "gsap";
import React, { useRef } from "react";

export default function ScrollerItem({ imageUrl, className }) {
     const container = useRef();
     const image = useRef();

     const handeMouseEnter = () => {
          gsap.to(container.current, {
               flex: 2,
               transformOrigin: "center",
               duration: 0.6,
               ease: "power4.out",
               overwrite: true,
               webkitFilter: "brightness(1.1)",
               filter: "brightness(1.1)",
          });
          gsap.to(image.current, {
               scale: 1.2,
               ease: "expo.out",
               duration: 1.6,
               overwrite: true,
          });
     };

     const handeMouseLeave = () => {
          gsap.to(container.current, {
               flex: 1,
               transformOrigin: "center",
               duration: 0.6,
               ease: "power4.out",
               overwrite: true,
               webkitFilter: "brightness(.90)",
               filter: "brightness(.90)",
          });
          gsap.to(image.current, {
               scale: 1,
               duration: 0.6,
               ease: "power4.out",
               overwrite: true,
          });
     };

     return (
          <div
               className={`flex-1 ${className} brightness-[.9] origin-bottom transition-transform duration-300 ease-out cursor-pointer overflow-hidden`}
               ref={container}
               onMouseEnter={handeMouseEnter}
               onMouseLeave={handeMouseLeave}
          >
               <img
                    className="absolute top-0 left-0 w-full h-full object-cover object-center"
                    src={imageUrl}
                    ref={image}
               />
          </div>
     );
}
