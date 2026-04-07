import avatar from "../assets/3d.png";
import name from "../assets/name.png";
import focus from "../assets/focus.png";
import Carousel from "../components/carousel";
import { AppWindow, Share2, Smartphone, Triangle } from "lucide-react";

function Home() {
  const slideClass =
    "w-full object-cover flex flex-nowrap justify-center items-center text-2xl sm:text-4xl gap-2 whitespace-nowrap py-3";
  const slides = [
    <div className={slideClass}>
      Software <span className="text-white">Development</span>{" "}
      <Triangle className="w-8 h-8 shrink-0 text-[#F2D953]" />
    </div>,
    <div className={slideClass}>
      Mobile <span className="text-white">Application</span>{" "}
      <Triangle className="w-8 h-8 shrink-0 text-[#0FBC5F]" />
    </div>,
    <div className={slideClass}>
      Network <span className="text-white">Security</span>{" "}
      <Triangle className="w-8 h-8 shrink-0 text-[#258BF1]" />
    </div>,
    <div className={slideClass}>
      Cloud <span className="text-white">Engineering</span>{" "}
      <Triangle className="w-8 h-8 shrink-0 text-[#F2D953]" />
    </div>,
    <div className={slideClass}>
      Software<span className="text-white">Engineering</span>{" "}
      <Triangle className="w-8 h-8 shrink-0 text-[#0FBC5F]" />
    </div>,
    <div className={slideClass}>
      Web<span className="text-white">Application</span>{" "}
      <Triangle className="w-8 h-8 shrink-0 text-[#258BF1]" />
    </div>,
  ];

  return (
    <div className="min-h-screen">
      <div className="flex flex-col justify-center gap-6 px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col justify-center gap-3 px-0 sm:px-6 lg:px-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Hi, Meet <span className="text-[#f2d953]">Raymond</span>
          </h1>
          <p>
            An aspiring cybersecurity professional and cloud engineerwith a
            passion for building web applications and mobile apps.
          </p>
        </div>
        {/* Clip overflow so tall hero columns can't paint over the carousel (was dimming tops of letters). */}
        <div className="w-full flex flex-col md:flex-row items-stretch gap-3 md:h-[60vh] overflow-hidden md:min-h-0">
          <div className="w-full md:w-1/3  rounded-md p-4">
            <img src={focus} className="w-full h-full object-contain" />
          </div>
          <div className="w-full md:w-1/3 rounded-md p-4 min-h-64 md:min-h-0">
            <img
              src={avatar}
              alt="3D illustration"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/3  rounded-md py-16">
            <div className=" bg-[#2F2F2F] p-3 rounded-xl text-white flex justify-start items-center gap-4 px-8">
              <AppWindow className="" /> software
            </div>
            <div className=" bg-[#2F2F2F] p-3 mt-6 w-[60%] rounded-xl text-white flex justify-start items-center gap-4 px-8 mx-16">
              <Share2 className="" /> network
            </div>
            <img src={name} className="flex w-full h-1/3 object-contain mx-4" />
            <div className=" bg-[#2F2F2F] p-3 mt-6 w-[50%] rounded-xl text-white flex justify-start items-center gap-4 px-8">
              <Smartphone className="" /> apps
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 isolate mt-4">
        <Carousel
          slides={slides}
          autoplay
          autoplayDelayMs={2500}
          options={{ loop: true, align: "start" }}
          containerClassName="flex gap-2"
          slideClassName="shrink-0 grow-0 basis-auto"
          viewportClassName="overflow-hidden"
        />
      </div>
    </div>
  );
}

export default Home;
