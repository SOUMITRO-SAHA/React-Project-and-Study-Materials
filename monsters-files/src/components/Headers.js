/*************************************************************************************************************************
 *   ###Class Based Components:
 *   Table of Contents: --
 *       1. Some Basic concept of Promises is used in line 22 [fetch(...).then(...).then(...)]
 *       2. What is componentDidMount(). [Defination is down below]
 *	    3. Order of the Class components. {Like which one is in which order should be placed ?}
 *       4. Renders and re-renders.
 *
 **************************************************************************************************************************/
import React, { Component } from "react";
import CardList from "./card-list/card-list.component.js";
import SearchBox from "./search-box/SearchBox.js";

export default class Headers extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        };
    };

    /*
    The componentDidMount() method allows us to execute the React code when the component is already placed in the DOM. This method is called during the Mountiong phase of the React Life-cycle i.e. after the component is rendered.
      */
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((Response) => Response.json())
            .then((user) =>
                this.setState(
                    () => {
                        return { monsters: user };
                    }
                )
            );
    };

    // Search-Box:
    onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState(() => {
            return { searchField };
        });
    };

    render() {

        const { monsters, searchField } = this.state;
        const { onSearchChange } = this;

        const filteredMonsters = monsters.filter(
            (monster) => {
                return monster.name.toLocaleLowerCase().includes(searchField);
            }
        );

        return (
            <div>
                <h1 className="header-title">Monsters Files</h1>
                {/* SearchBox Section */}
                <SearchBox onChangeHandler={onSearchChange} className ="search-box" placeholder="Search Monster" />
                {/* Card Name */}
                <CardList monsters={filteredMonsters} />
            </div>
        );
    };
}

/*************************************************************************************************************************
 *
 *   Notes: Ordee ==>
 *               1. The constructor() will run fast.
 *               2. The render() runs next. Because the render() determine what to show.
 *               3. And, in the next life cycle componentDidMount() will run.
 *
 **************************************************************************************************************************/
