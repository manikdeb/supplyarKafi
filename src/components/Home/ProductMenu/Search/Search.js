import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
  Field,
  Dropdown
} from 'semantic-ui-react'

import myCss from './Search.css';
import className from 'classnames';

const options = [
  { key: '1', text: 'Apparel Industry', value: 'Apparel Industry' },
  { key: '2', text: 'Bearings', value: 'Bearings' },
  { key: '3', text: 'Electrical Utilities', value: 'Electrical Utilities' },
  { key: '4', text: 'Pipes & Fittings', value: 'Pipes & Fittings' },
  { key: '5', text: 'Tools & Hardware', value: 'Tools & Hardware' },
  { key: '6', text: 'Valves', value: 'Valves' },
  { key: '7', text: 'IT & Computer', value: 'IT & Computer' },
  { key: '8', text: 'Stationary', value: 'Stationary' },
]


class FormExampleFieldControl extends Component {
  state = {}

  // handleChange = (e, { value }) => this.setState({ value })

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => this.setState({ email: '', name: '' })

  render() {

    const { name } = this.state

    return (
      <Row>
        <Col lg={12} md={12} sm={12} xs={12} className={myCss.sizing}>
          <form className={myCss.uiForm}  style={{margin: '0px 1px'}}  onSubmit={this.handleSubmit}>
            <Row>
              <Col md={4} sm={4} xs={12} >
                <div className={myCss.Fields}>
                    <div className={myCss.Field}>
                      <div className={myCss.uiInput}>
                          <input type="text" name='name' value={name} onChange={this.handleChange} placeholder=" Enter item or model no " id="form-input-control-first-name"  />
                      </div>
                    </div> 
                </div>
              </Col>
              <Col md={4} sm={4} xs={12} >
                  {/* <Form.Field control={Select}  options={options} placeholder='All Categories' className={myCss.Selection} /> */}
                  <div>
                    <Dropdown clearable options={options}  placeholder='All Categories'  selection className={myCss.dropSizing} />
                  </div>
                  
                  {/* <Form.Select options={options} placeholder='All Categories'  error className={myCss.Selection} /> */}
              </Col>
              <Col md={2} sm={4} xs={1} >
                  <div className={myCss.Fields}>
                      <div className={myCss.Field}>
                          <button className={myCss.uiButton} content='Submit'> Search </button>
                      </div>
                  </div>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
      
                  
              
    )
  }
}

export default FormExampleFieldControl;

// import React, { Component } from "react";
// import { MDBSelect } from "mdbreact";

// class SelectPage extends Component {
//   state = {
//     options: [
//       {
//         text: "Option 1",
//         value: "1"
//       },
//       {
//         text: "Option 2",
//         value: "2"
//       },
//       {
//         text: "Option 3",
//         value: "3"
//       }
//     ]
//   };

//   render() {
//     return (
//       <div>
//         <MDBSelect
//           options={this.state.options}
//           selected="Choose your option"
//           label="Example label"
//         />
//       </div>
//     );
//   }
// }

// export default SelectPage;