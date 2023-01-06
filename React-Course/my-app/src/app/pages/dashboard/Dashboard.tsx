import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useUserLogged } from '../../shared/hooks'

export const DashboardPage = () => {

    const counterRef = useRef({ counter: 0 })

    const {userName, logout} = useUserLogged()

    return (
        <>
            <h1>Dashboard Page</h1>
            <p>{userName}</p>

            <p>Counter: {counterRef.current.counter}</p>

            <button onClick={() => counterRef.current.counter++}>Sum</button>
            <button onClick={() => console.log(counterRef.current.counter++)}>SumConsole</button>

            <button onClick={logout}>Logout</button>

            <div>
                <Link to='/login-page'>Login Main</Link>
            </div>

            <div>
                <Link to='/login-use-callback'>Login useCallback</Link>
            </div>

            <div>
                <Link to='/login-use-ref'>Login useRef</Link>
            </div>
        </>
    )
}