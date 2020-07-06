import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css'

/* function Hi(props) {
  return <div>Hello {props.name}!</div>;
}

ReactDOM.render(<Hi name="Dave"/>, document.querySelector('#root'));
 */


// function HiFullName(props) {
//   return (
//     <div>Hi {props.firstName} {props.lastName}!</div>
//   );
// }

// ReactDOM.render(<HiFullName firstName="Dave" lastName="Ceddia" />, document.querySelector('#root'));

//****************************************** */
//ES6 syntax
// const Hi = ({ name }) => {
//   return <div>Hello {name}!</div>;
// }

// function Hi({ name }) {
//   return <div>Hello {name}!</div>;
// }

// Optional step 3: Removing the braces, which makes the
// "return" implicit so we can remove that too. Leaving the parens
// in for readability:
// const Hi = ({ name }) => (
//   <div>Hello {name}!</div>
// )

// const Hi = ({ name }) => <div>Hello {name}!</div>;

// A constant holding an anonymous function:
// const Hi = function({ name }) {
//   return <div>Hello {name}!</div>;
//}


/* function MediaCard (props){
return (
      <div><h2>Hi {props.title} </h2> <p>{props.body} </p> <img src= {props.imageUrl}/></div>
    );
  }

ReactDOM.render(<MediaCard title="Dave" body="Sol" imageUrl="big"/>, document.querySelector('#root'));
 */

const Gate = ({ props}) => {
return (
  isOpen ? "open" : "closed"
  );
}

ReactDOM.render(<Gate props="isOpen" />, document.querySelector('#root'));