const request = require('axios');
const stub = require('./stub');

module.exports = async (req, res) => {
  try {
    // const { data } = await request({
    //   method: 'GET',
    //   url: 'https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi',
    //   headers: {
    //     'content-type': 'application/octet-stream',
    //     'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com',
    //     'x-rapidapi-key': '3f3e074071mshb072896d6232a36p174f04jsna72ac295513f',
    //   },
    //   params: {
    //     q: 'get:new7:US',
    //     p: '1',
    //     t: 'ns',
    //     st: 'adv',
    //   },
    // });
    res.json({ stub });
  } catch (err) {
    console.error({ err });
  }
};
