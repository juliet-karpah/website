
import Card from "./card";

export default function Home() {
  return (
    <main classNameName="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
      <img
        src={"/logo.gif"}
        alt="logo"
    className="h-[300px] w-[500px] object-cover"
      />
      </section>
      <section>
        <Card />
      </section>
    </main>
  );
}
