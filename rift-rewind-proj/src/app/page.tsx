import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function Home() {
  const time = new Date().toISOString();
  return (
    <main>
      <h1>It's Rift Rewind time!</h1>
      <p>At: {time}!</p>
    </main>
  );
}

