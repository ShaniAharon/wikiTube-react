import React, {useEffect, useState} from 'react'
import {eventBus} from '../services/eventBusService'

export const Modal = ({pos}) => {
  const [color, setColor] = useState('#826262')
  const [isShow, setShow] = useState(false)

  useEffect(() => {
    loadLoc()
    console.log('color', color)
  }, [pos])

  const loadLoc = () => {}

  const onSaveColor = async (ev) => {
    ev.preventDefault()

    eventBus.emit('centerWeather', color)
    eventBus.emit('putMark', color)
  }

  const handleChange = ({target}) => {
    setColor(target.value)
  }

  // if (!color) return <div>Loading...</div>

  return (
    <div
      className={'modal pos-center pos-relative' + (isShow ? ' show' : ' hide')}
    >
      <h2 className="text-center u">Pick It</h2>
      <form onSubmit={onSaveColor} className="">
        <input
          type="color"
          onChange={handleChange}
          value={color}
          name="color"
          className="form-input"
        />
        <button className="btn btn-primary pos-center">Save</button>
      </form>
    </div>
  )
}
