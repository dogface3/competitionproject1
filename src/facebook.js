import  { useState } from 'react';
import profiles from './berlin.json';
import './App.css'

const FaceBook = () => {

  const countries = [...new Set(profiles.map((profile) => profile.country))];

  const [selectedCountry, setCountry] = useState(null);

  const handleCountryClick = (country) => {
    setCountry(country);
  };

  return (
    <div>
      <h1>Facebook Profiles</h1>
      <div className="countries">
        {countries.map((country, index) => (
          <button key={index} onClick={() => handleCountryClick(country)}>
            {country}
          </button>
        ))}
      </div>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="profile"
            style={{
              backgroundColor: profile.country === selectedCountry ? 'blue' : 'white',
            }}
          >
            <img src={profile.img} alt={`${profile.firstName} ${profile.lastName}`} />
            <div>
              <h2>{`${profile.firstName} ${profile.lastName}`}</h2>
              <p>Country: {profile.country}</p>
              <p>Status: {profile.isStudent ? 'Student' : 'Teacher'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaceBook;
