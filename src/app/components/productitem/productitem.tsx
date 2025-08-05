import Image from "next/image";
import ProductSwipe from "../productcard/productswipe";

export default function Product() {
  const images = [
    "/sofa-verde.png",
    "/sofa-castanho.png",
    "/sofa-cinzento.png",
    "/sofa-vermelho.png",
    "/sofa-verde.png",
  ];

  return (
    <section className="max-w-full ml-[40px] mt-6">
      <div className="flex items-center justify-between mb-6">
        <h1
          className="text-[28px] font-medium leading-[120%]"
          style={{ color: "var(--foreground)" }}
        >
          Novidades
        </h1>
        <a
          href=""
          className="text-[14px] font-normal underline cursor-pointer mr-[40px]"
          style={{ color: "var(--foreground)" }}
        >
          Ver todos os produtos
        </a>
      </div>
      <div
        className="flex gap-[12px] overflow-x-auto scrollbar-hidden"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {images.map((imgSrc, i) => (
          <ProductSwipe key={i} image={imgSrc} />
        ))}
      </div>
    </section>
  );
}
