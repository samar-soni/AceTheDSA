import React, { useEffect, useState, useContext } from "react";
import "./Revision.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StoreContext } from '../../context/StoreContext';

const Revision = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const { url } = useContext(StoreContext);

  const fetchRevisionQuestions = async () => {
    try {

      const res = await fetch(`${url}/api/user/revision`);
      const data = await res.json();

      if (res.ok) {
        setQuestions(data);
      } else {
        alert(data.message || "Failed to fetch questions");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  const deleteQuestion = async (title) => {
     try{
      console.log("Deleting question with title:", title);
      const res = await fetch(`${url}/api/user/revision/${encodeURIComponent(title)}`, {
        method: 'DELETE',
     });
     if(res.ok){
        setQuestions(questions.filter(q => q.title !== title));
       toast.success("Question deleted successfully!");
     }else{
      toast.error("Failed to delete question.");
     }

     }catch(error){
      toast.error("Failed to delete question.");
      console.error("Error deleting question:", error);
      alert("Failed to delete question. Please try again.");
     }
  }

  useEffect(() => {
    fetchRevisionQuestions();
  }, []);

  if (loading) return <div>Loading questions...</div>;

  return (
    <>
    <ToastContainer />
    <div className="revision-container">
  <h2 className="revision-heading">📝 Marked for Revision</h2>
  {questions.length === 0 ? (
    <p className="revision-empty">No questions marked yet.</p>
  ) : (
    <ul className="revision-list">
      {questions.map((q, idx) => (
        <li key={idx} className="revision-item">
          <h3 className="revision-title">{q.title}</h3>
          <p className="revision-difficulty">
            Difficulty: <strong>{q.difficulty}</strong>
          </p>
          <a
            href={q.link}
            target="_blank"
            rel="noopener noreferrer"
            className="revision-link"
          >
            View on LeetCode ↗
          </a>
          <br />
          <button
            onClick={() => deleteQuestion(q.title)}
            className="revision-delete-button"
          >
            DELETE
          </button>
        </li>
      ))}
    </ul>
  )}
</div>
</>
  );
};

export default Revision;
