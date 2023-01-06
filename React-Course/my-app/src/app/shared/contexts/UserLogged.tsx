import { Children, createContext, useCallback, useEffect, useState } from "react";

interface IUserLoggedContextData{
    userName?: string;
    children: React.ReactNode;
    logout?: () => void;
}
export const UserLoggedContext = createContext<IUserLoggedContextData>({} as IUserLoggedContextData);

export const UserLoggedProvider: React.FC<IUserLoggedContextData> = ({ children }) => {

    const [name, setName] = useState('');

    useEffect( () => {
        setTimeout( () => {
            setName('Inacio');
        }, 3000)
    })

    const handleLogout = useCallback(() => {
        console.log('Logout executed successfully')
    }, []);

    return (
        <UserLoggedContext.Provider value={{ userName: name, children, logout: handleLogout}}>
            {children}
        </UserLoggedContext.Provider>
    );
}