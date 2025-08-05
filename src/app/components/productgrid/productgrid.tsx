import ProductCard from "../productcard/productcard";
import Image from "next/image";

export default function ProductGrid() {
  const images = [
    "/sofa-verde.png",
    "/sofa-castanho.png",
    "/sofa-cinzento.png",
    "/sofa-vermelho.png",
  ];

  return (
    <section className="mt-[25px] flex flex-row gap-[14px] max-w-full">
      <div className="relative w-[783px] h-[1004px]">
        <Image
          src="/cups.png"
          alt="Sofá"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.25) 30%, rgba(0, 0, 0, 0.5) 100%)",
          }}
        />
        <div
          className="absolute bottom-6 left-6 max-w-[480px] z-20 "
          style={{ color: "var(--background)" }}
        >
          <p className="text-[16px] uppercase font-normal">New In</p>
          <h1 className="text-[28px] font-medium mb-2">Colorful</h1>
          <p className="text-[16px] font-medium mb-1">
            Dê cor aos seus dias de verão
          </p>
          <p className="text-[16px] font-medium mb-6">
            Descubra os conjuntos de exterior da nova coleção Colorful
          </p>

          <div className="flex gap-4">
            <button
              className="flex items-center justify-center gap-2 font-medium min-w-[200px] min-h-[48px]"
              style={{
                backgroundColor: "var(--background)",
                color: "var(--foreground)",
              }}
            >
              Comprar Agora
              <Image
                src="/arrow-right.svg"
                alt="Arrow Right"
                width={14}
                height={9}
              />
            </button>
            <button
              className="flex items-center justify-center font-medium min-w-[160px] min-h-[48px] border"
              style={{
                color: "var(--background)",
                borderColor: "var(--background)",
                backgroundColor: "transparent",
              }}
            >
              Saber Mais
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px] w-[686px] max-w-full px-4 sm:px-0 mr-[40px]">
        {images.map((imgSrc, i) => (
          <ProductCard key={i} image={imgSrc} />
        ))}
      </div>
    </section>
  );
}
