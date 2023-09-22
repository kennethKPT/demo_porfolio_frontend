import { useContext, useRef, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

import { CarsContext } from "../../store/cars-context.jsx";

import Modal from "../UI/Modal.jsx";

import styles from "./NewCar.module.css";
import images from "../../assets/images.js";

export default function NewCar({ onDone }) {
  const title = useRef();
  const description = useRef();
  const deadline = useRef();

  const [scope, animate] = useAnimate();

  const [selectedImage, setSelectedImage] = useState(null);
  const { addCar } = useContext(CarsContext);

  function handleSelectImage(image) {
    setSelectedImage(image);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const car = {
      title: title.current.value,
      description: description.current.value,
      deadline: deadline.current.value,
      image: selectedImage,
      status: "all"
    };

    if (!car.title.trim() || !car.description.trim() || !car.deadline.trim() || !car.image) {
      animate("input, textarea", { x: [5, -5, 5, 0] }, { type: "tween", duration: 0.2, delay: stagger(0.1) });
      return;
    }

    onDone();
    console.log(car);
    addCar(car);
  }

  return (
    <Modal title="New Car" onClose={onDone}>
      <form className={styles.newCar} onSubmit={handleSubmit} ref={scope}>
        <p>
          <label htmlFor="title">Title</label>
          <input ref={title} type="text" name="title" id="title" />
        </p>

        <p>
          <label htmlFor="description">Description</label>
          <textarea ref={description} name="description" id="description" />
        </p>

        <p>
          <label htmlFor="deadline">Deadline</label>
          <input ref={deadline} type="date" name="deadline" id="deadline" />
        </p>

        <motion.ul className={styles.newCarImages} variants={{ visible: { transition: { staggerChildren: 0.02 } } }}>
          {images.map((image) => (
            <motion.li
              variants={{
                hidden: { opacity: 0, scale: 0.5 }, //inherit parent
                visible: { opacity: 1, scale: [1.6, 1] },
              }}
              exit={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring" }}
              key={image.alt}
              onClick={() => handleSelectImage(image)}
              className={selectedImage === image ? styles.selected : undefined}
            >
              <img {...image} />
            </motion.li>
          ))}
        </motion.ul>

        <p className={styles.newCarActions}>
          <button type="button" onClick={onDone}>
            Cancel
          </button>
          <button>Add Car</button>
        </p>
      </form>
    </Modal>
  );
}
