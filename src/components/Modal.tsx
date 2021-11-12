import { ReactComponentLike } from "prop-types";
import { MouseEventHandler } from "react";
import "./Modal.css";

interface ModalProps {
  onClose: MouseEventHandler<HTMLSpanElement>,
  show: boolean,
  header: string,
  children: ReactComponentLike
};

const Modal = ({ onClose, show, header = "Modal", children }: ModalProps) => {
  const modal = (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="modal-header-close" onClick={onClose}>
            &times;
          </span>
          <h2 className="modal-header-text">{header}</h2>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
  return show ? modal : <></>;
};

export default Modal;
