export const Navbar = () => {
  return (
    <div className="flex items-center justify-between text-white py-6 visuelt-pro  text-sm ">
      <div className="flex items-center gap-12">
        <p className="  visuelt-pro-black text-2xl">PUL</p>

        <ul className="flex gap-8">
          <li>
            <p className="text-md">Home</p>
          </li>
          <li>
            <p className="text-md">Características</p>
          </li>
          <li>
            <p className="text-md">Calculadora de gastos </p>
          </li>
          <li>
            <p className="text-md uppercase">Faq</p>
          </li>
        </ul>
      </div>

      <div className="flex gap-4 items-center">
        <button className=" text-center bg-black rounded-full border-gradient-to-br from-blue-400 to-blue-600 w-[8.13rem] border-blue-600 border-[2.5px]  text-white px-8 py-[0.55rem] font-normal">
          Login
        </button>

        <button className="text-center bg-gradient-to-br from-blue-400 to-blue-600 border-blue-600  border   rounded-full text-white px-8 py-[0.55rem] font-normal">
          Registrate
        </button>
      </div>
    </div>
  );
};
