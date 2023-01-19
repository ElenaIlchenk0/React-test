import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Article from "./Article";

Enzyme.configure({ adapter: new Adapter() });

describe('Article', () => {

  it('should render without crashes', () => {
    const wrapper = mount(
      <Article
        articleItem={{"test": "text"}}
        key="1"
        inactive={false}
      />
    );
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should include expected props', () => {
    const wrapper = mount(
      <Article
        articleItem={{"test": "text", img: 'img'}}
        key="1"
        inactive={false}
      />
      );
      expect(wrapper.find('img').props().src).toBe('img');
  });

  it('news title test', () => {
    const wrapper = mount(
      <Article
        articleItem={{'title': 'test'}}
        key="1"
        inactive={false}
      />);
    const h3 = wrapper.find('h3');
    expect(h3.text()).toBe('test');
  });

  it('date format test', () => {
    const wrapper = mount(
      <Article
        articleItem={{'date': '1425157200'}}
        key="1"
        inactive={false}
      />);
    const span = wrapper.find('[data-testid="date"]');
    expect(span.text()).toBe('28.2.2015');
  });

  it('views prop test', () => {
    const wrapper = mount(
      <Article
        articleItem={{'views': '123'}}
        key="1"
        inactive={false}
      />);
    const span = wrapper.find('[data-testid="views"]');
    expect(span.text()).toBe('123');
  });


});
