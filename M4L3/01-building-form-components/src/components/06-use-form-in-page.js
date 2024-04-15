import React, {useState} from 'react';
import {seedGenerator } from '../services/seido-helpers';
import Person from '../models/person';
import {FormValidation05} from './05-form-validation';

export function UseFormInPage06() {

    const _seeder = new seedGenerator();
    const p = new Person().seed(_seeder);

    const [person, setPerson] = useState(p);

    //React event bubbling, onSave and onUndo called from FormValidation05 (events upwards flow)
    const onSave = (e) => 
    {
      console.log (`onSave invoked`);
      
      console.log(person);   //original person
      console.log(e.person); //returned by FormUncontrolled02

      setPerson(e.person);
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
       <FormValidation05 friend={person} onSave={onSave} onUndo={onUndo}/>
      </>
    );
  }
