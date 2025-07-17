import { Route, Routes } from "react-router-dom";
import "./App.css";
import PsychologistsPage from "./pages/PsychologistsPage/PsychologistsPage.jsx";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage.jsx";
import HomeTab from "./pages/HomeTab/HomeTab.jsx";
import Layout from "./Layout.jsx";
import PrivateRoute from "../PrivateRoute.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeTab />} />
        <Route path="psychologists" element={<PsychologistsPage />} />
        <Route
          path="favorites"
          element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
