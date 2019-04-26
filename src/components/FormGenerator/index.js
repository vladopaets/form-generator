import React, {Component} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import RenderInputs from './RenderInputs';

import {destructureInitialData} from '../../helpers';

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

class FormGenerator extends Component {
    render() {
        const {onSubmit, schema} = this.props;

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
    }
}

export default FormGenerator;