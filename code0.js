gdjs.StartScreenCode = {};
gdjs.StartScreenCode.GDchooseateamObjects1= [];
gdjs.StartScreenCode.GDchooseateamObjects2= [];
gdjs.StartScreenCode.GDGREENBUTTONObjects1= [];
gdjs.StartScreenCode.GDGREENBUTTONObjects2= [];
gdjs.StartScreenCode.GDYELLOWBUTTONObjects1= [];
gdjs.StartScreenCode.GDYELLOWBUTTONObjects2= [];
gdjs.StartScreenCode.GDBLUEBUTTONObjects1= [];
gdjs.StartScreenCode.GDBLUEBUTTONObjects2= [];
gdjs.StartScreenCode.GDREDBUTTONObjects1= [];
gdjs.StartScreenCode.GDREDBUTTONObjects2= [];
gdjs.StartScreenCode.GDselectedteamObjects1= [];
gdjs.StartScreenCode.GDselectedteamObjects2= [];

gdjs.StartScreenCode.conditionTrue_0 = {val:false};
gdjs.StartScreenCode.condition0IsTrue_0 = {val:false};
gdjs.StartScreenCode.condition1IsTrue_0 = {val:false};
gdjs.StartScreenCode.condition2IsTrue_0 = {val:false};
gdjs.StartScreenCode.condition3IsTrue_0 = {val:false};
gdjs.StartScreenCode.condition4IsTrue_0 = {val:false};


gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDREDBUTTONObjects1Objects = Hashtable.newFrom({"REDBUTTON": gdjs.StartScreenCode.GDREDBUTTONObjects1});gdjs.StartScreenCode.userFunc0x796a50 = function(runtimeScene) {
"use strict";

if(runtimeScene.team==""){
    const data = {
    command: "RED_TAKEN"
    
    }
    runtimeScene.ws.send(JSON.stringify(data))
    runtimeScene.team = "RED"
}

};
gdjs.StartScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.StartScreenCode.userFunc0x796a50(runtimeScene);

}


};gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDYELLOWBUTTONObjects1Objects = Hashtable.newFrom({"YELLOWBUTTON": gdjs.StartScreenCode.GDYELLOWBUTTONObjects1});gdjs.StartScreenCode.userFunc0x77ebd8 = function(runtimeScene) {
"use strict";

if(runtimeScene.team==""){
    const data = {
    command: "YELLOW_TAKEN"
    
    }
    runtimeScene.ws.send(JSON.stringify(data))
    runtimeScene.team = "YELLOW"
}

};
gdjs.StartScreenCode.eventsList1 = function(runtimeScene) {

{


gdjs.StartScreenCode.userFunc0x77ebd8(runtimeScene);

}


};gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDGREENBUTTONObjects1Objects = Hashtable.newFrom({"GREENBUTTON": gdjs.StartScreenCode.GDGREENBUTTONObjects1});gdjs.StartScreenCode.userFunc0x7a3688 = function(runtimeScene) {
"use strict";

if(runtimeScene.team==""){
    const data = {
    command: "GREEN_TAKEN"
    
    }
    runtimeScene.ws.send(JSON.stringify(data))
    runtimeScene.team = "GREEN"
}

};
gdjs.StartScreenCode.eventsList2 = function(runtimeScene) {

{


gdjs.StartScreenCode.userFunc0x7a3688(runtimeScene);

}


};gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDBLUEBUTTONObjects1Objects = Hashtable.newFrom({"BLUEBUTTON": gdjs.StartScreenCode.GDBLUEBUTTONObjects1});gdjs.StartScreenCode.userFunc0x7a3a98 = function(runtimeScene) {
"use strict";

if(runtimeScene.team==""){
    const data = {
    command: "BLUE_TAKEN"
    
    }
    
    runtimeScene.ws.send(JSON.stringify(data))
    runtimeScene.team = "BLUE"
}

};
gdjs.StartScreenCode.eventsList3 = function(runtimeScene) {

{


gdjs.StartScreenCode.userFunc0x7a3a98(runtimeScene);

}


};gdjs.StartScreenCode.userFunc0x71fee8 = function(runtimeScene) {
"use strict";
runtimeScene.team = "";
runtimeScene.ws = new WebSocket("wss://4asmp.ml:443/ws");
};
gdjs.StartScreenCode.eventsList4 = function(runtimeScene) {

{


gdjs.StartScreenCode.userFunc0x71fee8(runtimeScene);

}


};gdjs.StartScreenCode.userFunc0x720068 = function(runtimeScene) {
"use strict";
const redbutton = runtimeScene.getObjects("REDBUTTON");
const bluebutton = runtimeScene.getObjects("BLUEBUTTON");
const yellowbutton = runtimeScene.getObjects("YELLOWBUTTON");
const greenbutton = runtimeScene.getObjects("GREENBUTTON");

const teambox = runtimeScene.getObjects("selectedteam");
runtimeScene.ws.onmessage = function (event) {
    const e = JSON.parse(event.data)
    switch (e.command) {
        case "RED_TAKEN":
            redbutton[0].setX(redbutton[0].getX() + 1)
            
            break;
        case "BLUE_TAKEN":
            bluebutton[0].setX(bluebutton[0].getX()+1)
            break;
        case "GREEN_TAKEN":
            greenbutton[0].setX(greenbutton[0].getX() + 1)
            
            break;
        case "YELLOW_TAKEN":
            yellowbutton[0].setX(yellowbutton[0].getX()+1)
            break;
        default:
            console.log("unknown command: " + e.command)
    }}

switch(runtimeScene.team){
    case "RED":
        redbutton[0].setY(0)
    case "BLUE":
        bluebutton[0].setY(0)
    case "GREEN":
        greenbutton[0].setY(0)
    case "YELLOW":
        yellowbutton[0].setY(0)
    default:
        console.log("nothing!");

}
 
};
gdjs.StartScreenCode.userFunc0x7a5438 = function(runtimeScene) {
"use strict";
runtimeScene.ws.close()
};
gdjs.StartScreenCode.eventsList5 = function(runtimeScene) {

{


gdjs.StartScreenCode.userFunc0x7a5438(runtimeScene);

}


};gdjs.StartScreenCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("REDBUTTON"), gdjs.StartScreenCode.GDREDBUTTONObjects1);

