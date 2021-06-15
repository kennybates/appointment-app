import React from 'react';
import {Form} from 'react-bootstrap';

// ModalForm function - creates form component 
function ModalForm (props) {

    return (
        <Form>
            <Form.Group className="mb-3" controlId={`modalForm${props.groupId}`}>
                <Form.Label>Name: </Form.Label>
                <Form.Control 
                    onChange={props.onNameChange} 
                    value={props.name}
                    type='name' 
                    placeholder='Enter name' 
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId={`modalForm-${props.groupId}`}>
                <Form.Label>Phone Number: </Form.Label>
                <Form.Control 
                    value={props.phone} 
                    onChange={props.onPhoneChange} 
                    type='phone' 
                    placeholder='Enter phone' 
                />
            </Form.Group>
        </Form>
    )
}

export default ModalForm;