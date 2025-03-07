"use client"
import { Memory } from "@/types/Memory";
import { motion } from "framer-motion";
import { CaretLeft, CaretRight, X } from "phosphor-react";
import { useState } from "react";
import CarouselImageComponent from "../CarouselImagesComponent";

export default function CarouselCardComponent({ memories, textCity }: { memories: Memory[], textCity?: string; }) {
  const itemsPerPage = 3;
  const totalPages = Math.ceil(memories?.length / itemsPerPage);
  const [index, setIndex] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  const nextSlide = () => setIndex((prev) => (prev + 1) % totalPages);
  const prevSlide = () => setIndex((prev) => (prev - 1 + totalPages) % totalPages);

  const paginatedItems = Array.from({ length: totalPages }, (_, i) =>
    memories.slice(i * itemsPerPage, (i + 1) * itemsPerPage)
  );

  const handleClick = (item: Memory) => {
    setSelectedMemory(item);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full h-full flex flex-col">
      <p className="text-2xl">{textCity}</p>

      <div className="flex items-center justify-between min-w-full w-full max-w-lg min-h-[90%] overflow-hidden">
        {totalPages > 1 && (
          <button
            onClick={prevSlide}
            className="text-white p-6"
          >
            <CaretLeft size={52} />
          </button>
        )}

        <motion.div
          className={`flex items-center w-full ${paginatedItems[index]?.length === 2 ? "justify-evenly" : "justify-around"}`}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {paginatedItems[index] ? (
            paginatedItems[index].map((item: any, i: any) => {
              return (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 h-[540px] max-w-lg 
                  bg-primary-200 rounded-base pb-4 border-[1px] border-primary-100 
                  focus:outline-none transition-all duration-300 hover:bg-primary-300 hover:scale-105 hover:shadow-lg 
                  active:opacity-80"
                  onClick={() => handleClick(item)}
                >
                  <div className="flex flex-col justify-center items-center">
                    <img src={item.imageMoment[0]} alt="" className="w-full aspect-square p-4 rounded-3xl object-cover" />
                  </div>
                  <div className="flex flex-col w-full px-4 gap-4 -mt-4">
                    <span className="text-2xl">{item.nomeLocal}</span>
                    <p className="text-xl mb-10">{item.textoMomento}</p>
                  </div>
                </div>
              )
            })
          ) : (
            <div className="min-w-full h-full flex justify-center items-center bg-primary-200">
              No items to display
            </div>
          )}
        </motion.div>
        {totalPages > 1 && (
          <button onClick={nextSlide} className="text-white p-6">
            <CaretRight size={52} />
          </button>
        )}

        {isModalOpen && selectedMemory && (
          <div className="lex w-full h-full">
            <CarouselImageComponent props={selectedMemory} closeModal={closeModal} />
          </div>
        )}
      </div>
    </div>
  );
}