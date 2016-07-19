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
    return listings.find({},{sort:{zipcode:1}});
}
  })

Template.listings.helpers({
	mydata:function(){
		console.log("getting mydata");
	   const val =  QuizResults.find({});
	   console.dir(val.fetch()); 
	   return val;
	}
	Session.set("zipcode",null);


Template.lookbasi1.helpers({

	BaSis: function() {
	    const zipcode = Session.get("zipcode");
	    if (zipcode==null || zipcode=="") 
		return UserInfo.find();
	    if (zipcode!=null && zipcode != "")
		return UserInfo.find({zip:zipcode});
       },

})


Template.lookroomies.events({
        "click .js-submit": function(event) {
	    console.log("clicked it");
	    Session.set("zipcode",$(".js-zipcode").val());
	    console.log(Session.get("zipcode"));
	},

	"click .js-delete": function(event){
		UserInfo.remove(this.roomie._id);
	},

})
})



