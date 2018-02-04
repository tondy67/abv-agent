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
const fs = require('abv-vfs');
const pjson = require('./package.json');

const core = {
		Agent: abv.core.Agent
	};
	
if (ts.isBrowser){
	if (!window.ts) window.ts = ts;
	if (!window.zip) window.zip = zip;
	if (window.abv) window.abv.core = core;
	else window.abv = {core: core};
	window.abv.fs = fs;
	window.abv.pjson = pjson;
}

module.exports = core;
