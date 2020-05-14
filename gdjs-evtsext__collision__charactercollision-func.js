gdjs.evtsExt__Collision__CharacterCollision = {};
gdjs.evtsExt__Collision__CharacterCollision.GDMainCharacterObjects1= [];
gdjs.evtsExt__Collision__CharacterCollision.GDMainCharacterObjects2= [];
gdjs.evtsExt__Collision__CharacterCollision.GDCollisionObjObjects1= [];
gdjs.evtsExt__Collision__CharacterCollision.GDCollisionObjObjects2= [];

gdjs.evtsExt__Collision__CharacterCollision.conditionTrue_0 = {val:false};
gdjs.evtsExt__Collision__CharacterCollision.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Collision__CharacterCollision.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Collision__CharacterCollision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95CharacterCollision_46GDMainCharacterObjects1Objects = Hashtable.newFrom({"MainCharacter": gdjs.evtsExt__Collision__CharacterCollision.GDMainCharacterObjects1});gdjs.evtsExt__Collision__CharacterCollision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95CharacterCollision_46GDCollisionObjObjects1Objects = Hashtable.newFrom({"CollisionObj": gdjs.evtsExt__Collision__CharacterCollision.GDCollisionObjObjects1});gdjs.evtsExt__Collision__CharacterCollision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95CharacterCollision_46GDCollisionObjObjects1Objects = Hashtable.newFrom({"CollisionObj": gdjs.evtsExt__Collision__CharacterCollision.GDCollisionObjObjects1});gdjs.evtsExt__Collision__CharacterCollision.eventsList0x5b75c8 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Collision__CharacterCollision.GDCollisionObjObjects1.createFrom(eventsFunctionContext.getObjects("CollisionObj"));
gdjs.evtsExt__Collision__CharacterCollision.GDMainCharacterObjects1.createFrom(eventsFunctionContext.getObjects("MainCharacter"));

gdjs.evtsExt__Collision__CharacterCollision.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Collision__CharacterCollision.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__Collision__CharacterCollision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95CharacterCollision_46GDMainCharacterObjects1Objects, gdjs.evtsExt__Collision__CharacterCollision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95CharacterCollision_46GDCollisionObjObjects1Objects, false, runtimeScene, false);
}if (gdjs.evtsExt__Collision__CharacterCollision.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Collision__CharacterCollision.GDCollisionObjObjects1 */
/* Reuse gdjs.evtsExt__Collision__CharacterCollision.GDMainCharacterObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Collision__CharacterCollision.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Collision__CharacterCollision.GDMainCharacterObjects1[i].activateBehavior("TopDownMovement", false);
}
}{for(var i = 0, len = gdjs.evtsExt__Collision__CharacterCollision.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Collision__CharacterCollision.GDMainCharacterObjects1[i].returnVariable(gdjs.evtsExt__Collision__CharacterCollision.GDMainCharacterObjects1[i].getVariables().get("Collision")).add(1);
}
}{for(var i = 0, len = gdjs.evtsExt__Collision__CharacterCollision.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Collision__CharacterCollision.GDMainCharacterObjects1[i].separateFromObjectsList(gdjs.evtsExt__Collision__CharacterCollision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95CharacterCollision_46GDCollisionObjObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.evtsExt__Collision__CharacterCollision.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Collision__CharacterCollision.GDMainCharacterObjects1[i].activateBehavior("TopDownMovement", true);
}
}}

}


}; //End of gdjs.evtsExt__Collision__CharacterCollision.eventsList0x5b75c8


gdjs.evtsExt__Collision__CharacterCollision.func = function(runtimeScene, MainCharacter, TopDownMovement, CollisionObj, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"MainCharacter": MainCharacter
, "CollisionObj": CollisionObj
},
  _behaviorNamesMap: {
"TopDownMovement": TopDownMovement
},
  getObjects: function(objectName) {
        var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  }
};

gdjs.evtsExt__Collision__CharacterCollision.GDMainCharacterObjects1.length = 0;
gdjs.evtsExt__Collision__CharacterCollision.GDMainCharacterObjects2.length = 0;
gdjs.evtsExt__Collision__CharacterCollision.GDCollisionObjObjects1.length = 0;
gdjs.evtsExt__Collision__CharacterCollision.GDCollisionObjObjects2.length = 0;

gdjs.evtsExt__Collision__CharacterCollision.eventsList0x5b75c8(runtimeScene, eventsFunctionContext);
return;
}

