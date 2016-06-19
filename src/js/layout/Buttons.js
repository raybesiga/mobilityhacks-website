import React from 'react';
require('./buttons.styl');


class SendUsAMailButton extends React.Component {
    render() {
        return (
            <div className="button__email">
                <a href="mailto:hackerstolz@hackerstolz.de">SEND US AN EMAIL</a>
            </div>
        );
    }
}

export default SendUsAMailButton;
