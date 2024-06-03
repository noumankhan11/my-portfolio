import { Home } from "./pages";

function App() {
  return (
    <div
      className="min-h-screen w-full  dark:bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#bbd9ed] via-[#305f7d] to-gray-900 
    ">
      {/* dark:bg-[#082132] */}
      <div className="dark:bg-[082132] max-w-[1280px]  mx-auto">
        <Home />
      </div>
    </div>
  );
}

export default App;
