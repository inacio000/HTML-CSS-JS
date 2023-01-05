import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginMain = () => {
    const navigate = useNavigate();

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

    const handelLogin = () => {
        console.log(email);
        console.log(password);
    }

    return (
        <div>
            <h1>UseRef</h1>
            <p>Para pegar a referencia de um elemento html e poder usar dentro de um CallBack ou uma função</p>
            <form>
                <p>Quantitate character in email place: {emailLength}</p>

                <label>
                    <span>Email</span>
                    <input 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' ? inputPasswordRef.current?.focus() : undefined}
                    />
                </label>
            
                <label>
                    <span>Password</span>
                    <input 
                        type={password}
                        value={password}
                        ref={inputPasswordRef} 
                        onChange={e => setPassword(e.target.value)}
                    />
                </label>

                <button type="button" onClick={handelLogin1}>
                    Login
                </button>

            </form>

            <button onClick={handleClick}>
                Home Page
            </button>
        </div>
    );
}

