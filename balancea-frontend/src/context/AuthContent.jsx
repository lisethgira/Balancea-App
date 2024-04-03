import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { supabase, InsertarUsuarios } from "../index";
const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session == null) {
          setUser(null);
        } else {
          setUser(session?.user.user_metadata);
          insertarUsuarios(session?.user.user_metadata, session?.user.id);
          // console.log("event", event);
          // console.log("session", session?.user.user_metadata);
        }
      }
    );

    AuthContextProvider.propTypes = {
      children: PropTypes.node.isRequired,
    };

    return () => {
      authListener.subscription;
    };
  }, []);
  const insertarUsuarios = async (dataProvider, idAuthSupabase) => {
    const p = {
      strUserNames: dataProvider.name,
      strPicture: dataProvider.picture,
      idAuth_supabase: idAuthSupabase,
    };
    await InsertarUsuarios(p);
  };
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};
