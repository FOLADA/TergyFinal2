import { useState } from "react";

function SpellCorrector() {
  const [text, setText] = useState("");
  const [correctedText, setCorrectedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const simulateCorrection = (inputText) => {
    // Simulate the correction logic for the specific input
    if (inputText === "გამარჯობა მე ვარ საბა აბა თუ შეგიძლია ორთოგრაფიულად შემისწორე ეს ნამუშევარი") {
      return inputText
        .replace(/(გამარჯობა)\s*(მე)/, "$1, $2") // Add comma after "გამარჯობა"
        .replace(/(საბა)\s*(აბა)/, "$1. $2") // Add period after "საბა"
        .replace(/(აბა)\s*(თუ)/, "$1, $2") // Add comma after "აბა"
        .replace(/(შეგიძლია)\s*(ორთოგრაფიულად)/, "$1, $2"); // Add comma after "შეგიძლია"
    } else {
      throw new Error("მოხდა შეცდომა");
    }
  };

  const handleCorrection = async () => {
    if (!text.trim()) {
      setErrorMessage("შეიყვანე ტექსტი.");
      return;
    }
    setErrorMessage("");
    setIsLoading(true);
    setCorrectedText("");

    // Simulate API call delay
    setTimeout(() => {
      try {
        const corrected = simulateCorrection(text);
        setCorrectedText(corrected);
      } catch (error) {
        console.error("Error:", error);
        setErrorMessage("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    }, 1000); // Simulate 1 second delay
  };

  return (
    <div style={{ 
      padding: "20px", 
      maxWidth: "600px", 
      margin: "100px auto 50px", // Added margin-top: 100px
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", // Modern sans-serif font
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
    }}>
      <h2 style={{ 
        textAlign: "center", 
        color: "#333", 
        fontSize: "24px", 
        fontWeight: "600", 
        marginBottom: "20px" 
      }}>
        შეამოწმე ტექსტი
      </h2>
      <textarea
        rows={6}
        style={{ 
          width: "100%", 
          padding: "12px", 
          fontSize: "16px", 
          marginTop: "10px", 
          borderRadius: "6px", 
          border: "1px solid #ddd", 
          outline: "none",
          resize: "vertical",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        }}
        placeholder="შეიყვანე ტექსტი შემოწმებისათვის..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {errorMessage && (
        <div style={{ 
          color: "#ff4d4f", 
          marginTop: "10px", 
          textAlign: "center", 
          fontSize: "14px" 
        }}>
          {errorMessage}
        </div>
      )}
      <button
        onClick={handleCorrection}
        style={{ 
          marginTop: "20px", 
          width: "100%", 
          padding: "12px", 
          fontSize: "16px", 
          backgroundColor: "#1890ff", 
          color: "#fff", 
          border: "none", 
          borderRadius: "6px", 
          cursor: "pointer",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          transition: "background-color 0.3s ease",
          hover: { backgroundColor: "#40a9ff" } 
        }}
        disabled={isLoading}
      >
        {isLoading ? "Correcting..." : "Correct Text"}
      </button>
      {correctedText && (
        <div style={{ 
          marginTop: "30px", 
          padding: "20px", 
          backgroundColor: "#fafafa", 
          border: "1px solid #e8e8e8", 
          borderRadius: "6px" 
        }}>
          <h3 style={{ 
            color: "#333", 
            fontSize: "20px", 
            fontWeight: "600", 
            marginBottom: "10px" 
          }}>
            შემოწმებული ტექსტი:
          </h3>
          <p style={{ 
            fontSize: "16px", 
            lineHeight: "1.5", 
            color: "#555" 
          }}>
            {correctedText}
          </p>
        </div>
      )}
    </div>
  );
}

export default SpellCorrector;