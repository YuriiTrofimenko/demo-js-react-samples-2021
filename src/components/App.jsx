import React, {useEffect, useState} from 'react'
import Header from './base/Header'
import Footer from './base/Footer'
import MainContentBase from './base/MainContentBase'
import HomePage from './pages/HomePage'

function App() {
    const [currentDate, setCurrentDate] = useState('')
    const [timer, setTimer] = useState(null)
    useEffect(
        () => {
            // setTimer(setInterval(() => setCurrentDate(<strong>{new Date().toISOString()}</strong>), 1000))
            if (!currentDate) {
                composeCurrentDate()
            }
            return () => {
                // clearInterval(timer)
                // setTimer(null)
            } // обработчик события жизненного цикла компонента "размонтирование"
        }, // обработчик события жизненного цикла компонента "монтирование"
        [currentDate] // пустой список свойств, при изменении которых также нужно вызывать обработчик события монтирования
    )
    const composeCurrentDate = () => {
        setCurrentDate(<strong>{new Date().toISOString()}</strong>)
    }
    const toggleTimer = () => {
        if (timer) {
            clearInterval(timer)
            setTimer(null)
        } else {
            composeCurrentDate()
            setTimer(setInterval(() => composeCurrentDate(), 1000))
        }
    }
    return (
        <>
            <Header/>
            <MainContentBase>
                <HomePage onToggleTimerButtonClick={toggleTimer}>
                    {currentDate}
                </HomePage>
            </MainContentBase>
            <Footer/>
        </>
    )
}

export default App
