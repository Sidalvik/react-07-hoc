import React from 'react';
import PropTypes from 'prop-types';

/**
 * HOC - выбор одного из двух компонентов в зависимости от истинности триггера.
 * @param {React.Component} TrueComponent - компонент при истинном значении триггера, 
 * @param {React.Component} FalseComponent - компонент при ложном значении триггера,
 * @param {(boolean | function)} triggerFunc - триггер выбора
 * @returns {React.Component}
 */
function FlipFlop(TrueComponent, FalseComponent, triggerFunc = true) {

  return class extends React.Component {
    static get displayName() {
      const trueComponentName = TrueComponent?.displayName || TrueComponent?.name || 'Component';
      const falseComponentName = FalseComponent?.displayName || FalseComponent?.name || 'Component';
      return `FlipFlop(${trueComponentName}, ${falseComponentName})`;
    }

    render() {
      const trigger = (typeof triggerFunc ==='function') ? triggerFunc(this.props) : triggerFunc;
      return (trigger 
        ? TrueComponent ? <TrueComponent {...this.props}/> : <React.Fragment/>
        : FalseComponent ? <FalseComponent {...this.props}/> : <React.Fragment/>
        );
    }
  }
}

FlipFlop.propTypes = {
    TrueComponent: PropTypes.instanceOf(React.Component).isRequired,
    FalseComponent: PropTypes.instanceOf(React.Component).isRequired,
    triggerFunc: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.func,
    ]),
}

export default FlipFlop
