import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const useGlobal = () => {
  const useGlobal = useContext(GlobalContext);
  return useGlobal;
};

export default useGlobal;
