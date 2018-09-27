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
                radius={this.props.radius}
                fill='red'
                stroke='black'
                strokeWidth={1}
            ></RegularPolygon>
        );
    }
}

// render(<Hexagon />, document.getElementById('container'));

export default Hexagon;

