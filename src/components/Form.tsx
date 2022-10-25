import { Link } from "react-router-dom";
import email from "../assets/icons/email.png";
import lock from "../assets/icons/lock.png";

export function Form() {
  return (
    <form className="flex-col flex">
      <label
        htmlFor=""
        className="text-sm font-semibold text-gray-100 flex-col flex"
      >
        Endereço de Email
        <div className="relative mt-3 mb-4">
          <img className="w-6 h-6 absolute bottom-3 left-4" src={email} />
          <input
            type="text"
            maxLength={45}
            placeholder="account@example.com"
            className="rounded-[4px] bg-gray-800 pl-14 text-xs text-gray-100 placeholder:text-gray-400 border-gray-800 border-2  hover:border-orange/600 focus:outline focus:border-orange/600 p-3 w-[400px]"
          />
        </div>
      </label>
      <label
        htmlFor=""
        className="text-sm font-semibold text-gray-100 flex-col flex"
      >
        Senha
        <div className="relative mt-3 mb-3">
          <img className="w-6 h-6 absolute bottom-3 left-4" src={lock} />

          <input
            type="text"
            maxLength={25}
            placeholder="********"
            className="rounded-[4px] bg-gray-800  text-xs pl-14 text-gray-100 placeholder:text-gray-400 border-gray-800 border-2  hover:border-orange/600 focus:outline focus:border-orange/600 p-3 w-[400px]"
          />
        </div>
      </label>
      <label
        htmlFor=""
        className="text-gray-100 text-xs font-medium justify-center relative mb-9 "
      >
        <input
          id="default-checkbox"
          type="checkbox"
          name=""
          className=" accent-gray-800 w-6 h-6 rounded-[4px] border-none"
        />
        <span className="absolute left-8 bottom-[5px]">
          Lembrar-me por 30 dias
        </span>
      </label>
      <button
        type="submit"
        className="w-[400] bg-orange/600 text-xs font-semibold text-black p-3 hover:bg-orange/800 rounded-xl  "
      >
        <Link to="/home">Entrar na plataforma</Link>
      </button>
    </form>
  );
}
