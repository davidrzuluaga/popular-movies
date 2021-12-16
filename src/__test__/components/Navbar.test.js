import React from 'react';
import { mount } from 'enzyme';
import Navbar from '../../components/layouts/navbar/Navbar';
import RouterMock from './__mocks__/RouterMock';

describe('<Navbar />', () => {
  const navbar = mount(
    <RouterMock>
      <Navbar />
    </RouterMock>
    );

  test('Render del componente Navbar', () => {
    expect(navbar.length).toEqual(1);
  });
  test('Render del titulo', () => {
    expect(navbar.find('h1').text()).toEqual('Welcome to the Popular Movies List');
  });
});