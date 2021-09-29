import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleMealDetails = () => {
    const { getMealID } = useParams();
    const [mealDetails, setMealDetails] = useState({})
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${getMealID}`)
            .then(res => res.json())
            .then(data => setMealDetails(data.meals[0]))
    }, [getMealID])

    const { strMeal, strInstructions } = mealDetails

    return (
        <div>
            <h1>Name:{strMeal}</h1>
            <p>Deatils: {strInstructions}</p>
        </div>
    );
};

export default SingleMealDetails;