import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const QuizPage = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [timer, setTimer] = useState(60 * 60); 
  const navigate = useNavigate();
  const [score, setScore] = useState(0); // Track the score

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/quizzes/${id}`);
        setQuiz(response.data);
      } catch (error) {
        console.error('Error fetching quiz:', error.message);
      }
    };

    fetchQuiz();

    // Timer logic
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmit(); // Automatically submit the quiz when time is up
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [id]);

  const handleSubmit = () => {
    if (submitted) return; // Prevent multiple submissions
    let finalScore = 0;

    // Loop through the quiz questions and check user's selected answers
    quiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        finalScore += 1; // Increment score for each correct answer
      }
    });

    setScore(finalScore); // Set the score

    // Navigate to ScorePage with score, total questions, selected answers, and quiz questions
    navigate('/score', {
      state: {
        score: finalScore,
        totalQuestions: quiz.questions.length,
        selectedAnswers: selectedAnswers,
        quizQuestions: quiz.questions, // Pass the quiz questions data
      },
    });

    setSubmitted(true); // Mark quiz as submitted
  };

  const handleAnswerChange = (answer) => {
    setSelectedAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentQuestionIndex] = answer;
      return newAnswers;
    });
  };

  if (!quiz) return <div>Loading...</div>;

  // Convert timer to minutes and seconds
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <div className='mt-5 mb-5 container'>
      <h2>{quiz.title}</h2>
      <div className="timer">
        <h3>
          Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h3>
      </div>
      <div className="question-container">
        <h3>
          Question {currentQuestionIndex + 1}: {quiz.questions[currentQuestionIndex].question}
        </h3>
        <div className="options-container">
          {quiz.questions[currentQuestionIndex].options.map((option, index) => (
            <div key={index} className="option">
              <input
                type="radio"
                name="answer"
                value={option}
                checked={selectedAnswers[currentQuestionIndex] === option}
                onChange={() => handleAnswerChange(option)}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
        <button
          className="btn btn-primary"
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
          disabled={currentQuestionIndex >= quiz.questions.length - 1}
        >
          Next Question
        </button>
      </div>

      {currentQuestionIndex === quiz.questions.length - 1 && (
        <button className="btn btn-success mt-3" onClick={handleSubmit}>
          Submit Quiz
        </button>
      )}
    </div>
  );
};

export default QuizPage;
