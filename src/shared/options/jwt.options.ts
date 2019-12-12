export const jwtOptions = {
  secret: 'abcd123456',
  signOptions: {
    expiresIn: 3600000, // 1 week  = 604800000 ms, 1 hour  = 3600000 ms
  },
  ignoreExpiration: false,
};
