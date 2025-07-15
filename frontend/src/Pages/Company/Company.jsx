import React from 'react';
import './Company.css';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
const CompanyList = () => {
  const companies = [
    'amazon',
    'google',
    'adobe',
    'meta',
    'apple',
    'microsoft',
    'netflix',
    'tesla',
    'spotify'
  ];
  const { capitalizeFirstLetter } = useContext(StoreContext);

  return (
    <>
    <div className="company-list-container">
      {companies.map((company) => (
        <a key={company} href={`/company/${company}`}>
         <p>{capitalizeFirstLetter(company)}</p>
        </a>
      ))}

    </div>
      </>
  );
};

export default CompanyList;
