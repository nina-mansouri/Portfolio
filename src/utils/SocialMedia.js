
import Link from "next/link";

import { SocialMediaData } from "@/constants/SocialMediaData";


const SocialMedia = () => {

  return (
    <>
      <div className='lg:absolute right-3 bottom-50 flex flex-row gap-4 z-10'>
        {SocialMediaData.map((social, key) => (
          <Link className='w-fit' href={social.link} key={key}>
            <div
              className={"p-2 rounded-full text-xl text-white"}
              style={{ background: social.color }}
            >
              {social.icon}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default SocialMedia;
