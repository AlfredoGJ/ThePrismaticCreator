import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { isJsxOpeningElement } from "typescript";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  x?: number;
  y?: number;
  width?:number
  open: boolean;
}

export default function Modal({ children, x, y, width, open }: ModalProps) {
  let appNode = document.getElementById("root")!;
  console.log(appNode);

  let modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current!.style.left = `${x}px`;
      modalRef.current!.style.top = `${y}px`;
      modalRef.current!.style.width = `${width}px`
    }
  }, [open]);

  return createPortal(
    <div className="relative">
      <div className="absolute z-50"  hidden= {!open} ref={modalRef}>{children}</div>
    </div>,
    appNode
  );
}
