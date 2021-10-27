import React, {useEffect, useState} from 'react'
function App() {
  const [currentDate, setCurrentDate] = useState('')
  useEffect(
      () => {
        const timer = setInterval(() => setCurrentDate(<strong>{new Date().toISOString()}</strong>, 1000))
        return () => {clearInterval(timer)} // обработчик события жизненного цикла компонента "размонтирование"
      }, // обработчик события жизненного цикла компонента "монтирование"
      [currentDate] // пустой список свойств, при изменении которых также нужно вызывать обработчик события монтирования
  )
  return (
  <>
    <h1>Hello React!</h1>
    {currentDate}
  </>
  )
}

export default App
