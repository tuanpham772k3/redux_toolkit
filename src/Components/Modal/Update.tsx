import React from 'react'
import { Button, Modal } from 'react-bootstrap'

export default function Update({ show, handleClose, updateUser }) {
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <form onSubmit={handleSubmit} className='modal-form'>
                        <div className="form-group">
                            <label>ID:</label>
                            <input
                                type="number"
                                name="id"
                                value={formData.id}
                                onChange={handleChange}
                                disabled
                            />
                        </div>
                        <div className="form-group">
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <Button variant="secondary" onClick={handleClose} className='float-right'>
                            Close
                        </Button>
                        {" "}
                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                    </form> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
