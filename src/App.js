import { Box } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Store from "./components/Store";


function App() {
  return (
    <Box>
      <Navbar />
      <Header />
      <Store />
      <Footer />
    </Box>
  );
}

export default App;
