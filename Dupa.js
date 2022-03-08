/// api_version=2
var script = registerScript({
    name: "Dupa",
    version: "1",
    authors: ["Rurkowanie"]
});

script.registerModule({
  name: "Shop",
  description: "Otwiera menu villagerowe ze sklepem", 
  category: "Misc"
}, function(module) {
  module.triggerType = Java.type("net.ccbluex.liquidbounce.features.module.EnumTriggerType").PRESS;
  
  module.on("enable", function(){
    for(var id in mc.theWorld.getLoadedEntityList()) {
      var entity = mc.theWorld.getLoadedEntityList()[id];
      if(entity.class.getName().contains("Villager")) {
        mc.playerController.interactWithEntitySendPacket(mc.thePlayer, entity)
        return;
      }
    }
  });
});

script.registerModule({
  name: "Upgradess",
  description: "Otwiera menu villagerowe z ulepszeniami", 
  category: "Misc"
}, function(module) {
  module.triggerType = Java.type("net.ccbluex.liquidbounce.features.module.EnumTriggerType").PRESS;
  
  module.on("enable", function(){
    var foundNumber = 0;
    for(var id in mc.theWorld.getLoadedEntityList()) {
      var entity = mc.theWorld.getLoadedEntityList()[id];
      if(entity.class.getName().contains("Villager") && foundNumber++ >= 1) {
        mc.playerController.interactWithEntitySendPacket(mc.thePlayer, entity)
        return;
      }
    }    
  });
});
