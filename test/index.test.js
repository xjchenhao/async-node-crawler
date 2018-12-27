const assert = require('power-assert');
const mocha = require('mocha');

const crawler = require('../index');

const c = new crawler();


describe('test/index.test.js', () => {

    it('asyncDirect', async function () {
        const result = await c.asyncDirect({
            uri: 'https://www.qq.com',
            callback: function (error, res) {
                if (error) {
                    console.log(error);
                }
                else {
                    const $ = res.$;

                    return $('title').text();
                }
            }
        });

        assert(typeof result === 'string');

    });
});