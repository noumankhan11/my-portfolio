import { Home } from "./pages";

function App() {
  return (
    <div
      className="min-h-screen w-full  dark:bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#0d334c] via-[#0c2c41] to-gray-900 
    ">
      {/* dark:bg-[#082132] */}
      <div className="dark:bg-[082132] max-w-[1280px]  mx-auto">
        <Home />
      </div>
    </div>
  );
}

export default App;
