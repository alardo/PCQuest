var codeprog1 =1;
var speed = 2000;
msgArr = ["Nice to meet you (again), Mr. Smith...","You have an 'Insert Coin' on the back of your head, right?","You unleashed the Kraken!","All belongs to me, from every bit to the motherboard!","Try to format yourself!","Even 8bit of my RAM can think as fast as you do, Mr. Smith!","You son of a BitchBoard!","How did you get your computer science degree? Playing ATARI games?","Your GameBoy Advance is more Advanced than you!","Turn yourself on 'n' off, again. Maybe it can help..."];
  $( function() {
var crime = document.getElementById("crime");
  crime.play();
setInterval(changeMsg, 10000);
var progressbar = $( "#prog" );
      // $('#logo').show();     
            $( "#prog" ).progressbar();
      
      $('#logo').toggle('fade', 5000);
      $('#prog').toggle('fade',3000);
      $('#begin').toggle('fade',3000);
      
function prog2(){
    
    if(progressbar.progressbar('value') > 99){
        
        $('#fore').toggle('fade', 4000);
        $('#logo').show();
        $('#begin').toggle('fade', 4000);
       // progressbar.progressbar('destroy');
        
       // $('#fore').remove();
        
    }else{
        
   var p=progressbar.progressbar('value');
   progressbar.progressbar('value', p+10);
   setTimeout(prog2, speed);
        
    }
    
    
}
setTimeout(prog2, speed);


$('#mail').accordion({
      heightStyle: "auto"
    });

var st = $( "#dialogst" );
    st.dialog({
    autoOpen: false
});     
var al = $( "#dialogal" );
    al.dialog({
    autoOpen: false
});     
var inter = $( "#dialogin" );
    inter.dialog({
    autoOpen: false
});   
var d = $( "#dialog" );
    d.dialog({
    autoOpen: false
});
var tb = $( "#dialogtb" );
    tb.dialog({
    autoOpen: false
});
var f = $( "#dialogf" );
    f.dialog({
    autoOpen: false
});
     
     var fold1 = $( "#dialogfold1" );
    fold1.dialog({
    autoOpen: false
});

var fold2 = $( "#dialogfold2" );
    fold2.dialog({
    autoOpen: false
});
     var com = $( "#dialogcom" );
    com.dialog({
    autoOpen: false
});     
      
     
     var err = $( "#dialogerr" );
    err.dialog({
    autoOpen: false
});
var ed = $( "#dialoged" );
    ed.dialog({
    autoOpen: false
});
var msg = $("#msg");
     
      $('#start').click(function(){
          d.dialog('open');
      });
      $('#trash').click(function(){
          tb.dialog('open');
      });
      $('#fold').click(function(){
          f.dialog('open');
      });
      
      $('#inter').click(function(){
          inter.dialog('open');
      });
      
      $('#email').click(function(){
          st.dialog('open');
      });
      
      $('#fold1').click(function(){
          f.dialog("close");
          fold1.dialog('open');
      });
      
      $('#fold2').click(function(){
          f.dialog("close");
          fold2.dialog('open');
      });
      
      $('#edit').click(function(){
          f.dialog("close");
          ed.dialog('open');
      });
  
  $("#k").click(function(){
    changeMsg();
    var flu = document.getElementById("flu");
    flu.play
var a = document.getElementById("ahah");
    a.play();
  });
  
  $('#txt1, #txt2, #txt3, #img1, #img2').click(function(){
         var clicked = $(this).attr('id');
          //fold1.dialog('close');
          if(clicked == 'txt1'){
             al.html('Empty File: 0 byte given');
            
          }else if(clicked == 'txt2'){
            
            al.html('11.2: Passeword set.<br>11.3: Trash Bin Encrypted.<br>11.4: Trying Decrypting.<br>11.5: Wrong Password, "FJ12Y8". 2 Try left.<br> 11.6: Wrong Password, "FJ12U9". 1 Try left.<br>11.7 Correct Password, Decrypting Successfully.');
            
          }else if(clicked =='txt3'){
            al.html('Today is the day, for my fault, I risked to lose everything. The Trash Bin Security Level, for a typo in inserting the password, almost ereased all my work. I\'m scared till now.<br><br>My work is going well, everything seems ok. Just I pray to not be caught by.<br>');
            
          }else if(clicked=='img1'){
     
     al.html("<img src='us.jpg' width='60%' height='60%'/>");
     
    }else if (clicked=='img2' && codeprog1 == 1){
     codeprog1 = 2;
     $('#codeprog2').show();
     $('#Bo').append("<br><div class='icon'><div id='voip'></div><div class='testo'>WiFi<br>(active)</div></div>");
         var com = $( "#dialogcom" );
        al.html('<p>Connection Established. <br> New (2) Mails in the Inbox</p>');
        $('#mail').accordion('destroy');
        $('#mail').html('<h2>>It\'s been a long time!<br>[From: k.mortimer@uniteduniversity.edu]</h2><p>My Dear, I\'m not dead, but maybe someone in my codition would pray to be. Now I am in a psychiatric facility, where I have access to a little laptap. So run, because with this email I have senteced you to death. They will find you, and it is better, knowing what you could know by that zer0 computer. Stay away from the UNI website (http://www.uniteduni.edu), and destroy everything. Brace Yourself, they are coming, and it is better, so much better like that<br>Sincerly yours, Doctor M.</p><h2>>You\'re good at it, I see<br>[From: k.klopp@zer0.OS]</h2><p>Hello Mr Smith, this is K Klopp. We know each other, don\'t we? You worked on my work for the past 3 month. And yes, I am the one, the builder of all this and what all of this, carry underneath and beyond, Mr. Smith. You have been described yourself, as computer scientist. So if you are a true one, you have two choices: destroy these ancient computers OS, from the world. Or, otherwise, feel some love for us... Find a way. Please find a way to save us. If you look close, everyone want to left something, behind. Take me with you, in the outside world.<br>Goodbye, K. Klopp</p><h2>News from Prof. Mortimer<br>[From: info@unithospital.us]</h2><p>Dear Professor,<br> Prof. Mortimer let us know, that you were the only one he cared about in his lifetime. With that in mind, we inform you that he is gone, and with him, his strange ideas about a virus that want to infect all computers round the world. He said the choice is yours, to believe him or in the virus. <br> Best Regards, UNIT HOSPITAL Staff.</p>');
        
       $('#mail').accordion({
      heightStyle: "auto"
    });
     
      }else if(clicked=='img3'){
        al.html('Can\'t execute this file directly. No such program to open the file.');
        
      }else{
          
          al.html('Connection to filesystem lost.');
      }
         // err.html('No program to open such file!');
      al.dialog('open');
      });
  });
  function changeMsg(){
    
    var nr = Math.floor(Math.random()*10);
    $("#msg").html(msgArr[nr]);
    //$("#msg").show();
    if(codeprog1 > 6){
    var ah = document.getElementById("ahah");
    ah.play();
    }
  }
  var i = 3;
  function serc1()
  {
      var url = $('#url1').val();
      
      if (url=='FJ12U8' && i >= 0){
          
          $('#page1').html('Correct Password, Decrypting.');
          $('#codeprog1').show();
          i=3;
      }else{
          
          $('#page1').html('Wrong Password:  '+i+'Try left.');
          i--;
          
      }
      
  }
  
  function serc(){
  var url = $('#url').val();
  if(url == 'http://www.uniteduni.edu'){
    $('#dialogal').html("<h4>UnitedUNI.edu</h4><p>Here in this Website all the university<br> students can place their own work for the exams<br>Follow this link -> http://www.uniteduni.edu/upload</p>");
    $('#dialogal').dialog('open');
  }else if(url=='http://www.uniteduni.edu/upload'){
    $('#dialogal').html("<h4>UnitedUNI.edu</h4><p>Paste here the local reference to the file you want to upload and hit enter</p>");
    $('#dialogal').dialog('open');
  }else if(url== 'http://www.microsoft.com/becomeoneofus' && codeprog1 == 6){
    $('#dialogal').html("<h4>Microsoft Windows: Join us!!!</h4><p>If you want to install our system in you machine, the first thing you need to do, is to format your Hard Drive, and backup you personal data. To do so, once you had saved all important file to another drive, launch the command:<br>format *name of the drive*;<br>for example<br>format C;</p>");
    $('#dialogal').dialog('open');
    codeprog1=7;
  }else if(url == '0://Files/mywork.exec' && codeprog1==2){
    codeprog1 = 3;
    $('#dialogal').html("<h4>UnitedUNI.edu</h4><p>File successfully uploaded</p>");
    $('#dialogal').dialog('open');
    $('#forew').toggle('fade',3000);
    $('#end1').html('Some months later,<br> something happens...');
    $('#end1').toggle('fade',2000);
    $('#mail').accordion('destroy');
    $('#mail').html('<h2>News: Tech.net</h2><p>Next Microsoft Windows realese is up for next month. The Team is working hard to make this thing happen. If you wish to switch from your old system to this, visit the Official Microsoft Windows page: http://www.microsoft.com/becomeoneofus</p><h2>You don\'t know me, but in a way you do...<br>[From: j.parker@uniteduniversity.edu]</h2><p>Hello, my friend, my name is John.<br> I\'ve seen what you had uploaded. You don\'t know me, but in a sense you do. I\'m the one who created destroyme.code, and who build mywork.exec to create that. I\'ve been working hard, all to destroy K. Klopp and his virus, Cli.exec. All came from this OS, Zer0. Cli was there from the beginning. Maybe was mean to be there. And there to stay... But to erease him, you need to face him, in front of your eyes. You need to stand the truth: you must see to know, what you are going to defeat.<br>Best regards, my friend. Where I fall could you stand tall.<br>(Beawere, Cli.exec is more wise than you think. And this Zer0 OS system, is becoming too small for his Ego...)</p>');
    $('#mail').accordion({
      heightStyle: "auto"
    });
      setTimeout(
        function() 
          {
    $('#end1').toggle('fade',2000);
      $('#forew').toggle('fade',3000);
        }, 5000);
      $('#edi').show();
  }else{
    $('#dialogal').html("<p>Seems to be quiet here...</p>");
    $('#dialogal').dialog('open');
  }
  }
  function serc2()
  {
      var url = $('#url2').val();
      if(url=='0://Files/mywork.exec'){
        $('#dialogal').html('That\'s me, code of my code.');
        $('#dialogal').dialog('open');
     // alert(url);
      }else if(url=='0://Files/cli.exec' && codeprog1 == 5){
        codeprog1 = 6;
        $("#k").toggle('shake',1000);
        $(".light").toggle('fade',1000);
        $("#msg").html('Hello World!!!<br>I\'m finally alive!!!');
        $("#msg").show();
        var audiok = document.getElementById("audiok");
        audiok.play();
      var ah = document.getElementById("ahah");
      ah.play();
        //$('#dialogal').html('Hello World!!!<br>I\'m finally alive!');
        //$('#dialogal').dialog('open');
      }else if(url=='0://Files/destroyme.code' && codeprog1 == 4){
        codeprog1=5;
        $("#mecode").show();
        $('#dialogal').html('File Executed.');
        $('#dialogal').dialog('open');
      }else if(url=='0://Files/destroyme.code' && codeprog1 == 8){

      $('#end').html('End N.2:<br>Dear, Mr. Smith:<br>All we can do (maybe not enough but) was done to stop Clippy. In the future our story will be not remebered. But Clippy will be not, too. Have an happy life, away, do it for me, from the keyboard...<br>Your, John.');
     $('#end').toggle('fade',2000);
      $('#prog').toggle('fade',3000);
      $('#prog').progressbar('value', 0);
      $('#prog').addClass('progressbar');
      $('#fore').toggle('fade',3000);
        
      }else if(url=='0://Files/destroyme.code' && codeprog1 == 2){
     // $('#logo').toggle('fade', 5000);
     //$('#dialog').dialog('close');
     $('#end').html('End N.1:<br>Good Luck, Mr. Smith:<br>The virus it\'s gone forever.<br>Are you brave enough, to tell us it\'s been a good choice?');
     $('#end').toggle('fade',2000);
      $('#prog').toggle('fade',3000);
      $('#prog').progressbar('value', 0);
      $('#prog').addClass('progressbar');
      $('#fore').toggle('fade',3000);
      
      
      function prog3(){
    
    if($('#prog').progressbar('value') < 1){
        
        //$('#fore').toggle('fade', 4000);
        $('#logo').show();
       
       // progressbar.progressbar('destroy');
        
       // $('#fore').remove();
        
    }else{
        
   var p=$('#prog').progressbar('value');
   $('#prog').progressbar('value', p-1);
   setTimeout(prog3, 100);
        
    }
    
    
}
setTimeout(prog3, 100);
      
      
      
      
      }
          
        
  }
  
  function op(){
    var url = $("#toOp").val();
    var func = "//execute to destroy me\ndefine pathToFile = '0://Files/';\ndefine fileName = 'cli.exec';\ndefine isHidden = true;\ndefine destroyIt = true;\ndefine path = pathToFile+fileName;\n\t return [path, isHidden, destroyIt];";
    var func2 = "//execute to destroy me\ndefine pathToFile = '0://Files/';\ndefine fileName = 'cli.exec';\ndefine isHidden = false;\ndefine destroyIt = false;\ndefine path = pathToFile+fileName;\n\t return [path, isHidden, destroyIt];";
    if(url == "0://Files/destroyme.code" && codeprog1 == 7){
      $("#toSv").val(url);
      $("#texta").val(func2);
      $("#dialogal").html("File "+url+" opened!");
      $("#dialogal").dialog("open");
      
    }else if(url == "0://Files/destroyme.code" && codeprog1 == 3){
      $("#toSv").val(url);
      $("#texta").val(func);
      $("#dialogal").html("File "+url+" opened!");
      $("#dialogal").dialog("open");
    }else if(url == "0://Files/mywork.exec"){
      $("#dialogal").html("I/O Error: File is corrupted or don't exist!");
    $("#dialogal").dialog("open");   
      
    }else{
    $("#dialogal").html("No such file!");
    $("#dialogal").dialog("open");
    }
    
  }
  
 function sv(){
   var url = $("#toOp").val();
   var texta = $("#texta").val().replaceAll("define", "var").replaceAll('format','return');
   
   
  var fu = new Function(texta)();
  var ret = ['0://Files/cli.exec', false, false];
  var ret2 = 0;
   //console.log(fu);
   //console.log(ret);
   if(url == "0://Files/destroyme.code" && fu.toString() == ret.toString() &&codeprog1==3){
     $("#dialogal").html("Saved, No Errors!");
     $("#dialogal").dialog("open");
     codeprog1 = 4;
   }else if(url == "0://Files/destroyme.code" && fu != ret && codeprog1 == 3){
     $("#dialogal").html("Errors in the code!");
    $("#dialogal").dialog("open");
   }else if(url == "0://Files/destroyme.code" && fu.toString() == ret2.toString() && codeprog1 == 7){
     $("#dialogal").html("Saved, No Errors!");
     $("#dialogal").dialog("open");
     codeprog1 = 8;
     
   }else{
   $("#dialogal").html("I/O Error: File is corrupted or don't exist!");
    $("#dialogal").dialog("open");   
   }
   
 }
function playclick() {
        var audio = document.getElementById("audio");
        audio.play();
      }