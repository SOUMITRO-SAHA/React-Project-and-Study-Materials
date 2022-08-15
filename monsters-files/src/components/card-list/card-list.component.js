/*************************************************************************************************************************
 * 	 Notes: How many times render() is being called?
 *       - *** Whenever the props changes that many time it will be called.***
 *       As, in the main comopnet Header, render() gets called when we initialize the application because constructor() gets 
 *      called first and the render gets called, And then when we called componentDidMount() we actually did fatch() 
 *      and we called setState(). [*** Whenever csetState gets called, render() gets called again.***] 
 *      Hence, we can see two calls of render() in console.
***************************************************************************************************************************/
import React, { Component } from 'react'
import Card from '../card/card.component';
import './card-list.styles.css'

export class CardList extends Component {
    render() {
        const { monsters } = this.props;
        return (
            <div className='card-list'>
                {monsters.map((monster) => {
                    return (
                        <Card monster = {monster} />
                    )
                })
                }
            </div>
        )
    }
}

export default CardList