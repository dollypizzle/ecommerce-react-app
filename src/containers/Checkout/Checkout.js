import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBInput,
  MDBCardBody,
  MDBBtn,
} from 'mdbreact';

const CheckOut = props => {
  const cart = props.cart;

  const ProductTable = styled(MDBTable)`
    td {
      vertical-align: middle;
    }
  `;

  const [columns] = useState([
    {
      label: <strong>Product</strong>,
      field: 'product',
    },
    {
      label: <strong>QTY</strong>,
      field: 'qty',
    },
    {
      label: <strong>Amount</strong>,
      field: 'amount',
    },
  ]);

  const rows = [];
  cart.addedItems.map(item => {
    return rows.push({
      product: [
        <h5 className="mt-3">
          <strong>{item.name}</strong>
        </h5>,
      ],
      qty: `${item.quantity}`,
      amount: <strong>₦{item.quantity * item.price}</strong>,
    });
  });

  return (
    <MDBContainer>
      <div></div>
      <MDBRow>
        <MDBCol md="6" className="card mt-4">
          <h4 className="text-center mt-1">Checkout</h4>
          <form>
            <div className="grey-text">
              <MDBInput
                label="First Name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Last Name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Shipping Address"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
            </div>
          </form>
        </MDBCol>
        <MDBCol md="6">
          <h4 className="text-center mt-4">Your Order Summary</h4>
          <MDBCardBody>
            <ProductTable className="product-table">
              <MDBTableHead
                className="font-weight-bold"
                color="mdb-color lighten-5"
                columns={columns}
              />
              <MDBTableBody rows={rows} />
            </ProductTable>
            <div>
              <MDBBtn color="success">
                <a href="/pay" className="text-reset">
                  Pay: ₦{cart.total}
                </a>
              </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

export default connect(
  mapStateToProps,
  null
)(CheckOut);
