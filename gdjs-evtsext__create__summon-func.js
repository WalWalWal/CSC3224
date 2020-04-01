gdjs.evtsExt__Create__Summon = {};
gdjs.evtsExt__Create__Summon.GDGoldObjects1= [];
gdjs.evtsExt__Create__Summon.GDGoldObjects2= [];
gdjs.evtsExt__Create__Summon.GDGoldObjects3= [];
gdjs.evtsExt__Create__Summon.GDAllyObjects1= [];
gdjs.evtsExt__Create__Summon.GDAllyObjects2= [];
gdjs.evtsExt__Create__Summon.GDAllyObjects3= [];
gdjs.evtsExt__Create__Summon.GDZoneObjects1= [];
gdjs.evtsExt__Create__Summon.GDZoneObjects2= [];
gdjs.evtsExt__Create__Summon.GDZoneObjects3= [];

gdjs.evtsExt__Create__Summon.conditionTrue_0 = {val:false};
gdjs.evtsExt__Create__Summon.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Create__Summon.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Create__Summon.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__Create__Summon.condition3IsTrue_0 = {val:false};
gdjs.evtsExt__Create__Summon.conditionTrue_1 = {val:false};
gdjs.evtsExt__Create__Summon.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Create__Summon.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__Create__Summon.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__Create__Summon.condition3IsTrue_1 = {val:false};


gdjs.evtsExt__Create__Summon.mapOfGDgdjs_46evtsExt_95_95Create_95_95Summon_46GDAllyObjects1Objects = Hashtable.newFrom({"Ally": gdjs.evtsExt__Create__Summon.GDAllyObjects1});gdjs.evtsExt__Create__Summon.mapOfGDgdjs_46evtsExt_95_95Create_95_95Summon_46GDAllyObjects1Objects = Hashtable.newFrom({"Ally": gdjs.evtsExt__Create__Summon.GDAllyObjects1});gdjs.evtsExt__Create__Summon.mapOfGDgdjs_46evtsExt_95_95Create_95_95Summon_46GDAllyObjects2Objects = Hashtable.newFrom({"Ally": gdjs.evtsExt__Create__Summon.GDAllyObjects2});gdjs.evtsExt__Create__Summon.eventsList0x6d052c = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Create__Summon.GDAllyObjects2.createFrom(gdjs.evtsExt__Create__Summon.GDAllyObjects1);

gdjs.evtsExt__Create__Summon.GDGoldObjects2.createFrom(eventsFunctionContext.getObjects("Gold"));
gdjs.evtsExt__Create__Summon.GDZoneObjects2.createFrom(eventsFunctionContext.getObjects("Zone"));

gdjs.evtsExt__Create__Summon.condition0IsTrue_0.val = false;
gdjs.evtsExt__Create__Summon.condition1IsTrue_0.val = false;
gdjs.evtsExt__Create__Summon.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Create__Summon.GDZoneObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Create__Summon.GDZoneObjects2[i].isCollidingWithPoint((( gdjs.evtsExt__Create__Summon.GDAllyObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Create__Summon.GDAllyObjects2[0].getPointX("")) + 50, (( gdjs.evtsExt__Create__Summon.GDAllyObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Create__Summon.GDAllyObjects2[0].getPointY("")) + 50) ) {
        gdjs.evtsExt__Create__Summon.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Create__Summon.GDZoneObjects2[k] = gdjs.evtsExt__Create__Summon.GDZoneObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Create__Summon.GDZoneObjects2.length = k;}if ( gdjs.evtsExt__Create__Summon.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Create__Summon.GDGoldObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Create__Summon.GDGoldObjects2[i].getVariableNumber(gdjs.evtsExt__Create__Summon.GDGoldObjects2[i].getVariables().get("gold")) >= 500 ) {
        gdjs.evtsExt__Create__Summon.condition1IsTrue_0.val = true;
        gdjs.evtsExt__Create__Summon.GDGoldObjects2[k] = gdjs.evtsExt__Create__Summon.GDGoldObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Create__Summon.GDGoldObjects2.length = k;}if ( gdjs.evtsExt__Create__Summon.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__Create__Summon.conditionTrue_1 = gdjs.evtsExt__Create__Summon.condition2IsTrue_0;
gdjs.evtsExt__Create__Summon.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7860132);
}
}}
}
if (gdjs.evtsExt__Create__Summon.condition2IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Create__Summon.GDGoldObjects2 */
/* Reuse gdjs.evtsExt__Create__Summon.GDZoneObjects2 */
/* Reuse gdjs.evtsExt__Create__Summon.GDAllyObjects2 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Create__Summon.mapOfGDgdjs_46evtsExt_95_95Create_95_95Summon_46GDAllyObjects2Objects, (( gdjs.evtsExt__Create__Summon.GDZoneObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Create__Summon.GDZoneObjects2[0].getPointX("")), (( gdjs.evtsExt__Create__Summon.GDZoneObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Create__Summon.GDZoneObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.evtsExt__Create__Summon.GDAllyObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Create__Summon.GDAllyObjects2[i].setHeight(100);
}
}{for(var i = 0, len = gdjs.evtsExt__Create__Summon.GDAllyObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Create__Summon.GDAllyObjects2[i].setWidth(100);
}
}{for(var i = 0, len = gdjs.evtsExt__Create__Summon.GDGoldObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Create__Summon.GDGoldObjects2[i].returnVariable(gdjs.evtsExt__Create__Summon.GDGoldObjects2[i].getVariables().get("gold")).sub(500);
}
}}

}


{

/* Reuse gdjs.evtsExt__Create__Summon.GDAllyObjects1 */
gdjs.evtsExt__Create__Summon.GDGoldObjects1.createFrom(eventsFunctionContext.getObjects("Gold"));
gdjs.evtsExt__Create__Summon.GDZoneObjects1.createFrom(eventsFunctionContext.getObjects("Zone"));

gdjs.evtsExt__Create__Summon.condition0IsTrue_0.val = false;
gdjs.evtsExt__Create__Summon.condition1IsTrue_0.val = false;
gdjs.evtsExt__Create__Summon.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Create__Summon.GDZoneObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Create__Summon.GDZoneObjects1[i].isCollidingWithPoint((( gdjs.evtsExt__Create__Summon.GDAllyObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Create__Summon.GDAllyObjects1[0].getPointX("")) + 50, (( gdjs.evtsExt__Create__Summon.GDAllyObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Create__Summon.GDAllyObjects1[0].getPointY("")) + 50) ) {
        gdjs.evtsExt__Create__Summon.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Create__Summon.GDZoneObjects1[k] = gdjs.evtsExt__Create__Summon.GDZoneObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Create__Summon.GDZoneObjects1.length = k;}if ( gdjs.evtsExt__Create__Summon.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Create__Summon.GDGoldObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Create__Summon.GDGoldObjects1[i].getVariableNumber(gdjs.evtsExt__Create__Summon.GDGoldObjects1[i].getVariables().get("gold")) >= 500) ) {
        gdjs.evtsExt__Create__Summon.condition1IsTrue_0.val = true;
        gdjs.evtsExt__Create__Summon.GDGoldObjects1[k] = gdjs.evtsExt__Create__Summon.GDGoldObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Create__Summon.GDGoldObjects1.length = k;}if ( gdjs.evtsExt__Create__Summon.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__Create__Summon.conditionTrue_1 = gdjs.evtsExt__Create__Summon.condition2IsTrue_0;
gdjs.evtsExt__Create__Summon.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7163076);
}
}}
}
if (gdjs.evtsExt__Create__Summon.condition2IsTrue_0.val) {
}

}


}; //End of gdjs.evtsExt__Create__Summon.eventsList0x6d052c
gdjs.evtsExt__Create__Summon.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Create__Summon.GDAllyObjects1.createFrom(eventsFunctionContext.getObjects("Ally"));

