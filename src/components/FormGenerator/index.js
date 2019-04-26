import React from 'react';
import {Formik} from 'formik';
import RenderInputs from './RenderInputs';

import {destructureInitialData} from '../../helpers';

const FormGenerator = ({onSubmit, schema, validationSchema}) => {
    if(!schema || !schema.properties) {
        return null;
    }
    const initialData = destructureInitialData(schema.properties);

    return (
        <div>
            <Formik
                initialValues={initialData}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                render={
                    props => (
                        <form onSubmit={props.handleSubmit}>
                            <RenderInputs schema={schema}/>
                            <button type="submit">Submit</button>
                        </form>
                    )
                }
            />
        </div>
    )
};

export default FormGenerator;