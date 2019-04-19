import React from "react";
import {Field} from "formik/dist/index";
import {generateName} from "../../../../helpers";

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

export default RenderRadioFields;