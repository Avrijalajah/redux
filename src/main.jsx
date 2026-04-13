// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { Provider } from "react-redux";
// import { BrowserRouter, Route, Routes } from "react-router";
// import { configureStore } from "@reduxjs/toolkit";
// import { Counterslice } from "./Counterslice.js";

// const store = configureStore({
//   reducer: {
//     counter: Counterslice.reducer
//   }
// })

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<App />} />
//           <Route path="/counter" element={
//             <>
//             <Counter />
//             <Counter/>
//             </>
//             }/>
//         </Routes>
//       </BrowserRouter>
//     </Provider>
//   </StrictMode>
// );


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);