import React from "react";
import styles from "./NewExpence.module.css";

// importing components

import ExpenceForm from "./ExpenceForm";
const NewExpence = (props) => {
    const saveFormDataHandeler = (enteredFormData) => {
        const receivedData = {
            ...enteredFormData,
            id: (Math.random() + Math.random()).toFixed(1).toString()
        };
        // console.log(receivedData);
        props.onRenderExpenceList(receivedData);
    }

    return <div className={styles.newExpence}>
        <ExpenceForm onSaveFormData={saveFormDataHandeler} />
    </div>

}
export default NewExpence;