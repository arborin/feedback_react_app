
import FeedbackItem from "./components/FeedbackItem"
import Header from "./components/Header"


export default function App() {

    // if (loading) return <h1>Loading...</h1>



    return (
        <>
            <Header text='Feedback UI' />
            <div className="container">
                <FeedbackItem />
            </div>
        </>
    )
}




