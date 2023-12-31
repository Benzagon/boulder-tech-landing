import Image from "next/image";
import ImagetypeClaim from "../../../public/assets/imagotype-claim.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col border-t border-gray-200 bg-background 2xl:px-[300px] lg:px-[150px] md:px-[75px] px-[20px] py-16 pb-0 items-center justify-center">
      <div className="w-full">
        <div className="flex flex-col gap-8">
          <Image
            src={ImagetypeClaim}
            alt="Boulder Tech, the gateway token"
            width={312}
            height={312}
          />
          <p className="text-foreground-dark font-medium">Social networks</p>
        </div>
        <nav></nav>
      </div>
      <div className="w-full border-t flex items-center justify-center p-4 mt-16 font-medium gap-8 border-gray-200">
        <Link href="/terms" className="text-foreground-dark hover:text-foreground-leading transition-all duration-200">Terms & Conditions</Link>
        <Link href="/privacy" className="text-foreground-dark hover:text-foreground-leading transition-all duration-200">Privacy policy</Link>
      </div>
    </footer>
  );
};
export default Footer;
