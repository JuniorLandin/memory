"use client"
import { motion } from "framer-motion";

export default function ThanksComponent() {
  return (
    <div className="flex flex-col w-full gap-10 mb-96 m-10">
      <div>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-7xl text-center"
        >
          Agradecimentos
        </motion.h1>
      </div>
      <div>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl text-center"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt iusto labore quod nam tempora ipsam, dolores, odio deleniti aliquam sequi eos dolor aspernatur necessitatibus veniam repellat itaque consectetur quis earum!
        </motion.h1>
      </div>
    </div>
  )
}