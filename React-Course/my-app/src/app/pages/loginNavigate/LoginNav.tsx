import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/home-page');
    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleClick}>Home Page</button>
        </div>
    );
}
