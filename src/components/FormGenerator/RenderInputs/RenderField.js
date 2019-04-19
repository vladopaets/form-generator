import React from "react";
import {Field} from "formik";
import {generateName} from "../../../helpers";

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

export default RenderField;