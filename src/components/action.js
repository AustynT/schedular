import React, {Component} from 'react';
import Icon from './icon';

class Action extends Component {
    render() {
        return (

            <div className={`${this.props.className} action`}>
                {Icon("fas fa fa-plus-circle")}
                {/* {Icon("fas fa fa-times-circle")} */}
                
            </div>
        )
    }
}
export default Action;