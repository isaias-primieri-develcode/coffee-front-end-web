import logoImg from "../assets/cafe.png";

export function Header() {
  return (
    <div className=" flex-col text-center mb-[37px] w-[400px] mt-[130px]">
      <img className="w-[120px] ml-[144px]" src={logoImg} />
      <h1 className="text-2xl text-gray-100 font-bold mt-6 mb-2">Ignite Lab</h1>
      <span className="text-md text-gray-400">Faça login e comece a usar!</span>
    </div>
  );
}
