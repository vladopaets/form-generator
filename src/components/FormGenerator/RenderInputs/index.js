import React, {Fragment} from "react";
import {Field, FieldArray, ErrorMessage} from "formik";

import {generateName} from '../../../helpers';

const RenderInputs = ({schema, prefix = null}) => {
    const renderField = (key, props) => {
        const name = generateName(prefix, key);

        if(props.hasOwnProperty('properties')) {
            return <RenderInputs schema={props} prefix={name} key={key}/>
        }

        return (
            <div key={key}>
                {props.title && <label htmlFor={name}>{props.title}</label>}
                {props.type === 'radio' ? (
                    <Fragment>
                        <div>
                            <FieldArray
                                name={name}
                                render={() => (
                                    props.enum.map((item, index) => (
                                        <Fragment key={index}>
                                            <Field name={name} value={item} type={props.type}/>
                                            <span>{props.enum_titles[index]}</span>
                                        </Fragment>
                                    ))
                                )}
                            />
                        </div>
                        <ErrorMessage component='span' name={name}/>
                    </Fragment>
                ) : (
                    <div>
                        <Field name={name} type={props.type} />
                        <ErrorMessage component='span' name={name}/>
                    </div>
                )}
            </div>
        )
    };

    return (
        <>
            {Object.entries(schema.properties).map(item => {
                return renderField(item[0], item[1]);
            })}
        </>
    )
};

export default RenderInputs;