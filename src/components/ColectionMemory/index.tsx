"use client"
import MapBox from "./MapBox";

export default function CollectionMemory() {
  return (
    <div className="flex flex-col items-center w-full h-full m-10 gap-8">
      <h1 className="text-7xl text-center"> Colecionando <br />Memórias</h1>

      <span className="text-xl">
        Esse é o nosso mapa de memórias. Está ai cada cidade, estado e pais que visitamos... (Pais ainda não kk).
        Enfim, basta clicar no marcador e ver a nossa história lá! Espero que goste.
      </span>

      <MapBox />
    </div>
  )
}