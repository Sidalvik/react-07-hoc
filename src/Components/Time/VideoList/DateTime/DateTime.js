import React from 'react';
import PropTypes from 'prop-types';

function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

DateTime.propTypes = {
    date: PropTypes.string.isRequired,
}

export default DateTime
