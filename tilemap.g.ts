// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`14000f00010401010101010101010101010101010101010101050101010101010101010101010101010101010102010101010106020202020501010101010101010201010101010201010101020101010101010101020101010101020101010102010101010101010102010101010102010101010201010101010101010201010101010201010101020101010101010101020101010101020101010102010101010101010102010101010102010101010201010101010101010201010101010201010101020101010101010101020101010101020101010102010101010101010102010101010102010101010201010101010101010201010101010201010101020101010101010101060202020202070101010106020202020202030101010101010101010101010101010101010101`, img`
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 
2 . 2 2 2 2 2 . 2 2 2 2 . 2 2 2 2 2 2 2 
2 . 2 2 2 2 2 . 2 2 2 2 . 2 2 2 2 2 2 2 
2 . 2 2 2 2 2 . 2 2 2 2 . 2 2 2 2 2 2 2 
2 . 2 2 2 2 2 . 2 2 2 2 . 2 2 2 2 2 2 2 
2 . 2 2 2 2 2 . 2 2 2 2 . 2 2 2 2 2 2 2 
2 . 2 2 2 2 2 . 2 2 2 2 . 2 2 2 2 2 2 2 
2 . 2 2 2 2 2 . 2 2 2 2 . 2 2 2 2 2 2 2 
2 . 2 2 2 2 2 . 2 2 2 2 . 2 2 2 2 2 2 2 
2 . 2 2 2 2 2 . 2 2 2 2 . 2 2 2 2 2 2 2 
2 . 2 2 2 2 2 . 2 2 2 2 . 2 2 2 2 2 2 2 
2 . . . . . . . 2 2 2 2 . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency8,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8], TileScale.Eight);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "transparency8":return transparency8;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
