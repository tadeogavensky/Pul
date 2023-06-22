import celulares from "../assets/images/celulares.png";

export const Main = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col items-start justify-center gap-3 w-full">
        <p className="actay-regular text-white text-4xl w-[70%] leading-86">
          Viajá seguro, viajá con <span className="actay-bold">PUL.</span>
        </p>
        <p className="visualt-pro text-white w-[75%] ">
          Conectá con personas con tus mismos destinos, tus mismos horarios y se
          encuentren cerca tuyo.
        </p>

        <button className="text-center mt-3 text-sm bg-gradient-to-br from-blue-400 to-blue-600 border-blue-600 border rounded-full text-white px-6 py-[0.6rem] font-normal">
          ¡Conocé PUL!
        </button>
      </div>

      <img src={celulares} className="w-[500px]" alt="" />
    </div>
  );
};
