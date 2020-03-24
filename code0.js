gdjs.NewSceneCode = {};
gdjs.NewSceneCode.GDBackgroundObjects1= [];
gdjs.NewSceneCode.GDBackgroundObjects2= [];
gdjs.NewSceneCode.GDEnemy_95T2Objects1= [];
gdjs.NewSceneCode.GDEnemy_95T2Objects2= [];
gdjs.NewSceneCode.GDEnemy_95T1Objects1= [];
gdjs.NewSceneCode.GDEnemy_95T1Objects2= [];
gdjs.NewSceneCode.GDEnemy_95WitchObjects1= [];
gdjs.NewSceneCode.GDEnemy_95WitchObjects2= [];
gdjs.NewSceneCode.GDEnemy_95ArcherObjects1= [];
gdjs.NewSceneCode.GDEnemy_95ArcherObjects2= [];
gdjs.NewSceneCode.GDBOSSObjects1= [];
gdjs.NewSceneCode.GDBOSSObjects2= [];
gdjs.NewSceneCode.GDboxObjects1= [];
gdjs.NewSceneCode.GDboxObjects2= [];
gdjs.NewSceneCode.GDRanger_95r1Objects1= [];
gdjs.NewSceneCode.GDRanger_95r1Objects2= [];
gdjs.NewSceneCode.GDGuard_95r1Objects1= [];
gdjs.NewSceneCode.GDGuard_95r1Objects2= [];
gdjs.NewSceneCode.GDNewObjectObjects1= [];
gdjs.NewSceneCode.GDNewObjectObjects2= [];
gdjs.NewSceneCode.GDHpObjects1= [];
gdjs.NewSceneCode.GDHpObjects2= [];
gdjs.NewSceneCode.GDGoldObjects1= [];
gdjs.NewSceneCode.GDGoldObjects2= [];
gdjs.NewSceneCode.GDGObjects1= [];
gdjs.NewSceneCode.GDGObjects2= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_0 = {val:false};
gdjs.NewSceneCode.conditionTrue_1 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_1 = {val:false};


gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy_9595T1Objects1Objects = Hashtable.newFrom({"Enemy_T1": gdjs.NewSceneCode.GDEnemy_95T1Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy_9595T1Objects1Objects = Hashtable.newFrom({"Enemy_T1": gdjs.NewSceneCode.GDEnemy_95T1Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDGuard_9595r1Objects1Objects = Hashtable.newFrom({"Guard_r1": gdjs.NewSceneCode.GDGuard_95r1Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.NewSceneCode.GDNewObjectObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDHpObjects1Objects = Hashtable.newFrom({"Hp": gdjs.NewSceneCode.GDHpObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy_9595T2Objects1Objects = Hashtable.newFrom({"Enemy_T2": gdjs.NewSceneCode.GDEnemy_95T2Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDGuard_9595r1Objects1Objects = Hashtable.newFrom({"Guard_r1": gdjs.NewSceneCode.GDGuard_95r1Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.NewSceneCode.GDNewObjectObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDHpObjects1Objects = Hashtable.newFrom({"Hp": gdjs.NewSceneCode.GDHpObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy_9595T1Objects1Objects = Hashtable.newFrom({"Enemy_T1": gdjs.NewSceneCode.GDEnemy_95T1Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDRanger_9595r1Objects1Objects = Hashtable.newFrom({"Ranger_r1": gdjs.NewSceneCode.GDRanger_95r1Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.NewSceneCode.GDNewObjectObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDHpObjects1Objects = Hashtable.newFrom({"Hp": gdjs.NewSceneCode.GDHpObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy_9595T1Objects1Objects = Hashtable.newFrom({"Enemy_T1": gdjs.NewSceneCode.GDEnemy_95T1Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDGuard_9595r1Objects1Objects = Hashtable.newFrom({"Guard_r1": gdjs.NewSceneCode.GDGuard_95r1Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDGuard_9595r1Objects1Objects = Hashtable.newFrom({"Guard_r1": gdjs.NewSceneCode.GDGuard_95r1Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDGuard_9595r1Objects1Objects = Hashtable.newFrom({"Guard_r1": gdjs.NewSceneCode.GDGuard_95r1Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDboxObjects1Objects = Hashtable.newFrom({"box": gdjs.NewSceneCode.GDboxObjects1});gdjs.NewSceneCode.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition0IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6009628);
}
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDGoldObjects1.createFrom(runtimeScene.getObjects("Gold"));
gdjs.NewSceneCode.GDGuard_95r1Objects1.createFrom(runtimeScene.getObjects("Guard_r1"));
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Demo");
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "50;50;50");
}{for(var i = 0, len = gdjs.NewSceneCode.GDGuard_95r1Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDGuard_95r1Objects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDGoldObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDGoldObjects1[i].resetTimer("Gold");
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "Demo");
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition1IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6826988);
}
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
gdjs.NewSceneCode.GDEnemy_95T1Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy_9595T1Objects1Objects, 500, 100, "");
}{for(var i = 0, len = gdjs.NewSceneCode.GDEnemy_95T1Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDEnemy_95T1Objects1[i].setScale(gdjs.NewSceneCode.GDEnemy_95T1Objects1[i].getScale() * (0.1));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDEnemy_95T1Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDEnemy_95T1Objects1[i].addForce(0, 30, 1);
}
}}

}


{


{
gdjs.NewSceneCode.GDEnemy_95T1Objects1.createFrom(runtimeScene.getObjects("Enemy_T1"));
gdjs.NewSceneCode.GDEnemy_95T2Objects1.createFrom(runtimeScene.getObjects("Enemy_T2"));
gdjs.NewSceneCode.GDGoldObjects1.createFrom(runtimeScene.getObjects("Gold"));
gdjs.NewSceneCode.GDGuard_95r1Objects1.createFrom(runtimeScene.getObjects("Guard_r1"));
gdjs.NewSceneCode.GDHpObjects1.createFrom(runtimeScene.getObjects("Hp"));
gdjs.NewSceneCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
gdjs.NewSceneCode.GDRanger_95r1Objects1.createFrom(runtimeScene.getObjects("Ranger_r1"));
{gdjs.evtsExt__Collision__Collision.func(runtimeScene, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy_9595T1Objects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDGuard_9595r1Objects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDNewObjectObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDHpObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__Collision__Collision.func(runtimeScene, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy_9595T2Objects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDGuard_9595r1Objects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDNewObjectObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDHpObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.NewSceneCode.GDGoldObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDGoldObjects1[i].setString(gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.NewSceneCode.GDGoldObjects1[i].getVariables().getFromIndex(0)))));
}
}{gdjs.evtsExt__Collision__Collision.func(runtimeScene, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy_9595T1Objects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDRanger_9595r1Objects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDNewObjectObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDHpObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.NewSceneCode.GDGoldObjects1.createFrom(runtimeScene.getObjects("Gold"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDGoldObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDGoldObjects1[i].timerElapsedTime("Gold", 1) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDGoldObjects1[k] = gdjs.NewSceneCode.GDGoldObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDGoldObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDGoldObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDGoldObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDGoldObjects1[i].returnVariable(gdjs.NewSceneCode.GDGoldObjects1[i].getVariables().getFromIndex(0)).add(10);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDGoldObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDGoldObjects1[i].resetTimer("Gold");
}
}}

}


{

gdjs.NewSceneCode.GDEnemy_95T1Objects1.createFrom(runtimeScene.getObjects("Enemy_T1"));
gdjs.NewSceneCode.GDGuard_95r1Objects1.createFrom(runtimeScene.getObjects("Guard_r1"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy_9595T1Objects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDGuard_9595r1Objects1Objects, true, runtimeScene, false);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition1IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7163188);
}
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
gdjs.NewSceneCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
{for(var i = 0, len = gdjs.NewSceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDNewObjectObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.NewSceneCode.GDGuard_95r1Objects1.createFrom(runtimeScene.getObjects("Guard_r1"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDGuard_9595r1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
gdjs.NewSceneCode.GDEnemy_95T1Objects1.createFrom(runtimeScene.getObjects("Enemy_T1"));
/* Reuse gdjs.NewSceneCode.GDGuard_95r1Objects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDGuard_95r1Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDGuard_95r1Objects1[i].activateBehavior("Draggable", true);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDEnemy_95T1Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDEnemy_95T1Objects1[i].pauseAnimation();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Demo");
}}

}


{

gdjs.NewSceneCode.GDGuard_95r1Objects1.createFrom(runtimeScene.getObjects("Guard_r1"));
gdjs.NewSceneCode.GDboxObjects1.createFrom(runtimeScene.getObjects("box"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDGuard_9595r1Objects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDboxObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
}

}


}; //End of gdjs.NewSceneCode.eventsList0x5b6e18


gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDBackgroundObjects1.length = 0;
gdjs.NewSceneCode.GDBackgroundObjects2.length = 0;
gdjs.NewSceneCode.GDEnemy_95T2Objects1.length = 0;
gdjs.NewSceneCode.GDEnemy_95T2Objects2.length = 0;
gdjs.NewSceneCode.GDEnemy_95T1Objects1.length = 0;
gdjs.NewSceneCode.GDEnemy_95T1Objects2.length = 0;
gdjs.NewSceneCode.GDEnemy_95WitchObjects1.length = 0;
gdjs.NewSceneCode.GDEnemy_95WitchObjects2.length = 0;
gdjs.NewSceneCode.GDEnemy_95ArcherObjects1.length = 0;
gdjs.NewSceneCode.GDEnemy_95ArcherObjects2.length = 0;
gdjs.NewSceneCode.GDBOSSObjects1.length = 0;
gdjs.NewSceneCode.GDBOSSObjects2.length = 0;
gdjs.NewSceneCode.GDboxObjects1.length = 0;
gdjs.NewSceneCode.GDboxObjects2.length = 0;
gdjs.NewSceneCode.GDRanger_95r1Objects1.length = 0;
gdjs.NewSceneCode.GDRanger_95r1Objects2.length = 0;
gdjs.NewSceneCode.GDGuard_95r1Objects1.length = 0;
gdjs.NewSceneCode.GDGuard_95r1Objects2.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects1.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects2.length = 0;
gdjs.NewSceneCode.GDHpObjects1.length = 0;
gdjs.NewSceneCode.GDHpObjects2.length = 0;
gdjs.NewSceneCode.GDGoldObjects1.length = 0;
gdjs.NewSceneCode.GDGoldObjects2.length = 0;
gdjs.NewSceneCode.GDGObjects1.length = 0;
gdjs.NewSceneCode.GDGObjects2.length = 0;

gdjs.NewSceneCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['NewSceneCode'] = gdjs.NewSceneCode;
