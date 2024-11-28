export const oktaConfig = {
  clientId: "0oalfvzvinp9Y7nvh5d7",
  issuer: "https://dev-37180331.okta.com/oauth2/default",
  redirectUri: "http://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
