import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">

      <h1 className="text-5xl font-bold mb-6">
        Zhen Collection Paris
      </h1>

      <p className="text-2xl mb-3">
        巴黎 × 中国
      </p>

      <p className="text-gray-600 text-lg mb-10">
        Conversations · Rencontres · Une autre voix
      </p>

      <Link
        href="/artists/willy-le-nalbaut"
        className="px-8 py-3 rounded-full bg-black text-white hover:bg-gray-800"
      >
        Enter
      </Link>

    </main>
  );
}