gdjs.evtsExt__Collision__Collision = {};
gdjs.evtsExt__Collision__Collision.GDEnemyObjects1= [];
gdjs.evtsExt__Collision__Collision.GDEnemyObjects2= [];
gdjs.evtsExt__Collision__Collision.GDEnemyObjects3= [];
gdjs.evtsExt__Collision__Collision.GDCombatObjects1= [];
gdjs.evtsExt__Collision__Collision.GDCombatObjects2= [];
gdjs.evtsExt__Collision__Collision.GDCombatObjects3= [];
gdjs.evtsExt__Collision__Collision.GDGoldObjects1= [];
gdjs.evtsExt__Collision__Collision.GDGoldObjects2= [];
gdjs.evtsExt__Collision__Collision.GDGoldObjects3= [];
gdjs.evtsExt__Collision__Collision.GDAllyObjects1= [];
gdjs.evtsExt__Collision__Collision.GDAllyObjects2= [];
gdjs.evtsExt__Collision__Collision.GDAllyObjects3= [];

gdjs.evtsExt__Collision__Collision.conditionTrue_0 = {val:false};
gdjs.evtsExt__Collision__Collision.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Collision__Collision.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Collision__Collision.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__Collision__Collision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95Collision_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.evtsExt__Collision__Collision.GDEnemyObjects1});gdjs.evtsExt__Collision__Collision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95Collision_46GDAllyObjects1Objects = Hashtable.newFrom({"Ally": gdjs.evtsExt__Collision__Collision.GDAllyObjects1});gdjs.evtsExt__Collision__Collision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95Collision_46GDAllyObjects1Objects = Hashtable.newFrom({"Ally": gdjs.evtsExt__Collision__Collision.GDAllyObjects1});gdjs.evtsExt__Collision__Collision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95Collision_46GDCombatObjects2Objects = Hashtable.newFrom({"Combat": gdjs.evtsExt__Collision__Collision.GDCombatObjects2});gdjs.evtsExt__Collision__Collision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95Collision_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.evtsExt__Collision__Collision.GDEnemyObjects2});gdjs.evtsExt__Collision__Collision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95Collision_46GDCombatObjects2Objects = Hashtable.newFrom({"Combat": gdjs.evtsExt__Collision__Collision.GDCombatObjects2});gdjs.evtsExt__Collision__Collision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95Collision_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.evtsExt__Collision__Collision.GDEnemyObjects1});gdjs.evtsExt__Collision__Collision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95Collision_46GDCombatObjects1Objects = Hashtable.newFrom({"Combat": gdjs.evtsExt__Collision__Collision.GDCombatObjects1});gdjs.evtsExt__Collision__Collision.eventsList0x77edcc = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Collision__Collision.GDCombatObjects2.createFrom(eventsFunctionContext.getObjects("Combat"));
gdjs.evtsExt__Collision__Collision.GDEnemyObjects2.createFrom(gdjs.evtsExt__Collision__Collision.GDEnemyObjects1);


gdjs.evtsExt__Collision__Collision.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Collision__Collision.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.evtsExt__Collision__Collision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95Collision_46GDCombatObjects2Objects) < gdjs.evtTools.object.pickedObjectsCount(gdjs.evtsExt__Collision__Collision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95Collision_46GDEnemyObjects2Objects);
}if (gdjs.evtsExt__Collision__Collision.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Collision__Collision.GDEnemyObjects2 */
/* Reuse gdjs.evtsExt__Collision__Collision.GDCombatObjects2 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Collision__Collision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95Collision_46GDCombatObjects2Objects, (( gdjs.evtsExt__Collision__Collision.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Collision__Collision.GDEnemyObjects2[0].getPointX("")) + 25, (( gdjs.evtsExt__Collision__Collision.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Collision__Collision.GDEnemyObjects2[0].getPointY("")) + 100, "");
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__Collision__Collision.GDCombatObjects2.length !== 0 ? gdjs.evtsExt__Collision__Collision.GDCombatObjects2[0] : null), (gdjs.evtsExt__Collision__Collision.GDEnemyObjects2.length !== 0 ? gdjs.evtsExt__Collision__Collision.GDEnemyObjects2[0] : null));
}{for(var i = 0, len = gdjs.evtsExt__Collision__Collision.GDCombatObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Collision__Collision.GDCombatObjects2[i].setScale(gdjs.evtsExt__Collision__Collision.GDCombatObjects2[i].getScale() * (0.05));
}
}{for(var i = 0, len = gdjs.evtsExt__Collision__Collision.GDCombatObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Collision__Collision.GDCombatObjects2[i].resetTimer("Combat");
}
}}

}


{

gdjs.evtsExt__Collision__Collision.GDCombatObjects2.createFrom(eventsFunctionContext.getObjects("Combat"));

gdjs.evtsExt__Collision__Collision.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Collision__Collision.GDCombatObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Collision__Collision.GDCombatObjects2[i].timerElapsedTime("Combat", 1) ) {
        gdjs.evtsExt__Collision__Collision.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Collision__Collision.GDCombatObjects2[k] = gdjs.evtsExt__Collision__Collision.GDCombatObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Collision__Collision.GDCombatObjects2.length = k;}if (gdjs.evtsExt__Collision__Collision.condition0IsTrue_0.val) {
gdjs.evtsExt__Collision__Collision.GDAllyObjects2.createFrom(gdjs.evtsExt__Collision__Collision.GDAllyObjects1);

/* Reuse gdjs.evtsExt__Collision__Collision.GDCombatObjects2 */
gdjs.evtsExt__Collision__Collision.GDEnemyObjects2.createFrom(gdjs.evtsExt__Collision__Collision.GDEnemyObjects1);

{for(var i = 0, len = gdjs.evtsExt__Collision__Collision.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Collision__Collision.GDEnemyObjects2[i].returnVariable(gdjs.evtsExt__Collision__Collision.GDEnemyObjects2[i].getVariables().get("Hp")).sub((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Collision__Collision.GDAllyObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Collision__Collision.GDAllyObjects2[0].getVariables()).get("Atk"))));
}
}{for(var i = 0, len = gdjs.evtsExt__Collision__Collision.GDAllyObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Collision__Collision.GDAllyObjects2[i].returnVariable(gdjs.evtsExt__Collision__Collision.GDAllyObjects2[i].getVariables().get("Hp")).sub((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Collision__Collision.GDEnemyObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Collision__Collision.GDEnemyObjects2[0].getVariables()).get("Atk"))));
}
}{for(var i = 0, len = gdjs.evtsExt__Collision__Collision.GDCombatObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Collision__Collision.GDCombatObjects2[i].resetTimer("Combat");
}
}}

}


