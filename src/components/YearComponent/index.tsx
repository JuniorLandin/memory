"use client";
import { motion } from "framer-motion";

export default function YearComponent() {
  return (
    <div className="flex flex-col items-center w-full h-full mt-10 gap-8">
      <motion.h1
        className="text-7xl text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Feliz 1 Ano Meu <br /><span>Amor</span>
      </motion.h1>

      <div className="flex items-center">
        <div className="w-full">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl"
          >
            Bom, como o tempo passa rápido, não é mesmo? Nessas últimas semanas eu estava pensando em que te dar de presente
            bom, você sabe que estamos um tikin apertados, e porque não colocar em prática o que eu passei 4 anos estudando?
            E dessa forma te agradar, não é mesmo? kkk, bom resolvi desenvolver o nosso sistema, um site das nossas memórias,
            para relembrar de tudo que já vivemos juntos, onde viajamos, o que fizemos e etc..
            Espero do fundo do meu coração, te agradar... Mas enfim.
            Como foi bom esse tempo com você, onde dois adolescentes de Jesus se juntaram para construir uma história, você é o que me
            complementa, é aquilo que me faltava, você é a alegria contagiante, aquela que eu não consigo demonstrar haha. Quando eu fazia
            célula no Morumbi eu pensava, poxa Deus, me de uma esposa, eu preciso de uma alegria aqui para os meninos e Deus me entregou a mulher
            mais alegre desse mundo kkkkk, a mais animada de todas, aiai Anna, como eu te amo! Como eu admiro a mulher que você é e tem se tornado.
            Uma mulher forte, guerreira, feliz, batalhadora, uma mulher que verdadeiramente edifica o lar.
          </motion.h1>
        </div>
        <div className="h-full w-2/3 flex justify-center">
          <motion.img
            src="/images/Altar.jpg"
            alt="Altar"
            className="w-[80%] h-full object-cover rounded-full shadow-[5px_10px_15px_rgba(255,105,180,0.6)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="h-full w-2/3 flex justify-center">
          <motion.img
            src="/images/HomephotoTalit2.jpg"
            alt="Home"
            className="w-[80%] h-full object-cover rounded-full shadow-[5px_10px_15px_rgba(255,105,180,0.6)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          />
        </div>
        <div className="w-full">
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl"
          >
            Como é bom chegar cansado do trabalho e saber
            que a casa vai estar arrumada. Como é bom chegar no almoço e saber que o prato vai estar pronto... Você é completamente bela! Eu te amo e te admiro demais.
            Sério, muito obrigado por ser essa mulher que você é. Uma mulher que ama a casa, ama a familia, uma mulher sábia que se guarda, ama as vidas e o principal
            AMA JESUS JUNTO COMIGO.
            Muito obrigado por tudo meu amor. Muito obrigado por ser essa Mulher que sabe ouvir, tarde para se irar. Essa mulher que vence
            uma das coisas mais dificeis de serem vencidas, o orgulho. Sério, como eu me alegro quando vejo você vencendo o orgulho. Quando discutimos
            e você chega calma, calma para conversamos e resolvemos tudo. Isso é o amor e como sou grato pelo seu amor! Obrigado.
          </motion.h1>
          <br />
        </div>
      </div>
      <motion.h1
        className="text-xl"
      >
        Bom, aqui mais embaixo temos um mapa, onde está todos os locais que visitamos/viajamos. Meta agora é irmos para fora do Brasil em, quero conhecer o mundo ao seu lado!
        Esse mapa será atualizado a cada viagem que fizermos.
      </motion.h1>
    </div>
  );
}