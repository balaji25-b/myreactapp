import React, {useState} from 'react'
import './index.css'

function UMFMGOTooltip() {
  const [open, setOpen] = useState(false)
  return (
    <div className='umfmgo-tooltip-wrap'>
      <button className='umfmgo-btn' onClick={() => setOpen(!open)}>
        What is UMF and MGO?
      </button>
      {open && (
        <div className='umfmgo-tooltip'>
          <div className='umf'>
            <strong>UMF</strong> is the strength and purity rating of Manuka
            honey.
            <div className='scale'>
              <span style={{background: '#ff7843'}}>10+</span>
              <span style={{background: '#ea3f80'}}>15+</span>
              <span style={{background: '#d11a77'}}>20+</span>
              <span style={{background: '#9d1c8d'}}>24+</span>
              <span style={{background: '#6e2f99'}}>26+</span>
              <span style={{background: '#5472a4'}}>28+</span>
              <span style={{background: '#078bd9'}}>30+</span>
            </div>
            <span className='desc'>
              The higher the number, the greater the potency and rarity.
            </span>
          </div>
          <div className='mgo'>
            <strong>MGO</strong> is the key natural compound that gives Manuka
            honey its special antibacterial strength.
            <div className='scale'>
              <span style={{background: '#ca0707'}}>263+</span>
              <span style={{background: '#f8322c'}}>514+</span>
              <span style={{background: '#ee4134'}}>829+</span>
              <span style={{background: '#e94848'}}>1122+</span>
              <span style={{background: '#6090c1'}}>1282+</span>
              <span style={{background: '#4fe15b'}}>1450+</span>
              <span style={{background: '#349b50'}}>1620+</span>
            </div>
            <span className='desc'>
              The higher the number, the higher the antibacterial properties in
              the honey.
            </span>
          </div>
          <button className='close-btn' onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
      )}
    </div>
  )
}
export default UMFMGOTooltip
