// import "./App.css";
import Body from "./Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      component: <Body />,
    },
  ]);
  return (
    <div className="App">
      <Body />
    </div>
  );
}

export default App;
