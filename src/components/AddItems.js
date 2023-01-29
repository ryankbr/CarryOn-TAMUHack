// import React, { useState } from 'react';
import React from "react";
import { 
  Form,
  FormGroup,
  Label,
  Input,
  Button

} from 'reactstrap'
import '../App.css';

const AddItem = () => {

  return (
    <div className="bg">
      <h1>Bag</h1>
      <Form>
        <FormGroup>
          <Label for="length">
            Length
          </Label>
          <Input
            id="length"
            name="length"
            placeholder="Enter the length of this bag"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="width">
            Width
          </Label>
          <Input
            id="width"
            name="width"
            placeholder="Enter the width of this bag"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="height">
            Height
          </Label>
          <Input
            id="height"
            name="height"
            placeholder="Enter the height of this bag"
            type="text"
          />
        </FormGroup>
        <FormGroup check>
          <Input
            name="carryOn"
            type="radio"
          />
          {' '}
          <Label check>
            Carry On
          </Label>
        </FormGroup>
        <FormGroup check>
          <Input
            name="checked"
            type="radio"
          />
          {' '}
          <Label check>
            Checked
          </Label>
        </FormGroup>
      </Form>
      <Button>
        Add Another Bag
      </Button>
    </div>
  );
};

export default AddItem;
