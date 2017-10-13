/**
 * Abvos console agent
 * image viewers: feh, eog , display, fim
 */
"use strict";

const fs = require('fs');
const ts = require('abv-ts')('abv:console');
const readline = require('readline');
const log = console.log.bind(console);
const abv = require('abv-core');
const WebSocket = require('ws');

const host = 'http://localhost:8080';
const icon = 'favicon-32x32.png';

let hist = [];
let rl = null;

const out = (m) => {
	hist.push(m);
  	print(m);
  	getLine();
};

const print = (msg) => {
	let s = '\r';
	let room ='/';
	let tail = '               ';
	s += msg + tail;
	log(s);	
};


const getLine = () => {
	rl = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout
	});
	
	rl.question('< ', (answer) => {
		if (answer == ''){
		}else if (answer == 'q'){
			console.log('Bye');
			process.exit();
		}else if (answer == 'h'){
			for (let i in hist)print(hist[i]);
		}else{
			let m;
			if (answer == 'o'){
				agent.call('online','','');
			}else if (answer == 'e'){
				const now = Date.now();
				agent.call('echo','echo','@1',true).then(
					(res)=>{ agent.log(54,res,Date.now()-now); },
					(err)=>{ ts.error(55,err); });
			}else if (answer == 'f'){
				const file = 'abvos.png';
				var b = fs.readFileSync(__dirname+'/files/' + file);
				agent.call('file',{body:b,name:file,type:'image/png'});
			}else{
				agent.call('msg',answer).then(
					(res)=>{ },	(err)=>{ ts.error(61,err); });
			}
	  		process.stdout.write('Waiting response...');
  		}
	  	rl.close();
	});

};

const agent = new abv.core.Agent(host,WebSocket);
agent.out = out;
agent.log = ts.debug.bind(ts);
agent.file = (msg) => {
	const file = msg.name === icon ? Date.now() + icon : msg.name;
	fs.writeFileSync(__dirname+'/files/' + file, new Buffer(msg.b));
	out('> file: ' + file);
};

setTimeout(getLine, 500);
