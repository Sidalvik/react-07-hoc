import React from 'react';
import PropTypes from 'prop-types';

/**
 * HOC - составляет композицию компонентов - помещает компонент-потомок в компонент родитель при истинном значении фильтра
 * @param {React.Component} Wrapper - компонент-родитель композиции компонентов,
 * @param {React.Component} Baggage - компонент-потомок композиции компонентов,
 * @param {(boolean | function)} filterFn - фильтр оборачивания, при ложном значении компонент возвращает потомка без помещения внутрь родителя,
 * @returns {React.Component}
 */
function Packager(Wrapper, Baggage, filterFn = true) {

  return class extends React.Component {
    static get displayName() {
        const wrapperName = Wrapper?.displayName || Wrapper?.name || 'Component';
        const baggageName = Baggage?.displayName || Baggage?.name || 'Component';
        return `${baggageName} within a ${wrapperName}`;
      }

    render() {
        const filter = (typeof filterFn === 'function') ? filterFn(this.props) : filterFn;
        return (filter)
                ? Wrapper ? <Wrapper {...this.props}><Baggage {...this?.props}/></Wrapper> : <React.Fragment/>
                : Baggage ? <Baggage {...this.props}/> : <React.Fragment/>;
    }
  };
}

Packager.propTypes = {
    Wrapper: PropTypes.instanceOf(React.Component).isRequired,
    Baggage: PropTypes.instanceOf(React.Component).isRequired,
    filterFn: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.func,
    ]),
}

export default Packager
