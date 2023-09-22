import { createContext, useState } from "react";

export const CarsContext = createContext({
  cars: [],
  addCar: () => {},
  updateCarStatus: () => {},
});

export default function CarsContextProvider({ children }) {
  const [cars, setCars] = useState([
    {
      id: "45263273",
      deadline: "2023-09-10",
      description: "Nice yellow sports car showing good design",
      image: { src: "/src/assets/carImgLogo1.png", alt: "Yello sports car showing the rear light." },
      title: "fsdaf",
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
