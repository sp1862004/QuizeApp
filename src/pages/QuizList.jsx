import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [filteredQuizzes, setFilteredQuizzes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/quizzes');
        setQuizzes(response.data);
        setFilteredQuizzes(response.data);
      } catch (error) {
        console.error('Error fetching quizzes:', error.message);
      }
    };

    fetchQuizzes();
  }, []);

  // Filter quizzes based on search term and selected category
  useEffect(() => {
    let updatedQuizzes = quizzes;

    if (searchTerm) {
      updatedQuizzes = updatedQuizzes.filter((quiz) =>
        quiz.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category) {
      updatedQuizzes = updatedQuizzes.filter((quiz) => quiz.category === category);
    }

    setFilteredQuizzes(updatedQuizzes);
  }, [searchTerm, category, quizzes]);

  // Handle delete request
  const handleDelete = async (quizId) => {
    if (window.confirm("Are you sure you want to delete this quiz?")) {
      try {
        await axios.delete(`http://localhost:5000/quizzes/${quizId}`);
        setQuizzes(quizzes.filter((quiz) => quiz.id !== quizId));
        setFilteredQuizzes(filteredQuizzes.filter((quiz) => quiz.id !== quizId));
      } catch (error) {
        console.error('Error deleting quiz:', error.message);
      }
    }
  };

  // Function to get the score for a quiz
  const getQuizScore = (quizId) => {
    const scoreData = localStorage.getItem(`quizScore_${quizId}`);
    return scoreData ? JSON.parse(scoreData) : null;
  };

  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center mb-4">Available Quizzes</h1>

      <div className="row mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search by quiz title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="col-md-6 mt-1">
          <select
            className="form-control "
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Filter by category...</option>
            <option value="Science">React</option>
            <option value="Math">Node</option>
            <option value="History">HTML</option>
            <option value="Programming">CSS</option>
          </select>
        </div>
      </div>

      <div className="row">
        {filteredQuizzes.length > 0 ? (
          filteredQuizzes.map((quiz) => {
            const scoreData = getQuizScore(quiz.id);
            return (
              <div key={quiz.id} className="col-md-4 mb-4">
                <div className="card animated fadeIn">
                  <div className="card-body">
                    <h5 className="card-title">{quiz.title}</h5>
                    <p className="card-text">{quiz.description}</p>

                    {scoreData && (
                      <p className="card-text text-success">
                        Your Score: {scoreData.score} / {scoreData.total}
                      </p>
                    )}

                    <Link to={`/quiz/${quiz.id}`} className="btn btn-primary">
                      Start Quiz
                    </Link>

                    <button
                      className="btn btn-danger ml-3 mx-3 mb-2"
                      onClick={() => handleDelete(quiz.id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-12">
            <p className="text-center">No quizzes found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizList;
