import { Route, Routes } from "react-router";
import { route } from "./Router";
import Menu from "./shared/Menu";

function App() {
  return (
    <div className="flex mobile:flex-col-reverse tablet:flex-row-reverse w-screen h-screen">
      <Menu />
      <div className=" relative tablet:h-full mobile:h-[93%] flex-grow tablet:overflow-hidden mobile:overflow-y-scroll ">
        <Routes>
          {route.map((item) => (
            <Route path={item.path} element={item.component} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
