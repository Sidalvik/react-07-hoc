import React from 'react';
import PropTypes from 'prop-types';
import DateTime from '../DateTime/DateTime';
import DateTimePretty from '../DateTimePretty/DateTimePretty';

function Video(props) {
    const NewFormatDate = DateTimePretty(DateTime);
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            {/* <DateTime date={props.date} /> */}
            <NewFormatDate date={props.date}/>;
        </div>
    )
}

Video.propTypes = {
    date: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default Video
