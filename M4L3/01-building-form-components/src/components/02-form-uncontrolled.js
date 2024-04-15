import React from 'react'
import {Save, ArrowCounterclockwise} from 'react-bootstrap-icons'

export function FormUncontrolled02(props) {

  const onSave = (e) => 
  { 
    //We are going to add validation here later 
    
    const friend = {};
    friend.firstName = document.querySelector('#firstName').value;
    friend.lastName = document.querySelector('#lastName').value;
    friend.email = document.querySelector('#email').value;
    friend.birthDate = document.querySelector('#birthday').value;
    
    friend.address = {};
    friend.address.street = document.querySelector('#street').value;
    friend.address.zipCode = document.querySelector('#zip').value;
    friend.address.city = document.querySelector('#city').value;
    friend.address.country = document.querySelector('#country').value;

    e.person = friend;
    props.onSave(e);
  }  

  return (
    <>
      <div className="container px-4 py-4" id="edit-item">
        <h1>
          Edit details of my friend
          <button className="btn btn-primary-outline" onClick={onSave}>
            <Save className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"/>
          </button>
          <button className="btn btn-primary-outline" onClick={props.onUndo}>
            <ArrowCounterclockwise className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"/>
          </button>
        </h1>
        <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
          <div className="col-md-7 col-lg-8">
            <form className="needs-validation">
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">First name</label>
                  <input type="text" className="form-control" id="firstName" required/>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">Last name</label>
                  <input type="text" className="form-control" id="lastName" required/>
                </div>
            
                <div className="col-sm-6">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" required/>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="birthday" className="form-label">Birthday</label>
                  <input type="date" className="form-control" id="birthday" required/>
                </div>

                <div className="row g-3 visible">
                  <div className="col-12">
                    <label htmlFor="street" className="form-label">Address</label>
                    <input type="text" className="form-control" id="street" required/>
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="zip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="zip" required/>
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" required />
                  </div>

                  <div className="col-md-5">
                    <label htmlFor="country" className="form-label">Country</label>
                    <input type="text"  className="form-control" id="country" required/>
                  </div>
                </div>
              </div>
            </form>            
          </div>
        </div>
      </div>
    </>
  )
}