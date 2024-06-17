import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./styles/index.css";
import NavBar from "./components/Navbar";
import ImageCarousel from "./components/ImageCarousel";
import About from "./components/About";
import ServicesCard from "./components/ServicesCard";
import TrainingCards from "./components/TrainingCards";
import CampusCard from "./components/CampusCard";
import ClientsCard from "./components/ClientsCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";

const theme = createTheme({
  typography: {
    fontFamily: "Usuzi, sans-serif",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <NavBar />
      <Home />
      <ImageCarousel />
      <About />
      <ServicesCard />
      <TrainingCards />
      <CampusCard />
      <ClientsCard />
      <Contact />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
);
