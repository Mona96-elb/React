import React, {useState} from 'react';
import {seedGenerator } from '../services/seido-helpers';
import Animal from '../models/animal';
import {FormAnimal09b} from './09b-form-animal';

export function AnimalPage10() {

    const _seeder = new seedGenerator();
    const a = new Animal().seed(_seeder);

    const [animal, setAnimal] = useState(a);

    //React event bubbling, onSave and onUndo called from FormValidation05 (events upwards flow)
    const onSave = (e) => 
    {
      console.log (`onSave invoked`);
      
      console.log(animal);   
      console.log(e.animal); 

      setAnimal(e.animal);
    }  

    const onUndo = (e) => 
    {
      console.log (`onUndo invoked`);
    }  

    return (
      <>
        <ul>
          <li>Name: {animal.name}</li>
          <li>Type: {animal.type} </li>
        </ul>
       <FormAnimal09b animal={animal} onSave={onSave} onUndo={onUndo}/>
      </>
    );
  }
