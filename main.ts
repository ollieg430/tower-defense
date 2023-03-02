namespace SpriteKind {
    export const Icon = SpriteKind.create()
    export const Tower = SpriteKind.create()
}
function MakeATower (Name: Image, Image2: Image, Cost: number) {
    NewTower = sprites.create(Image2, SpriteKind.Tower)
    sprites.setDataString(NewTower, "name", "")
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Cursor.overlapsWith(WizzardHat)) {
    	
    }
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    if (tiles.tileIs(tiles.locationOfSprite(sprite), assets.tile`myTile6`)) {
        sprite.vy = 0
        sprite.vx = EnemySpeed
    } else if (tiles.tileIs(tiles.locationOfSprite(sprite), assets.tile`myTile7`)) {
        sprite.vy = EnemySpeed
        sprite.vx = 0
    }
})
let NewEnemy: Sprite = null
let NewTower: Sprite = null
let Cursor: Sprite = null
let WizzardHat: Sprite = null
let EnemySpeed = 0
tiles.loadMap(tiles.createSmallMap(tilemap`level2`))
EnemySpeed = 50
tiles.coverAllTiles(assets.tile`myTile6`, assets.tile`myTile1`)
tiles.coverAllTiles(assets.tile`myTile7`, assets.tile`myTile1`)
WizzardHat = sprites.create(assets.image`WizzardHatIcon`, SpriteKind.Icon)
Cursor = sprites.create(assets.image`Cursor`, SpriteKind.Player)
controller.moveSprite(Cursor, 70, 70)
Cursor.setFlag(SpriteFlag.GhostThroughWalls, true)
WizzardHat.x = 105
WizzardHat.y = 70
game.onUpdateInterval(500, function () {
    NewEnemy = sprites.create(img`
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 7 7 7 3 3 3 3 
        3 3 3 3 3 3 3 3 3 7 7 7 3 3 3 3 
        3 3 7 7 7 3 3 3 3 7 7 7 3 3 3 3 
        3 3 7 7 7 3 3 3 3 3 3 3 3 3 3 3 
        3 3 7 7 7 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 7 7 7 3 3 
        3 3 3 3 3 3 3 3 3 3 3 7 7 7 3 3 
        3 3 3 3 3 3 3 3 3 3 3 7 7 7 3 3 
        3 3 3 3 3 7 7 7 7 7 7 7 7 7 3 3 
        3 3 3 3 3 7 7 7 7 7 7 7 7 7 3 3 
        3 3 3 3 3 7 7 7 7 7 7 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(NewEnemy, assets.tile`myTile2`)
    NewEnemy.vy = EnemySpeed
})
