export const dynamic = "force-dynamic";

export default async function Home() {
  const time = new Date().toISOString();
  return (
    <main>
      <h1>Rift Rewind time!</h1>
      <p>At: {time}!</p>
    </main>
  );
}

