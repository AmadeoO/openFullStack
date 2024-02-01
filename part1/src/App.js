import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//Componentes
// const App = () => {
//   console.log('Hello from component')
//   return (
//     <div>
//       <p>Hello world</p>
//     </div>
//   )
// }
// JSX
// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   console.log(now, a+b)

//   return (
//     <div>
//       <p>Hello world, it is {now.toString()}</p>
//       <p>{a} plus {b} is {a+b}</p>
//     </div>
//   )
// }

// // Componentes multiples y props

// const Hello = (props) => {
//   return (
//     <div>
//       <p>Hello {props.name}, you are {props.age} years old</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Alicia'
//   const age = 23
//   return (
//     <div>
//       <h1> Greetings</h1>
//       <Hello name='Amadeo' age={33} />
//       <Hello name={name} age = {age} />
//       <Hello name='Bian' age = {10 + 20} />
//     </div>
//   )
// }

// ERROR : no renderiza el objeto
// const App = () => {
//   const friends = [
//     { name: 'Peter', age: 4 },
//     { name: 'Maya', age: 10 },
//   ]

//   return (
//     <div>
//       <p>{friends[0].name} and {friends[0].age}</p> Forma correcta se debe envia individualmente los valores
//       <p>{friends[1]}</p> Forma incorrecta no puede renderizar un objeto
//     </div>
//   )
// }
export default App;
