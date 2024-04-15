import React from 'react';
import PropTypes from 'prop-types';

class TableAsClass01 extends React.Component {
  constructor(props) {
    super();
    this.state = { data: props.initialData };
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            {this.props.headers.map((title) => (
              <th>{title}</th>
            ))}
          </tr>
        </thead>
      </table>
    );
  }
}

//using React prop types to make the data more type secure
//https://reactjs.org/docs/typechecking-with-proptypes.html#gatsby-focus-wrapper
TableAsClass01.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
  initialData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};

export default TableAsClass01;