import React from 'react';

import Section from './hoc/Section';
import ThemeContext from './contexts/theamContext';
export default class App extends React.Component {
    state = {
       theme: 'light',
       
    }  

    render() {
        return (
            <div className="app">

                <ThemeContext.Provider value={this.state}>
                    <Section />
                </ThemeContext.Provider>
            </div>
        );
    }
}
