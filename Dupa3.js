/// api_version=2
var script = registerScript({
    name: "Dupa3",
    version: "1",
    authors: ["Rurkowanie"]
});

var MovementUtils = Java.type("net.ccbluex.liquidbounce.utils.MovementUtils").INSTANCE;
var KillAura = Java.type("net.ccbluex.liquidbounce.features.module.modules.combat.KillAura");

script.registerModule({
  name: "PiwoSpeed",
  description: "Cocks craft na speedzie", 
  category: "Movement"
}, function(module) {
  var counter = 0;
  
  module.on("update", function(){
    if (mc.thePlayer.isOnLadder() || mc.thePlayer.isEating() || mc.thePlayer.isInLava())
      return;
  
    if (mc.thePlayer.onGround) {
      counter += 1;
      mc.thePlayer.jump();
    } else if (this.counter < 7) {
      if (this.counter == 4) {
        MovementUtils.setMotion(moduleManager.getModule(KillAura.class).target != null ? 0.3101 : 0.3301);
      }
      this.counter += 1;
    } else {
      this.counter = 0;
    }
  });
});