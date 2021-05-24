gdjs.RollCode = {};
gdjs.RollCode.GDTxt2Objects1= [];
gdjs.RollCode.GDTxt2Objects2= [];
gdjs.RollCode.GDTxtObjects1= [];
gdjs.RollCode.GDTxtObjects2= [];
gdjs.RollCode.GDNewObjectObjects1= [];
gdjs.RollCode.GDNewObjectObjects2= [];

gdjs.RollCode.conditionTrue_0 = {val:false};
gdjs.RollCode.condition0IsTrue_0 = {val:false};
gdjs.RollCode.condition1IsTrue_0 = {val:false};
gdjs.RollCode.condition2IsTrue_0 = {val:false};


gdjs.RollCode.userFunc0x6ded70 = function(runtimeScene) {
"use strict";
const box1 = runtimeScene.getObjects("Txt")[0]
const box2 = runtimeScene.getObjects("Txt2")[0]
const roll1 = Math.floor((Math.random()*21)+1)
const roll2 = Math.floor((Math.random()*100)+1)

if(roll1>=1 && roll1<=6){
    box1.setString("1")
}
else if(roll1>=7 && roll1<=11){
    box1.setString("2")
}
else if(roll1>=12 && roll1<=15){
    box1.setString("3")
}
else if(roll1>=16 && roll1<=18){
    box1.setString("4")
}
else if(roll1>=19 && roll1<=20){
    box1.setString("5")
}
else if(roll1==21){
    box1.setString("6")
}

if(roll2>=1 && roll2<=50){
    box2.setString("0")
}
else if(roll2>=51 && roll2<=75){
    box2.setString("1")
}
else if(roll2>=76 && roll2<=100){
    box2.setString("2")
}


};
gdjs.RollCode.eventsList0 = function(runtimeScene) {

{


gdjs.RollCode.userFunc0x6ded70(runtimeScene);

}


};gdjs.RollCode.eventsList1 = function(runtimeScene) {

{


gdjs.RollCode.condition0IsTrue_0.val = false;
{
gdjs.RollCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.RollCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.RollCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Txt"), gdjs.RollCode.GDTxtObjects1);

gdjs.RollCode.condition0IsTrue_0.val = false;
gdjs.RollCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.RollCode.GDTxtObjects1.length;i<l;++i) {
    if ( gdjs.RollCode.GDTxtObjects1[i].getString() != "?" ) {
        gdjs.RollCode.condition0IsTrue_0.val = true;
        gdjs.RollCode.GDTxtObjects1[k] = gdjs.RollCode.GDTxtObjects1[i];
        ++k;
    }
}
gdjs.RollCode.GDTxtObjects1.length = k;}if ( gdjs.RollCode.condition0IsTrue_0.val ) {
{
gdjs.RollCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), false);
}}
if (gdjs.RollCode.condition1IsTrue_0.val) {
/* Reuse gdjs.RollCode.GDTxtObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Txt2"), gdjs.RollCode.GDTxt2Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setString((( gdjs.RollCode.GDTxtObjects1.length === 0 ) ? "" :gdjs.RollCode.GDTxtObjects1[0].getString()));
}{runtimeScene.getGame().getVariables().getFromIndex(3).setString((( gdjs.RollCode.GDTxt2Objects1.length === 0 ) ? "" :gdjs.RollCode.GDTxt2Objects1[0].getString()));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowRoll");
}{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getVariables().getFromIndex(0), true);
}}

}


{


gdjs.RollCode.condition0IsTrue_0.val = false;
{
gdjs.RollCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "ShowRoll");
}if (gdjs.RollCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.RollCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RollCode.GDTxt2Objects1.length = 0;
gdjs.RollCode.GDTxt2Objects2.length = 0;
gdjs.RollCode.GDTxtObjects1.length = 0;
gdjs.RollCode.GDTxtObjects2.length = 0;
gdjs.RollCode.GDNewObjectObjects1.length = 0;
gdjs.RollCode.GDNewObjectObjects2.length = 0;

gdjs.RollCode.eventsList1(runtimeScene);
return;

}

gdjs['RollCode'] = gdjs.RollCode;
