import Image from "next/image";

export const dynamic = "force-dynamic";

export async function getServerSideProps() {
  return { props: { time: new Date().toISOString() } };
}  

export default function Home({ time }: { time: string }) {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold">Rift Rewind</h1>
      <p>The time is {time}</p>
    </div>
  );
}
