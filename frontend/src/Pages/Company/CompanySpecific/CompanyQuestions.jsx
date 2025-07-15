import React from 'react'
import './CompanyQuestions.css'
import QuestionCard from './QuestionCard'
import AllQuestions from './AllQuestions'
import { useContext } from 'react'
import { StoreContext } from '../../../context/StoreContext'

const CompanyQuestions = ({company}) => {
    const {capitalizeFirstLetter} = useContext(StoreContext);
    const questionList = AllQuestions[company] || [];
  return (
    <>
    <a href = "/company" className="back-link">Back to Company List</a>
    <div className="company-questions-container">
      <h2 className="company-title">{capitalizeFirstLetter(`${company}`)} DSA Questions</h2>
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

export default CompanyQuestions