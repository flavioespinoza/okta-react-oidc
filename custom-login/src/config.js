export default {
  oidc: {
    clientId: '0oa1i7jp286n4kMhm357',
    issuer: 'https://dev-679740.okta.com',
    redirectUri: 'http://localhost:8080/implicit/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
};
