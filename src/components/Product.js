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

const ProductWrapper = styled.div`
    .card {
        border-color: transparent;
        transitions: all 1s linear;
    }
    
    .card-footer {
        background: transparent;
        border-top: transparent;
        transition: all 0.5s linear;
    }
    &:hover {
        .card {
            border: none;
            box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2);
            border-radius: 0px;
        }
        .card-footer {
            border-top: 1px solid lightblue;
            background: #fff;
        }
    }
    .img-container {
        position: relative;
        overflow: hidden;
    }
    .card-img-top {
        transition: all 1s linear;
    }
    .img-container:hover .card-img-top {
        transform: scale(1.2);
    }
    .cart-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem 0.4rem;
        background: var(--lightBlue);
        border: none;
        color: var(--mainWhite);
        font-size: 1.4rem;
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%, 100%);
        transition: all 0.3s linear;
    }
    .img-container:hover .cart-btn {
        transform: translate(0, 0);
    }
    .cart-btn:hover {
        color: var(--mainBlue);
        cursor: pointer;
    }
`;
