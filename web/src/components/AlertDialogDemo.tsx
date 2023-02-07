import {blackA, green, greenA, mauve, red, violet} from "@radix-ui/colors";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import {keyframes, styled} from "@stitches/react";
import {HandsClapping} from "phosphor-react";
import React, {SetStateAction, useEffect, useState} from "react";
import ProgressBarCountdown from "./ProgressBarCountdown";

interface ModalProps {
  openModal: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

export function AlertDialogDemo({openModal, setOpen}: ModalProps) {
  return (
    <AlertDialog.Root open={openModal} onOpenChange={setOpen}>
      <AlertDialog.Portal>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogTitle className="flex justify-between items-center">
            Hábito criado com sucesso! <HandsClapping size={30} />
          </AlertDialogTitle>
          <ProgressBarCountdown />
          <Flex css={{justifyContent: "flex-end"}}></Flex>
        </AlertDialogContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}

const overlayShow = keyframes({
  "0%": {opacity: 0},
  "100%": {opacity: 1},
});

const contentShow = keyframes({
  "0%": {opacity: 0, transform: "translate(-50%, -50%) scale(.96)"},
  "100%": {opacity: 1, transform: "translate(-50%, -50%) scale(1)"},
});

const AlertDialogOverlay = styled(AlertDialog.Overlay, {
  backgroundColor: blackA.blackA9,
  position: "fixed",
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

const AlertDialogContent = styled(AlertDialog.Content, {
  backgroundColor: "#23cc617b",
  backdropFilter: "blur(10px)",
  borderRadius: "1rem",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "85px",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "100%",
  maxWidth: "450px",
  maxHeight: "85vh",
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  "&:focus": {outline: "none"},
});

const AlertDialogTitle = styled(AlertDialog.Title, {
  margin: 0,
  color: "white",
  fontSize: 17,
  fontWeight: 500,
});

const AlertDialogDescription = styled(AlertDialog.Description, {
  marginBottom: 20,
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5,
});

const Flex = styled("div", {display: "flex"});

const Button = styled("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 15px",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    variant: {
      violet: {
        backgroundColor: "white",
        color: violet.violet11,
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        "&:hover": {backgroundColor: mauve.mauve3},
        "&:focus": {boxShadow: `0 0 0 2px black`},
      },
      red: {
        backgroundColor: red.red4,
        color: red.red11,
        "&:hover": {backgroundColor: red.red5},
        "&:focus": {boxShadow: `0 0 0 2px ${red.red7}`},
      },
      mauve: {
        backgroundColor: mauve.mauve4,
        color: mauve.mauve11,
        "&:hover": {backgroundColor: mauve.mauve5},
        "&:focus": {boxShadow: `0 0 0 2px ${mauve.mauve7}`},
      },
    },
  },

  defaultVariants: {
    variant: "violet",
  },
});
