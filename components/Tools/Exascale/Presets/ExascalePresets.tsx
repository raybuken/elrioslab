import React, { Dispatch, SetStateAction } from 'react'
import { CircuitBoard, CircuitParts } from '../data/exascale'
import { EXASCALE_BOTTOM_PRESETS, EXASCALE_GLOVES_PRESETS, EXASCALE_SHOES_PRESETS, EXASCALE_TOP_PRESETS } from '../data/presets'

function ExascalePresets({ piece, handleUpdateBoard }: { piece: CircuitParts, handleUpdateBoard: Dispatch<SetStateAction<CircuitBoard>> }) {
  const presets = {
    [CircuitParts.TOP]: EXASCALE_TOP_PRESETS,
    [CircuitParts.BOTTOM]: EXASCALE_BOTTOM_PRESETS,
    [CircuitParts.GLOVES]: EXASCALE_GLOVES_PRESETS,
    [CircuitParts.SHOES]: EXASCALE_SHOES_PRESETS
  }

  const currentPresets = presets[piece]

  return (
    <div>
      <h2>Presets</h2>
      <hr />
      {currentPresets.map((preset, index) => (
        <div key={index} className="preset">
          <button onClick={() => handleUpdateBoard(structuredClone(preset))}>click</button>
        </div>
      ))}
    </div>
  )
}

export default ExascalePresets