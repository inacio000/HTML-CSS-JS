import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginUseCallback = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = () => {
        navigate("/home-page");
    }

    const emailLength = useMemo( () => {
        return email.length * 1000
    }, [email.length]);

    const handelLogin = useCallback( () => {
        console.log(email);
        console.log(password);
    }, [email, password]);

    return (
        <div>
            <h1>Login useCallBack</h1>
            <p><strong>useCallBack</strong>-Serve para memorizar funções</p>
            <form>
                <p>Quantitate character in email place: {emailLength}</p>

                <label>
                    <span>Email</span>
                    <input value={email} onChange={e => setEmail(e.target.value)}/>
                </label>
            
                <label>
                    <span>Password</span>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>

                <button type="button" onClick={handelLogin}>
                    Login
                </button>

            </form>

            <button onClick={handleClick}>
                Home Page
            </button>
        </div>
    );
}

