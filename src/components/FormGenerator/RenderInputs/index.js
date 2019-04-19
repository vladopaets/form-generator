import React from "react";

import RenderRadioFields from './RenderRadioFields';
import RenderField from './RenderField';

import {generateName} from '../../../helpers';

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
                    <RenderField props={props} prefix={prefix}/>
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