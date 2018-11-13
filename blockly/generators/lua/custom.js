'use strict';

goog.require('Blockly.Lua');

Blockly.Lua["get_all_players"] = function(block){
	var code = "player.GetAll()";
	return [code, Blockly.Lua.ORDER_RELATIONAL];
}