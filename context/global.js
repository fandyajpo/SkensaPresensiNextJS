import { useState, createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isFetch, setIsFetch] = useState(false);
  const [modal, setModal] = useState("");
  const [alert, setAlert] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [sideBar, setSideBar] = useState(false);
  const [fullname, setFullname] = useState("Faouzia");
  const [navbar, setNavbar] = useState(true);

  const contextValue = {
    globalCtx: {
      navbar,
      alert,
      modal,
      sideBar,
      errorMsg,
      isFetch,
      fullname,
    },
    globalAct: {
      setNavbar,
      setAlert,
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
