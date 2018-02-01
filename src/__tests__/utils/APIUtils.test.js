import {createBearerHeaderObject} from '../../utils/APIUtils'

test('Expect to createBearerObject to return only a literal object', () => {
    const XPTOJWTToken = 'XPTO'
    expect(createBearerHeaderObject(XPTOJWTToken)).toEqual({'Authorization': `Bearer ${XPTOJWTToken}`});
})