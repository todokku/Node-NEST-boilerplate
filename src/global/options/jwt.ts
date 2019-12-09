export const jwtOptions = {
  secret: 'abcd123456',
  signOptions: {
    // expiresIn : 1000 millisecond * 60 seconds * 60 minutes * 24 hours * 7 days = ( 1 week == 604800000 millisecond )
    expiresIn: 604800000,
  },
  ignoreExpiration: false,
};
