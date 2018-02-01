import {realToFloat} from '../../utils/FormatterUtils'

test('dont return 0 from realToFloat', () => {
    const monetaryValueBRL = 'R$ 19,99'
    expect(realToFloat(monetaryValueBRL)).not.toBe(0)
    expect(realToFloat(monetaryValueBRL)).not.toBe(NaN)
})