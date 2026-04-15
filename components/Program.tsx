import { anim, program } from "@/data/data";
import Image from "next/image";
import { motion } from "framer-motion";

export function Program() {
  return (
    <div className="FontMassis p-7">
      <motion.h3 {...anim} className=" relative text-[32px] mb-45">
        ժԱՄԱՆԱԿԱՑՈՒՅՑ
        <p className=" absolute z-1 text-5xl top-3 left-1/2 -translate-x-1/2 text-[#5800001A]">
          ժԱՄԱՆԱԿԱՑՈՒՅՑ
        </p>
      </motion.h3>
      <div className="relative flex flex-col gap-20">
        {program.map((el: any, i: number) => {
          return (
            <div
              key={i}
              className={`${i % 2 == 0 ? " self-end" : "self-start"} ${i == 2 ? "mt-55" : ""}  ${i == 3 ? "mt-10" : ""}`}
            >
              <motion.p {...anim} className="w-max text-xl relative">
                {el.title}
                <span className={`${i % 2 == 0 ? " right-0" : "left-0"} absolute -z-1 text-[80px] -top-5   text-[#5800001A]`}>
                  {el.time}
                </span>
              </motion.p>
              <motion.h3 {...anim} className={`${i % 2 == 0 ? " text-end" : "text-start"} text-[28px]`}>
                {el.time}
              </motion.h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
