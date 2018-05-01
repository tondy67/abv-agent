/**
 * The nodejs part of abv-agent bundle
 * @module abv-agent
 * build: npm run dist
 * https://github.com/tondy67/abv-agent
 */
"use strict";

const ts = require('abv-ts')('abv:agent');
const CAgent = require('./lib/CAgent.js');
const fs = require('abv-vfs');
const pjson = require('./package.json');

if (ts.isBrowser){
	if (!window.ts) window.ts = ts;
	if (!window.abv) window.abv = {};
	window.abv.CAgent = CAgent;
	window.abv.fs = fs;
	window.abv.pjson = pjson;
}

module.exports = {
	CAgent: CAgent
};
