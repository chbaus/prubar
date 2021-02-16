import React from "react";
import ReactDOM from "react-dom";

const Part = (props) => {
  return (
    <p>
      {props.name}:&nbsp; {props.exercises}
    </p>
  );
};

const Header = ({course})=> <h1>{course}</h1>;

// const Header = (props) => {
//   return <h1>{props.course}</h1>;
// };

const Content = (props) => {
  return (
    <div>
      {props.parts.map((parte, index) => (
        <Part name={parte} exercises={props.exercises[index]} key={index} />
      ))}
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises:&nbsp;
      {props.exercises.reduce((ant, act) => ant + act)}
    </p>
  );
};
const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  return (
    <div>
      <Header course={course} />
      <Content
        parts={[part1, part2, part3]}
        exercises={[exercises1, exercises2, exercises3]}
      />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
