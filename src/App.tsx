import React from 'react';
import Header from './components/Header';
import CourseList from './components/CourseList';
import Footer from './components/Footer';
import { courses } from './data/courses';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <CourseList courses={courses} />
      <Footer />
    </div>
  );
};

export default App;