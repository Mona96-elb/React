import React, {useState} from 'react'

export function PersonTable06c(props) {

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

    setDescending(desc);
    setSortedColumn(cidx);
  }


  return (
    <>
    <div>PersonTable06c</div>
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
3. Move tabledata to a state
   - Create a state called data and initialze to props.initialData
   - In the click event handler, Clone state data into a variable called sortedData
     use JSON.parse(JSON.stringify(obj)); to clone

4. Recognize which property in object person the clicked column correspond to. For example,
   a click in header firstName should pickout property and value firstName of person object
   - create a function propValuefromHeaderIdx(person, headIdx) that returns corresponding props
      person.firstName corresponds to headIdx 0
      person.lastName corresponds to headIdx 1
      person.address.city corresponds to headIdx 2
      person.address.country corresponds to headIdx 3
      person.birthday to headIdx 4
   - verify by printing out the sortedData[0] (which is a person) that corresponds to clicked indes

*/
