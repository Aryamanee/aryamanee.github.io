gdjs.GameCode = {};
gdjs.GameCode.GDbgObjects1= [];
gdjs.GameCode.GDbgObjects2= [];
gdjs.GameCode.GDbgObjects3= [];
gdjs.GameCode.GDYellowObjects1= [];
gdjs.GameCode.GDYellowObjects2= [];
gdjs.GameCode.GDYellowObjects3= [];
gdjs.GameCode.GDGreenObjects1= [];
gdjs.GameCode.GDGreenObjects2= [];
gdjs.GameCode.GDGreenObjects3= [];
gdjs.GameCode.GDBlueObjects1= [];
gdjs.GameCode.GDBlueObjects2= [];
gdjs.GameCode.GDBlueObjects3= [];
gdjs.GameCode.GDRedObjects1= [];
gdjs.GameCode.GDRedObjects2= [];
gdjs.GameCode.GDRedObjects3= [];
gdjs.GameCode.GDYRObjects1= [];
gdjs.GameCode.GDYRObjects2= [];
gdjs.GameCode.GDYRObjects3= [];
gdjs.GameCode.GDBRObjects1= [];
gdjs.GameCode.GDBRObjects2= [];
gdjs.GameCode.GDBRObjects3= [];
gdjs.GameCode.GDGRObjects1= [];
gdjs.GameCode.GDGRObjects2= [];
gdjs.GameCode.GDGRObjects3= [];
gdjs.GameCode.GDRRObjects1= [];
gdjs.GameCode.GDRRObjects2= [];
gdjs.GameCode.GDRRObjects3= [];
gdjs.GameCode.GDBEObjects1= [];
gdjs.GameCode.GDBEObjects2= [];
gdjs.GameCode.GDBEObjects3= [];
gdjs.GameCode.GDBObjects1= [];
gdjs.GameCode.GDBObjects2= [];
gdjs.GameCode.GDBObjects3= [];
gdjs.GameCode.GDYEObjects1= [];
gdjs.GameCode.GDYEObjects2= [];
gdjs.GameCode.GDYEObjects3= [];
gdjs.GameCode.GDYObjects1= [];
gdjs.GameCode.GDYObjects2= [];
gdjs.GameCode.GDYObjects3= [];
gdjs.GameCode.GDGEObjects1= [];
gdjs.GameCode.GDGEObjects2= [];
gdjs.GameCode.GDGEObjects3= [];
gdjs.GameCode.GDGObjects1= [];
gdjs.GameCode.GDGObjects2= [];
gdjs.GameCode.GDGObjects3= [];
gdjs.GameCode.GDREObjects1= [];
gdjs.GameCode.GDREObjects2= [];
gdjs.GameCode.GDREObjects3= [];
gdjs.GameCode.GDRObjects1= [];
gdjs.GameCode.GDRObjects2= [];
gdjs.GameCode.GDRObjects3= [];
gdjs.GameCode.GDteamObjects1= [];
gdjs.GameCode.GDteamObjects2= [];
gdjs.GameCode.GDteamObjects3= [];
gdjs.GameCode.GDr1txtObjects1= [];
gdjs.GameCode.GDr1txtObjects2= [];
gdjs.GameCode.GDr1txtObjects3= [];
gdjs.GameCode.GDr2txtObjects1= [];
gdjs.GameCode.GDr2txtObjects2= [];
gdjs.GameCode.GDr2txtObjects3= [];
gdjs.GameCode.GDturnObjects1= [];
gdjs.GameCode.GDturnObjects2= [];
gdjs.GameCode.GDturnObjects3= [];
gdjs.GameCode.GDwinObjects1= [];
gdjs.GameCode.GDwinObjects2= [];
gdjs.GameCode.GDwinObjects3= [];
gdjs.GameCode.GDytObjects1= [];
gdjs.GameCode.GDytObjects2= [];
gdjs.GameCode.GDytObjects3= [];
gdjs.GameCode.GDbtObjects1= [];
gdjs.GameCode.GDbtObjects2= [];
gdjs.GameCode.GDbtObjects3= [];
gdjs.GameCode.GDgtObjects1= [];
gdjs.GameCode.GDgtObjects2= [];
gdjs.GameCode.GDgtObjects3= [];
gdjs.GameCode.GDrtObjects1= [];
gdjs.GameCode.GDrtObjects2= [];
gdjs.GameCode.GDrtObjects3= [];
gdjs.GameCode.GDwonlostObjects1= [];
gdjs.GameCode.GDwonlostObjects2= [];
gdjs.GameCode.GDwonlostObjects3= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.condition3IsTrue_0 = {val:false};
gdjs.GameCode.condition4IsTrue_0 = {val:false};


