/*
 * name : js队列模型
 * by   : chinakids
 */
function Queue(){
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
}
function enqueue(element){
	this.dataStore.push(element);
}
function dequeue(element){
	this.dataStore.shift();
}
/*
 * @ 构造优先队列(code为优先级)
 * function dequeue(){
 * 		var priority = this.dataStore.length[0].code;
 * 		for(var i=1;i<this.dataStore.length;++i){
 * 			if(this.dataStore[i].code < priority){
 * 				priority = i;
 * 			}
 * 		}
 * 		return this.dataStore.splice(priority,1);
 * }
 */
function front(){
	return this.dataStore[0];
}
function back(){
	return this.dataStore[this.dataStore.length];
}
function toString(){
	var retStr = '';
	for (var i = 0;i<this.dataStore.length;++i) {
		retStr +=this.dataStore[i] + '\n';
	};
	return retStr;
}
function empty(){
	if(this.dataStore.length == 0){
		return true;
	}else{
		return false;
	}
}
