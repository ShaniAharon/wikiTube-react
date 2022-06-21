import React from 'react'
import {useForm} from '../hooks/useForm'
import {eventBus} from '../services/eventBusService'
import {youtubeService} from '../services/youtube.service'
import {wikiService} from '../services/wiki.service'
import {termService} from '../services/term.service'

export const AppHeader = () => {
  //TODO: try the ragular two way binding here
  const [search, handleChange, setSearch] = useForm('')

  const handleClick = async () => {
    const res = await youtubeService.getTop5Res(search)
    const wikiData = await wikiService.getWikiData(search)
    eventBus.emit('videos', res)
    eventBus.emit('wikis', wikiData)
    termService.saveTerm(search)
    setSearch('')
  }

  const openModal = () => {
    eventBus.emit('open', true)
  }

  return (
    <header className="main-header">
      <div className="logo">
        <h1>
          <span className="clr-teal">Wiki</span>Tube
        </h1>
      </div>
      <div>
        <button onClick={openModal} className="btn btn-success">
          Change Background Color
        </button>
      </div>
      <div className="search-container">
        <input
          type="text"
          onChange={handleChange}
          value={search.name || ''}
          name="name"
          placeholder="Search"
        />
        <button onClick={handleClick} className="btn btn-primary">
          Search
        </button>
      </div>
    </header>
  )
}
