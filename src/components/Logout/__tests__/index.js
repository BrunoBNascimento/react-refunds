import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import React from 'react'
import Logout from '../index'

Enzyme.configure({ adapter: new Adapter() });
test('render should return null', () => {
    const logout = new Logout()
    expect(logout.render()).toEqual(null)
})