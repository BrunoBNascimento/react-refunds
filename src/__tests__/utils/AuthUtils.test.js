import {
    isAuthenticated,
    isAdmin,
    isClient
} from '../../utils/AuthUtils'

test('set auth token in localstorage and expects isAuthenticated to return true', () => {
    localStorage.setItem('auth-token', 'xpto')
    expect(isAuthenticated()).toBe(true)
})

test('set role as admin and expects to isAdmin to return true', () => {
    localStorage.setItem('role', 'admin')
    expect(isAdmin()).toBe(true)
})

test('set role as client and expect to isClient to return true', () => {
    localStorage.setItem('role', 'client')
    expect(isClient()).toBe(true)
})