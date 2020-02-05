import React, { Component } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import { asyncCheckout } from '../actions';

const styles = theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
    toolbar: theme.mixins.toolbar
})

class CheckOut extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(asyncCheckout());
    }

    render() {
        const { classes, shoppingCart } = this.props;
        return (
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Typography variant="h6" noWrap>
                    Total: {shoppingCart.reduce((accum, current) => {return accum + current.price}, 0)
                .toLocaleString("en-US", {style: "currency", currency: "USD"})}
                </Typography>
                <div/>
                <Button variant="contained" span="100%" onClick={this.handleClick}>Check Out</Button>
            </main>
        );
    }
}

CheckOut.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    shoppingCart: PropTypes.arrayOf(PropTypes.shape({
        itemName: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        imgUrl: PropTypes.string.isRequired
    }).isRequired
    ).isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return { shoppingCart: state.shoppingCart };
}

export default compose(
    withStyles(styles, { withTheme: true}),
    connect(mapStateToProps, null)
)(CheckOut);