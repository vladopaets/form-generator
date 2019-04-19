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
                    title: "Your email",
                    name: "email",
                    type: "email",
                    value: ""
                },
                password: {
                    title: "Your password",
                    name: "password",
                    type: "password",
                    value: ""
                },
                profile: {
                    properties: {
                        name: {
                            title: "Your name",
                            name: "name",
                            type: "string",
                            value: ""
                        },
                        gender: {
                            title: "Your gender",
                            name: "gender",
                            enum: ["male", "female"],
                            enum_titles: ["Mr", "Mrs"],
                            type: "radio"
                        },
                        newsletter: {
                            title: "would you like to receive newsletters?",
                            name: "newsletter",
                            type: "checkbox",
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
