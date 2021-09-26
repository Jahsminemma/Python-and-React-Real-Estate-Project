import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import Alert from '@material-ui/lab/Alert'

const Alerts = () =>{
    const alerts = useSelector(state => state.alert)
    return (
        <Fragment>
            { alerts !== null && alerts.length > 0 && alerts.map(alert => (
                <Alert severity={alert.alertType} key={alert.id}>
                    { alert.msg }
                </Alert>))}
        </Fragment>
    )
};

export default Alerts
