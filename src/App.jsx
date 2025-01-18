import "./css/App.css";
import "./css/NavBar.css";
import "./css/Home.css";
import "./css/MovieCard.css";
import "./css/Favorites.css";
import "./css/index.css";

// Importing pages and components
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";

// Firebase initialization
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBUctcdowW4WB0_BY2Bb6EkDt_lxUF0nW0",
  authDomain: "movielist-41407.firebaseapp.com",
  projectId: "movielist-41407",
  storageBucket: "movielist-41407.firebasestorage.app",
  messagingSenderId: "283603101571",
  appId: "1:283603101571:web:5a761c9211f6106b6b38b6",
  measurementId: "G-N9FQ9YEW51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    // Wrapping the app with the MovieProvider to manage movie-related context
    <MovieProvider>
      <NavBar /> {/* Navigation bar component */}
      <main className="main-content">
        {/* Routing for Home and Favorites pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
