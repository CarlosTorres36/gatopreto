// components/ProductSwipe.tsx
import Image from "next/image";

export default function ProductSwipe({ image }: { image: string }) {
  return (
    <div className="flex-shrink-0 w-[332px]">
      <div className="relative w-full" style={{ aspectRatio: "332 / 415" }}>
        <Image
          src={image}
          alt="product"
          fill
          className="object-cover rounded-md"
        />
        <div className="absolute top-0 left-0 flex items-center justify-center bg-[var(--square)] text-white text-[10px] font-normal px-2 py-1">
          -15%
        </div>
      </div>
      <div className="flex flex-col items-start mt-2">
        <h2 className="text-[20px] font-medium">Bloom</h2>
        <p className="text-[14px] font-normal">Sofá chaise longue</p>
        <div className="flex gap-1">
          <p className="text-[14px] font-normal">878,20€</p>
          <p className="text-[14px] font-medium">878,20€</p>
        </div>
      </div>
    </div>
  );
}
