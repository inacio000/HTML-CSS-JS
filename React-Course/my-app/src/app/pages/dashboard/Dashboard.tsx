import { useCallback, useState } from 'react'

interface IListItem {
    title: string;
    isSelected: boolean;
}

export const DashboardPage = () => {
    const [list, setList] = useState<IListItem[]>([]);

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback( (e) => {
        if (e.key === 'Enter') {
            // if (e.currentTarget.value.length === 0) return;
            if (e.currentTarget.value.trim().length === 0) return;

            const value = e.currentTarget.value;

            e.currentTarget.value = '';

            setList( (oldList) => {

                if (oldList.some( (listItem) => listItem.title === value)) return oldList;

                return [
                    ...oldList, 
                    { 
                        title: value,
                        isSelected: false
                    }
                ];
            });
        }
    }, []);


    return (
        <>

            <h1>List</h1>

            <input 
                onKeyDown={handleInputKeyDown}
            />
            <p>{list.filter( (listItem) => listItem.isSelected).length}</p>
            <ul>
                 {list.map( (listItem) => {
                    return <li key={listItem.title}>
                            <input 
                                type="checkbox" 
                                checked={listItem.isSelected}
                                onChange={ () => {
                                    setList(oldList => {
                                            return oldList.map(oldListItem => {
                                                const newIsSelected = oldListItem.title === listItem.title? !oldListItem.isSelected : oldListItem.isSelected;
                                                return {
                                                    ...oldListItem,
                                                isSelected: newIsSelected
                                            }
                                        });
                                    })
                                }}
                            />
                            {listItem.title}
                        </li>
                 })}
                 
            </ul>

        </>
    )
}