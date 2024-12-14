import React from 'react';
import PropTypes from 'prop-types';

export default function Hello({ fullName = '' }) {
    return <div>Hello {fullName}</div>;
}

Hello.propTypes = {
    fullName: PropTypes.string,
};
