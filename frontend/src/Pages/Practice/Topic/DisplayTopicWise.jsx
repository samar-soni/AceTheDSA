import React from 'react'
import './DisplayTopicWise.css'
import topics from '../../../assets/topicWiseQuestions'
import QuestionCard from '../../Company/CompanySpecific/QuestionCard'
import { useContext } from 'react'
import { StoreContext } from '../../../context/StoreContext'


const DisplayTopicWise = ({topic}) => {
    const {capitalizeFirstLetter} = useContext(StoreContext);
    const questionList = topics[topic] || [];
  return (
    <>
    <a href = "/practice" className="back-link">Back to Topic List</a>
    <div className="company-questions-container">
          <h2 className="company-title">{capitalizeFirstLetter(`${topic}`)} DSA Questions</h2>
          <div className="question-list">
            {questionList.map((q) => (
              <QuestionCard
                key={q.id}
                title={q.title}
                difficulty={q.difficulty}
                link={q.link}
              />
            ))}
          </div>
        </div>
        </>
  )
}

export default DisplayTopicWise