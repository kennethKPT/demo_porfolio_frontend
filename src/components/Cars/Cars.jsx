import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { CarsContext } from "../../store/cars-context.jsx";
import CarItem from "./CarItem.jsx";
import CarTabs from "./CarTabs.jsx";

import styles from "./Cars.module.css";

export default function Cars() {
  const { cars } = useContext(CarsContext);
  const [selectedType, setSelectedType] = useState("all");
  const [expanded, setExpanded] = useState(null);

  function handleSelectType(newType) {
    setSelectedType(newType);
  }

  function handleViewDetails(id) {
    setExpanded((prevId) => {
      if (prevId === id) {
        return null;
      }

      return id;
    });
  }

  const filteredCars = {
    all: cars.filter((car) => car.status === "all"),
    liked: cars.filter((car) => car.status === "liked"),
    disliked: cars.filter((car) => car.status === "disliked"),
  };

  const displayedCars = filteredCars[selectedType];

  return (
    <AnimatePresence mode="wait">
      <div className={styles.cars}>
        <CarTabs cars={filteredCars} onSelectType={handleSelectType} selectedType={selectedType}>
          <AnimatePresence mode="wait">
            {displayedCars.length > 0 && (
              <motion.ol
                key="list"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className={styles.challengeItems}
              >
                <AnimatePresence>
                  {displayedCars.map((car) => (
                    <CarItem
                      key={car.id}
                      car={car}
                      onViewDetails={() => handleViewDetails(car.id)}
                      isExpanded={expanded === car.id}
                    />
                  ))}
                </AnimatePresence>
              </motion.ol>
            )}
            {displayedCars.length === 0 && (
              <motion.p
                key="fallback"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
              >
                No cars found.
              </motion.p>
            )}
          </AnimatePresence>
        </CarTabs>
      </div>
    </AnimatePresence>
  );
}
