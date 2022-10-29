import React from 'react';
import PropTypes from 'prop-types';

function Video(props) {
    return (
        <div className="item item-video">
            <iframe src={props.url} title={'Video id: ' + Math.random()} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
};

Video.propTypes = {
    url: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
}

export default Video
