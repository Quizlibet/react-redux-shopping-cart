import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { fetchCheckout } from '../actions';

class CheckOut extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
    }

    componentDidUpdate() {
        const {dispatch} = this.props;
    }

    handleClick(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(fetchCheckout());
    }

    render() {
        return (
            <main>
                <Typography salignItems="flex-start" variant="h6" noWrap>
                    Permanent Drawer
                </Typography>'
                <div/>
                <Button variant="contained" span="100%" onClick={this.handleClick}>Check Out</Button>
                <Router><Link to={"/"} className="nav-link">Return to Store</Link></Router>
                
            </main>
        );
    }
}

CheckOut.propTypes = {
    shoppingList: PropTypes.arrayOf(PropTypes.shape({
        itemName: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        imgUrl: PropTypes.string.isRequired
    }).isRequired
    ).isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { shoppingList } = state;
}

export default connect(mapStateToProps)(CheckOut);