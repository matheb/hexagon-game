import React from 'react'
import Hexagon from './Hexagon'
import { Stage, Layer, RegularPolygon } from 'react-konva';
import Konva from 'konva';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x0: 100,
            y0: 100,
            n: 1,
            r: 60,
        }
    }


    renderHexagon(x, y, r) {
        return (
            <Hexagon
                x={x}
                y={y}
                radius={r}
            />
        );
    }

    renderBoard() {
        let stage = new Konva.Stage({
            container: 'container',
            width: window.innerWidth,
            height: window.innerHeight,
        });
        let layer = new Konva.Layer();

        let board = createBoard(this.state.n, this.state.x0, this.state.y0, this.state.r);
        for (let j = 0; j < this.state.n; j++) {
            for (let i = 0; i < board[j].length; i++) {
                if (board[j][i] !== null) {
                    let x = board[j][i][0];
                    let y = board[j][i][1];
                    console.log(layer);
                    console.log(this.renderHexagon(x, y, this.state.r));
                    layer.add(this.renderHexagon(x, y, this.state.r));
                }
            }
        }
        stage.add(layer);
        // return stage;
    }

    render() {
        // this.renderBoard();
        return (
            <div id={'container'}>
                {this.renderBoard()}
            </div>
        )

    }
}

export default Board

function createBoard(n, x0, y0, a) {
    let board = [];
    let ratio = 3**0.5;

    board =  Matrix(n, n);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let p1 = x0;
            let p2 = y0 + j*(a*ratio);
            if (j <= Math.floor(n/2)) {
                for (let i = 0; i < n; i++) {
                    let x = x = p1 + i*(a+a/2);
                    let y = p2 - i*(a*ratio/2);
                    if (i <= Math.floor(n/2 + j)) {
                        board[j][i] = [x, y];
                    }
                }
            } else if (j > Math.floor(n/2)) {
                for (let i = 0; i < n; i++) {
                    let x = p1 + i*(a+a/2);
                    let y = p2 - i*(a*ratio/2);
                    if (i > Math.floor(j - n/2 - 1 )) {
                        board[j][i] = [x, y];
                    }
                }
            }
        }
    }
    return board;
}

function Matrix(m, n){
    var mat = Array.apply(null, new Array(m)).map(
        Array.prototype.valueOf,
        new Array(n)
    );
    return mat;
}