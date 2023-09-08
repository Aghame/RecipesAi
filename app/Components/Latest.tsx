import React from "react";
import Image from "next/image";
import LatestElement from "./LatestElement";


export default function () {
  return (
    <div className="bg-white text-black p-4">
      <h2 className="text-center text-2xl font-semibold mt-6">Latest Recipes</h2>
      <div className="flex justify-center items-start gap-4">
        <LatestElement src="/design/latest/latest_1.jpg" text="French croissant with butter and peach jam"/>
        <LatestElement src="/design/latest/latest_2.jpg" text="Creamy tomato soup"/>
        <LatestElement src="/design/latest/latest_3.jpg" text="Grilled chicken breast with cooked rice and string-peas"/>
        <LatestElement src="/design/latest/latest_4.jpg" text="Raspberry jam and vanilla cream cake"/>

      </div>
    </div>
  );
}
