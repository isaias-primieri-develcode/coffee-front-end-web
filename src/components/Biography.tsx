import "../styles/global.css";

export function Biography() {
  return (
    <div className="w-[100%] flex flex-col gap-8 ml-6 pr-12">
      <span className="font-bold text-lg text-gray-100">
        Aqui você pode ver sua biografia de estudos e projetos, você também pode
        edita-los
      </span>
      <div className="bg-gray-800 rounded-lg h-[234px] "></div>
    </div>
  );
}
