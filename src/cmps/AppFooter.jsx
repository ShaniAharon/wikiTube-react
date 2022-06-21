import React, {useEffect, useState} from 'react'
import {eventBus} from '../services/eventBusService'
import {termService} from '../services/term.service'

export const AppFooter = () => {
  const handleClick = async () => {}
  const [terms, setTerms] = useState(null)

  useEffect(() => {
    loadTerms()
  }, [terms])

  const loadTerms = async () => {
    const terms = await termService.getTerms()
    setTerms(terms)
  }

  return (
    <footer className="main-footer">
      <div className="logo">
        <h2>
          <span className="clr-teal">Wiki</span>Tube
        </h2>
      </div>
      <div className="search-container">
        <button onClick={handleClick} className="btn btn-primary">
          Clear History
        </button>
      </div>
      <ul className="clean-list">
        <h3>Your history</h3>
        {terms &&
          terms.map(({searchTerm, _id}) => <li key={_id}>{searchTerm}</li>)}
      </ul>
    </footer>
  )
}
