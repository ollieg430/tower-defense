namespace SpriteKind {
    export const Icon = SpriteKind.create()
    export const Tower = SpriteKind.create()
}
function MakeATower (Image2: Image, Cost: number, name: string) {
    NewTower = sprites.create(Image2, SpriteKind.Tower)
    sprites.setDataNumber(NewTower, "cost", Cost)
    sprites.setDataString(NewTower, "name", name)
    return NewTower
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Cursor.overlapsWith(WizzardHat)) {
        thingWeAreHolding = MakeATower(img`
            . . . . . . c c c . . . . . . . 
            . . . . . . c 8 b c . . . . . . 
            . . . . c c c 8 8 c c c . . . . 
            . . c c c c 8 8 8 8 c b c c . . 
            . c b b 8 b 8 8 8 8 b 8 b b c . 
            . c b 8 8 b b 8 8 b b 8 8 b c . 
            . . c 8 8 8 b b b b 8 8 8 f . . 
            . . f f 8 8 8 8 8 8 8 8 f f . . 
            . . f f f b f e e f b f f f . . 
            . . f f f 1 f b b f 1 f f f . . 
            . . . f f b b b b b b f f . . . 
            . . . e e f e e e e f e e . . . 
            . . e b f b 8 b b 8 b c b e . . 
            . . e e f 8 8 8 8 8 8 f e e . . 
            . . . . c b 8 8 8 8 b c . . . . 
            . . . . . f f f f f f . . . . . 
            `, 1, "Wizzard")
        Cursor.setFlag(SpriteFlag.Invisible, true)
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
let thingWeAreHolding: Sprite = null
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
game.onUpdate(function () {
    if (thingWeAreHolding) {
        thingWeAreHolding.setPosition(Cursor.x, Cursor.y)
    }
})
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
