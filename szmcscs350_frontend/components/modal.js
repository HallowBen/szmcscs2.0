import React from "react";
import styles from "@/styles/Modal.module.css"

export default function Modal({ onClose, children, title }){
    document.body.classList.add("frozen")

    const stopCloseClick = (e) => {
        e.stopPropagation();
    };

    const handleCloseClick = (e) => {
        e.preventDefault();
        document.body.classList.remove("frozen")
        onClose();
    };

    return(
        <div className={styles["modal-overlay"]} onClick={handleCloseClick}>
            <div className={styles["modal-wrapper"]} onClick={stopCloseClick}>
                <div className={styles.modal}>
                    <div className={styles["modal-header"]}>
                        <close onClick={handleCloseClick}>
                            x
                        </close>
                    </div>
                    {title && <h1>{title}</h1>}
                    <div className={styles["modal-body"]}>{children}</div>
                </div>
            </div>
        </div>
    )
        
};