gdjs.evtsExt__Create__Summon.condition0IsTrue_0.val = false;
gdjs.evtsExt__Create__Summon.condition1IsTrue_0.val = false;
gdjs.evtsExt__Create__Summon.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__Create__Summon.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Create__Summon.mapOfGDgdjs_46evtsExt_95_95Create_95_95Summon_46GDAllyObjects1Objects, runtimeScene, true, false);
}if ( gdjs.evtsExt__Create__Summon.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__Create__Summon.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.evtsExt__Create__Summon.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__Create__Summon.conditionTrue_1 = gdjs.evtsExt__Create__Summon.condition2IsTrue_0;
gdjs.evtsExt__Create__Summon.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7859564);
}
}}
}
if (gdjs.evtsExt__Create__Summon.condition2IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Create__Summon.GDAllyObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Create__Summon.GDAllyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Create__Summon.GDAllyObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Create__Summon.mapOfGDgdjs_46evtsExt_95_95Create_95_95Summon_46GDAllyObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X_Pos")) || 0 : 0), 600, "");
}{for(var i = 0, len = gdjs.evtsExt__Create__Summon.GDAllyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Create__Summon.GDAllyObjects1[i].setHeight(100);
}
}{for(var i = 0, len = gdjs.evtsExt__Create__Summon.GDAllyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Create__Summon.GDAllyObjects1[i].setWidth(100);
}
}
{ //Subevents
gdjs.evtsExt__Create__Summon.eventsList0x6d052c(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__Create__Summon.eventsList0x5b7328


gdjs.evtsExt__Create__Summon.func = function(runtimeScene, Gold, Ally, Zone, X_Pos, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Gold": Gold
, "Ally": Ally
, "Zone": Zone
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
if (argName === "X_Pos") return X_Pos;
    return "";
  }
};

gdjs.evtsExt__Create__Summon.GDGoldObjects1.length = 0;
gdjs.evtsExt__Create__Summon.GDGoldObjects2.length = 0;
gdjs.evtsExt__Create__Summon.GDGoldObjects3.length = 0;
gdjs.evtsExt__Create__Summon.GDAllyObjects1.length = 0;
gdjs.evtsExt__Create__Summon.GDAllyObjects2.length = 0;
gdjs.evtsExt__Create__Summon.GDAllyObjects3.length = 0;
gdjs.evtsExt__Create__Summon.GDZoneObjects1.length = 0;
gdjs.evtsExt__Create__Summon.GDZoneObjects2.length = 0;
gdjs.evtsExt__Create__Summon.GDZoneObjects3.length = 0;

gdjs.evtsExt__Create__Summon.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return;
}

