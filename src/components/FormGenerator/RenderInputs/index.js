import React from "react";
import {Field} from "formik";

const RenderInputs = ({schema, prefix = null}) => {
    const generateName = (prefix, name) => {
        return prefix ? prefix + '.' + name : name
    };

    const renderField = (key, props) => {

        if(props.hasOwnProperty('properties')) {
            return <RenderInputs schema={props} prefix={generateName(prefix, key)} key={key}/>
        }

        return (
            <div key={key}>
                {props.title && <label htmlFor={generateName(prefix, props.title)}>{props.title}</label>}
                <Field name={generateName(prefix, props.title)}>
                    {({ field, form }) => (
                        <div>
                            <input type={props.type} {...field}/>
                            {form.touched[field.name] &&
                            form.errors[field.name] && <div className="error">{form.errors[field.name]}</div>}
                        </div>
                    )}
                </Field>
            </div>
        )
    };

    return (
        <>
            {Object.entries(schema.properties).map(item => {
                /*
                * item[0] - key
                * item[1] - values
                 */
                return renderField(item[0], item[1]);
            })}
        </>
    )
};

export default RenderInputs;