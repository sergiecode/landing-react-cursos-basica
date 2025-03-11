import React from 'react';
import { Course } from '../types';
import CourseCard from './CourseCard';
import './CourseList.css';

interface CourseListProps {
  courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <div className="container">
      <h2 className="section-title">Mis Cursos</h2>
      <div className="courses" id="courses-container">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;