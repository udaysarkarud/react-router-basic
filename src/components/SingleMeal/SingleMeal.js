import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleMeal = (props) => {
    const { idMeal, strMeal, strInstructions, strMealThumb } = props.fullMealData

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions.slice(0, 100)} <Link to={`/singleMeal/${idMeal}`}>Read More </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleMeal;