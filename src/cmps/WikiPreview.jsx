import React, {useEffect, useState} from 'react'
import {eventBus} from '../services/eventBusService'

export const WikiPreview = () => {
  const [wikiData, setWikiData] = useState(null)

  //get the center as a prop from the map cmp
  useEffect(() => {
    // const centerLoc = locService.getCenterLoc()

    const unsubscribeWiki = eventBus.on('wikis', (wikiData) => {
      setWikiData(wikiData)
    })

    return () => {
      unsubscribeWiki()
    }
  }, [])

  if (!wikiData) return <div>Wiki data Loading...</div>
  return (
    <section className="wiki-preview pos-relative">
      <h1 className="u">Wiki Info</h1>
      {/* <pre>{JSON.stringify([wiki, main], 0, 4)}</pre> */}
      <section className="clean-list wiki-list pos-center">
        {wikiData.map(({title, snippet}) => (
          <div key={title}>
            <h2>{title}</h2>
            <p>{snippet}</p>
          </div>
        ))}
      </section>
    </section>
  )
}
