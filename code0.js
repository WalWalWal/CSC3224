gdjs.FrontCode = {};
gdjs.FrontCode.GDblackObjects1= [];
gdjs.FrontCode.GDblackObjects2= [];
gdjs.FrontCode.GDbuttonObjects1= [];
gdjs.FrontCode.GDbuttonObjects2= [];
gdjs.FrontCode.GDTitleObjects1= [];
gdjs.FrontCode.GDTitleObjects2= [];
gdjs.FrontCode.GDNormalObjects1= [];
gdjs.FrontCode.GDNormalObjects2= [];
gdjs.FrontCode.GDBeginnerObjects1= [];
gdjs.FrontCode.GDBeginnerObjects2= [];
gdjs.FrontCode.GDDiscriptionObjects1= [];
gdjs.FrontCode.GDDiscriptionObjects2= [];
gdjs.FrontCode.GDNewObjectObjects1= [];
gdjs.FrontCode.GDNewObjectObjects2= [];
gdjs.FrontCode.GDNewObject2Objects1= [];
gdjs.FrontCode.GDNewObject2Objects2= [];
gdjs.FrontCode.GDNewObject3Objects1= [];
gdjs.FrontCode.GDNewObject3Objects2= [];
gdjs.FrontCode.GDDescription2Objects1= [];
gdjs.FrontCode.GDDescription2Objects2= [];
gdjs.FrontCode.GDNewObject4Objects1= [];
gdjs.FrontCode.GDNewObject4Objects2= [];
gdjs.FrontCode.GDStoryObjects1= [];
gdjs.FrontCode.GDStoryObjects2= [];
gdjs.FrontCode.GDNewObject5Objects1= [];
gdjs.FrontCode.GDNewObject5Objects2= [];
gdjs.FrontCode.GDNewObject6Objects1= [];
gdjs.FrontCode.GDNewObject6Objects2= [];

gdjs.FrontCode.conditionTrue_0 = {val:false};
gdjs.FrontCode.condition0IsTrue_0 = {val:false};
gdjs.FrontCode.condition1IsTrue_0 = {val:false};
gdjs.FrontCode.condition2IsTrue_0 = {val:false};
gdjs.FrontCode.conditionTrue_1 = {val:false};
gdjs.FrontCode.condition0IsTrue_1 = {val:false};
gdjs.FrontCode.condition1IsTrue_1 = {val:false};
gdjs.FrontCode.condition2IsTrue_1 = {val:false};


gdjs.FrontCode.mapOfGDgdjs_46FrontCode_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.FrontCode.GDbuttonObjects1});gdjs.FrontCode.mapOfGDgdjs_46FrontCode_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.FrontCode.GDbuttonObjects1});gdjs.FrontCode.mapOfGDgdjs_46FrontCode_46GDBeginnerObjects1Objects = Hashtable.newFrom({"Beginner": gdjs.FrontCode.GDBeginnerObjects1});gdjs.FrontCode.mapOfGDgdjs_46FrontCode_46GDNormalObjects1Objects = Hashtable.newFrom({"Normal": gdjs.FrontCode.GDNormalObjects1});gdjs.FrontCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.FrontCode.condition0IsTrue_0.val = false;
{
{gdjs.FrontCode.conditionTrue_1 = gdjs.FrontCode.condition0IsTrue_0;
gdjs.FrontCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8805908);
}
}if (gdjs.FrontCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "My Demons - Starset - (fan lyric video).mp3", 0, true, 30, 1);
}}

}


