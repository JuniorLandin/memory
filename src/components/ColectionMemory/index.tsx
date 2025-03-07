"use client"
import MapBox from "./MapBox";

export default function CollectionMemory() {
  return (
    <div className="flex flex-col items-center w-full h-full m-10 gap-8">
      <h1 className="text-7xl text-center"> Colecionando <br />Memórias</h1>

      <span className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat assumenda porro culpa corporis voluptas, quia id, aut obcaecati consequuntur minus cum, iste eum dicta magnam nostrum alias accusamus repellendus doloribus.</span>

      <MapBox />
    </div>
  )
}