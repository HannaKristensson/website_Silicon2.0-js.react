
import React, { createContext, useState, useEffect } from "react";

const ReviewContext = createContext()

const ReviewProvider = ({children}) => {
const baseApiUri = `https://win24-assignment.azurewebsites.net/api/testimonials/`
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);




    // const getReview = async (id) => {
    // const res = await fetch(baseApiUri + id);
    //     const data = await res.json();

    //     setReview(data)
    // }

    useEffect(() => {
        fetch(baseApiUri)
        .then(data => data.json())
        .then(result => {
            setReviews(result)
            setLoading(false);
            console.log('API is found')
        })
        .catch(error => {
            setError(error);
            setLoading(false);
            console.log('Error')
        })

        const extrctReview = {

        }

        }, []) 


        if (loading) {
            return <p>Loading..</p>
        }
        if (error) {
            return <p>Error</p>
        }
        if (!reviews) {
            return <p>No data found</p>
        }
    

    return (
        <ReviewContext.Provider value={{ reviews , loading, error }}>
            {children}
        </ReviewContext.Provider>
    )
}

export { ReviewProvider, ReviewContext };