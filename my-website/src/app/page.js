"use client";

import { useEffect, useState } from "react";
import Card from "./card";

export default function Home() {
  const [style, setStyle] = useState("foo");
  const [style1, setStyle1] = useState("invisible");
  const [scroll, setScrollTop] = useState(0)

  useEffect(() => { setStyle('bar')},[]);

  const handleScroll = (event) => {
    setScrollTop(event.currentTarget.scrollTop);
    setStyle('foo')
    setStyle1('bar')
  };
  return (
    <main onScroll={handleScroll} >
      <div className="flex flex-col items-center justify-between scroll">
      <section className="relative">
        <img
          src={"/logo.gif"}
          alt="logo"
          className={`h-[300px] w-[500px] object-cover shadow-md ${style}`}
        />
         <Card style={style1} />
      </section>
      </div>

    </main>
  );
}
