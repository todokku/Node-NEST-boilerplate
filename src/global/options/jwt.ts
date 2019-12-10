export const jwtOptions = {
  secret: 'abcd123456',
  signOptions: {
    // 1 week  = 604800000 ms
    // 1 hour  = 3600000 ms
    expiresIn: 3600000,
  },
  ignoreExpiration: false,
};
