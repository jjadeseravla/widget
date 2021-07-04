import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import axios from 'axios';

const Convert = ({ language, text }) => {

  const [translated, setTranslated] = useState('');

  useEffect(() => {
    const doTranslation = async () => {
      //second argument is empty obj cos dont want to send any info in body of request
      const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          q: text,
          target: language.value,
          key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
        }
      });
      setTranslated(data.data.translations[0].translatedText);
    }
    doTranslation(); //this fn is invoked first time we render, anytime change language or anytime change text
  }, [language, text])

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  )
    
}

export default Convert;