gdjs.StartScreenCode.condition0IsTrue_0.val = false;
gdjs.StartScreenCode.condition1IsTrue_0.val = false;
gdjs.StartScreenCode.condition2IsTrue_0.val = false;
{
gdjs.StartScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDREDBUTTONObjects1Objects, runtimeScene, true, false);
}if ( gdjs.StartScreenCode.condition0IsTrue_0.val ) {
{
gdjs.StartScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.StartScreenCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.StartScreenCode.GDREDBUTTONObjects1.length;i<l;++i) {
    if ( gdjs.StartScreenCode.GDREDBUTTONObjects1[i].getAnimation() == 0 ) {
        gdjs.StartScreenCode.condition2IsTrue_0.val = true;
        gdjs.StartScreenCode.GDREDBUTTONObjects1[k] = gdjs.StartScreenCode.GDREDBUTTONObjects1[i];
        ++k;
    }
}
gdjs.StartScreenCode.GDREDBUTTONObjects1.length = k;}}
}
if (gdjs.StartScreenCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.StartScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("YELLOWBUTTON"), gdjs.StartScreenCode.GDYELLOWBUTTONObjects1);

gdjs.StartScreenCode.condition0IsTrue_0.val = false;
gdjs.StartScreenCode.condition1IsTrue_0.val = false;
gdjs.StartScreenCode.condition2IsTrue_0.val = false;
{
gdjs.StartScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDYELLOWBUTTONObjects1Objects, runtimeScene, true, false);
}if ( gdjs.StartScreenCode.condition0IsTrue_0.val ) {
{
gdjs.StartScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.StartScreenCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.StartScreenCode.GDYELLOWBUTTONObjects1.length;i<l;++i) {
    if ( gdjs.StartScreenCode.GDYELLOWBUTTONObjects1[i].getAnimation() == 0 ) {
        gdjs.StartScreenCode.condition2IsTrue_0.val = true;
        gdjs.StartScreenCode.GDYELLOWBUTTONObjects1[k] = gdjs.StartScreenCode.GDYELLOWBUTTONObjects1[i];
        ++k;
    }
}
gdjs.StartScreenCode.GDYELLOWBUTTONObjects1.length = k;}}
}
if (gdjs.StartScreenCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.StartScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GREENBUTTON"), gdjs.StartScreenCode.GDGREENBUTTONObjects1);

gdjs.StartScreenCode.condition0IsTrue_0.val = false;
gdjs.StartScreenCode.condition1IsTrue_0.val = false;
gdjs.StartScreenCode.condition2IsTrue_0.val = false;
{
gdjs.StartScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDGREENBUTTONObjects1Objects, runtimeScene, true, false);
}if ( gdjs.StartScreenCode.condition0IsTrue_0.val ) {
{
gdjs.StartScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.StartScreenCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.StartScreenCode.GDGREENBUTTONObjects1.length;i<l;++i) {
    if ( gdjs.StartScreenCode.GDGREENBUTTONObjects1[i].getAnimation() == 0 ) {
        gdjs.StartScreenCode.condition2IsTrue_0.val = true;
        gdjs.StartScreenCode.GDGREENBUTTONObjects1[k] = gdjs.StartScreenCode.GDGREENBUTTONObjects1[i];
        ++k;
    }
}
gdjs.StartScreenCode.GDGREENBUTTONObjects1.length = k;}}
}
if (gdjs.StartScreenCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.StartScreenCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BLUEBUTTON"), gdjs.StartScreenCode.GDBLUEBUTTONObjects1);

gdjs.StartScreenCode.condition0IsTrue_0.val = false;
gdjs.StartScreenCode.condition1IsTrue_0.val = false;
gdjs.StartScreenCode.condition2IsTrue_0.val = false;
{
gdjs.StartScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDBLUEBUTTONObjects1Objects, runtimeScene, true, false);
}if ( gdjs.StartScreenCode.condition0IsTrue_0.val ) {
{
gdjs.StartScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.StartScreenCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.StartScreenCode.GDBLUEBUTTONObjects1.length;i<l;++i) {
    if ( gdjs.StartScreenCode.GDBLUEBUTTONObjects1[i].getAnimation() == 0 ) {
        gdjs.StartScreenCode.condition2IsTrue_0.val = true;
        gdjs.StartScreenCode.GDBLUEBUTTONObjects1[k] = gdjs.StartScreenCode.GDBLUEBUTTONObjects1[i];
        ++k;
    }
}
gdjs.StartScreenCode.GDBLUEBUTTONObjects1.length = k;}}
}
if (gdjs.StartScreenCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.StartScreenCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.StartScreenCode.condition0IsTrue_0.val = false;
{
gdjs.StartScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StartScreenCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.StartScreenCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.StartScreenCode.userFunc0x720068(runtimeScene);

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("YELLOWBUTTON"), gdjs.StartScreenCode.GDYELLOWBUTTONObjects1);

gdjs.StartScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StartScreenCode.GDYELLOWBUTTONObjects1.length;i<l;++i) {
    if ( gdjs.StartScreenCode.GDYELLOWBUTTONObjects1[i].getX() >= 1198 ) {
        gdjs.StartScreenCode.condition0IsTrue_0.val = true;
        gdjs.StartScreenCode.GDYELLOWBUTTONObjects1[k] = gdjs.StartScreenCode.GDYELLOWBUTTONObjects1[i];
        ++k;
    }
}
gdjs.StartScreenCode.GDYELLOWBUTTONObjects1.length = k;}if (gdjs.StartScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartScreenCode.GDYELLOWBUTTONObjects1 */
{for(var i = 0, len = gdjs.StartScreenCode.GDYELLOWBUTTONObjects1.length ;i < len;++i) {
    gdjs.StartScreenCode.GDYELLOWBUTTONObjects1[i].setX(1197);
}
}{for(var i = 0, len = gdjs.StartScreenCode.GDYELLOWBUTTONObjects1.length ;i < len;++i) {
    gdjs.StartScreenCode.GDYELLOWBUTTONObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YELLOWBUTTON"), gdjs.StartScreenCode.GDYELLOWBUTTONObjects1);

gdjs.StartScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StartScreenCode.GDYELLOWBUTTONObjects1.length;i<l;++i) {
    if ( gdjs.StartScreenCode.GDYELLOWBUTTONObjects1[i].getY() == 0 ) {
        gdjs.StartScreenCode.condition0IsTrue_0.val = true;
        gdjs.StartScreenCode.GDYELLOWBUTTONObjects1[k] = gdjs.StartScreenCode.GDYELLOWBUTTONObjects1[i];
        ++k;
    }
}
gdjs.StartScreenCode.GDYELLOWBUTTONObjects1.length = k;}if (gdjs.StartScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartScreenCode.GDYELLOWBUTTONObjects1 */
gdjs.copyArray(runtimeScene.getObjects("selectedteam"), gdjs.StartScreenCode.GDselectedteamObjects1);
{for(var i = 0, len = gdjs.StartScreenCode.GDYELLOWBUTTONObjects1.length ;i < len;++i) {
    gdjs.StartScreenCode.GDYELLOWBUTTONObjects1[i].setY(650);
}
}{for(var i = 0, len = gdjs.StartScreenCode.GDselectedteamObjects1.length ;i < len;++i) {
    gdjs.StartScreenCode.GDselectedteamObjects1[i].setString("Chosen Team: YELLOW");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("YELLOW");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GREENBUTTON"), gdjs.StartScreenCode.GDGREENBUTTONObjects1);

gdjs.StartScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StartScreenCode.GDGREENBUTTONObjects1.length;i<l;++i) {
    if ( gdjs.StartScreenCode.GDGREENBUTTONObjects1[i].getX() >= 1198 ) {
        gdjs.StartScreenCode.condition0IsTrue_0.val = true;
        gdjs.StartScreenCode.GDGREENBUTTONObjects1[k] = gdjs.StartScreenCode.GDGREENBUTTONObjects1[i];
        ++k;
    }
}
gdjs.StartScreenCode.GDGREENBUTTONObjects1.length = k;}if (gdjs.StartScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartScreenCode.GDGREENBUTTONObjects1 */
{for(var i = 0, len = gdjs.StartScreenCode.GDGREENBUTTONObjects1.length ;i < len;++i) {
    gdjs.StartScreenCode.GDGREENBUTTONObjects1[i].setX(1197);
}
}{for(var i = 0, len = gdjs.StartScreenCode.GDGREENBUTTONObjects1.length ;i < len;++i) {
    gdjs.StartScreenCode.GDGREENBUTTONObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GREENBUTTON"), gdjs.StartScreenCode.GDGREENBUTTONObjects1);

gdjs.StartScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StartScreenCode.GDGREENBUTTONObjects1.length;i<l;++i) {
    if ( gdjs.StartScreenCode.GDGREENBUTTONObjects1[i].getY() == 0 ) {
        gdjs.StartScreenCode.condition0IsTrue_0.val = true;
        gdjs.StartScreenCode.GDGREENBUTTONObjects1[k] = gdjs.StartScreenCode.GDGREENBUTTONObjects1[i];
        ++k;
    }
}
gdjs.StartScreenCode.GDGREENBUTTONObjects1.length = k;}if (gdjs.StartScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartScreenCode.GDGREENBUTTONObjects1 */
gdjs.copyArray(runtimeScene.getObjects("selectedteam"), gdjs.StartScreenCode.GDselectedteamObjects1);
{for(var i = 0, len = gdjs.StartScreenCode.GDGREENBUTTONObjects1.length ;i < len;++i) {
    gdjs.StartScreenCode.GDGREENBUTTONObjects1[i].setY(316);
}
}{for(var i = 0, len = gdjs.StartScreenCode.GDselectedteamObjects1.length ;i < len;++i) {
    gdjs.StartScreenCode.GDselectedteamObjects1[i].setString("Chosen Team: GREEN");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("GREEN");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BLUEBUTTON"), gdjs.StartScreenCode.GDBLUEBUTTONObjects1);

gdjs.StartScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StartScreenCode.GDBLUEBUTTONObjects1.length;i<l;++i) {
    if ( gdjs.StartScreenCode.GDBLUEBUTTONObjects1[i].getX() >= 281 ) {
        gdjs.StartScreenCode.condition0IsTrue_0.val = true;
        gdjs.StartScreenCode.GDBLUEBUTTONObjects1[k] = gdjs.StartScreenCode.GDBLUEBUTTONObjects1[i];
        ++k;
    }
}
gdjs.StartScreenCode.GDBLUEBUTTONObjects1.length = k;}if (gdjs.StartScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartScreenCode.GDBLUEBUTTONObjects1 */
{for(var i = 0, len = gdjs.StartScreenCode.GDBLUEBUTTONObjects1.length ;i < len;++i) {
    gdjs.StartScreenCode.GDBLUEBUTTONObjects1[i].setX(280);
}
}{for(var i = 0, len = gdjs.StartScreenCode.GDBLUEBUTTONObjects1.length ;i < len;++i) {
    gdjs.StartScreenCode.GDBLUEBUTTONObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BLUEBUTTON"), gdjs.StartScreenCode.GDBLUEBUTTONObjects1);

gdjs.StartScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StartScreenCode.GDBLUEBUTTONObjects1.length;i<l;++i) {
    if ( gdjs.StartScreenCode.GDBLUEBUTTONObjects1[i].getY() == 0 ) {
        gdjs.StartScreenCode.condition0IsTrue_0.val = true;
        gdjs.StartScreenCode.GDBLUEBUTTONObjects1[k] = gdjs.StartScreenCode.GDBLUEBUTTONObjects1[i];
        ++k;
    }
}
gdjs.StartScreenCode.GDBLUEBUTTONObjects1.length = k;}if (gdjs.StartScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartScreenCode.GDBLUEBUTTONObjects1 */
gdjs.copyArray(runtimeScene.getObjects("selectedteam"), gdjs.StartScreenCode.GDselectedteamObjects1);
{for(var i = 0, len = gdjs.StartScreenCode.GDBLUEBUTTONObjects1.length ;i < len;++i) {
    gdjs.StartScreenCode.GDBLUEBUTTONObjects1[i].setY(650);
}
}{for(var i = 0, len = gdjs.StartScreenCode.GDselectedteamObjects1.length ;i < len;++i) {
    gdjs.StartScreenCode.GDselectedteamObjects1[i].setString("Chosen Team: BLUE");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("BLUE");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("REDBUTTON"), gdjs.StartScreenCode.GDREDBUTTONObjects1);

gdjs.StartScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StartScreenCode.GDREDBUTTONObjects1.length;i<l;++i) {
    if ( gdjs.StartScreenCode.GDREDBUTTONObjects1[i].getX() >= 281 ) {
        gdjs.StartScreenCode.condition0IsTrue_0.val = true;
        gdjs.StartScreenCode.GDREDBUTTONObjects1[k] = gdjs.StartScreenCode.GDREDBUTTONObjects1[i];
        ++k;
    }
}
gdjs.StartScreenCode.GDREDBUTTONObjects1.length = k;}if (gdjs.StartScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartScreenCode.GDREDBUTTONObjects1 */
{for(var i = 0, len = gdjs.StartScreenCode.GDREDBUTTONObjects1.length ;i < len;++i) {
    gdjs.StartScreenCode.GDREDBUTTONObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.StartScreenCode.GDREDBUTTONObjects1.length ;i < len;++i) {
    gdjs.StartScreenCode.GDREDBUTTONObjects1[i].setX(280);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("REDBUTTON"), gdjs.StartScreenCode.GDREDBUTTONObjects1);

gdjs.StartScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StartScreenCode.GDREDBUTTONObjects1.length;i<l;++i) {
    if ( gdjs.StartScreenCode.GDREDBUTTONObjects1[i].getY() == 0 ) {
        gdjs.StartScreenCode.condition0IsTrue_0.val = true;
        gdjs.StartScreenCode.GDREDBUTTONObjects1[k] = gdjs.StartScreenCode.GDREDBUTTONObjects1[i];
        ++k;
    }
}
gdjs.StartScreenCode.GDREDBUTTONObjects1.length = k;}if (gdjs.StartScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartScreenCode.GDREDBUTTONObjects1 */
gdjs.copyArray(runtimeScene.getObjects("selectedteam"), gdjs.StartScreenCode.GDselectedteamObjects1);
{for(var i = 0, len = gdjs.StartScreenCode.GDREDBUTTONObjects1.length ;i < len;++i) {
    gdjs.StartScreenCode.GDREDBUTTONObjects1[i].setY(316);
}
}{for(var i = 0, len = gdjs.StartScreenCode.GDselectedteamObjects1.length ;i < len;++i) {
    gdjs.StartScreenCode.GDselectedteamObjects1[i].setString("Chosen Team: RED");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("RED");
}{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BLUEBUTTON"), gdjs.StartScreenCode.GDBLUEBUTTONObjects1);
gdjs.copyArray(runtimeScene.getObjects("GREENBUTTON"), gdjs.StartScreenCode.GDGREENBUTTONObjects1);
gdjs.copyArray(runtimeScene.getObjects("REDBUTTON"), gdjs.StartScreenCode.GDREDBUTTONObjects1);
gdjs.copyArray(runtimeScene.getObjects("YELLOWBUTTON"), gdjs.StartScreenCode.GDYELLOWBUTTONObjects1);

gdjs.StartScreenCode.condition0IsTrue_0.val = false;
gdjs.StartScreenCode.condition1IsTrue_0.val = false;
gdjs.StartScreenCode.condition2IsTrue_0.val = false;
gdjs.StartScreenCode.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StartScreenCode.GDGREENBUTTONObjects1.length;i<l;++i) {
    if ( gdjs.StartScreenCode.GDGREENBUTTONObjects1[i].getAnimation() == 1 ) {
        gdjs.StartScreenCode.condition0IsTrue_0.val = true;
        gdjs.StartScreenCode.GDGREENBUTTONObjects1[k] = gdjs.StartScreenCode.GDGREENBUTTONObjects1[i];
        ++k;
    }
}
gdjs.StartScreenCode.GDGREENBUTTONObjects1.length = k;}if ( gdjs.StartScreenCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.StartScreenCode.GDREDBUTTONObjects1.length;i<l;++i) {
    if ( gdjs.StartScreenCode.GDREDBUTTONObjects1[i].getAnimation() == 1 ) {
        gdjs.StartScreenCode.condition1IsTrue_0.val = true;
        gdjs.StartScreenCode.GDREDBUTTONObjects1[k] = gdjs.StartScreenCode.GDREDBUTTONObjects1[i];
        ++k;
    }
}
gdjs.StartScreenCode.GDREDBUTTONObjects1.length = k;}if ( gdjs.StartScreenCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.StartScreenCode.GDYELLOWBUTTONObjects1.length;i<l;++i) {
    if ( gdjs.StartScreenCode.GDYELLOWBUTTONObjects1[i].getAnimation() == 1 ) {
        gdjs.StartScreenCode.condition2IsTrue_0.val = true;
        gdjs.StartScreenCode.GDYELLOWBUTTONObjects1[k] = gdjs.StartScreenCode.GDYELLOWBUTTONObjects1[i];
        ++k;
    }
}
gdjs.StartScreenCode.GDYELLOWBUTTONObjects1.length = k;}if ( gdjs.StartScreenCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.StartScreenCode.GDBLUEBUTTONObjects1.length;i<l;++i) {
    if ( gdjs.StartScreenCode.GDBLUEBUTTONObjects1[i].getAnimation() == 1 ) {
        gdjs.StartScreenCode.condition3IsTrue_0.val = true;
        gdjs.StartScreenCode.GDBLUEBUTTONObjects1[k] = gdjs.StartScreenCode.GDBLUEBUTTONObjects1[i];
        ++k;
    }
}
gdjs.StartScreenCode.GDBLUEBUTTONObjects1.length = k;}}
}
}
if (gdjs.StartScreenCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", true);
}
{ //Subevents
gdjs.StartScreenCode.eventsList5(runtimeScene);} //End of subevents
}

}


};

gdjs.StartScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartScreenCode.GDchooseateamObjects1.length = 0;
gdjs.StartScreenCode.GDchooseateamObjects2.length = 0;
gdjs.StartScreenCode.GDGREENBUTTONObjects1.length = 0;
gdjs.StartScreenCode.GDGREENBUTTONObjects2.length = 0;
gdjs.StartScreenCode.GDYELLOWBUTTONObjects1.length = 0;
gdjs.StartScreenCode.GDYELLOWBUTTONObjects2.length = 0;
gdjs.StartScreenCode.GDBLUEBUTTONObjects1.length = 0;
gdjs.StartScreenCode.GDBLUEBUTTONObjects2.length = 0;
gdjs.StartScreenCode.GDREDBUTTONObjects1.length = 0;
gdjs.StartScreenCode.GDREDBUTTONObjects2.length = 0;
gdjs.StartScreenCode.GDselectedteamObjects1.length = 0;
gdjs.StartScreenCode.GDselectedteamObjects2.length = 0;

gdjs.StartScreenCode.eventsList6(runtimeScene);
return;

}

gdjs['StartScreenCode'] = gdjs.StartScreenCode;
