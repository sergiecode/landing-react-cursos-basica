import React, { useEffect, useRef } from 'react';
import { Course } from '../types';
import './CourseCard.css';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div className="course-card" ref={cardRef}>
      <div className="video-container">
        <iframe
          src={`https://www.youtube.com/embed/${course.id}`}
          title={course.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="course-info">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-desc">{course.description}</p>
        <div className="course-meta">
          <span>{course.duration}</span>
          <span>{course.level}</span>
        </div>
        <a href={`https://www.youtube.com/watch?v=${course.id}`} className="btn" target="_blank" rel="noopener noreferrer">
          Ver curso
        </a>
      </div>
    </div>
  );
};

export default CourseCard;