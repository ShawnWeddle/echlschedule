import MonthWrapper from "./components/MonthWrapper";
import { findAllDistances } from "./utils/distance";

function App() {
  console.log(findAllDistances(39.453, -87.378));
  return (
    <main className="min-h-screen">
      <div className="bg-pink-600 sm:bg-green-600 md:bg-yellow-400 lg:bg-red-600 xl:bg-purple-600">
        WIDTH
      </div>
      <MonthWrapper />
    </main>
  );
}

export default App;
