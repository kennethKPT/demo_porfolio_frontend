import Cars from "../components/Cars/Cars.jsx";
import CarsContextProvider from "../store/cars-context.jsx";

export default function CarsPage() {
  return (
    <CarsContextProvider>
      <main>
        <Cars />
      </main>
    </CarsContextProvider>
  );
}
