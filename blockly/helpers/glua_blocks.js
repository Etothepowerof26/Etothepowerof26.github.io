/*
	GLua Blocks for the Blockly Library
	Blockly is made by Google, added onto by E^26
*/

// Entity Helpers
// Player
Blockly.Blocks['player'] = {
	init: function() {
		this.appendValueInput("UserID")
			.setCheck("Number")
			.appendField("Player");
		this.setInputsInline(true);
		this.setOutput(true, "Entity");
		this.setColour(330);
		this.setTooltip("Gets a player with the specified user ID.");
		this.setHelpUrl("https://wiki.garrysmod.com/page/Global/Player");
	}
};
Blockly.Lua['player'] = function(block) {
	var value_userid = Blockly.Lua.valueToCode(block, 'UserID', Blockly.Lua.ORDER_ATOMIC);
	var code = 'Player(' + value_userid.toString() + ")";
	return [code, Blockly.Lua.ORDER_NONE];
};
// Entity
Blockly.Blocks['entity'] = {
	init: function() {
		this.appendValueInput("EntIndex")
			.setCheck("Number")
			.appendField("Entity");
		this.setInputsInline(true);
		this.setOutput(true, "Entity");
		this.setColour(330);
		this.setTooltip("Returns the entity with the specified entity index, or NULL.");
		this.setHelpUrl("https://wiki.garrysmod.com/page/Global/Entity");
	}
};
Blockly.Lua['entity'] = function(block) {
	var value_entindex = Blockly.Lua.valueToCode(block, 'EntIndex', Blockly.Lua.ORDER_ATOMIC);
	var code = 'Entity(' + value_entindex.toString() + ")";
	return [code, Blockly.Lua.ORDER_NONE];
};
// player.GetAll() and ents.GetAll()
Blockly.Blocks['all_players'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("All Players");
		this.setOutput(true, "Array");
		this.setColour(330);
		this.setTooltip("Returns a table of all players currently connected to the server.");
		this.setHelpUrl("https://wiki.garrysmod.com/page/player/GetAll");
	}
};
Blockly.Lua['all_players'] = function(block) {
	return ["player.GetAll()", Blockly.Lua.ORDER_NONE];
};
Blockly.Blocks['all_entities'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("All Entities");
		this.setOutput(true, "Array");
		this.setColour(330);
		this.setTooltip("Returns a table of all existing entities.");
		this.setHelpUrl("https://wiki.garrysmod.com/page/ents/GetAll");
	}
};
Blockly.Lua['all_entities'] = function(block) {
	return ["ents.GetAll()", Blockly.Lua.ORDER_NONE];
};

// Angle, Vector and Color
Blockly.Blocks['vector'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Vector")
        .appendField(new Blockly.FieldNumber(0), "VX")
        .appendField(new Blockly.FieldNumber(0), "VY")
        .appendField(new Blockly.FieldNumber(0), "VZ");
    this.setInputsInline(true);
    this.setOutput(true, "Vector");
    this.setColour(230);
 this.setTooltip("Returns a 3d based vector.");
 this.setHelpUrl("");
  }
};
Blockly.Lua['vector'] = function(block) {
  var number_vx = block.getFieldValue('VX');
  var number_vy = block.getFieldValue('VY');
  var number_vz = block.getFieldValue('VZ');
  var code = 'Vector(' + number_vx + ',' + number_vy + ',' + number_vz + ')';
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Blocks['angle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Angle")
        .appendField(new Blockly.FieldNumber(0, -360, 360), "Pitch")
        .appendField(new Blockly.FieldNumber(0, -360, 360), "Yaw")
        .appendField(new Blockly.FieldNumber(0, -360, 360), "Roll");
    this.setInputsInline(true);
    this.setOutput(true, "Angle");
    this.setColour(230);
 this.setTooltip("Returns an angle in the format of pitch,yaw,roll");
 this.setHelpUrl("");
  }
};
Blockly.Lua['angle'] = function(block) {
  var number_pitch = block.getFieldValue('Pitch');
  var number_yaw = block.getFieldValue('Yaw');
  var number_roll = block.getFieldValue('Roll');
  var code = 'Angle(' + number_pitch + ',' + number_yaw + ',' + number_roll + ')';
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Blocks['color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Color")
        .appendField(new Blockly.FieldNumber(0, 0, 255), "Red")
        .appendField(new Blockly.FieldNumber(0, 0, 255), "Green")
        .appendField(new Blockly.FieldNumber(0, 0, 255), "Blue")
        .appendField(new Blockly.FieldNumber(0, 0, 255), "Alpha");
    this.setInputsInline(true);
    this.setOutput(true, "Color");
    this.setColour(230);
 this.setTooltip("Returns a color in the format of r,g,b,a");
 this.setHelpUrl("");
  }
};
Blockly.Lua['color'] = function(block) {
  var number_red = block.getFieldValue('Red');
  var number_green = block.getFieldValue('Green');
  var number_blue = block.getFieldValue('Blue');
  var number_alpha = block.getFieldValue('Alpha');
  var code = 'Color(' + number_red + ',' + number_green + ',' + number_blue + ',' + number_alpha + ')';
  return [code, Blockly.Lua.ORDER_NONE];
};

// --------------------------------------------------------------------------------------------------
// Entity/Player Metamethods

// Entity:Ignite(time)
Blockly.Blocks['entity_ignite'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Entity");
    this.appendValueInput("Entity")
        .setCheck("Entity");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Ignite");
    this.appendValueInput("Time")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Lua['entity_ignite'] = function(block) {
  var value_entity = Blockly.Lua.valueToCode(block, 'Entity', Blockly.Lua.ORDER_ATOMIC);
  var value_time = Blockly.Lua.valueToCode(block, 'Time', Blockly.Lua.ORDER_ATOMIC);
  var code = value_entity + ':Ignite(' + value_time + ')\n';
  return code;
};

// Entity:SetPos(vec)
Blockly.Blocks['entity_setpos'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Entity");
    this.appendValueInput("Entity")
        .setCheck("Entity");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("SetPos");
    this.appendValueInput("Time")
        .setCheck("Vector");
    this.setInputsInline(true);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Lua['entity_setpos'] = function(block) {
  var value_entity = Blockly.Lua.valueToCode(block, 'Entity', Blockly.Lua.ORDER_ATOMIC);
  var value_position = Blockly.Lua.valueToCode(block, 'Position', Blockly.Lua.ORDER_ATOMIC);
  console.log(value_position);
  var code = value_entity + ':SetPos(' + value_position + ')\n';
  return code;
};

