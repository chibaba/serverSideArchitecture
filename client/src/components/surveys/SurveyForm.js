// Survey form shows a form for a User to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from '../../utils/validateEmails';
const FIELDS = [
  { label: "Survey Title", name: "title" },
  { label: "Subject Line", name: "Subject" },
  { label: "Email body", name: "body" },
  { label: "Recipient List", name: "emails" }
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          <Field type="text" name="surveyTitle" component="input" />
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  _.each(FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });
  errors.emails = validateEmails(values.emails || '');

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm"
})(SurveyForm);
