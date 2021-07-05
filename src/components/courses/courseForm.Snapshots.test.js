import React from "react";
import CourseForm from "./CourseForm";
import renderer from "react-test-renderer";
import { courses, authors } from "../../../tools/mockData";

it("sets submit button label 'Saving...' when saving is true", () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onChange={jest.fn()}
      onSave={jest.fn()}
      errors={{}}
      saving
    />
  );
  expect(tree).toMatchSnapshot();
});

it("sets submit button label to  'save' when saving is fasle", () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onChange={jest.fn()}
      onSave={jest.fn()}
      errors={{}}
      saving={false}
    />
  );
  expect(tree).toMatchSnapshot();
});
