gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDMainCharacterObjects1_1final = [];

gdjs.New_32sceneCode.GDBackgroundObjects1= [];
gdjs.New_32sceneCode.GDBackgroundObjects2= [];
gdjs.New_32sceneCode.GDBackgroundObjects3= [];
gdjs.New_32sceneCode.GDHomeObjects1= [];
gdjs.New_32sceneCode.GDHomeObjects2= [];
gdjs.New_32sceneCode.GDHomeObjects3= [];
gdjs.New_32sceneCode.GDTreeObjects1= [];
gdjs.New_32sceneCode.GDTreeObjects2= [];
gdjs.New_32sceneCode.GDTreeObjects3= [];
gdjs.New_32sceneCode.GDHoleObjects1= [];
gdjs.New_32sceneCode.GDHoleObjects2= [];
gdjs.New_32sceneCode.GDHoleObjects3= [];
gdjs.New_32sceneCode.GDMainCharacterObjects1= [];
gdjs.New_32sceneCode.GDMainCharacterObjects2= [];
gdjs.New_32sceneCode.GDMainCharacterObjects3= [];
gdjs.New_32sceneCode.GDArrowObjects1= [];
gdjs.New_32sceneCode.GDArrowObjects2= [];
gdjs.New_32sceneCode.GDArrowObjects3= [];
gdjs.New_32sceneCode.GDCannonObjects1= [];
gdjs.New_32sceneCode.GDCannonObjects2= [];
gdjs.New_32sceneCode.GDCannonObjects3= [];
gdjs.New_32sceneCode.GDBulletObjects1= [];
gdjs.New_32sceneCode.GDBulletObjects2= [];
gdjs.New_32sceneCode.GDBulletObjects3= [];
gdjs.New_32sceneCode.GDEnemyObjects1= [];
gdjs.New_32sceneCode.GDEnemyObjects2= [];
gdjs.New_32sceneCode.GDEnemyObjects3= [];
gdjs.New_32sceneCode.GDRopeObjects1= [];
gdjs.New_32sceneCode.GDRopeObjects2= [];
gdjs.New_32sceneCode.GDRopeObjects3= [];
gdjs.New_32sceneCode.GDBulletsObjects1= [];
gdjs.New_32sceneCode.GDBulletsObjects2= [];
gdjs.New_32sceneCode.GDBulletsObjects3= [];
gdjs.New_32sceneCode.GDBulletIconObjects1= [];
gdjs.New_32sceneCode.GDBulletIconObjects2= [];
gdjs.New_32sceneCode.GDBulletIconObjects3= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition3IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition4IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition5IsTrue_0 = {val:false};
gdjs.New_32sceneCode.conditionTrue_1 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition3IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition4IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition5IsTrue_1 = {val:false};


gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDMainCharacterObjects1Objects = Hashtable.newFrom({"MainCharacter": gdjs.New_32sceneCode.GDMainCharacterObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTreeObjects1Objects = Hashtable.newFrom({"Tree": gdjs.New_32sceneCode.GDTreeObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDMainCharacterObjects1Objects = Hashtable.newFrom({"MainCharacter": gdjs.New_32sceneCode.GDMainCharacterObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDHomeObjects1Objects = Hashtable.newFrom({"Home": gdjs.New_32sceneCode.GDHomeObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDMainCharacterObjects1Objects = Hashtable.newFrom({"MainCharacter": gdjs.New_32sceneCode.GDMainCharacterObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDHoleObjects1Objects = Hashtable.newFrom({"Hole": gdjs.New_32sceneCode.GDHoleObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.New_32sceneCode.GDBulletObjects1});gdjs.New_32sceneCode.eventsList0x6d2044 = function(runtimeScene) {

{

gdjs.New_32sceneCode.GDArrowObjects2.createFrom(runtimeScene.getObjects("Arrow"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDArrowObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDArrowObjects2[i].getAnimation() == 0 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDArrowObjects2[k] = gdjs.New_32sceneCode.GDArrowObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDArrowObjects2.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDBulletObjects2.createFrom(gdjs.New_32sceneCode.GDBulletObjects1);

gdjs.New_32sceneCode.GDMainCharacterObjects2.createFrom(runtimeScene.getObjects("MainCharacter"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBulletObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBulletObjects2[i].putAroundObject((gdjs.New_32sceneCode.GDMainCharacterObjects2.length !== 0 ? gdjs.New_32sceneCode.GDMainCharacterObjects2[0] : null), 64, 0);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBulletObjects2[i].addPolarForce(0, 400, 1);
}
}}

}


{

gdjs.New_32sceneCode.GDArrowObjects2.createFrom(runtimeScene.getObjects("Arrow"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDArrowObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDArrowObjects2[i].getAnimation() == 1 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDArrowObjects2[k] = gdjs.New_32sceneCode.GDArrowObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDArrowObjects2.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDBulletObjects2.createFrom(gdjs.New_32sceneCode.GDBulletObjects1);

gdjs.New_32sceneCode.GDMainCharacterObjects2.createFrom(runtimeScene.getObjects("MainCharacter"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBulletObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBulletObjects2[i].putAroundObject((gdjs.New_32sceneCode.GDMainCharacterObjects2.length !== 0 ? gdjs.New_32sceneCode.GDMainCharacterObjects2[0] : null), 64, 270);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBulletObjects2[i].addPolarForce(270, 400, 1);
}
}}

}


{

gdjs.New_32sceneCode.GDArrowObjects2.createFrom(runtimeScene.getObjects("Arrow"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDArrowObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDArrowObjects2[i].getAnimation() == 2 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDArrowObjects2[k] = gdjs.New_32sceneCode.GDArrowObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDArrowObjects2.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDBulletObjects2.createFrom(gdjs.New_32sceneCode.GDBulletObjects1);

gdjs.New_32sceneCode.GDMainCharacterObjects2.createFrom(runtimeScene.getObjects("MainCharacter"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBulletObjects2[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBulletObjects2[i].putAroundObject((gdjs.New_32sceneCode.GDMainCharacterObjects2.length !== 0 ? gdjs.New_32sceneCode.GDMainCharacterObjects2[0] : null), 64, 180);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBulletObjects2[i].addPolarForce(180, 400, 1);
}
}}

}


{

gdjs.New_32sceneCode.GDArrowObjects1.createFrom(runtimeScene.getObjects("Arrow"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDArrowObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDArrowObjects1[i].getAnimation() == 3 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDArrowObjects1[k] = gdjs.New_32sceneCode.GDArrowObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDArrowObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDBulletObjects1 */
gdjs.New_32sceneCode.GDMainCharacterObjects1.createFrom(runtimeScene.getObjects("MainCharacter"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBulletObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBulletObjects1[i].putAroundObject((gdjs.New_32sceneCode.GDMainCharacterObjects1.length !== 0 ? gdjs.New_32sceneCode.GDMainCharacterObjects1[0] : null), 64, 90);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBulletObjects1[i].addPolarForce(90, 400, 1);
}
}}

}


}; //End of gdjs.New_32sceneCode.eventsList0x6d2044
gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDRopeObjects1Objects = Hashtable.newFrom({"Rope": gdjs.New_32sceneCode.GDRopeObjects1});gdjs.New_32sceneCode.eventsList0x6d3174 = function(runtimeScene) {

{

gdjs.New_32sceneCode.GDArrowObjects2.createFrom(runtimeScene.getObjects("Arrow"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDArrowObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDArrowObjects2[i].getAnimation() == 0 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDArrowObjects2[k] = gdjs.New_32sceneCode.GDArrowObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDArrowObjects2.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDMainCharacterObjects2.createFrom(runtimeScene.getObjects("MainCharacter"));
gdjs.New_32sceneCode.GDRopeObjects2.createFrom(gdjs.New_32sceneCode.GDRopeObjects1);

{for(var i = 0, len = gdjs.New_32sceneCode.GDRopeObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDRopeObjects2[i].rotateTowardAngle(0, 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDRopeObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDRopeObjects2[i].putAroundObject((gdjs.New_32sceneCode.GDMainCharacterObjects2.length !== 0 ? gdjs.New_32sceneCode.GDMainCharacterObjects2[0] : null), 240, 0);
}
}}

}


{

gdjs.New_32sceneCode.GDArrowObjects2.createFrom(runtimeScene.getObjects("Arrow"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDArrowObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDArrowObjects2[i].getAnimation() == 1 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDArrowObjects2[k] = gdjs.New_32sceneCode.GDArrowObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDArrowObjects2.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDMainCharacterObjects2.createFrom(runtimeScene.getObjects("MainCharacter"));
gdjs.New_32sceneCode.GDRopeObjects2.createFrom(gdjs.New_32sceneCode.GDRopeObjects1);

{for(var i = 0, len = gdjs.New_32sceneCode.GDRopeObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDRopeObjects2[i].rotateTowardAngle(270, 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDRopeObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDRopeObjects2[i].putAroundObject((gdjs.New_32sceneCode.GDMainCharacterObjects2.length !== 0 ? gdjs.New_32sceneCode.GDMainCharacterObjects2[0] : null), 240, 270);
}
}}

}


{

gdjs.New_32sceneCode.GDArrowObjects2.createFrom(runtimeScene.getObjects("Arrow"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDArrowObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDArrowObjects2[i].getAnimation() == 2 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDArrowObjects2[k] = gdjs.New_32sceneCode.GDArrowObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDArrowObjects2.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDMainCharacterObjects2.createFrom(runtimeScene.getObjects("MainCharacter"));
gdjs.New_32sceneCode.GDRopeObjects2.createFrom(gdjs.New_32sceneCode.GDRopeObjects1);

{for(var i = 0, len = gdjs.New_32sceneCode.GDRopeObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDRopeObjects2[i].rotateTowardAngle(180, 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDRopeObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDRopeObjects2[i].putAroundObject((gdjs.New_32sceneCode.GDMainCharacterObjects2.length !== 0 ? gdjs.New_32sceneCode.GDMainCharacterObjects2[0] : null), 240, 180);
}
}}

}


{

gdjs.New_32sceneCode.GDArrowObjects1.createFrom(runtimeScene.getObjects("Arrow"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDArrowObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDArrowObjects1[i].getAnimation() == 3 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDArrowObjects1[k] = gdjs.New_32sceneCode.GDArrowObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDArrowObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDMainCharacterObjects1.createFrom(runtimeScene.getObjects("MainCharacter"));
/* Reuse gdjs.New_32sceneCode.GDRopeObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDRopeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDRopeObjects1[i].rotateTowardAngle(90, 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDRopeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDRopeObjects1[i].putAroundObject((gdjs.New_32sceneCode.GDMainCharacterObjects1.length !== 0 ? gdjs.New_32sceneCode.GDMainCharacterObjects1[0] : null), 240, 90);
}
}}

}


}; //End of gdjs.New_32sceneCode.eventsList0x6d3174
gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.New_32sceneCode.GDEnemyObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.New_32sceneCode.GDBulletObjects1});gdjs.New_32sceneCode.eventsList0x718284 = function(runtimeScene) {

{

/* Reuse gdjs.New_32sceneCode.GDEnemyObjects1 */

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDEnemyObjects1[i].timerElapsedTime("Stun", 4) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDEnemyObjects1[k] = gdjs.New_32sceneCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDEnemyObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDEnemyObjects1[i].returnVariable(gdjs.New_32sceneCode.GDEnemyObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDEnemyObjects1[i].pauseTimer("Stun");
}
}}

}


}; //End of gdjs.New_32sceneCode.eventsList0x718284
gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDRopeObjects1Objects = Hashtable.newFrom({"Rope": gdjs.New_32sceneCode.GDRopeObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.New_32sceneCode.GDEnemyObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.New_32sceneCode.GDEnemyObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDHoleObjects1Objects = Hashtable.newFrom({"Hole": gdjs.New_32sceneCode.GDHoleObjects1});gdjs.New_32sceneCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition0IsTrue_0;
gdjs.New_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8000372);
}
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDArrowObjects1.createFrom(runtimeScene.getObjects("Arrow"));
gdjs.New_32sceneCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.New_32sceneCode.GDMainCharacterObjects1.createFrom(runtimeScene.getObjects("MainCharacter"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDArrowObjects1[i].putAroundObject((gdjs.New_32sceneCode.GDMainCharacterObjects1.length !== 0 ? gdjs.New_32sceneCode.GDMainCharacterObjects1[0] : null), 64, 0);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDEnemyObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, 576, 128);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "My Demons - Starset - (fan lyric video).mp3", 0, true, 50, 1);
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
gdjs.New_32sceneCode.condition2IsTrue_0.val = false;
gdjs.New_32sceneCode.condition3IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left"));
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right"));
}if ( gdjs.New_32sceneCode.condition1IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition2IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up"));
}if ( gdjs.New_32sceneCode.condition2IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition3IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}}
}
}
if (gdjs.New_32sceneCode.condition3IsTrue_0.val) {
gdjs.New_32sceneCode.GDMainCharacterObjects1.createFrom(runtimeScene.getObjects("MainCharacter"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDMainCharacterObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDArrowObjects1.createFrom(runtimeScene.getObjects("Arrow"));
gdjs.New_32sceneCode.GDMainCharacterObjects1.createFrom(runtimeScene.getObjects("MainCharacter"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDMainCharacterObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDArrowObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDArrowObjects1[i].setHeight(128);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDArrowObjects1[i].setWidth(64);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDArrowObjects1[i].putAroundObject((gdjs.New_32sceneCode.GDMainCharacterObjects1.length !== 0 ? gdjs.New_32sceneCode.GDMainCharacterObjects1[0] : null), 64, 180);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDArrowObjects1.createFrom(runtimeScene.getObjects("Arrow"));
gdjs.New_32sceneCode.GDMainCharacterObjects1.createFrom(runtimeScene.getObjects("MainCharacter"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDMainCharacterObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDArrowObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDArrowObjects1[i].setHeight(128);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDArrowObjects1[i].setWidth(64);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDArrowObjects1[i].putAroundObject((gdjs.New_32sceneCode.GDMainCharacterObjects1.length !== 0 ? gdjs.New_32sceneCode.GDMainCharacterObjects1[0] : null), 64, 0);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDArrowObjects1.createFrom(runtimeScene.getObjects("Arrow"));
gdjs.New_32sceneCode.GDMainCharacterObjects1.createFrom(runtimeScene.getObjects("MainCharacter"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDMainCharacterObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDArrowObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDArrowObjects1[i].setHeight(64);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDArrowObjects1[i].setWidth(128);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDArrowObjects1[i].putAroundObject((gdjs.New_32sceneCode.GDMainCharacterObjects1.length !== 0 ? gdjs.New_32sceneCode.GDMainCharacterObjects1[0] : null), 64, 270);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDArrowObjects1.createFrom(runtimeScene.getObjects("Arrow"));
gdjs.New_32sceneCode.GDMainCharacterObjects1.createFrom(runtimeScene.getObjects("MainCharacter"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDMainCharacterObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDArrowObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDArrowObjects1[i].setHeight(64);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDArrowObjects1[i].setWidth(128);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDArrowObjects1[i].putAroundObject((gdjs.New_32sceneCode.GDMainCharacterObjects1.length !== 0 ? gdjs.New_32sceneCode.GDMainCharacterObjects1[0] : null), 64, 90);
}
}}

}


{


{
gdjs.New_32sceneCode.GDHoleObjects1.createFrom(runtimeScene.getObjects("Hole"));
gdjs.New_32sceneCode.GDHomeObjects1.createFrom(runtimeScene.getObjects("Home"));
gdjs.New_32sceneCode.GDMainCharacterObjects1.createFrom(runtimeScene.getObjects("MainCharacter"));
gdjs.New_32sceneCode.GDTreeObjects1.createFrom(runtimeScene.getObjects("Tree"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDMainCharacterObjects1[i].returnVariable(gdjs.New_32sceneCode.GDMainCharacterObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{gdjs.evtsExt__Collision__CharacterCollision.func(runtimeScene, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDMainCharacterObjects1Objects, "TopDownMovement", gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTreeObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__Collision__CharacterCollision.func(runtimeScene, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDMainCharacterObjects1Objects, "TopDownMovement", gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDHomeObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__Collision__CharacterCollision.func(runtimeScene, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDMainCharacterObjects1Objects, "TopDownMovement", gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDHoleObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.New_32sceneCode.GDMainCharacterObjects1.createFrom(runtimeScene.getObjects("MainCharacter"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDMainCharacterObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDMainCharacterObjects1[i].getVariableNumber(gdjs.New_32sceneCode.GDMainCharacterObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDMainCharacterObjects1[k] = gdjs.New_32sceneCode.GDMainCharacterObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDMainCharacterObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDMainCharacterObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDMainCharacterObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(200);
}
}}

}


{

gdjs.New_32sceneCode.GDMainCharacterObjects1.length = 0;


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition0IsTrue_0;
gdjs.New_32sceneCode.GDMainCharacterObjects1_1final.length = 0;gdjs.New_32sceneCode.condition0IsTrue_1.val = false;
gdjs.New_32sceneCode.condition1IsTrue_1.val = false;
gdjs.New_32sceneCode.condition2IsTrue_1.val = false;
gdjs.New_32sceneCode.condition3IsTrue_1.val = false;
gdjs.New_32sceneCode.condition4IsTrue_1.val = false;
{
gdjs.New_32sceneCode.GDMainCharacterObjects2.createFrom(runtimeScene.getObjects("MainCharacter"));
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDMainCharacterObjects2.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDMainCharacterObjects2[i].getVariableNumber(gdjs.New_32sceneCode.GDMainCharacterObjects2[i].getVariables().getFromIndex(0)) == 0) ) {
        gdjs.New_32sceneCode.condition0IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDMainCharacterObjects2[k] = gdjs.New_32sceneCode.GDMainCharacterObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDMainCharacterObjects2.length = k;if( gdjs.New_32sceneCode.condition0IsTrue_1.val ) {
    gdjs.New_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.New_32sceneCode.GDMainCharacterObjects2.length;j<jLen;++j) {
        if ( gdjs.New_32sceneCode.GDMainCharacterObjects1_1final.indexOf(gdjs.New_32sceneCode.GDMainCharacterObjects2[j]) === -1 )
            gdjs.New_32sceneCode.GDMainCharacterObjects1_1final.push(gdjs.New_32sceneCode.GDMainCharacterObjects2[j]);
    }
}
}
{
gdjs.New_32sceneCode.GDMainCharacterObjects2.createFrom(runtimeScene.getObjects("MainCharacter"));
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDMainCharacterObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDMainCharacterObjects2[i].getX() <= -(20) ) {
        gdjs.New_32sceneCode.condition1IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDMainCharacterObjects2[k] = gdjs.New_32sceneCode.GDMainCharacterObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDMainCharacterObjects2.length = k;if( gdjs.New_32sceneCode.condition1IsTrue_1.val ) {
    gdjs.New_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.New_32sceneCode.GDMainCharacterObjects2.length;j<jLen;++j) {
        if ( gdjs.New_32sceneCode.GDMainCharacterObjects1_1final.indexOf(gdjs.New_32sceneCode.GDMainCharacterObjects2[j]) === -1 )
            gdjs.New_32sceneCode.GDMainCharacterObjects1_1final.push(gdjs.New_32sceneCode.GDMainCharacterObjects2[j]);
    }
}
}
{
gdjs.New_32sceneCode.GDMainCharacterObjects2.createFrom(runtimeScene.getObjects("MainCharacter"));
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDMainCharacterObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDMainCharacterObjects2[i].getX() >= 1180 ) {
        gdjs.New_32sceneCode.condition2IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDMainCharacterObjects2[k] = gdjs.New_32sceneCode.GDMainCharacterObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDMainCharacterObjects2.length = k;if( gdjs.New_32sceneCode.condition2IsTrue_1.val ) {
    gdjs.New_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.New_32sceneCode.GDMainCharacterObjects2.length;j<jLen;++j) {
        if ( gdjs.New_32sceneCode.GDMainCharacterObjects1_1final.indexOf(gdjs.New_32sceneCode.GDMainCharacterObjects2[j]) === -1 )
            gdjs.New_32sceneCode.GDMainCharacterObjects1_1final.push(gdjs.New_32sceneCode.GDMainCharacterObjects2[j]);
    }
}
}
{
gdjs.New_32sceneCode.GDMainCharacterObjects2.createFrom(runtimeScene.getObjects("MainCharacter"));
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDMainCharacterObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDMainCharacterObjects2[i].getY() <= 0 ) {
        gdjs.New_32sceneCode.condition3IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDMainCharacterObjects2[k] = gdjs.New_32sceneCode.GDMainCharacterObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDMainCharacterObjects2.length = k;if( gdjs.New_32sceneCode.condition3IsTrue_1.val ) {
    gdjs.New_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.New_32sceneCode.GDMainCharacterObjects2.length;j<jLen;++j) {
        if ( gdjs.New_32sceneCode.GDMainCharacterObjects1_1final.indexOf(gdjs.New_32sceneCode.GDMainCharacterObjects2[j]) === -1 )
            gdjs.New_32sceneCode.GDMainCharacterObjects1_1final.push(gdjs.New_32sceneCode.GDMainCharacterObjects2[j]);
    }
}
}
{
gdjs.New_32sceneCode.GDMainCharacterObjects2.createFrom(runtimeScene.getObjects("MainCharacter"));
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDMainCharacterObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDMainCharacterObjects2[i].getY() >= 832 ) {
        gdjs.New_32sceneCode.condition4IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDMainCharacterObjects2[k] = gdjs.New_32sceneCode.GDMainCharacterObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDMainCharacterObjects2.length = k;if( gdjs.New_32sceneCode.condition4IsTrue_1.val ) {
    gdjs.New_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.New_32sceneCode.GDMainCharacterObjects2.length;j<jLen;++j) {
        if ( gdjs.New_32sceneCode.GDMainCharacterObjects1_1final.indexOf(gdjs.New_32sceneCode.GDMainCharacterObjects2[j]) === -1 )
            gdjs.New_32sceneCode.GDMainCharacterObjects1_1final.push(gdjs.New_32sceneCode.GDMainCharacterObjects2[j]);
    }
}
}
{
gdjs.New_32sceneCode.GDMainCharacterObjects1.createFrom(gdjs.New_32sceneCode.GDMainCharacterObjects1_1final);
}
}
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDMainCharacterObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDMainCharacterObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(-(10));
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition1IsTrue_0;
gdjs.New_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7151724);
}
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
gdjs.New_32sceneCode.GDBulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBulletObjects1Objects, 100, 100, "");
}{for(var i = 0, len = gdjs.New_32sceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBulletObjects1[i].setZOrder(99);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBulletObjects1[i].setHeight(64);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBulletObjects1[i].setWidth(64);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBulletObjects1[i].clearForces();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "shoot.mp3", false, 100, 1);
}
{ //Subevents
gdjs.New_32sceneCode.eventsList0x6d2044(runtimeScene);} //End of subevents
}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition1IsTrue_0;
gdjs.New_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7156284);
}
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
gdjs.New_32sceneCode.GDRopeObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDRopeObjects1Objects, 100, 100, "");
}{for(var i = 0, len = gdjs.New_32sceneCode.GDRopeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDRopeObjects1[i].setZOrder(99);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDRopeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDRopeObjects1[i].setWidth(384);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDRopeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDRopeObjects1[i].setAnimation(0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "swing.mp3", false, 100, 1);
}
{ //Subevents
gdjs.New_32sceneCode.eventsList0x6d3174(runtimeScene);} //End of subevents
}

}


{

gdjs.New_32sceneCode.GDRopeObjects1.createFrom(runtimeScene.getObjects("Rope"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
gdjs.New_32sceneCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDRopeObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDRopeObjects1[i].getAnimation() == 0 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDRopeObjects1[k] = gdjs.New_32sceneCode.GDRopeObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDRopeObjects1.length = k;}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDRopeObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDRopeObjects1[i].hasAnimationEnded() ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDRopeObjects1[k] = gdjs.New_32sceneCode.GDRopeObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDRopeObjects1.length = k;}if ( gdjs.New_32sceneCode.condition1IsTrue_0.val ) {
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition2IsTrue_0;
gdjs.New_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7437316);
}
}}
}
if (gdjs.New_32sceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDRopeObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDRopeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDRopeObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.New_32sceneCode.GDRopeObjects1.createFrom(runtimeScene.getObjects("Rope"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
gdjs.New_32sceneCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDRopeObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDRopeObjects1[i].getAnimation() == 1 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDRopeObjects1[k] = gdjs.New_32sceneCode.GDRopeObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDRopeObjects1.length = k;}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDRopeObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDRopeObjects1[i].hasAnimationEnded() ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDRopeObjects1[k] = gdjs.New_32sceneCode.GDRopeObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDRopeObjects1.length = k;}if ( gdjs.New_32sceneCode.condition1IsTrue_0.val ) {
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition2IsTrue_0;
gdjs.New_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7438020);
}
}}
}
if (gdjs.New_32sceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDRopeObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDRopeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDRopeObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.New_32sceneCode.GDBulletObjects1.createFrom(runtimeScene.getObjects("Bullet"));
gdjs.New_32sceneCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDEnemyObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBulletObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDBulletObjects1 */
/* Reuse gdjs.New_32sceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDEnemyObjects1[i].returnVariable(gdjs.New_32sceneCode.GDEnemyObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}}

}


{

gdjs.New_32sceneCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDEnemyObjects1[i].getVariableNumber(gdjs.New_32sceneCode.GDEnemyObjects1[i].getVariables().getFromIndex(0)) >= 4 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDEnemyObjects1[k] = gdjs.New_32sceneCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDEnemyObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDEnemyObjects1[i].getBehavior("Pathfinding").setSpeed(0);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDEnemyObjects1[i].resetTimer("Stun");
}
}
{ //Subevents
gdjs.New_32sceneCode.eventsList0x718284(runtimeScene);} //End of subevents
}

}


{

gdjs.New_32sceneCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.New_32sceneCode.GDRopeObjects1.createFrom(runtimeScene.getObjects("Rope"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDRopeObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDEnemyObjects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDRopeObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDRopeObjects1[i].getAnimation() == 1 ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDRopeObjects1[k] = gdjs.New_32sceneCode.GDRopeObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDRopeObjects1.length = k;}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDEnemyObjects1 */
gdjs.New_32sceneCode.GDMainCharacterObjects1.createFrom(runtimeScene.getObjects("MainCharacter"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDEnemyObjects1[i].activateBehavior("Pathfinding", false);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDEnemyObjects1[i].addForceTowardObject((gdjs.New_32sceneCode.GDMainCharacterObjects1.length !== 0 ? gdjs.New_32sceneCode.GDMainCharacterObjects1[0] : null), 600, 0);
}
}}

}


{

gdjs.New_32sceneCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.New_32sceneCode.GDHoleObjects1.createFrom(runtimeScene.getObjects("Hole"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDEnemyObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDHoleObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDEnemyObjects1 */
/* Reuse gdjs.New_32sceneCode.GDHoleObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDEnemyObjects1[i].setScale(gdjs.New_32sceneCode.GDEnemyObjects1[i].getScale() * (0.8));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDEnemyObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDEnemyObjects1[i].putAroundObject((gdjs.New_32sceneCode.GDHoleObjects1.length !== 0 ? gdjs.New_32sceneCode.GDHoleObjects1[0] : null), 0, 0);
}
}}

}


{

gdjs.New_32sceneCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDEnemyObjects1[i].getScaleY() <= 0.5 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDEnemyObjects1[k] = gdjs.New_32sceneCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDEnemyObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.New_32sceneCode.eventsList0x5b70b8


gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDBackgroundObjects1.length = 0;
gdjs.New_32sceneCode.GDBackgroundObjects2.length = 0;
gdjs.New_32sceneCode.GDBackgroundObjects3.length = 0;
gdjs.New_32sceneCode.GDHomeObjects1.length = 0;
gdjs.New_32sceneCode.GDHomeObjects2.length = 0;
gdjs.New_32sceneCode.GDHomeObjects3.length = 0;
gdjs.New_32sceneCode.GDTreeObjects1.length = 0;
gdjs.New_32sceneCode.GDTreeObjects2.length = 0;
gdjs.New_32sceneCode.GDTreeObjects3.length = 0;
gdjs.New_32sceneCode.GDHoleObjects1.length = 0;
gdjs.New_32sceneCode.GDHoleObjects2.length = 0;
gdjs.New_32sceneCode.GDHoleObjects3.length = 0;
gdjs.New_32sceneCode.GDMainCharacterObjects1.length = 0;
gdjs.New_32sceneCode.GDMainCharacterObjects2.length = 0;
gdjs.New_32sceneCode.GDMainCharacterObjects3.length = 0;
gdjs.New_32sceneCode.GDArrowObjects1.length = 0;
gdjs.New_32sceneCode.GDArrowObjects2.length = 0;
gdjs.New_32sceneCode.GDArrowObjects3.length = 0;
gdjs.New_32sceneCode.GDCannonObjects1.length = 0;
gdjs.New_32sceneCode.GDCannonObjects2.length = 0;
gdjs.New_32sceneCode.GDCannonObjects3.length = 0;
gdjs.New_32sceneCode.GDBulletObjects1.length = 0;
gdjs.New_32sceneCode.GDBulletObjects2.length = 0;
gdjs.New_32sceneCode.GDBulletObjects3.length = 0;
gdjs.New_32sceneCode.GDEnemyObjects1.length = 0;
gdjs.New_32sceneCode.GDEnemyObjects2.length = 0;
gdjs.New_32sceneCode.GDEnemyObjects3.length = 0;
gdjs.New_32sceneCode.GDRopeObjects1.length = 0;
gdjs.New_32sceneCode.GDRopeObjects2.length = 0;
gdjs.New_32sceneCode.GDRopeObjects3.length = 0;
gdjs.New_32sceneCode.GDBulletsObjects1.length = 0;
gdjs.New_32sceneCode.GDBulletsObjects2.length = 0;
gdjs.New_32sceneCode.GDBulletsObjects3.length = 0;
gdjs.New_32sceneCode.GDBulletIconObjects1.length = 0;
gdjs.New_32sceneCode.GDBulletIconObjects2.length = 0;
gdjs.New_32sceneCode.GDBulletIconObjects3.length = 0;

gdjs.New_32sceneCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
