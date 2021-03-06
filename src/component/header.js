import React from 'react';

let Header = React.createClass({
    render(){
        return (
            <div className="header">

                {this.props.left ? this.props.left : (<a href="javascript:void(0);" className="button button-link pull-left header-left" onClick={this.handleBack}>
                    <i className="ifont ifont-angle-left"></i>返回</a>)}
                {this.props.right ? this.props.right : null}
                <h1 className="header-title">{this.props.title}</h1>
            </div>
        );
    },
    handleBack(event){
        event.stopPropagation();
        event.preventDefault();
        if (this.props.history) {
            this.props.history.go(-1);
        }
    }
});

export default Header;