import React, {useState} from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'

function App() {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
      })
      .to(".vi-mask-group",{
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "Expo.easeInOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function(){
          if(this.progress() >= .9){
            document.querySelector('.svg').remove();
            setShowContent(true);
            this.kill(); // Stop the animation once complete
          }
        }
      })
  });

  useGSAP(() => {

    if (!showContent) return;

    gsap.to(".main",{
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky",{
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg",{
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character",{
      scale: 1.5,
      x: "-50%",
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      bottom: "1%",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text",{
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function(e){
      const xMove = (e.clientX / window.innerWidth - .5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
       <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <mask id="viMask">
            <rect width="100%" height="100%" fill="black" />
            <g className="vi-mask-group">
              <text
                x="50%"
                y="50%"
                fontSize="250"
                textAnchor="middle"
                fill="white"
                dominantBaseline="middle"
                fontFamily="Arial Black"
              >
                VI
              </text>
            </g>
          </mask>
        </defs>
        <image
          href="./bg.png"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className='main w-full rotate-[-10deg] scale-[1.7]'>
          <div className='landing overflow-hidden relative w-full h-screen bg-black'>
          <div className='navbar absolute top-0 left-0 z-[10] w-full py-10 px-10 '>
            <div className='logo flex gap-7'>
              <div className='lines flex flex-col gap-[5px]'>
                <div className="line w-15 h-2 bg-white"></div>
                <div className="line w-8 h-2 bg-white"></div>
                <div className="line w-5 h-2 bg-white"></div>
              </div>
              <h3 className='text-4xl -mt-[8px] leading-none text-white'>Rockstar</h3>
            </div>
          </div>
          <div className='imagesdiv relative overflow-hidden w-full h-screen'>
            <img className='absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover' src="./sky.png" alt="" />
            <img className='absolute bg scale-[1.8] rotate-[-3deg] top-0 left-0 w-full h-full object-cover' src="./bg.png" />
            <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
            <h1 className='text-[12rem] leading-none -ml-40' >grand</h1>
            <h1 className='text-[12rem] leading-none ml-20' >theft</h1>
            <h1 className='text-[12rem] leading-none -ml-40' >auto</h1>
          </div>
            <img className='absolute character -bottom-[150%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg]' src="./girll.png" alt="" />
          </div>
          <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
            <div className='flex gap-4 items-center'>
              <i className="text-4xl ri-arrow-down-line"></i>
              <h3 className='text-xl font-[Helvetica_Now_Display]'>Scroll Down</h3>
            </div>
            <img className='absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./ps5.png" alt="" />
          </div>
          </div>
          <div className='w-full h-screen flex px-10 items-center justify-center bg-black'>
            <div className='cntnr flex text-white w-full h-[100%] overflow-hidden'>
              <div className='limg relative w-1/2 h-full'>
              <img className='absolute scale-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-all duration-300 ease-in-out' src="./imag.png" alt="" />
              </div>
              <div className='rg w-[30%] py-30'>
                <h1 className='text-8xl' >Still Running</h1>
                <h1 className='text-8xl' >not Hunting</h1>
                <p className='mt-10 text-xl font-[arial]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla et atque ipsa tenetur nostrum quia, sapiente, consequuntur quisquam est amet dolore esse earum.</p>
                <p className='mt-3 text-xl font-[arial]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corrupti esse ex. Architecto, molestias error consequuntur non nobis repellendus neque optio animi dolorum, voluptatibus similique, ea asperiores. Impedit eius consequuntur maiores natus? Neque, ducimus doloribus!</p>
                <p className='mt-5 text-xl font-[arial]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corrupti esse ex. Architecto, molestias error consequuntur non nobis repellendus neque optio animi dolorum</p>
                <button className='bg-yellow-500 px-15 py-10 text-3xl text-black mt-5  hover:text-white hover:rounded-xl hover:scale-105 
                   transition-all duration-300 ease-in-out'>Download Now</button>
              </div>
              </div>
            </div>
      </div>
    )}
    </>
  );
}

export default App