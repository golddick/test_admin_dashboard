import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

type RectIcon = React.ReactNode;

interface MenuItem {
    path: string;
    icon: RectIcon;
    title: string;
}

interface MenuLinkProps {
    item: MenuItem;
}

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total users</span>
        {/* <span className={styles.title}>{item.title}</span> */}
        <span className={styles.number}>10.900</span>
        {/* <span className={styles.number}>{item.number}</span> */}
        <span className={styles.detail}>
          {/* <span className={item.change > 0 ? styles.positive : styles.negative}>
            {item.change}% </span> */}
            <span className={ styles.positive}>20%</span>
            {" "}
          10 than previous week
          {/* {item.change > 0 ? "more" : "less"} than previous week */}
        </span>
      </div>
    </div>
  );
};

export default Card;