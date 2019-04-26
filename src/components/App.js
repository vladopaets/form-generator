import React, {Component} from 'react';
import FormGenerator from './FormGenerator';

import './App.css';
import * as Yup from "yup";

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
                        },
                        additionalInfo: {
                            properties: {
                                pet: {
                                    title: "Your pet name",
                                    name: "pet-name",
                                    type: "string",
                                    value: ""
                                }
                            }
                        }
                    }
                }
            },
            title: "Registration form"
        };

        const validationSchema = Yup.object().shape({
            email: Yup.string()
                .email('Invalid email')
                .required('Required'),
            profile: Yup.object().shape({
                name: Yup.string()
                    .required('Required'),
                gender: Yup.string()
                    .required('choose, please')
            })
        });

        return (
            <div className="App">
                <FormGenerator schema={schema} validationSchema={validationSchema} onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default App;
