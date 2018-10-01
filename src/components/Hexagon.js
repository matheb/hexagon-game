import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer, RegularPolygon } from 'react-konva';

class Hexagon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <RegularPolygon
                x={this.props.x}
                y={this.props.y}
                sides={6}
                radius={this.props.r}
                fill='red'
                stroke='black'
                strokeWidth={4}
                rotation={-30}
            >
            </RegularPolygon>
        );
    }
}

export default Hexagon;

