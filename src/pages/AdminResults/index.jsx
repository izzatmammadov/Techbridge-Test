import { useState } from "react";
import style from "./admin.module.css";

const AdminResults = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const results = JSON.parse(localStorage.getItem("results")) || [];

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsAuthenticated(true);
    } else {
      alert("Şifrə yanlışdır!");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className={`${style.login_container}`}>
        <h1>Admin Girişi</h1>
        <form className={`${style.login_form}`} onSubmit={handleLogin}>
          <label htmlFor="password">Şifrə</label>
          <div className={`${style.password_container}`}>
            <input
              type={showPassword ? "text" : "password"} 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              title={showPassword ? "hide" : "show"}
              className={`${style.show_password_btn}`}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? "🙊" : "🙈"} {/* Göz işarəsi */}
            </button>
          </div>
          <button className={`${style.login_btn}`} type="submit">
            Giriş Et
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className={`${style.result_container}`}>
      <h1>Nəticələr</h1>
      {results.length === 0 ? (
        <p>Hələ nəticə qeyd olunmayıb</p>
      ) : (
        <ul className={`${style.result_list}`}>
          {results.map((result, index) => (
            <li key={index}>
              <strong>
                {result.student.name} {result.student.surname}
              </strong>
              <ul>
                {Object.entries(result.answers).map(([qIndex, answer]) => (
                  <li key={qIndex}>
                    Sual {parseInt(qIndex) + 1}: {answer}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminResults;
