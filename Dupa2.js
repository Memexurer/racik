/// api_version=2
var script = registerScript({
    name: "Dupa2",
    version: "1",
    authors: ["Rurkowanie"]
});

var MovementUtils = Java.type("net.ccbluex.liquidbounce.utils.MovementUtils").INSTANCE;

script.registerModule({
  name: "Speed",
  description: "Aha", 
  category: "Movement"
}, function(module) {
  var sexo = 0;
  
  module.on("update", function(event){
    if(!MovementUtils.isMoving()) {
      sexo = 0;
      return;
    }
      
    if (mc.thePlayer.isOnLadder() || mc.thePlayer.isEating() || mc.thePlayer.isInLava())
      return;
  
    if (mc.thePlayer.onGround) {
      mc.thePlayer.jump();
    } else if(mc.thePlayer.motionY > 0){
      mc.thePlayer.motionY = (sexo <= -0.2 ? sexo = 0 : sexo -= 0.01);
    }
  });
  
  module.on("disable", function(){
    sexo = 0;
  });
});
