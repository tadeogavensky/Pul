import { Incentives } from "./components/Incentives";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="bg-black h-full pb-12 flex flex-col items-center ">
      <div className=" w-[70%]">
        <Navbar />
        <Main />
        <Incentives />
      </div>
    </div>
  );
}

export default App;
