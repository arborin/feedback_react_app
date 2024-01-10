const AppHeader = (props) => {
    return (
        <>
            <h1>My to do list</h1>
            <p>todo: {props.todo}, Done: {props.done}</p>
        </>

    )
}

export default AppHeader;