import { useContext } from "react";
import { UserLoggedContext } from "../contexts";

export const useUserLogged = () => {
   const content = useContext(UserLoggedContext);

   return content;
   
}