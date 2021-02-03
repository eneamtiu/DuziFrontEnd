import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Navbar from "./common/Navbar";
import HomePage from "./pages/HomePage";
import SchoolsPage from "./pages/SchoolsPage";
import NotFoundPage from "./pages/NotFoundPage";
import SchoolPage from "./pages/SchoolPage";
import CoursePage from "./pages/CoursePage";
import CataloguePage from "./pages/CataloguePage";
import AddPersonPage from "./pages/AddPersonPage";
import AddCoursePage from "./pages/AddCoursePage";
import AddCataloguePage from "./pages/AddCataloguePage";
import UpdatePersonPage from "./pages/UpdatePersonPage";
import AddSchoolPage from "./pages/AddSchoolPage";
import AddSubjectPage from "./pages/AddSubjectPage";
import UpdateSchoolPage from "./pages/UpdateSchoolPage";
import UpdateCoursePage from "./pages/UpdateCoursePage";
import UpdateCataloguePage from "./pages/UpdateCataloguePage";
import AddDocumentPage from "./pages/AddDocumentPage";
import UpdateDocumentPage from "./pages/UpdateDocumentPage";
import UpdateSubjectPage from "./pages/UpdateSubjectPage";
import Footer from "./common/Footer";

function App() {
  const path = window.location.href.split("/")[3];
  useLocation();

  return (
    <>
      <header id="header" class="fixed-top">
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/schools" component={SchoolsPage} />
          <Route exact path="/schools/:id" component={SchoolPage} />
          <Route
            exact
            path="/schools/:schoolId/courses/:courseId"
            component={CoursePage}
          />
          <Route
            exact
            path="/schools/:schoolId/catalogues/:catalogueId"
            component={CataloguePage}
          />
          <Route exact path="/addschool" component={AddSchoolPage} />
          <Route exact path="/schools/:id/persons" component={AddPersonPage} />
          <Route exact path="/schools/:id/courses" component={AddCoursePage} />
          <Route
            exact
            path="/schools/:id/subjects"
            component={AddSubjectPage}
          />
          <Route
            exact
            path="/schools/:id/catalogues"
            component={AddCataloguePage}
          />
          <Route
            exact
            path="/schools/:schoolId/courses/:courseId/documents"
            component={AddDocumentPage}
          />
          <Route
            exact
            path="/schools/:schoolId/persons/:personId"
            component={UpdatePersonPage}
          />
          <Route
            exact
            path="/schools/:id/update"
            component={UpdateSchoolPage}
          />
          <Route
            exact
            path="/schools/:schoolId/courses/:courseId/update"
            component={UpdateCoursePage}
          />
          <Route
            exact
            path="/schools/:schoolId/catalogues/:catalogueId/update"
            component={UpdateCataloguePage}
          />
          <Route
            exact
            path="/schools/:schoolId/courses/:courseId/documents/:documentId"
            component={UpdateDocumentPage}
          />
          <Route
            exact
            path="/schools/:schoolId/subjects/:subjectId"
            component={UpdateSubjectPage}
          />
          <Route path="/*" component={NotFoundPage} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
