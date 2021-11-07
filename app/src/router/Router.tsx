import { BrowserRouter } from "react-router-dom";
// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
/**
 * Raoutes of App
 */
const Routes = (props: any) => {
  return (
    <BrowserRouter>
      <Header />
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
