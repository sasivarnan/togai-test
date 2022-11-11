import { useState } from 'react'

import Calendar from './components/Calendar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <Calendar />
    </div>
  )
}

export default App
