import React, {useState} from 'react'

export function PersonTable06d(props) {

  const [sortedColumn, setSortedColumn] = useState();
  const [descending, setDescending] = useState(false);
  const [data, setData] = useState(props.initialData);


  const onClickHeader = (e) => 
  {
    let desc = descending;
    const cidx = Number(e.target.dataset.cellIndex);
    const sortedData = JSON.parse(JSON.stringify(data));

    if (cidx === sortedColumn)
    {
      desc = !desc;
    }
    console.log(cidx, desc);
    console.log("sortedData[0] value", propValuefromHeaderIdx(sortedData[0], cidx));

    sortedData.sort((aObject, bObject)=> {

      //field in the table to sort accoring to - correspond to this value
      const aValue = propValuefromHeaderIdx(aObject, cidx);
      const bValue = propValuefromHeaderIdx(bObject, cidx);

      if (aValue === bValue) {
        return 0;
      }

      //tell sort how to objects compare relative descending
      if (!desc)
        return aValue < bValue ?-1 :1;
      else
        return aValue > bValue ?-1 :1;
    });

    setDescending(desc);
    setSortedColumn(cidx);
    setData(sortedData);
  }


  return (
    <>
    <div>PersonTable06d</div>
    <table>
        <thead onClick={onClickHeader}>
            <tr> 
                {props.headers.map((item, idx) => {

                  let title = item;
                  if (idx === sortedColumn)
                  {
                    title += (descending) ?"-" :"+";
                  }

                return (<th key={idx} data-cell-index={idx}>{title}</th>)}
                )}
             </tr>
        </thead>
        <tbody>
            {
              data.map((item, idx) =><tr key = {item.id}>
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

function propValuefromHeaderIdx(person, headIdx)
{
  if (headIdx === 0) return person.firstName;
  if (headIdx === 1) return person.lastName;
  if (headIdx === 2) return person.address.city;
  if (headIdx === 3) return person.address.country;
  if (headIdx === 4) return person.birthDate;

  return undefined
}

/* Exercise
In PersonTable06
5. Sort sortedData according to clicked header
  - add a lambda function to sortedData.sort((a,b) => { return ...})
  - it should return
    0: if properties in objects a and b corresponding to clicked header are equal
    
  - -1: if properties in objects a are less than b and descending is false
  -  1: if properties in objects a are greater than b and descending is false
  - -1: if properties in objects a are greater than b and descending is true
  -  1: if properties in objects a are less than b and descending is true
   
  This can be done with a few lines of JavaScript code
      if (!desc)
        return aValue < bValue ?-1 :1;
      else
        return aValue > bValue ?-1 :1;

   - store sortedData into the data state to redraw the table


*/
