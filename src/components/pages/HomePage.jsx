function HomePage(props) {
    return (
        <>
            <div>{props.children}</div>
            <div>
                <button onClick={props.onToggleTimerButtonClick}>Toggle</button>
            </div>
        </>
    )
}
export default HomePage
