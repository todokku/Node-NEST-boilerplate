export const constants = {
  DB_URI: 'mongodb//localhost:27017/nest-restaurant',
  JWT: {
    secret: 'abcd123456',
    signOptions: { expiresIn: '60s' },
  },
};
