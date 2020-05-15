gdjs.PauseCode = {};
gdjs.PauseCode.GDblackObjects1= [];
gdjs.PauseCode.GDblackObjects2= [];
gdjs.PauseCode.GDbuttonObjects1= [];
gdjs.PauseCode.GDbuttonObjects2= [];
gdjs.PauseCode.GDPauseObjects1= [];
gdjs.PauseCode.GDPauseObjects2= [];
gdjs.PauseCode.GDBackTitleObjects1= [];
gdjs.PauseCode.GDBackTitleObjects2= [];
gdjs.PauseCode.GDContObjects1= [];
gdjs.PauseCode.GDContObjects2= [];
gdjs.PauseCode.GDDiscriptionObjects1= [];
gdjs.PauseCode.GDDiscriptionObjects2= [];
gdjs.PauseCode.GDNewObjectObjects1= [];
gdjs.PauseCode.GDNewObjectObjects2= [];
gdjs.PauseCode.GDNewObject2Objects1= [];
gdjs.PauseCode.GDNewObject2Objects2= [];
gdjs.PauseCode.GDNewObject3Objects1= [];
gdjs.PauseCode.GDNewObject3Objects2= [];
gdjs.PauseCode.GDDescription2Objects1= [];
gdjs.PauseCode.GDDescription2Objects2= [];
gdjs.PauseCode.GDNewObject4Objects1= [];
gdjs.PauseCode.GDNewObject4Objects2= [];

gdjs.PauseCode.conditionTrue_0 = {val:false};
gdjs.PauseCode.condition0IsTrue_0 = {val:false};
gdjs.PauseCode.condition1IsTrue_0 = {val:false};
gdjs.PauseCode.condition2IsTrue_0 = {val:false};
gdjs.PauseCode.conditionTrue_1 = {val:false};
gdjs.PauseCode.condition0IsTrue_1 = {val:false};
gdjs.PauseCode.condition1IsTrue_1 = {val:false};
gdjs.PauseCode.condition2IsTrue_1 = {val:false};


gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.PauseCode.GDbuttonObjects1});gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.PauseCode.GDbuttonObjects1});gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDContObjects1Objects = Hashtable.newFrom({"Cont": gdjs.PauseCode.GDContObjects1});gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDBackTitleObjects1Objects = Hashtable.newFrom({"BackTitle": gdjs.PauseCode.GDBackTitleObjects1});gdjs.PauseCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
{gdjs.PauseCode.conditionTrue_1 = gdjs.PauseCode.condition0IsTrue_0;
gdjs.PauseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8221092);
}
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "My Demons - Starset - (fan lyric video).mp3", 0, true, 30, 1);
}}

}


{

gdjs.PauseCode.GDbuttonObjects1.createFrom(runtimeScene.getObjects("button"));

gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDbuttonObjects1Objects, runtimeScene, true, true);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseCode.GDbuttonObjects1 */
{for(var i = 0, len = gdjs.PauseCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDbuttonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.PauseCode.GDbuttonObjects1.createFrom(runtimeScene.getObjects("button"));

gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDbuttonObjects1Objects, runtimeScene, true, false);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseCode.GDbuttonObjects1 */
{for(var i = 0, len = gdjs.PauseCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDbuttonObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.PauseCode.GDContObjects1.createFrom(runtimeScene.getObjects("Cont"));

gdjs.PauseCode.condition0IsTrue_0.val = false;
gdjs.PauseCode.condition1IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDContObjects1Objects, runtimeScene, true, false);
}if ( gdjs.PauseCode.condition0IsTrue_0.val ) {
{
gdjs.PauseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.PauseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.PauseCode.GDBackTitleObjects1.createFrom(runtimeScene.getObjects("BackTitle"));

gdjs.PauseCode.condition0IsTrue_0.val = false;
gdjs.PauseCode.condition1IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDBackTitleObjects1Objects, runtimeScene, true, false);
}if ( gdjs.PauseCode.condition0IsTrue_0.val ) {
{
gdjs.PauseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.PauseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Front", true);
}}

}


}; //End of gdjs.PauseCode.eventsList0x5b70b8


gdjs.PauseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PauseCode.GDblackObjects1.length = 0;
gdjs.PauseCode.GDblackObjects2.length = 0;
gdjs.PauseCode.GDbuttonObjects1.length = 0;
gdjs.PauseCode.GDbuttonObjects2.length = 0;
gdjs.PauseCode.GDPauseObjects1.length = 0;
gdjs.PauseCode.GDPauseObjects2.length = 0;
gdjs.PauseCode.GDBackTitleObjects1.length = 0;
gdjs.PauseCode.GDBackTitleObjects2.length = 0;
gdjs.PauseCode.GDContObjects1.length = 0;
gdjs.PauseCode.GDContObjects2.length = 0;
gdjs.PauseCode.GDDiscriptionObjects1.length = 0;
gdjs.PauseCode.GDDiscriptionObjects2.length = 0;
gdjs.PauseCode.GDNewObjectObjects1.length = 0;
gdjs.PauseCode.GDNewObjectObjects2.length = 0;
gdjs.PauseCode.GDNewObject2Objects1.length = 0;
gdjs.PauseCode.GDNewObject2Objects2.length = 0;
gdjs.PauseCode.GDNewObject3Objects1.length = 0;
gdjs.PauseCode.GDNewObject3Objects2.length = 0;
gdjs.PauseCode.GDDescription2Objects1.length = 0;
gdjs.PauseCode.GDDescription2Objects2.length = 0;
gdjs.PauseCode.GDNewObject4Objects1.length = 0;
gdjs.PauseCode.GDNewObject4Objects2.length = 0;

gdjs.PauseCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['PauseCode'] = gdjs.PauseCode;
