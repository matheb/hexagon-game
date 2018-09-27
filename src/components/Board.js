import React from 'react'
import Hexagon from './Hexagon'
import { Stage, Layer } from 'react-konva';

class Board extends React.Component {
    render() {
        return (
            <div>
                <Hexagon />
            </div>
        );

    }
}

export default Board