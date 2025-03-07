import { Memory } from "@/types/Memory";
import { motion } from "framer-motion";
import { CaretLeft, CaretRight, X } from "phosphor-react";
import { useState } from "react";

export default function CarouselImageComponent({ props, closeModal }: { props: Memory, closeModal: () => void; }) {
  const { imageMoment } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageMoment.length);
  };

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageMoment.length) % imageMoment.length);
  };

  return (
    <div className="fixed inset-0 bg-primary-100 z-50 flex justify-center items-center overflow-hidden">
      <motion.div
        className={`rounded-base overflow-hidden flex flex-col z-[999] w-screen h-screen relative`}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex bg-primary-100 items-center px-8 py-4">
          <p className="text-neutral-1000 text-4xl font-semibold">{props.nomeLocal}</p>
          <div
            className="text-neutral-1000 p-3 rounded-base cursor-pointer ml-auto"
            onClick={closeModal}
          >
            <X size={24} />
          </div>
        </div>

        {imageMoment.length > 0 ? (
          <div className="relative w-full h-full flex justify-center items-center">
            <motion.div
              key={currentIndex}
              className="w-full h-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={imageMoment[currentIndex]}
                alt={`Memory image ${currentIndex}`}
                className="w-full h-[90%] object-scale-down rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            <button
              className="absolute left-32 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full transition-transform duration-300 hover:scale-110"
              onClick={goToPreviousImage}
            >
              <CaretLeft size={80} />
            </button>

            <button
              className="absolute right-32 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full transition-transform duration-300 hover:scale-110"
              onClick={goToNextImage}
            >
              <CaretRight size={80} />
            </button>
          </div>
        ) : (
          <div className="text-center text-gray-500">No images available</div>
        )}
      </motion.div>
    </div>
  );
}
