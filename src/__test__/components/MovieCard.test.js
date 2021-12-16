import React from 'react';
import { mount, shallow } from 'enzyme';
import RouterMock from '../__mocks__/RouterMock';
import MovieCard from '../../components/common/MovieCard';
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
        const isFavorite = movieCard.instance()
        console.log(isFavorite);
    })

    test('Test button favorite', ()=> {
        movieCard.find('#createFavorite').simulate('click');
        expect(createFavorite).toHaveBeenCalled()
    })
})
