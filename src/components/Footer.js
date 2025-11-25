import Image from "next/image"
import Link from "next/link"

function Footer() {
  return (
    <footer className="w-screen px-5 py-10">
    <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-[#7b89a8] border-t border-[#000f2e]">
        <div className="flex flex-col items-center justify-center ">
          <div className="inline-flex text-white items-center uppercase text-xs font-bold tracking-widest">
            Made with{" "}
            <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
              <span>
                <Image
                  alt="react-original"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  width="26"
                  height={26}
                  title="React"
                />
                <span className="sr-only">React</span>
              </span>
              <span>
                <Image
                  alt="nextjs-original-wordmark"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                  width="40"
                  height={40}
                  className="invert"
                  title="NextJS"
                />
                <span className="sr-only">NextJS</span>
              </span>
              <span>
                <Image
                  alt="tailwindcss-plain"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  width="26"
                  height={26}
                  title="TailwindCSS"
                />
                <span className="sr-only">TailwindCSS</span>
              </span>
            </div>
          </div>
          <div className="mt-2 text-xs ">
            Made by{" "}
            <Link
              href="n.mansouri2486@gmail.com"
              className="text-[#b2bbcf] font-medium"
            >
              Nina Mansouri
            </Link>
            . All rights reserved.
          </div>
        </div>
      </div>
      </footer>
  )
}

export default Footer