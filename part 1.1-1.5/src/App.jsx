import React from 'react';

// Define the Part component
const Part = ({ partName, exercises }) => {
  return <p>{partName} {exercises}</p>;
};

// Define the Header component
const Header = ({ courseName }) => {
  return <h1>{courseName}</h1>;
};

// Define the Content component
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.name} partName={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

// Define the Total component
const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p>Number of exercises {total}</p>;
};

// Define the App component
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }
    ]
  };

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
