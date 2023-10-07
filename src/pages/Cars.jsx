import { motion } from "framer-motion";
import Cars from "../components/Cars/Cars";
import CarsContextProvider from "../store/carsContext";

export default function CarsPage() {
  return (
    <CarsContextProvider>
      <motion.main
        style={{ margin: "6rem 0 0 0" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.4 } }}
      >
        <p style={{ margin: "0 2rem" }}>
          This is an interactive demo listing.
          <br />
          You can add new a car, mark the as liked, unlike them and so.
        </p>
        <Cars />
      </motion.main>
    </CarsContextProvider>
  );
}
