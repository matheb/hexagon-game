import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer, RegularPolygon } from 'react-konva';

class Hexagon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            hoverColor: 'rgb(244, 66, 66)'
        };
        this.handleClick = this.handleClick.bind(this);
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
    }

    handleClick() {
        this.setState({
            color: 'yellow'
        })
    }

    mouseEnter() {
        document.body.style.cursor = "pointer";
    }

    mouseLeave() {
        document.body.style.cursor = "default";
    }

    render() {
        return (
            <RegularPolygon
                x={this.props.x}
                y={this.props.y}
                sides={6}
                radius={this.props.r}
                fill={this.state.color}
                stroke='black'
                strokeWidth={4}
                rotation={-30}
                onClick={this.handleClick}
                onMouseEnter={this.mouseEnter}
                onMouseLeave={this.mouseLeave}
            ></RegularPolygon>
        );
    }
}

export default Hexagon;

