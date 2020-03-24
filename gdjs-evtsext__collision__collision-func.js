gdjs.evtsExt__Collision__Collision = {};
gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects1= [];
gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects2= [];
gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects3= [];
gdjs.evtsExt__Collision__Collision.GDGrard_95r1Objects1= [];
gdjs.evtsExt__Collision__Collision.GDGrard_95r1Objects2= [];
gdjs.evtsExt__Collision__Collision.GDGrard_95r1Objects3= [];
gdjs.evtsExt__Collision__Collision.GDNewObjectObjects1= [];
gdjs.evtsExt__Collision__Collision.GDNewObjectObjects2= [];
gdjs.evtsExt__Collision__Collision.GDNewObjectObjects3= [];
gdjs.evtsExt__Collision__Collision.GDTextObjects1= [];
gdjs.evtsExt__Collision__Collision.GDTextObjects2= [];
gdjs.evtsExt__Collision__Collision.GDTextObjects3= [];

gdjs.evtsExt__Collision__Collision.conditionTrue_0 = {val:false};
gdjs.evtsExt__Collision__Collision.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Collision__Collision.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Collision__Collision.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__Collision__Collision.conditionTrue_1 = {val:false};
gdjs.evtsExt__Collision__Collision.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Collision__Collision.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__Collision__Collision.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__Collision__Collision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95Collision_46GDEnemy_9595T1Objects1Objects = Hashtable.newFrom({"Enemy_T1": gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects1});gdjs.evtsExt__Collision__Collision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95Collision_46GDGrard_9595r1Objects1Objects = Hashtable.newFrom({"Grard_r1": gdjs.evtsExt__Collision__Collision.GDGrard_95r1Objects1});gdjs.evtsExt__Collision__Collision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95Collision_46GDGrard_9595r1Objects1Objects = Hashtable.newFrom({"Grard_r1": gdjs.evtsExt__Collision__Collision.GDGrard_95r1Objects1});gdjs.evtsExt__Collision__Collision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95Collision_46GDTextObjects2Objects = Hashtable.newFrom({"Text": gdjs.evtsExt__Collision__Collision.GDTextObjects2});gdjs.evtsExt__Collision__Collision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95Collision_46GDNewObjectObjects2Objects = Hashtable.newFrom({"NewObject": gdjs.evtsExt__Collision__Collision.GDNewObjectObjects2});gdjs.evtsExt__Collision__Collision.eventsList0x68eab4 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Collision__Collision.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Collision__Collision.conditionTrue_1 = gdjs.evtsExt__Collision__Collision.condition0IsTrue_0;
gdjs.evtsExt__Collision__Collision.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6993724);
}
}if (gdjs.evtsExt__Collision__Collision.condition0IsTrue_0.val) {
gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects2.createFrom(gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects1);

gdjs.evtsExt__Collision__Collision.GDNewObjectObjects2.length = 0;

gdjs.evtsExt__Collision__Collision.GDTextObjects2.createFrom(gdjs.evtsExt__Collision__Collision.GDTextObjects1);

{for(var i = 0, len = gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects2.length ;i < len;++i) {
    gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects2[i].resetTimer("Combat");
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Collision__Collision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95Collision_46GDTextObjects2Objects, (( gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects2.length === 0 ) ? 0 :gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects2[0].getPointX("")), (( gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects2.length === 0 ) ? 0 :gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects2[0].getPointY("")) - 20, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Collision__Collision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95Collision_46GDNewObjectObjects2Objects, (( gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects2.length === 0 ) ? 0 :gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects2[0].getPointX("")) + 25, (( gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects2.length === 0 ) ? 0 :gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects2[0].getPointY("")) + 100, "");
}{for(var i = 0, len = gdjs.evtsExt__Collision__Collision.GDNewObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Collision__Collision.GDNewObjectObjects2[i].setScale(gdjs.evtsExt__Collision__Collision.GDNewObjectObjects2[i].getScale() * (0.05));
}
}}

}


