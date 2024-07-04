export const SERVER = {
  auth: {
    host: 'http://localhost',
    port: 4537,
    get url() {
      return `${this.host}:${this.port}/api/auth`;
    },
  },
};
