import React, { useEffect } from "react";
import ScrollerItem from "../components/Home/ScrollerItem";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/all";
import { ScrollTrigger } from "gsap/all";
import Button from "../components/Button";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const Properties = [
     {
          imageUrl: "/img/property1.jpg",
     },
     {
          imageUrl: "/img/property2.jpg",
     },
     {
          imageUrl: "/img/property3.jpg",
     },
     {
          imageUrl: "/img/property4.jpg",
     },
];

export default function Home() {
     useEffect(() => {
          const tl = gsap.timeline({ repeat: 0 });
          tl.to(".background", {
               width: "175vw",
               stagger: 0.3,
               ease: "power2.out",
               duration: 1.5,
          });
          tl.fromTo(
               ".diagonal-item",
               {
                    y: "-600%",
                    opacity: 0,
               },
               {
                    y: 0,
                    opacity: 1,
                    stagger: 0.05,
                    ease: "power2.out",
                    duration: 1,
                    onComplete: () => {
                         document
                              .querySelector(".property-container")
                              .classList.toggle("pointer-events-none");
                    },
               },
               ">-1.4"
          );

          ScrollSmoother.create({
               smooth: 0.8, // how long (in seconds) it takes to "catch up" to the native scroll position
               effects: true, // looks for data-speed and data-lag attributes on elements
               smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
          });
     }, []);

     return (
          <div id="smooth-wrapper">
               <div id="smooth-content">
                    <section>
                         <div className="absolute top-0 left-0 h-screen w-screen overflow-hidden">
                              <div className="background bg-secondary rounded-full -translate-x-1/2 -translate-y-1/2 absolute top-0 left-1/3 aspect-square"></div>
                              <div className="background bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 absolute top-0 left-1/3 aspect-square"></div>
                         </div>
                         <div className="relative">
                              <div className="h-screen w-screen overflow-hidden">
                                   <div className="property-container h-full w-full flex flex-row pointer-events-none">
                                        {Properties.map((property, index) => (
                                             <ScrollerItem
                                                  key={index}
                                                  hoverCallback={() =>
                                                       itemHoverCallback(index)
                                                  }
                                                  className={
                                                       "diagonal-item bg-red-400"
                                                  }
                                                  imageUrl={property.imageUrl}
                                             />
                                        ))}
                                   </div>
                                   <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                                        <Button primary label={"Learn more"} />
                                   </div>
                              </div>
                         </div>
                    </section>
                    <section className="h-screen w-full bg-red-300"></section>
               </div>
          </div>
     );
}
