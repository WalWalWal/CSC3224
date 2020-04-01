gdjs.evtsExt__Create__CreateEnemy = {};
gdjs.evtsExt__Create__CreateEnemy.GDEnemyObjects1= [];
gdjs.evtsExt__Create__CreateEnemy.GDEnemyObjects2= [];
gdjs.evtsExt__Create__CreateEnemy.GDHp_95EnemyObjects1= [];
gdjs.evtsExt__Create__CreateEnemy.GDHp_95EnemyObjects2= [];

gdjs.evtsExt__Create__CreateEnemy.conditionTrue_0 = {val:false};
gdjs.evtsExt__Create__CreateEnemy.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Create__CreateEnemy.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Create__CreateEnemy.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__Create__CreateEnemy.conditionTrue_1 = {val:false};
gdjs.evtsExt__Create__CreateEnemy.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Create__CreateEnemy.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__Create__CreateEnemy.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__Create__CreateEnemy.mapOfGDgdjs_46evtsExt_95_95Create_95_95CreateEnemy_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.evtsExt__Create__CreateEnemy.GDEnemyObjects1});gdjs.evtsExt__Create__CreateEnemy.mapOfGDgdjs_46evtsExt_95_95Create_95_95CreateEnemy_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.evtsExt__Create__CreateEnemy.GDEnemyObjects1});gdjs.evtsExt__Create__CreateEnemy.mapOfGDgdjs_46evtsExt_95_95Create_95_95CreateEnemy_46GDHp_9595EnemyObjects1Objects = Hashtable.newFrom({"Hp_Enemy": gdjs.evtsExt__Create__CreateEnemy.GDHp_95EnemyObjects1});gdjs.evtsExt__Create__CreateEnemy.mapOfGDgdjs_46evtsExt_95_95Create_95_95CreateEnemy_46GDHp_9595EnemyObjects1Objects = Hashtable.newFrom({"Hp_Enemy": gdjs.evtsExt__Create__CreateEnemy.GDHp_95EnemyObjects1});gdjs.evtsExt__Create__CreateEnemy.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Create__CreateEnemy.GDEnemyObjects1.createFrom(eventsFunctionContext.getObjects("Enemy"));

gdjs.evtsExt__Create__CreateEnemy.condition0IsTrue_0.val = false;
gdjs.evtsExt__Create__CreateEnemy.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__Create__CreateEnemy.condition0IsTrue_0.val = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.evtsExt__Create__CreateEnemy.mapOfGDgdjs_46evtsExt_95_95Create_95_95CreateEnemy_46GDEnemyObjects1Objects);
}if ( gdjs.evtsExt__Create__CreateEnemy.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__Create__CreateEnemy.conditionTrue_1 = gdjs.evtsExt__Create__CreateEnemy.condition1IsTrue_0;
gdjs.evtsExt__Create__CreateEnemy.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7734660);
}
}}
if (gdjs.evtsExt__Create__CreateEnemy.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Create__CreateEnemy.GDEnemyObjects1 */
gdjs.evtsExt__Create__CreateEnemy.GDHp_95EnemyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Create__CreateEnemy.mapOfGDgdjs_46evtsExt_95_95Create_95_95CreateEnemy_46GDEnemyObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PositionX")) || 0 : 0), 100, "");
}{for(var i = 0, len = gdjs.evtsExt__Create__CreateEnemy.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Create__CreateEnemy.GDEnemyObjects1[i].setScale(gdjs.evtsExt__Create__CreateEnemy.GDEnemyObjects1[i].getScale() * (0.1));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Create__CreateEnemy.mapOfGDgdjs_46evtsExt_95_95Create_95_95CreateEnemy_46GDHp_9595EnemyObjects1Objects, 0, 0, "");
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__Create__CreateEnemy.GDEnemyObjects1.length !== 0 ? gdjs.evtsExt__Create__CreateEnemy.GDEnemyObjects1[0] : null), (gdjs.evtsExt__Create__CreateEnemy.GDHp_95EnemyObjects1.length !== 0 ? gdjs.evtsExt__Create__CreateEnemy.GDHp_95EnemyObjects1[0] : null));
}{for(var i = 0, len = gdjs.evtsExt__Create__CreateEnemy.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Create__CreateEnemy.GDEnemyObjects1[i].addForce(0, 30, 1);
}
}}

}


{


{
gdjs.evtsExt__Create__CreateEnemy.GDEnemyObjects1.createFrom(eventsFunctionContext.getObjects("Enemy"));
gdjs.evtsExt__Create__CreateEnemy.GDHp_95EnemyObjects1.createFrom(eventsFunctionContext.getObjects("Hp_Enemy"));
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__Create__CreateEnemy.mapOfGDgdjs_46evtsExt_95_95Create_95_95CreateEnemy_46GDHp_9595EnemyObjects1Objects, (gdjs.evtsExt__Create__CreateEnemy.GDEnemyObjects1.length !== 0 ? gdjs.evtsExt__Create__CreateEnemy.GDEnemyObjects1[0] : null));
}{for(var i = 0, len = gdjs.evtsExt__Create__CreateEnemy.GDHp_95EnemyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Create__CreateEnemy.GDHp_95EnemyObjects1[i].putAroundObject((gdjs.evtsExt__Create__CreateEnemy.GDEnemyObjects1.length !== 0 ? gdjs.evtsExt__Create__CreateEnemy.GDEnemyObjects1[0] : null), 75, 270);
}
}{for(var i = 0, len = gdjs.evtsExt__Create__CreateEnemy.GDHp_95EnemyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Create__CreateEnemy.GDHp_95EnemyObjects1[i].setString(gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Create__CreateEnemy.GDEnemyObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Create__CreateEnemy.GDEnemyObjects1[0].getVariables()).get("Hp")))));
}
}}

}


}; //End of gdjs.evtsExt__Create__CreateEnemy.eventsList0x5b7328


gdjs.evtsExt__Create__CreateEnemy.func = function(runtimeScene, Enemy, Hp_Enemy, PositionX, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Enemy": Enemy
, "Hp_Enemy": Hp_Enemy
},
  _behaviorNamesMap: {
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
if (argName === "PositionX") return PositionX;
    return "";
  }
};

gdjs.evtsExt__Create__CreateEnemy.GDEnemyObjects1.length = 0;
gdjs.evtsExt__Create__CreateEnemy.GDEnemyObjects2.length = 0;
gdjs.evtsExt__Create__CreateEnemy.GDHp_95EnemyObjects1.length = 0;
gdjs.evtsExt__Create__CreateEnemy.GDHp_95EnemyObjects2.length = 0;

gdjs.evtsExt__Create__CreateEnemy.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return;
}

