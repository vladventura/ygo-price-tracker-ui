import { MouseEventHandler } from "react";
import "./Fab.css";

interface FabProps {
  onClick: MouseEventHandler<HTMLButtonElement>,
};

export const Fab = ({onClick} : FabProps) => {
    return <button className="fab" onClick={onClick}> + </button>
};
