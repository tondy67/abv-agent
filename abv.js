/**
 * The browser part of abv-agent bundle
 * build: npm run dist
 */
"use strict";
// localStorage debug = 'abv:*';

(() => {
	/** @typedef */
	const fs = abv.fs;
	const CAgent = abv.CAgent;
const $psw = '32bytes-67VC61jmV54rIYu1545x4TlY';
const $iv = 'tondy';
	
	const select = document.querySelector.bind(document);

	const messages = select('#messages'),
		  box = select('#msg'),
		  boxFile = select('#file');

	const show = (msg) => {//console.log(msg);
		if (msg.t === '') msg.t = 'all';
		let s;
		if (typeof msg === ts.OBJ){
			const f = fs.File();
			f.unpack(msg.b,$psw,$iv); 
			s = msg.f.substr(0,5)+' > '+msg.t.substr(0,5) + ': ' + f.body;
		}else{
			s = msg;
		}
		messages.innerHTML += '<br />' + s;
		messages.scrollTop = messages.scrollHeight;
	};
	
	const $progress = (v) => { 
		select('#progress').style.width = (v * 1.5)+'px';
	};
/*		
	select('#echo').onclick = () => {
		const now = Date.now();
		agent.call('echo','What time?','@1',1).then(
			(res)=>{ agent.log(27,res,Date.now()-now); },
			(err)=>{ ts.error(28,err); });
	};

	select('#join').onclick = () => {
		agent.call('join', '', 'room1');
	};

	select('#leave').onclick = () => {
			agent.call('leave', '', 'room1');
	};

	select('#online').onclick = () => {
			agent.call('online','','');
	};
*/
	select('#msgform').addEventListener('submit',  (e) => {
		e.preventDefault();
		const room = select('#room');
		if (boxFile.value !== '') {
			const file = boxFile.files[0];
			const name = file.name;
			const type = file.type;
			const reader = new FileReader();
			reader.onload =  (ev) => {
				const f = fs.File(name, reader.result);
				const body = f.pack($psw,$iv);
				const fo = agent.f2o(name,f,type);
				agent.write(name,body,type,f.size,'',(progress)=>{
					if (progress === 1) agent.file({b:body});
					else $progress(progress);
				});	
				$progress(20);			
			//	agent.call('file', fo, room.value);
				ts.info('Send: ' + file.name);
			};
			reader.onerror = (err) => ts.error(err);
			reader.readAsArrayBuffer(file);
		}else if (box.value !== '') {
			agent.call('online','','');
			const f = fs.File(Date.now(), box.value);
			agent.call('msg', f.pack($psw,$iv))
				.then( res => { }, err => { ts.error(61,err); });
			agent.out('all'+' < '+agent.id +": " + box.value);
		}
		box.value = '';
		boxFile.value = '';
	});
	
  	const agent = new CAgent(location.origin,WebSocket);

  	agent.file = (msg) => { 
			let br = document.createElement("br");
			messages.appendChild(br);
	const f = fs.File();
	f.unpack(msg.b, $psw,$iv);
			let file = new Uint8Array(f.body);
			const type = f.type;
			let blob = new window.Blob([file], {type: type}); // 'image/jpeg'
			let urlCreator = window.URL || window.webkitURL;
			let fileUrl = urlCreator.createObjectURL(blob);
			if (type.startsWith('image/')){
				let img = document.createElement('img');
				img.src = fileUrl;
				img.alt = msg.n;
				img.width = '200';
				messages.appendChild(img);
			}else{
				let a = document.createElement('a');
				let linkText = document.createTextNode(msg.n);
				a.href = fileUrl;
				a.target = '_blank';
				a.download = f.name;
				a.appendChild(linkText);
				messages.appendChild(a);
			}
			messages.scrollTop = messages.scrollHeight;
		};
	const pmap = new Map();
	agent.progress = (meta,chunk) => {
		if (meta.p >= 100){
			if (pmap.has(meta.n)) return pmap.delete(meta.n);
			pmap.set(meta.n,meta);
			const f = fs.readFileSync(meta.n); 
			if (f){
				const m = {n: meta.n, b: f, e: meta.e};
				agent.file(m);
			}
		}else{
			$progress(meta.p);
		}
	}
		
	agent.log = ts.debug.bind(ts);
	agent.out = show;

	if (abv.pjson.config){
		if (abv.pjson.config.server === 'free') agent.throttle = true;
	}

})();
