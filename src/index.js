// Code Goes Here
import React from 'react';
import PropTypes from 'prop-types'

class Order extends React.Component {
  render () {
    return (
      <div className="order">
        <ul>
          <li>{this.props.cone ? 'Cone' : 'Cup'}</li>
          <li>Ordered by {this.props.orderInfo.customerName} at {this.props.orderInfo.orderedAt}.</li>
        </ul>
      </div>
    );
  }
};

Order.defaultProps = {
  cone: true,
  size: 'regular'
};

Order.propTypes = {
  cone: propTypes.bool,
  size: PropTypes.string,
  scoops: PropTypes.arrayOf(PropTypes.string).isRequired,
  orderInfo: PropTypes.shape({
      customerName: PropTypes.string.isRequired,
      orderedAt: PropTypes.number.isRequired
  }).isRequired
};
