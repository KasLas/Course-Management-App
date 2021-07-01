import React, { Component } from "react";

// This is a stateful component fot demonstration porpoises

class CoursesPage extends Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    //   Copy state and set the title to input value
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.course.title);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add a course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        ></input>
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default CoursesPage;
