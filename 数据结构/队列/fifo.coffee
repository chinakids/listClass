 # name : js队列模型 - coffee 实践
 # by   : chinakids

class Queue
  constructor: ->
    @dataStore = []

  enqueue : (element) ->
    @dataStore.push element

  dequeue : (element) ->
    @dataStore.shift()

 # @ 构造优先队列(code为优先级)
 #   dequeue : () ->
 #     priority = @dataStore.length[0].code
 #     for i in @dataStore
 #       if @dataStore[i].code < priority
 #         priority = i
 #
 #
 #     @dataStore.splice priority,1

  front : () ->
    @dataStore[0]

  back : () ->
    @dataStore[@dataStore.length]

  toString : () ->
    retStr = ''
    for i in @dataStore
      retStr +=@dataStore[i] + '\n'

    retStr

  empty : () ->
    if @dataStore.length is 0
      return true
    else
      return false
