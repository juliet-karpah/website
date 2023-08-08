import Image from "next/image";
import Card from "./card";

export default function Home() {
  return (
    <main classNameName="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
      <Image
        src={"/logo.gif"}
        alt="logo"
        width={500}
        height={500}
      />
      </section>
      <section>
        <Card />
      </section>
    </main>
  );
}
