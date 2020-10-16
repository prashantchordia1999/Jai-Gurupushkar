 function postToGoogle() {
     var name = $("[name='name']").val();
     var phone = $("[name='phone']").val();
     var age = $("[name='age']").val();
     var city = $("[name='city']").val();
     var gender = $("[name='entry.607701797']:checked").val();
     var regtype = $("[name='entry.1472477148']:checked").val();
     var tap = $("[name='entry.1736559275']:checked").val();
     var noofsamayik = $("[name='noofsamayik']").val();
     var noofek = $("[name='noofek']").val();
     window.alert( name +" entered details are : Mobile No.-"+ phone + ", Age- " + age + ", City- " + city + ", Gender- " + gender + ", Individual/Family- " + regtype + ", तप- " + tap + ", No. of Samayik- " + noofsamayik + ", No of Akasana/Aayambil- " + noofek);
     $.ajax({
         url: "https://docs.google.com/forms/d/e/1FAIpQLSexWHJ94SmebG9nu_ljGndq1Xlhq2t2hTZ0kz9SAP-dMTDOrw/formResponse",
         data: {
             "entry.1387305683": name,
             "entry.325539875": phone,
             "entry.925017582": age,
             "entry.1124150401": city,
             "entry.607701797": gender,
             "entry.1472477148": regtype,
             "entry.1736559275": tap,
             "entry.670516005": noofsamayik,
             "entry.922800373": noofek
         },
         type: "POST",
         dataType: "xml",
         statusCode: {
             0: function() { alert("THANK YOU! Your response is submitted (आपकी जानकारी जमा कर ली गयी है|)"); },
             200: function() { alert("THANK YOU! Your response is submitted (आपकी जानकारी जमा कर ली गयी है|)"); }
         }
     });
 }