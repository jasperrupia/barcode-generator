import "./App.css";
import ResTable from "./components/ResTable";
import Generator from "./components/Generator";

function App() {
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              BarCode Generator
            </h1>
          </div>
            <Generator />
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200">
            <ResTable startNumber={10000000} endNumber={10000010} />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
