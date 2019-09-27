'use strict';

const util = require('./lib/ipputil');
const parse = require('./lib/parser');
const serialize = require('./lib/serializer');
const request = require('./lib/request');
const Printer = require('./lib/printer');
const versions = require('./lib/versions');
const attributes = require('./lib/attributes');
const keywords = require('./lib/keywords');
const enums = require('./lib/enums');
const tags = require('./lib/tags');
const statusCodes = require('./lib/statusCodes');
const StreamParser = require('./lib/StreamParser');

module.exports = {
  parse,
  serialize,
  request,
  Printer,
  versions,
  attributes,
  keywords,
  enums,
  tags,
  statusCodes,
  StreamParser
};
module.exports.operations = module.exports.enums['operations-supported'];
module.exports.attribute = {
  // http://www.iana.org/assignments/ipp-registrations/ipp-registrations.xml#ipp-registrations-7
  groups: util.xref(module.exports.tags.lookup.slice(0x00, 0x0f)),

  // http://www.iana.org/assignments/ipp-registrations/ipp-registrations.xml#ipp-registrations-8
  values: util.xref(module.exports.tags.lookup.slice(0x10, 0x1f)),

  // http://www.iana.org/assignments/ipp-registrations/ipp-registrations.xml#ipp-registrations-9
  syntaxes: util.xref(module.exports.tags.lookup.slice(0x20))
};
