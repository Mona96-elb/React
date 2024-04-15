import React from 'react';
import PropTypes from 'prop-types';


export default function TableAsFunc02(props)
{
  return (
    <table>
      <thead>
        <tr>
          {props.headers.map((title, idx) => (
            <th key={idx}>{title}</th>
          ))}
        </tr>
      </thead>
    </table>
  );
}

//using React prop types to make the data more type secure
//https://reactjs.org/docs/typechecking-with-proptypes.html#gatsby-focus-wrapper
TableAsFunc02.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
  initialData: PropTypes.arrayOf(PropTypes.object),
};
