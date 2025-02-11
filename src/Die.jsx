import React from 'react';

export default function Die(props) {
    const style = {
        background: props.isHeld ? 'green' : '',
    };

    return (
        <button style={style} onClick={props.hold}>
            {props.value}
        </button>
    );
}
