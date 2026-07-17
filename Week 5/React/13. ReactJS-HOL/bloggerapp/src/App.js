import "./App.css";

import BookDetails, { books } from "./BookDetails";
import BlogDetails, { blogs } from "./BlogDetails";
import CourseDetails, { courses } from "./CourseDetails";

function App() {

  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (

    <div className="container">

      {showCourses && <CourseDetails courses={courses} />}

      {showBooks ? <BookDetails books={books} /> : null}

      {showBlogs ? <BlogDetails blogs={blogs} /> : null}

    </div>

  );

}

export default App;