import { createPortal } from "react-dom";
import { motion } from "framer-motion";

import styles from "./Modal.module.css";

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <motion.dialog
        open
        variants={{ hidden: { opacity: 0, y: 30, transition: { duration: 0.1 } }, visible: { opacity: 1, y: 0 } }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className={styles.modal}
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}
