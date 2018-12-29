import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Routes from './../../Routes';
import { Home, User } from './../../containers';

describe('Routes', () => {
  it('default path should redirect to Home component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Routes />
      </MemoryRouter>,
    );
    expect(wrapper.find(Home)).toHaveLength(1);
  });

  it('/user path should redirect to User component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/user']} initialIndex={0}>
        <Routes />
      </MemoryRouter>,
    );
    expect(wrapper.find(User)).toHaveLength(1);
  });
});
