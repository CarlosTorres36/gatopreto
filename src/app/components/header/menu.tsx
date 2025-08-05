import Image from "next/image";

export default function Menu() {
  return (
    <section
      className="max-w-[432px] px-4 py-6"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="mb-6 flex flex-row gap-[90px]">
        <h1 className="text-lg font-semibold mb-2">Produtos</h1>
        <h1 className="text-lg font-semibold">Coleções by Gato Preto</h1>
      </div>

      <div className="mb-6">
        <ul className="space-y-2">
          {[
            "Novidades",
            "Sofás",
            "Mobiliário",
            "Mesa",
            "Cozinha",
            "Têxteis",
            "Banho",
          ].map((item, i) => (
            <li key={i} className="flex justify-between items-center">
              <span>{item}</span>
              <Image
                src="/arrow-menu.svg"
                alt="menu-icon"
                width={8}
                height={4}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6 space-y-2">
        <div className="flex items-center gap-2">
          <Image src="/arrow-menu.svg" alt="menu-icon" width={8} height={4} />
          <p>Novidades</p>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/arrow-menu.svg" alt="menu-icon" width={8} height={4} />
          <p>Promoções até -50%</p>
        </div>
      </div>

      <div>
        <ul className="mb-4 space-y-1">
          <li>As nossas lojas</li>
          <li>Sobre nós</li>
          <li>Profissionais</li>
          <li>Conta</li>
        </ul>
      </div>
    </section>
  );
}
