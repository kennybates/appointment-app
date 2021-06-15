
/*
A simple ReactJS app that allows a user to select a given time slot and enter name and phone number into modal to reserve appointment.

Application requirements:
1. Build a screen which shows a list of hour long time slots from 9 a.m. to 5 p.m.
2. when one time slot is clicked, pop up a modal which asks for name and phone number.
3. When the name and phone number is subitted, the time slot selected should change to red, indicating the time slot is no longer available.
4. If the red time slot is clicked again, the modal will pop up with the name and phone number for that appointment pre-populated. Users
  wil be able to edit the name and phone number to change the user for the appointment.
*/

import React, { useState } from 'react';
import ModalComponent from './Components/Modal'; //Modal Component
import { ListGroup } from 'react-bootstrap'; // ListGroup Component
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  // Declaring new state variables 
  const [stateShow, setStateShow] = useState(false);
  const [currentName, setCurrentName] = useState('');
  const [currentPhone, setCurrentPhone] = useState('');
  const [selectedListID, setSelectedListID] = useState('');
  const [formValid, setFormValid] = useState(false);

  // useState to store and update userData/setUserData for each Modal
  const [userData, setUserData] = useState({
    'Modal1': ['', ''],
    'Modal2': ['', ''],
    'Modal3': ['', ''],
    'Modal4': ['', ''],
    'Modal5': ['', ''],
    'Modal6': ['', ''],
    'Modal7': ['', ''],
    'Modal8': ['', ''],
    
  });

  // Variable for immutable state
  const updateUserData = (name, phone, modalID) => {
    setUserData (
      {...userData, [modalID] : [name, phone]}
    )
  };

  // handleClose variable for Modal Close
  const handleClose = () => setStateShow(false);

  // handleShow variable for Modal Open
  const handleShow = (event) => {
    setSelectedListID(event.target.id);
    setCurrentName(userData[event.target.id][0]);
    setCurrentPhone(userData[event.target.id][1]);
    setStateShow(true);
  };
  
  // onModalSubmit variable to handle submit button
  const onModalSubmit = () => {
    updateUserData(currentName, currentPhone, selectedListID);
    document.getElementById(selectedListID).classList.add('bg-danger');
    handleClose();
  };

  // onNameChange variable to handle simple validation for name input
  const onNameChange = (e) => {
    let currentVal = e.target.value;
    setCurrentName(currentVal); 
    if (currentVal !== '' && currentPhone.length >= 8) {
      setFormValid(true);
    }

  };

  // onPhoneChange variable to handle simple validation for phone input
  const onPhoneChange = (e) => {
    let currentVal = e.target.value;
    setCurrentPhone(e.target.value); 
    if (currentVal.length > 8 && currentName.length > 2){
      setFormValid(true);
    }

  };

  // timeArray[] to populate given times of appointment
  const timeArray = ['9:00 A.M. - 10:00 A.M.', 
                    '10:00 A.M. - 11:OO A.M.', 
                    '11:00 A.M. - 12:00 P.M.', 
                    '12:00 P.M. - 1:00 P.M.', 
                    '1:00 P.M. - 2:00 P.M.', 
                    '2:00 P.M. - 3:00 P.M.', 
                    '3:00 P.M. - 4:00 P.M', 
                    '4:00 P.M. - 5:00 P.M.'
                    ];

  // appointmentItem variable to map timeArray[] - value and index to populate list group 
  const appointmentItem = timeArray.map((val, idx) => <ListGroup.Item onClick={handleShow} id={`Modal${idx+1}`} key={idx}>{val}</ListGroup.Item>);


  return (
    <div align='center' className="App">
      <h2 align='center'>Select appointment today!</h2>
        <br />
        <ModalComponent 
          show={stateShow} 
          handleClose={handleClose}
          name={currentName}
          phone={currentPhone}
          onPhoneChange={onPhoneChange}
          onNameChange={onNameChange}
          onModalSubmit={onModalSubmit}
          currentlySelected={setSelectedListID}
          formCheck={formValid}
        />
          <ListGroup align='center' style={{width: '40%'}}>
            {appointmentItem}
          </ListGroup>
    </div>
  );
}

export default App;





