/**
 * Abvos console agent
 * image viewers: feh, eog , display, fim
 */
"use strict";

const ts = require('abv-ts')('abv:console');
const pjson = require('./package.json');
const fs = require('abv-vfs');
const readline = require('readline');
const abv = require('abv-core');
const WebSocket = require('ws');
const net = require('net');

const host = 'http://localhost:8080';
const icon = 'favicon-32x32.png';

let hist = [];
let rl = null;

const out = (msg) => {
	if (msg.t === '') msg.t = 'all';
	const s = typeof msg === ts.OBJ ? msg.f.substr(0,5)+' > '+msg.t.substr(0,5)+': '+msg.b : msg;
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
				agent.call('echo','What time?','@1',1).then(
					res => { agent.log(59,res,Date.now()-now); },
					err => { ts.error(60,err); });
			}else if (answer == 'f'){
				const file =  'abvos.png';//'Vídeo.MOV';//'BrianBoru.mp4';//'green-camp.jpg'; // 
				if (fs.existsSync(file)){
					const stat = fs.lstatSync(file); 
					const mime = fs.mimetype(file);
					agent.write(file,null,mime,stat.size,'',(progress)=>{
						ts.debug(67,progress);
					});
				}
			}else{
				agent.call('online','','');
				agent.call('msg',answer)
					.then( res => { })
					.catch(e => { ts.error(74, e.stack); });
			}
	  		process.stdout.write('Waiting response...');
  		}
	  	rl.close();
	});

};

const agent = new abv.core.Agent(host,WebSocket); // net.Socket
agent.out = out;
agent.log = ts.debug.bind(ts);
agent.file = (msg) => {
	const file = msg.n;
	fs.writeFileSync(__dirname+'/files/' + file, Buffer.from(msg.b));
	out('> file: ' + file);
};
if (pjson.config){
	if (pjson.config.server === 'free') agent.throttle = true;
}

setTimeout(getLine, 500);
