/*
*
* Project Name: ModPE +.js
* Maker: Mine Star(sypjsn)
* Period: 2015.03.18 ~ 2015.00.00
* Version: 0.1
*
*/


/*---------------Script------------------*/


/*
*
* #01: Manage for JavaScript
* since 0.1
*
*/


var Script = {};


/*
*
* #01-1: registerProperty
* Explanation: putProperty to other scripts
* author: 아포카토맨(colombia2)
*
*/


Script.registerProperty = function(objName, obj) {
	
	var scripts = net.zhuoweizhang.mcpelauncher.ScriptManager.scripts;
	
	for(var i = 0; i < scripts.size(); i++) {
		var script = scripts.get(i);
		var scope = script.scope;
		org.mozilla.javascript.ScriptableObject.putProperty(scope, objName, obj);
	}
	
}


/*
*
* #01-2: callMethods
* Explanation: call methods from other scripts.
* author: Zhuowei Zhang(zhuowei)
*
*/


Script.callMethods = net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod;


/*
*
* #01-3: include
* Explanation: includes other scripts
* author: Dark(angello10)
*
*/


Script.include = function(file) {
	
	eval(function(){
		var file = new java.io.File(file);
          if(!(file.exists())) return "";

            var fis = new java.io.FileInputStream(file);
            var isr = new java.io.InputStreamReader(fis);
            var br = new java.io.BufferedReader(isr);

            var str = br.readLine();
            var read = "";
            while((read = br.readLine()) != null) str += "\n" + read;

            fis.close();
            isr.close();
            br.close();

            return str;
			}());
	
}


function include(file) {
	
	eval(function(){
		var file = new java.io.File(file);
          if(!(file.exists())) return "";

            var fis = new java.io.FileInputStream(file);
            var isr = new java.io.InputStreamReader(fis);
            var br = new java.io.BufferedReader(isr);

            var str = br.readLine();
            var read = "";
            while((read = br.readLine()) != null) str += "\n" + read;

            fis.close();
            isr.close();
            br.close();

            return str;
			}());
	
}


/*
*
* #01-4: import
* Explanation: import the method in the javascript(only object, without java/android and else class)
* author: 아포카토맨(colombia2)
*
*/


Script.import = function(arg) {
var split = arg.split(".");
if(split[split.length-1] === "*") {
var methods = Object.getOwnPropertyNames(eval(arg.replace(".*", "")));
methods.forEach(function(e) {
eval(e + " = " + arg.replace(".*", "") + "." + e + ";");
});
} else
eval(split[split.length-1] + " = " + arg);
}


function import(arg) {
var split = arg.split(".");
if(split[split.length-1] === "*") {
var methods = Object.getOwnPropertyNames(eval(arg.replace(".*", "")));
methods.forEach(function(e) {
eval(e + " = " + arg.replace(".*", "") + "." + e + ";");
});
} else
eval(split[split.length-1] + " = " + arg);
}


/*
*
* #01-5: setEnable/setDisable
* Explanation: enable the scripts compulsory/disable the scripts compulsory
* author: Zhuowei Zhang(zhuowei)
*
*/


Script.setEnable = function(path) {
	
	net.zhuoweizhang.mcpelauncher.ScriptManager.loadScript(new java.io.BufferedReader(new java.io.FileReader(new java.io.File(path))), "");
	
}


Script.setDisable = function(path) {
	
	net.zhuoweizhang.mcpelauncher.ScriptManager.removeScript(path);
	
}


/*
*
* #01-6: getLauncherContext
* Explanation: get BlockLauncher's Context
* author: Mine Star(sypjsn)
*
*/


Script.getLauncherContext = function() {
	
	return com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	
}
