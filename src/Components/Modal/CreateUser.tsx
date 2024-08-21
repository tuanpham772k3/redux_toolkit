import { SetStateAction, useState } from 'react'
import { createUser} from '../../Redux/User/UserSlice';
import { useAppDispatch } from '../../Redux/hook';
import "../Css/FormModal.css"
import { Button, Modal } from 'react-bootstrap';

export default function CreateUser(props: any) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useAppDispatch()


    function handleName(e: { target: { value: SetStateAction<string> } }) {
        setName(e.target.value);
    }
    function handleEmail(e: { target: { value: SetStateAction<string> } }) {
        setEmail(e.target.value);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch(createUser({ email, name }));
        setName("");
        setEmail("");
        props.handleClose();
    }

    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit} className='modal-form'>
                        <div className="form-group">
                            <label>ID:</label>
                            <input
                                type="number"
                                name="id"
                                // onChange={handleChange}
                                disabled
                            />
                        </div>
                        <div className="form-group">
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                onChange={handleName}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleEmail}
                                required
                            />
                        </div>
                        <Button variant="secondary" onClick={props.handleClose} className='float-right'>
                            Close
                        </Button>
                        {" "}
                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}
