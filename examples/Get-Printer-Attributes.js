/* eslint-disable no-unused-vars */
/* eslint-disable handle-callback-err */
'use strict';

const ipp = require('./../ipp');
const id = 0x0123; //made up reqid

const printer = ipp.Printer('http://cp02.local.:631/ipp/printer');
printer.execute('Get-Printer-Attributes', null, (err, res) => {
  console.log(res);
});
