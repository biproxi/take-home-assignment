const jwt = require('jsonwebtoken');
const APP_SECRET = 'GraphQL-is-aw3some';
export default function userAuth(req){
    let token = req.headers.authorization;
    token = jwt.verify(token, APP_SECRET);
    return token;
}