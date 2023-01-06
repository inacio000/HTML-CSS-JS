import React from "react";

interface IInputLoginProps {
    type?: string;
    label: string;
    value: string;
    onPressEnter?: () => void;
    onChange: (newValue: string) => void;
}

export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>(({label, value, onChange, type, onPressEnter}, ref) => {

    return (
        <label>
            <span>{label}</span>
            <input 
                ref={ref}
                type={value}
                value={value} 
                onChange={e => onChange(e.target.value)}
                onKeyDown={e => e.key === 'Enter' 
                    ? onPressEnter && onPressEnter() 
                    : undefined
                }
            />
        </label>
    )
})


// React.FC
// export const InputLogin: React.FC<IInputLoginProps> = (props) => {

//     return (
//         <label>
//             <span>{props.label}</span>
//             <input 
//                 type={props.value}
//                 value={props.value} 
//                 onChange={e => props.onChange(e.target.value)}
//                 onKeyDown={e => e.key === 'Enter' 
//                     ? props.onPressEnter && props.onPressEnter() 
//                     : undefined
//                 }
//             />
//         </label>
//     )
// }