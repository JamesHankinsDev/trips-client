import React, { Fragment } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'

const DestinationsForm = ({ destination, handleChange, handleSubmit, placeHolderDestination, tripId, updateDestination, destinationType }) => (

  <div className="row">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <Jumbotron className='jtron'>
        <Form onSubmit={ handleSubmit }>
          { !updateDestination
            ? <Fragment>
              <h3>{ destinationType }</h3>
              <Form.Group controlId="name">
                <Form.Label>Destination</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder={ destinationType }
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="time_spent">
                <Form.Label>How long will you stay?</Form.Label>
                <Form.Control
                  name="time_spent"
                  type="number"
                  placeholder="In days, please."
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Fragment>
            : <Fragment>
              <Form.Group controlId="name">
                <Form.Label>Change of plans?</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder={placeHolderDestination.name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="time_spent">
                <Form.Label>How long will you stay?</Form.Label>
                <Form.Control
                  name="time_spent"
                  type="number"
                  placeholder={placeHolderDestination.time_spent}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="peak">
                <Form.Label>What was the best part of {destination.name ? destination.name : placeHolderDestination.name}?</Form.Label>
                <Form.Control
                  name="peak"
                  type="text"
                  placeholder={placeHolderDestination.peak}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="pit">
                <Form.Label>Where was the most room for improvement?</Form.Label>
                <Form.Control
                  name="pit"
                  type="text"
                  placeholder={placeHolderDestination.pit}
                  onChange={handleChange}
                />
              </Form.Group>

            </Fragment>}

          <Button variant="dark" type="submit">
            Submit
          </Button>

        </Form>
      </Jumbotron>
    </div>
  </div>
)

export default DestinationsForm
