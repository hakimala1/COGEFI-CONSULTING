import React from 'react'
import { Card } from 'react-bootstrap';
import Slider from 'react-slick/lib/slider';


function TeamTow() {
    const team = [
        {
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&w=256&ah=256&q=80',
            name: 'Alice Bradley',
            job: 'Head of Operations'
        },
        {
            image: 'https://images.unsplash.com/photo-1560298803-1d998f6b5249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd91&w=256&ah=256&q=80',
            name: 'Ian Brown',
            job: 'Head of Development'
        },
        {
            image: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd91&w=256&ah=256&q=80',
            name: 'Daisy Carter',
            job: 'Sales Director'
        },
        {
            image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd91&w=256&ah=256&q=80',
            name: 'Danny Bailey',
            job: 'CEO & Founder'
        }

    ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true

    };
    return (
        <Slider {...settings}>
            {team && team.map((el, i) =>
                <Card style={{ width: '18rem', height : '50rem' }} key={i}>
                    <Card.Img variant="top" src={el.image} />
                    <Card.Body>
                        <Card.Title>{el.name}</Card.Title>
                        <Card.Text>
                        {el.job}
                        </Card.Text>
                       
                    </Card.Body>
                </Card>

            )}
        </Slider>
    )
}

export default TeamTow