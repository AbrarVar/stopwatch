const sec = document.querySelector('p #sec');
const min = document.querySelector('p #min');
const hr = document.querySelector('p #hr');


const start = document.querySelector('.container #start');
const stop = document.querySelector('.container #stop');
const reset = document.querySelector('.container #reset');

let interval;
let ss = 0;
let mm = 0;
let hh = 0;

start.addEventListener('click' , () => {

	interval = setInterval(() => {
		if(ss < 59){
			ss += 1;
			sec.innerHTML = ss < 10 ? '0' + ss :ss ; 
		}

		else {
			ss = 0;
			sec.innerHTML = ss < 10 ? '0' + ss :ss ;
			if(mm < 59){
				mm += 1;
				min.innerHTML = mm < 10 ? '0' + mm : mm ;
			}

			else{
				hh += 1;
				hr.innerHTML = hh < 10 ? '0' + hh  : hh;

			}
		}

	}, 1000);

	start.style.pointerEvents = 'none';

});

stop.addEventListener('click', () => {
	clearInterval(interval);
	start.style.pointerEvents = 'visible';
});

reset.addEventListener('click', () => {
	location.reload();
});