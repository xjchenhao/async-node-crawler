'use strict';

const Crawler = require("crawler");

class myCrawler extends Crawler {
    constructor() {
        super();
    }

    asyncDirect (opts) {
        return new Promise((resolve, reject) => {
            try {
                this.direct({
                    ...opts,
                    callback: (error, res) => {
                        resolve(opts.callback(error, res));
                    }
                });
            } catch (err) {
                reject(err);
            }
        })
    }
}
module.exports = myCrawler;