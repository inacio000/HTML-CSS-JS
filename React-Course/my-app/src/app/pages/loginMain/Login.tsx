import { useCallback, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserLogged } from "../../shared/hooks";
import { ButtonLogin } from "./components/ButtonLogin";
import { InputLogin } from "./components/inputLogin";

export const LoginMain = () => {
    const navigate = useNavigate();

    const userLoggedContext = useUserLogged();

    const inputPasswordRef = useRef<HTMLInputElement>(null)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = () => {
        navigate("/home-page");
    }

    const emailLength = useMemo( () => {
        return email.length * 1000
    }, [email.length]);

    //useEffect( () => {
        // if (window.confirm('Are you a Man?')) {
        //     console.log('Man')
        // } else {
        //     console.log('Woman')
        // }
    //}, [email.length]);

    // useEffect( () => {
    //     console.log(email);
    // }, [email]);

    // useEffect( () => {
    //     console.log(password);
    // }, [password]);

    const handelLogin1 = useCallback( () => {
        console.log(email);
        console.log(password);
    }, [email, password]);

    return (
        <div>
            <h1>UseRef</h1>
            <p>Para pegar a referencia de um elemento html e poder usar dentro de um CallBack ou uma função</p>
            <p>{userLoggedContext.userName}</p>
            <form>
                <p>Quantitate character in email place: {emailLength}</p>

                
                <InputLogin 
                    label="Email"
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}/>

                <InputLogin 
                    label="Password"
                    type="password"
                    value={password}
                    ref={inputPasswordRef} 
                    onChange={newValue => setPassword(newValue)}/>
                <ButtonLogin type="button" onClick={handelLogin1}>
                    Login
                </ButtonLogin>

                {/* <button type="button" onClick={handelLogin1}>
                    Login
                </button> */}

            </form>

            <button onClick={handleClick}>
                Home Page
            </button>

        </div>
    );
}

