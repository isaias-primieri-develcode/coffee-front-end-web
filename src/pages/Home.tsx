import logoImg from "../assets/cafe.png";
import { Biography } from "../components/Biography";
import { Heading } from "../components/Heading";

import "../styles/global.css";

export function Home() {
  return (
    <div className="bg-gray-900 flex-col flex p-10">
      <Heading />
      <Biography />
    </div>
  );
}
