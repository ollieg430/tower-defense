let NewEnemy: Sprite = null
tiles.loadMap(tiles.createSmallMap(tilemap`level2`))
let EnemySpeed = 50
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
