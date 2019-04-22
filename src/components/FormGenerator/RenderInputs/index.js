import React from "react";

import {generateName} from '../../../helpers';
import {Field} from "formik";

const RenderField = ({props, prefix}) => {
    return (
        <Field name={generateName(prefix, props.name)}>
            {({ field, form }) => (
                <div>
                    <input type={props.type} {...field}/>
                    {form.touched[field.name] && form.errors[field.name] && <div className="error">{form.errors[field.name]}</div>}
                </div>
            )}
        </Field>
    )
};

const RenderRadioFields = ({props, prefix}) => {
    return (
        props.enum.map((item, index) => (
            <Field name={generateName(prefix, props.name)} key={index}>
                {({ field, form }) => (
                    <div>
                        <span>{props.enum_titles[index]}</span>
                        <input type={props.type} {...field} value={item}/>
                        {form.touched[field.name] && form.errors[field.name] && <div className="error">{form.errors[field.name]}</div>}
                    </div>
                )}
            </Field>
        ))
    )
};


const RenderInputs = ({schema, prefix = null}) => {
    const renderField = (key, props) => {

        if(props.hasOwnProperty('properties')) {
            return <RenderInputs schema={props} prefix={generateName(prefix, key)} key={key}/>
        }

        return (
            <div key={key}>
                {props.title && <label htmlFor={generateName(prefix, props.name)}>{props.title}</label>}
                {props.type === 'radio' ?
                    <RenderRadioFields props={props} prefix={prefix}/> :
                    <RenderField props={props}  prefix={prefix}/>
                }
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