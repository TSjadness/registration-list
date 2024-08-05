"use client";
import { Route } from "next";
import { useRouter } from "next/navigation";

const NotFound = () => {

  const router = useRouter();
  const handleHome = () => {
    console;
    router.push("/" as Route);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center text-gray-600">
        <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
        <p className="text-gray-400">
          A página que você está procurando não existe.
        </p>
      </div>

      <div className="pt-8">
        <a href="/" className="hover:underline">
          <button
            className="bg-gray-700 hover:bg-gray-900 text-white px-12 py-4 rounded-xl"
            type="submit"
            onClick={() => handleHome()}
          >
            Retorne a Página Home
          </button>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
