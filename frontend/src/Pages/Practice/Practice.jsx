import React from 'react';
import './Practice.css';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';


const topics = [
  { title: "math" },
  { title: "array" },
  { title: "hashtable" },
  { title: "sorting" },
  { title: "binarysearch" },
  { title: "twopointers" },
  { title: "slidingwindow" },
  { title: "kadane" },
  { title: "stack" },
  { title: "queue" },
  { title: "greedy" },
  { title: "linkedlist" },
  { title: "trees" },
  { title: "trie" },
  { title: "backtracking" },
  { title: "bitmanipulation" },
  { title: "dynamicprogramming" },
  { title: "graph" },

];

const Practice = () => {
  const { capitalizeFirstLetter } = useContext(StoreContext);
  return (

    <div className="practice-container">
      <h1>DSA Practice Topics</h1>
      <div className="topics-grid">
        {topics.map((topic, index) => (
          <div className="topic-card" key={index}>
           <a href={`/practice/${topic.title}`}>{capitalizeFirstLetter(topic.title)}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Practice;
