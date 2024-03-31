import { Link } from "react-router-dom";

//Componentes de Lottie-player
import Player from "react-lottie-player";

//Images
import error404 from "../../../assets/lotties/error404.json";

const PageNotFound = () => {
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="px-4 lg:py-12">
          <div className="lg:gap-4 lg:flex">
            <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
              <p className="mb-8 text-center text-gray-500 md:text-lg">
                La página a la que intentas acceder no existe.
              </p>
              <Link
                to="/"
                className="px-5 py-2 rounded-md text-blue-100 bg-tertiary hover:bg-quartenary"
              >
                Ir al inicio
              </Link>
            </div>
            <div className="mt-4">
              <div className="md:w-1/3 max-w-sm">
                <Player
                  play
                  loop
                  animationData={error404}
                  style={{ width: "400px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
