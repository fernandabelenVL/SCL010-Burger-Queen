import React, { Component } from 'react';
import { Table, Button, Row, Col, InputGroup, Input, Fade } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class Buttons extends Component {
    render() {
        return (
    <div>
        <Switch>
º       <Button className="btn"> { this.props.name } </Button>
       </Switch>

    </div>
        )
    }
}

export default Buttons;