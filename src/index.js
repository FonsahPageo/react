import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import FailMessage from './FailMessage';
import PassMessage from './PassMessage'


// ReactDOM.render(<App isPass={true} />, document.getElementById('root'));

// const name = "Ash Prince"
// const element = (
//     <h1>
//         Hello, {name}. Welcome to GeeksforGeeks.
//     </h1>
// )


// let i = 4;

// const element = (
//   <h1>
//       <h1>{i == 1? "Hello Ash" : "Goodbye"}</h1>
//   </h1>
// )

// wraping elements in JSX
// const element = (
//   <div>
//       <h1>This is Heading 1</h1>
//       <h2>This is Heading 2</h2>
//       <h3>This is Heading 3</h3>
//   </div>
// )
// ReactDOM.render(element, document.getElementById('root'));

// lists in DOM
// const numbers = [1, 2, 3, 4, 5];
// const updatedNums = numbers.map((number) => {
//   return <li>{number}</li>;
// });
// ReactDOM.render(
//   <ul>
//     {updatedNums}
//   </ul>,
//   document.getElementById('root')
// );

// rendering lists in components
// function Navmenu(props) {
//   const list = props.menuitems;
//   const updatedList = list.map((listItems) => {
//     return <li key={listItems.toString()}>{listItems}</li>;
//   });
//   return (
//     <ul>{updatedList}</ul>
//   );
// }
// const menuitems = ['a', 'b', 'c', 'd', 'e'];
// ReactDOM.render(
//   <Navmenu menuitems={menuitems} />, document.getElementById('root')
// );

// forms
// method 1, when the user changes the input, we get the output in the console
// class App extends React.Component {
//   onInputChange(event) {
//     console.log(event.target.value);
//   }

//   render() {
//     return (
//       <div>
//         <form>
//           <label>Enter Text </label>
//           <input type='text' onChange={this.onInputChange} />
//         </form>
//       </div>
//     );
//   }
// }

// method 2, update the value of the input when the user changes its value
class App extends React.Component {
  state = { inputValue: '' };

  render() {
    return (
      <div>
        <form>
          <label>Enter Text </label>
          <input type='text'
            value={this.state.inputValue}
            onChange={(e) => this.setState(
              {inputValue: e.target.value }
            )}
          />
        </form>
        <br />
        <div>
          Entered Value: {this.state.inputValue}
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));