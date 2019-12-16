import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../../store/actions/cart';
import {
  MDBBtn,
  MDBCol,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardFooter,
  MDBTooltip,
} from 'mdbreact';

const Body = props => {
  const handleClick = product => {
    props.addToCart(product);
    alert('Item added to cart!!!');
  };

  return (
    <MDBCol className="col-md-3 pb-1">
      <MDBCard
        className="mb-lg-0 mb-4 pb-2"
        style={{ maxHeight: '34rem' }}
        ecommerce
        wide
      >
        <MDBCardImage cascade top alt="" src={props.obj.image} waves />
        <hr />
        <MDBCardBody cascade className="text-center">
          <MDBCardTitle>
            <p>
              <strong>{props.obj.name}</strong>
            </p>
          </MDBCardTitle>{' '}
          <MDBBtn color="primary">
            <Link
              to={'/products/' + props.obj._id + '/show'}
              className="text-reset"
            >
              More Info
            </Link>
          </MDBBtn>
          <MDBCardFooter>
            <span className="float-left">Price: ₦{props.obj.price}</span>
            <span className="float-right">
              <MDBTooltip placement="top">
                <MDBBtn
                  // href="/cart"
                  tag="a"
                  onClick={() => {
                    handleClick(props.obj);
                  }}
                  size="lg"
                  className="p-1 m-0 mr-2 z-depth-0"
                >
                  <MDBIcon icon="shopping-cart" />
                </MDBBtn>
                <div>Add to Cart</div>
              </MDBTooltip>
            </span>
          </MDBCardFooter>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => {
      dispatch(addToCart(product));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Body);
