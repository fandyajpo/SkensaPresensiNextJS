import { useState, createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isFetch, setIsFetch] = useState(false);
  const [modal, setModal] = useState("");

  const [presentPhoto, setPresentPhoto] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");
  const [sideBar, setSideBar] = useState(false);
  const [fullname, setFullname] = useState("Faouzia");

  const contextValue = {
    globalCtx: {
      presentPhoto,
      modal,
      sideBar,
      errorMsg,
      isFetch,
      fullname,
    },
    globalAct: {
      setPresentPhoto,
      setModal,
      setSideBar,
      setErrorMsg,
      setIsFetch,
      setFullname,
    },
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
