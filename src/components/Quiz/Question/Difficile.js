import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import style from "./Difficile.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Moyen() {
  const [questions, setQuestions] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=20&category=22&difficulty=hard&type=multiple"
    )
      .then((reponse) => reponse.json())
      .then((res) => {
        setQuestions(res);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleNextQuestion = () => {
    const selectedAnswer = document.querySelector(
      `input[name="item.question-${currentQuestionIndex}-item"]:checked`
    )?.value;
    const correctAnswer =
      questions.results[currentQuestionIndex].correct_answer;
    if (selectedAnswer === correctAnswer) {
      setScore(score + 10);
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  const handleFinishQuiz = () => {
    setCurrentQuestionIndex(0);
  };

  const handleRefresh = () => {
    window.location.reload();
    setScore(0);
  };
  return (
    <div className="container">
      <div className="list-group">
        <h2 className="p-2 mb- text-bg-success text-center p-3">QUIZ</h2>
        {questions.results ? (
          <>
            <ul className="list-group center-block w-50 mt-5 ">
              <li className="list-group-item  fixed">
                <p>
                  Question {currentQuestionIndex + 1} /
                  {questions.results.length}
                </p>
                <h5 className=" text-center p-4">
                  {questions.results[currentQuestionIndex].question}
                </h5>
              </li>

              {questions.results[currentQuestionIndex].incorrect_answers.map(
                (option, index) => (
                  <li className="list-group-item  flex-center" key={index}>
                    <input
                      type="checkbox"
                      className="w-50 m-md-auto"
                      id={`item.question-${currentQuestionIndex}-item-${index}`}
                      name={`item.question-${currentQuestionIndex}-item`}
                      value={option}
                    />

                    <label
                      htmlFor={`item.question-${currentQuestionIndex}-item-${index}`}
                      className="p-2"
                      id={style.lab}
                    >
                      {option}
                    </label>
                  </li>
                )
              )}

              <li className="list-group-item  flex-center">
                <input
                  type="checkbox"
                  className="w-50 m-md-auto"
                  id={`item.question-${currentQuestionIndex}-item-correct`}
                  name={`item.question-${currentQuestionIndex}-item`}
                  value={questions.results[currentQuestionIndex].correct_answer}
                />

                <label
                  htmlFor={`item.question-${currentQuestionIndex}-item-correct`}
                  className="p-2"
                  id={style.lab}
                >
                  {questions.results[currentQuestionIndex].correct_answer}
                  {console.log("score", score)}
                </label>
              </li>
            </ul>

            {currentQuestionIndex < questions.results.length - 1 ? (
              <button
                className=" p-2 w-50 mt-4 text-center justify-content-center border-0"
                onClick={handleNextQuestion}
                id={style.btn}
              >
                Suivant
              </button>
            ) : (
              <div>
                <button
                  className="bg-danger p-2 w-50 mt-4 text-center justify-content-center border-0"
                  onClick={handleShowModal}
                  id={style.btn}
                >
                  Terminer
                </button>
                {showModal && (
                  <div className="custom-modal" id={style.costumModal}>
                    <div className="modal-header" id={style.headerModal}>
                      <h4 className="modal-title">Résultats du quiz</h4>
                      <button
                        type="button"
                        className="close"
                        onClick={handleCloseModal}
                      >
                        <span>&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <h5 className="ml-3">Votre score est : {score}</h5>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleRefresh}
                      >
                        Fermer
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}
export default Moyen;
