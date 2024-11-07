
import React, { createContext, useState, useEffect } from "react";

export const ReviewContext = createContext()

const ReviewProvider = ({children}) => {
const baseApiUri = `https://win24-assignment.azurewebsites.net/api/testimonials/`
    const [reviews, setReviews] = useState([])
    const [review, setReview] = useState({})


    const getReview = async (id) => {
    const res = await fetch(baseApiUri + id);
        const data = await res.json();

        setReview(data)
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(baseApiUri);
            const data = await res.json();

            setReviews(data)
        }

    fetchData()

    }, []) 

    return (
        <ReviewContext.Provider value={{ reviews , review }}>
            {children}
        </ReviewContext.Provider>
    )
}

export default ReviewProvider