Session.set("zipcode","");

 const name = $(".js-name").val();
 const gender = $(".js-gender").val();
 const email = $(".js-email").val();
 const birth = $(".js-birth").val();
 const zipcode = $(".js-zipcode").val();
 const place = $(".js-place").val();
 const lifestyle = $(".js-lifestyle").val();
 const ocd = $(".js-ocd").val();
 const music =$(".js-music").val();
 const subFree =$(".js-subFree").val();
 const sleepHab =$(".js-sleepHab").val();
 const sleepTime =$(".js-sleepTime").val();
 const personality =$(".js-personality").val();
 const pet =$(".js-pet").val();
 const petYes =$(".js-petYes").val();
 const animal =$(".js-animal").val();
 const color =$(".js-color").val();
 const hobby =$(".js-hobby").val();
 const hobbyOther =$(".js-hobbyOther").val();
 const movie =$(".js-movie	").val();
 const cook =$(".js-cook").val();
 const sex =$(".js-sex").val();


 Template.listings.helpers({
  mydata: function(){
    const zipcode = Session.get("zipcode");
    if (zipcode=="") {
	return UserInfo.find({},{limit:5});
    }
    else
        return UserInfo.find({zipcode:zipcode});
   },

  });


Template.listings.events({
        "click .js-submit": function(event) {
	    console.log("clicked it");
	    Session.set("zipcode",$(".js-zipcode").val());
	    console.log(Session.get("zipcode"));
	},

})



