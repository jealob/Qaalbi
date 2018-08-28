import React from "react";

const Modal = (props) => (
  <div className=" ">
  





  
</div>
);

export default Modal;








<Modal.Dialog>
<Modal.Header>
  <Modal.Title>Modal title</Modal.Title>
</Modal.Header>

<Modal.Body><div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
  <label htmlFor="eventType">Event Type</label>
  <select id="eventType" className="form-control">
    <option selected>Please Select</option>
    <option>Wedding</option>
    <option>Bridal Shower</option>
    <option>Baby Shower</option>
    <option>Birthday</option>
    <option>Work Event</option>
    <option>Others</option>
  </select>
</div>
</Modal.Body>

<Modal.Footer>
  <Button>Close</Button>
  <Button bsStyle="primary">Save changes</Button>
</Modal.Footer>
</Modal.Dialog>