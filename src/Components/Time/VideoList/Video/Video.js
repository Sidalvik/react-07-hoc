import React from 'react';
import PropTypes from 'prop-types';
import DateTime from '../DateTime/DateTime';

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTime date={props.date} />
        </div>
    )
}

Video.propTypes = {}

export default Video
