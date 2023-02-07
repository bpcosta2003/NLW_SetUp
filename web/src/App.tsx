import HabitDay from "./components/HabitDay";
import {Header} from "./components/Header";
import {SummaryTable} from "./components/SummaryTable";
import "./lib/dayjs";
import "./styles/global.css";

// Adicionar Autenticação ( Firebase + Auth0)
// Notificações Service Workers
// Perfil público com gráfico de resumo ( ver somente os quadradinhos )

export function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <Header />
        <SummaryTable />
      </div>
    </div>
  );
}