{

gdjs.FrontCode.GDbuttonObjects1.createFrom(runtimeScene.getObjects("button"));

gdjs.FrontCode.condition0IsTrue_0.val = false;
{
gdjs.FrontCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FrontCode.mapOfGDgdjs_46FrontCode_46GDbuttonObjects1Objects, runtimeScene, true, true);
}if (gdjs.FrontCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FrontCode.GDbuttonObjects1 */
{for(var i = 0, len = gdjs.FrontCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.FrontCode.GDbuttonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.FrontCode.GDbuttonObjects1.createFrom(runtimeScene.getObjects("button"));

gdjs.FrontCode.condition0IsTrue_0.val = false;
{
gdjs.FrontCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FrontCode.mapOfGDgdjs_46FrontCode_46GDbuttonObjects1Objects, runtimeScene, true, false);
}if (gdjs.FrontCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FrontCode.GDbuttonObjects1 */
{for(var i = 0, len = gdjs.FrontCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.FrontCode.GDbuttonObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.FrontCode.GDBeginnerObjects1.createFrom(runtimeScene.getObjects("Beginner"));

gdjs.FrontCode.condition0IsTrue_0.val = false;
gdjs.FrontCode.condition1IsTrue_0.val = false;
{
gdjs.FrontCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FrontCode.mapOfGDgdjs_46FrontCode_46GDBeginnerObjects1Objects, runtimeScene, true, false);
}if ( gdjs.FrontCode.condition0IsTrue_0.val ) {
{
gdjs.FrontCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.FrontCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Beginner", true);
}}

}


{

gdjs.FrontCode.GDNormalObjects1.createFrom(runtimeScene.getObjects("Normal"));

gdjs.FrontCode.condition0IsTrue_0.val = false;
gdjs.FrontCode.condition1IsTrue_0.val = false;
{
gdjs.FrontCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FrontCode.mapOfGDgdjs_46FrontCode_46GDNormalObjects1Objects, runtimeScene, true, false);
}if ( gdjs.FrontCode.condition0IsTrue_0.val ) {
{
gdjs.FrontCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.FrontCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Normal", true);
}}

}


}; //End of gdjs.FrontCode.eventsList0x5b70b8


gdjs.FrontCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FrontCode.GDblackObjects1.length = 0;
gdjs.FrontCode.GDblackObjects2.length = 0;
gdjs.FrontCode.GDbuttonObjects1.length = 0;
gdjs.FrontCode.GDbuttonObjects2.length = 0;
gdjs.FrontCode.GDTitleObjects1.length = 0;
gdjs.FrontCode.GDTitleObjects2.length = 0;
gdjs.FrontCode.GDNormalObjects1.length = 0;
gdjs.FrontCode.GDNormalObjects2.length = 0;
gdjs.FrontCode.GDBeginnerObjects1.length = 0;
gdjs.FrontCode.GDBeginnerObjects2.length = 0;
gdjs.FrontCode.GDDiscriptionObjects1.length = 0;
gdjs.FrontCode.GDDiscriptionObjects2.length = 0;
gdjs.FrontCode.GDNewObjectObjects1.length = 0;
gdjs.FrontCode.GDNewObjectObjects2.length = 0;
gdjs.FrontCode.GDNewObject2Objects1.length = 0;
gdjs.FrontCode.GDNewObject2Objects2.length = 0;
gdjs.FrontCode.GDNewObject3Objects1.length = 0;
gdjs.FrontCode.GDNewObject3Objects2.length = 0;
gdjs.FrontCode.GDDescription2Objects1.length = 0;
gdjs.FrontCode.GDDescription2Objects2.length = 0;
gdjs.FrontCode.GDNewObject4Objects1.length = 0;
gdjs.FrontCode.GDNewObject4Objects2.length = 0;
gdjs.FrontCode.GDStoryObjects1.length = 0;
gdjs.FrontCode.GDStoryObjects2.length = 0;
gdjs.FrontCode.GDNewObject5Objects1.length = 0;
gdjs.FrontCode.GDNewObject5Objects2.length = 0;
gdjs.FrontCode.GDNewObject6Objects1.length = 0;
gdjs.FrontCode.GDNewObject6Objects2.length = 0;

gdjs.FrontCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['FrontCode'] = gdjs.FrontCode;
