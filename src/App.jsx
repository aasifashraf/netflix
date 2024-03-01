// import "./App.css";
import { Provider } from "react-redux";
import Body from "./Body";
import { createBrowserRouter } from "react-router-dom";
import appStore from "./Constants/appStore";
import Browse from "./Browse";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      component: <Body />,
    },
    {
      path: "/Browse",
      component: <Browse />,
    },
  ]);

  return (
    <Provider store={appStore}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/Browse" element={<Browse />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
