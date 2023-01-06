import { useCallback, useState } from 'react'

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

        </>
    )
}