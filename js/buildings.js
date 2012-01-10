// Building classes
var Building = function(instanceId, sprite) {
	this.width = 0;
	this.height = 0;
	this.sprite = (sprite == undefined) ? new Sprite('img/spritesheet.png', this.width, this.height, 0, 0, 1, 0) : sprite;
}
Building.prototype.setSize = function(w, h) {
	this.width = w;
	this.height = h;
	this.sprite.width = w;
	this.sprite.height = h;
}

var Grass1 = function() {
	Building.apply(this, arguments);

	this.buildingTypeId = 0; // It's a tree
	this.setSize(128, 64);

	this.tileWidth = 1;
	this.tileHeight = 1;
}
Grass1.prototype = new Building();

var Grass2 = function() {
	Building.apply(this, arguments);

	this.buildingTypeId = 2; // It's a tree
	this.sprite.setOffset(128, 0);
	this.setSize(128, 64);

	this.tileWidth = 1;
	this.tileHeight = 1;
}
Grass2.prototype = new Building();

var Grass3 = function() {
	Building.apply(this, arguments);

	this.buildingTypeId = 3; // It's a tree
	this.sprite.setOffset(0, 64);
	this.setSize(128, 64);

	this.tileWidth = 1;
	this.tileHeight = 1;
}
Grass3.prototype = new Building();

var BuildingPortion = function(buildingTypeId, x, y) {
	this.buildingTypeId = buildingTypeId;
	this.x = x;
	this.y = y;
}