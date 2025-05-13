import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const Banner = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

if (isMobile) {
  return (
    <div className="w-full h-[100px] m-0 p-0 flex items-center justify-center overflow-hidden">
      <Image
        src="/images/MobileBanner.png"
        alt="Mobile Banner"
        width={800}
        height={220}
        className="max-w-full max-h-full object-contain rounded-lg"
        priority
      />
    </div>
  );
}



  return (
    <div className="w-full h-[150px] mt-4 px-4">
      <Image
        src="/images/banner.svg"
        alt="Desktop Banner"
        width={1920}
        height={150}
        className="w-full object-cover rounded-xl"
        priority
      />
    </div>
  );
};

export default Banner;
