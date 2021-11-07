import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import loadingImage from "../assets/img/loading.gif";

/**
 * Routes of App
 */
const Routes = (props: any) => {
  return (
    <BrowserRouter>
      <Header />
      <div className='main-container'>
        {props.state.loading && (
          <div className='loading'>
            <div>
              <img src={loadingImage} alt='loading' />
            </div>
          </div>
        )}
        <Home />
      </div>
      <Footer />
    </BrowserRouter>
  );
};

const mapStateToProps = (state: any) => ({ state: state });

const connectedRoutes = connect(mapStateToProps)(Routes);

export default connectedRoutes;
