     
     // jquery document
$(document).ready(() => {

  // label button click event check
  $('#label-button').click(() => {
    // automatically click the input file button
    $('#file-btn').click();
  });

  // file input button
  $('#file-btn').change((event) => {
    // get the file object data
    var file = event.target.files[0];
    // append the filename to the lable input
    $('#label-button').text(file.name);
  });
  //Send Button campaign
  // $('#sendbtn').click(() =>{
    

    
  //   // console.log(campaignfile);
  //   alert('Message sent');
  
  // });

  // //Send Button alert
  // $('#sendbtnalert').click(() =>{
    

    
  //   // console.log(campaignfile);
  //   alert('Message sent');
  
  // });
  // download buttons
  $('#download-btn-alert').click(() => {
    fetch('http://localhost:5000/download')
      .then(resp => resp.blob())
      .then(blob => {
        console.log(blob);
        
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        
        a.style.display = 'none';
        a.href = url;
        // the filename you want
        a.download = blob.__proto__.text.name;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        alert('Download Complete!'); // or you know, something with better UX...
      })
      .catch(() => alert('Download Failed!'));

    });

  $('#download-btn-camp').click(() => {
    fetch('http://localhost:5000/downloadcampaign')
      .then(resp => resp.blob())
      .then(blob => {
        console.log(blob);
            
        const url = window.URL.createObjectURL(blob);
        const b = document.createElement('a');
            
        b.style.display = 'none';
        b.href = url;
            // the filename you want
        b.download = blob.__proto__.text.name;
        document.body.appendChild(b);
        b.click();
        window.URL.revokeObjectURL(url);
        alert('Download Complete!'); // or you know, something with better UX...
      })
      .catch(() => alert('Download Failed!'));

    });
    //ajax request
  

  
    
  // ajax request
  // $.ajax({
  //   url : "http://172.25.188.56:9001/smshttpquery/qs?REQUESTTYPE=SMSSubmitReq&USERNAME=ECP&PASSWORD=ecp123&MOBILENO={recipientAddress}&MESSAGE={message}&ORIGIN_ADDR={senderAddress}&TYPE=0",
  //   type: "POST",
  //   data : info,
  //   success: function(data, textStatus, jqXHR)
  //   {
  //       //data - response from server
  //   },
  //   error: function (jqXHR, textStatus, errorThrown)
  //   {
 
  //   }
  // });
});