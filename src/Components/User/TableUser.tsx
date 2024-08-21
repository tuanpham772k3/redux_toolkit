import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../Redux/hook';
import { fetchUserById } from '../../Redux/User/UserSlice';
import { Button, Table } from 'react-bootstrap';
import Update from '../Modal/Update';
import Delete from '../Modal/Delete';
import { Link } from 'react-router-dom';
import CreateUser from '../Modal/CreateUser';

export default function TableUser() {
    const user = useAppSelector((state) => state.users.listUser)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUserById());
    }, []);

    // update
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectorUser, setSeletorUser] = useState({});

    const handleUpdate = (item: any) => {
        setShowUpdateModal(true);
        setSeletorUser(item)
    };
    const handleCloseUpdate = () => setShowUpdateModal(false)

    // Delete
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selector, setSeletor] = useState({});

    const handleDelete = (item: any) => {
        setShowDeleteModal(true);
        setSeletor(item)
    };
    const handleCloseDelete = () => setShowDeleteModal(false)

    // create
    const [showCreateModal, setShowCreateModal] = useState(false);

    const handleCreate = () => {
        setShowCreateModal(true);
    };
    const handleCloseCreate = () => setShowCreateModal(false)

    return (
        <div>
            <button
                className='btn btn-success'
                onClick={() => handleCreate()}
            >
                Create
            </button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((item: any, index: any) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>
                                <button
                                    className="btn btn-warning"
                                    onClick={() => handleUpdate(item)}
                                >
                                    Update
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(item)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Update
                show={showUpdateModal}
                handleClose={handleCloseUpdate}
                updateUser={selectorUser}
            />
            <Delete
                show={showDeleteModal}
                handleClose={handleCloseDelete}
                deleteUser={selector}
            />
            <CreateUser
                show={showCreateModal}
                handleClose={handleCloseCreate}
            />
        </div>
    )
}
