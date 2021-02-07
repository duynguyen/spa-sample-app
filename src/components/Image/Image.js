import React, {Component} from 'react';
import {AEM_HOST} from "../../AEM_Const";

export const ImageEditConfig = {

    emptyLabel: 'Image',

    isEmpty: function (props) {
        return !props || !props.src || props.src.trim().length < 1;
    }
};

export default class Image extends Component {

    render() {
        if (ImageEditConfig.isEmpty(this.props)) {
            return null;
        }

        return (
            <div style={{height: "400px"}}>
                <img
                    src={AEM_HOST + this.props.src}
                    alt={this.props.alt}
                    title={this.props.title ? this.props.title : this.props.alt}/>
            </div>
        );
    }
}

