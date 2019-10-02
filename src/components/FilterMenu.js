import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setTextFilter } from '../redux/actions/actions.js';

const mapStateToProps = state => {
  return {
    textFilter: state.filters.textFilter
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setTextFilter : (text) => { dispatch(setTextFilter(text)) }
  }
}

class FilterMenu extends Component {
  constructor(props) {
    super(props);

    this.handleGeneralFilterText = this.handleGeneralFilterText.bind(this);
  }

  handleGeneralFilterText(event) {
    this.props.setTextFilter(event.target.value);
  }

  render() {
    return (
      <div className="filter-menu">
        <input type="text" placeholder="Search..." value={this.props.textFilter} onChange={this.handleGeneralFilterText} className="search-bar"></input>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterMenu);