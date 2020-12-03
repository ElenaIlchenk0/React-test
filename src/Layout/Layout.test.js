import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Layout from "./Layout";

Enzyme.configure({ adapter: new Adapter() });

describe('Pagination', () => {

  it('should render without crashes', () => {
    const wrapper = mount(
      <Layout />
    );
    expect(wrapper.exists()).toBeTruthy();
  });

});