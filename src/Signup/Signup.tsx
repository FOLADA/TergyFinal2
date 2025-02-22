import React, { useId, useRef, useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { PostObj } from "../Authorization/POST";
 

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);  
  const [role, setRole] = useState('')
  const [desc, setDesc] = useState("");
  const [rating, setRating] = useState(0)
  const maxLength = 200;

 

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxLength) {
      setDesc(e.target.value);
    }
  };

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  
  const navigate = useNavigate();
  const validateForm = () => {
    let newErrors = {
      username: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    };
    let isValid = true;
    if (!username.trim()) {
      newErrors.username = "აუცილებელია სახელი";
      isValid = false;
    }
    if (!email.trim()) {
      newErrors.email = "აუცილებელია ელ.ფოსტა";
      isValid = false;
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = "ელ.ფოსტა არასწორია";
      isValid = false;
    }
    if (!phoneNumber.trim() || isNaN(Number(phoneNumber))) {
      newErrors.phoneNumber = "აუცილებელია ტელეფონის ნომერი (მხოლოდ ციფრები)";
      isValid = false;
    }
    if (!password.trim()) {
      newErrors.password = "აუცილებელია პაროლი";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო";
      isValid = false;
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "პაროლები არ ემთხვევა";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
 
    const userid = crypto.randomUUID();
     
    try {
      const response = await PostObj({
        username,
        email,
        phoneNumber,
        password,
        role,
        userid: role === "რეპეტიტორი" ? userid + "tutor" : userid,  
        ...(role === "რეპეტიტორი" ? { desc, rating } : {}),
      });

 
      console.log("Signup successful", response);
      navigate("/შესვლა");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("რეგისტრაციის შეცდომა! სცადეთ ხელახლა.");
    } finally {
      setLoading(false);
    }
    localStorage.setItem("identity", userid);
  };
  return (
    <div className="signup-container">
      <h2 className="signup-title">შექმენი ანგარიში</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            სახელი:
          </label>
          <input
            type="text"
            id="username"
            className="form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="შეიყვანე სახელი"
          />
          {errors.username && (
            <p className="error-message">{errors.username}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            ელექტრონული ფოსტა:
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="შეიყვანე ელ.ფოსტა"
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber" className="form-label">
            ტელეფონის ნომერი:
          </label>
          <input
            type="text"
            id="phoneNumber"
            className="form-input"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="შეიყვანე ტელეფონის ნომერი"
          />
          {errors.phoneNumber && (
            <p className="error-message">{errors.phoneNumber}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            პაროლი:
          </label>
          <input
            type="password"
            id="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="შეიყვანე პაროლი"
          />
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">
            დაადასტურე პაროლი:
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="form-input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="დაადასტურე პაროლი"
          />
          {errors.confirmPassword && (
            <p className="error-message">{errors.confirmPassword}</p>
          )}
        </div>
        <div>
          {role === "რეპეტიტორი" && (
            <>
              <div>
                <label className="form-label">
                  დაწერეთ თქვენს შესახებ: {" "}
                  {desc.length === 200 && (
                    <strong style={{ color: "red" }}>
                      აღწერა არ უნდა აღემატებოდეს 200 სიტყვას*
                    </strong>
                  )}
                </label>
                <textarea
                  className="form-textarea"
                  rows={5}
                  value={desc}
                  onChange={handleChange}
                  placeholder="Type here..."
                />
                <label className="form-label">
                  თვითშეფასება 5 ბალიანი სისტემით:
                </label>
                <input type="number" max={5} min={0} className="form-input" value={rating} onChange={(e) => setRating(Number(e.target.value))}/>
              </div>
            </>
          )}
        </div>
        <div>
          <p>აირჩიე როლი</p>
          <select
            className="form-input"
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
            }}
          >
            <option value="აბიტურიენტი">აბიტურიენტი</option>
            <option value="რეპეტიტორი">რეპეტიტორი</option>
          </select>
        </div>
        <button type="submit" className="signup-button" disabled={loading}>
          {loading ? "დარეგისტრირება..." : "დარეგისტრირდი"}
        </button>
      </form>
    </div>
  );
};
export default Signup;