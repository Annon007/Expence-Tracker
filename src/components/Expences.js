import styles from "./Expences.module.css";

import ExpenceItems from "./ExpenceItems";
import Card from "./Card";

const Expences = (props) => {

    return <Card className={styles.expenses}>
        {props.expence.map((ex, i) => <ExpenceItems props={ex} key={i} />)}
    </Card>
}
export default Expences;