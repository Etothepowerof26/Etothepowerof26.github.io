[{
  "type": "player",
  "message0": "Player %1",
  "args0": [
    {
      "type": "input_value",
      "name": "UserID",
      "check": "Number"
    }
  ],
  "output": "entity",
  "colour": 330,
  "tooltip": "Gets a player with the specified user ID.",
  "helpUrl": "https://wiki.garrysmod.com/page/Global/Player"
},
{
  "type": "entity",
  "message0": "Entity %1",
  "args0": [
    {
      "type": "input_value",
      "name": "EntityIndex",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "entity",
  "colour": 330,
  "tooltip": "Returns the entity with the specified entity index, or NULL.",
  "helpUrl": "https://wiki.garrysmod.com/page/Global/Entity"
},
{
  "type": "all_players",
  "message0": "All Players",
  "output": "Array",
  "colour": 330,
  "tooltip": "(player.GetAll()) Gets all of the players currently connected to the server.",
  "helpUrl": "https://wiki.garrysmod.com/page/player/GetAll"
},
{
  "type": "all_entities",
  "message0": "All Entities",
  "output": "Array",
  "colour": 330,
  "tooltip": "Gets all entities (including players) on the server.",
  "helpUrl": "https://wiki.garrysmod.com/page/ents/GetAll"
}]