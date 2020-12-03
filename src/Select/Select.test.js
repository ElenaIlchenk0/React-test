import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Select from "./Select";

Enzyme.configure({ adapter: new Adapter() });

describe('Select', () => {

  it('should render without crashes', () => {
    const wrapper = mount(
      <Select
        changeSorting={jest.fn}
      />
    );
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should simulate change', () => {
    const changeFn = jest.fn();
    const wrapper = mount(
      <Select
        changeSorting={changeFn}
      />
    );
    const select = wrapper.find('select');
    select.simulate('change');
    expect(changeFn).toHaveBeenCalled();
  });


});