{

gdjs.evtsExt__Collision__Collision.GDEnemyObjects2.createFrom(gdjs.evtsExt__Collision__Collision.GDEnemyObjects1);


gdjs.evtsExt__Collision__Collision.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Collision__Collision.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Collision__Collision.GDEnemyObjects2[i].getVariableNumber(gdjs.evtsExt__Collision__Collision.GDEnemyObjects2[i].getVariables().get("Hp")) <= 0 ) {
        gdjs.evtsExt__Collision__Collision.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Collision__Collision.GDEnemyObjects2[k] = gdjs.evtsExt__Collision__Collision.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Collision__Collision.GDEnemyObjects2.length = k;}if (gdjs.evtsExt__Collision__Collision.condition0IsTrue_0.val) {
gdjs.evtsExt__Collision__Collision.GDCombatObjects2.createFrom(eventsFunctionContext.getObjects("Combat"));
{for(var i = 0, len = gdjs.evtsExt__Collision__Collision.GDCombatObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Collision__Collision.GDCombatObjects2[i].hide();
}
}}

}


{

/* Reuse gdjs.evtsExt__Collision__Collision.GDEnemyObjects1 */

gdjs.evtsExt__Collision__Collision.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Collision__Collision.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.evtsExt__Collision__Collision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95Collision_46GDEnemyObjects1Objects) == 0;
}if (gdjs.evtsExt__Collision__Collision.condition0IsTrue_0.val) {
gdjs.evtsExt__Collision__Collision.GDCombatObjects1.createFrom(eventsFunctionContext.getObjects("Combat"));
{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Collision__Collision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95Collision_46GDCombatObjects1Objects);
}}

}


}; //End of gdjs.evtsExt__Collision__Collision.eventsList0x77edcc
gdjs.evtsExt__Collision__Collision.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Collision__Collision.GDAllyObjects1.createFrom(eventsFunctionContext.getObjects("Ally"));
gdjs.evtsExt__Collision__Collision.GDEnemyObjects1.createFrom(eventsFunctionContext.getObjects("Enemy"));

gdjs.evtsExt__Collision__Collision.condition0IsTrue_0.val = false;
gdjs.evtsExt__Collision__Collision.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__Collision__Collision.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__Collision__Collision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95Collision_46GDEnemyObjects1Objects, gdjs.evtsExt__Collision__Collision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95Collision_46GDAllyObjects1Objects, false, runtimeScene, true);
}if ( gdjs.evtsExt__Collision__Collision.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__Collision__Collision.condition1IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}}
if (gdjs.evtsExt__Collision__Collision.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Collision__Collision.GDAllyObjects1 */
/* Reuse gdjs.evtsExt__Collision__Collision.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Collision__Collision.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Collision__Collision.GDEnemyObjects1[i].separateFromObjectsList(gdjs.evtsExt__Collision__Collision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95Collision_46GDAllyObjects1Objects, false);
}
}
{ //Subevents
gdjs.evtsExt__Collision__Collision.eventsList0x77edcc(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__Collision__Collision.eventsList0x5b7328


gdjs.evtsExt__Collision__Collision.func = function(runtimeScene, Enemy, Combat, Gold, Ally, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Enemy": Enemy
, "Combat": Combat
, "Gold": Gold
, "Ally": Ally
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

gdjs.evtsExt__Collision__Collision.GDEnemyObjects1.length = 0;
gdjs.evtsExt__Collision__Collision.GDEnemyObjects2.length = 0;
gdjs.evtsExt__Collision__Collision.GDEnemyObjects3.length = 0;
gdjs.evtsExt__Collision__Collision.GDCombatObjects1.length = 0;
gdjs.evtsExt__Collision__Collision.GDCombatObjects2.length = 0;
gdjs.evtsExt__Collision__Collision.GDCombatObjects3.length = 0;
gdjs.evtsExt__Collision__Collision.GDGoldObjects1.length = 0;
gdjs.evtsExt__Collision__Collision.GDGoldObjects2.length = 0;
gdjs.evtsExt__Collision__Collision.GDGoldObjects3.length = 0;
gdjs.evtsExt__Collision__Collision.GDAllyObjects1.length = 0;
gdjs.evtsExt__Collision__Collision.GDAllyObjects2.length = 0;
gdjs.evtsExt__Collision__Collision.GDAllyObjects3.length = 0;

gdjs.evtsExt__Collision__Collision.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return;
}

