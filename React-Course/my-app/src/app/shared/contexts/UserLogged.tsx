import { Children, createContext } from "react";

interface IUserLoggedContextData{
    userName?: string;
    children: React.ReactNode;
}
export const UserLoggedContext = createContext<IUserLoggedContextData>({} as IUserLoggedContextData);

export const UserLoggedProvider: React.FC<IUserLoggedContextData> = ({ children }) => {
    return (
        <UserLoggedContext.Provider value={{ userName: 'Inacio', children }}>
            {children}
        </UserLoggedContext.Provider>
    );
}