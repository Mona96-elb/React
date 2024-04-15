import React, {useState} from 'react'

export function PersonTable06b(props) {

  const [sortedColumn, setSortedColumn] = useState();
  const [descending, setDescending] = useState(false);


  const onClickHeader = (e) => 
  {
    let desc = descending;
    const cidx = Number(e.target.dataset.cellIndex);

    if (cidx === sortedColumn)
    {
      desc = !desc;
    }
    console.log(cidx, desc);

    setDescending(desc);
    setSortedColumn(cidx);
  }


  return (
    <>
    <div>PersonTable06b</div>
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
2. Recognize a click in the sortedColumn and toggle search order from desc to asc
   - Create a state called descending and initialze to false
   - if clicked on sortedColumn toggle descending true -> false -> true
   - when rendering, descending sortedColumn should have - added to title, if ascending + added to title
*/
