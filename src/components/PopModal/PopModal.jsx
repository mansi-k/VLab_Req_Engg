import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
// import "bootstrap/dist/css/bootstrap.min.css";

class PopModal extends Component {
    // state = {  }
    render() { 
        const {
            info,
            onClosefn,
            toShow,
        } = this.props;
        // console.log("modalshow"+toShow);
        // const testdesc = ["p1","p2"];
        return ( 
            <Modal show={true} onHide={onClosefn} size="sm">
                <Modal.Header>
                    <Modal.Title>{info.res}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {info.desc.map((ds, index) => {
                        return (
                            <p key={`${ds}-${index}`}>{ds}</p>
                        )
                    })}
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={onClosefn}>Close</button>
                </Modal.Footer>
            </Modal>
         );
    }
}
 
export default PopModal;