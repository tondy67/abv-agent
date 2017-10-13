/**
 * The browser part of abv-agent bundle
 * build: npm run dist
 */
"use strict";
// localStorage.ts.debug = 'abv:*';

(() => {

	/** @typedef */
	const select = document.querySelector.bind(document);

	const messages = select('#messages'),
		  box = select('#msg'),
		  boxFile = select('#file'),
		  form = select('#msgform'),
		  joinButton = select('#join'),
		  echoButton = select('#echo');

	const show = (msg) => {
		messages.innerHTML += '<br />' + msg;
		messages.scrollTop = messages.scrollHeight;
	};

	echoButton.onclick = () => {
		const now = Date.now();
		agent.call('echo','echo','@1',1000).then(
			(res)=>{ agent.log(27,res,Date.now()-now); },
			(err)=>{ ts.error(28,err); });
	};
	joinButton.onclick = () => {
		agent.call('join', '', 'room1');
	};
	select('#leave').onclick = () => {
			agent.call('leave', '', 'room1');
	};
	select('#online').onclick = () => {
			agent.call('online', '');
	};

	form.addEventListener('submit',  (e) => {
		e.preventDefault();
		const room = select('#room');
		if (boxFile.value !== '') {
			const file = boxFile.files[0];
			const reader = new window.FileReader();
			reader.onload =  (ev) => {
				const f = ev.target.result;
				agent.call('file',{body:f, name:file.name,
					type:file.type}, room.value);
				agent.file({b:f, name:file.name, type:file.type});				
				ts.info('Sent: ' + file.name);
			};
			reader.onerror = (err) => ts.error(err);
			reader.readAsArrayBuffer(file);
		}else if (box.value !== '') {
			agent.call('msg',box.value,room.value).then(
				(res)=>{ },	(err)=>{ ts.error(61,err); });
			agent.out(room.value+'<'+agent.id +": " + box.value);
		}
		box.value = '';
		boxFile.value = '';
	});
	
  	const agent = new abv.core.Agent(location.origin,WebSocket);
  	
  	agent.file = (msg) => {
			let br = document.createElement("br");
			messages.appendChild(br);
			let file = new Uint8Array(msg.b);
			let type = msg.type;
			let blob = new window.Blob([file], {type: type}); // 'image/jpeg'
			let urlCreator = window.URL || window.webkitURL;
			let fileUrl = urlCreator.createObjectURL(blob);
			if (type.startsWith('image/')){
				let img = document.createElement('img');
				img.src = fileUrl;
				img.alt = msg.name;
				img.width = '200';
				messages.appendChild(img);
			}else{
				let a = document.createElement('a');
				let linkText = document.createTextNode(msg.name);
				a.href = fileUrl;
				a.target = '_blank';
				a.download = msg.name;
				a.appendChild(linkText);
				messages.appendChild(a);
			}
			messages.scrollTop = messages.scrollHeight;
		};
		
	agent.log = ts.debug.bind(ts);
	agent.out = show;


})();
