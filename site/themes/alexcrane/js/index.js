/*import React, { Component } from 'react'
import { render } from 'react-dom'

if (typeof window !== 'undefined') {
    window.React = React;
}

class MainNav extends Component {
    constructor() {
        super();
        this.state = {
            pageData: [],
        }
    };

    componentDidMount() {
        const pagesUrl = '/!/Fetch/pages';
        fetch(pagesUrl)
        .then((response) => (response.json()))
        .then(json => json)
        .then(data => {
            let pageData = data.map((page, i) => {
                return (
                    <li key={'page_' + i}>
                        <a href={page.url_path}>{page.title}</a>
                    </li>
                )
            })
            this.setState({pageData: pageData});
        })
    }

    render() {
        return (
            <ul>{this.state.pageData}</ul>
        )
    }
}

render(
    <MainNav />,
    document.getElementById('nav-container')
)*/



