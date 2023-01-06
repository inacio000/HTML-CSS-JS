import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = () => {
        navigate("/home-page");
    }

    const emailLength = useMemo( () => {
        console.log('Executed')
        return email.length * 1000
    }, [email.length]);

    const handelLogin = () => {
        console.log(email);
        console.log(password);
    }

    return (
        <div>
            <form>
                <p>Quantitate character in email place: {emailLength}</p>

                <label>
                    <span>Email</span>
                    <input value={email} onChange={e => setEmail(e.target.value)}/>
                </label>
            
                <label>
                    <span>Password</span>
                    <input value={password} onChange={e => setPassword(e.target.value)}/>
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

