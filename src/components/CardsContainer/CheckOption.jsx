import React from 'react';

class CheckOption extends React.Component {
    state = {  }
    render() { 
        const {
            idx,
            res,
            color,
            onChoosefn,
            disable
        } = this.props;
        return ( 
            <button key={idx} className="btn btn-success" disabled={disable} style={{background: color}} onClick={() => onChoosefn(idx)}>{res}</button>
        );
    }
}
 
export default CheckOption;