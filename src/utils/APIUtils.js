export const createBearerHeaderObject = jwtToken => {
    return {'Authorization': `Bearer ${jwtToken}`}
}