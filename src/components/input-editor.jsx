import { useState } from 'react'

export const InputEditor = () => {
  const [value, setValue] = useState('text')

  return (
    <div>
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  )
}
