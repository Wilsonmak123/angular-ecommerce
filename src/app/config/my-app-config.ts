export default  {
    // oauth2/default -> URL when authorizing with Okta Authorizaition Servver
    oidc:{
        clientId: '0oa4ukfhgjmJcVI1N5d7',
        issuer:'https://dev-41106686.okta.com/oauth2/default',
        redirectUri:'http://localhost:4200/login/callback',
        scopes:['openid','profile','email']
    }
}
