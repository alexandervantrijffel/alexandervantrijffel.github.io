$(".showemail").click ->
	mail = "alexander" + "@" + "structura" + ".ws"
	$(this).children('span').html "<a href='mailto" + ":" + mail + "'>" + mail + "</a>"
	$(this).attr('title', '')
	$(this).addClass('nolink')

$(".showphone").click ->
	number = ['+', '3', '1', ' ', '(0)', '6', ' ', '1', '9', '7', ' ','9', '0', '9', ' ','5', '7']
	$(this).children('span').html "<span>#{number.join('')}</span>"
	$(this).attr('title', '')
	$(this).addClass('nolink')

$("li.social a").hover (inEvent)->
			changeYOffset $(this), 36
		,  (outEvent) -> 
			changeYOffset $(this), -36

changeYOffset = (element, change) ->
	position = /(\d+)[^-\d]+(-\d+)/gi.exec element.css 'background-position'
	element.css 'background-position',"#{position[1]}px #{parseInt(position[2]) + change}px" 