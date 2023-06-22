import arrowDown from "../assets/images/arrow-down.svg";
import { Incentive } from "./Incentive";

import users from "../assets/images/users.svg";
import gift from "../assets/images/gift.svg";
import lock from "../assets/images/lock.svg";
import recycle from "../assets/images/recycle.svg";

export const Incentives = () => {
  return (
    <div className="flex flex-col items-center gap-24 ">
      <img src={arrowDown} alt="" />

      <div className=" flex flex-col gap-4">
        <p className="actay-bold text-white text-5xl text-center">
          ¿Por qué usar PUL?
        </p>

        <div className="flex w-full justify-center">
          <p className="text-[#ADADAD] visuelt-pro w-[70%] text-center ">
            Viajá con PUL para ir y volver de tu facultad de manera{" "}
            <span className="font-semibold">rápida económica y sencilla. </span>
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-8 mt-12 w-screen">
          <Incentive
            image={users}
            title={"Social"}
            text={
              "Compartir un viaje es una experiencia divertida para conocer nuevas personas."
            }
          />
          <Incentive />
          <Incentive />
          <Incentive />
        </div>
      </div>
    </div>
  );
};
