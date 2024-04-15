import React, {useState} from 'react';
import {seedGenerator } from './services/seido-helpers';
import Person from './models/person';
import Animal from './models/animal';

import {Form01} from './components/01-form';
import {FormUncontrolled02} from './components/02-form-uncontrolled';
import {FormControlled03} from './components/03-form-controlled';
import {FormHandleChange04} from './components/04-form-handle-change';
import {FormValidation05} from './components/05-form-validation';
import {UseFormInPage06} from './components/06-use-form-in-page';
import {UseBootstrapModal07} from './components/07-bootstrap-modal';
import {UseFormInModal08a} from './components/08a-use-form-in-modal';

import {FormAnimal09} from './components/09-form-animal';
import {FormAnimal09a} from './components/09a-form-animal';
import {FormAnimal09b} from './components/09b-form-animal';
import {AnimalPage10} from './components/10-form-animal-in-page';
import {AnimalPage10a} from './components/10a-form-animal-in-page';
import {AnimalInModal11a} from './components/11a-form-animal-in-modal';

import './App.css';

function App() {

    const _seeder = new seedGenerator();
    const person = new Person().seed(_seeder);
    const animal = new Animal().seed(_seeder);

    //React event bubbling, onSave and onUndo called from FormValidation05 (events upwards flow)
    const onSave = (e) => 
    {
      console.log (`onSave invoked`);
      
      console.log(person);   //original person
      console.log(e.person); //returned by FormUncontrolled02
      
    }  

    const onUndo = (e) => 
    {
      console.log (`onUndo invoked`);
    }  


    const onSaveAnimal = (e) => 
    {
      console.log (`onSaveAnimal invoked`);
      
      console.log(animal);   //original person
      console.log(e.animal); //returned by FormUncontrolled02
    }  


    return (
      <>
            <AnimalInModal11a/>
      </>
    );
  }
/*
       <Form01 onSave={onSave} onUndo={onUndo}/>
       <FormUncontrolled02 onSave={onSave} onUndo={onUndo}/>
       <FormControlled03 friend={person} onSave={onSave} onUndo={onUndo}/>
       <FormHandleChange04 friend={person} onSave={onSave} onUndo={onUndo}/>
       <FormValidation05 friend={person} onSave={onSave} onUndo={onUndo}/>

       <UseFormInPage06/>

       <UseBootstrapModal07/>
       
       <UseFormInModal08a/>

             <FormAnimal09 animal={animal} onSave={onSaveAnimal} onUndo={onUndo}/> 
                   <AnimalPage10/> 
                         <AnimalPage10a/> 

       */
export default App;
