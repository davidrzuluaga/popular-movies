import React from 'react';
import { mount } from 'enzyme';
import RouterMock from '../__mocks__/RouterMock';
import MovieCard, { isFavorite } from '../../components/common/MovieCard';
import { oneMovie, favorites } from '../__mocks__/Movies'

describe('<MovieCard />', () => {
    const createFavorite = jest.fn();
    const movieCard = mount(
        <RouterMock>
            <MovieCard
                movie={oneMovie}
                key={oneMovie.id}
                favorites={favorites}
                createFavorite={createFavorite}
            />
        </RouterMock>)

    test('Test render of MovieCard', ()=> {
        expect(movieCard.length).toEqual(1)
    })

    test('Test is Favorite', ()=> {
        expect(isFavorite(oneMovie, favorites)).toEqual(0)
        expect(isFavorite(favorites[0], favorites)).toEqual(1)
    })

    test('Test button favorite', ()=> {
        movieCard.find('#createFavorite').simulate('click');
        expect(createFavorite).toHaveBeenCalled()
    })
})
