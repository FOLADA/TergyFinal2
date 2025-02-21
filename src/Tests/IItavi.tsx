import { useState } from "react";
import "./DasawyisiQuiz.css";

const questions = [
    {
        question: "როგორ იყო აღწერილი მეფე როსტევანი ტექსტში?",
        options: ["მრისხანე", "ლაშქარმრავალი, მოწყალე, სამართლიანი, კეთილი", "ამაყი", "ღარიბი"],
        answer: "ლაშქარმრავალი, მოწყალე, სამართლიანი, კეთილი",
        recommendation: "ტექსტის პირველ წინადადებაშივეა მეფის დახასიათება მოცემული. ყურადღება მიაქციე ზედსართავებს, რომლებიც მის აღსაწერად გამოიყენება.",
      },
      {
        question: "ვინ იყო როსტევანის ერთადერთი ასული?",
        options: ["თამარი", "ნესტანი", "თინათინი", "ავთანდილი"],
        answer: "თინათინი",
        recommendation: "ტექსტში პირდაპირ არის ნათქვამი, რომ როსტევანს ერთადერთი ასული ჰყავდა, სახელად თინათინი.",
      },
      {
        question: "რა გადაწყვეტილება მიიღო მეფე როსტევანმა და რატომ?",
        options: [
          "ქვეყნის დატოვება, რადგან მოხუცდა",
          "ომის დაწყება, რადგან ლაშქარი მრავალი ჰყავდა",
          "თინათინის გამეფება, რადგან სიბერე უახლოვდებოდა",
          "ქორწინება, რადგან მარტო იყო",
        ],
        answer: "თინათინის გამეფება, რადგან სიბერე უახლოვდებოდა",
        recommendation: "მეფე როსტევანის სიტყვებიდან ჩანს, რომ მას აწუხებდა სიბერე და ქვეყნის მართვის სადავეების დროულად გადაცემაზე ფიქრობდა.  ტექსტში ნახავთ ფრაზას: 'მეც მალე ყველა სნეულებაზე უარესი ჭირი მეწვევა – სიბერე...' ",
      },
      {
        question: "როგორ შეხვდნენ ვაზირები როსტევანის გადაწყვეტილებას?",
        options: ["აღფრთოვანებით", "შეშფოთებით", "სიხარულით", "გულგრილად"],
        answer: "შეშფოთებით",
        recommendation: "ვაზირები თვლიდნენ, რომ მეფე ჯერ კიდევ ახალგაზრდა იყო და მისი ასულის გამეფება ნაადრევი იყო. ტექსტში ნახავთ, რომ ისინი 'შეშფოთდნენ'.",
      },
      {
        question: "რატომ თვლიდნენ ვაზირები, რომ თინათინი ღირსეული მმართველი იქნებოდა?",
        options: [
          "იმიტომ, რომ ის ძალიან ლამაზი იყო",
          "იმიტომ, რომ ის ძალიან მდიდარი იყო",
          "იმიტომ, რომ ის ძალიან ჭკვიანი იყო",
          "იმიტომ, რომ ის მეფის ქალიშვილი იყო",
        ],
        answer: "იმიტომ, რომ ის ძალიან ჭკვიანი იყო",
        recommendation: "ტექსტში ვაზირების სიტყვებია მოყვანილი: 'ლეკვი ლომისა სწორია, ძუ იყოს, თუნდა ხვადია'.  დააკვირდი ამ შედარებას და გაიგებ, რატომ თვლიდნენ ისინი თინათინს ღირსეულ მმართველად.",
      },
      {
        question: "ვინ იმყოფებოდა თინათინის მეფედ კურთხევის ცერემონიაზე?",
        options: ["მხოლოდ მეფე და ვაზირები", "მხოლოდ თინათინის მეგობრები", "მთელი არაბეთი", "უცხოელი ელჩები"],
        answer: "მთელი არაბეთი",
        recommendation: "ტექსტში ნათქვამია: 'თინათინის მეფედ კურთხევის დღეს მთელმა არაბეთმა მოიყარა თავი.' ეს ნიშნავს, რომ ცერემონიაზე ძალიან ბევრი ხალხი იყო.",
      },
      {
        question: "ვინ იყო ავთანდილი ტექსტში?",
        options: ["მეფის მრჩეველი", "მთავარსარდალი", "პოეტი", "მხატვარი"],
        answer: "მთავარსარდალი",
        recommendation: "ტექსტში ავთანდილი მოხსენიებულია, როგორც 'სპასპეტი', რაც მთავარსარდალს ნიშნავს.",
      },
      {
        question: "რა გრძნობა გაუჩნდა ავთანდილს თინათინის დანახვისას?",
        options: ["სიძულვილი", "შური", "მიჯნურობა", "შიში"],
        answer: "მიჯნურობა",
        recommendation: "ტექსტში წერია, რომ ავთანდილს 'მალულად გულში თინათინის მიჯნურობა ჩავარდნოდა'.",
      },
      {
        question: "რა მოხდა თინათინის გამეფების შემდეგ?",
        options: [
          "თინათინი ატირდა",
          "ხალხი აჯანყდა",
          "მეფე დაავადდა",
          "ქვეყანაში ომი დაიწყო",
        ],
        answer: "თინათინი ატირდა",
        recommendation: "ტექსტში აღწერილია, რომ თინათინი სევდიანი იყო და ტიროდა, რადგან თავს მამის ტახტის ღირსეულად არ თვლიდა.  წაიკითხე მე-12 სტროფი: 'მხოლოდ თინათინი იყო სევდიანი. მეფის ასულს მამის ტახტის ღირსად თავი არ მიაჩნდა.'",
      },
    ];
const IItavi = () => {
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
      <button className="retake-button" onClick={handleRetake}>Retake Quiz</button>
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
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
      ) : (
        renderResult()
      )}
    </div>
  );
};

export default IItavi;