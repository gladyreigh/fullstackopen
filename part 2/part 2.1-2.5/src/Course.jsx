import React from 'react';
import Header from './Header';
import Content from './Content';

const Course = ({ course }) => {
  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <p>Total exercises: {totalExercises}</p>
    </div>
  );
};

export default Course;
