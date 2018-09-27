import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer, RegularPolygon } from 'react-konva';

class Hexagon extends React.Component {
    render() {
        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <RegularPolygon
                        x={100}
                        y={150}
                        sides={6}
                        radius={70}
                        fill='red'
                        stroke='black'
                        strokeWidth={2}
                    ></RegularPolygon>
                </Layer>
            </Stage>

        );
    }
}

// render(<Hexagon />, document.getElementById('container'));

export default Hexagon;

