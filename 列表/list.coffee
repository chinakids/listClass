# name : js列表模型  - coffee 实践
# by   : chinakids

class List

  custructor : () ->
    @listSize = 0
    @pos = 0
    @dataStore = []



  append : (element) ->
    @dataStore[@listSize++] = element


  find : (element) ->
    for i in @dataStore
      return i if i is element
    return -1

  remove : (element) ->
    foundAt = @find element
    if foundAt > -1
      @dataStore.splice foundAt,1
      --@listSize
      return true
    return false

  length : () ->
    @listSize


  toString : () ->
    @dataStore


  insert : (element , after) ->
    insertPos = @find after
    if insertPos > -1
      @dataStore.splice insertPos+1,0,element
      ++@listSize
      return true
    return false

  clear : () ->
    delete @dataStore
    @dataStore= []
    @listSize = @pos = 0

  contains : (element) ->
    for i in @dataStore
      return true if @dataStore[i] is element
    return false


  front : () ->
    @pos =0


  end : () ->
    @pos = @listSize -1


  prev : () ->
    if @pos > 0
      --@pos


  next : () ->
    if @pos < @listSize -1
      ++@pos

  currPos : () ->
    @pos

  moveTo : (position) ->
    @pos = position


  getElement : () ->
    @dataStore[@pos]
