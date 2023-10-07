import { createContext, useState } from "react";
import images from "../assets/images"

export const CarsContext = createContext({
  cars: [],
  addCar: () => {},
  updateCarStatus: () => {},
});

export default function CarsContextProvider({ children }) {
  const [cars, setCars] = useState([
    {
      id: "45263273",
      deadline: "2024-09-10",
      description: "Nice yellow sports car showing good design",
      image: images[0],
      title: "2024 New Nice yellow sports car with extraordinary design",
      status: "all"
    },
    {
      id: "45263274",
      deadline: "2024-11-30",
      description: "Red sports car moving forward",
      image: images[1],
      title: "2023 All New Red sports car looks so fast",
      status: "all"
    },
    {
      id: "45263275",
      deadline: "2025-01-30",
      description: "Green pickup on a grassland",
      image: images[3],
      title: "2021 Green pickup on a grassland",
      status: "all"
    },
    {
      id: "45263276",
      deadline: "2025-01-21",
      description: "White SUV in urban city area",
      image: images[4],
      title: "2024 Best New SUV in white available now",
      status: "all"
    },
  ]);

  function addCar(car) {
    setCars((prevCars) => [{ ...car, id: Math.random().toString(), status: "all" }, ...prevCars]);
  }

  function deleteCar(carId) {
    setCars((prevCars) => prevCars.filter((car) => car.id !== carId));
  }

  function updateCarStatus(carId, newStatus) {
    setCars((prevCars) =>
      prevCars.map((car) => {
        if (car.id === carId) {
          return { ...car, status: newStatus };
        }
        return car;
      })
    );
  }

  const carsContext = {
    cars,
    addCar,
    deleteCar,
    updateCarStatus,
  };

  return <CarsContext.Provider value={carsContext}>{children}</CarsContext.Provider>;
}
