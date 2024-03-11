function myFunction() {
    var date;
    if (document.getElementById("Curiosity").checked) {
        document.getElementById("date").value="2012-08-06";
    }
  
    if (document.getElementById("Opportunity").checked) {
        document.getElementById("date").value= "2004-01-26";
    }
    if (document.getElementById("Spirit").checked) {
        document.getElementById("date").value= "2004-01-05";
    }
  }
    
    
  async function GetPhotos() {
    "use strict";
  
    var form = $("#MarsForm");
    
    form.validate();
    
    if (form.valid()) {
            
      var rover;
      if (document.getElementById("Curiosity").checked) {
          rover = document.getElementById("Curiosity").value;
      }
  
      if (document.getElementById("Opportunity").checked) {
          rover = document.getElementById("Opportunity").value;
      }
      if (document.getElementById("Spirit").checked) {
          rover = document.getElementById("Spirit").value;
      }
   
      var date = document.getElementById("date").value;
      var apiKey = "jeOjEno8SCYQny38H1a8fE7UBhfmOuHPkVh4qF9Y";
    
          var myURL2 = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + rover + "/photos?earth_date=" + date + "&api_key=" + apiKey;
            
          let PictureObject = await fetch(myURL2);
          let Result = await PictureObject.text();
          let msg =JSON.parse(Result); 
          document.getElementById("numberofphotos").innerHTML = msg.photos.length + " pictures found"
             if (numberofphotos >25)
             {numberofphotos = 25}
                  
              for (let i = 0; i < 25; i++) {
              document.getElementById("image" + i).src = msg.photos[i].img_src;
              document.getElementById("image" + i).style.visibility = "visible";
              document.getElementById("image" + i).title = msg.photos[i].camera.full_name;
              }
    }
          let PictureObject = await fetch(myURL2);
          let Result = await PictureObject.text();
          let msg =JSON.parse(Result); 
          document.getElementById("numberofphotos").innerHTML = msg.photos.length + " pictures found"
             if (numberofphotos >25)
             {numberofphotos = 25}
                  
              for (let i = 0; i < 25; i++) {
              document.getElementById("href" + i).href = msg.photos[i].img_src;
              }           
  
  }