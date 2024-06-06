import React,{useState} from 'react'
import {Button, Modal} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { editTask } from '../../Redux/Actions/listTask';

const Edit = ({task}) => {
    const [show, setShow] = useState(false);
    const [newTask, setNewTask] = useState(task.text)

    const dispatch = useDispatch()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEdit = () => {
        dispatch(editTask(task.id, newTask))
        handleClose()
    }

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            EDIT
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Change the task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleEdit}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default Edit
