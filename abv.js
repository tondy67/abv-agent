/**
 * The browser part of abv-agent bundle
 * build: npm run dist
 */
"use strict";
// localStorage debug = 'abv:*';

(() => {
	/** @typedef */
	const fs = abv.fs;
	const select = document.querySelector.bind(document);

	const messages = select('#messages'),
		  box = select('#msg'),
		  boxFile = select('#file');

	const show = (msg) => {//console.log(msg);
		const s = typeof msg === ts.OBJ ? msg.f.substr(0,5)+'>'+msg.t.substr(0,5)+': '+msg.b : msg;
		messages.innerHTML += '<br />' + s;
		messages.scrollTop = messages.scrollHeight;
	};
	
	const $progress = (v) => { 
		select('#progress').style.width = (v * 1.5)+'px';
	};
		
	select('#echo').onclick = () => {
		const now = Date.now();
		agent.call('echo','What time?','@1',1).then(
			(res)=>{ agent.log(27,res,Date.now()-now); },
			(err)=>{ ts.error(28,err); });
	};
/*
	select('#join').onclick = () => {
		agent.call('join', '', 'room1');
	};

	select('#leave').onclick = () => {
			agent.call('leave', '', 'room1');
	};
*/
	select('#online').onclick = () => {
			agent.call('online','','');
	};

	select('#msgform').addEventListener('submit',  (e) => {
		e.preventDefault();
		const room = select('#room');
		if (boxFile.value !== '') {
			const file = boxFile.files[0];
			const name = file.name;
			const type = file.type;
			const reader = new FileReader();
			reader.onload =  (ev) => {
				const f = reader.result;
				const fo = agent.f2o(name,f,type);
				agent.write(name,f,type,f.byteLength,'',(progress)=>{
					if (progress === 1) agent.file(fo);
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
			agent.call('msg',box.value,'').then(
				(res)=>{ },	(err)=>{ ts.error(61,err); });
			agent.out('all'+' < '+agent.id +": " + box.value);
		}
		box.value = '';
		boxFile.value = '';
	});
	
  	const agent = new abv.core.Agent(location.origin,WebSocket);

  	agent.file = (msg) => { 
			let br = document.createElement("br");
			messages.appendChild(br);
			let file = new Uint8Array(msg.b);
			const type = msg.e;
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
				a.download = msg.n;
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
