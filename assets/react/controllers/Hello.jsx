import React from 'react';
import PropTypes from 'prop-types';

export default function Hello(props) {
    return <div>Hello {props.fullName}</div>;
}

Hello.propTypes = {
    fullName: PropTypes.string,
};

Hello.defaultProps = {
    fullName: '',
};
