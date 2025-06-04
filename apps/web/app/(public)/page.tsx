const org = process.env.DEFAULT_ORGANIZATION

export default function Home() {
  console.log(org)
  return (
    <main>
      <h1 className="text-2xl font-bold">Hello World</h1>
      <a href={`/${process.env.DEFAULT_ORGANIZATION}`} className="bg-blue-600 text-white px-4 py-2 rounded">Login</a>
    </main>
  );
}
