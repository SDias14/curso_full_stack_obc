import { Component } from './Component.js';


export class Form extends Component{
    constructor(parent, options){
        super('form', parent, options);
    }

    addChildren(...children){
        children.forEach(child => {
            this.element.appendChild(child.element);
        });
    }
}

