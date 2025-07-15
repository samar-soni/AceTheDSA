import React, { useState } from "react";
import "./QuestionCard.css";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuestionCard = ({ title, difficulty, link }) => {
  const [noteInput, setNoteInput] = useState("");
  const [notes, setNotes] = useState([]);

  const handleAddNote = () => {
    if (noteInput.trim() === "") return;
    setNotes([...notes, noteInput]);
    setNoteInput("");
  };
  const markForRevision = async ({title,difficulty,link}) => {
    try{
      const res = await fetch('http://localhost:3000/api/user/markQuestion', {
        method: 'POST',
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, difficulty, link })
      });
      const data = await res.json();
      if(res.ok){
        toast.success("Question marked for revision successfully!");
      }
      else{
        toast.error(data.message || "Failed to mark question for revision.");
      }
    }
    catch(error){
      console.log("Error marking question for revision:", error);
      alert("Failed to mark question for revision. Please try again.");
    }
  }

  

  return (
    <>
    <ToastContainer />
    <div className="question-card">
      <div className="card-header">
        <h3 className="question-title">{title}</h3>
        <span className={`difficulty ${difficulty.toLowerCase()}`}>
          {difficulty}
        </span>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="leetcode-link"
      >
        Solve on LeetCode ↗
      </a>

      <div className="note-section">
        <input
          type="text"
          placeholder="Add a note..."
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
          className="note-input"
        />
        <button onClick={handleAddNote} className="note-button">
          Add
        </button>
        <button onClick = {()=>markForRevision({title,difficulty,link})} className = "note-button">Mark for Revision</button>
        <ul className="note-list">
          {notes.map((note, idx) => (
            <li key={idx} className="note-item">
              📝 {note}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default QuestionCard;
