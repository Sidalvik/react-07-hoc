import React from 'react';
import PropTypes from 'prop-types';
import Video from './Video/Video';
import Article from './Article/Article';
import FlipFlop from './FlipFlop/FlipFlop';
import Packager from './Packager/Packager';
import New from './New/New';
import Popular from './Popular/Popular';

function List(props) {
    const isNew = (views) => +views < 100;
    const isPopular = (views) => +views > 1000;

    return props.list.map((item, index) => {
        const Wrapper = FlipFlop(New, Popular, (props) => isNew(props.views));

        let Result;
        switch (item.type) {
            case 'video':
                Result = Packager(Wrapper, Video, (props) => isNew(props.views) || isPopular(props.views));
                return (
                    // <Video key={index} {...item} />
                    <Result key={index} {...item}/>
                    );
                    
            case 'article':
                Result = Packager(Wrapper, Article, (props) => isNew(props.views) || isPopular(props.views));
                return (
                    // <Article key={index} {...item} />
                    <Result key={index} {...item}/>
                );
            default:
                return null;
        }
    });
};

List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        url: PropTypes.string,
        title: PropTypes.string,
        views: PropTypes.number.isRequired,
    }))
}

export default List
