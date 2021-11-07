import { BrowserRouter } from "react-router-dom";
// Components
import Header from "../components/Header/Header";
/**
 * Raoutes of App
 */
const Routes = (props: any) => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

export default Routes;
