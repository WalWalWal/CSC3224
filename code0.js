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
gdjs.NewSceneCode.GDGrard_95r1Objects1= [];
gdjs.NewSceneCode.GDGrard_95r1Objects2= [];
gdjs.NewSceneCode.GDNewObjectObjects1= [];
gdjs.NewSceneCode.GDNewObjectObjects2= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_0 = {val:false};
gdjs.NewSceneCode.conditionTrue_1 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_1 = {val:false};


gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy_9595T1Objects1Objects = Hashtable.newFrom({"Enemy_T1": gdjs.NewSceneCode.GDEnemy_95T1Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy_9595T1Objects1Objects = Hashtable.newFrom({"Enemy_T1": gdjs.NewSceneCode.GDEnemy_95T1Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDGrard_9595r1Objects1Objects = Hashtable.newFrom({"Grard_r1": gdjs.NewSceneCode.GDGrard_95r1Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.NewSceneCode.GDNewObjectObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy_9595T1Objects1Objects = Hashtable.newFrom({"Enemy_T1": gdjs.NewSceneCode.GDEnemy_95T1Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDGrard_9595r1Objects1Objects = Hashtable.newFrom({"Grard_r1": gdjs.NewSceneCode.GDGrard_95r1Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDGrard_9595r1Objects1Objects = Hashtable.newFrom({"Grard_r1": gdjs.NewSceneCode.GDGrard_95r1Objects1});gdjs.NewSceneCode.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition0IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6804244);
}
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDGrard_95r1Objects1.createFrom(runtimeScene.getObjects("Grard_r1"));
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Demo");
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "50;50;50");
}{for(var i = 0, len = gdjs.NewSceneCode.GDGrard_95r1Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDGrard_95r1Objects1[i].activateBehavior("Draggable", false);
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
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6799908);
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

gdjs.NewSceneCode.GDEnemy_95T1Objects1.createFrom(runtimeScene.getObjects("Enemy_T1"));
gdjs.NewSceneCode.GDGrard_95r1Objects1.createFrom(runtimeScene.getObjects("Grard_r1"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy_9595T1Objects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDGrard_9595r1Objects1Objects, false, runtimeScene, true);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDEnemy_95T1Objects1 */
gdjs.NewSceneCode.GDNewObjectObjects1.length = 0;

{for(var i = 0, len = gdjs.NewSceneCode.GDEnemy_95T1Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDEnemy_95T1Objects1[i].clearForces();
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDNewObjectObjects1Objects, (( gdjs.NewSceneCode.GDEnemy_95T1Objects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDEnemy_95T1Objects1[0].getPointX("")) + 25, (( gdjs.NewSceneCode.GDEnemy_95T1Objects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDEnemy_95T1Objects1[0].getPointY("")) + 100, "");
}{for(var i = 0, len = gdjs.NewSceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDNewObjectObjects1[i].setScale(gdjs.NewSceneCode.GDNewObjectObjects1[i].getScale() * (0.05));
}
}}

}


{

gdjs.NewSceneCode.GDEnemy_95T1Objects1.createFrom(runtimeScene.getObjects("Enemy_T1"));
gdjs.NewSceneCode.GDGrard_95r1Objects1.createFrom(runtimeScene.getObjects("Grard_r1"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemy_9595T1Objects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDGrard_9595r1Objects1Objects, true, runtimeScene, false);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition1IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6877388);
}
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDEnemy_95T1Objects1 */
gdjs.NewSceneCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
{for(var i = 0, len = gdjs.NewSceneCode.GDEnemy_95T1Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDEnemy_95T1Objects1[i].addForce(0, 30, 1);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDNewObjectObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.NewSceneCode.GDGrard_95r1Objects1.createFrom(runtimeScene.getObjects("Grard_r1"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDGrard_9595r1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDGrard_95r1Objects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDGrard_95r1Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDGrard_95r1Objects1[i].activateBehavior("Draggable", true);
}
}}

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
gdjs.NewSceneCode.GDGrard_95r1Objects1.length = 0;
gdjs.NewSceneCode.GDGrard_95r1Objects2.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects1.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects2.length = 0;

gdjs.NewSceneCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['NewSceneCode'] = gdjs.NewSceneCode;
