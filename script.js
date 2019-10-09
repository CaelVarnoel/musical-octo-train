var popup = document.querySelector('.popup');
var input = document.querySelector('.plus');

var zakoutput = document.querySelector('.zakoutput')
var table = document.querySelector('.table')
var template = document.querySelector('#newhuman-template').content;
var newItemTemplate = template.querySelector('.newhuman');
var submit1 = document.querySelector('.submit1');
var reset1 = document.querySelector('.reset1');
var phio1 = document.querySelector('#phio1');
var select = document.querySelector('.select');
var zak = document.querySelector('#zak');
var sale1 = document.querySelector('.number1');

var delete1 = document.querySelector('.delete');

var popup1 = document.querySelector('.popup1');
var submit2 = document.querySelector('.submit2');
var reset2 = document.querySelector('.reset2');
var phio2 = document.querySelector('#phio2');
var select1 = document.querySelector('.select1');
var zak2 = document.querySelector('#zak1');
var sale2 = document.querySelector('.number2');
var ID2 = document.querySelector('.ID2')

var ID = document.querySelector('.ID')
var curtindex=0;

input.addEventListener('click', function(){
	popup.classList.add('popup--open');
	ID.value = table.childElementCount;
});
submit1.addEventListener('click', function(evt){
	evt.preventDefault();
	var phio = phio1.value;
	var type = select.value;
	var zak1 = zak.value;
	var sale = sale1.value;
	var task = newItemTemplate.cloneNode(true);
	var iD = task.querySelector('.number');
	iD.textContent = table.childElementCount;
	var taskDescription1 = task.querySelector('.name');
	taskDescription1.textContent = phio;
	var taskDescription2 = task.querySelector('.type');
	taskDescription2.textContent = type;
	var taskDescription3 = task.querySelector('.zakazy');
	taskDescription3.textContent = zak1;
	var taskDescription4 = task.querySelector('.second');
	taskDescription4.textContent = sale;
	table.appendChild(task);
	popup.classList.remove('popup--open');
	phio1.value='';
	select.value='';
	zak.value='';
	sale1.value='';
	zakoutput.value='';
		var delete1 = task.querySelector('.delete');
	delete1.addEventListener('click',function(){
	task.remove();
	for(var i =0;i<=table.childElementCount;i++){document.querySelectorAll('.number')[i].textContent = i+1}
	});
		taskDescription1.addEventListener('click', function(evt){
	evt.preventDefault();
	popup1.classList.add('popup1--open');
	curindex = iD.textContent;
	phio2.value = document.querySelectorAll('a')[curindex-1].textContent;
	select1.value = document.querySelectorAll('.newhuman')[curindex-1].querySelector('.type').textContent;
	zak2.value = document.querySelectorAll('.newhuman')[curindex-1].querySelector('.zakazy').textContent;
	sale2.value = document.querySelectorAll('.newhuman')[curindex-1].querySelector('.second').textContent;
	ID2.value = document.querySelectorAll('.newhuman')[curindex-1].querySelector('.number').textContent;
	submit2.addEventListener('click', function(evt){
	evt.preventDefault();
    document.querySelectorAll('a')[curindex-1].textContent = phio2.value;
	document.querySelectorAll('.newhuman')[curindex-1].querySelector('.type').textContent = select1.value;
	document.querySelectorAll('.newhuman')[curindex-1].querySelector('.zakazy').textContent = zak2.value;
	document.querySelectorAll('.newhuman')[curindex-1].querySelector('.second').textContent = sale2.value;
	popup1.classList.remove('popup1--open');
	});
	});
});
reset1.addEventListener('click', function(){
	popup.classList.remove('popup--open')
});
reset2.addEventListener('click', function(){
	popup1.classList.remove('popup1--open')
})
