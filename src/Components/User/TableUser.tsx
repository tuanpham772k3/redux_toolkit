import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../Redux/hook';
import { fetchUserById } from '../../Redux/User/UserSlice';

export default function TableUser() {
    const user = useAppSelector((state) => state.users.listUser)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUserById());
    }, [])


    return (
        <div>
            {JSON.stringify(user)}
        </div>
    )
}
