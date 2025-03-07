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
          Bom, Anna Vitória Fernandes Landin... Muito Obrigado por compartilhar a vida comigo, muito obrigado por me aceitar em sua vida!
          Espero do fundo do meu coração te agradar cada vez mais. Quero concluir a vida com você, ter filhos, netos... Colecionar viagens e viajar o mundo ao seu lado.
          Espero um dia conseguir ser o homem real provedor e que você somente cuide do nosso lar e da nossa familia. Eu te amo e te amarei cada dia mais.
          Espero estar na eternidade juntamente com você, mas enquanto estamos aqui eu quero concluir a missão ao seu lado. Que possamos ir aos confins da terra
          pregar a palavra do nosso Senhor e Salvador.
          Portanto, vão e façam discípulos de todas as nações, batizando-os em nome do Pai, do Filho e do Espírito Santo. Ensinem-nos a obedecer a tudo o que eu lhes ordenei. E lembrem-se disto: estou sempre com vocês, até o fim dos tempos
        </motion.h1>
      </div>
    </div>
  )
}