import React, {Component} from 'react';
import FormGenerator from './FormGenerator';

import './App.css';

class App extends Component {
    onSubmit = (data) => {
        console.log(data);
    };

    render() {
        const schema = {
            properties: {
                email: {
                    title: "email",
                    type: "email",
                    widget: "email",
                },
                password: {
                    title: "password",
                    type: "password",
                    widget: "password",
                    value: "",
                },
                profile: {
                    properties: {
                        name: {
                            title: "name",
                            type: "string",
                            widget: "string",
                            value: "Vlad",
                        },
                        bio: {
                            properties: {
                                lastname: {
                                    title: "lastname",
                                    type: "string",
                                    widget: "string",
                                    value: "Opaets",
                                }
                            }
                        }
                    }
                }
            },
            title: "Registration form"
        };

        return (
            <div className="App">
                <FormGenerator schema={schema} onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default App;
