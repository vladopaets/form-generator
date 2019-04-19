import React, {Component} from 'react';
import {Formik} from 'formik';
import RenderInputs from './RenderInputs';

import {destructureInitialData} from '../../helpers';

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