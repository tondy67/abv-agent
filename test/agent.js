/**
 * Abvos console agent
 * image viewers: feh, eog , display, fim
 */
"use strict";

const ts = require('abv-ts')('abv:agent');
const pjson = require('../package.json');
const fs = require('abv-vfs');
const readline = require('readline');
const CAgent = require('../lib/CAgent.js');
const WebSocket = require('ws');
const net = require('net');
const os = require('os');

const host = 'http://localhost:8080';
const icon = 'favicon-32x32.png';
const bdir = os.tmpdir();
const $psw = '32bytes-67VC61jmV54rIYu1545x4TlY';
const $iv = 'tondy';

let hist = [];
let rl = null;

const out = (msg) => {
	if (msg.t === '') msg.t = 'all';
	let s;
	if (typeof msg === ts.OBJ){
		const f = fs.File();
		f.unpack(msg.b,$psw,$iv); 
		s = msg.f.substr(0,5)+' > '+msg.t.substr(0,5) + ': ' + f.body;
	}else{
		s = msg;
	}
	const m = s; 
	hist.push(m);
  	print(m);
  	getLine();
};

const print = (msg) => {
	let s = '\r';
	let room ='/';
	let tail = '                    ';
	s += msg + tail;
	console.log(s);	
};


const getLine = () => {
	rl = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout
	});
	
	rl.question('< ', (answer) => {
		if (answer == ''){
		}else if (answer == 'q'){
			ts.println('Bye');
			process.exit();
		}else if (answer == 'h'){
			for (let i in hist)print(hist[i]);
		}else{
			let m;
			if (answer == 'o'){
				agent.call('online','','');
			}else if (answer == 'e'){
				const now = Date.now();
				agent.call('echo','What time?','@1',1000).then(
					res => { agent.log(59,res,Date.now()-now); },
					err => { ts.error(60,err); });
			}else if (answer == 'f'){
				const name = 'abvos.png';
				const file =  __dirname+'/'+name;//'Vídeo.MOV';//'BrianBoru.mp4';//'green-camp.jpg'; // 
				if (fs.existsSync(file)){
					const stat = fs.lstatSync(file); 
					const mime = fs.mimetype(file);
					const f = fs.File(name, fs.readFileSync(file));
					const body = f.pack($psw,$iv);
					agent.write(file,body,mime,stat.size,'',(progress)=>{
						ts.debug(67,progress);
					});
				}
			}else{
				agent.call('online','','');
				const f = fs.File(Date.now(),answer);
				agent.call('msg', f.pack($psw,$iv))
					.then( res => { })
					.catch(e => { ts.error(74, e.stack); });
			}
	  		process.stdout.write('Waiting response...');
  		}
	  	rl.close();
	});

};

const agent = new CAgent(host,WebSocket); // net.Socket
agent.out = out;
agent.log = ts.debug.bind(ts);
agent.file = (msg) => {
	const f = fs.File();
	f.unpack(msg.b, $psw,$iv);
	const file = bdir + '/' + f.name;
	fs.writeFileSync(file, Buffer.from(f.body));
	out('> file: ' + file);
};
if (pjson.config){
	if (pjson.config.server === 'free') agent.throttle = true;
}

setTimeout(getLine, 500);
