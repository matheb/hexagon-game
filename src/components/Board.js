import React from 'react'
import Hexagon from './Hexagon'
import { Stage, Layer, Group, RegularPolygon } from 'react-konva';
import Konva from 'konva';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.drawHexagons = this.drawHexagons.bind(this);
        this.state = {
            x0: 200,
            y0: 300,
            n: 1,
            r: 40,
        };
    }

    renderHexagon(x, y, r) {
        return (
            <Hexagon
                key={Math.random()}
                x={x}
                y={y}
                r={r}
            />
        )
    }

    drawHexagons(n, x, y, r) {
        n += 3;
        let hexagons = [];

        let board = this.createBoard(n, this.state.x0, this.state.y0, r);

        for (let j = 0; j < board.length; j++) {
            for (let i = 0; i < board[j].length; i++) {
                if (board[j][i] && board[j][i][0] !== null) {
                    let x = board[j][i][0];
                    let y = board[j][i][1];
                    hexagons.push(this.renderHexagon(x, y, r));
                }
            }
        }

        return hexagons;
    }



    createBoard(n, x0, y0, a) {
        let ratio = 3**0.5;
        n += 3;

        let board =  this.Matrix(n, n);

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                let p1 = x0;
                let p2 = y0 + j*(a*ratio);
                if (j <= Math.floor(n/2)) {
                    for (let k = 0; k < n; k++) {
                        let x = p1 + k*(a+a/2);
                        let y = p2 - k*(a*ratio/2);
                        if (k <= Math.floor(n/2) + j) {
                            board[j][k] = [x, y];
                        }
                    }
                } else if (j > Math.floor(n/2)) {
                    for (let k = 0; k < n; k++) {
                        let x = p1 + k*(a+a/2);
                        let y = p2 - k*(a*ratio/2);
                        if (k > j - Math.floor(n/2) - 1 ) {
                            board[j][k] = [x, y];
                        }
                    }
                }
            }
        }
        return board;
    }

    Matrix(m, n){
        let matrix = [];
        for(let i = 0; i < m; i++) {
            let row = [];
            for (let j = 0; j < n; j++) {
                row.push([null, null]);
            }
            matrix.push(row);
        }
        return matrix;
    }

    render() {
        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer ref={node => this.layer = node}>
                    {this.drawHexagons(this.state.n, this.state.x0, this.state.y0, this.state.r)}
                </Layer>

            </Stage>
        )
    }
}

export default Board



