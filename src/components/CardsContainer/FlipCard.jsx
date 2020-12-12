import React, { Component } from 'react';
import CheckOption from './CheckOption';
import { InfoCircle } from 'react-bootstrap-icons';

class FlipCard extends Component {
    render() { 
        // let {key, id, title, desc, res} = this.props;
        const {
            key,
            title,
            id,
            idx,
            color,
            onChoosefn,
            flipped,
            res,
            disable,
            onInfofn
        } = this.props;
        // console.log("idx="+idx);
        return ( 
            <div key={"cd"+id} class="backcard card">
                <div className="card-header">
                    <button id={idx} className="btn btn-secondary" disabled={!disable} onClick={() => onInfofn(idx)}>
                        <InfoCircle size={25}/>
                    </button> 
                </div>
                <div className="card-body">{title}</div> 
                <div className="card-footer">
                    <CheckOption idx={idx} res={res} color={color} onChoosefn={onChoosefn} disable={disable} />
                </div>
            </div>
        );
    }
}
 
export default FlipCard;