gdjs.evtsExt__Create__EnemyDeath = {};
gdjs.evtsExt__Create__EnemyDeath.GDEnemyObjects1= [];
gdjs.evtsExt__Create__EnemyDeath.GDEnemyObjects2= [];
gdjs.evtsExt__Create__EnemyDeath.GDGoldObjects1= [];
gdjs.evtsExt__Create__EnemyDeath.GDGoldObjects2= [];
gdjs.evtsExt__Create__EnemyDeath.GDHp_95EnemyObjects1= [];
gdjs.evtsExt__Create__EnemyDeath.GDHp_95EnemyObjects2= [];

gdjs.evtsExt__Create__EnemyDeath.conditionTrue_0 = {val:false};
gdjs.evtsExt__Create__EnemyDeath.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Create__EnemyDeath.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Create__EnemyDeath.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__Create__EnemyDeath.conditionTrue_1 = {val:false};
gdjs.evtsExt__Create__EnemyDeath.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Create__EnemyDeath.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__Create__EnemyDeath.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__Create__EnemyDeath.mapOfGDgdjs_46evtsExt_95_95Create_95_95EnemyDeath_46GDHp_9595EnemyObjects1Objects = Hashtable.newFrom({"Hp_Enemy": gdjs.evtsExt__Create__EnemyDeath.GDHp_95EnemyObjects1});gdjs.evtsExt__Create__EnemyDeath.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Create__EnemyDeath.GDEnemyObjects1.createFrom(eventsFunctionContext.getObjects("Enemy"));

gdjs.evtsExt__Create__EnemyDeath.condition0IsTrue_0.val = false;
gdjs.evtsExt__Create__EnemyDeath.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Create__EnemyDeath.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Create__EnemyDeath.GDEnemyObjects1[i].getVariableNumber(gdjs.evtsExt__Create__EnemyDeath.GDEnemyObjects1[i].getVariables().get("Hp")) <= 0 ) {
        gdjs.evtsExt__Create__EnemyDeath.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Create__EnemyDeath.GDEnemyObjects1[k] = gdjs.evtsExt__Create__EnemyDeath.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Create__EnemyDeath.GDEnemyObjects1.length = k;}if ( gdjs.evtsExt__Create__EnemyDeath.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__Create__EnemyDeath.conditionTrue_1 = gdjs.evtsExt__Create__EnemyDeath.condition1IsTrue_0;
gdjs.evtsExt__Create__EnemyDeath.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7685940);
}
}}
if (gdjs.evtsExt__Create__EnemyDeath.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Create__EnemyDeath.GDEnemyObjects1 */
gdjs.evtsExt__Create__EnemyDeath.GDGoldObjects1.createFrom(eventsFunctionContext.getObjects("Gold"));
gdjs.evtsExt__Create__EnemyDeath.GDHp_95EnemyObjects1.createFrom(eventsFunctionContext.getObjects("Hp_Enemy"));
{for(var i = 0, len = gdjs.evtsExt__Create__EnemyDeath.GDGoldObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Create__EnemyDeath.GDGoldObjects1[i].returnVariable(gdjs.evtsExt__Create__EnemyDeath.GDGoldObjects1[i].getVariables().get("gold")).add(200);
}
}{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__Create__EnemyDeath.mapOfGDgdjs_46evtsExt_95_95Create_95_95EnemyDeath_46GDHp_9595EnemyObjects1Objects, (gdjs.evtsExt__Create__EnemyDeath.GDEnemyObjects1.length !== 0 ? gdjs.evtsExt__Create__EnemyDeath.GDEnemyObjects1[0] : null));
}{for(var i = 0, len = gdjs.evtsExt__Create__EnemyDeath.GDHp_95EnemyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Create__EnemyDeath.GDHp_95EnemyObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.evtsExt__Create__EnemyDeath.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Create__EnemyDeath.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.evtsExt__Create__EnemyDeath.eventsList0x5b7328


gdjs.evtsExt__Create__EnemyDeath.func = function(runtimeScene, Enemy, Gold, Hp_Enemy, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Enemy": Enemy
, "Gold": Gold
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
    return "";
  }
};

gdjs.evtsExt__Create__EnemyDeath.GDEnemyObjects1.length = 0;
gdjs.evtsExt__Create__EnemyDeath.GDEnemyObjects2.length = 0;
gdjs.evtsExt__Create__EnemyDeath.GDGoldObjects1.length = 0;
gdjs.evtsExt__Create__EnemyDeath.GDGoldObjects2.length = 0;
gdjs.evtsExt__Create__EnemyDeath.GDHp_95EnemyObjects1.length = 0;
gdjs.evtsExt__Create__EnemyDeath.GDHp_95EnemyObjects2.length = 0;

gdjs.evtsExt__Create__EnemyDeath.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return;
}

