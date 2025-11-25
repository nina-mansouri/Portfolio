"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { SocialMediaData } from "@/constants/SocialMediaData";

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
         <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-900 to-purple-300">
              Hello,{"!I'm"}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Nina",
                1000,
                "Web Developer",
                1000,
            
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-3xl mb-6 lg:text-4xl">
            I enjoy building and designing for the web.
          </p>
           <div className='flex justify-center md:justify-start gap-4  mb-6'>
                  {SocialMediaData.map((social, key) => (
                    <Link className='w-fit' href={social.link} key={key}>
                      <div
                        className={"p-3 rounded-full text-2xl text-[#0C0B33]"}
                        style={{ background: social.color }}
                      >
                        {social.icon}
                      </div>
                    </Link>
                  ))}
                </div>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-pink-500 to-purple-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-pink-500 to-purple-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#000a1f] hover:bg-[#000f2ee5] rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <div
         
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#000f2e] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-img1.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
