import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Pagination from "./Pagination";

Enzyme.configure({ adapter: new Adapter() });

describe('Pagination', () => {

  it('should render without crashes', () => {
    const wrapper = mount(
      <Pagination
        allItems={9} 
        perPage="3" 
        clickHandler={jest.fn()}
        activePage={2}
      />
    );
    expect(wrapper.exists()).toBeTruthy();
  });

  it('countPages test', () => {
    const wrapper = mount(
    <Pagination
        allItems={9} 
        perPage="3" 
        clickHandler={jest.fn()}
        activePage={2}
      />);
    const div = wrapper.find('[data-testid="countPages"]').children();
    
    expect(div.length).toBe(3);
  });

  it('should simulate click on page num', () => {
    const clickFn = jest.fn();
    const wrapper = mount(
      <Pagination
        allItems={9} 
        perPage="3" 
        clickHandler={clickFn}
        activePage={2}
      />
    );
    const div = wrapper.find('[data-testid="countPages"]').children().at(1);
    div.simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });

  it('should simulate click on next and prev', () => {
    const clickFn = jest.fn();
    const wrapper = mount(
      <Pagination
        allItems={9} 
        perPage="3" 
        clickHandler={clickFn}
        activePage={2}
      />
    );
    const next = wrapper.find('.next'),
          prev = wrapper.find('.prev');

    next.simulate('click');
    prev.simulate('click');
    
    expect(clickFn).toHaveBeenCalledTimes(2);
  });


});