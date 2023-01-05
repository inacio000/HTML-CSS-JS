import { Link } from 'react-router-dom'

export const DashboardPage = () => {
    return (
        <div>
            <h1>Dashboard Page</h1>
            <Link to='/login-page'>Login</Link>
        </div>
    )
}