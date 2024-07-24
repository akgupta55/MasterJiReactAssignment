import { Route, Routes } from "react-router-dom";
import "./App.css";
import OtpForm from "./Pages/OtpForm/OtpForm";
import CourseList from "./Pages/CourseList/CourseList";
import Batches from "./Pages/Batches/Batches";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<OtpForm />} />
        <Route path="/otp-form" element={<OtpForm />} />
        <Route path="/course-list" element={<CourseList />} />
        <Route path="/batches" element={<Batches />} />
      </Routes>
    </>
  );
}

export default App;
