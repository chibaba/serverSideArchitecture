// Survey form shows a form for a User to add input
import _ from 'lodash';
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
const FIELDS = [
 {label: 'Survey Title', name: 'title'},
 {label: 'Subject Line', name: 'Subject'},
 {label: 'Email body', name: 'body'},
 {label: 'Recipient List', name: 'emails'}
];

class SurveyForm extends Component {
  renderFields() {
     return _.map(FIELDS, ({ label, name }) => {
       return (
       <Field key={name}component={SurveyField} type="text" label={label} name={name} />
       )
     })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          <Field type="text" name="surveyTitle" component="input" />
          {this.renderFields()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm"
})(SurveyForm);
