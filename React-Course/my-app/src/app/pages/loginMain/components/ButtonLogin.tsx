import React from "react";

interface IButtonLoginProps {
    type?: "button" | "submit" | "reset";
    onClick: () => void;
    children: React.ReactNode;
}
export const ButtonLogin: React.FC<IButtonLoginProps> = ({onClick, type, children}) => {
    return (
        <button type={type} onClick={onClick}>
            {children}
        </button>
    )
}