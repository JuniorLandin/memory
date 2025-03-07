import { motion } from "framer-motion";
import { X } from "phosphor-react";
import CarouselCardComponent from "../CarouselCardComponent";
import { useEffect, useState } from "react";

interface CityModalProps {
  cityName: string;
  closeModal: () => void;
}

interface Memory {
  nomeLocal: string;
  textoMomento: string;
  imageMoment: string[];
}

interface MemoryCitys {
  cidade: string;
  textCity: string;
  memorias: Memory[];
}

export default function ModalComponents({ cityName, closeModal }: CityModalProps) {

  const [memories, setMemories] = useState<MemoryCitys>();

  useEffect(() => {
    document.body.classList.add("no-scroll");

    const fetchMemories = async () => {
      const response = await fetch("/data/memories.json");
      const data = await response.json();

      const cityMemories = data.find((city: any) => city.cidade === cityName);

      if (cityMemories) {
        setMemories(cityMemories);
      } else {
        setMemories(undefined);
      }
    };

    fetchMemories();

    return () => document.body.classList.remove("no-scroll");
  }, [cityName]);

  return (
    <div className="fixed inset-0 bg-primary-100 z-50 flex justify-center items-center overflow-hidden">
      <motion.div
        className={`rounded-base overflow-hidden flex flex-col z-[999] w-screen h-screen`}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex bg-primary-100 items-center px-8 py-4">
          <p className="text-neutral-1000 text-4xl font-semibold">{cityName}</p>
          <div
            className="text-neutral-1000 p-3 rounded-base cursor-pointer ml-auto"
            onClick={closeModal}
          >
            <X size={24} />
          </div>
        </div>

        <div
          className={`flex-1 overflow-x-auto overflow-y-auto scrollbar transition-all p-8 bg-primary-200`}
        >
          <div className="flex w-full h-full">
            <CarouselCardComponent memories={memories?.memorias || []} textCity={memories?.textCity} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}