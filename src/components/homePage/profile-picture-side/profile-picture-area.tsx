"use client";
import Image from "next/image";

export default function ProfilePictureArea() {
  return (
    <div className="h-full  w-full flex-col flex justify-center items-center">
      <div className="w-[170px] border-2 flex justify-center items-center  h-[170px] overflow-hidden">
        <Image
          width={1000}
          height={1000}
          priority
          className="w-full h-full hover:scale-150 ease-in-out transition-transform duration-500  scale-[140%]  object-cover  "
          alt="profile picture"
          src={`/images/profile.webp`}
        ></Image>
      </div>

      <div className="flex md:mt-6 mt-2.5 justify-center text-xl   items-center">
        Gurgaon/India
      </div>
    </div>
  );
}
