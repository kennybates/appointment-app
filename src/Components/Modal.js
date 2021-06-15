import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ModalForm from './ModalForm';

// ModalComponent - component function for modal
function ModalComponent(props) {

    // runs when page renders
    // useEffect(() => console.log(props));  

    
    // buttonDisabled function to help with validation so 'save changes' can't be submitted without input field
    // check logic for later
    const buttonDisabled = (props.formCheck ? (
        <Button 
            variant="primary" 
            onClick={() => props.onModalSubmit(props.currentlySelected)}
            active> Save changes
        </Button>
    ) : (
        <Button 
            variant="primary" 
            onClick={() => props.onModalSubmit(props.currentlySelected)}
            disabled
            >Save changes
        </Button>
    ));

        return (
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Dialog> 
                <Modal.Header closeButton>
                    <Modal.Title>Appoinment Info</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <ModalForm 
                            name={props.name}  
                            phone={props.phone}
                            onPhoneChange={props.onPhoneChange}
                            onNameChange={props.onNameChange}
                        />
                    </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={props.handleClose}>Close</Button>
                                {buttonDisabled}
                        </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        )
}

export default ModalComponent;