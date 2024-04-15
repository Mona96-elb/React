import React, {useState} from 'react'

export function PersonTable06(props) {



  return (
    <>
    <div>PersonTable06</div>
    <table>
        <thead>
            <tr> 
                {props.headers.map((item, idx) => {

                  let title = item;
                  return (<th key={idx} data-cell-index={idx}>{title}</th>)}
                )}
             </tr>
        </thead>
        <tbody>
            {
              props.initialData.map((item, idx) =><tr key = {item.id}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.address.city}</td>
                <td>{item.address.country}</td>
                <td>{item.birthDate}</td>
              </tr> )
            }
        </tbody>
    </table>
    </>
  )
}


/* Steps to complete 6a - 6d, explained in each step
 1. Recognize header click
 2. Recognize a click in the sortedColumn and toggle search order from desc to asc
 3. Move tabledata to a state
 4. Recognize which property in object person the clicked column correspond to. 
 5. Sort sortedData according to clicked header
*/