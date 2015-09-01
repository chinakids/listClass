# name : js栈模型  - coffee 实践
# by   : chinakids

class Stack
  constructor: ->
    @dataStore = []
    @top = 0

  push : (element) ->
    @dataStore[@top++] = element

  pop : () ->
    @dataStore[--@top]

  peek : () ->
    @dataStore[@top-1]

  length : () ->
    @top

  clear : ()->
    @top=0
    @


# name : 进制转换 （by 栈）

mulBase = (num,base) ->
  s = new Stack()
  do
    s.push(num % base)
    num = Math.floor(num /= base)  # ==  num=num/base
  while s.length() > 0
    converted += s.pop()

  onverted


# name : 判断回文 （by 栈）

isPalindrome = (word) ->
  s= new Stack()
  for i in word
    s.push(i)

  var rword = ''
  while s.length() > 0
    rword + = s.pop()

  if word is rword
    return true
  else
    return false
