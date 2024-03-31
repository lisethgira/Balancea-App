/* eslint-disable react/no-unknown-property */ 
import { Link } from "react-router-dom";

//Componentes de Lottie-player
import Player from "react-lottie-player";

//Images
import errorPage from "../../../assets/lotties/errorPage.json";

//proptypes
import PropTypes from 'prop-types';

ErrorPage.propTypes = {
  severity: PropTypes.func,
  title: PropTypes.string,
  msg: PropTypes.string,
}

const ErrorPage = ({ severity, title, msg }) => {
    return (
        <div className="flex items-center justify-center w-screen h-screen">
        <div className="px-4 lg:py-12">
          <div className="lg:gap-4 lg:flex">
            <div className="mt-20 flex flex-col items-center justify-center md:py-24 lg:py-32">
              <div className="mb-8 text-center text-gray-500 md:text-lg">
              <h1 className="font-bold text-blue-600 text-9xl" severity={severity}>{title}</h1>
              <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                <span className="text-red-500">Oops!</span> 
              </p>
              <p className="mb-8 text-center text-gray-500 md:text-lg">
              {msg}
              </p>
              </div>
              <Link
                to="/"
                className="px-5 py-2 rounded-md text-blue-100 bg-tertiary hover:bg-quartenary"
              >
                Ir al inicio
              </Link>
            </div>
            <div>
              <div className="md:w-1/3 max-w-sm">
                <Player
                  play
                  loop
                  animationData={errorPage}
                  style={{ width: "400px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ErrorPage;