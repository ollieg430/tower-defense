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
let EnemySpeed = 0
tiles.loadMap(tiles.createSmallMap(tilemap`level2`))
EnemySpeed = 50
tiles.coverAllTiles(assets.tile`myTile6`, assets.tile`myTile1`)
tiles.coverAllTiles(assets.tile`myTile7`, assets.tile`myTile1`)
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
