import "./App.css"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

import CoursesSetting from "./pages/School/coursesSetting/CoursesSetting.jsx"
import SingleCourse from "./pages/School/singleCourse/SingleCourse.jsx"
import SingleTrainer from "./pages/School/singleTrainer/SingleTrainer.jsx"
import UpdateCourse from "./pages/School/updateCourse/UpdateCourse.jsx"
import AllTrainers from "./pages/School/allTrainers/AllTrainers.jsx"
import UpdateTrainer from "./pages/School/updateTrainer/UpdateTrainer.jsx"
import AddTrainer from "./pages/School/addTrainer/AddTrainer.jsx"
import AddCourse from "./pages/School/addCourse/AddCourse.jsx"
import Dates from "./pages/School/allDates/AllDates.jsx"
import SingleDate from "./pages/School/singleDate/SingleDate.jsx"
import UpdateDate from "./pages/School/updateDate/UpdateDate.jsx"
import Topbar from "./Utils/topbar/Topbar";
import AddOffer from "./pages/insuranceCompanies/addOffer/AddOffer";
import AllOffers from "./pages/insuranceCompanies/allOffer/AllOffers";
import OfferManagement from "./pages/insuranceCompanies/offerManagement/OfferManagement";
import UpdateOffer from "./pages/insuranceCompanies/updateOffer/UpdateOffer";
import UpdateDateCampanies from "./pages/insuranceCompanies/updateDateCampanies/UpdateDateCampanies";
import AddDateCampanies from "./pages/insuranceCompanies/addDateCampanies/AddDateCampanies";
import AllDatesCompanies from "./pages/insuranceCompanies/allDatesCompanies/AllDatesCompanies";
import DateManagement from "./pages/insuranceCompanies/dateManagement/DateManagement";
import Courses from "./pages/School/allCourses/Courses";
import AddDateCertificate from "./pages/InternationalCertificate/addDateCertificate/AddDateCertificate";
import DateCertificateManagement from "./pages/InternationalCertificate/dateCertificateManagement/DateCertificateManagement";
import UpdateDateCertificate from "./pages/InternationalCertificate/updateDateCampanies/UpdateDateCertificate";
import AllDateCertificate from "./pages/InternationalCertificate/allDateCertificate/AllDateCertificate";
import AllExams from "./pages/School/allExams/AllExams";
import AddExam from "./pages/School/addExam/AddExam";
import SingleExam from "./pages/School/singleExam/SingleExam";
import UpdateExam from "./pages/School/updateExam/UpdateExam";
import SchoolResults from "./pages/student/schoolResults/SchoolResults";
import DatesCertificate from "./pages/student/datesCertificate/DatesCertificate";
import AllCoursesSchool from "./pages/student/allCoursesSchool/AllCoursesSchool";
import AllDatesSchool from "./pages/student/allDateSchool/AllDatesSchool";
import AllSchool from "./pages/student/allSchool/AllSchools";
import AllTrainersSchool from "./pages/student/allTrainersSchool/AllTrainersSchool";
import CertificateSchool from "./pages/student/certificateSchool/CertificateSchool";
import SchoolPages from "./pages/student/schoolPages/SchoolPages";



//import AllSchools from "./pages/Student/allSchools/AllSchools";
//import AllTrainersSchool from "./pages/Student/allTrainersSchool/AllTrainersSchool";
//import SchoolPages from "./pages/Student/schoolPages/SchoolPages";

function App() {
  const user =true
  return (
    <Router>
      {user && <Topbar/>}
      <Routes>
      <Route path="/"  element={user ? <Home/>: <Login/>} />
      <Route path="/login"  element={user ? <Home/>: <Login/>} />
        <Route path="/register"  element={user ? <Home/>: <Register/>} />
        <Route path="/courses-setting"  element={user ? <CoursesSetting/>: <Login/>} />
        <Route path="/courses"  element={user ? <Courses/>: <Login/>} />
        <Route path="/courses/:id"  element={user ? <SingleCourse/>: <Login/>} />
        <Route path="/updateCourse/:id"  element={user ? <UpdateCourse/>: <Login/>} />
        <Route path="/allTrainer"  element={user ? <AllTrainers/>: <Login/>} />
        <Route path="/trainers/:id"  element={user ? <SingleTrainer/>: <Login/>} />
        <Route path="/updateTrainer/:id"  element={user ? <UpdateTrainer/>: <Login/>} />
        <Route path="/addTrainer"  element={user ? <AddTrainer/>: <Login/>} />
        <Route path="/addCourse"  element={user ? <AddCourse/>: <Login/>} />
        <Route path="/dates"  element={user ? <Dates/>: <Login/>} />
        <Route path="/dates/:id"  element={user ? <SingleDate/>: <Login/>} />
        <Route path="/updateDate/:id"  element={user ? <UpdateDate/>: <Login/>} />

        <Route path="/addOffer"  element={user ? <AddOffer/>: <Login/>} />
        <Route path="/allOffer"  element={user ? <AllOffers/>: <Login/>} />
        <Route path="/offerManag"  element={user ? <OfferManagement/>: <Login/>} />
        <Route path="/updateOffer/:id"  element={user ? <UpdateOffer/>: <Login/>} />
        
        <Route path="/addDateCampanies"  element={user ? <AddDateCampanies/>: <Login/>} />
        <Route path="/allDatesCompanies"  element={user ? <AllDatesCompanies/>: <Login/>} />
        <Route path="/dateManagement"  element={user ? <DateManagement/>: <Login/>} />
        <Route path="/updateDateCampanies/:id"  element={user ? <UpdateDateCampanies/>: <Login/>} />

        <Route path="/addDateCertificate"  element={user ? <AddDateCertificate/>: <Login/>} />
        <Route path="/dateCertificateManagement"  element={user ? <DateCertificateManagement/>: <Login/>} />
        <Route path="/UpdateDateCertificate/:id"  element={user ? <UpdateDateCertificate/>: <Login/>} />
        <Route path="/allDateCertificate"  element={user ? <AllDateCertificate/>: <Login/>} />

        <Route path="/allExams" element={user ? <AllExams/>: <Login/>} />
        <Route path="/addExam" element={user ? <AddExam/>: <Login/>} />
        <Route path="/allExams/:id" element={user ? <SingleExam/>: <Login/>} />
        <Route path="/updateExam/:id" element={user ? <UpdateExam/>: <Login/>} />

     

       <Route path="/schoolResults" element={user ? <SchoolResults/>: <Login/>} />
       <Route path="/datesCertificate" element={user ? <DatesCertificate/>: <Login/>} />
       <Route path="/allCoursesSchool" element={user ? <AllCoursesSchool/>: <Login/>} />
       <Route path="/allDatesSchool" element={user ?    <AllDatesSchool/>: <Login/>} />
       <Route path="/AllSchool" element={user ?    <AllSchool/>: <Login/>} />
       <Route path="/alltrainersschool" element={user ?  <AllTrainersSchool/>: <Login/>} />
       <Route path="/certificateSchool" element={user ?  <CertificateSchool/>: <Login/>} />
       <Route path="/schoolpages" element={user ?  <SchoolPages/>: <Login/>} />
   
      </Routes>
    </Router>
  )
}

export default App