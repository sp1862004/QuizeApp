import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ScorePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, totalQuestions, selectedAnswers, quizQuestions } = location.state || {};

  const [showAnswers, setShowAnswers] = useState(false);

  // Ensure that the data is available
  if (!quizQuestions || !selectedAnswers || score === undefined || totalQuestions === undefined) {
    return <div>Error: Data is missing or incorrect!</div>;
  }

  const toggleAnswers = () => setShowAnswers(!showAnswers);

  return (
    <div className="container mt-5 score-page">
      <h1>Your Score Summary</h1>
      <p>
        You scored <strong>{score}</strong> out of <strong>{totalQuestions}</strong>
      </p>

      <button className="btn btn-primary mt-3" onClick={() => navigate('/')}>
        Restart Quiz
      </button>

      <button className="btn btn-secondary mt-3 ml-3" onClick={toggleAnswers}>
        {showAnswers ? 'Hide Answers' : 'Show Answers'}
      </button>

      {showAnswers && (
        <div className="answers mt-5 mb-5">
          <h3>Correct Answers and Your Answers</h3>
          <ul>
            {quizQuestions.map((question, index) => (
              <li key={index} className="mt-2">
                <strong>Question {index + 1}: {question.question}</strong><br />
                Correct Answer: <span className="text-success">{question.correctAnswer}</span><br />
                Your Answer: {selectedAnswers[index] ? (
                  selectedAnswers[index] === question.correctAnswer
                    ? <span className="text-success">{selectedAnswers[index]}</span>
                    : <span className="text-danger">{selectedAnswers[index]}</span>
                ) : (
                  <span className="text-warning">No answer selected</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ScorePage;
