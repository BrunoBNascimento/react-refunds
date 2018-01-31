import React, {Component, Fragment} from 'react'
import Header from './components/Header'
import './css/App.css'

class AdminApp extends Component {
    render() {
        const {props} = this
        return (
            <Fragment>
                <Header/>
                <div className="container principal-container">
                    <div className="content">
                        {props.children}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default AdminApp
