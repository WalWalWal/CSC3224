gdjs.GameOver_40B_41Code = {};
gdjs.GameOver_40B_41Code.GDblackObjects1= [];
gdjs.GameOver_40B_41Code.GDblackObjects2= [];
gdjs.GameOver_40B_41Code.GDbuttonObjects1= [];
gdjs.GameOver_40B_41Code.GDbuttonObjects2= [];
gdjs.GameOver_40B_41Code.GDTitleObjects1= [];
gdjs.GameOver_40B_41Code.GDTitleObjects2= [];
gdjs.GameOver_40B_41Code.GDBackTitleObjects1= [];
gdjs.GameOver_40B_41Code.GDBackTitleObjects2= [];
gdjs.GameOver_40B_41Code.GDRetryObjects1= [];
gdjs.GameOver_40B_41Code.GDRetryObjects2= [];
gdjs.GameOver_40B_41Code.GDDiscriptionObjects1= [];
gdjs.GameOver_40B_41Code.GDDiscriptionObjects2= [];
gdjs.GameOver_40B_41Code.GDNewObjectObjects1= [];
gdjs.GameOver_40B_41Code.GDNewObjectObjects2= [];
gdjs.GameOver_40B_41Code.GDNewObject2Objects1= [];
gdjs.GameOver_40B_41Code.GDNewObject2Objects2= [];
gdjs.GameOver_40B_41Code.GDNewObject3Objects1= [];
gdjs.GameOver_40B_41Code.GDNewObject3Objects2= [];
gdjs.GameOver_40B_41Code.GDDescription2Objects1= [];
gdjs.GameOver_40B_41Code.GDDescription2Objects2= [];
gdjs.GameOver_40B_41Code.GDNewObject4Objects1= [];
gdjs.GameOver_40B_41Code.GDNewObject4Objects2= [];

gdjs.GameOver_40B_41Code.conditionTrue_0 = {val:false};
gdjs.GameOver_40B_41Code.condition0IsTrue_0 = {val:false};
gdjs.GameOver_40B_41Code.condition1IsTrue_0 = {val:false};
gdjs.GameOver_40B_41Code.condition2IsTrue_0 = {val:false};
gdjs.GameOver_40B_41Code.conditionTrue_1 = {val:false};
gdjs.GameOver_40B_41Code.condition0IsTrue_1 = {val:false};
gdjs.GameOver_40B_41Code.condition1IsTrue_1 = {val:false};
gdjs.GameOver_40B_41Code.condition2IsTrue_1 = {val:false};


gdjs.GameOver_40B_41Code.mapOfGDgdjs_46GameOver_9540B_9541Code_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.GameOver_40B_41Code.GDbuttonObjects1});gdjs.GameOver_40B_41Code.mapOfGDgdjs_46GameOver_9540B_9541Code_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.GameOver_40B_41Code.GDbuttonObjects1});gdjs.GameOver_40B_41Code.mapOfGDgdjs_46GameOver_9540B_9541Code_46GDRetryObjects1Objects = Hashtable.newFrom({"Retry": gdjs.GameOver_40B_41Code.GDRetryObjects1});gdjs.GameOver_40B_41Code.mapOfGDgdjs_46GameOver_9540B_9541Code_46GDBackTitleObjects1Objects = Hashtable.newFrom({"BackTitle": gdjs.GameOver_40B_41Code.GDBackTitleObjects1});gdjs.GameOver_40B_41Code.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.GameOver_40B_41Code.condition0IsTrue_0.val = false;
{
{gdjs.GameOver_40B_41Code.conditionTrue_1 = gdjs.GameOver_40B_41Code.condition0IsTrue_0;
gdjs.GameOver_40B_41Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7096828);
}
}if (gdjs.GameOver_40B_41Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "My Demons - Starset - (fan lyric video).mp3", 0, true, 30, 1);
}}

}


