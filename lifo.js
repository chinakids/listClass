/*
 * name : js栈模型
 * by   : chinakids
 */
function Stack(){
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.length = lengeh;
	this.clear = clear;
}
function push(element){
	this.dataStore[this.top++] = element;
}
function pop(){
	return this.dataStore[--this.top];
}
function peek(){
	return this.dataStore[this.top-1];
}
function length(){
	return this.top;
}
function clear(){
	this.top=0;
}
/*
 * name : 进制转换 （by 栈）
 */
function mulBase(num,base){
	var s = new Stack();
	do{
		s.push(num % base);
		num = Math.floor(num /= base);  // ==  num=num/base
	}while(s.length() > 0 ){
		converted += s.pop();
	}
	return converted;
}
/*
 * name : 判断回文 （by 栈）
 */
function isPalindrome(word){
	var s= new Stack();
	for(var i=0;i<word.length;++i){
		s.push(word[1]);
	}
	var rword = '';
	while(s.length() > 0){
		rword + = s.pop();
	}
	if(word == rword){
		return true;
	}else{
		return false;
	}
}
