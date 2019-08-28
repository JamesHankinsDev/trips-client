import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const TripStops = ({ trip }) => (
  trip.destinations.map(destination => (
    <li key={destination._id}> Stop {trip.destinations.indexOf(destination) + 1} is {destination.name} </li>
  )))

const TripForm = ({ trip, handleChange, handleSubmit, updateTrip, placeHolderTrip }) => (
  <Form onSubmit={ handleSubmit }>

    <Form.Group controlId="name">
      <Form.Label>Trip Name</Form.Label>
      <Form.Control
        name="name"
        type="text"
        placeholder={ placeHolderTrip.name ? placeHolderTrip.name : 'Name your adventure!' }
        value={trip.name}
        onChange={handleChange}
        required
      />
    </Form.Group>

    <Form.Group controlId="type">
      <Form.Label>Trip Type</Form.Label>
      <Form.Control
        name="type"
        as="select"
        value={trip.type}
        placeholder={placeHolderTrip.type ? placeHolderTrip.type : ''}
        onChange={handleChange}
        required
      >
        <option>Road Trip</option>
        <option>Hiking</option>
        <option>Biking</option>
        <option>Camping</option>
        <option>Other</option>
      </Form.Control>
    </Form.Group>

    <Form.Check
      type={'checkbox'}
      name='private'
      value={true}
      label={'Would you like to keep this trip private?'}
      onChange={handleChange}
    />

    <Button variant="primary" type="submit">
      Submit
    </Button>

  </Form>
)

console.log(TripStops)

export default TripForm
