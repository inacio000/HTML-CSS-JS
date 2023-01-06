import { useCallback, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useUserLogged } from '../../shared/hooks'

export const DashboardPage = () => {

    const [list, setList] = useState<string[]>(
            [
                'Test1',
                'Test2',
                'Test3',
                'Test4'
            ]
        );
    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback( (e) => {
        if (e.key === 'Enter') {
            // if (e.currentTarget.value.length === 0) return;
            if (e.currentTarget.value.trim().length === 0) return;

            const value = e.currentTarget.value;
            e.currentTarget.value = '';
            setList( (oldList) => {

                if (oldList.includes(value)) return oldList;

                return [...oldList, value];
            });
        }
    }, [list]);

    const counterRef = useRef({ counter: 0 })

    const {userName, logout} = useUserLogged()

    return (
        <>

            <h1>List</h1>

            <input 
                onKeyDown={handleInputKeyDown}
            />
            <ul>
                 {list.map( (value) => {
                    return <li key={value}>{value}</li>
                 })}
                 
            </ul>



            {/* <h1>Dashboard Page</h1>
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
            </div> */}
        </>
    )
}