import React from 'react';
import { mount } from 'enzyme';
import { oneMovie, favorites } from './__mocks__/Movies';
import MovieCard from '../../components/common/MovieCard';
import RouterMock from './__mocks__/RouterMock';

describe('<MovieCard/>', () => {
  test('Comprobar el boton de Ver mas', () => {
    const clickButton = jest.fn();
    const wrapper = mount(
      <RouterMock>
        <MovieCard
          movie={oneMovie}
          key={oneMovie.id}
          favorites={favorites}
        />
      </RouterMock>
    );
    wrapper.find('button').simulate('click');
    expect(clickButton).toHaveBeenCalledTimes(1);
  });
});
