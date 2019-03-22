import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';

class Form extends Component {
  render() {
    return (
      
      
      <MDBRow center>
        <MDBCol size="6">
          <MDBCard>
            <MDBCardBody>
              <form onSubmit={this.props.getWeather}>
                <label
                  htmlFor="city"
                  className="grey-text font-weight-light"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="country"
                  className="grey-text font-weight-light"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  className="form-control"
                />
                <div className="text-center py-4 mt-3">
                  <MDBBtn className="btn btn-outline-purple" type="submit">
                    Submit
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    
    )
  }
}

export default Form
