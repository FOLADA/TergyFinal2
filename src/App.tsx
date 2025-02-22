import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Navbar from "./components/Navbar";
import FooterOfTerg from "./components/Footer/Footer";
import LandingPage from "./Landing Page/LandingPage";
import ChatFinal from "./Chat/ChatFinal";
import Citatebi from "./Citatebi/Citatebi";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Nats from "./NatsarmoebaniPage/Nats";
import Periphrazed from "./Periphrazed/Periphrazed";
import StudyPlan from "./StudyPlan/Studyplan";
import AboutUs from "./About us/Aboutus";
import DasawyisiQuiz from "./Tests/DasawysiQuiz";
import IItavi from "./Tests/IItavi";
import IIItavi from "./Tests/IIItavi";
import IVtavi from "./Tests/IVtavi";
import Vtavi from "./Tests/Vtavi";
import Animation from "./Animations/Animations";
import ProtectedRoute from "./ProtectedRoute";
import Tutors from "./Tutors/Tutors";
import SpellCorrector from "./EssaystAI/FrontendAI";
 

const App: React.FC = () => {
  return (
    <AuthProvider>
      <div style={{ marginBottom: "100px" }}>
        <Navbar />
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/შესვლა" element={<Login />} />
          <Route path="/რეგისტრაცია" element={<Signup />} />
          <Route path="/ჩვენს შესახებ" element={<AboutUs />} />
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/სიმპოზიუმი" element={<ChatFinal />} />
            <Route path="/რეპეტიტორები" element={<Tutors />} />
            <Route path="/ესეისტი AI" element={<SpellCorrector />} />
            <Route path="/ნაწარმოებანი/აფორიზმები" element={<Citatebi />} />
            <Route path="/ნაწარმოებანი" element={<Nats />} />
            <Route path="/ნაწარმოებანი/პერიფრაზი" element={<Periphrazed />} />
            <Route path="/ნაწარმოებანი/ანიმაცია" element={<Animation />} />
            <Route path="/ნაწარმოებანი/გეგმა" element={<StudyPlan />} />
            <Route
              path="/ნაწარმოებანი/პერიფრაზი/ტესტი/დასაწყისი"
              element={<DasawyisiQuiz />}
            />
            <Route
              path="/ნაწარმოებანი/პერიფრაზი/ტესტი/ამბავი როსტევან არაბთა მეფისა"
              element={<IItavi />}
            />
            <Route
              path="/ნაწარმოებანი/პერიფრაზი/ტესტი/როსტევან მეფისგან და ავთანდილისგან ნადირობა"
              element={<IIItavi />}
            />
            <Route
              path="/ნაწარმოებანი/პერიფრაზი/ტესტი/ნახვა არაბთა მეფისაგან მის ყმისა ვეფხისტყაოსნისა"
              element={<IVtavi />}
            />
            <Route
              path="/ნაწარმოებანი/პერიფრაზი/ტესტი/თინათინისაგან ავთანდილის გაგზავნა მის ყმის საძებრად"
              element={<Vtavi />}
            />
          </Route>
        </Routes>
      </Suspense>
      <FooterOfTerg />
    </AuthProvider>
  );
};

export default App;
