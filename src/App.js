
import './App.css';
import ResTable from './components/ResTable'; 

function App() {
  return (
    <>
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">BarCode Generator</h1>
          </div>
          <div class="w-full lg:w-1/3 sm:w-4/5 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="start" class="leading-7 text-sm text-gray-600">Start</label>
                  <input type="number" min={0} id="start" name="start" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="end" class="leading-7 text-sm text-gray-600">End</label>
                  <input type="number" min={0} id="end" name="end" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div class="p-2 w-full">
                <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Generate</button>
              </div>
            </div>
          </div>
          <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200">
            <ResTable /> 
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
