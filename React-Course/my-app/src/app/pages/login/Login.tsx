import { useState } from "react";

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handelLogin = () => {
        console.log(email);
        console.log(password);
    }

    return (
        <div>
            <form>
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
        </div>
    );
}

