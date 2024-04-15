import React from 'react'
import {Save, ArrowCounterclockwise} from 'react-bootstrap-icons'

export function FormControlled03(props) {

  const friend = props.friend;

  const onSave = (e) => 
  { 
    //We are going to add validation here later
    e.person = friend;
    props.onSave(e);
  }  

  return (
    <>
      <div className="container px-4 py-4" id="edit-item">
        <h1>
          Edit details of my friend {props.friend.firstName} 
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
                  <input type="text" className="form-control" id="firstName" value={friend.firstName} required/>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">Last name</label>
                  <input type="text" className="form-control" id="lastName" value={friend.lastName} required/>
                </div>
            
                <div className="col-sm-6">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" value={friend.email} required/>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="birthday" className="form-label">Birthday</label>
                  <input type="date" className="form-control" id="birthday" value={friend.birthDate} required/>
                </div>

                <div className="row g-3 visible">
                  <div className="col-12">
                    <label htmlFor="street" className="form-label">Address</label>
                    <input type="text" className="form-control" id="street" value={friend.address.street} required/>
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="zip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="zip" value={friend.address.zipCode} required/>
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" value={friend.address.city} required />
                  </div>

                  <div className="col-md-5">
                    <label htmlFor="country" className="form-label">Country</label>
                    <input type="text"  className="form-control" id="country" value={friend.address.country} required/>
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
