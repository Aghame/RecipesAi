import React from "react";
import Image from "next/image";

export default function CommunityElement({ src, titlu, text }: any) {
  return (
    <div className="flex flex-col justify-center items-center p-12">
      <Image src={src} 
      alt="recipes" 
      width={100} 
      height={100} />

      <h2 className="text-main text-2xl">{titlu}</h2>

      <p className="w-[150px]">{text}</p>
    </div>
  );
}
