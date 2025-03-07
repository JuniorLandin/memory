"use client"

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  return (
    <header className="flex justify-center items-center w-full h-20 bg-primary-100 overflow-hidden">
      <div className="flex justify-between items-center w-full max-w-7xl">
        <div className="text-pink-100 text-xl">Memórias</div>
        <div className="flex justify-between items-center gap-10">
          <button onClick={() => scrollToSection("year")} className="text-pink-100 text-xl">1 Year</button>
          <button onClick={() => scrollToSection("collection")} className="text-pink-100 text-xl">Colecionando Memórias</button>
          <button onClick={() => scrollToSection("thanks")} className="text-pink-100 text-xl">Agradecimentos</button>
        </div>
      </div>
    </header>
  );
}
