// Carrossel.tsx
"use client";

import Image from "next/image";
import Header from "../header/header";

export default function Carrossel() {
  return (
    <section
      className="w-full min-h-[720px] bg-center bg-cover relative"
      style={{ backgroundImage: "url('/background-carrossel.png')" }}
    >
      <div className="block xl:hidden absolute top-0 left-0 w-full z-20">
        <Header />
      </div>
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 65%, rgba(0,0,0,0.5) 100%)",
        }}
      ></div>

      {/* Content */}
      <div className="max-w-[420px] flex flex-col items-center absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-[28px] z-10">
        <h1
          className="max-h-[34px] text-[28px] font-medium mb-3"
          style={{ color: "var(--background)" }}
        >
          SS25 Collection
        </h1>
        <p
          className="text-[16px] text-center font-normal"
          style={{ color: "var(--background)" }}
        >
          Exclusive moments of creation, details of the shoes that brings this
          season’s style to life.
        </p>

        <div className="flex gap-4 mt-6">
          <button
            className="flex items-center justify-center gap-2 font-medium min-w-[200px] min-h-[48px]"
            style={{ backgroundColor: "var(--background)" }}
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

        <div className="flex gap-2 mt-[44px]">
          <div
            className="w-[99px] h-[4px] rounded-full relative overflow-hidden"
            style={{ backgroundColor: "rgba(var(--background-rgb), 0.25)" }}
          >
            <div
              className="absolute top-0 left-0 h-full rounded-full"
              style={{ backgroundColor: "var(--background)", width: "65%" }}
            />
          </div>
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="w-[99px] h-[4px] rounded-full"
              style={{ backgroundColor: "rgba(var(--background-rgb), 0.25)" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
