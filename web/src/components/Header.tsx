import * as Dialog from "@radix-ui/react-dialog";
import {Plus, X} from "phosphor-react";
import React, {useEffect, useState} from "react";
import LogoImage from "../assets/logo.svg";
import {NewHabitForm} from "./NewHabitForm";
import ProgressBarCountdown from "./ProgressBarCountdown";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between max-[1024px]:flex-col max-[1024px]:gap-[4rem] max-[1024px]:mt-[30rem]">
      <img src={LogoImage} alt="habits"></img>

      <Dialog.Root>
        {windowSize[0] <= 425 ? (
          <div className=" w-full h-[15%] flex items-center justify-center p-2 max-[425px]:fixed max-[425px]:bottom-0 max-[425px]:right-0 max-[425px]:p-5 max-[425px]:z-[10001]">
            <Dialog.Trigger
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              type="button"
              className="w-[5rem] h-[5rem] bg-background border border-violet-500 rounded-full flex items-center justify-center gap-3 hover:border-violet-300 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background max-[425px]:z-[10000]"
            >
              <Plus size={30} className="text-violet-500" />
            </Dialog.Trigger>
          </div>
        ) : (
          <Dialog.Trigger
            type="button"
            className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background max-[1024px]:w-[22rem]"
          >
            <Plus size={20} className="text-violet-500" />
            Novo hábito
          </Dialog.Trigger>
        )}

        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
          <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Dialog.Close className="absolute right-6 top-6 text-zinc-400 rounded-lg hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900">
              <X size={24} aria-label="Fechar" />
            </Dialog.Close>
            <Dialog.Title className="text-3xl leading-tight font-extrabold">
              Criar hábito
            </Dialog.Title>

            <NewHabitForm />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
