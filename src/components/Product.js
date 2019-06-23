import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return(

            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5">
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top" />
                        </Link>
                        <button className="cart-btn" disabled={inCart?true:false}>
                            {inCart?(
                                <p className="text-capitalize mb-0" disabled>{ " " } in cart</p>
                            ): (
                                <i className="fa fa-cart-plus"></i>
                            )}
                        </button>
                    </div>
                </div>

                {/* card footer */}
                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">
                        {title}
                    </p>
                    <h5 className="text-blue font-italic mb-0">
                        <span className="mr-1">$</span>
                        {price}
                    </h5>
                </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div``;
