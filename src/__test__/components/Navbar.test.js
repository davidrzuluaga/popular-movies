import React from 'react';
import { mount } from 'enzyme';
import Navbar from '../../components/layouts/navbar/Navbar';
import RouterMock from '../__mocks__/RouterMock';

describe('<Navbar />', () => {
    const navbar = mount(
        <RouterMock>
            <Navbar />
        </RouterMock>)

    test('Test render of Navbar', ()=> {
        expect(navbar.length).toEqual(1)
    })

    test('render title', ()=> {
        const text = navbar.find('h1').text()
        expect(text).toEqual('Welcome to the Popular Movies List')
    })
})
