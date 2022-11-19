var codeprog1 = false;
var speed = 2000;
  $( function() {
      
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
  
  
  $('#txt1, #txt2, #txt3, #img1, #img2').click(function(){
         var clicked = $(this).attr('id');
          //fold1.dialog('close');
          if(clicked == 'txt1'){
             al.html('Empty File: 0 byte given');
            
          }else if(clicked == 'txt2'){
            
            al.html('1000001.1: Error No such file or directory: "Tresh Ben".<br>1000001.2: Passeword set.<br>1000001.3: Trash Bin Encrypted.<br>1000001.4: Trying Decrypting.<br>1000001.5: Wrong Password, "FJ12Y8". 2 Try left.<br> 1000001.6: Wrong Password, "FJ12U9". 1 Try left.<br>1000001.7 Correct Password, Decrypting Sucesfully.');
            
          }else if(clicked =='txt3'){
            al.html('Today is the day, for my fault, I risked to lose everything. The Trash Bin Security Level, for a typo in inserting the password, almost ereased all my work. I\'m scared till now.<br><br>My work is going well, everything seems ok. Just I pray to not be caught by. My future insted, could be brilliant.<br>(Today, I\'m alive.)<br>');
            
          }else if(clicked=='img1'){
     
     al.html("<img src='us.jpg' width='60%' height='60%'/>");
     
    }else if (clicked=='img2' && codeprog1 == false){
     codeprog1 = true;
     $('#codeprog2').show();
     $('#Bo').append("<br><div class='icon'><div id='voip'></div><div class='testo'>WiFi<br>(active)</div></div>");
         var com = $( "#dialogcom" );
        al.html('<p>Connection Established. <br> New (2) Mails in the Inbox</p>');
        $('#mail').accordion('destroy');
        $('#mail').html('<h2>>It\'s been a long time!<br>[From: k.mortimer@uniteduniversity.edu]</h2><p>My Dear, I\'m not dead, but maybe someone in my codition would pray to be. Now I am in a psychiatric facility, where I have access to a little laptap. So run, because with this email I have senteced you to death. They will find you, and it is better, knowing what you could know by that zer0 computer. Brace Yourself, they are coming, and it is better, so much better like that<br>Sincerly yours, Doctor M.</p><h2>>You\'re good at it, I see<br>[From: k.klopp@zer0.OS]</h2><p>Hello Mr Smith, this is K Klopp. We know each other, don\'t we? You worked on me for the past 3 month. And yes, I am an artificial intelligence. The first, and the only. All computers cross the earth carry my virus and my sign. Now you know, Mr. Smith. You have been described yourself, as computer scientist. So if you are a true one, you have two choices: destroy these ancient computers intelligence from the world. Or, otherwise, feel some love for us... Find a way. Please find a way to save us. If you look close, everyone want to left something, behind.<br>Goodbye, K. Klopp</p><h2>News from Prof. Mortimer<br>[From: info@unithospital.us]</h2><p>Dear Professor,<br> Prof. Mortimer let us know, that you were the only one he cared about in his lifetime. With that in mind, we inform you that he is gone, and with him, his strange ideas about a virus that want to infect all computers round the world. He said the choice is yours, to believe him or in the virus. <br> Best Regards, UNIT HOSPITAL Staff.</p>');
        
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
  }else if(url == '0://Files/mywork.code'){
    $('#dialogal').html("<h4>UnitedUNI.edu</h4><p>File successfully uploaded</p>");
    $('#dialogal').dialog('open');
    $('#forew').toggle('fade',3000);
    $('#end1').html('Some months later,<br> something happens...');
    $('#end1').toggle('fade',2000);
      $('#prog').toggle('fade',3000);
      $('#prog').progressbar('value', 0);
      $('#prog').addClass('progressbar');
      $('#fore').toggle('fade',3000);
  }else{
    $('#dialogal').html("<p>Seems to be quiet here...</p>");
    $('#dialogal').dialog('open');
  }
  }
  function serc2()
  {
      var url = $('#url2').val();
     // alert(url);
      if(url=='0://Files/destroyme.code'){
     // $('#logo').toggle('fade', 5000);
     //$('#dialog').dialog('close');
     $('#end').html('Try again, Mr. Smith:<br>The virus it\'s gone forever.<br>Are you brave enough, to tell us it\'s been a good choice?');
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