gdjs.GameCode.userFunc0x6ded70 = function(runtimeScene) {
"use strict";
runtimeScene.ws = new WebSocket("wss://4asmp.ml:8000/ws");
runtimeScene.pos = 0
const teamvarbox = runtimeScene.getObjects("team")[0]
runtimeScene.team = teamvarbox.getString()

const rps = runtimeScene.getObjects("R")
const gps = runtimeScene.getObjects("G")
const yps = runtimeScene.getObjects("Y")
const bps = runtimeScene.getObjects("B")

const reps = runtimeScene.getObjects("RE")
const geps = runtimeScene.getObjects("GE")
const yeps = runtimeScene.getObjects("YE")
const beps = runtimeScene.getObjects("BE")

if(runtimeScene.team=="RED"){
    bps.pop()
    runtimeScene.path = rps.concat(gps,yps,bps,reps)
}
else if(runtimeScene.team=="GREEN"){
    rps.pop()
    runtimeScene.path = gps.concat(yps,bps,rps,geps)
}
else if(runtimeScene.team=="BLUE"){
    yps.pop()
    runtimeScene.path = bps.concat(rps,gps,yps,beps)
}
else if(runtimeScene.team=="YELLOW"){
    gps.pop()
    runtimeScene.path = yps.concat(bps,rps,gps,yeps)
}   


console.log(runtimeScene.team)
};
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameCode.userFunc0x6ded70(runtimeScene);

}


};gdjs.GameCode.userFunc0x779258 = function(runtimeScene) {
"use strict";
const red = runtimeScene.getObjects("Red")[0]
const green = runtimeScene.getObjects("Green")[0]
const blue = runtimeScene.getObjects("Blue")[0]
const yellow = runtimeScene.getObjects("Yellow")[0]
const team = runtimeScene.getObjects("team")[0].getString()
const turn = runtimeScene.getObjects("turn")[0]
const winlose = runtimeScene.getObjects("wonlost")[0]
runtimeScene.ws.onmessage = function (event) {
    const e = JSON.parse(event.data)
    switch (e.command) {
        case "MOVE_RED":
            red.setX(e.x)
            red.setY(e.y)
            console.log("MOVED_RED")
            if(team=="GREEN"){
                turn.setString("true")
            }
            break
        case "MOVE_GREEN":
            green.setX(e.x)
            green.setY(e.y)
            console.log("MOVED_GREEN")
            if(team=="YELLOW"){
                turn.setString("true")
            }
            break
        case "MOVE_YELLOW":
            yellow.setX(e.x)
            yellow.setY(e.y)
            console.log("MOVED_YELLOW")
            if(team=="BLUE"){
                turn.setString("true")
            }
            break
        case "MOVE_BLUE":
            blue.setX(e.x)
            blue.setY(e.y)
            console.log("MOVED_BLUE")
            if(team=="RED"){
                turn.setString("true")
            }
            break
        case "WIN_RED":
            if(team=="RED"){
                winlose.setString("won")
            }
            else{
                winlose.setString("lost")
            }
            break
        case "WIN_BLUE":
            if(team=="BLUE"){
                winlose.setString("won")
            }
            else{
                winlose.setString("lost")
            }
            break
        case "WIN_YELLOW":
            if(team=="YELLOW"){
                winlose.setString("won")
            }
            else{
                winlose.setString("lost")
            }
            break
        case "WIN_GREEN":
            if(team=="GREEN"){
                winlose.setString("won")
            }
            else{
                winlose.setString("lost")
            }
            break

        default:
            console.log("wut is tis command?")
            break
    }}

};
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRRObjects1Objects = Hashtable.newFrom({"RR": gdjs.GameCode.GDRRObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDYRObjects1Objects = Hashtable.newFrom({"YR": gdjs.GameCode.GDYRObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBRObjects1Objects = Hashtable.newFrom({"BR": gdjs.GameCode.GDBRObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGRObjects1Objects = Hashtable.newFrom({"GR": gdjs.GameCode.GDGRObjects1});gdjs.GameCode.userFunc0x7a3660 = function(runtimeScene) {
"use strict";
console.log(runtimeScene.pos)
const teamvarbox = runtimeScene.getObjects("team")[0]
const team = teamvarbox.getString()
console.log(team)
const rps = runtimeScene.getObjects("R")
const gps = runtimeScene.getObjects("G")
const yps = runtimeScene.getObjects("Y")
const bps = runtimeScene.getObjects("B")

const reps = runtimeScene.getObjects("RE")
const geps = runtimeScene.getObjects("GE")
const yeps = runtimeScene.getObjects("YE")
const beps = runtimeScene.getObjects("BE")

var r1 = runtimeScene.getObjects("r1txt")[0]
var r2 = runtimeScene.getObjects("r2txt")[0]

const win = runtimeScene.getObjects("win")[0]




r1 = parseInt(r1.getString())
r2 = parseInt(r2.getString())


if(r1!=NaN){
    var totalroll = r1+r2
    runtimeScene.pos = runtimeScene.pos + totalroll
     if(runtimeScene.pos>56){
         runtimeScene.pos=56
     }
     if(r2 == 0 && r1 == 1 && runtimeScene.pos == 56){
        win.setString("true")
    }
}
var x = runtimeScene.path[runtimeScene.pos].getX()
var y = runtimeScene.path[runtimeScene.pos].getY()
if(team=="RED"){
    const data = {
        command: "MOVE_RED",
        x:x,
        y:y
        }
    runtimeScene.ws.send(JSON.stringify(data))
    }
else if(team=="GREEN"){
    const data = {
        command: "MOVE_GREEN",
        x:x,
        y:y
        }
    runtimeScene.ws.send(JSON.stringify(data))
    }

else if(team=="BLUE"){
    const data = {
        command: "MOVE_BLUE",
        x:x,
        y:y
        }
    runtimeScene.ws.send(JSON.stringify(data))
    }

else if(team=="YELLOW"){
    const data = {
        command: "MOVE_YELLOW",
        x:x,
        y:y
        }
    runtimeScene.ws.send(JSON.stringify(data))
    
}  


};
gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


gdjs.GameCode.userFunc0x7a3660(runtimeScene);

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "RED";
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("rt"), gdjs.GameCode.GDrtObjects2);
{for(var i = 0, len = gdjs.GameCode.GDrtObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDrtObjects2[i].setString("ROLL!");
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "BLUE";
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bt"), gdjs.GameCode.GDbtObjects2);
{for(var i = 0, len = gdjs.GameCode.GDbtObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbtObjects2[i].setString("ROLL!");
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "GREEN";
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("gt"), gdjs.GameCode.GDgtObjects2);
{for(var i = 0, len = gdjs.GameCode.GDgtObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDgtObjects2[i].setString("ROLL!");
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "YELLOW";
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("yt"), gdjs.GameCode.GDytObjects1);
{for(var i = 0, len = gdjs.GameCode.GDytObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDytObjects1[i].setString("ROLL!");
}
}}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "RED";
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("rt"), gdjs.GameCode.GDrtObjects2);
{for(var i = 0, len = gdjs.GameCode.GDrtObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDrtObjects2[i].setString("");
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "BLUE";
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bt"), gdjs.GameCode.GDbtObjects2);
{for(var i = 0, len = gdjs.GameCode.GDbtObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbtObjects2[i].setString("");
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "GREEN";
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("gt"), gdjs.GameCode.GDgtObjects2);
{for(var i = 0, len = gdjs.GameCode.GDgtObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDgtObjects2[i].setString("");
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "YELLOW";
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("yt"), gdjs.GameCode.GDytObjects1);
{for(var i = 0, len = gdjs.GameCode.GDytObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDytObjects1[i].setString("");
}
}}

}


};gdjs.GameCode.userFunc0x780460 = function(runtimeScene) {
"use strict";
const winmsg = "WIN_" + runtimeScene.team
const data = {
        command: winmsg
        }
runtimeScene.ws.send(JSON.stringify(data))


};
gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


gdjs.GameCode.userFunc0x780460(runtimeScene);

}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("team"), gdjs.GameCode.GDteamObjects1);
{for(var i = 0, len = gdjs.GameCode.GDteamObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDteamObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.userFunc0x779258(runtimeScene);

}


{

gdjs.copyArray(runtimeScene.getObjects("RR"), gdjs.GameCode.GDRRObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRRObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "RED";
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
gdjs.GameCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}}
}
}
if (gdjs.GameCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Roll");
}{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YR"), gdjs.GameCode.GDYRObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDYRObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "YELLOW";
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
gdjs.GameCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}}
}
}
if (gdjs.GameCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Roll");
}{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BR"), gdjs.GameCode.GDBRObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBRObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "BLUE";
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
gdjs.GameCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}}
}
}
if (gdjs.GameCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Roll");
}{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GR"), gdjs.GameCode.GDGRObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGRObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "GREEN";
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
gdjs.GameCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}}
}
}
if (gdjs.GameCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Roll");
}{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("r1txt"), gdjs.GameCode.GDr1txtObjects1);
gdjs.copyArray(runtimeScene.getObjects("r2txt"), gdjs.GameCode.GDr2txtObjects1);
{for(var i = 0, len = gdjs.GameCode.GDr2txtObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDr2txtObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{for(var i = 0, len = gdjs.GameCode.GDr1txtObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDr1txtObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}
{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("turn"), gdjs.GameCode.GDturnObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDturnObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDturnObjects1[i].getString() == "true" ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDturnObjects1[k] = gdjs.GameCode.GDturnObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDturnObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDturnObjects1 */
{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}{for(var i = 0, len = gdjs.GameCode.GDturnObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDturnObjects1[i].setString("false");
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("win"), gdjs.GameCode.GDwinObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDwinObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDwinObjects1[i].getString() == "true" ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDwinObjects1[k] = gdjs.GameCode.GDwinObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDwinObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDwinObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDwinObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDwinObjects1[i].setString("false");
}
}
{ //Subevents
gdjs.GameCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("wonlost"), gdjs.GameCode.GDwonlostObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDwonlostObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDwonlostObjects1[i].getString() == "won" ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDwonlostObjects1[k] = gdjs.GameCode.GDwonlostObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDwonlostObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "youwon", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("wonlost"), gdjs.GameCode.GDwonlostObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDwonlostObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDwonlostObjects1[i].getString() == "lost" ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDwonlostObjects1[k] = gdjs.GameCode.GDwonlostObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDwonlostObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "youlost", true);
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDbgObjects1.length = 0;
gdjs.GameCode.GDbgObjects2.length = 0;
gdjs.GameCode.GDbgObjects3.length = 0;
gdjs.GameCode.GDYellowObjects1.length = 0;
gdjs.GameCode.GDYellowObjects2.length = 0;
gdjs.GameCode.GDYellowObjects3.length = 0;
gdjs.GameCode.GDGreenObjects1.length = 0;
gdjs.GameCode.GDGreenObjects2.length = 0;
gdjs.GameCode.GDGreenObjects3.length = 0;
gdjs.GameCode.GDBlueObjects1.length = 0;
gdjs.GameCode.GDBlueObjects2.length = 0;
gdjs.GameCode.GDBlueObjects3.length = 0;
gdjs.GameCode.GDRedObjects1.length = 0;
gdjs.GameCode.GDRedObjects2.length = 0;
gdjs.GameCode.GDRedObjects3.length = 0;
gdjs.GameCode.GDYRObjects1.length = 0;
gdjs.GameCode.GDYRObjects2.length = 0;
gdjs.GameCode.GDYRObjects3.length = 0;
gdjs.GameCode.GDBRObjects1.length = 0;
gdjs.GameCode.GDBRObjects2.length = 0;
gdjs.GameCode.GDBRObjects3.length = 0;
gdjs.GameCode.GDGRObjects1.length = 0;
gdjs.GameCode.GDGRObjects2.length = 0;
gdjs.GameCode.GDGRObjects3.length = 0;
gdjs.GameCode.GDRRObjects1.length = 0;
gdjs.GameCode.GDRRObjects2.length = 0;
gdjs.GameCode.GDRRObjects3.length = 0;
gdjs.GameCode.GDBEObjects1.length = 0;
gdjs.GameCode.GDBEObjects2.length = 0;
gdjs.GameCode.GDBEObjects3.length = 0;
gdjs.GameCode.GDBObjects1.length = 0;
gdjs.GameCode.GDBObjects2.length = 0;
gdjs.GameCode.GDBObjects3.length = 0;
gdjs.GameCode.GDYEObjects1.length = 0;
gdjs.GameCode.GDYEObjects2.length = 0;
gdjs.GameCode.GDYEObjects3.length = 0;
gdjs.GameCode.GDYObjects1.length = 0;
gdjs.GameCode.GDYObjects2.length = 0;
gdjs.GameCode.GDYObjects3.length = 0;
gdjs.GameCode.GDGEObjects1.length = 0;
gdjs.GameCode.GDGEObjects2.length = 0;
gdjs.GameCode.GDGEObjects3.length = 0;
gdjs.GameCode.GDGObjects1.length = 0;
gdjs.GameCode.GDGObjects2.length = 0;
gdjs.GameCode.GDGObjects3.length = 0;
gdjs.GameCode.GDREObjects1.length = 0;
gdjs.GameCode.GDREObjects2.length = 0;
gdjs.GameCode.GDREObjects3.length = 0;
gdjs.GameCode.GDRObjects1.length = 0;
gdjs.GameCode.GDRObjects2.length = 0;
gdjs.GameCode.GDRObjects3.length = 0;
gdjs.GameCode.GDteamObjects1.length = 0;
gdjs.GameCode.GDteamObjects2.length = 0;
gdjs.GameCode.GDteamObjects3.length = 0;
gdjs.GameCode.GDr1txtObjects1.length = 0;
gdjs.GameCode.GDr1txtObjects2.length = 0;
gdjs.GameCode.GDr1txtObjects3.length = 0;
gdjs.GameCode.GDr2txtObjects1.length = 0;
gdjs.GameCode.GDr2txtObjects2.length = 0;
gdjs.GameCode.GDr2txtObjects3.length = 0;
gdjs.GameCode.GDturnObjects1.length = 0;
gdjs.GameCode.GDturnObjects2.length = 0;
gdjs.GameCode.GDturnObjects3.length = 0;
gdjs.GameCode.GDwinObjects1.length = 0;
gdjs.GameCode.GDwinObjects2.length = 0;
gdjs.GameCode.GDwinObjects3.length = 0;
gdjs.GameCode.GDytObjects1.length = 0;
gdjs.GameCode.GDytObjects2.length = 0;
gdjs.GameCode.GDytObjects3.length = 0;
gdjs.GameCode.GDbtObjects1.length = 0;
gdjs.GameCode.GDbtObjects2.length = 0;
gdjs.GameCode.GDbtObjects3.length = 0;
gdjs.GameCode.GDgtObjects1.length = 0;
gdjs.GameCode.GDgtObjects2.length = 0;
gdjs.GameCode.GDgtObjects3.length = 0;
gdjs.GameCode.GDrtObjects1.length = 0;
gdjs.GameCode.GDrtObjects2.length = 0;
gdjs.GameCode.GDrtObjects3.length = 0;
gdjs.GameCode.GDwonlostObjects1.length = 0;
gdjs.GameCode.GDwonlostObjects2.length = 0;
gdjs.GameCode.GDwonlostObjects3.length = 0;

gdjs.GameCode.eventsList5(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
