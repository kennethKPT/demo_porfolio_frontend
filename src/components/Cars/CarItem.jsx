import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CarsContext } from "../../store/carsContext";

import styles from "./CarItem.module.css";

export default function CarItem({ car, onViewDetails, isExpanded }) {
  const { updateCarStatus } = useContext(CarsContext);

  const formattedDate = new Date(car.deadline).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const unsetHandler = () => {
    updateCarStatus(car.id, "all");
  };

  const setDislikeHandler = () => {
    updateCarStatus(car.id, "disliked");
  };

  const setLikeHandler = () => {
    updateCarStatus(car.id, "liked");
  };

  return (
    <motion.li layout exit={{ y: -30, opacity: 0 }}>
      <article className={styles.carItem}>
        <header>
          <img {...car.image} />
          <div className={styles.carItemMeta}>
            <h2>
              {car.title}
            </h2>
            <p>Sales until {formattedDate}</p>
            <p className={styles.carItemActions}>
              {car.status !== "disliked" ? (
                <button onClick={setDislikeHandler} className={styles.btnNegative}>
                  Mark as dislike
                </button>
              ) : (
                <button onClick={unsetHandler} className={styles.btnNegative}>
                  Remove from disliked
                </button>
              )}
              {car.status !== "liked" ? (
                <button onClick={setLikeHandler}>Mark as like</button>
              ) : (
                <button onClick={unsetHandler}>
                  Remove from liked
                </button>
              )}
            </p>
          </div>
        </header>
        <div className={styles.carItemDetails}>
          <p>
            <button onClick={onViewDetails}>
              View Details
              <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} className={styles.carItemDetailsIcon}>
                &#9660;
              </motion.span>
            </button>
          </p>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
              >
                <p className={styles.carItemDescription}>{car.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </article>
    </motion.li>
  );
}
