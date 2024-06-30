import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SlideApp from "./components/SlideApp";
import Result from "./components/Result.jsx";
import "./styles/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "../store";
import Lobby from "./components/Lobby";
import Options from "./components/Options";
import StoreOptions from "./components/StoreOption";
import Home from "./components/Home.jsx";
import { ThirdwebProvider } from "thirdweb/react";
import { BaseSepoliaTestnet } from "@thirdweb-dev/chains";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <ThirdwebProvider activeChain={BaseSepoliaTestnet}>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/lobby" exact element={<Lobby />} />
              <Route path="/game" exact element={<App />} />
              <Route path="/result" exact element={<Result />} />
              <Route
                path="/Character"
                exact
                element={<SlideApp data={"1"} />}
              />
              <Route path="/Guns" exact element={<SlideApp data={"2"} />} />
              <Route path="/Car" exact element={<SlideApp data={"3"} />} />
              <Route path="/options" exact element={<Options />} />
              <Route path="/optstore" exact element={<StoreOptions />} />
            </Routes>
          </ThirdwebProvider>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
