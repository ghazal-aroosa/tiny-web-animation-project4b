import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./styles";

// Other Components
import NavBar from "./components/Navbar/NavBar";
import Header from "./components/Header/Header";
import Services from "./components/Serices/Services";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <main style={{ overflow: "hidden" }}>
        <Header />
        <Services />
        <Reviews />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;