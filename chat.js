var outer = document.getElementById('c');
var inner = document.getElementById('inner');



var x = outer.clientHeight;
var y = inner.clientHeight;

 

function atEnd()
{
    outer.scrollTop = y*y;
}







function snd()
{
    var main_chat = document.getElementById('inner');
    

    // getting value in input field
    var myinp = document.getElementById('inp').value;
    console.log(myinp)

    // getting current time
    var today = new Date()
    var time = today.getHours() + ':' + today.getMinutes();

    //create main div of msgs and assign him class 
    var msg = document.createElement('div');
    msg.className = 'msg';

    // create inner div of every unique msgs
    var msg_div = document.createElement('div');
    msg_div.className = 'mymsg'

    // create para tag to represent msgs
    var para = document.createElement('p');

    // create span tag for time
    var time_span = document.createElement('span')
    
    // append user mesage in para
    var myinpp = document.createTextNode(myinp)
    para.appendChild(myinpp)

    // Append time in span tag
    var c_time = document.createTextNode(time)
    time_span.appendChild(c_time);


    // Append user message and time in inner_main div
    msg_div.appendChild(para)
    msg_div.appendChild(time_span)

    // Append inner_main_div to main div of messages
    msg.appendChild(msg_div)
    msg.appendChild(msg_div)


    // Append Everything to main chat
    main_chat.appendChild(msg)
   

    // reset value in input field after message
    document.getElementById('inp').value = ''


    var outer = document.getElementById('c');
    var inner = document.getElementById('inner');
    var y = inner.clientHeight;

    outer.scrollTop = y*y;


}





function rply()
{

    


    var main_chat = document.getElementById('inner');
    

    // getting value in reply field
    var myreply = document.getElementById('reply').value;
    console.log(myreply)
    

    // getting current time
    var today = new Date()
    var time = today.getHours() + ':' + today.getMinutes();

    //create main div of reply and assign him class 
    var reply = document.createElement('div');
    reply.className = 'reply';

    // create inner div of every unique msgs
    var reply_div = document.createElement('div');
    // msg_div.className = 'mymsg'

    // create para tag to represent msgs
    var para = document.createElement('p');

    // create span tag for time
    var time_span = document.createElement('span')
    
    // append user mesage in para
    var myreply = document.createTextNode(myreply)
    para.appendChild(myreply)

    // Append time in span tag
    var c_time = document.createTextNode(time)
    time_span.appendChild(c_time);


    // Append user message and time in inner_main div
    reply_div.appendChild(para)
    reply_div.appendChild(time_span)

    // Append inner_main_div to main div of reply
    reply.appendChild(reply_div)
    reply.appendChild(reply_div)


    // Append Everything to main chat
    main_chat.appendChild(reply)
   
    // reset value in input field after reply
    document.getElementById('reply').value = ''

    var outer = document.getElementById('c');
    var inner = document.getElementById('inner');
    var y = inner.clientHeight;

    outer.scrollTop = y*y;

   
}