{

gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects2.createFrom(gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects1);


gdjs.evtsExt__Collision__Collision.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects2[i].getVariableNumber(gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects2[i].getVariables().get("Hp")) <= 0 ) {
        gdjs.evtsExt__Collision__Collision.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects2[k] = gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects2[i];
        ++k;
    }
}
gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects2.length = k;}if (gdjs.evtsExt__Collision__Collision.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects2 */
gdjs.evtsExt__Collision__Collision.GDNewObjectObjects2.createFrom(eventsFunctionContext.getObjects("NewObject"));
gdjs.evtsExt__Collision__Collision.GDTextObjects2.createFrom(gdjs.evtsExt__Collision__Collision.GDTextObjects1);

{for(var i = 0, len = gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects2.length ;i < len;++i) {
    gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects2[i].removeTimer("Combat");
}
}{for(var i = 0, len = gdjs.evtsExt__Collision__Collision.GDNewObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Collision__Collision.GDNewObjectObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.evtsExt__Collision__Collision.GDTextObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Collision__Collision.GDTextObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects2.length ;i < len;++i) {
    gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

/* Reuse gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects1 */

gdjs.evtsExt__Collision__Collision.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects1[i].timerElapsedTime("Combat", 1) ) {
        gdjs.evtsExt__Collision__Collision.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects1[k] = gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects1[i];
        ++k;
    }
}
gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects1.length = k;}if (gdjs.evtsExt__Collision__Collision.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects1 */
/* Reuse gdjs.evtsExt__Collision__Collision.GDGrard_95r1Objects1 */
{for(var i = 0, len = gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects1.length ;i < len;++i) {
    gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects1[i].returnVariable(gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects1[i].getVariables().get("Hp")).sub((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Collision__Collision.GDGrard_95r1Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Collision__Collision.GDGrard_95r1Objects1[0].getVariables()).get("Atk"))));
}
}{for(var i = 0, len = gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects1.length ;i < len;++i) {
    gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects1[i].resetTimer("Combat");
}
}}

}


}; //End of gdjs.evtsExt__Collision__Collision.eventsList0x68eab4
gdjs.evtsExt__Collision__Collision.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects1.createFrom(eventsFunctionContext.getObjects("Enemy_T1"));
gdjs.evtsExt__Collision__Collision.GDGrard_95r1Objects1.createFrom(eventsFunctionContext.getObjects("Grard_r1"));

gdjs.evtsExt__Collision__Collision.condition0IsTrue_0.val = false;
gdjs.evtsExt__Collision__Collision.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__Collision__Collision.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__Collision__Collision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95Collision_46GDEnemy_9595T1Objects1Objects, gdjs.evtsExt__Collision__Collision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95Collision_46GDGrard_9595r1Objects1Objects, false, runtimeScene, true);
}if ( gdjs.evtsExt__Collision__Collision.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__Collision__Collision.condition1IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}}
if (gdjs.evtsExt__Collision__Collision.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects1 */
/* Reuse gdjs.evtsExt__Collision__Collision.GDGrard_95r1Objects1 */
gdjs.evtsExt__Collision__Collision.GDTextObjects1.createFrom(eventsFunctionContext.getObjects("Text"));
{for(var i = 0, len = gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects1.length ;i < len;++i) {
    gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects1[i].separateFromObjectsList(gdjs.evtsExt__Collision__Collision.mapOfGDgdjs_46evtsExt_95_95Collision_95_95Collision_46GDGrard_9595r1Objects1Objects, false);
}
}{for(var i = 0, len = gdjs.evtsExt__Collision__Collision.GDTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Collision__Collision.GDTextObjects1[i].setString(gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects1[0].getVariables()).get("Hp")))));
}
}
{ //Subevents
gdjs.evtsExt__Collision__Collision.eventsList0x68eab4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__Collision__Collision.eventsList0x5b7328


gdjs.evtsExt__Collision__Collision.func = function(runtimeScene, Enemy_T1, Grard_r1, NewObject, Text, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Enemy_T1": Enemy_T1
, "Grard_r1": Grard_r1
, "NewObject": NewObject
, "Text": Text
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

gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects1.length = 0;
gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects2.length = 0;
gdjs.evtsExt__Collision__Collision.GDEnemy_95T1Objects3.length = 0;
gdjs.evtsExt__Collision__Collision.GDGrard_95r1Objects1.length = 0;
gdjs.evtsExt__Collision__Collision.GDGrard_95r1Objects2.length = 0;
gdjs.evtsExt__Collision__Collision.GDGrard_95r1Objects3.length = 0;
gdjs.evtsExt__Collision__Collision.GDNewObjectObjects1.length = 0;
gdjs.evtsExt__Collision__Collision.GDNewObjectObjects2.length = 0;
gdjs.evtsExt__Collision__Collision.GDNewObjectObjects3.length = 0;
gdjs.evtsExt__Collision__Collision.GDTextObjects1.length = 0;
gdjs.evtsExt__Collision__Collision.GDTextObjects2.length = 0;
gdjs.evtsExt__Collision__Collision.GDTextObjects3.length = 0;

gdjs.evtsExt__Collision__Collision.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return;
}

