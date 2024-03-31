import { useState, useEffect, createContext } from "react";

//Librerias
import Cookies from "js-cookie";


//proptypes
import PropTypes from 'prop-types';


Auth.propTypes = {
  children: PropTypes.children,
}

//Context
export const AuthContext = createContext();

const Auth = ({ children }) => {
    const [data, setData] = useState({
        token: "",
        strData: undefined,
    });

    const handlerChangeData = (type, value) => {
        setData((prevState) => ({
            ...prevState,
            [type]: value,
        }));
    };

    const cerrarSesion = () => {
        setData({
            token: undefined,
            strData: undefined,
        });
        localStorage.removeItem("token");
    };

    useEffect(() => {
        if (localStorage.getItem("token") && !Cookies.get("token")) {
            Cookies.set("token", localStorage.getItem("token"));
        }

        setData((prevState) => ({
            ...prevState,
            token: localStorage.getItem("token") || Cookies.get("token"),
        }));
    }, []);

    return (
        <AuthContext.Provider
            value={{
                token: data.token,
                strInfoUser: data.strData,
                handlerChangeData,
                cerrarSesion,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default Auth;
