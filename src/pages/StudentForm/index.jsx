import { useState } from "react";
import style from "./student.module.css";

const StudentForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && surname) {
      localStorage.setItem("studentInfo", JSON.stringify({ name, surname }));
      window.location.href = "/questions";
    } else {
      alert("Adınızı ve soyadınızı qeyd edin.");
    }
  };

  return (
    <div className={`${style.form_container}`}>
      <h1>Tələbə Məlumatları</h1>
      <form className={`${style.form}`} onSubmit={handleSubmit}>
        <div className={`${style.form_auth}`}>
          <label htmlFor="name">Ad</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={`${style.form_auth}`}>
          <label htmlFor="surname">Soyad</label>
          <input
            type="text"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <button className={`${style.auth_btn}`} type="submit">
          Davam Et
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
