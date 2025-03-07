"use client"

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-primary-100 shadow-md z-50 flex justify-center items-center">

      <div className="flex justify-between items-center w-full max-w-7xl">
        <button onClick={() => scrollToSection("year")} className="text-pink-100 text-xl">
          Memórias
        </button>
        <div className="flex justify-between items-center gap-10">
          <button onClick={() => scrollToSection("year")} className="text-pink-100 text-xl">1 Year</button>
          <button onClick={() => scrollToSection("collection")} className="text-pink-100 text-xl">Colecionando Memórias</button>
          <button onClick={() => scrollToSection("thanks")} className="text-pink-100 text-xl">Agradecimentos</button>
        </div>
      </div>
    </header>
  );
}
