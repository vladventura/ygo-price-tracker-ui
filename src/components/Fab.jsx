import "./Fab.css";

export const Fab = ({onClick = () => {}}) => {
    return <button className="fab" onClick={onClick}> + </button>
};
