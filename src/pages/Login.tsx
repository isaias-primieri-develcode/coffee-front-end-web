import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Header } from "../components/Header";

import "../styles/global.css";

export function Login() {
  return (
    <div className="bg-gray-900 flex justify-center">
      <div className="flex-col">
        <Header />
        <Form />
        <Footer />
      </div>
    </div>
  );
}
