import React, {useState} from 'react'

export function PersonTable06a(props) {

  const [sortedColumn, setSortedColumn] = useState();
  const [descending, setDescending] = useState(false);


  const onClickHeader = (e) => 
  {
    const cidx = Number(e.target.dataset.cellIndex);

    //print out the clicked column
    console.log(cidx);

    //save the new state
    setSortedColumn(cidx);
  }


  return (
    <>
    <div>PersonTable06a</div>
    <table>
        <thead onClick={onClickHeader}>
            <tr> 
                {props.headers.map((item, idx) => {

                  //in preparation for next step, I make the lambda a full function with ()=> {return(<>)}
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

/* Exercise
In PersonTable06
1. Recognize header click
   -  Assign a unique cellindex (0,1,2 etc) to each cell in the header in an element property called data-cell-index
   -  Assign a click handler to the header
   -  Create a state sortedColumn and assign it to the cellindex value of the clicked header cell
   -  Make a console.log(sortedColumn)
*/