{

gdjs.GameOver_40B_41Code.GDbuttonObjects1.createFrom(runtimeScene.getObjects("button"));

gdjs.GameOver_40B_41Code.condition0IsTrue_0.val = false;
{
gdjs.GameOver_40B_41Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOver_40B_41Code.mapOfGDgdjs_46GameOver_9540B_9541Code_46GDbuttonObjects1Objects, runtimeScene, true, true);
}if (gdjs.GameOver_40B_41Code.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOver_40B_41Code.GDbuttonObjects1 */
{for(var i = 0, len = gdjs.GameOver_40B_41Code.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.GameOver_40B_41Code.GDbuttonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.GameOver_40B_41Code.GDbuttonObjects1.createFrom(runtimeScene.getObjects("button"));

gdjs.GameOver_40B_41Code.condition0IsTrue_0.val = false;
{
gdjs.GameOver_40B_41Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOver_40B_41Code.mapOfGDgdjs_46GameOver_9540B_9541Code_46GDbuttonObjects1Objects, runtimeScene, true, false);
}if (gdjs.GameOver_40B_41Code.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOver_40B_41Code.GDbuttonObjects1 */
{for(var i = 0, len = gdjs.GameOver_40B_41Code.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.GameOver_40B_41Code.GDbuttonObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.GameOver_40B_41Code.GDRetryObjects1.createFrom(runtimeScene.getObjects("Retry"));

gdjs.GameOver_40B_41Code.condition0IsTrue_0.val = false;
gdjs.GameOver_40B_41Code.condition1IsTrue_0.val = false;
{
gdjs.GameOver_40B_41Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOver_40B_41Code.mapOfGDgdjs_46GameOver_9540B_9541Code_46GDRetryObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameOver_40B_41Code.condition0IsTrue_0.val ) {
{
gdjs.GameOver_40B_41Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.GameOver_40B_41Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Beginner", true);
}}

}


{

gdjs.GameOver_40B_41Code.GDBackTitleObjects1.createFrom(runtimeScene.getObjects("BackTitle"));

gdjs.GameOver_40B_41Code.condition0IsTrue_0.val = false;
gdjs.GameOver_40B_41Code.condition1IsTrue_0.val = false;
{
gdjs.GameOver_40B_41Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOver_40B_41Code.mapOfGDgdjs_46GameOver_9540B_9541Code_46GDBackTitleObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameOver_40B_41Code.condition0IsTrue_0.val ) {
{
gdjs.GameOver_40B_41Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.GameOver_40B_41Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Front", true);
}}

}


}; //End of gdjs.GameOver_40B_41Code.eventsList0x5b70b8


gdjs.GameOver_40B_41Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOver_40B_41Code.GDblackObjects1.length = 0;
gdjs.GameOver_40B_41Code.GDblackObjects2.length = 0;
gdjs.GameOver_40B_41Code.GDbuttonObjects1.length = 0;
gdjs.GameOver_40B_41Code.GDbuttonObjects2.length = 0;
gdjs.GameOver_40B_41Code.GDTitleObjects1.length = 0;
gdjs.GameOver_40B_41Code.GDTitleObjects2.length = 0;
gdjs.GameOver_40B_41Code.GDBackTitleObjects1.length = 0;
gdjs.GameOver_40B_41Code.GDBackTitleObjects2.length = 0;
gdjs.GameOver_40B_41Code.GDRetryObjects1.length = 0;
gdjs.GameOver_40B_41Code.GDRetryObjects2.length = 0;
gdjs.GameOver_40B_41Code.GDDiscriptionObjects1.length = 0;
gdjs.GameOver_40B_41Code.GDDiscriptionObjects2.length = 0;
gdjs.GameOver_40B_41Code.GDNewObjectObjects1.length = 0;
gdjs.GameOver_40B_41Code.GDNewObjectObjects2.length = 0;
gdjs.GameOver_40B_41Code.GDNewObject2Objects1.length = 0;
gdjs.GameOver_40B_41Code.GDNewObject2Objects2.length = 0;
gdjs.GameOver_40B_41Code.GDNewObject3Objects1.length = 0;
gdjs.GameOver_40B_41Code.GDNewObject3Objects2.length = 0;
gdjs.GameOver_40B_41Code.GDDescription2Objects1.length = 0;
gdjs.GameOver_40B_41Code.GDDescription2Objects2.length = 0;
gdjs.GameOver_40B_41Code.GDNewObject4Objects1.length = 0;
gdjs.GameOver_40B_41Code.GDNewObject4Objects2.length = 0;

gdjs.GameOver_40B_41Code.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['GameOver_40B_41Code'] = gdjs.GameOver_40B_41Code;
