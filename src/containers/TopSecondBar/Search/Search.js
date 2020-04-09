import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components'

import myCss from './Search.css';

import * as actions from '../../../store/actions/TopSecondBar/index';
// import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
// import axios from 'axios';

class Search extends Component {
  componentDidMount() {
    this.props.onFetchSearchCategoryOption();
  }
 
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleOption(event) {
    this.setState({})
  }

  render() {
    let  optionTemplate = this.props.searchCategoryOptionHistory.map( (Category) => 
        { 
            return (
                <Option  value={Category.id} key={Category.id}>{Category.name}</Option>
            )
        }  
    );

    const { name } = this.state

    return (
      <Row>
        <Col lg={12} md={12} sm={12} xs={12} className={myCss.sizing}>
          <form   style={{ margin: '0px', padding: '0px' }}  onSubmit={this.handleSubmit} >
              <div style={{ flexDirection: 'row' }}>
                <Input type="text" name='name' value={name} onChange={this.handleChange} placeholder=" Enter item or model no "   />                      
                <Select placeholder="All Categories"  onChange={this.handleChange} >
                  {optionTemplate}
                </Select>
                <Button  content='Submit'>Search</Button>
              </div>
          </form>
        </Col>
      </Row>  
    )
    
  }
}

const mapStateToProps = state => {
  return {
      searchCategoryOptionHistory: state.searchCategoryOptionAll.searchCategoryOptionHistory,
      loading: state.searchCategoryOptionAll.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onFetchSearchCategoryOption: () => dispatch( actions.fetchSearchCategoryOption() )
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( Search );

export const Input = styled.input`
  border-radius: 3px;
  border: 1px;
  font-size: 13px;
  display: block;
  width: 100%;
  max-width: 183px;
  min-width: 183px; 
  height: 36px !important;
  font-weight: 100;
  font-style: normal !important;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  color: rgba(0,0,0,.87);
  ::placeholder {
    color: #d0d0d0;
  }
  &:focus{
    outline: none;
    padding-left: 5px;
  }
`

export const Select = styled.select`
  border-radius: 3px;
  width: 100%;
  max-width: 183px;
  min-width: 183px; 
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 13px;
  border: none;
  margin-left: 2px;
  ::placeholder {
    font-size: 12px;
  }
  &:hover{
    color: black;
  }
  &:focus{
    outline: none;
  }
`

export const Option = styled.option`
  color: black;
  background: white;
  display: flex;
  white-space: pre;
  width: 250px;
  min-height: 20px;
  padding: 4px;
  outline: none;
  font-family: 'Roboto Regular', sans-serif;
  font-size: 13px;
  &:hover{
    color: #ed1c24 !important;
  }
  &:focused {
    background-color: red !important;
  }
`

export const Button = styled.button`
  border-radius: 3px;
  width: 100px;
  min-height: 36px;
  // background: #ed1c24;
  background: #cb0a12;
  color: #ffffff;
  border: none;
  font-family: 'Roboto Regular', 'Arial', 'Helvetica', sans-serif;
  font-size: 13px;
  font-weight: normal;
  cursor: pointer;
  display: inline-block;
  outline: none;
  vertical-align: baseline;
  margin: 0 0 0 0;
  text-transform: none;
  text-shadow: none;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  border-radius: none;
  -webkit-box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
  box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: opacity .1s ease,background-color .1s ease,color .1s ease,background .1s ease,-webkit-box-shadow .1s ease;
  transition: opacity .1s ease,background-color .1s ease,color .1s ease,background .1s ease,-webkit-box-shadow .1s ease;
  transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease,background .1s ease;
  transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease,background .1s ease,-webkit-box-shadow .1s ease;
  will-change: '';
  -webkit-tap-highlight-color: transparent;
  &:hover{
    color: white;
    background: #ed1e24;
  }
  &:focus{
    outline: none;
  }
`
