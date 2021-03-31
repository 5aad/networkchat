const prod = {
  api: {
    URL: 'http://68.183.98.199:5008/api/v1/',
  },
  assetUrl: 'https://www.omebackendldv.com/icons',
  bankIcon: 'https://www.omebackendldv.com/bankicons',
  merchantUrl: 'http://omebackendldv.com/popularvendor',

  serverUrl: 'https://www.omebackendldv.com/',
};

const dev = {
  api: {
    URL: 'http://localhost:5000/api/',
  },
  assetUrl: 'http://localhost:5000/icons',
  merchantUrl: 'http://localhost:5000/popularvendor',
  bankIcon: 'http://localhost:5000/bankicons',
  serverUrl: 'http://localhost:5000/',
};

// const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev;

export default {
  ...prod,
};
