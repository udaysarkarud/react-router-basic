import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleMeal from '../SingleMeal/SingleMeal'

const AllMeals = (props) => {
    const [getmeals, setGetmeals] = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${props.searchedText}`)
            .then(res => res.json())
            .then(data => setGetmeals(data.meals))
    }, [props.searchedText])

    return (
        getmeals ?
            <Container className="my-5">
                <Row xs={1} md={3} className="g-4">
                    {
                        getmeals.map(meal => <SingleMeal key={meal.idMeal} fullMealData={meal} />)
                    }
                </Row>
            </Container>
            :
            <Container>
                <h2>Nothing is found</h2>
            </Container>
    );
};

export default AllMeals;