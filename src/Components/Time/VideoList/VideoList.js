import React from 'react';
import PropTypes from 'prop-types';
import Video from './Video/Video';

function VideoList(props) {
    return props.list.map((item, index) => <Video key={index} url={item.url} date={item.date} />);
}

VideoList.propTypes = {
    list: PropTypes.array,
}

export default VideoList
