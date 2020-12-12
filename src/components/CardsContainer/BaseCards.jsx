import React, { Component } from 'react';
import FlipCard from '../CardsContainer/FlipCard'
import './FlipCard.css'

class BaseCards extends Component {

    render() { 
        const {
            options,
            onChoosefn,
            onInfofn
        } = this.props;
        // console.log(options);
        return (  
            <center> {
            options.map((option,index) => (
                <FlipCard
                    key={option.id}
                    title={option.title}
                    id={option.id}
                    idx={index}
                    color={option.flipped ? (option.res=='Correct' ? 'green' : 'maroon') : '#3399ff'}
                    onChoosefn={onChoosefn}
                    flipped={option.flipped}
                    res={option.flipped ? option.res : "Choose"}
                    disable={option.flipped ? true : false}
                    onInfofn={onInfofn}
                />
            )) }
            </center>
        );
    }
}
 
export default BaseCards;