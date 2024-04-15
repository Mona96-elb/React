import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

import {seedGenerator } from '../services/seido-helpers';
import Person from '../models/person';
import {FormInModal08} from './08-form-in-modal';

export function UseFormInModal08a() {

  const _seeder = new seedGenerator();
  const p = new Person().seed(_seeder);

  const [person, setPerson] = useState(p);

  //#region needed for bootstrap Modal
  const [show, setShow] = useState(false);
  const showModal = () => setShow(true);
  //#endregion

  //React event bubbling, onSave and onUndo called from FormValidation05 (events upwards flow)
  const onSave = (e) => 
  {
    console.log (`onSave invoked`);
    
    console.log(person);   //original person
    console.log(e.person); //returned by FormUncontrolled02

    setPerson(e.person); //Once we have the Form in the Modal i can use this
  }  

  const onUndo = (e) => 
  {
    console.log (`onUndo invoked`);
  }  

  return (
    <>
      <ul>
        <li>Name: {person.firstName} {person.lastName} </li>
        <li>Birthdate: {person.birthDate} </li>
        <li>Email: {person.email} </li>
        <li>Address: {person.address.street} </li>
        <li>City: {person.address.zipCode} {person.address.city}</li>
        <li>Country: {person.address.country} </li>
      </ul>

      <Button variant="primary" onClick={showModal}>Edit details</Button>
      <FormInModal08 friend={person} show={show} setShow={setShow} onSave={onSave} onUndo={onUndo}/>
    </>
  );
}
