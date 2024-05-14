"use client";
import React from "react";
import { useRouter } from "next/navigation";


function Card({id, title, location, image}:any) {
  const router = useRouter();

  return (
    <div className="h-[200px]  rounded-md overflow-hidden flex">
      <img
        src={image}
        alt=""
        className="h-full w-[30%] object-cover"
      />

      <div className=" w-[70%] p-10 bg-white text-black">
        <h4 className="text-black font-bold">{title}</h4>
       
        <h4 className="text-xs font-semibold">{location}</h4>
        <div className="flex items-end justify-end">
          <button
            className="rounded-md mt-8 bg-green-500 text-white py-2 px-6"
            onClick={() => router.push("/Events/"+id)}>
            Explore Event 🡢
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;