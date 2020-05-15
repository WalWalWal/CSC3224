gdjs.Win_40B_41Code = {};
gdjs.Win_40B_41Code.GDblackObjects1= [];
gdjs.Win_40B_41Code.GDblackObjects2= [];
gdjs.Win_40B_41Code.GDbuttonObjects1= [];
gdjs.Win_40B_41Code.GDbuttonObjects2= [];
gdjs.Win_40B_41Code.GDWinObjects1= [];
gdjs.Win_40B_41Code.GDWinObjects2= [];
gdjs.Win_40B_41Code.GDTitleObjects1= [];
gdjs.Win_40B_41Code.GDTitleObjects2= [];
gdjs.Win_40B_41Code.GDRetryObjects1= [];
gdjs.Win_40B_41Code.GDRetryObjects2= [];
gdjs.Win_40B_41Code.GDNextObjects1= [];
gdjs.Win_40B_41Code.GDNextObjects2= [];
gdjs.Win_40B_41Code.GDDiscriptionObjects1= [];
gdjs.Win_40B_41Code.GDDiscriptionObjects2= [];
gdjs.Win_40B_41Code.GDNewObjectObjects1= [];
gdjs.Win_40B_41Code.GDNewObjectObjects2= [];
gdjs.Win_40B_41Code.GDNewObject2Objects1= [];
gdjs.Win_40B_41Code.GDNewObject2Objects2= [];
gdjs.Win_40B_41Code.GDNewObject3Objects1= [];
gdjs.Win_40B_41Code.GDNewObject3Objects2= [];
gdjs.Win_40B_41Code.GDDescription2Objects1= [];
gdjs.Win_40B_41Code.GDDescription2Objects2= [];
gdjs.Win_40B_41Code.GDNewObject4Objects1= [];
gdjs.Win_40B_41Code.GDNewObject4Objects2= [];
gdjs.Win_40B_41Code.GDLifeObjects1= [];
gdjs.Win_40B_41Code.GDLifeObjects2= [];

gdjs.Win_40B_41Code.conditionTrue_0 = {val:false};
gdjs.Win_40B_41Code.condition0IsTrue_0 = {val:false};
gdjs.Win_40B_41Code.condition1IsTrue_0 = {val:false};
gdjs.Win_40B_41Code.condition2IsTrue_0 = {val:false};
gdjs.Win_40B_41Code.conditionTrue_1 = {val:false};
gdjs.Win_40B_41Code.condition0IsTrue_1 = {val:false};
gdjs.Win_40B_41Code.condition1IsTrue_1 = {val:false};
gdjs.Win_40B_41Code.condition2IsTrue_1 = {val:false};


