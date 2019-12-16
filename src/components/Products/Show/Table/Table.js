import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from '../../../../axios-orders';
import { MDBBtn, MDBContainer, MDBRow, MDBCol } from 'mdbreact';

import styled from 'styled-components';

const Img = styled.img`
  max-height: 270px;
  min-width: 270px;
  border-radius: 3%;
  -webkit-box-shadow: 0px 3px 38px -8px rgba(3, 23, 247, 0.88);
  -moz-box-shadow: 0px 3px 38px -8px rgba(3, 23, 247, 0.88);
  box-shadow: 0px 3px 38px -8px rgba(3, 23, 247, 0.88);
`;

const Table = props => {
  const [redirect, setRedirect] = useState(false);

  const deleted = () => {
    const token = localStorage.getItem('jwtToken');

    axios
      .delete('products/' + props.obj._id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setRedirect(true);
      })
      .catch(err => console.log(err));
  };

  if (redirect) {
    return <Redirect to={'/products'} />;
  }

  return (
    <>
      <MDBContainer className="mt-5 text-center">
        <MDBRow>
          <MDBCol className="md-6 pt-3">
            <Img alt="" cascade top src={props.obj.image} waves />
          </MDBCol>

          <MDBCol className="md-6">
            <div className="pt-3">
              <h3>
                Name:<strong> {props.obj.name}</strong>
              </h3>
              <hr />

              <h4>Brand: {props.obj.brand}</h4>
              <hr />

              <h5>Price: ₦{props.obj.price}</h5>
              <hr />

              <p>{props.obj.description}</p>
              <hr />
              <div className="d-flex justify-content-center">
                <MDBBtn color="success">
                  <Link
                    to={'/products/' + props.obj._id + '/edit'}
                    className="text-reset"
                  >
                    Edit
                  </Link>
                </MDBBtn>
                <MDBBtn color="danger" onClick={deleted}>
                  Delete
                </MDBBtn>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Table;
