import React, { Component } from 'react';
import Sketch from "react-p5";

export default class Background extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gamma: 0,
            beta: 0
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClick);
    }


    handleClick() {
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
            DeviceOrientationEvent.requestPermission()
                .then(permissionState => {
                    if (permissionState === 'granted') {
                        window.addEventListener('deviceorientation', (e) => {
                            this.setState(state => ({
                                beta: e.beta,
                                gamma: e.gamma
                            }));
                        });
                    }
                })
                .catch(console.error);
            } else {
            // handle regular non iOS 13+ devices
            }
    }



    setup = (p5, canvasParentRef) => {
        // if (window.DeviceOrientationEvent) {
        //     alert('yo');
        // }
      p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
      p5.rectMode(p5.CENTER);
    };
    draw = p5 => {
      p5.background(255, 255, 255);
      let rectSize =  p5.mouseX/p5.windowWidth;
      let rectRadius = (p5.mouseY/p5.windowHeight) * 10;
      
      for (let cx = 10; cx <= p5.windowWidth + 10; cx += 20) {
        for (let ry = 10; ry <= p5.windowHeight + 10; ry += 20) {
            p5.noFill();
            p5.square(cx, ry, 20 * rectSize, Math.abs(rectRadius));
        }
      }
      p5.text(this.state.gamma + ' ' + this.state.beta, 10, 30);
    };

    windowResized = p5 => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    }
   
    render() {
      return <Sketch className="layout_background" setup={this.setup} draw={this.draw} windowResized={this.windowResized} />;
    }
  }