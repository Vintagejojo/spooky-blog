import Image from "next/image";
import React from "react";


export default function Profilepic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-blue-950 dark:border-slate-500 
        drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/mewithscar.png"
        width={300}
        height={300}
        alt="Synthetic Man"
        priority={true}
      />
    </section>
  );
}
