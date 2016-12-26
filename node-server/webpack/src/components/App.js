'use strict';
import React from 'react';
import d3init from './check_d3';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 90
        };
    }
    componentDidMount(){
        d3init();
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                    GOOD
                </div>
                <svg></svg>
            </div>
        );
    }
}

export default App;