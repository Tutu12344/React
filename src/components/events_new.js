import React, { Component } from "react";
import { connect } from "react-redux";
import { post_events } from "../actions";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

class EventsNew extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  renderField(field) {
    const {
      input,
      label,
      type,
      meta: { touched, error },
    } = field;
    return (
      <div>
        {console.log(input)}
        {/* ...可変長配列の展開 */}
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    );
  }
  async onSubmit(values) {
    await this.props.post_events(values);
    this.props.history.push("/");
  }
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field
            label="Title"
            name="title"
            type="text"
            component={this.renderField}
          ></Field>
          <Field
            label="Body"
            name="body"
            type="text"
            component={this.renderField}
          ></Field>
        </div>
        <div>
          <input
            type="submit"
            value="Submit"
            disabled={pristine || submitting}
          />
          <Link to="/">Cancel</Link>
        </div>
      </form>
    );
  }
}
const validate = (values) => {
  const errors = {};
  if (!values.title) errors.title = "Enter a title,please";
  if (!values.body) errors.body = "Enter a body,please";
  return errors;
};
const mapDispatchToProps = { post_events };
export default connect(
  null,
  mapDispatchToProps
)(reduxForm({ validate, form: "eventNewForm" })(EventsNew));
