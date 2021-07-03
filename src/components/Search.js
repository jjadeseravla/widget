import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {

  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);

  // console.log(results);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origins: '*',
          format: 'json',
          srsearch: term,
        },
      });
      setResults(data.query.search);
    }

    if (term && !results.length) { //first time its rendered
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 500); //every 500 ms useEffect will be called to search API
  
      return () => {
        clearTimeout(timeoutId); //everytime you type a letter the 500ms begins again
      }
    }

  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
        <a 
        className="ui button"
        href={`https://en.wikipedia.org?curid=${result.pageid}`}
        >
          Go
        </a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <span dangeouslySetInnterHTML={{ __html: result.snippet}}></span>
          {/* {result.snippet} */}
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input 
          value={term}
          onChange={e => setTerm(e.target.value)}
          className="input"/>
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  )
}

export default Search;