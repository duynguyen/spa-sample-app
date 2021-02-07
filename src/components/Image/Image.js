import React, {Component} from 'react';

export const ImageEditConfig = {

    emptyLabel: 'Image',

    isEmpty: function(props) {
        return !props || !props.src || props.src.trim().length < 1;
    }
};

export default class Image extends Component {

    render() {
        // if(ImageEditConfig.isEmpty(this.props)) {
        //     return null;
        // }

        return (
                <div className="Image">
                    <img
                        className="Image-src"
                        src={this.props.src}
                        alt={this.props.alt}
                        title={this.props.title ? this.props.title : this.props.alt} />;
                </div>
        );
    }
}

