import React, { Component } from 'react';

export default class Model extends Component {
    render() {
        const { img, title, desc, desc2, desc3, hide } = this.props;

        let modelStyle = {
            display: 'block',
            backgroundColor: 'rgba(0,0,0,0.8)'
        };

        return (
            <div className="modal show fade" style={modelStyle}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{title}</h5>
                            <button type="button" className="btn-close" onClick={hide}></button>
                        </div>
                        <div className="modal-body">
                            <img src={img} className="img-fluid" alt="" />
                            <br /><br />
                            <p>{desc}</p>
                            <p><strong>Suitable Weather:</strong> {desc2}</p>
                            <p><strong>Production Rate:</strong> {desc3}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
