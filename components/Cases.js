import mursee from "../assets/images/mursee.webp";
import murseeLogo from "../assets/images/mursee.png";
import Image from "next/image";

function Cases() {
  return (
    <div className="w-full h-72 flex">
      <div className="relative w-1/2 h-full flex">
        <div className="absolute w-full h-full bg-gray-800 z-10 opacity-90 flex items-center justify-center">
          <h1 className="text-white">Mursee</h1>
        </div>
        <Image src={mursee} layout="fill" objectFit="cover" />
      </div>
      <div className="group relative w-1/2 h-full">
        <div className="absolute w-full h-full bg-gray-800 z-10 flex items-center opacity-50 justify-center cursor-pointer">
          <Image
            src={murseeLogo}
            layout="fill"
            objectFit="contain"
            className="group-hover:scale-90"
          />
        </div>
        <Image
          src={mursee}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-150"
        />
      </div>
    </div>
  );
}

export default Cases;
