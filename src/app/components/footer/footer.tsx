import { color } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="mt-[24px]">
      <div
        className="py-[104px] px-[40px] flex flex-col-reverse xl:flex-row justify-between"
        style={{ backgroundColor: "var(--footer)" }}
      >
        <div className="max-w-[528px]">
          <Image
            className="mb-[44px]"
            src="/logo-footer.png"
            alt="Logo"
            width={263}
            height={52}
          />
          <h1 className="font-medium text-[18px] mb-[14.5px]">Keep in touch</h1>
          <p className="font-normal text-[14px] mb-[40px]">
            Sign up and be the first to receive the updates on exclusive new
            products, collections, exclusive launches and the latest news before
            anyone else.
          </p>

          <div className="mb-[7px]">
            <input
              type="text"
              placeholder="ENTER YOUR EMAIL"
              className="w-full text-[12px] font-normal border-0 border-b placeholder:font-normal placeholder:text-[12px] focus:outline-none"
              style={{
                color: "var(--input-footer)",
                borderBottom: "1px solid var(--input-border)",
              }}
            />
          </div>

          <p
            className="text-[10px] font-normal mb-[40px] leading-[12px]"
            style={{
              color: "var(--input-footer)",
            }}
          >
            By clicking on "OK", I agree to receive the newsletter. <br />
            For more information, read the Privacy Policy.
          </p>

          <Image src="/credits.png" alt="credits" width={417} height={37} />
        </div>
        <div className="flex flex-col gap-[145px]">
          <div className="flex flex-row gap-[64px]">
            <div className="flex flex-col gap-[16px]">
              <p
                className="text-[12px] font-medium"
                style={{ color: "var(--list-footer)" }}
              >
                Top Label
              </p>
              <ul className="flex flex-col">
                <li>Item#1</li>
                <li>Item#2</li>
                <li>Item#3</li>
                <li>Item#1</li>
                <li>Item#2</li>
              </ul>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p
                className="text-[12px] font-medium"
                style={{ color: "var(--list-footer)" }}
              >
                Top Label
              </p>
              <ul className="flex flex-col">
                <li>Visit Us</li>
                <li>Our Story</li>
                <li>Repair Service Center</li>
              </ul>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p
                className="text-[12px] font-medium"
                style={{ color: "var(--list-footer)" }}
              >
                Support
              </p>
              <ul className="flex flex-col">
                <li>FAQ’s</li>
                <li>Returns</li>
                <li>Contacts</li>
                <li>Product Guarantees</li>
                <li>Care Instructions</li>
              </ul>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="text-[12px] font-medium">Follow us</p>
              <ul className="flex flex-col">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Tik Tok</li>
              </ul>
            </div>
          </div>
          <div className="flex flex- gap-[8px]">
            <p className="uppercase text-[12px] text-[color:var(--list-footer)] opacity-40">
              Select a Colection:
            </p>
            <span>
              Portugal / En{" "}
              <Image src="down-arrow-footer.svg" alt="" width={7} height={3} />
            </span>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
