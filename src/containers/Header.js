import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMenus } from '../actions/actions';
import _ from 'lodash';

class Header extends Component {
  componentDidMount() {
    this.props.fetchMenus('176');
  }
  render() {
    console.log('header this.props:', this.props);
    const { items } = this.props;
    if(items) {
      return (
        <div className="Header">
          {
            items
              .map( (item) =>
                <Link
                  key={item.id}
                  to={`/${item.object_slug}`}
                  style={{marginRight: '10px'}}
                >
                  {item.title}
                </Link>
              )
          }
        </div>
      )
    }
    else { return <div>Header Loading...</div>  }
  }
}

function mapStateToProps(state) {
  return state.menus;
}

export default connect(mapStateToProps, { fetchMenus } )(Header);
