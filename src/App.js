import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"


export default function App() {

    // if (loading) return <h1>Loading...</h1>

    const [feedback, setFeedback] = useState(FeedbackData)


    return (
        <>
            <Header text='Feedback UI' />
            <div className="container">
                <FeedbackList feedback={feedback} />
            </div>
        </>
    )
}




