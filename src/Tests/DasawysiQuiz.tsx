import { useState } from "react";
import "./DasawyisiQuiz.css";

const questions = [
  {
    question: "ვინ არის აღწერილი როგორც ღმერთის მიერ შექმნილი ტექსტში?",
    options: ["მზე", "მეფე", "ყველა მმართველი", "პოეტი"],
    answer: "ყველა მმართველი",
    recommendation: "ფოკუსირდი ტექსტზე და ყურადღება მიაქციე მმართველების როლს.",
  },
  {
    question: "რა არის ტექსტის მთავარი თემა?",
    options: ["ბუნების ქება", "ტარიას ისტორია", "ღვთიური შექმნა და ადამიანის სიყვარული", "სამეფო და მეფობა"],
    answer: "ღვთიური შექმნა და ადამიანის სიყვარული",
    recommendation: "გაამახვილე ყურადღება ტექსტის გრძნობაზე და ღვთიური სიყვარულის მხარეზე.",
  },
  {
    question: "რას ითხოვს პოეტი ღმერთისგან?",
    options: ["რომ დაელოცოს მისი ქვეყანა", "რომ გამოიწვიოს მისი ცოდვების გონიერება", "რომ დაეხმაროს თამარის სილამაზის აღწერაში", "რომ შეუმსუბუქოს სიყვარულის ტკივილი"],
    answer: "რომ დაეხმაროს თამარის სილამაზის აღწერაში",
    recommendation: "გადახედე პოეტის სურვილებს, რომლებიც გრძნობად და ემოციურია.",
  },
  {
    question: "ვინ არის აღწერილი როგორც ყველაზე ლამაზი ტექსტში?",
    options: ["ტარია", "დედოფალი", "პოეტის სიყვარული", "თამარი"],
    answer: "თამარი",
    recommendation: "გაამახვილე ყურადღება თამარის სილამაზის დახასიათებაზე.",
  },
  {
    question: "რა ახსენებს პოეტი თამარის სილამაზეს?",
    options: ["ყვავილი", "მზე", "ლომი", "დედოფლის თმა"],
    answer: "მზე",
    recommendation: "თამარის სილამაზის სიმბოლიკა გადმოსულია მზით.",
  },
  {
    question: "რა სახის პოეტს აღწერს ტექსტი როგორც ჭეშმარიტს?",
    options: ["ის, ვინც მხოლოდ გრძელი სიტყვებს იყენებს", "ის, ვინც მოკლე ისტორიებს წერს", "პოეტი, რომელიც წინასწარ ღრმა აზრს და სიბრძნეს გადმოიცავს", "პოეტი, რომელიც მხოლოდ გართობაზე წერს"],
    answer: "პოეტი, რომელიც წინასწარ ღრმა აზრს და სიბრძნეს გადმოიცავს",
    recommendation: "საუბარი პოეტის უნარებსა და მისი ღრმა აზრების შესახებ.",
  },
  {
    question: "როგორ უნდა გადმოსცეს პოეტი თავისი სიტყვები?",
    options: ["მარტივი ენის გამოყენებით", "სიღრმით და სიბრძნით", "იუმორით და გონებით", "ცხადი გამოსახულებით"],
    answer: "სიღრმით და სიბრძნით",
    recommendation: "მნიშვნელოვანია პოეტის სიტყვების ღრმა გაგება და ზუსტი გადმოცემა.",
  },
  {
    question: "რა პოზიცია აქვს პოეტს ჭეშმარიტი სიყვარულის მიმართ?",
    options: ["სიყვარული უნდა დავივიწყოთ მშვიდობისთვის", "ჭეშმარიტი სიყვარული უნდა იყოს წმინდა და ღვთიური", "სიყვარული არის დროებითი გრძნობა", "სიყვარული მხოლოდ ახალგაზრდებისთვისაა"],
    answer: "ჭეშმარიტი სიყვარული უნდა იყოს წმინდა და ღვთიური",
    recommendation: "პოეტის ხედვა სიყვარულზე არის ღრმა და წმინდა.",
  },
  {
    question: "როგორ აღწერს პოეტი ნამდვილი პოეზიის ბუნებას?",
    options: ["ის უნდა გართობდეს მასას", "ის უნდა ამბობს ისტორიას", "ის უნდა იყოს ღრმა და მნიშვნელობიანი გამოხატულება", "ის უნდა იყოს ფაქტებზე დაფუძნებული"],
    answer: "ის უნდა იყოს ღრმა და მნიშვნელობიანი გამოხატულება",
    recommendation: "პოეზია უნდა გადმოსცეს სიმართლე და სიღრმე.",
  },
  {
    question: "ვინ არის აღიარებული როგორც თამარის სიყვარულში მოცული პიროვნება ტექსტში?",
    options: ["პოეტი", "მეფე", "ტარია", "ავთანდილი"],
    answer: "პოეტი",
    recommendation: "პოეტის მნიშვნელობა სიყვარულის კონტექსტში ყურადღების ღირსია.",
  },
];

const DasawyisiQuiz = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleChange = (questionIndex, option) => {
    setAnswers({
      ...answers,
      [questionIndex]: option,
    });
  };

  const handleSubmit = () => {
    let totalScore = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.answer) {
        totalScore++;
      }
    });
    setScore(totalScore);
    setSubmitted(true);
  };

  const handleRetake = () => {
    setAnswers({});
    setScore(0);
    setSubmitted(false);
  };

  const renderResult = () => (
    <div className="result">
      <div className="score">
        <h2>თქვენი შედეგი: {score} / {questions.length}</h2>
      </div>
      {questions.map((q, index) => {
        if (answers[index] !== q.answer) {
          return (
            <div key={index} className="recommendation">
              <p><strong>რეკომენდაცია კითხვაზე {index + 1}:</strong></p>
              <p>{q.recommendation}</p>
              <p><strong>სწორი პასუხი: </strong>{q.answer}</p>
            </div>
          );
        } else {
          return (
            <div key={index} className="correct-answer">
              <p><strong>კითხვა {index + 1} სწორი იყო!</strong></p>
            </div>
          );
        }
      })}
      <button className="retake-button" onClick={handleRetake}>თავიდან შესრულება</button>
    </div>
  );

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">ტექსტის ანალიზის ქვიზი</h1>
      <div className="questions-container">
        {questions.map((q, index) => (
          <div key={index} className="question">
            <p>{q.question}</p>
            <div className="options">
              {q.options.map((option, i) => (
                <div key={i} className="option">
                  <label>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      checked={answers[index] === option}
                      onChange={() => handleChange(index, option)}
                      disabled={submitted}
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {!submitted ? (
        <button className="submit-button" onClick={handleSubmit}>დავასრულე</button>
      ) : (
        renderResult()
      )}
    </div>
  );
};

export default DasawyisiQuiz;