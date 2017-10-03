// XXX it is actually very dangerous to store times as Number. use id:14 gh:15
// Date type once it's implemented in minimongo
Rooms = new Mongo.Collection("rooms");
//Rooms.schema({name: String, created: Number});

Chat = new Mongo.Collection("chat");
/*
Chat.schema({room: String, message: String,
             username: String, created: Number});
*/

if (Meteor.isServer) {
  Meteor.publish('rooms', function () {
    return Rooms.find();
  });

  // XXX should limit to just a certain amount of recent chat .. id:31 gh:32
  Meteor.publish('room-detail', function (room) {
    return Chat.find({room: room});
  });
}
