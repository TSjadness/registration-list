import React from "react";

const WelcomeScreen = () => {
  return (
    <div className="w-full m-3 text-xl text-gray-900 font-semibold flex flex-col justify-center items-center bg-slate-500 p-4 md:p-6 lg:p-8 xl:p-12">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
        Bem-vindo
      </h1>
      <p className="mt-2 md:mt-4 text-base md:text-lg lg:text-xl text-gray-600 text-center">
        Estamos felizes em ter você aqui!
      </p>
    </div>
  );
};

export default WelcomeScreen;
