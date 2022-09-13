import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trending from "./components/Trending";
import Movies from "./components/Movies";
import Series from "./components/Series";
import SearchPage from "./components/SearchPage";
import { Container } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Header />
    
      <div className="app">
      <Container>
        <Routes>
          <Route path="/">
         
            <Route index element={<Trending />} />
            <Route path="movies" element={<Movies />} />
            <Route path="series" element={<Series />} />
            <Route path="search" element={<SearchPage />} />
           
          </Route>
        </Routes>
        </Container>
      </div>
     
      <Footer />
    </BrowserRouter>
  );
}

export default App;
