import { useState } from "react";
import questions from "../../questions/questions";
import style from "./question.module.css";

const QuestionsPage = () => {
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (index, value) => {
    setAnswers({ ...answers, [index]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentInfo = JSON.parse(localStorage.getItem("studentInfo")) || {};
    const results = JSON.parse(localStorage.getItem("results")) || [];

    const finalAnswers = questions.map((_, index) =>
      answers[index] ? answers[index] : "Cavab qeyd edilməyib."
    );

    results.push({ student: studentInfo, answers: finalAnswers });
    localStorage.setItem("results", JSON.stringify(results));
    alert("Cevaplarınız qeydə alındı.");
    window.location.href = "/";
  };

  return (
    <div className={`${style.question_container}`}>
      <h1>Suallar</h1>
      <form className={`${style.question_form}`} onSubmit={handleSubmit}>
        {questions.map((item, index) => (
          <div className={`${style.question_div}`} key={index}>
            <label>{item.question}</label>
            {item.options.map((option, i) => (
              <div className={`${style.question_block}`} key={i}>
                <input
                  id={`question-${index}-option-${i}`}
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={answers[index] === option}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                />
                <label htmlFor={`question-${index}-option-${i}`}>
                  {option}
                </label>
              </div>
            ))}
          </div>
        ))}
        <button className={`${style.question_btn}`} type="submit">
          Cavabları Təsdiqlə
        </button>
      </form>
    </div>
  );
};

export default QuestionsPage;
