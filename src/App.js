import React, {Component} from 'react';
import Header from './components/Header';
import Row from './components/Row';
import Col from './components/Col';
import SideMenu from './components/SideMenu';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="content">
                <Header/>
                <Row>
                    <Col col="md-2">
                        <SideMenu path={this.props.location.pathname}/>
                    </Col>
                    <Col col="md-10">
                        {this.props.children}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
