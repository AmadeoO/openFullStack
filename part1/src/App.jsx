const Header = (props) =>{
  console.log(props)
  
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part}: {props.exercises}</p>
  )
}
const Content = (props) =>{
  console.log(props)
  return (
    <div>
      <Part part={props.parts[0].part} exercises={props.parts[0].exercises}/>
      <Part part={props.parts[1].part} exercises={props.parts[1].exercises}/>
      <Part part={props.parts[2].part} exercises={props.parts[2].exercises}/>
    </div>
  )
}
const Total = (props) =>{
  console.log(props)
  return (
    <div>
      <p> Total exercises: {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
   { part: 'Fundamentals of React', exercises: 10},
   { part: 'Using props to pass data', exercises: 7},
   { part: 'State of a component', exercises: 14}

  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </div>
  )
}

export default App