gdjs.Win_40B_41Code.mapOfGDgdjs_46Win_9540B_9541Code_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.Win_40B_41Code.GDbuttonObjects1});gdjs.Win_40B_41Code.mapOfGDgdjs_46Win_9540B_9541Code_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.Win_40B_41Code.GDbuttonObjects1});gdjs.Win_40B_41Code.mapOfGDgdjs_46Win_9540B_9541Code_46GDNextObjects1Objects = Hashtable.newFrom({"Next": gdjs.Win_40B_41Code.GDNextObjects1});gdjs.Win_40B_41Code.mapOfGDgdjs_46Win_9540B_9541Code_46GDRetryObjects1Objects = Hashtable.newFrom({"Retry": gdjs.Win_40B_41Code.GDRetryObjects1});gdjs.Win_40B_41Code.mapOfGDgdjs_46Win_9540B_9541Code_46GDTitleObjects1Objects = Hashtable.newFrom({"Title": gdjs.Win_40B_41Code.GDTitleObjects1});gdjs.Win_40B_41Code.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.Win_40B_41Code.condition0IsTrue_0.val = false;
{
{gdjs.Win_40B_41Code.conditionTrue_1 = gdjs.Win_40B_41Code.condition0IsTrue_0;
gdjs.Win_40B_41Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8943300);
}
}if (gdjs.Win_40B_41Code.condition0IsTrue_0.val) {
gdjs.Win_40B_41Code.GDLifeObjects1.createFrom(runtimeScene.getObjects("Life"));
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "My Demons - Starset - (fan lyric video).mp3", 0, true, 30, 1);
}{for(var i = 0, len = gdjs.Win_40B_41Code.GDLifeObjects1.length ;i < len;++i) {
    gdjs.Win_40B_41Code.GDLifeObjects1[i].setString("Life Left:" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{

gdjs.Win_40B_41Code.GDbuttonObjects1.createFrom(runtimeScene.getObjects("button"));

gdjs.Win_40B_41Code.condition0IsTrue_0.val = false;
{
gdjs.Win_40B_41Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Win_40B_41Code.mapOfGDgdjs_46Win_9540B_9541Code_46GDbuttonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Win_40B_41Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Win_40B_41Code.GDbuttonObjects1 */
{for(var i = 0, len = gdjs.Win_40B_41Code.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Win_40B_41Code.GDbuttonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Win_40B_41Code.GDbuttonObjects1.createFrom(runtimeScene.getObjects("button"));

gdjs.Win_40B_41Code.condition0IsTrue_0.val = false;
{
gdjs.Win_40B_41Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Win_40B_41Code.mapOfGDgdjs_46Win_9540B_9541Code_46GDbuttonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Win_40B_41Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Win_40B_41Code.GDbuttonObjects1 */
{for(var i = 0, len = gdjs.Win_40B_41Code.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Win_40B_41Code.GDbuttonObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.Win_40B_41Code.GDNextObjects1.createFrom(runtimeScene.getObjects("Next"));

gdjs.Win_40B_41Code.condition0IsTrue_0.val = false;
gdjs.Win_40B_41Code.condition1IsTrue_0.val = false;
{
gdjs.Win_40B_41Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Win_40B_41Code.mapOfGDgdjs_46Win_9540B_9541Code_46GDNextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Win_40B_41Code.condition0IsTrue_0.val ) {
{
gdjs.Win_40B_41Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Win_40B_41Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Normal", true);
}}

}


{

gdjs.Win_40B_41Code.GDRetryObjects1.createFrom(runtimeScene.getObjects("Retry"));

gdjs.Win_40B_41Code.condition0IsTrue_0.val = false;
gdjs.Win_40B_41Code.condition1IsTrue_0.val = false;
{
gdjs.Win_40B_41Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Win_40B_41Code.mapOfGDgdjs_46Win_9540B_9541Code_46GDRetryObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Win_40B_41Code.condition0IsTrue_0.val ) {
{
gdjs.Win_40B_41Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Win_40B_41Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Beginner", true);
}}

}


{

gdjs.Win_40B_41Code.GDTitleObjects1.createFrom(runtimeScene.getObjects("Title"));

gdjs.Win_40B_41Code.condition0IsTrue_0.val = false;
gdjs.Win_40B_41Code.condition1IsTrue_0.val = false;
{
gdjs.Win_40B_41Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Win_40B_41Code.mapOfGDgdjs_46Win_9540B_9541Code_46GDTitleObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Win_40B_41Code.condition0IsTrue_0.val ) {
{
gdjs.Win_40B_41Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Win_40B_41Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Front", true);
}}

}


}; //End of gdjs.Win_40B_41Code.eventsList0x5b70b8


gdjs.Win_40B_41Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Win_40B_41Code.GDblackObjects1.length = 0;
gdjs.Win_40B_41Code.GDblackObjects2.length = 0;
gdjs.Win_40B_41Code.GDbuttonObjects1.length = 0;
gdjs.Win_40B_41Code.GDbuttonObjects2.length = 0;
gdjs.Win_40B_41Code.GDWinObjects1.length = 0;
gdjs.Win_40B_41Code.GDWinObjects2.length = 0;
gdjs.Win_40B_41Code.GDTitleObjects1.length = 0;
gdjs.Win_40B_41Code.GDTitleObjects2.length = 0;
gdjs.Win_40B_41Code.GDRetryObjects1.length = 0;
gdjs.Win_40B_41Code.GDRetryObjects2.length = 0;
gdjs.Win_40B_41Code.GDNextObjects1.length = 0;
gdjs.Win_40B_41Code.GDNextObjects2.length = 0;
gdjs.Win_40B_41Code.GDDiscriptionObjects1.length = 0;
gdjs.Win_40B_41Code.GDDiscriptionObjects2.length = 0;
gdjs.Win_40B_41Code.GDNewObjectObjects1.length = 0;
gdjs.Win_40B_41Code.GDNewObjectObjects2.length = 0;
gdjs.Win_40B_41Code.GDNewObject2Objects1.length = 0;
gdjs.Win_40B_41Code.GDNewObject2Objects2.length = 0;
gdjs.Win_40B_41Code.GDNewObject3Objects1.length = 0;
gdjs.Win_40B_41Code.GDNewObject3Objects2.length = 0;
gdjs.Win_40B_41Code.GDDescription2Objects1.length = 0;
gdjs.Win_40B_41Code.GDDescription2Objects2.length = 0;
gdjs.Win_40B_41Code.GDNewObject4Objects1.length = 0;
gdjs.Win_40B_41Code.GDNewObject4Objects2.length = 0;
gdjs.Win_40B_41Code.GDLifeObjects1.length = 0;
gdjs.Win_40B_41Code.GDLifeObjects2.length = 0;

gdjs.Win_40B_41Code.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['Win_40B_41Code'] = gdjs.Win_40B_41Code;
