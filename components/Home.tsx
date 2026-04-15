"use client";
import Image from "next/image";
import { TimeBox } from "./TimeBox";
import { useState } from "react";
import { MusicPlayer } from "./music";
import { anim, txt1,  txt2,  txt3 } from "@/data/data";
import { motion } from "framer-motion";
import Link from "next/link";

export function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2500);
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="FontMassis flex items-center justify-center h-screen text-3xl">
  //       Loading...
  //     </div>
  //   );
  // }
  return (
    <div className="text-center tracking-[10%]  FontMassis overflow-hidden  FontMassis ">
      {/* music button */}
      <div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="fixed z-10 p-1  rounded-2xl bg-[#24242417]  right-7 top-7 w-15  h-15 flex justify-center items-center"
        >
          <Image
            src="/icon1.png"
            alt="icon1"
            width={500}
            height={500}
            className=" w-full p-2 object-contain "
          />
        </button>

        <MusicPlayer isPlaying={isPlaying} />
      </div>

      <div
        className="  tracking-0 h-[90vh] bg-cover bg-top flex flex-col justify-between pt-20 p-7 "
        style={{ backgroundImage: "url('/img1.jpg')" }}
      >
        <motion.h3
          {...anim}
          className="FontAdamathuz text-vrayi mt-13   relative z-0 text-[40px]"
        >
          Վերջին զանգ
          <p className="FontAdamathuz absolute -z-1 text-8xl w-max top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-taki">
            12 Ա
          </p>
        </motion.h3>
        <TimeBox />
      </div>

      <div className=" px-5 my-30">
        <motion.p
          {...anim}
          className="FontMassis text-vrayi relative z-0 text-3xl "
        >
          {txt1}
          <span className="FontMassis absolute w-max -z-1 text-5xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-taki">
            {txt1}
          </span>
        </motion.p>
      </div>

      <motion.div {...anim} className="px-5">
        <Image
          src="/img2.jpg"
          alt="icon1"
          width={500}
          height={500}
          className="w-full  object-cover rounded-xl mb-30 "
        />
      </motion.div>

      <motion.h2
        {...anim}
        className="text-vrayi text-5xl my-30 text-center FontAdamathuz"
      >
        25/05/2026
      </motion.h2>

      <motion.p {...anim} className=" text-vrayi FontMassis text-3xl">
        {txt2}
      </motion.p>

      <motion.div {...anim} className="px-5">
        <Image
          src="/icon1.png"
          alt="icon1"
          width={500}
          height={500}
          className=" w-32 mx-auto object-cover my-30"
        />
      </motion.div>

      <motion.h3
        {...anim}
        className="FontMassis text-vrayi relative z-0 text-[40px]"
      >
        12 Տարի
        <p className="FontAdamathuz tracking-[20%]  absolute -z-1 text-8xl w-max top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-taki">
          12
        </p>
      </motion.h3>

      <motion.h3
        {...anim}
        className="FontMassis my-30 text-vrayi relative z-0 text-[40px]"
      >
        626 Շաբաթ
        <p className="FontAdamathuz tracking-[20%] absolute -z-1 text-8xl w-max top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-taki">
          144
        </p>
      </motion.h3>

      <motion.h3
        {...anim}
        className="FontMassis mb-30 text-vrayi relative z-0 text-[40px]"
      >
        144 Ամիս
        <p className="FontAdamathuz tracking-[20%]  absolute -z-1 text-8xl w-max top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-taki">
          626
        </p>
      </motion.h3>

      <motion.h3 {...anim} className=" mb-20 text-vrayi FontMassis text-4xl">
        ՄԻԼԻՈՆԱՎՈՐ ՀԻՇՈՂՈՒԹՅՈՒՆՆԵՐ
      </motion.h3>

      <div 
        className=" h-auto bg-contain bg-repeat py-10"
        style={{ backgroundImage: "url('/icon6.png')" }}>
        <div className="px-3 ml-10 grayscale-100 -rotate-7 w-[60%]  mt-10">
          <Image
            src="/img7.jpg"
            alt="icon1"
            width={500}
            height={500}
            className="w-full my-3 rounded-3xl  "
          />
        </div>

        <div className="px-3 ml-35 grayscale-100 my-15  rotate-7  w-[60%] ">
          <Image
            src="/img8.jpg"
            alt="icon1"
            width={500}
            height={500}
            className="w-full my-3 rounded-3xl  "
          />
        </div>

        <div className="px-3 ml-10  grayscale-100   -rotate-7 w-[60%]  ">
          <Image
            src="/img9.jpg"
            alt="icon1"
            width={500}
            height={500}
            className="w-full my-3 rounded-3xl  "
          />
        </div>

        <div className="px-3 ml-35 grayscale-100 mt-15  rotate-7 w-[60%] ">
          <Image
            src="/img10.jpg"
            alt="icon1"
            width={500}
            height={500}
            className="w-full my-3 rounded-3xl  "
          />
        </div>
      </div>

      <motion.p {...anim} className="my-30 text-vrayi FontMassis text-3xl">
        {txt3}
      </motion.p>

      <Image
        src="/img4.jpg"
        alt="icon1"
        width={500}
        height={500}
        className="w-full  object-cover my-20 "
      />

      <Image
        src="/icon1.png"
        alt="icon1"
        width={500}
        height={500}
        className=" w-32 mx-auto object-cover my-20"
      />
{/*       
      <Image
        src="/img3.png"
        alt="icon1"
        width={500}
        height={500}
        className="w-full  object-cover my-20 "
      /> */}
    </div>
  );
}
