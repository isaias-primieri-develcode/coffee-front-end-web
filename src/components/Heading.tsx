import logoImg from "../assets/cafe.png";

import "../styles/global.css";

export function Heading() {
  return (
    <div className="flex-row flex relative w-[505px] mb-8">
      <img src={logoImg} className="w-28 mr-6" />
      <h1 className="text-2xl font-bold absolute left-[118px] top-[41px] text-gray-100">
        Seja Bem vindo, Usuario
      </h1>
    </div>
  );
}
