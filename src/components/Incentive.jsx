export const Incentive = (props) => {
  return (
    <div className="relative w-[260px] p-12 flex-col items-center justify-center border-[1px] border-[#0195F6] rounded-lg  text-white">
      <div className="flex justify-center absolute -top-10 left-20">
        <img src={props.image} alt="" />
      </div>
      <p className="visuelt-pro font-bold text-2xl text-center ">
        {props.title}
      </p>

      <p className="visuelt-pro text-center">{props.text}</p>
    </div>
  );
};
