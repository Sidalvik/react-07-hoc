import React from 'react';
import PropTypes from 'prop-types';
import DateTime from '../DateTime/DateTime';

function DateTimePretty(DateComponent) {

  /**
   * Функция возвращает количество временных интервалов, прошедших с date
   * @param {string} date - Строка с датой
   * @param {('s'|'m'|'h'|'d')} timeUnit - строка с обозначением единицы времени (секунды, минуты, часы, дни)
   * @returns {(number|null)}
   */
  const timeAge = (date, timeUnit = 's') => {
    if (Number.isNaN(Date.parse(date))) return null;

    const age = Date.now() - Date.parse(date);
    
    switch (timeUnit) {
      case 'm': 
        return age / (60 * 1000);
      case 'h':
        return age / (60 * 60 * 1000);
      case 'd':
        return age / (24 * 60 * 60 * 1000);
      default:
        return age / 1000;
    }
  }

  const prettyDate = (date) => {
    const secondsAge = timeAge(date, 's');
    switch (true) {
      case secondsAge < 60 * 60:  //  меньше часа
        return `${Math.floor(timeAge(date, 'm'))} минут назад`;
      case secondsAge < 60 * 60 * 24:  //  меньше больше часа и меньше суток
        return `${Math.floor(timeAge(date, 'h'))} часов назад`;
      case secondsAge > 60 * 60 * 24:  //  больше суток
        return `${Math.floor(timeAge(date, 'd'))} дней назад`;
      default:
        return null;
    }
  }

  return class extends React.Component {
    static get displayName() {
      const name = DateComponent.displayName || DateComponent.name || 'Component';
      return `DateTimePretty(${name})`;
    }

    constructor(...param) {
      super(...param);
      this.state = {
        timeout: null,
      };
    }

    timeoutUpdate() {
      const {date} = this.props;
      if (timeAge(date, 'h') > 24) return;
      clearTimeout(this.state.timeout);
      const timeout = setTimeout(() => {
        this.timeoutUpdate();
      }, 60 * 1000);
      this.setState({timeout});
    }

    componentDidMount() {
      this.timeoutUpdate();
    }

    componentWillUnmount() {
      clearTimeout(this.state.timeout);
    }

      render () {
        const {date} = this.props;
        const newProps = {
          ...this.props,
          date: prettyDate(date),
        };
          return <DateComponent {...newProps} />
      }
    };
  }

DateTimePretty.propTypes = {
  DateComponent: PropTypes.instanceOf(React.Component).isRequired,
}

export default DateTimePretty
