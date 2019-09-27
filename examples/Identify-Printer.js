/* eslint-disable handle-callback-err */
/* eslint-disable no-unused-vars */
'use strict';

const ipp = require('./../ipp');
const id = 0x0123; //made up reqid

const printer = ipp.Printer('http://cp02.local.:631/ipp/printer');
const msg = {
  'operation-attributes-tag': {
    'requesting-user-name': 'William',
    message: 'These are not the droids you are looking for'
  }
};
printer.execute('Identify-Printer', msg, (err, res) => {
  console.log(res);
});
