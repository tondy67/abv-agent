/**
 * The nodejs part of abv-agent bundle
 * @module abv-agent
 * build: npm run dist
 */
"use strict";

const ts = require('abv-ts')('abv:agent');
const crypto = require('crypto');
const JSZip = require("jszip");
const zip = new JSZip();
const abv = require('abv-core');

const core = {
		Agent: abv.core.Agent,
	};
	
if (ts.isBrowser()){
	window.ts = ts;
	window.zip = zip;
	window.abv = {core: core};
}

module.exports = core;
