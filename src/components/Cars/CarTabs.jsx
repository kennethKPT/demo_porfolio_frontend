import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import NewCar from "./NewCar";
import Button from "../UI/Button"
import Badge from "../UI/Badge";

import styles from "./CarTabs.module.css";

function Tab({ isSelected, onSelect, badgeCaption, children }) {
  return (
    <li>
      <button className={isSelected ? styles.selected : undefined} onClick={onSelect}>
        {children}
        <Badge key={badgeCaption} caption={badgeCaption}></Badge>
      </button>
      {isSelected && <motion.div layoutId="tab-indicator" className={styles.activeTabIndicator} />}
    </li>
  );
}

export default function CarTabs({ selectedType, onSelectType, cars, children }) {

  const [isCreatingNewCar, setIsCreatingNewCar] = useState();

  function handleDone() {
    setIsCreatingNewCar(false);
  }

  const registerHandler = () => {
    setIsCreatingNewCar(true);
  };

  return (
    <>
      <AnimatePresence>{isCreatingNewCar && <NewCar onDone={handleDone} />}</AnimatePresence>
      <menu className={styles.tabs}>
        <Tab isSelected={selectedType === "all"} onSelect={() => onSelectType("all")} badgeCaption={cars.all.length}>
          All Cars
        </Tab>
        <Tab
          isSelected={selectedType === "liked"}
          onSelect={() => onSelectType("liked")}
          badgeCaption={cars.liked.length}
        >
          Liked
        </Tab>
        <Tab
          isSelected={selectedType === "disliked"}
          onSelect={() => onSelectType("disliked")}
          badgeCaption={cars.disliked.length}
        >
          Disliked
        </Tab>
        <li>
          <Button onClick={registerHandler}>+<span className={styles.donly}>&nbsp;Add New Car</span></Button>
        </li>
      </menu>
      <div>{children}</div>
    </>
  );
}
