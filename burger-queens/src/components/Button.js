import React, { Component } from 'react';
import { Table, Button, Row, Col, InputGroup, Input, Fade } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class Buttons extends Component {
    render() {
        return (
    <div>
        <Switch>
º       <a href={ this.props.href } className = { this.props.btnClass } > { this.props.name } </a>

       </Switch>

    </div>
        )
    }
}

export default Buttons;