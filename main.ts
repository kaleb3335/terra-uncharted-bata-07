namespace SpriteKind {
    export const slope = SpriteKind.create()
}

scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile76
    `, function on_overlap_tile(sprite: Sprite, location: tiles.Location) {
    while (player1.tilemapLocation() == location) {
        sprite.y += -0.01
    }
    if (sprite.isHittingTile(CollisionDirection.Right) || sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.y += -3
    }
    
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function on_up_pressed() {
    if (world_gen_done == 1) {
        if (inmenu == 0) {
            if (tiles.tileAtLocationEquals(player1.tilemapLocation(), assets.tile`
                    myTile44
                `) || tiles.tileAtLocationEquals(player1.tilemapLocation(), assets.tile`
                    myTile50
                `)) {
                player1.ay = 100
                if (player1.isHittingTile(CollisionDirection.Bottom)) {
                    player1.vy = -60
                }
                
            } else {
                player1.ay = 500
                if (player1.isHittingTile(CollisionDirection.Bottom)) {
                    player1.vy = -200
                }
                
            }
            
        }
        
    }
    
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function on_b_pressed() {
    
    if (inmenu == 0) {
        if (inbuild == 0) {
            inmenu = 1
            myMenu = miniMenu.createMenu(miniMenu.createMenuItem("dirt pick"), miniMenu.createMenuItem("dirt axe", assets.image`
                    dirt axe
                `), miniMenu.createMenuItem("mining stick", img`
                        . . . . . . . . . . . . . . . . 
                                        . . . . . . e e e e e . . . . . 
                                        . . e . e e . . . . . e e . . . 
                                        . . e e e . . . . . . . . . . . 
                                        . . e . e e . . . . . . . . . . 
                                        . e e . . e e . . . . . . . . . 
                                        . e . . . . e e . . . . . . . . 
                                        . e e . . . . e . . . . . . . . 
                                        . . e . . . . . e . . . . . . . 
                                        . . . e . . . . e e . . . . . . 
                                        . . . . e . . . . e . . . . . . 
                                        . . . . . . . . . e . . . . . . 
                                        . . . . . . . . . e e . . . . . 
                                        . . . . . . . . . . e e . . . . 
                                        . . . . . . . . . . . e e . . . 
                                        . . . . . . . . . . . . e . . .
                    `))
            myMenu.x = 40
            myMenu.y = 80
            myMenu.setFlag(SpriteFlag.RelativeToCamera, true)
            myMenu.onButtonPressed(controller.A, function on_button_pressed(selection: any, selectedIndex: any) {
                
                if (selectedIndex == 0) {
                    if (dirt_pick == 0) {
                        if (dirt >= 3 && sticks >= 2) {
                            dirt_pick = 1
                            game.showLongText("Crafted dirt pick", DialogLayout.Bottom)
                        } else {
                            game.showLongText("you do not have dirt (3) and sticks (2)", DialogLayout.Bottom)
                        }
                        
                    } else if (dirt_pick == 1) {
                        dirt_pick = 2
                        game.showLongText("Equipped dirt pick", DialogLayout.Bottom)
                        if (dirt_axe == 2) {
                            dirt_axe = 1
                            game.showLongText("unequipped dirt axe", DialogLayout.Bottom)
                        } else if (mstick == 2) {
                            mstick = 1
                            game.showLongText("unequipped mining stick", DialogLayout.Bottom)
                        }
                        
                    }
                    
                } else if (selectedIndex == 1) {
                    if (dirt_axe == 0) {
                        if (dirt >= 3 && sticks >= 2) {
                            dirt_axe = 1
                            game.showLongText("Crafted dirt axe", DialogLayout.Bottom)
                        } else {
                            game.showLongText("you do not have dirt (3) and sticks (2)", DialogLayout.Bottom)
                        }
                        
                    } else if (dirt_axe == 1) {
                        dirt_axe = 2
                        game.showLongText("Equipped dirt axe", DialogLayout.Bottom)
                        if (dirt_pick == 2) {
                            dirt_pick = 1
                            game.showLongText("unequipped dirt pick", DialogLayout.Bottom)
                        } else if (mstick == 2) {
                            mstick = 1
                            game.showLongText("unequipped mining stick", DialogLayout.Bottom)
                        }
                        
                    }
                    
                } else if (selectedIndex == 2) {
                    if (mstick == 0) {
                        if (sticks >= 3) {
                            mstick = 1
                            game.showLongText("Crafted mining stick", DialogLayout.Bottom)
                        } else {
                            game.showLongText("you do not have sticks (3)", DialogLayout.Bottom)
                        }
                        
                    } else if (mstick == 1) {
                        mstick = 2
                        game.showLongText("Equipped mining stick", DialogLayout.Bottom)
                        if (dirt_pick == 2) {
                            dirt_pick = 1
                            game.showLongText("unequipped dirt pick", DialogLayout.Bottom)
                        } else if (dirt_axe == 2) {
                            dirt_axe = 1
                            game.showLongText("unequipped dirt axe", DialogLayout.Bottom)
                        }
                        
                    }
                    
                }
                
                inmenu = 0
                sprites.destroyAllSpritesOfKind(SpriteKind.MiniMenu)
            })
        }
        
    }
    
    if (inmenu == 0) {
        if (inbuild == 1) {
            inmenu = 1
            myMenu = miniMenu.createMenu(miniMenu.createMenuItem("dirt", assets.tile`
                    myTile1
                `), miniMenu.createMenuItem("Craft Tb", assets.tile`
                    myTile9
                `), miniMenu.createMenuItem("stone wall", assets.tile`
                    myTile8
                `), miniMenu.createMenuItem("blk stone wall", assets.tile`
                    myTile7
                `), miniMenu.createMenuItem("wood backing", assets.tile`
                    myTile17
                `), miniMenu.createMenuItem("wood floor", assets.tile`
                    myTile18
                `), miniMenu.createMenuItem("wood cling", assets.tile`
                    myTile23
                `))
            myMenu.setDimensions(100, 80)
            myMenu.x = 50
            myMenu.y = 80
            myMenu.setFlag(SpriteFlag.RelativeToCamera, true)
            myMenu.onButtonPressed(controller.A, function on_button_pressed2(selection2: any, selectedIndex2: any) {
                
                if (selectedIndex2 == 0) {
                    if (dirt >= 1) {
                        timer.after(500, function on_after() {
                            
                            buildM = 1
                        })
                    } else {
                        game.showLongText("you do not have dirt ", DialogLayout.Bottom)
                    }
                    
                } else if (selectedIndex2 == 1) {
                    if (wood >= 1) {
                        timer.after(500, function on_after2() {
                            
                            buildM = 2
                        })
                    } else {
                        game.showLongText("you do not have a crafting table", DialogLayout.Bottom)
                    }
                    
                } else if (selectedIndex2 == 2) {
                    if (stone_wall >= 1) {
                        timer.after(500, function on_after3() {
                            
                            buildM = 3
                        })
                    } else {
                        game.showLongText("you do not have stone wall", DialogLayout.Bottom)
                    }
                    
                } else if (selectedIndex2 == 3) {
                    if (blk_stone_wall >= 1) {
                        timer.after(500, function on_after4() {
                            
                            buildM = 4
                        })
                    } else {
                        game.showLongText("you do not have blk stone wall", DialogLayout.Bottom)
                    }
                    
                } else if (selectedIndex2 == 4) {
                    if (wdwall >= 1) {
                        timer.after(500, function on_after5() {
                            
                            buildM = 5
                        })
                    } else {
                        game.showLongText("you do not have wood backing", DialogLayout.Bottom)
                    }
                    
                } else if (selectedIndex2 == 5) {
                    if (wdfloor >= 1) {
                        timer.after(500, function on_after6() {
                            
                            buildM = 6
                        })
                    } else {
                        game.showLongText("you do not have wood floor", DialogLayout.Bottom)
                    }
                    
                } else if (selectedIndex2 == 6) {
                    if (wdciling >= 1) {
                        timer.after(500, function on_after7() {
                            
                            buildM = 7
                        })
                    } else {
                        game.showLongText("you do not have wood ceiling", DialogLayout.Bottom)
                    }
                    
                }
                
                sprites.destroyAllSpritesOfKind(SpriteKind.MiniMenu)
                inmenu = 0
            })
        }
        
    }
    
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile75
    `, function on_overlap_tile2(sprite2: Sprite, location2: tiles.Location) {
    while (player1.tilemapLocation() == location2) {
        sprite2.y += -0.01
    }
    if (sprite2.isHittingTile(CollisionDirection.Right) || sprite2.isHittingTile(CollisionDirection.Left)) {
        sprite2.y += -3
    }
    
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile24
    `, function on_overlap_tile3(sprite3: Sprite, location3: tiles.Location) {
    while (player1.tilemapLocation() == location3) {
        sprite3.y += -0.01
    }
    if (sprite3.isHittingTile(CollisionDirection.Right) || sprite3.isHittingTile(CollisionDirection.Left)) {
        sprite3.y += -3
    }
    
})
function make_trees(num: number) {
    statusbar.value += load_p
    pause(100)
    for (let value8 of tiles.getTilesByType(assets.tile`
        myTile15
    `)) {
        if (tiles.tileAtLocationEquals(value8.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                transparency16
            `)) {
            if (Math.percentChance(randint(35, 75))) {
                tiles.setTileAt(value8.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                        myTile10
                    `)
            }
            
        }
        
    }
    for (let value9 of tiles.getTilesByType(assets.tile`
        myTile10
    `)) {
        if (tiles.tileAtLocationEquals(value9.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                transparency16
            `)) {
            tiles.setTileAt(value9.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                    myTile11
                `)
        }
        
    }
    for (let index = 0; index < 2; index++) {
        for (let index2 = 0; index2 < randint(1, 4); index2++) {
            for (let value10 of tiles.getTilesByType(assets.tile`
                myTile11
            `)) {
                if (tiles.tileAtLocationEquals(value10.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                        transparency16
                    `)) {
                    if (Math.percentChance(50)) {
                        tiles.setTileAt(value10.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                                myTile11
                            `)
                    }
                    
                }
                
            }
        }
    }
    for (let value11 of tiles.getTilesByType(assets.tile`
        myTile11
    `)) {
        if (tiles.tileAtLocationEquals(value11.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                transparency16
            `)) {
            tiles.setTileAt(value11.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                    myTile12
                `)
        }
        
    }
    for (let value12 of tiles.getTilesByType(assets.tile`
        myTile12
    `)) {
        if (tiles.tileAtLocationEquals(value12.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                transparency16
            `)) {
            tiles.setTileAt(value12.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                    myTile20
                `)
        }
        
        if (tiles.tileAtLocationEquals(value12.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                transparency16
            `)) {
            tiles.setTileAt(value12.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                    myTile49
                `)
        }
        
    }
    for (let value82 of tiles.getTilesByType(assets.tile`
        myTile65
    `)) {
        if (tiles.tileAtLocationEquals(value82.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                transparency16
            `)) {
            if (Math.percentChance(randint(45, 80))) {
                tiles.setTileAt(value82.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                        myTile67
                    `)
            }
            
        }
        
    }
    for (let index3 = 0; index3 < 2; index3++) {
        for (let index4 = 0; index4 < randint(1, 4); index4++) {
            for (let value102 of tiles.getTilesByType(assets.tile`
                myTile67
            `)) {
                if (tiles.tileAtLocationEquals(value102.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                        transparency16
                    `)) {
                    if (Math.percentChance(50)) {
                        tiles.setTileAt(value102.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                                myTile69
                            `)
                    }
                    
                }
                
            }
            for (let value103 of tiles.getTilesByType(assets.tile`
                myTile69
            `)) {
                if (tiles.tileAtLocationEquals(value103.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                        transparency16
                    `)) {
                    if (Math.percentChance(50)) {
                        tiles.setTileAt(value103.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                                myTile67
                            `)
                    }
                    
                }
                
            }
        }
    }
    for (let value112 of tiles.getTilesByType(assets.tile`
        myTile67
    `)) {
        if (tiles.tileAtLocationEquals(value112.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                transparency16
            `)) {
            tiles.setTileAt(value112.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                    myTile68
                `)
        }
        
    }
    for (let value113 of tiles.getTilesByType(assets.tile`
        myTile69
    `)) {
        if (tiles.tileAtLocationEquals(value113.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                transparency16
            `)) {
            tiles.setTileAt(value113.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                    myTile68
                `)
        }
        
    }
    for (let value83 of tiles.getTilesByType(assets.tile`
        myTile65
    `)) {
        if (tiles.tileAtLocationEquals(value83.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                transparency16
            `)) {
            if (Math.percentChance(randint(50, 100))) {
                tiles.setTileAt(value83.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                        myTile70
                    `)
            }
            
        }
        
    }
    for (let value84 of tiles.getTilesByType(assets.tile`
        myTile70
    `)) {
        if (tiles.tileAtLocationEquals(value84.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                transparency16
            `)) {
            tiles.setTileAt(value84.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                    myTile79
                `)
        }
        
    }
    for (let index5 = 0; index5 < 2; index5++) {
        for (let index6 = 0; index6 < randint(1, 4); index6++) {
            for (let value104 of tiles.getTilesByType(assets.tile`
                myTile79
            `)) {
                if (tiles.tileAtLocationEquals(value104.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                        transparency16
                    `)) {
                    if (Math.percentChance(50)) {
                        tiles.setTileAt(value104.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                                myTile80
                            `)
                    }
                    
                }
                
            }
            for (let value105 of tiles.getTilesByType(assets.tile`
                myTile80
            `)) {
                if (tiles.tileAtLocationEquals(value105.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                        transparency16
                    `)) {
                    if (Math.percentChance(50)) {
                        tiles.setTileAt(value105.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                                myTile79
                            `)
                    }
                    
                }
                
            }
        }
    }
    for (let value114 of tiles.getTilesByType(assets.tile`
        myTile80
    `)) {
        if (tiles.tileAtLocationEquals(value114.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                transparency16
            `)) {
            tiles.setTileAt(value114.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                    myTile78
                `)
        }
        
    }
    for (let value115 of tiles.getTilesByType(assets.tile`
        myTile80
    `)) {
        if (tiles.tileAtLocationEquals(value115.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                transparency16
            `)) {
            tiles.setTileAt(value115.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                    myTile77
                `)
        }
        
    }
    for (let value116 of tiles.getTilesByType(assets.tile`
        myTile74
    `)) {
        if (tiles.tileAtLocationEquals(value116.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                transparency16
            `)) {
            tiles.setTileAt(value116.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                    myTile80
                `)
        }
        
    }
    for (let value117 of tiles.getTilesByType(assets.tile`
        myTile79
    `)) {
        if (tiles.tileAtLocationEquals(value117.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                transparency16
            `)) {
            tiles.setTileAt(value117.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                    myTile80
                `)
        }
        
    }
    for (let value118 of tiles.getTilesByType(assets.tile`
        myTile80
    `)) {
        if (tiles.tileAtLocationEquals(value118.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                transparency16
            `)) {
            tiles.setTileAt(value118.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                    myTile80
                `)
        }
        
    }
    for (let value119 of tiles.getTilesByType(assets.tile`
        myTile80
    `)) {
        if (tiles.tileAtLocationEquals(value119.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                transparency16
            `)) {
            tiles.setTileAt(value119.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                    myTile81
                `)
        }
        
    }
    for (let value1110 of tiles.getTilesByType(assets.tile`
        myTile81
    `)) {
        if (tiles.tileAtLocationEquals(value1110.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                transparency16
            `)) {
            tiles.setTileAt(value1110.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                    myTile83
                `)
        }
        
    }
    for (let value1111 of tiles.getTilesByType(assets.tile`
        myTile81
    `)) {
        if (tiles.tileAtLocationEquals(value1111.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                transparency16
            `)) {
            tiles.setTileAt(value1111.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                    myTile82
                `)
        }
        
    }
}

scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile9
    `, function on_overlap_tile4(sprite4: Sprite, location4: tiles.Location) {
    if (controller.A.isPressed()) {
        if (inbuild == 0) {
            if (inmenu == 0) {
                timer.throttle("action", 500, function on_throttle() {
                    
                    blk_stone = 15
                    inmenu = 1
                    myMenu = miniMenu.createMenu(miniMenu.createMenuItem("craft stone wall", assets.tile`
                            myTile8
                        `), miniMenu.createMenuItem("Craft blk stone wall", assets.tile`
                            myTile7
                        `), miniMenu.createMenuItem("craft wooden backing", assets.tile`
                            myTile17
                        `), miniMenu.createMenuItem("wooden floor", assets.tile`
                            myTile18
                        `), miniMenu.createMenuItem("wooden ceiling", assets.tile`
                            myTile23
                        `))
                    myMenu.setFlag(SpriteFlag.RelativeToCamera, true)
                    myMenu.onButtonPressed(controller.A, function on_button_pressed3(selection5: any, selectedIndex5: any) {
                        
                        if (selectedIndex5 == 0) {
                            if (stone >= 15) {
                                stone_wall += 5
                                stone += -15
                            } else {
                                game.showLongText("you do not have stone (15) ", DialogLayout.Bottom)
                            }
                            
                        } else if (selectedIndex5 == 1) {
                            if (blk_stone >= 15) {
                                blk_stone_wall += 5
                                blk_stone += -15
                            } else {
                                game.showLongText("you do not have black stone (15)", DialogLayout.Bottom)
                            }
                            
                        } else if (selectedIndex5 == 2) {
                            if (wood >= 15) {
                                wdwall += 5
                                wood += -15
                            } else {
                                game.showLongText("you do not have wood (15)", DialogLayout.Bottom)
                            }
                            
                        } else if (selectedIndex5 == 3) {
                            if (wood >= 15) {
                                wdfloor += 5
                                wood += -15
                            } else {
                                game.showLongText("you do not have wood (15)", DialogLayout.Bottom)
                            }
                            
                        } else if (selectedIndex5 == 4) {
                            if (wood >= 15) {
                                wdciling += 5
                                wood += -15
                            } else {
                                game.showLongText("you do not have wood wood (15)", DialogLayout.Bottom)
                            }
                            
                        }
                        
                        sprites.destroyAllSpritesOfKind(SpriteKind.MiniMenu)
                        timer.debounce("action", 500, function on_debounce() {
                            
                            inmenu = 0
                        })
                    })
                })
            }
            
        }
        
    }
    
})
function makeplayer() {
    
    player1 = sprites.create(img`
            . . . . . . . c c c . . . . . . 
                    . . . . . . c b 5 c . . . . . . 
                    . . . . c c c 5 5 c c c . . . . 
                    . . c c b c 5 5 5 5 c c c c . . 
                    . c b b 5 b 5 5 5 5 b 5 b b c . 
                    . c b 5 5 b b 5 5 b b 5 5 b c . 
                    . . f 5 5 5 b b b b 5 5 5 c . . 
                    . . f f 5 5 5 5 5 5 5 5 f f . . 
                    . . f f f b f e e f b f f f . . 
                    . . f f f 1 f b b f 1 f f f . . 
                    . . . f f b b b b b b f f . . . 
                    . . . e e f e e e e f e e . . . 
                    . . e b c b 5 b b 5 b f b e . . 
                    . . e e f 5 5 5 5 5 5 f e e . . 
                    . . . . c b 5 5 5 5 b c . . . . 
                    . . . . . f f f f f f . . . . .
        `, SpriteKind.Player)
    select = sprites.create(img`
            5 5 5 5 . . . . . . . . 5 5 5 5 
                    5 5 . . . . . . . . . . . . 5 5 
                    5 . . . . . . . . . . . . . . 5 
                    5 . . . . . . . . . . . . . . 5 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    5 . . . . . . . . . . . . . . 5 
                    5 . . . . . . . . . . . . . . 5 
                    5 5 . . . . . . . . . . . . 5 5 
                    5 5 5 5 . . . . . . . . 5 5 5 5
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(player1, assets.tile`
        myTile28
    `)
    player1.setFlag(SpriteFlag.ShowPhysics, true)
    player1.ay = 500
    sprites.destroy(statusbar)
    scene.cameraFollowSprite(player1)
    stats.turnStats(true)
    tiles.setCurrentTilemap(tilemap_1)
    playerhealth = statusbars.create(15, 3, StatusBarKind.Health)
    playerhealth.value = 100
    statusbar.setColor(2, 12, 5)
    playerhealth.attachToSprite(player1)
    world_gen_done = 1
}

function make_underworld() {
    
    statusbar.value += load_p
    col = 16
    pause(100)
    for (let index7 = 0; index7 < 16; index7++) {
        tiles.setTileAt(tiles.getTileLocation(col, 239), assets.tile`
                myTile3
            `)
        col += 16
    }
    for (let index8 = 0; index8 < 16; index8++) {
        for (let value53 of tiles.getTilesByType(assets.tile`
            myTile3
        `)) {
            tiles.setTileAt(value53.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                    myTile3
                `)
            tiles.setTileAt(value53.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                    myTile3
                `)
            if (Math.percentChance(randint(50, 80))) {
                tiles.setTileAt(value53.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                        myTile3
                    `)
            }
            
        }
    }
    for (let index9 = 0; index9 < 16; index9++) {
        for (let value62 of tiles.getTilesByType(assets.tile`
            myTile3
        `)) {
            if (tiles.tileAtLocationEquals(value62.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                    transparency16
                `)) {
                tiles.setTileAt(value62.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                        myTile3
                    `)
            }
            
        }
    }
    for (let value63 of tiles.getTilesByType(assets.tile`
        myTile3
    `)) {
        if (tiles.tileAtLocationEquals(value63.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                transparency16
            `)) {
            tiles.setTileAt(value63.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                    myTile6
                `)
        }
        
    }
    for (let value1132 of tiles.getTilesByType(assets.tile`
        myTile6
    `)) {
        if (tiles.tileAtLocationEquals(value1132.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                myTile3
            `)) {
            if (Math.percentChance(15)) {
                tiles.setTileAt(value1132.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                        transparency16
                    `)
            }
            
        }
        
    }
    for (let index10 = 0; index10 < 25; index10++) {
        for (let value132 of tiles.getTilesByType(assets.tile`
            transparency16
        `)) {
            if (Math.percentChance(randint(0, 40))) {
                if (tiles.tileAtLocationEquals(value132.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                        myTile3
                    `)) {
                    tiles.setTileAt(value132.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                            transparency16
                        `)
                }
                
            } else if (Math.percentChance(randint(0, 80))) {
                if (tiles.tileAtLocationEquals(value132.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                        myTile3
                    `) || tiles.tileAtLocationEquals(value132.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                        myTile6
                    `)) {
                    tiles.setTileAt(value132.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                            transparency16
                        `)
                }
                
            } else if (Math.percentChance(randint(0, 40))) {
                if (tiles.tileAtLocationEquals(value132.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                        myTile3
                    `)) {
                    tiles.setTileAt(value132.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                            transparency16
                        `)
                }
                
            } else if (Math.percentChance(randint(0, 80))) {
                if (tiles.tileAtLocationEquals(value132.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                        myTile3
                    `)) {
                    tiles.setTileAt(value132.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                            transparency16
                        `)
                }
                
            }
            
        }
    }
    col = 0
    for (let index11 = 0; index11 < 255; index11++) {
        col += 1
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(col, 234), assets.tile`
                transparency16
            `)) {
            tiles.setTileAt(tiles.getTileLocation(col, 234), assets.tile`
                    myTile50
                `)
        }
        
    }
    for (let value632 of tiles.getTilesByType(assets.tile`
        myTile50
    `)) {
        tiles.setTileAt(value632.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                myTile44
            `)
    }
    for (let index12 = 0; index12 < 21; index12++) {
        for (let value6322 of tiles.getTilesByType(assets.tile`
            myTile44
        `)) {
            if (tiles.tileAtLocationEquals(value6322.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                    transparency16
                `)) {
                tiles.setTileAt(value6322.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                        myTile44
                    `)
            }
            
        }
    }
    for (let value633 of tiles.getTilesByType(assets.tile`
        myTile3
    `)) {
        if (tiles.tileAtLocationEquals(value633.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                transparency16
            `) && tiles.tileAtLocationEquals(value633.getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), assets.tile`
                transparency16
            `)) {
            tiles.setTileAt(value633.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                    myTile6
                `)
        }
        
    }
    for (let value6323 of tiles.getTilesByType(assets.tile`
        myTile6
    `)) {
        if (Math.percentChance(10)) {
            tiles.setTileAt(value6323.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                    myTile42
                `)
        } else if (Math.percentChance(10)) {
            tiles.setTileAt(value6323.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                    myTile39
                `)
        } else if (Math.percentChance(10)) {
            tiles.setTileAt(value6323.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                    myTile52
                `)
        } else if (Math.percentChance(10)) {
            tiles.setTileAt(value6323.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                    myTile33
                `)
        }
        
    }
    for (let value822 of tiles.getTilesByType(assets.tile`
        myTile6
    `)) {
        if (tiles.tileAtLocationEquals(value822.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                transparency16
            `)) {
            if (Math.percentChance(randint(35, 75))) {
                tiles.setTileAt(value822.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                        myTile43
                    `)
            }
            
        }
        
    }
    for (let value92 of tiles.getTilesByType(assets.tile`
        myTile43
    `)) {
        if (tiles.tileAtLocationEquals(value92.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                transparency16
            `)) {
            tiles.setTileAt(value92.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                    myTile41
                `)
        }
        
    }
    for (let index13 = 0; index13 < 2; index13++) {
        for (let index14 = 0; index14 < randint(1, 4); index14++) {
            for (let value1022 of tiles.getTilesByType(assets.tile`
                myTile41
            `)) {
                if (tiles.tileAtLocationEquals(value1022.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                        transparency16
                    `)) {
                    if (Math.percentChance(50)) {
                        tiles.setTileAt(value1022.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                                myTile45
                            `)
                    }
                    
                }
                
            }
            for (let value1032 of tiles.getTilesByType(assets.tile`
                myTile45
            `)) {
                if (tiles.tileAtLocationEquals(value1032.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                        transparency16
                    `)) {
                    if (Math.percentChance(50)) {
                        tiles.setTileAt(value1032.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                                myTile41
                            `)
                    }
                    
                }
                
            }
        }
    }
    for (let value1122 of tiles.getTilesByType(assets.tile`
        myTile41
    `)) {
        if (tiles.tileAtLocationEquals(value1122.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                transparency16
            `)) {
            tiles.setTileAt(value1122.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                    myTile47
                `)
        }
        
    }
    for (let value1133 of tiles.getTilesByType(assets.tile`
        myTile45
    `)) {
        if (tiles.tileAtLocationEquals(value1133.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                transparency16
            `)) {
            tiles.setTileAt(value1133.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                    myTile47
                `)
        }
        
    }
}

function world_gen() {
    make_stone()
    make_dirt()
    make_caves()
    make_underworld()
    make_sticks()
    make_trees(1)
    wg_done()
    console.log(tiles.getTilesByType(assets.tile`
        myTile13
    `).length + (tiles.getTilesByType(assets.tile`
        myTile14
    `).length + (tiles.getTilesByType(assets.tile`
        myTile16
    `).length + (tiles.getTilesByType(assets.tile`
        myTile34
    `).length + (tiles.getTilesByType(assets.tile`
        myTile35
    `).length + (tiles.getTilesByType(assets.tile`
        myTile36
    `).length + (tiles.getTilesByType(assets.tile`
        myTile37
    `).length + (tiles.getTilesByType(assets.tile`
        myTile38
    `).length + (tiles.getTilesByType(assets.tile`
        myTile15
    `).length + (tiles.getTilesByType(assets.tile`
        myTile1
    `).length + (tiles.getTilesByType(assets.tile`
        myTile28
    `).length + (tiles.getTilesByType(assets.tile`
        myTile26
    `).length + (tiles.getTilesByType(assets.tile`
        myTile19
    `).length + (tiles.getTilesByType(assets.tile`
        myTile10
    `).length + (tiles.getTilesByType(assets.tile`
        myTile11
    `).length + (tiles.getTilesByType(assets.tile`
        myTile46
    `).length + (tiles.getTilesByType(assets.tile`
        myTile49
    `).length + (tiles.getTilesByType(assets.tile`
        myTile60
    `).length + (tiles.getTilesByType(assets.tile`
        myTile66
    `).length + (tiles.getTilesByType(assets.tile`
        myTile65
    `).length + (tiles.getTilesByType(assets.tile`
        myTile64
    `).length + (tiles.getTilesByType(assets.tile`
        myTile63
    `).length + (tiles.getTilesByType(assets.tile`
        myTile62
    `).length + (tiles.getTilesByType(assets.tile`
        myTile61
    `).length + (tiles.getTilesByType(assets.tile`
        myTile67
    `).length + (tiles.getTilesByType(assets.tile`
        myTile68
    `).length + (tiles.getTilesByType(assets.tile`
        myTile69
    `).length + (tiles.getTilesByType(assets.tile`
        myTile71
    `).length + (tiles.getTilesByType(assets.tile`
        myTile12
    `).length + (tiles.getTilesByType(assets.tile`
        myTile20
    `).length + (tiles.getTilesByType(assets.tile`
        myTile40
    `).length + (tiles.getTilesByType(assets.tile`
        myTile39
    `).length + (tiles.getTilesByType(assets.tile`
        myTile41
    `).length + (tiles.getTilesByType(assets.tile`
        myTile42
    `).length + (tiles.getTilesByType(assets.tile`
        myTile44
    `).length + (tiles.getTilesByType(assets.tile`
        myTile53
    `).length + (tiles.getTilesByType(assets.tile`
        myTile52
    `).length + (tiles.getTilesByType(assets.tile`
        myTile50
    `).length + (tiles.getTilesByType(assets.tile`
        myTile47
    `).length + (tiles.getTilesByType(assets.tile`
        myTile45
    `).length + (tiles.getTilesByType(assets.tile`
        myTile55
    `).length + (tiles.getTilesByType(assets.tile`
        myTile56
    `).length + (tiles.getTilesByType(assets.tile`
        myTile76
    `).length + (tiles.getTilesByType(assets.tile`
        myTile76
    `).length + (tiles.getTilesByType(assets.tile`
        myTile75
    `).length + (tiles.getTilesByType(assets.tile`
        myTile3
    `).length + (tiles.getTilesByType(assets.tile`
        myTile6
    `).length + (tiles.getTilesByType(assets.tile`
        myTile57
    `).length + (tiles.getTilesByType(assets.tile`
        myTile81
    `).length + (tiles.getTilesByType(assets.tile`
        myTile74
    `).length + (tiles.getTilesByType(assets.tile`
        myTile80
    `).length + (tiles.getTilesByType(assets.tile`
        myTile79
    `).length + (tiles.getTilesByType(assets.tile`
        myTile78
    `).length + (tiles.getTilesByType(assets.tile`
        myTile77
    `).length + (tiles.getTilesByType(assets.tile`
        myTile70
    `).length + (tiles.getTilesByType(assets.tile`
        myTile54
    `).length + (tiles.getTilesByType(assets.tile`
        myTile82
    `).length + (tiles.getTilesByType(assets.tile`
        myTile83
    `).length + tiles.getTilesByType(assets.tile`
        myTile83
    `).length))))))))))))))))))))))))))))))))))))))))))))))))))))))))))
}

function wg_done() {
    tileUtil.setWalls(assets.tile`
        myTile14
    `, true)
    tileUtil.setWalls(assets.tile`
        myTile16
    `, true)
    tileUtil.setWalls(assets.tile`
        myTile3
    `, true)
    tileUtil.setWalls(assets.tile`
        myTile55
    `, true)
    tileUtil.setWalls(assets.tile`
        myTile6
    `, true)
    tileUtil.setWalls(assets.tile`
        myTile56
    `, true)
    tileUtil.setWalls(assets.tile`
        myTile57
    `, true)
    tileUtil.setWalls(assets.tile`
        myTile53
    `, true)
    tileUtil.setWalls(assets.tile`
        myTile13
    `, true)
    tileUtil.setWalls(assets.tile`
        myTile1
    `, true)
    tileUtil.setWalls(assets.tile`
        myTile15
    `, true)
    tileUtil.setWalls(assets.tile`
        myTile60
    `, true)
    tileUtil.setWalls(assets.tile`
        myTile61
    `, true)
    tileUtil.setWalls(assets.tile`
        myTile10
    `, true)
    tileUtil.setWalls(assets.tile`
        myTile11
    `, true)
    tileUtil.setWalls(assets.tile`
        myTile65
    `, true)
    tileUtil.setWalls(assets.tile`
        myTile64
    `, true)
    tileUtil.setWalls(assets.tile`
        myTile79
    `, true)
    tileUtil.setWalls(assets.tile`
        myTile70
    `, true)
    tileUtil.setWalls(assets.tile`
        myTile80
    `, true)
    tileUtil.setWalls(assets.tile`
        myTile74
    `, true)
    tileUtil.setWalls(assets.tile`
        myTile78
    `, true)
    tileUtil.setWalls(assets.tile`
        myTile77
    `, true)
    tileUtil.setWalls(assets.tile`
        myTile81
    `, true)
    tileUtil.setWalls(assets.tile`
        myTile82
    `, true)
    tileUtil.setWalls(assets.tile`
        myTile83
    `, true)
    tileUtil.setWalls(assets.tile`
        myTile83
    `, true)
}

function make_caves() {
    statusbar.value += load_p
    pause(100)
    for (let index15 = 0; index15 < 40; index15++) {
        for (let index16 = 0; index16 < randint(0, 4); index16++) {
            tiles.setTileAt(tiles.getTileLocation(randint(0, 255), randint(100, 160)), assets.tile`
                    myTile34
                `)
            for (let value13 of tiles.getTilesByType(assets.tile`
                myTile34
            `)) {
                if (Math.percentChance(randint(0, 80))) {
                    if (Math.percentChance(50)) {
                        tiles.setTileAt(value13.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                                myTile34
                            `)
                    } else if (Math.percentChance(50)) {
                        tiles.setTileAt(value13.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                                myTile38
                            `)
                    }
                    
                } else if (Math.percentChance(randint(0, 10))) {
                    if (Math.percentChance(50)) {
                        tiles.setTileAt(value13.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                                myTile34
                            `)
                    } else if (Math.percentChance(50)) {
                        tiles.setTileAt(value13.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                                myTile38
                            `)
                    }
                    
                } else if (Math.percentChance(randint(0, 80))) {
                    if (Math.percentChance(50)) {
                        tiles.setTileAt(value13.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                                myTile34
                            `)
                    } else if (Math.percentChance(50)) {
                        tiles.setTileAt(value13.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                                myTile38
                            `)
                    }
                    
                } else if (Math.percentChance(randint(0, 10))) {
                    if (Math.percentChance(50)) {
                        tiles.setTileAt(value13.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                                myTile34
                            `)
                    } else if (Math.percentChance(50)) {
                        tiles.setTileAt(value13.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                                myTile38
                            `)
                    }
                    
                }
                
            }
            tiles.setTileAt(tiles.getTileLocation(randint(0, 255), randint(70, 120)), assets.tile`
                    myTile35
                `)
            for (let value1322 of tiles.getTilesByType(assets.tile`
                myTile35
            `)) {
                if (Math.percentChance(randint(0, 80))) {
                    if (Math.percentChance(50)) {
                        tiles.setTileAt(value1322.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                                myTile35
                            `)
                    } else if (Math.percentChance(50)) {
                        tiles.setTileAt(value1322.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                                myTile36
                            `)
                    }
                    
                } else if (Math.percentChance(randint(0, 10))) {
                    if (Math.percentChance(50)) {
                        tiles.setTileAt(value1322.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                                myTile35
                            `)
                    } else if (Math.percentChance(50)) {
                        tiles.setTileAt(value1322.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                                myTile36
                            `)
                    }
                    
                } else if (Math.percentChance(randint(0, 80))) {
                    if (Math.percentChance(50)) {
                        tiles.setTileAt(value1322.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                                myTile35
                            `)
                    } else if (Math.percentChance(50)) {
                        tiles.setTileAt(value1322.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                                myTile36
                            `)
                    }
                    
                } else if (Math.percentChance(randint(0, 10))) {
                    if (Math.percentChance(50)) {
                        tiles.setTileAt(value1322.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                                myTile35
                            `)
                    } else if (Math.percentChance(50)) {
                        tiles.setTileAt(value1322.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                                myTile36
                            `)
                    }
                    
                }
                
            }
        }
        tiles.setTileAt(tiles.getTileLocation(randint(0, 255), randint(188, 220)), assets.tile`
                myTile54
            `)
        for (let value1323 of tiles.getTilesByType(assets.tile`
            myTile54
        `)) {
            if (Math.percentChance(randint(0, 80))) {
                if (Math.percentChance(50)) {
                    tiles.setTileAt(value1323.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                            myTile54
                        `)
                }
                
            } else if (Math.percentChance(randint(0, 10))) {
                if (Math.percentChance(50)) {
                    tiles.setTileAt(value1323.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                            myTile54
                        `)
                }
                
            } else if (Math.percentChance(randint(0, 80))) {
                if (Math.percentChance(50)) {
                    tiles.setTileAt(value1323.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                            myTile54
                        `)
                }
                
            } else if (Math.percentChance(randint(0, 10))) {
                if (Math.percentChance(50)) {
                    tiles.setTileAt(value1323.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                            myTile54
                        `)
                }
                
            }
            
        }
    }
    for (let value1324 of tiles.getTilesByType(assets.tile`
        myTile54
    `)) {
        if (tiles.tileAtLocationEquals(value1324.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                myTile16
            `)) {
            tiles.setTileAt(value1324.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                    myTile56
                `)
        }
        
        if (tiles.tileAtLocationEquals(value1324.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                myTile16
            `)) {
            tiles.setTileAt(value1324.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                    myTile57
                `)
        }
        
        if (tiles.tileAtLocationEquals(value1324.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                myTile16
            `)) {
            tiles.setTileAt(value1324.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                    myTile55
                `)
        }
        
        if (tiles.tileAtLocationEquals(value1324.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                myTile16
            `)) {
            tiles.setTileAt(value1324.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                    myTile53
                `)
        }
        
    }
}

function make_sticks() {
    statusbar.value += 14.2
    pause(100)
    for (let value8222 of tiles.getTilesByType(assets.tile`
        myTile15
    `)) {
        if (tiles.tileAtLocationEquals(value8222.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                transparency16
            `)) {
            if (Math.percentChance(20)) {
                tiles.setTileAt(value8222.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                        myTile19
                    `)
            }
            
        }
        
    }
}

controller.menu.onEvent(ControllerButtonEvent.Pressed, function on_menu_pressed() {
    
    if (inmenu == 0) {
        inmenu = 1
        gamemenu = miniMenu.createMenu(miniMenu.createMenuItem("mining  mode"), miniMenu.createMenuItem("building mode"), miniMenu.createMenuItem("invantory"), miniMenu.createMenuItem("Settings"))
        gamemenu.x = 50
        gamemenu.y = 30
        gamemenu.setFlag(SpriteFlag.RelativeToCamera, true)
        gamemenu.onButtonPressed(controller.A, function on_button_pressed4(selection3: any, selectedIndex3: any) {
            
            if (selectedIndex3 == 0) {
                inbuild = 0
                inmenu = 0
                sprites.destroyAllSpritesOfKind(SpriteKind.MiniMenu)
            } else if (selectedIndex3 == 1) {
                inbuild = 1
                inmenu = 0
                sprites.destroyAllSpritesOfKind(SpriteKind.MiniMenu)
            } else if (selectedIndex3 == 2) {
                inmenu = 0
                if (inmenu == 0) {
                    inmenu = 1
                    sprites.destroyAllSpritesOfKind(SpriteKind.MiniMenu)
                    myMenu = miniMenu.createMenu(miniMenu.createMenuItem("dirt= " + ("" + ("" + dirt))), miniMenu.createMenuItem("stone= " + ("" + ("" + stone))), miniMenu.createMenuItem("blk stone= " + ("" + ("" + blk_stone))), miniMenu.createMenuItem("sticks= " + ("" + ("" + sticks))), miniMenu.createMenuItem("wood= " + ("" + ("" + wood))))
                    myMenu.setDimensions(100, 80)
                    myMenu.x = 60
                    myMenu.y = 40
                    myMenu.setFlag(SpriteFlag.RelativeToCamera, true)
                    myMenu.onButtonPressed(controller.A, function on_button_pressed5(selection4: any, selectedIndex4: any) {
                        
                        sprites.destroyAllSpritesOfKind(SpriteKind.MiniMenu)
                        inmenu = 0
                    })
                }
                
            } else if (selectedIndex3 == 3) {
                inmenu = 0
                if (inmenu == 0) {
                    inmenu = 1
                    sprites.destroyAllSpritesOfKind(SpriteKind.MiniMenu)
                    myMenu = miniMenu.createMenu(miniMenu.createMenuItem("Lighting system"))
                    myMenu.setDimensions(100, 80)
                    myMenu.x = 60
                    myMenu.y = 40
                    myMenu.setFlag(SpriteFlag.RelativeToCamera, true)
                    myMenu.onButtonPressed(controller.A, function on_button_pressed6(selection42: any, selectedIndex42: any) {
                        
                        if (selectedIndex42 == 0) {
                            sprites.destroyAllSpritesOfKind(SpriteKind.MiniMenu)
                            myMenu = miniMenu.createMenu(miniMenu.createMenuItem("turn on"), miniMenu.createMenuItem("Turn off"))
                            myMenu.x = 60
                            myMenu.y = 40
                            myMenu.setFlag(SpriteFlag.RelativeToCamera, true)
                            myMenu.onButtonPressed(controller.A, function on_button_pressed7(selection43: any, selectedIndex43: any) {
                                
                                if (selectedIndex43 == 0) {
                                    sprites.destroyAllSpritesOfKind(SpriteKind.MiniMenu)
                                    inmenu = 0
                                    lighting = 1
                                } else if (selectedIndex43 == 1) {
                                    sprites.destroyAllSpritesOfKind(SpriteKind.MiniMenu)
                                    inmenu = 0
                                    lighting = 0
                                }
                                
                            })
                        } else {
                            
                        }
                        
                    })
                }
                
            }
            
        })
    }
    
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile25
    `, function on_overlap_tile5(sprite22: Sprite, location22: tiles.Location) {
    while (player1.tilemapLocation() == location22) {
        sprite22.y += -0.01
    }
    if (sprite22.isHittingTile(CollisionDirection.Right) || sprite22.isHittingTile(CollisionDirection.Left)) {
        sprite22.y += -3
    }
    
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile62
    `, function on_overlap_tile6(sprite5: Sprite, location5: tiles.Location) {
    while (player1.tilemapLocation() == location5) {
        sprite5.y += -0.01
    }
    if (sprite5.isHittingTile(CollisionDirection.Right) || sprite5.isHittingTile(CollisionDirection.Left)) {
        sprite5.y += -3
    }
    
})
function make_stone() {
    
    statusbar.value += load_p
    pause(100)
    for (let index17 = 0; index17 < 16; index17++) {
        tiles.setTileAt(tiles.getTileLocation(col, 144), assets.tile`
                myTile14
            `)
        tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`
                myTile14
            `)
        col += 16
    }
    for (let index18 = 0; index18 < 16; index18++) {
        for (let value3 of tiles.getTilesByType(assets.tile`
            myTile14
        `)) {
            tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                    myTile14
                `)
            tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                    myTile14
                `)
            tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                    myTile14
                `)
            if (Math.percentChance(50)) {
                tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                        myTile14
                    `)
            }
            
        }
    }
    for (let index19 = 0; index19 < 16; index19++) {
        for (let value4 of tiles.getTilesByType(assets.tile`
            myTile14
        `)) {
            tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                    myTile14
                `)
        }
    }
    col = 16
    row = 80
    for (let index20 = 0; index20 < 16; index20++) {
        tiles.setTileAt(tiles.getTileLocation(col, 96), assets.tile`
                myTile13
            `)
        tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`
                myTile13
            `)
        col += 16
    }
    for (let index21 = 0; index21 < 16; index21++) {
        for (let value of tiles.getTilesByType(assets.tile`
            myTile13
        `)) {
            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                    myTile13
                `)
            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                    myTile13
                `)
            if (Math.percentChance(50)) {
                tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                        myTile13
                    `)
                tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                        myTile13
                    `)
            }
            
        }
    }
    for (let index22 = 0; index22 < 16; index22++) {
        for (let value2 of tiles.getTilesByType(assets.tile`
            myTile13
        `)) {
            tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                    myTile13
                `)
        }
    }
    for (let index23 = 0; index23 < 16; index23++) {
        for (let value22 of tiles.getTilesByType(assets.tile`
            myTile13
        `)) {
            if (tiles.tileAtLocationEquals(value22.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                    myTile35
                `)) {
                if (Math.percentChance(50)) {
                    tiles.setTileAt(value22.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                            myTile37
                        `)
                }
                
            }
            
        }
    }
    col = 16
    row = 204
    for (let index24 = 0; index24 < 16; index24++) {
        tiles.setTileAt(tiles.getTileLocation(col, 172), assets.tile`
                myTile16
            `)
        tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`
                myTile16
            `)
        col += 16
    }
    for (let index25 = 0; index25 < 16; index25++) {
        for (let value5 of tiles.getTilesByType(assets.tile`
            myTile16
        `)) {
            tiles.setTileAt(value5.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                    myTile16
                `)
            tiles.setTileAt(value5.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                    myTile16
                `)
            if (Math.percentChance(50)) {
                tiles.setTileAt(value5.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                        myTile16
                    `)
                tiles.setTileAt(value5.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                        myTile16
                    `)
            }
            
        }
    }
    for (let index26 = 0; index26 < 16; index26++) {
        for (let value222 of tiles.getTilesByType(assets.tile`
            myTile16
        `)) {
            if (tiles.tileAtLocationEquals(value222.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                    transparency16
                `)) {
                if (Math.percentChance(50)) {
                    tiles.setTileAt(value222.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                            myTile16
                        `)
                }
                
            }
            
        }
    }
}

scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile63
    `, function on_overlap_tile7(sprite23: Sprite, location23: tiles.Location) {
    while (player1.tilemapLocation() == location23) {
        sprite23.y += -0.01
    }
    if (sprite23.isHittingTile(CollisionDirection.Right) || sprite23.isHittingTile(CollisionDirection.Left)) {
        sprite23.y += -3
    }
    
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        transparency16
    `, function on_overlap_tile8(sprite6: Sprite, location6: tiles.Location) {
    if (location6.column == 0 && (characterAnimations.matchesRule(player1, characterAnimations.rule(Predicate.MovingLeft)) && secworld == 1)) {
        if (tileUtil.currentTilemap() == tilemap_1) {
            tiles.setCurrentTilemap(tilemap_2)
            tiles.placeOnTile(player1, tiles.getTileLocation(254, player1.tilemapLocation().row))
            tileUtil.setTileAt(tilemap_2, tiles.getTileLocation(254, player1.tilemapLocation().row), assets.tile`
                    transparency16
                `)
            tileUtil.setTileAt(tilemap_2, tiles.getTileLocation(254, player1.tilemapLocation().row + 1), assets.tile`
                    transparency16
                `)
            tileUtil.setWallAt(tilemap_2, tiles.getTileLocation(254, player1.tilemapLocation().row), false)
            tileUtil.setWallAt(tilemap_2, tiles.getTileLocation(254, player1.tilemapLocation().row + 1), false)
        } else if (tileUtil.currentTilemap() == tilemap_2) {
            tiles.setCurrentTilemap(tile_map_3)
            tiles.placeOnTile(player1, tiles.getTileLocation(254, player1.tilemapLocation().row))
            tileUtil.setTileAt(tile_map_3, tiles.getTileLocation(254, player1.tilemapLocation().row), assets.tile`
                    transparency16
                `)
            tileUtil.setWallAt(tile_map_3, tiles.getTileLocation(254, player1.tilemapLocation().row), false)
            tileUtil.setTileAt(tile_map_3, tiles.getTileLocation(254, player1.tilemapLocation().row + 1), assets.tile`
                    transparency16
                `)
            tileUtil.setWallAt(tile_map_3, tiles.getTileLocation(254, player1.tilemapLocation().row + 1), false)
        } else if (tileUtil.currentTilemap() == tile_map_3) {
            tiles.setCurrentTilemap(tilemap_4)
            tiles.placeOnTile(player1, tiles.getTileLocation(254, player1.tilemapLocation().row))
            tileUtil.setTileAt(tilemap_4, tiles.getTileLocation(254, player1.tilemapLocation().row), assets.tile`
                    transparency16
                `)
            tileUtil.setWallAt(tilemap_4, tiles.getTileLocation(254, player1.tilemapLocation().row), false)
            tileUtil.setTileAt(tilemap_4, tiles.getTileLocation(254, player1.tilemapLocation().row + 1), assets.tile`
                    transparency16
                `)
            tileUtil.setWallAt(tilemap_4, tiles.getTileLocation(254, player1.tilemapLocation().row + 1), false)
        } else if (tileUtil.currentTilemap() == tilemap_4) {
            tiles.setCurrentTilemap(tilemap_1)
            tiles.placeOnTile(player1, tiles.getTileLocation(254, player1.tilemapLocation().row))
            tileUtil.setTileAt(tilemap_1, tiles.getTileLocation(254, player1.tilemapLocation().row), assets.tile`
                    transparency16
                `)
            tileUtil.setWallAt(tilemap_1, tiles.getTileLocation(254, player1.tilemapLocation().row), false)
            tileUtil.setTileAt(tilemap_1, tiles.getTileLocation(254, player1.tilemapLocation().row + 1), assets.tile`
                    transparency16
                `)
            tileUtil.setWallAt(tilemap_1, tiles.getTileLocation(254, player1.tilemapLocation().row + 1), false)
        }
        
    } else if (location6.column == 254 && (characterAnimations.matchesRule(player1, characterAnimations.rule(Predicate.MovingRight)) && secworld == 1)) {
        if (tileUtil.currentTilemap() == tilemap_1) {
            tiles.setCurrentTilemap(tilemap_4)
            tiles.placeOnTile(player1, tiles.getTileLocation(0, player1.tilemapLocation().row))
            tileUtil.setTileAt(tilemap_4, tiles.getTileLocation(0, player1.tilemapLocation().row), assets.tile`
                    transparency16
                `)
            tileUtil.setWallAt(tilemap_4, tiles.getTileLocation(0, player1.tilemapLocation().row), false)
            tileUtil.setTileAt(tilemap_4, tiles.getTileLocation(254, player1.tilemapLocation().row + 1), assets.tile`
                    transparency16
                `)
            tileUtil.setWallAt(tilemap_4, tiles.getTileLocation(254, player1.tilemapLocation().row + 1), false)
        } else if (tileUtil.currentTilemap() == tilemap_2) {
            tiles.setCurrentTilemap(tilemap_1)
            tiles.placeOnTile(player1, tiles.getTileLocation(0, player1.tilemapLocation().row))
            tileUtil.setTileAt(tilemap_1, tiles.getTileLocation(0, player1.tilemapLocation().row), assets.tile`
                    transparency16
                `)
            tileUtil.setWallAt(tilemap_1, tiles.getTileLocation(0, player1.tilemapLocation().row), false)
            tileUtil.setTileAt(tilemap_1, tiles.getTileLocation(254, player1.tilemapLocation().row + 1), assets.tile`
                    transparency16
                `)
            tileUtil.setWallAt(tilemap_1, tiles.getTileLocation(254, player1.tilemapLocation().row + 1), false)
        } else if (tileUtil.currentTilemap() == tile_map_3) {
            tiles.setCurrentTilemap(tilemap_2)
            tiles.placeOnTile(player1, tiles.getTileLocation(0, player1.tilemapLocation().row))
            tileUtil.setTileAt(tilemap_2, tiles.getTileLocation(0, player1.tilemapLocation().row), assets.tile`
                    transparency16
                `)
            tileUtil.setWallAt(tilemap_2, tiles.getTileLocation(0, player1.tilemapLocation().row), false)
            tileUtil.setTileAt(tilemap_2, tiles.getTileLocation(254, player1.tilemapLocation().row + 1), assets.tile`
                    transparency16
                `)
            tileUtil.setWallAt(tilemap_2, tiles.getTileLocation(254, player1.tilemapLocation().row + 1), false)
        } else if (tileUtil.currentTilemap() == tilemap_4) {
            tiles.setCurrentTilemap(tile_map_3)
            tiles.placeOnTile(player1, tiles.getTileLocation(0, player1.tilemapLocation().row))
            tileUtil.setTileAt(tile_map_3, tiles.getTileLocation(0, player1.tilemapLocation().row), assets.tile`
                    transparency16
                `)
            tileUtil.setWallAt(tile_map_3, tiles.getTileLocation(0, player1.tilemapLocation().row), false)
            tileUtil.setTileAt(tile_map_3, tiles.getTileLocation(254, player1.tilemapLocation().row + 1), assets.tile`
                    transparency16
                `)
            tileUtil.setWallAt(tile_map_3, tiles.getTileLocation(254, player1.tilemapLocation().row + 1), false)
        }
        
    }
    
})
function make_dirt() {
    
    statusbar.value += load_p
    pause(100)
    col = 16
    if (Math.percentChance(25)) {
        for (let index27 = 0; index27 < 6; index27++) {
            tiles.setTileAt(tiles.getTileLocation(col, 64), assets.tile`
                    myTile61
                `)
            col += 16
        }
        for (let index28 = 0; index28 < 6; index28++) {
            tiles.setTileAt(tiles.getTileLocation(col, 64), assets.tile`
                    myTile1
                `)
            col += 16
        }
        for (let index29 = 0; index29 < 6; index29++) {
            tiles.setTileAt(tiles.getTileLocation(col, 64), assets.tile`
                    myTile64
                `)
            col += 16
        }
        biomes = 3
    } else if (Math.percentChance(25)) {
        for (let index30 = 0; index30 < 8; index30++) {
            tiles.setTileAt(tiles.getTileLocation(col, 64), assets.tile`
                    myTile61
                `)
            col += 16
        }
        for (let index31 = 0; index31 < 8; index31++) {
            tiles.setTileAt(tiles.getTileLocation(col, 64), assets.tile`
                    myTile1
                `)
            col += 16
        }
        biomes = 1
    } else if (Math.percentChance(25)) {
        for (let index32 = 0; index32 < 8; index32++) {
            tiles.setTileAt(tiles.getTileLocation(col, 64), assets.tile`
                    myTile1
                `)
            col += 16
        }
        for (let index33 = 0; index33 < 8; index33++) {
            col += 16
            tiles.setTileAt(tiles.getTileLocation(col, 64), assets.tile`
                    myTile61
                `)
        }
        biomes = 1
    } else if (Math.percentChance(25)) {
        for (let index34 = 0; index34 < 6; index34++) {
            tiles.setTileAt(tiles.getTileLocation(col, 64), assets.tile`
                    myTile1
                `)
            col += 16
        }
        for (let index35 = 0; index35 < 6; index35++) {
            tiles.setTileAt(tiles.getTileLocation(col, 64), assets.tile`
                    myTile64
                `)
            col += 16
        }
        for (let index36 = 0; index36 < 6; index36++) {
            tiles.setTileAt(tiles.getTileLocation(col, 64), assets.tile`
                    myTile61
                `)
            col += 16
        }
        biomes = 3
    } else {
        for (let index37 = 0; index37 < 16; index37++) {
            tiles.setTileAt(tiles.getTileLocation(col, 64), assets.tile`
                    myTile64
                `)
            col += 16
        }
        biomes = 3
    }
    
    for (let index38 = 0; index38 < 16; index38++) {
        if (biomes == 1) {
            for (let value52 of tiles.getTilesByType(assets.tile`
                myTile1
            `)) {
                if (tiles.tileAtLocationEquals(value52.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                        transparency16
                    `)) {
                    tiles.setTileAt(value52.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                            myTile1
                        `)
                }
                
                if (tiles.tileAtLocationEquals(value52.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                        transparency16
                    `)) {
                    tiles.setTileAt(value52.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                            myTile1
                        `)
                }
                
                if (Math.percentChance(randint(15, 25))) {
                    if (tiles.tileAtLocationEquals(value52.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                            transparency16
                        `)) {
                        tiles.setTileAt(value52.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                                myTile1
                            `)
                    }
                    
                }
                
            }
            for (let value522 of tiles.getTilesByType(assets.tile`
                myTile61
            `)) {
                if (tiles.tileAtLocationEquals(value522.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                        transparency16
                    `)) {
                    tiles.setTileAt(value522.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                            myTile61
                        `)
                }
                
                if (tiles.tileAtLocationEquals(value522.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                        transparency16
                    `)) {
                    tiles.setTileAt(value522.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                            myTile61
                        `)
                }
                
                if (Math.percentChance(randint(15, 25))) {
                    if (tiles.tileAtLocationEquals(value522.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                            transparency16
                        `)) {
                        tiles.setTileAt(value522.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                                myTile61
                            `)
                    }
                    
                }
                
            }
        }
        
        if (biomes == 3) {
            for (let value523 of tiles.getTilesByType(assets.tile`
                myTile64
            `)) {
                if (tiles.tileAtLocationEquals(value523.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                        transparency16
                    `)) {
                    tiles.setTileAt(value523.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                            myTile64
                        `)
                }
                
                if (tiles.tileAtLocationEquals(value523.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                        transparency16
                    `)) {
                    tiles.setTileAt(value523.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                            myTile64
                        `)
                }
                
                if (Math.percentChance(randint(60, 80))) {
                    if (tiles.tileAtLocationEquals(value523.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                            transparency16
                        `)) {
                        tiles.setTileAt(value523.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                                myTile64
                            `)
                    }
                    
                }
                
            }
            for (let value524 of tiles.getTilesByType(assets.tile`
                myTile1
            `)) {
                if (tiles.tileAtLocationEquals(value524.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                        transparency16
                    `)) {
                    tiles.setTileAt(value524.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                            myTile1
                        `)
                }
                
                if (tiles.tileAtLocationEquals(value524.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                        transparency16
                    `)) {
                    tiles.setTileAt(value524.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                            myTile1
                        `)
                }
                
                if (Math.percentChance(randint(15, 25))) {
                    if (tiles.tileAtLocationEquals(value524.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                            transparency16
                        `)) {
                        tiles.setTileAt(value524.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                                myTile1
                            `)
                    }
                    
                }
                
            }
            for (let value525 of tiles.getTilesByType(assets.tile`
                myTile61
            `)) {
                if (tiles.tileAtLocationEquals(value525.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                        transparency16
                    `)) {
                    tiles.setTileAt(value525.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                            myTile61
                        `)
                }
                
                if (tiles.tileAtLocationEquals(value525.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                        transparency16
                    `)) {
                    tiles.setTileAt(value525.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                            myTile61
                        `)
                }
                
                if (Math.percentChance(randint(50, 60))) {
                    if (tiles.tileAtLocationEquals(value525.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                            transparency16
                        `)) {
                        tiles.setTileAt(value525.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                                myTile61
                            `)
                    }
                    
                }
                
            }
        }
        
    }
    for (let index39 = 0; index39 < 16; index39++) {
        for (let value6 of tiles.getTilesByType(assets.tile`
            myTile1
        `)) {
            if (tiles.tileAtLocationEquals(value6.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                    transparency16
                `)) {
                tiles.setTileAt(value6.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                        myTile1
                    `)
            }
            
        }
        if (biomes >= 1) {
            for (let value64 of tiles.getTilesByType(assets.tile`
                myTile61
            `)) {
                if (tiles.tileAtLocationEquals(value64.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                        transparency16
                    `)) {
                    tiles.setTileAt(value64.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                            myTile61
                        `)
                }
                
            }
        }
        
        if (biomes >= 3) {
            for (let value65 of tiles.getTilesByType(assets.tile`
                myTile64
            `)) {
                if (tiles.tileAtLocationEquals(value65.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                        transparency16
                    `)) {
                    tiles.setTileAt(value65.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                            myTile64
                        `)
                }
                
            }
        }
        
    }
    for (let value7 of tiles.getTilesByType(assets.tile`
        myTile1
    `)) {
        if (tiles.tileAtLocationEquals(value7.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                transparency16
            `)) {
            tiles.setTileAt(value7.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                    myTile15
                `)
        }
        
    }
    if (biomes >= 1) {
        for (let value72 of tiles.getTilesByType(assets.tile`
            myTile61
        `)) {
            if (tiles.tileAtLocationEquals(value72.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                    transparency16
                `)) {
                tiles.setTileAt(value72.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                        myTile60
                    `)
            }
            
        }
    }
    
    if (biomes >= 3) {
        for (let value73 of tiles.getTilesByType(assets.tile`
            myTile64
        `)) {
            if (tiles.tileAtLocationEquals(value73.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                    transparency16
                `)) {
                tiles.setTileAt(value73.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                        myTile65
                    `)
            }
            
        }
        for (let value1134 of tiles.getTilesByType(assets.tile`
            myTile65
        `)) {
            if (tiles.tileAtLocationEquals(value1134.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                    myTile64
                `)) {
                if (Math.percentChance(15)) {
                    tiles.setTileAt(value1134.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                            transparency16
                        `)
                }
                
            }
            
        }
        for (let index40 = 0; index40 < 25; index40++) {
            for (let value1325 of tiles.getTilesByType(assets.tile`
                transparency16
            `)) {
                if (Math.percentChance(randint(0, 30))) {
                    if (tiles.tileAtLocationEquals(value1325.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                            myTile64
                        `)) {
                        tiles.setTileAt(value1325.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                                transparency16
                            `)
                    }
                    
                } else if (Math.percentChance(randint(0, 50))) {
                    if (tiles.tileAtLocationEquals(value1325.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                            myTile64
                        `) || tiles.tileAtLocationEquals(value1325.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                            myTile65
                        `)) {
                        tiles.setTileAt(value1325.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                                transparency16
                            `)
                    }
                    
                } else if (Math.percentChance(randint(0, 30))) {
                    if (tiles.tileAtLocationEquals(value1325.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                            myTile64
                        `)) {
                        tiles.setTileAt(value1325.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                                transparency16
                            `)
                    }
                    
                } else if (Math.percentChance(randint(0, 50))) {
                    if (tiles.tileAtLocationEquals(value1325.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                            myTile64
                        `)) {
                        tiles.setTileAt(value1325.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                                transparency16
                            `)
                    }
                    
                }
                
            }
        }
        for (let value74 of tiles.getTilesByType(assets.tile`
            myTile64
        `)) {
            if (tiles.tileAtLocationEquals(value74.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                    transparency16
                `)) {
                tiles.setTileAt(value74.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                        myTile65
                    `)
            }
            
        }
        for (let value75 of tiles.getTilesByType(assets.tile`
            myTile64
        `)) {
            if (tiles.tileAtLocationEquals(value75.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                    myTile65
                `)) {
                tiles.setTileAt(value75.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                        myTile64
                    `)
            }
            
        }
    }
    
    for (let value722 of tiles.getTilesByType(assets.tile`
        myTile15
    `)) {
        if (tiles.tileAtLocationEquals(value722.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                transparency16
            `)) {
            tiles.setTileAt(value722.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                    myTile24
                `)
        }
        
        if (tiles.tileAtLocationEquals(value722.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                transparency16
            `)) {
            tiles.setTileAt(value722.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                    myTile25
                `)
        }
        
    }
    for (let value723 of tiles.getTilesByType(assets.tile`
        myTile60
    `)) {
        if (tiles.tileAtLocationEquals(value723.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                transparency16
            `)) {
            tiles.setTileAt(value723.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                    myTile62
                `)
        }
        
        if (tiles.tileAtLocationEquals(value723.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                transparency16
            `)) {
            tiles.setTileAt(value723.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                    myTile63
                `)
        }
        
    }
    for (let value724 of tiles.getTilesByType(assets.tile`
        myTile65
    `)) {
        if (tiles.tileAtLocationEquals(value724.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                transparency16
            `) && tiles.tileAtLocationEquals(value724.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Left), assets.tile`
                myTile65
            `)) {
            tiles.setTileAt(value724.getNeighboringLocation(CollisionDirection.Left), assets.tile`
                    myTile76
                `)
        }
        
        if (tiles.tileAtLocationEquals(value724.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                transparency16
            `) && tiles.tileAtLocationEquals(value724.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Right), assets.tile`
                myTile65
            `)) {
            tiles.setTileAt(value724.getNeighboringLocation(CollisionDirection.Right), assets.tile`
                    myTile75
                `)
        }
        
    }
    for (let value742 of tiles.getTilesByType(assets.tile`
        myTile75
    `)) {
        if (tiles.tileAtLocationEquals(value742.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                myTile65
            `)) {
            tiles.setTileAt(value742.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                    myTile64
                `)
        }
        
    }
    for (let value743 of tiles.getTilesByType(assets.tile`
        myTile76
    `)) {
        if (tiles.tileAtLocationEquals(value743.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                myTile65
            `)) {
            tiles.setTileAt(value743.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                    myTile64
                `)
        }
        
    }
    for (let value744 of tiles.getTilesByType(assets.tile`
        myTile63
    `)) {
        if (tiles.tileAtLocationEquals(value744.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                myTile60
            `)) {
            tiles.setTileAt(value744.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                    myTile61
                `)
        }
        
    }
    for (let value745 of tiles.getTilesByType(assets.tile`
        myTile62
    `)) {
        if (tiles.tileAtLocationEquals(value745.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                myTile60
            `)) {
            tiles.setTileAt(value745.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                    myTile61
                `)
        }
        
    }
    for (let value732 of tiles.getTilesByType(assets.tile`
        myTile24
    `)) {
        if (tiles.tileAtLocationEquals(value732.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                myTile15
            `)) {
            tiles.setTileAt(value732.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                    myTile1
                `)
        }
        
    }
    for (let value746 of tiles.getTilesByType(assets.tile`
        myTile25
    `)) {
        if (tiles.tileAtLocationEquals(value746.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                myTile15
            `)) {
            tiles.setTileAt(value746.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                    myTile1
                `)
        }
        
    }
    for (let value832 of tiles.getTilesByType(assets.tile`
        myTile15
    `)) {
        if (tiles.tileAtLocationEquals(value832.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                transparency16
            `)) {
            if (Math.percentChance(25)) {
                tiles.setTileAt(value832.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                        myTile26
                    `)
            } else if (Math.percentChance(25)) {
                tiles.setTileAt(value832.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                        myTile28
                    `)
            } else if (Math.percentChance(25)) {
                tiles.setTileAt(value832.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                        myTile46
                    `)
            }
            
        }
        
    }
    for (let value833 of tiles.getTilesByType(assets.tile`
        myTile65
    `)) {
        if (tiles.tileAtLocationEquals(value833.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                transparency16
            `)) {
            if (Math.percentChance(25)) {
                tiles.setTileAt(value833.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                        myTile2
                    `)
            } else if (Math.percentChance(25)) {
                tiles.setTileAt(value833.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                        myTile66
                    `)
            } else if (Math.percentChance(25)) {
                tiles.setTileAt(value833.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                        myTile71
                    `)
            } else if (Math.percentChance(25)) {
                tiles.setTileAt(value833.getNeighboringLocation(CollisionDirection.Top), assets.tile`
                        myTile46
                    `)
            }
            
        }
        
    }
}

let nextspot : tiles.Location = null
let fall_damage_2 = 0
let fall_damage = 0
let biomes = 0
let lighting = 0
let gamemenu : miniMenu.MenuSprite = null
let playerhealth : StatusBarSprite = null
let select : Sprite = null
let stone = 0
let blk_stone = 0
let wdciling = 0
let wdfloor = 0
let wdwall = 0
let blk_stone_wall = 0
let stone_wall = 0
let wood = 0
let buildM = 0
let mstick = 0
let dirt_axe = 0
let sticks = 0
let dirt = 0
let dirt_pick = 0
let myMenu : miniMenu.MenuSprite = null
let inbuild = 0
let inmenu = 0
let world_gen_done = 0
let player1 : Sprite = null
let tilemap_4 : tiles.TileMapData = null
let tile_map_3 : tiles.TileMapData = null
let tilemap_2 : tiles.TileMapData = null
let secworld = 0
let row = 0
let load_p = 0
let col = 0
let tilemap_1 : tiles.TileMapData = null
let statusbar : StatusBarSprite = null
let myMenu2 = miniMenu.createMenu(miniMenu.createMenuItem("Normal "), miniMenu.createMenuItem("sectional"))
myMenu2.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Margin, 4)
scene.setBackgroundImage(img`
    666a666666a66666a66666a66666a6666a66666a6666a6666a6666a6666a6666b666a666b6666a666b666b66966b669666b6696a6696a6966b66966b66966b6966b6966b6966b6966b6966b696b696b6966b6966b6966b696b6966b6966b6966b696b696b696b6966b6966b66966b66966b6696a6696a66966b666b666b666b666b6666a66666a66666a6666a6666666a66666a66666a6666666a66666a6666a
        6a666a6a6a66a6a666a6a666a6a696a6966a9a669a6966a9669a6966a9669a6a66a966b66a9a696a989a669a6a669a6a9a69a6696a6696a6a96a6a96a98a96a6a96a6a96a6a96a6a96a6a96a6a698b66a9a698b69a6a96a6a698b69a6a96a6a96a666a6a66a66a6a96a6a96a98a96a98a96a6a696a6696a6a66a9a66b66a966a98989a696a9a696a9a696a9669a6a9a669a6a666a6a666a6a6a666a6a666a666
        666a666666666698966696a966986a66a66666a666a6a66a6a66a6a96a6a66966966a66a96666a6666669a6669a66666666a66a696a98969666966a69696a696669696a696669696a9696a96969a69a96669a69a6696a69696a96a6696a9696a969a96969a969696a6966696a96696a966a9696a69a6a6969a96669a69a66a666a6a666a66666a66666a666a68966666a66696a96696a6966698966669a66a6a
        6a669a6a9a6a98a6a6a6a666a6a666666a6a6669a666696666696666666698a6a6a696966a6a969a9a9a666a6669a9d9a966969a66989a6a6a9a69698a6966a9a6a6a696a9a6a6a966a6966a6a6698989a669a669a696989a666969a6966a6966a666a6a666a6a696989a98966a6a666a9666a69666966a6666a6a666669669a69669a669a6a696a6a666a66986a6a6666a6a666a68666a6a6a6a6a6a6666669
        666a666666666666666666a66666a9a69669a6a666a98a6a9a6a6a6a6a98a9669666a6a669666a6666666a969a69d1dd19b6a666b6a989669666a6a696a6b966969696a966969666a966a969696a96a9669a669a696a6a98969a6a696a696a6a969a96969a96969a6a966a989a96969a669a966a69a6a969a696969a6b6a6a666a6a669866966a66969a696a6a96669a696666a6669a66666666666666a6a6a6
        a6666a6a66a6a6a9a6a9a666a69a666a6a666666a966696666669669666966a66a96666a6a69a696a9a6966a69d1d9111d696b9a6966a6b6a9a96969a96986a989a6a966a989a9a9669a96a6a9698966a9a69a696a696969a6a9696a969a69696a696a69a696a98966a9696a966a6a696a666a96989698989a6a6a6696a6966b696698a9a6a666986a666a669689a666a6a66966a666a9a6a69a6a6a98966666
        66a666666a669666666666a966a6666666a6a9a666a6a6a6a9a6a6a6a9a6a696a66a9a9696a666a66669a696b91d11d969a6b6669a6969a96666a9a666a9696a966966a9669a6696a966696966a9a69a9696696a969a6a669696a96989896a98969a696a966a96a9a966a696a699919a696b966a6b6a69a66696696a6696a696a6a6a9666966b6a966696698a66a66a66669a89896a6666698666696898a6a6a
        669a6a9a6698a6a6a6a6a966a666a9a6b6966669a669669666696696666696a69696666a66969696b9a66a66111191119a696a9a669a6666a9a96669a966a96989a6b9669a6969a696a9a6a9a9669a696a69a6966a96969a9a696a6a9a96969a9a696a9669a9696696a969a6119bdd919b66a9696969a669a6a96a696a6698a69696666a66a96666a9a6a6a966966966a98666a6a669a6a66a6a98a66a666966
        6a6666666a666669669666a669a666666a6a69a6698a6a66a986a66a96a98966a6a6a9696a6a6a6a666969a9d1911d1d191a96696a69a9a96696a9a696a96a9a969a669a696a9896a969696696b9696a969a96a9966a9a9669a6969696a9a6a9696a9669a696a69a999b6a999d11911d11996a6a6a6696a69698966a969a6966a66a9a969a66a9a666669666a6a6a6a966a9a69669866698966666698966a66a
        666a6a6a669a69a6a66a66698669a6b696698666a696969a669a9696a666a6a9696966a66969696969a6a661911d19119d999a9a969669669a6969698969a966a9696b69a969a96969a6b6b9a69a6a969a69696a6b96966a969a9a9a69669696a69669a969a999a6939d199dd9d1d91916bb9696969a6969a6a989a66a669a6969a6666a66966669a9a6a6a966966666a66666a6a6a9a66a6a6a9a6a66a666a6
        9a6966966a666a6666a69a6a69a6666a6a66b6a966a6a6669a666a6696b69666a66a696a9a6a6a6a6a9999d11d1111d119d9b9966b6a9a9a69a6a96a9a966696989a96b69a696a9a96969a969a69696a969a6a9969a6a996a9669669a9a9a9a969a9a96a9691d19911d191d11191d1d1d996a9a6a969a6a69669a696969a669a66969a696a6a9a69669669666a6a9a6966b6a96669666a69669686666a69a666
        666a66a66989a666a96666698666a969669a6966a96696a9896a969a6a96a9a969a96a9666969696966b19d191d91d191d99b9a969a9666969696a9696a9a9a9a966a96b69a69696a9a696a9696a9a969a69969a96996a969a9a69a966969669a9696a969a191d1d9d91d1919d191919d9d999699a989696a9a696a9a6696a669a6a696a6969696a9a69a66a966666a6a98966a6a66a6986a6a69a69a66666b6
        a666a669a66a669a66a9a6a69a696a6a6a666a6966a9896a66966a6696669896a666966a9a6a96a96a96d9d111111911d9b9a696a9669a9a6a9a969a696966966b9a969a969a9a69669a9696a969696b696a9a69a6a969a96969a969a9a9a9a966a9696b619d9b9b9d191d1d1d1d9dd9dd1dd9d9b969a9a96696a96669a6969a66966a696a66a69669a66a966a96a96666a6a696698966a9666666a6669a66a6
        69a696a666a698669666696a66a66966969a966a696a6a696a6a969a6a9a698969a98b966969896a966b6b91d91d11d1116a96a9669a966996966969a9a69a9a96696b696a96969a9a969a9a96b9a9a96b969696996b969a9a9696a969669696b969a9a999d6b696a96b99b99d9d9d919d99d9dd9b9b6666b6a966a9a69a6a696a6b9698969a96a6b669666a966a669a969696a6a698a966a69a6966a666a696
        a666a666a9666b6a6a9a6a696969a6a6a6666a96a696969896966a6969669a6a966696a9a69a9a9669b969d111d9191196969696b9a96b9a6b6b9a69669a96969a9a969a969a9a96969a96969a9696969a96b9a9a69a6b6969a9a969a9a9a9a96b9a9696a9b969a969a96a96a969a9b9a9b9dd99d999a9a96966b9696966969a999a69a989898969a69a9a966a969866a6a66a6966a966a666a66a669a669866
        66a9669a66a96a969666966a6a66696969a969896a6a6a69a6a9696a6a9a696989a9a69669a66669a99a9a11911111d91d9a9a69a969a96969a969a9a9696a9a96969a969a96969a9a969a9a969a9a9a969a96969a9969a9a96996b969696969a96969a9696a9a96b96a969a96a96966969a96d9d9b99969a9b96a989a9a6b666a696a66b6b69a669a96d989666a69a96696a966a966a6696966989a666a69a6
        a966a666966a666a66a6a96969a9a6a6a66a6a969696969a696a6a9696696a69a69669a69b969b9a9696911d1d191d11dd1199b969a9619a9696a96969a969696a9a969a969a9a96969a96969a9696969a996b6b969a969699ddd19a9a9a9a9696b6b969a9a96969a96969a96996b6b9a9696a9a9b9a6b9a969a9669a66969a9696a96969a6989a661919d9a9a9698989a66666966a6966a6a6a6a666a96a666
        98989a9a6a969a969a9666a6a66669696969698a6a69a6696a969699a116a96696a9a696d9a99a966ba9d1911911d1911191d119a969d911b6a996b6b96b9a9a99696b969a96969a9a969a9a969a9a9a969b99b9a969a9a9a19191d1996969a9a99a96a96969a9a969a9a969a9a99a969a9a969696a996a69a696a9a969a966b9a996a9a696a9669d9ddd196666a69a669a9a9a6a696a6966969696a966666a6
        a6a96666966a666a6669a96969a9a6a6a6a9a69969a69a9a696a96a9111119a9a96969a99b9d9699a96d111d111d111d91d9d9d9d99d9dd9119b69a96b96b9696a9a96b9a969a9696969b96969a9696969d939199a969696191d1d91d19b9b9696969b9b9a996969a96969a9696a969a96969a9a9696a996969a96966b6989a99d6d96696a966a99dd19d9b9a9696a69a666666966a698a9a6a6a6666a6a9696
        9666a69a6a69696969a666a6a66696969696698a969669896a96696a919191199939d119b969b939999d191191d19191191d19d19dd9d91111119b99a969a96b9969b9a969a99b9a9b9a969a9b969a9b9bdd1dd9d9b9a9b99d191d191dd999a9b9a9a96969a9a9b9969a9b969a9969a969a96969a9a969a9a9696a9a969a9696d9a96b9a9669a9b9d9d19166989a6966969a9a6a9696a966669669a96696a6a6
        a69a96a6966a6a6a6a69a96969a96a69a6a9a696a989a96a969a9a9696d1d1d11d1d191d11dd9d9b9b11d1d9d1911111dd9919d119d9d9dd19d1119b96b969a96a9696969b969a9969a969a9969a9969a919d9d9d969b96bd1d191d1919d9a969a9969a9a969969a9a9969a9b969a969a969a9a96969a9669a9a96969a96b9b9d99b966669a96919d19dd9a9a9896a9a6a6669666a66989a9a6a666a6a669666
        96a66696a6969696969669a6966a969a69669a9696a96a969a69666a9a96d19d11911d11911dd16d9b91191d9d91d1d191d1d9d919d9b9a9699b9d969a9a969b99a9a9b9a969a969a9969b9b9a99b9a999d9d9dd9a9a9699a9191d91dd9d99b9696b9b999b9a9a9699a9a9969a969b969b9a96969a96969a96696a9a9669a9d9a9b6a9a99d69dd91d9d919966d9b96696969a69a969a698989696a96969a6a98
        a969a6a696a989a6a989a696a9696a6969a9669a696a969a9696a996969a99d91d11911d1d19119d911d1d9119d9199119d91d9dd9d99a969a969a9a9969b9a9699b969a99a9969b969b9a9699a9699b9b99b199b9699a9b99d1d1d1919d9b99a99a99a69a99699a969969a969b9a9a9a96969a9a96b9a969a9a96969a96969a9696969a99a191d9dd1d9361d91d919a6a9896a69a696a966a66a96a6a666669
        66a69696a966a96966b696a96a9a969a696a9a69a96969a969a969a9a6966a91d1911d1911911d1dd1d1911d919d9d9a99d19d91d99a969b969a9969b9a9969b9a969a99699b9b99a9b9b99a9b969a9dd91d9d9a99a999b961919191d9d9d9d99b99a999b969b9a99b9a9b99a969969969a9b969969a969a96969a9a969a9a969a96a969a99d9d919d9d91d9dd9ddd9d969a6969896a6989a9696669669a9a6a
        9696a6a966a966a69a96a96696669a69a696969699b9a969a696a9669a9a9969911d191119d191d1191119111d9d9d9d9b9b19d9b9b969a96b99a9b96996b9a969b9b9b9b9a969a99b969a9969b9b911d1d1dd99b99dd9ddd1d1d1d1d9dd19dd99a996b969b9a9969a99b9699b9a9b9a99969a9a9a996b969a9b96969a96969a69699b996d9d1dddd91dd9dd91d919d99a696a96a9696a9666a6a9a66a666966
        a6a969669a969a96a9696a9a9a9a696969a9a6a9d1d99b9696a969a969696a9a69d1111d19d9d9911d99d1d9119dd99b9999a969a969a99699b96969a9a99a99b969a969a99b9b969a9b9969b9a99dd919191d119dd91d9191919d1919d9d19dd99b99a9b9a9969b99b969a9a9969a996a9a9969b96b99a9b969a96b969a9a969a9a9da99dd9d9191d919191d9d19ddd996a96a966a6966a96969669a969a6a9
        6966a9a9669a696969a6969669696b6a96969999d1ddd9da999a969a9a9a9699a99d91d19d9d9dd999dd91d1d1d99b99a9a969a996b99b9bdd91ddd9969b99699a9999a99699a99a9999a9b9b999b11d1d1d919dd91d1d1d1d1d191d9d91d19d9d9b9b99b9969b9a9a96b99b96b9b96999b96b9b969a96969a96969a9a96969a9696999dd91d919d9dd9ddd9d9d9d99d9d969696a969a696a9a6a9a666a69666
        a9a966989a696a9a989a9a69a9a9a9969a9a6a9d1d191119d169a969696969a969a9d1919d9d9a99ba99b999d9d9d9a969b9b996b99a969d911d191dd9b969a9b9b6b99b9b9a9699b9a99b999a9d1919191d1dd91d19191919d191d19d1d9d9d9d9999a99a9b9b9999b99a99a99a99bbb969b9a969d9b9a9b969a9b96969a9696b6ba9a91d9d1ddd191d9191d9dd9dd9d9db6a9696a969a966969669a96989a9
        66969a69a96a9696a96969a9696966a9a9696961d9111d1119d969a9a9a9a969a96969b9d9d999b96969a9b999b9a969b96969a99a969a111d191d1919b9a99b9699b9a99a999b9b9b9699a99d91d1d1d191919d9d91dd1d1d191d9d9d911d9d9dd9399b999b99a9b99a99b99d99b9996b9a999b9391999b96b99a969a9a96b9a99969619d19d99d9d91d9d9dd919d9d9d99a96a6966a6669a6a69a6696a9666
        9a6a69a966969a6969a9a969a9a69b9696a9a9a9111d191919da9696969696b969a9a99a9b9a9a969a9b969a9a969b9a99a9b99a99b999d91d11d91dd99b9b99a9b9a99699b9b9b9969b9b9d9d1d91919d1d19d9d9d91919d91d1d19d9dd91d9d9d9d9d9b9a9b99b9a99b99a99d99b9a99b9b969b91ddd99b99a969a969969a969a69a9d9d9dd1d91d9d9d1d919dd9d9d9b96699a9a9969a969698969a6989a9
        a96969669a9a969a969696a96969a96b6996969d11911111dd999a9a9b9a99a9a9969a96996969b9a9969a9699b9b969b999a99d996b9d1119191119d9b999a999b99b9b9b99699a9b9b99d9d1911d1d1919dd9d9d9d1dd11d19191d19d91d9d9d9d9d9d99999a9999b99b99b9a9d9b9b99b9a9b19d9193d1d99b9969b9a9b969a99b9191dd9199d9d9dd9d9d9d9d9d9d9a69a696696a9a96a9a96a9669a6966
        69a9a69a96969a96a9a9a969a9a969a99a9a9a99d11d19d191d9b99696969a96969a9969a9a9b969969a999b9a969a996b699b9ddd19b19d11d1d1d19d9b9a99b99a999a99a9b9b999b9b9d1d1d19191d1d191d1d19d9191919d1dd91d1d9119d9d9d9d9b9a9b9b9a99a99d9a999a9999b1999b91d1dd9d9d91d9b9a969969a9696a99dd9d91ddd9d9d9dd9d9dd9d9d9d999a96a9a9696669669896a9a696a6b
        966969a96a9a96969696969a9696b969a96996d99d191111d1119d9d9a9a9699b9b969b99b969a9b9a99b9a9699a99b99b9a9911911d1d11d191191d99b9b969b9a99a99b999b99b9a999d1d9191d1d919ddd19191d1d1dd1d1d911d919d19dd9dd9dd9d999b999b9b99b9a999b99b9a99b1dd919d919d191d9d99b99a9bd969a999d9d91d9d99dd9b99d9d9d9d9d9d9d93999d9696a9a9a9a96b969696a969a
        6b9a9a969696a9a9a9a9a9a969a969a969a9b9dd1d111d911919d9d9d999b9a969a9b9a969a99969b9b9699b9b99b96b99b99d1d11d19119111d119d199a999b999b99b99b9b9b9b99b9a91d1d19191d1d9b91dd1919d919191d19d1d1d9dd91d9d9d9d9db99a9b999a9999b19b9d99b9b999d1dd19dd9d19d9d9b9699b99d9d9b9d9d1d9d9ddd91d9a969b99d9dd9d9d9d9dd9d9a969699999a96a9a6966a96
        9a69696a9a99696969696969a969a969a9699d91191d911d1d19d9d9d9b9699a9b96969b9b96b9a9969a9b969a969b9939dd1d1191911d1d919191d9d9b99b9b9a99b99b99a999a99b999d19191dd1d91d9bd9d91dd11d1dd191d1919d119d919d9d919d9d9b999b9b99b9b9b99b9dd999b9b19d9d19d19dd9d9d9a9a969a9d9d99b9d9d9d9999d99b96b9a9a969a9b9d9b9d9d9d99d9d9b9b96a9669a69a96a
        969a9a9696a9a9a9a9a9a9b969a9969a99a9a91d1111111911d9dd9d9d9b9a99699a99a99699b99b9a9996b9b99b99a911191d91111d19191dd119d9d99b9b99b99b9b99a999a999b9db9d1d1d191911d9bdbd91d19d919191d91d19d99d9d9dd9d9d9d9d9d9b9b999b9d9999a99dd1dd9d9d91d19d19d9d9d9d99969b9a99d9d9b9d9d99b9b9a9a969b969696a9696b9a9d9b9d9d9d9d9dd9a969a969a96696
        9a96969a996969696996969a9696b9a969999111d91d1911d1919d9dd9d99b969a99b996b9a99a9699b9a99b9b99a99d9d911911d91191d19d99dd9d9d99b9a99b999a999b9b99b9999b91919191d1d9ddb9dbb91911d1d1d91d19d1d19d9dd9d919d9dd9d9d999b9a99b1ddd9b999d91dd9dd91919d91d9d9d9db9b99a999d99b999b9a99a9b9699a96b9a9a9969a96969a969a9b9b9d9b9696b696a969a9a6
        969a9a969a9a9a9b9a9a9b969b9b9699b9a1d1d9111911d1911d9d9d9d9d99b9b9b96b99b99a99b9a9999b9969a99b9d9d91dd9d11d1191d191d9d91d939999b99a999b9b999b99bdb9d1d1d1d1d91d19b9b9b9bb1d919191d191d1919d9d9d9d9d9dd9d9d9ddd9b99b99b919d9ddd91d9d191dddd1dd91d9d9d999a9699b9a9a9b9a969b96969a969a9696996b9a99a9a996b9696a96a96a9a969a969a69696
        b9696969a9699696969969a9b9a969a9696919111d11d1111191d919d9d9399b9969b9a99a99699b9b9a99a9b99b999d9d9d9d9d9119119d19d9d9d9d99b9a99b99b9b999b9d1dd999b191919191d19dbddb9db9c6d1d1dd191d9d91dd9d9d919d9d9d9d9d9d99d9b99b99ddd9d9d1d91d9d191919d91d9d9d9ddd999b9a9699969a99b969a9a996b9969a9a9a969696996a99a9a996969a9696b969a9696a9a
        9a9a9a9b969a9b9a9b9a9b969699a999a9b9d1d191191191d1d9d9dd9d9d9d99a9b9b99b9969b9a99969b9999b99a9d9d9dd9d911d11d1d1919d19d9ddd999b99b99b9b9b9dd919d9391d1d1dd1d911d9b9db9db8c89d9191dd19dd9d9d9d9d9d9dd9d919d9d9d9d9d9d9b9911d19d91d91ddd9dd91d91d19dd99ddd9b9969b9a99969a9a996969b96b9a9969969a9a9a9969a9696b9a9a969a96a9696b69696
        969696969a9969a99a96969a9b9a9b99999b19111d11d1d1919d911d9d9d9d9d99a99a969a99b99b9a999a9a99dd99d9dd919d9d19191d11d11d91d9d99db99b99a999b99dd11d1d1d11919d9191dd9bdb9bdb9d66c6b9d1d9191d9d9d9dd9dd9d9d919d9dd9dd9d9dd9d1ddd91d191dd19191d1919d19d9d9d9d999b9b9b9a99a9a996996b9b9a9b9a9969a9a9b996969a96969a9696969b96999a9a969a9a9
        a9a9b9a9b96b9a969969b9b99a9969a9393919d191d19119119dd19191d99d9b9b96999b99b99a9999b9b999b111d9d9d9d91d19111d19191d11d919d19d9b9d9b9db99bdd9191919191dd11d1d191b9b9db9db9bbd6cb6d1d1d19d9d9d9d9d9d9d9d9d9d9d919d9d9d9dd9119d91dd919ddd919dd19dd91d9d9d9399b969b969969b9a9b99a996969969a9969969a9b9a99a9b969a9a9b969a9a6969a9a9696
        9696969b69b9699b9a9b9a969969b99b99dd19d111911d19dd9d91d9d9d9319a999b9a99a99a99b9a99a99b99d191dd19d9d91d11d9111d119191d9d9d1d99d9d9d99b99d11d1d1d1d19d99d9d9d19dbdb9db9bdb9b6b6b689d911d9d19d919d9d9d9d9d9d9d9d9dd9d9191d91d19d19d1d91d91d9dd91d9d9d9d9d9b9b9a99b9a99a9969a9969a9b9a9b969b9a969969969969a99b9969a9a9699a969696b6b
        9a9b9a99a99a9b9699b9699b9a9b9a99a999dd9d1d11919d9d919d919d9d99b9b9a999b99b99b99b9b99b9b91d1d19111d919d19111d91191d1d91d9d919d9b9d9d9d939d9191919191d9dd9d919dd9b9db9bd9b9bb6b6b6cb119d19d9d9d9d9dd19d9dd9d9d9dd919ddd191dd91d91d191d91d91d91d9d19d9d9d99b9999b9699b9969b9969a999a9969b9a969b9a9a9a9a9a99696b9a96969a969a9a9a99a9
        699a99a99699b9a9a969b9a999b969b969a961d91191d9d919dd19ddd9d9d999699b9a9b99b99a9999b999b1d19111d911d9d11d19111d1d1919d9d9dd9dd99d9d9b199d11d1d1d1d1d91d911d19db9db9db9bdbd9b6b6b6b69d191d9d9d9d9d99d9dd9d9dd9d9d1d9d91dd911d91d919d91d91d91d91d9dddd9d9b99a9a99a9b969a9b9a9b99b69969a99699a9969969969996b9a96969b9a996b9696969696
        9a9696969a9a96999b9a9996a99a999a99b9d9d1d1d19d9d9d919d9919d99a9b9b99b999a99a99b9a99a9b99d11d9111d911191911d91919119d1d9d9d9d9d9d9b99b1dd1919191919d1911d91919bdb9bd9bd9b9b6b6b6b6c9d1d191dd9dd9dd9dd9d9d9d9d9d9d91d9191d9d91d1ddd1d91d9dd91d9d19191ddd9b99b96999a9b999a9969a99a9a999a9b9a969a9a9b9b9a99a99b9a9b96969a969a9b9a9a9
        b99a9b9a99b999a969b96b999b99b969b999dd1911919dd9d9d1d9ddd99399b9b9a99b9b99b99b999b9999a99d911d9111d1d11d1d11119dd19d9d919d9d9dd9d9dd9d91d1d1d1d1d19d1d911dd1b9b9db9bd9bd7d6b6b6b8c9d9191d19119d9d9d919d9d9d9d9d91d1d91d191d19d919d9d9d191d9d19dd9d9d999b9b99b9a9999a96969b9969999a96996999b99b9969a969a969699969a9b99b9a99696969
        6b9969b9b996a99b9a999b9a99a99a999b939111d11d19d91d9d91991d99b99b999b99a99b9b99b9b9b9a99b9911d111919191d19191d9d9d9d9d9d9d9d9d9d9dd191d1919191919191d91d91919bddb9dbd9bd9bd6c6b6b6c9d1d1d91d191d91d9d9d9d9d919d9d19d91d9d19d91d9d191dd9dd9d19dd919d9d9d9a99a99b9b9a99b9b9b9b9a9a969b9a9b9a99a996b9b99b9969a9b939a996b69696b9a9a9a
        99a9b9969a999b9699b9a999a99699b9a999d1919191191d9d9d9ddd9dd9b9a9b9b9b999b999b99b999b99b99d9d91911d111d91111d19d9d9dd919dd9dd9d19d9d1d191d1d1d1d1dd91d1d1d1db9b9db9b9bdb9b9c6c6cb6bb919d1d91dd91d191d9dd9d9d9d9d9d191d191d1d191d91d919191d9dd91d9dd9d9d9d999b999999b9699a99699969b99b99699a996b99a969a9b9b9d9d9996b99a9b99a969969
        b9699a9b99a9b9a9b99b9b9b99b9b99b99b9d1d11d1d1d19d9d9191919d99b999b999a9b9b9b9b99b9b99d9b9d99d11d191d11119d1919dd9d9d9dd9d9d9d9d19d9191d191919d19d91d191919d9dbd9bddb9d9bdb6b6b6c6b6dd19191d911d91dd1d19d919dd9d19d1d9d19d9d9dd91d9dddd19d191d9d19d19dd9dd9b9dd939b9939b969b9a9b99a996b9a9969b9a999a9969b9d9d9d9a99a999a9699a9a96
        9b9a999a99969999b9a999a969b99a99b99dd19111911919d9d9d9d9d9d9b9b9b9b9b99999b9993d999399b99b9391d19119191d1191d191d9d19d9d9d9d9d9dd91d1d191d1d191d11d91d91d1bdb9bd9b9dbbd79bb6b6b6c6c9191d191d9d1d91919d119dd9d9d9d191d91d191d191d919d919d9dd9d19dd9dd9dd9dd9d9d9d9d9d9999b9b99b9a996b99b9b9b99b969b99b9b99dd9d9d9b996b969a9b9699a
        99b96b99b69b9a9b999d9999b99a99b99a999d1d911d11d9d91d9d9d9d9d999999b99b9b9d9b9d91db99d9939d99d1911d1d119191d11d1d9191d9d9d9d919d19d91d91d19191d19d91d911d9d9b9db9bdb9d9b9d6b6b6c6b6bb9d19dd191d91d9d1d9d9d9d9d9d9ddd91d9d91d9d19d1d9d9dd1d91d9d9d919dd919191d9dd9d9d9bd9399a96999b999a99969b9a99b99a9969d9d9d9b969a99a99b9969b9a9
        699a99a999b9b9969b11ddd99a99b99a99ddd9111d191d1d1d9d9dd9dd9ddddd939b99b99399dd19d9d9dd99d9d9d11d191191d1d11919111d19d9d9d919dd99dd1911d91d1dd91d1d911d911b9db9bd9b9bb9dbb6b6b6b6cb66d91d191d191d91d911d1d19d9d9d191d91d1d91d9d19d9d919d91d91d9d9d9d9d19ddd9dd9d9dd9d9d99d999b9a99b9a99a9b9969b99a9969bd9d9d9d99b99a996d9a9a9699b
        9a99b99b9d9a9b9b91d111dd99b99b99b999d1d91911191919d9d919d919d99d99d9b911d9bd911d9d9d9dd9d9d9d99d11d1d1d191d1d1d9191d9d1919d9d9d9d91dd911d91911d911d9191d9db9bd9bdb7d9bd9c6b6b6cb66b6dd919d19d191d919d9d99d9d9dd91d91d9191d91d9dd9dd9d19d9dd9d9d9d9d9d9d9d9d919d9d9d9d9dd939b9b99b999b99b9a9b99a9969b99d9d9d9939b9b99b99b999b9a96
        99b99a99b99999b9d1919119d99b99a99b93191d9d9d911d1d19d9d9d9d9dd9ddd9111d1d9911d19d9d9d9d9d9d9d9d99d919191d9d91d11d1d91d1dd9d9d9d9d919d9d91d1d191d9191d19db9bd9bdb9d9bdb9c6b6c6b66bcb6b91d19d19d19d9dd919dd9d9d91d91d91d9d91d91d91d91d9ddd91919d9d9d9d9d9dd9dd9dd9d9d9d9d99d99b9b99b9a9b99999b969b9b9b939d9d9399d999a99a999b99b99a
        9b9a99b99b9b9a999d11d1d19d9b9b99b9d1d19d9dd91d19199d9dd9dd9119199d19d191d1d1d911d19d9d9d9dd9d9dd91d11d1911119191d911d919d9d9d9d91d9d9d9d91919d1d19d9dd9d9bdbd9b9bbdb96b6b6c6b6cb66b6bd91d191d19d9d9d19d919d9d191d91d91d1d91d91d91d91d919dd9ddd9dd9d9d9d9d9d9d9d9d9d9d9d939d99b9b9a9999a9b9b9b999d9d99d9dd9d9dd939b9699b69d9d69a9
        9999b99a99b199b9b1d19191dd99b9b99b991d9d919d9d111dd919d9d91d1d9dd9d91d1191d111d19d9d9d9d9d9d9d9d91191911d9d1d1d111d911d191d919d19d9d919d9dd9d919d9dd91d9bd9db9db9b9d6cb6c6c6cb66bc6b6dd919d19d1d19d9d91d9d9d1dd91d91d919d19dd91d91d9dd9d91d9d919dddd9d9d9d919d9d9d9d9d9d99b9b99999b9a9999b999a9b9d9a9dd9d9d9d9d999d9b99b9a9d999b
        9a9b9b99b99b9b99991d111111d9999b99b911d9d9d9d19d19d9d9d9191d9d9d9d1d99d1d191919d19d9d9d9d9dd19dd1d1dd1d91d9191919111d9191d1dd9dd19d91d9dd91d19d19d9d19dd9bd9bdb9b6bbb6b6b6c66c6c6b6a6b91d1d91d919d9d9d9dd9d19d91d91d91dd9dd91d9dd9d191d9d9dd9ddd919dd9d9d9d9d9d9d9d9d9d9d9b9d9a9a9999b9a99dd9d99d9d919d9dd9d9ddd9399b9a9999d9b99
        b999969b9a99d9b9b9d191d919d9bb99b99b9d111d9d19d9119d91d9d1d9d9d9d919dd99d111d119d9d9d9d9d9d9d1191919191d9d91d11d19d911d119191d9d19ddd9d9d191dd91d9d9d1b9bdb9b9db6c66b66b6c6cb8b6b8b6b819d91d91dd19d9d9d9b19d191d91d91d91d91d91d91d9d9d91dd919d919d9d91dd9d9d9d9d9d9d9b9d9b9d9d999b9b99b9b96d9d9b9dd9dd919dd9d9d9d9b9d99d9b99b9d9
        9a9a9b9999b9a9dddd11d111dd9d99b9b9b9999d9119d9d19d9dd9d91d11919d9d9d9d9d99d919119d9d9d9d9d9d99d11d191d99d9d919d19111d919d1d1d9d99d919d919d191d1919d9d9db9b9bdb9c6f8c6c6cb6b66c6b6c6c6c61d191d919d9d9d9db9b19dd91d91d9dd91d91d91d9d191dd9d9d91d9dd919d9d91d9d9d9d99399d9d99d9d99b999d9d999b99d9dd9d9d9dd9d9d9dd9d9d9d9b9939a99b9b
        9999b9b9a99911191191191919d9b99b99b9b939d91d9d9d91d9d9d911911d1d919d9191dd91d19d9d9dd9d9d9d9d9d99d9dd19d9d9d91d1d19d11d1d919119dd1d91dd1d19d191d9d9d9db9dbd9b9b6c6c6c6c66b6cc6c6c6c6b8c99dd91dd9d9d9d9b9dbd191d91d9dd91d91d9dd919d9d9d9191dd9dd91d9ddd9d9d9d9d9d939d9d9dd9a99399b9a9d99b9d9b9d9d9dd9d9dd9d9d99d9b9d9d9b9999b99d9
        b9b99b9b9b931911d1d191d1d9d9d9b9b9d9d99d9d9d9d9dd9d9d9dd1d1d1911d1d19d9d91d91d1d9d9d9d919d9d9d9d9d9d9d9d9dd9dd9191d19199d9d1d91991d1d919191dd1919d9d9b9bd9bddb78c8c66b8bc6c6c6c6c6c6c6c6d91d919d9d9d939bd9b9d91d9d19d9d919dd919dd91dd9ddd99dd919d9d9191d9dd9d9d9d99d9d9d9b9d99b9b9999bd99d9d9bd9d9dd9d919d9dd9d9d99b9d9b9b9b9a99
        9b9b99b999d11d191911d119d9d99b9d99b9939d9d9d9d9d9d91d9d9191911d91d91d91d9d9d9d91d9d919d9dd919d9d9d9d9d91d919d91d1919d1d1919d1ddd191911d91dd919dd9d9db9db9b9b9d6c8ccc6c66b6b68c8c6c6b8c8c9d9d9d19d9d9dbd9bdb9dd91d9d9d91dd9191d9d19d91d919dd919dd9dd9dd9d9d9dd9d9d939939d9d99399b9bd9399b939d9d9dd9d9d9d9d9d9dd9d9dd9d9d9d9b999d9
        bd99a99b9b19191111d9119d9d9d9d9939d9d99b9dd9dd919d9d1111d111d111911d9d9d9d919d1911d9d9dd919dd9d9d9d919d1d9d19d9d9d9d9d9dd1d9d9191dd19d1d911d91d19d9d8c6bdbd9bd6c6f6c6c6c6c6cc6c8c8c6c6f66d91d9dd9d9b9b9b9b9bd9d91d9d9d9d9ddd9d19dd9d9d9dd919dd9d9d919d9d9d9d9d939d9d9d9d9d999b99b99b9d99d9d9d9d9d919dd9d9dd9d9dd9d9d9d99b99b9a99
        d9dd9b99b111d11d9111d19dd91d9b9d99d9dd9dd9d9d9d9d9d9d9191d919191dd919d9dd9ddd9d1d919d9d9d9d191d9d9d9d9d91d9d9d1d19d9d9d99d1911d1919d19d1d9d1d919dd9b8c66b6db9bb6c6c8c6cc6c6c6f6c6c8cc68c6b9d9d9d9ddbd9bdbdd9bdb199d9dd19191919d9d91d91d9d9d9d9d91d9dd9d9d9d9dd9d9d9dd9d9dddd9d9b9b9999399d9dd9dd9dd9d9d9d9d9dd9d9d9d9939d9d9b9b9
        9d9999b99d9119111d9191d9d9d9d9b9d9d9ddd9119d919d9d91d91d11d1d1d1911dd1919d99d99d11d9d9d9d9d91d9d9d9dd9d919d9d991d9d9d9d9d191d919d1d91d91919191dd9b18c8c6b9b6db6c8cc6f6c8c6c6c8c8f6f6cc6c6c8c99d9d9b9bd9b9b9b9b6b9d9d9d9ddd9dd9d19d9dd9d91d9d9d9d9dd9d9d9ddd9d9d9dd9d9d9d999d939d99b9b9d939d9d9d919dd9d9bd9dd9d9dd9d9399d9d9d999b
        9dd9b9b9b11d1d191d1d19d9d9d9d99d9d9dd91191d9d9d9d1d91d919919191d19d919d1d9d19dd9d91d91d91d91d9d9d9d91d9d9d9d9d9d9191d9d9d9d191d1d91d91d1d1d91d9bd88c6f6bbb9bd9b6c6f6c8c6f6c666c6c68c6f8c6c6c8cb99c9b9bdb9dbdb9b6b9d9d91919dd919ddd19d9dd9dd9d9d9d9d9d9dd99dd9dd9d9d9d9dddd9d99d9d9b9b9d99d9d9d9dd9d9d9b9bd9d9dd9d9d9939d9d99b9a9
        999dd99b9191911d1919d9d9d9d9d939d9d9111d1d11d9d9d91d11d1d1d1d9d9d911d9d919d1d9d991d11d191d19dd9d9d9d919d9d9d9d9d9d9d19d9dd191d9d1d91d19d9d91d1b9db6f68c66db9bdb6f68c6f6c6c6cc6c8cc6f6c6c86b8c88d6cc9bd9bd9b9d6b6b6d9dd9d9d91d9d9d9d9d9d9d9d91d9d9d9d9d9ddd9d9d9d9d9d9d9d9939b9d9d9d9d9dd9d9dd9d9d9d9d9bd9b9d99d91d9dd99d9bd9b99b
        9a99dd99d1111d919d9d19d91119d99d9dd1d191919119d911d191919199d9d9d9d9d9d9d919119dd19191d191d191119d9d9d19d919d9b9d9d9d9d99d91dd19191d9191d1d91b9bb8c6c8cc8d9bd9b6c8cc6c8f68c66c6c6c6c8cc6c6c6c6c6c86c6bd9bdb9b6b8c8c99d9d9dd9d9dd919d9d9d919d9d9dd9d9d9d99d9d9d919d9d9d9d9d99d9d9b9d9d9d9d9399d9d9d9d9b9bb9b939dd9d9d9dd9d99b9b99
        b9b9d9d9dd91d11d19d9d9dd9d1d1dd9d9d191d111d19dd1d191d1dd1d9d9d919d9d919dddd1d1d191d1d91d191d19d1d9d9d9dd9ddd6b8d9d9d9d9dd91d9191dd91d91d91919db9b6c8c6f6f9bd9b9b6c6f6c6c6c6cc6c8ccc6f6ccc6c66cc86c8c6bb9b9dbd8c6c68cc9d9d9d9d9d9d9dd9d9dd9d9d9d9d9d9d9dd9d9d9d9d9d9d9dd9d939d9d9d9d9d9d9d9d9d9d9d9d9bdb9db9bd9d9d9d9d9d9d9b9a69b
        999b9d9d911d1919d9d9d9d9d9d9191d9d191d191d91199191d191999d9d9d1d9d9dd9d19999191d19191d191d91d1919d9d9d9d1968bb6b9d9d9d9d919d19dd91d91d919d1db9bb8cc6f66c9bd9bdbd8c6c8f68f6c66c6f66f68c6cc6c6c66f6f6c66dbdb9b6c6c8c8c6c9d9d9d9d9d9d9d9dd9d9dd9dd9d9dd9d99d9d9d9d9d9b9d9d9d9d9d9b9d99b9d9dd9d9d939d9db9b9b9bd9bb9b9d9dd9dd9b966b69
        b9b99bd1d1d911d9d9dd9d9d9d91d1919d9d191d1119d9d1d191d9dd9dd9d9d1d119d9d9d9dd9d191d1d191d91191d1d9d9d9d99b8cc8b6c99d9d9d9ddd91d19191d91dd19d9bd66c6f6c8f6bd9bd979c6f6c6c6c6c6c66c6c8c6f66cc876c6c86c8cb9b9db6c8c6c6f68c88b99d9d9dd919d9d9d9d9d9d99d99d9d9d9d9d9d9d9d9d9d9d9d9d9d9d939dd9d9d9d9d99a69b9bdb9b9b9c6c6d9d9d99b9ba66a6
        9b9b999d1911191d9d9d19d9d9d99dd9d91d9d919d19dd1d191d19d9d9d9d9d919dd1d9d9d9d9d1919191d911dd1919d9d9d99dd8c6866b6b9d9d9d9d91d9191dd91d9d9dd9d9b6c8c68c6c6b9bd7bdb66c6c8f6c6c6c8c6f6c6f66c6cc8c6c6cc8c66db9b6b8c6f686c86cc6c6d9d9d9dd9d9d9dd9d9d9d9d939d9d9d9d9d9d99d9d9dd9d9d9d9d9d6d9d9d9d9d9b9b9bb9b9b9bdb9c6c6a6b9d9399d96b96a
        999d9b99d1191d111d9d9119d9d9d9d9dd91d1d1191d9191d1191d19d9d9d9d191d91919d19d91d1d1d191d19191d9d9d99dd9bb68ccc6bbb9d9d9d9d191b6b9d919d9d999bdbd8cc6f6f687bd9b9d9ddd8cc6c6c686c6c6c8c86c6c6686c6c68f6cc6bdb9bd6c66cc6ccc6c8c88b9d9d9dd9dd9d9d99d9d9b999d9b9d9d9d9b939d9d9d9dd9d9d9b9a6d9d9d9d9d9d9b9db9b9b9b9c8c866b6a6d9b9b9b6a69
        b9b9b9b9dd1d119191191d19d9d9d9d9d9d99199d1d1d1d191d1d911d9d9d99dd91d91d9d91d191919d91d91dd191d9d9d9d939b8c6f6b6b6b9d9d9d91d99b6a91d9d99ddd9b9c86f68c6cc6b9bdb9b9bb6c6f6c6cc6c6c66c6f6c66cc6c6c6c6c6c6c6d9d9b66cc6c6c66c6c6c8c6b9d9d9d9d99d9d9d9d9d939d9d99399b9d999d9b9d99d9dd9d99b69d9d9d9b9b9b9b9bdb9bd9b86c8c8c6b6a99b99996b6
        9b99b99d9191d1d11d11d9d19d19dd19d9dd91dd91919191d91911d919d19dd9191d19191d191d1dd11d191d919dd99d9d9bdb9b6c866bb6b69d9d1d19d9d999d99d9d9d9bb9b6c8c6c8c8c6cb9b9bdb96cc86f8c686c86c6f6c6c6c66cc66c6c6f6f6b9bbd9bb78c8c6c6c6f6c6c6bb6b9d9d9d9d9939d9d99d9b9d9399399d939b9d9d939d9d9b9b9b9d9d9d9d9d9b9bd9b9b9bb8c86c6c6c6b6b99bdba69a
        99b9939d9d11919191919d91d919d91d9d9d919d9d1d1d19d9d1d911d99d99d19dd91d9d9dd1919d99d91d191d1919d9bdb9b9bb8c6fc666bb69dd919d9b9bb69d9d9d99b9db6c8c6f6f6c6f6db9db9bd8c6f66c6c6c6c6c68c8c6c6c6c6cc66c68c68bb9d7b9bb68c6f6c86c6c8c6b6bbb9d9dd993999d9b9399d99b99d9d9d99d9d99d99d9d9d9b99a69d9d939b9b9b9b9b9bd96c6c6c8666c66bb99969a66
        9b93999d9d91d11d1d1d19d91dd1919119d9dd9dd9d9191d19d9d1d91d9dd9d9d91d9d9dd9191d19d91d9191d91d9d9b9b9bdb96c6f66cbb86bb919db6b9d9a6b9d99dbdbd9b6c6f6c68c6f66b9bd9b9b6f6c8c6c6c6c6c6f6c6c6c86c68c6c6c6c6c6b9b9b9d96c6c6c86c6c6c6c6b6b6b9d9d9d99d9399d99b9d939d99b9d9b9d9939939d9d9b9db69a9d9d99b9b9bdb9b9b9bb66c8c6c6cb6b66cb9ba669a
        9999bd9dd9d191d91191d1dd9191dd1dd1119d919d919d191d919191d9d9d9d1dd9d19d91d1dd9d9d9d91ddd91d9d9bdd9bd9bb6c86c86b6bb6b61d9b69b9b696d9399b9db9db8c68cc6f68cb9bdb9bd6c8c6c66c66c6cc6c86c68c6c6cc8c6c6c68c87bbd9bbb6c66c6cc6c6c6f6c6b9b6b9d9d9dd9d9b9d9b9b9999d9399b9d99399399d9d9d9b99b66b9b939b9bd9b9bb9bd9bb86c6c6b66b6a6b6b99b6b6
        9bd99dd9d1d1d11191d19191d91d1991919d1d9d9d9dd191d1d1dd1d19d91d9191191d1d9191919d9d9dd9191d91939b9bd9b68c8cc8c6b6b6b6cb999a6a996a699939db9bb9c68cc6f68c6c9bd9bd9bc6c6f6c66c6c66c68cc678cc6c86f6c66c6c6f66db9d9bd8c6c6666c6c66c6b6b6b6b9b9d9d99d9d9b9b9bd93999d9d99399399b9d939b99bb9b96a696b9b9bb9b9bd9bb96c68c6c6b6b6b66a6b99a96
        d9b9b9d191919191d191d1d111d9d9d91d191d191d9d91dd919191919d9199d1d91d9191d19dd9d9d9d91d1d919d9bdbd9bb6c8c6c6f6c6b6b6b6b9b96966a96ba9d9b9b9d9b8c6f6c6cc6f87d9b9bd6ccc6c66bc6b6c6c6b76b6c6c66c86c6c6c6c86c6d9bbd9b7b6b6bcb66c6c66b66b6a69b6b9d9399b99b99a699bd9b9d939b99b9b9d9b99bb996a6969a9b9b9b9b9b9bb9b6bb86f68c66c66b66b6b966a
        999b99d1d11d1d1d1d1d1919d91919d9d91d191d191d1911d1dd191d19d9319d19d1d91d9d9d91d99d99d99d19d9d9b9bb9c8c6cc6f6c6b6b6bb6b99bd9396b696d9db9bdb9b6c86f68cc86c9bbdb9b666c8c6c6b6c6b6c6d9db6c8c6c8c6c66c6c6c8cb9bd9bb9d9c6c6b6b6b6c8c6bb6b86c69a69d9b9d9b9b96ba999b9d999b9b6a96a99b6a969a969a96b9b9bb9b9b9b9b9bb96c68c68b6cb6a6b66a6b96
        9b9d9bd9191d919191911d11119dd9d9d1d91d91d1d91d91919191d9d19d91d91d9191d9119d99d9d9d9d1d99d99d9b9d9c86c86f6868c6b6b6b66ab99b69a96a969b939bb6c8cc68cc6ccc6bd9b9b7b6b8c6c66c6b6c6c9bb9b6c6f6c66c6c6c686c666b9bb9db9b6c6c686b6b66c6b6b6b6cb69a999d9b99b9b969639d9939b999b9696a69b96a96b96b6d9b9b9b9bb9bdb9b9b68c86c6c6666b686a666a6b
        1dd9b9111d1111d11d191919dd19d1dd9d1d9119d91d191d191ddd1d91d1d91191d1d91d99d9ddd9dd9d99d9d9d9b9bdb9c8c6f6c8cc6f66b6b9b6b6b8b9a6969a9b9bdb9c8c6f6f68cc6c6f9b9bd9dbb876c6cb6b6c66bb9db9c6c686c6c6c68c6c6f6bbd9b9b9b6c8c8c6c8c6b6c66b9b6b66a696399b9b9d9a6b6a99939b99ba96a9a99b69696b96a9b9bb9bb9bd9b9b9b9b98c68c6c86c6b6a6c66c8b666
        1191d19d1919d919191d1dd191919d91919119d91d9191d91dd919191d9191d91d9d91d9d9d9999d9d99d9d99d9d939b9c8c6f686c6f66b6b6b6b8c66b66c6ba696db9b9b68c686c8c6f6f6cdbd9bb99bb6b6b96b6c6c6db9b9b66c6c6c6c68c66c6c6c6bb9bdb9b6c686cc6c686b6b6a66b6b696a69b99b9a6969a969a69b9a696b9696b69a9a69a969b9b9b9b9b9b9b9b9b9bb68c66f6c6c6c66b6c6c686a6
        1d1d91d191d111d1d1d19191d1dd11d1d1d91d19d91d1d1d9191d19d191dd91d91d1d9d99d9d939d9d9d9d9d9b99d9b9bb6c68ccc6c6c8c6b6b6b66cc6b6b6969a9b9db9b6c6f6c8c6f686c669bd9dbd9bdb9bdb6b6b6b9bdbdb6c6c6c6c6c66c6c668c66db9b9bd66c6c6c8ccc6b6b6b6b6a6b6b9b69b99b9b9a6969a9b69b99b99a9a969a969b969a8b9b9b9b9b9bb9bb9b666c66c8668c686a66b6b68c6c6
        1911d191d1919d1919191d1d91919d919191d9d9d9d999d91d19191d91d91d91d9191d9d9d9d9d9d9d9d99399d939b9bd9b6c6c6cc8c8c6c6c6c6bb686c6a68b66bb9b9bdc8c6c8c6f6c6c8cc6b9b79bd9b9b9b9c6b6bdb9b99b66c6c686c6c6c66cc68c6b9b9b9bb6b6c8c6c686c6b6b6b6b6b6a69a69b999b99b9a9699b99b99b96969a969b69a68666b9b9bb9bb9b9b9b9bc86c86c8c68c6c6c66a66c68c6
        d1d911d191d1d191d1d1d911d1d1d191dd1911d9d9d9b9b9d91d9dd91d9191d91d9d9d9d9d9d9d9dd9d9399d9d999bd9bb9b8c6f68c6f66c6b6b6b6c6c6b6c68b8c6dbd9b66c8c6f66c8c6f686cb9b9b9b9bdb9db9bb9b9b9bb9c6c68c6c686c6c686c8c6db9bdb9b9c6c6c6f6c6c66c6b6b6b6b6b69b9b9b99b9696b9b6a9b9b99b9b9b969a99668c8cb6bb9b6d9b9b9b9bb66c86c86c6c6c8686c66b66c686
        1d119191dd9191d1919d119d919191d19191d91d19b9d98b6b191d1d91ddd91d91d19d919d9d9d9199d99d9939d9d9bb9db6c6c6c6f66c6c66c66c68c6c6b6c8c68db9b9b8c6f6c6c86cc68c6b66cdb9bdb9b9bdb9b9b9bdb9bd6c6c6c6c6c6c68c6c86c6b9b9d9b9b666c8c68c66b6b6a66a66b669a99b9b9b9b9a9698b66699b9b99b96b96b88c66c686868b6b9b9b9bb966c68c6c6c68c6c6c66c86a66c6c
        9191d1d1911d1d91d91d9d11d191d9191ddd919d9d9d9bb666a919d919d91d9dd9d919dd9d99d9d9dd9d993999b9db9db96c8f68f66c8c66cb6b68c6b86b6b6c6c879bdb9bc68c6f6cc6f6c6fb6c6b9b9b9bd79b9bdb9bd9bd9b6c66c86c6c66c6c8c6c6b9bdb9b7b9cb6c6c6c6f6b6a6b6b6b66a6c96a999b99b99b6c866a6a9b99a99b99a686c6c86c6c6c689b9bb9b9b9b8686c6868c6c68c6c86c6c6b68c
        11d19191d1919119db9d191919d1d1dd9191dd1d19b9b96ba966b91d1d9d9b9d91d9d9d9d939d9dd9d9d9399399d9b9b9b8c66c6c8c6f6c666a6cc8dbdb6b6b68c6bd9b9b78c6f68c6f68c6c68c66db9bdb9b9bdb9b9b9b9b9bb66c66c86c68c6c66c6c6db9b9b9b9b66c68cc6c66c66b6b6b6a66c66b99b99a99a9986c8b6b686b99b998c86c6868c6868c68c6b9b9b9b98c6cc68c6c6c68c686c6c686c6c66
        191d1d1d91dd19d999d9b1ddd1919d91d1d91919d99d9d9666a6b669b9d9b6a9191dd9d9d99d9d9d19dd9d9d9d999bb9b6c6f68c6c6c68c6bc6b66c9b9b9b6b6c66db9bd6b68c6c6c68c6c8c8c6fd9bd9b9db9d9b9bd9bdb9b9b6c6c86c686c66c6c86c9b9b9bdb9bdd66c686f68c6b66b66b66b66a66b9b9b9b99b8c86c6b6b6c86b98c686c86c6c68c6c686c66b9b6b9b9b68686c6868c66c6c6666c86b6b6
        1d19191d19191d93b9b9969d91dd1919d91d91d9b9b9b9b9a696a6a69b9b999d9d9d9d9d9d9d9dd9dd9d9dd9993939bd9c86c8c6f6c8c6c66b66b8b9b9bd9c6b6cb9b9b6b8c6c8c6f6c6f6c6c6c66b9bb9b9bdb9bd9bb9b9bdb66c68c68c6c6c6866c8c79b9b979b9b9b6c6c86c86c6a68c6a66a6c6b6869b999b9886c8666b6b6868868c6c686c8686c686c68c89b9b9bb9b9c6c68c6c66c86c68c6c66c668b
        91d1d191d1d1d9d99d9bda6619191d1d9191d9d9d9b9d9b99a6b696b69d9b6a61d19199d9d993919d91919d93999b9b9b8c86c6c68c6f68c6c6b8c9bdb9b9b6b68b9bd6c686f6c6c8c6c68cc6f6c6cd9b9b79b9b9bb9db9b9b9b86c6c8c6c6c6c6c6c68b9bdb9bdb9bb6b6c6c86c66c6b6666b66b66a6b886b9a88c6c6c6b6a666b6c6c68686c686c6c68c68c666b9b9b96b9b6b686c68c68c68c6686a686a66
        1d919d191919d9b9b9b996b6a19d91919d99dd9d9b9d9b9d6b696a69a69b9b96d9d9dd9d99399d9d9d9dd9d99d9d9b9b6c6cc6f6c8c68c6c6b6c66b9b9b9b6b6b8db9b68c6c68cc6c6f68c6f68c8d88b7d6c6dbb9b9b9b9bd9b6c8c86c6c6686c6c68c79b9b9b9b9b9b9c666c6c6c66c6cc6c6a6b6a66c6c88866c686866a66bb8b68c6c6c6c86c68c686c6686cb9b9b9b9b9b668c686c6c66c66c6c66c6c66a
        91d1d91dd1919b9d9b9b9a696b191d9dd9d99d9b99b9b9b996a6b698b6b966a661919dd9d99dd9dd19d9d9d9d9b9bb9d8c6c6c86c6f6c6c86c68cb9bdb9bb6b6b66db9c86f68c6c6f68c6f66c68c7d8b9b86c9b9b97b9bd9bb6c686c86f68c6c686c66b9bdb9b9bb9b9b6b6c6c68c6b6686c86b66a66b686c6cc68c6c6c86b666b6866868c686c6c686c66b6c86b9b6b9b9b69b866c6c686c86c8686c6866a66
        d9d91d1919d9b9d9b9d966b6a69d9dd9d9d9d9b9b9d99d9b9a966a696a6a96b9a9d9d9d9dd9d9d99d9dd9d9d99d9b9bb68c8c6c8c66c8c6c8c8c6bb9b9b9b66b6b6b9c8c68c6f68c68c686c8c8c69b6b6b6c86b66b6bd9b79b66c6c6f68c6c66c6c6c6bb9b9b9b96bb6b66c668c66c6a6c66c66a66b86c6c6868c668c86c6b6b66a6c6c6c68c68686c68c6b9b9b9b9b9b6b9b98b6c686c686c686c6c86c6c68c
        6b91191d91b9d9b99b9ba69696a6d99d9d9d9b9d9b9b9b99b66a96b6b969a9666b6dd91d9d9d9ddd9d9d919939b9bd96c86c6f6c6f686f686c686b9b9bd76b6b6c66c6c6f6c68c6c8c6f6c86c66bd9b9bb66c86cc6c6bb9b66c6c68c6c6c68c686c66b86b9b9bdbb69b6b6a6b6c8c666c6c68c66b66b68c68c6c68c66c6866b6a6666a686c66c6c6c68b9b96b9b6b9b9b9b9b9b6866c686c686c6c66c6868666
        b6b9d191d99d9b9b99b9b6a6a696a9d99d99b9d9b99b99b9b696b69a66a69bb9a96a9d9d9d9d9d99d9a9b9d99b9b9bb6c6c6c686c6c8c6c6f6c6c9b9b9b9c6b6b6b6b66c68c8c6f66c68c6cc6f6db9b6b6c68c68c86c9b9b6c668c66c686c68c6c68b6d6c9bb9b9b6c66866b86c686c66a66c6c6b6a6c6686c686c68c68c66a66a6a666c686868686c9b6b9b9b9b96b96b9b6b9bb6b866c68c6868c686c6c6c8
        69869b19d9b9b99d9bdb996b69a696d9d9d9d9b99b9d9b9b9a69a6969a96d9b96b6969b919dd99d9b96b6b9b99b9b9b66c8c6c8c68c6c68c68c6b7db9b9b66a66a6c6c6c86c6c68c8c6c6f68c66b9bd668c6c6c68c6866bb66cc66c66c6c8c6c66c6db9b6b9b9b9b66c6bc66b68c6c86b86c68686b666b8c686c68c686c6c66b6666b6c68c6c6c6c6b69b9b6b96b9b9a9b9b9b969b96b66c66c6c6686c666a66
        a6b6a6b9b9b99b9bb9b9bb69a66b6b9b99db9b9b9d9b9b99b9a696a6b66db9bb9b6a9a69b999b9b99b9969a9a9b9b9db66c68c6f6c6c8c6c6c6c9b9b9bd9c6b6b6b6b6b6c6c6c8c6c6f686c6c86cb96cc68c8c8c6c8cc686c668c66c86c6c686c86b9b69b9b9b9b9b6b8b9b66b686c6c6c686c6c86a6a666c6c86c66c6868c66a6a66a6666c686c6b9b9b69b9b9b96b9b96b96b9a6bb6b6868686c6c686c8686
        b69a9666a99bd9b9b9b9b9c669a96a66ba99b99b9b99b9d9b696b96969b9b9b9b969696b6ba9b99b99ba96696b9bdb9bdb9c6c668c86c6f68c6bb9b9b9bb6c6b6b66b6b68c8c6c6c6c6c8c6c6c6876c68c686c6c6c668c6c6a6c6c66c6686cc86c68b9cb9b9b9b9b9b96b6b6a6c6c86866b8c686c6666b6c686c686c86c666a6666b668b8686c6869b969b9b69a9b9b96b9a9b9b9666b6a6c6c668686c686c6c
        6b666b9a99b9b9b9b9b9bb6a866b696b969b9b99b9b99b9b9b9a6a9a6b9b9b9b9b6a9a9696969b9b9b996b9a9b9b9b9b9b9bb6bc66cc6c68c66b9b9bdb9b66b66a6b6b66c6c6f68c6c86c6c8c6c6d86c68c6f68c6f6c6c866c668c8c6c6c86c6c8bb666b9bb9c6b6b9bb9d9a66686c6c6c666c6c68b6a6b68c686c686c68c666b6a68b66b86c686b9b6b9b69b96b9a96b9b969a9bb9866686686c6c6c66c6866
        a96b9869b99b8b9bdb9b986b6b69a696a6999b9b99b9b9b999b96969b9b9b9bb9b96b69ab9a6b9b9b9b9a96b69b9b9b9b9b9b9b9b86c68c6c6d9b9b9b9b9b66a6b66a6b6686c68c6f66c6f686f6bb6c8c6f66c6c68c6f6c6c66c66c6886c686f6b99bb9b9b6b686c6d9b9b69b6c6c686c68b86c68b666b6b66c6c686c6866c6a666b66a66b668bb9b9b9a9b9a9b969b9a96b9a969b98a66a6c6c686866a68b86
        66a96b9a9b9d9b9b9b9cb6b66a6a69a69b9b9d99b99b999b9a96b6b69b9bb9b9b6b969a9669b9a999b996b96b9bb9b9b9bb9b9b6b6c6f66c6bb9bb9b9b9bb6b6b6b6b66a6c66c6c66c6c86c6c689b686c66c86c8c686c6866c6a6c86c6c6c8c669bb9bb9b9868c66c9b9c9bb6b868c6c66c68686b66a6668686868c66c6c6666a6b6a66b66a66896b69b96b96b9a9b69b69a96b9a6b6686686866c66c686686c
        9b66a98699b9b9b9b9c868c6b66b66b69a9b9b9b9b99bd9b996b969a9bb9b9bb6b6a96969a96996b99b9b9a9b9b9b9bb9b96b966c68c6c86c9b9b9b9b9b9b6b66a66b6a6b6c68c6c8db6c68c6c6b6c6c8c86c86c6c6c86c6c6c686c6c686866c6c9b9b9b9c8c66c86c9b9b6666c6c6866a66c6c66a66a6a6c6c6c66c8666b8b666666b66a66b6bb69a96b9b9b969b69a9b9b69b696686a6c66c686a6866c6c68
        b69a969b6a9bb9bb9b86c68c6b6b6b6a669b99b99b9b9b99b9a96a9b9b9b9b98b9b6bb6b96b9a69a9b99a969bb9b9b9b96c66cc86c6868c66b9b9b9bb9b9b6b6b6b6a66b6b8c68c6b9668c6c8c6b66c86c6c6c6c6f68c6c66c66c6686c6c6c86c666b9b6b866c86c8686b9a6a68686c6c6866c68b6666686868668666c6a666a6a6a66a96b66a99a96b9b69a69a69b96b969b9b9b6a66686a66a6686c6a686c6
        9a696a69a9b9b9b9b86c8c6866b6b6b6b6a69b9a99b99b9b99b969b9b9b9b9c666b69a96a96969b969a969a9b9b6b9b9c8c6c86c68c6c6c8b9bb9bb9b9bb9c96c66b6b66b666c66b9b6c68c6c6b9c68c68c6c8c686c6c68c66c68c6c86c66c6c86bd9b666c686c866c6c96b66b6c6c6866c6a6868b6a6b6c6c6c6c6c8666b66666b6966b96b996b69b9a9b69b9b9b6b96b9a96b9a668a666868686c66866c668
        b69a69b69b9b9b9b9c686c6c8b6a66b698b6a66b6d9b99b9b96b9a9b9b9bb98c8b6a66b6b9a9a96b9a96b96b9b9b9b96c68686c68c68c6c67b9b9b9b9b9b98c66a666b6a66b86c66bb68c6c686b9c6c6c6c686c6c6868c66c68b68c6c66c6868c6d686b6c68c686c868c6b9b66a6686c6c686c6c666b6686868686866c6a6a6a6a66a69a9a9b6b9b9a96969a96b69a9a9a96b9a966a668a66a66c66a66a686a6
        6969b69a9b9bb9b9b9b6c686c666b66a66b66b6a6b9b9b99b9b9b9b6b9b9b986c66b9b6b669b969a969b9686b69b9b6c86c6c68c68c66c6c9b9b9b9b9b97b66c66ba66b6b6b6c6c66b6c686cc6b9c686686f6c6c8c6c6c6c66c6c6686c66c6c66d86c68c86c6c6c6c6c68b96a666c6c68686c666a6a66a6b6c6a6c6a68666666666a9b696969a969696bb9a969b9b96969b9696b66668666866a66868668b686
        ba969a69b9b9b9bb9b9c86c86c6b6a66b6b6b6b6b699a9a68b9a9b9b9bb9b6cb68686b69ab69a9b969b9a6c6bb6b9b866c868c686c6c8686b9b9b9b79bb9b68c8c66b66a66a66b6c66c68c6c6b9b68c6c6c686c6c6c86c66c66a68c6c66c668cb66c6c6686868686868666b66b6868686c6c66a6666a666a6668666866a6a6a6a69696b9a9bb96bb9a969a96b9a696b9a69a9a998a68b6a66a6686a66a668668
        96b6b969bb9b9b9b9bb66c6c686b69a6b6a66a696a6a666c686b6b9b9b9b989b9b8c68b669a6969b9a96686868b9b86c86c6c6c6c686c6cb9b9b6b9b9b9b98c6688c6a66b66b6666c86c68c687b66c66c66b6c68686c686c6a66866c6bb68b6b66c6868c6c6c6c6c6c6c8c6d68b6b6c6c6898668b6a66a666a6c6a6c6c6666696b9a9a96b966b99a96a6866b969b6b969b696b6b66cc66686686a66686c6ccc6
        b969a9b9b9b9b9b9b99b6686c686a66b669a666a6666b6b86c6b69b9b9b66bb9b66c68b6a66cbb8666868c6bb69b6686c68686868c6c6c6b9b6d9b9b9b9bb68c6c6666b66a66a6a66c68c66c6b9c66c66c6866c6c6c6c6c666c6c6c66686a69b6686c6c686c68686868666a98b6868686a6b6a66866666b6a66c66866868a68b9a96b969b69cc66686666a668a66a66a66a669a966cf686a66a6668b6668cf66
        6b9a969b9b6b9bb9bbb6c6c86c686b66a666b66b6ba68686c686a9b69b9b89b98c86c66b66b6696a86c6c689b9b98c6c68c6c6c6c686866b9b9b9b9b6b9b66c686c6a66a668c6b6a66c68c686b9b6c6c66c6c66b66c68c68c6866c68c6a69b686c6c686c6868c6c6c6c6c68b666a6c6b686866a66b6a6a6666bf6cc6a66666b969b96b9a9a6fc6a6b6a6666a666666a6666a6866a6cc66a666668b686a66cc6c
        9a969bb9b9b9b96b9996c86c68c66b6b6b6b6a66a666c6c686c68b9bb9b9b9bb666868c6b66a6a666c686c6b9b6b9c686c6868c686c6c86b9b9b9b6d9b9b9868c6866c6b6c686666c686c68c6bb6b668c68c6c86c66c6686c6c8686c686b9c6c68686c686c666c6866868666a66668686b66a668b666666a666cc6f668a6a69a9a69a96986ccf666666a6a6666a6a6668a6666a668ffc666a6a668c668ccffcc
        6969a9b9b9b9bb9bbb6c66c686c6c6b698b6b6b66b6b686c686c6b9b9b69bb99b8c6c66b6b6b6b6b686c68d9b9b9b9bb686c6c68c686c6b9b69b69b9b9b9b8c66c6c66a666c6c6a66a6c686c69b96bb66a6686c68b66c8c6866c6c686c6d8686c6c686c6c68c686c6c6c6c666a6a6a66a686686b689a6c868acff6e8666c9b6969b66ba666cfc66a6a666668a6666686666a66686cccf6b98666a6c6acf6cfcf
        9b9b9b9b6b9b9b9b99b68686c68686b6a69896a686a66b686c686b96b9b9b96b96868686b6a966b6a6c68b9b69b9b9b9b9b686c66c6c68b9b9b9b9b9b6b9b66c8686c666a68686c66666c6c6b9b6b69b666c6c686c68666c6c8686c6c6986c68686a6c6866c66c66868668a666666686686a66a668b86fc666cfcffe6b6c69a9b69f9966a6fefc668666a66666a686ac6a666a6666cf7c66986a66f66fcfef7f
        96b9b9b9b9b9b9b9b69c8c6c68c6c66a6b6b6a66b666a6b6a66c69b9b9b69b9bb6c6c6c6a966a6966b866b9b9a9b6b9b9b6b6868686866b69b9bb9b69b9b68686c6c66a66c6c6c6a6ca66866b9b99b69a6b666c6c68c6c8686c6c6866b8c686c6c668686a686a686a6c6a668a6a68b6a6c96c6686666afc66cfcf7fc6b6cc966a6cfc8f66ccf7f666a6668a6a666a66c6666666a6fcffc6b6a666cfc6fef7ffc
        b9b9b6b9b9b69b69b9b86686c668686696a6669a686a666668b6b9bb969a9b69b986c68666a666a6b668a96b9b69b96b969a6c6c6c6c6c9bb9b96b9b9b9b9c6c68686a66c68686668686c6cb9b6bb9b866a6a6686866c68c6c66b86a6666c6c6868c66a6686686c6666866c6666866866868686a18b8cff66cf7ff7fc9ccf6b666fcccc66ccffc6a666a6666668c666cc68a6a666cf7fc6986668cfccfcff7ff
        9b9b9b9b9b9bb9b9bb66c6c686c6c6a6a66b6a66b6666a6a6b9b9a96b9b6b9b9b9c686a6a6b6a66b6866bb9b69b9b9b9a9b686868686c669b69b9b9b9b69c686c6c666c668b6a6c6a6c66c69b6996b66c8666a6c6c6c8666868b6666a6a66a66a666a668c6c6c668a6a6c686a6a6a66a66a66a666666cf7c6cff7fcfc6f7f666a6cffcf6e4747f6666666a66a6cf66cfc6666668ccfcfec666a66cf7fcf7fcf7
        b9b69b9b69b9b9b9b98b66b86c6868666b66a96b6a6a666686b69b69b9b96b9a69b66866666b6866a6a8969b9b9a9a96b9b66c6c6c6c68b69bb9b69b69b686c6868c6a66a6666c66668c68686a6c98a686c866c666866c8c6c66bb9c666a66686c686c8666866a66686686a666666866866c666a68afcffcf6fcfcf7f6efc6a668cf7fc47eeee4c66a6a666666cc66cfcc66a6666c6fcff66666afcfcf7f7fcf
        9b9b9bb9b9a96b9a9b9b9b9b8686c6c868b6686666668c6a686b96db9a9a9b69b9b6a6c86a666a668666b9b9a96b96b9b96868668668666c89b69b9b9b98b86c6c66666a66a6a68a6b668b6c6686a668c66c686a6a6c68666686b66a6b666a6b686c6c6c6a6a6686a6f66c6686a66a66a666a66866c6f7ff7fef7fcfcf7fcc666cfcfc7e4e74eee669696c6a6cffc6fcf66666a6cfef7f7ccbbecf7f7ffcfefc
        79b9b969b9b9b9b69b69b969b6c6686c666a66a6a6a66686c66a9a69696b969b9a998666c66a66b86b86bb696b9b69b96b8b86c6c6c6c866c9b9b9a9b6b68668668c6a6686666b66b9a668686c6c68c66c686c68666b86c6a6c686a666a6666866ac6f66866686a666cc6fc66a6866a668a6686c6afccfcfccf7ff7f7fcf7f66acff7fe7edb7e7fb6a96ac9668ccf6ec7f6a6666cfcffcffce47b7fffcf7cf7f
        9b6b9bb9a96b9b9b9b9b9a9b69b86c66a6a66686666a6a666a66b66abb9b9a9b698c68c68666b666a66b69a6b969b9a9b9666c6866866a66b69b69b69b6a6c6c6c66866a6c6b9b9b966c6c6c6868666c686a6686c6a666a68686a666a66a6a6b866fcf6c66a666686cfcfcc66666a6686666a66c6ccf7f7ff7ffcffcfcf7fc666f7ffffddb9bdce6696a6f69ccf7fc7ffc666a66ccf7f7fcf94bbdf7ef7f7ffc
        79b9b9b96b9b69a96b96b9b9bb66a6868666a66a8686668c686866b68696b96b9a66666a6a686a6666a68666a9a9a96b9b6a66a6a66a6b9b9b9a9b9b9a66686686a6c6666a6b9a96b6a666a66a6c6c866a668c6a686b68666c6668686666b666a66cfec66868a68b6cfcfcf68a666866a6a666cfbcf7fff74e7f7f7f7f6fcfc66fcfcef9ddb9b7fc6b9cfcc6ccffcf7fcf666666cf7ffe7efd9b9be47eef7cfc
        6b9b69b69bb9b96b9b9b96b696a6686c6b666a666c6c6c666a66a66668b69a66686c8a66686b66a6a6666a686b696b9b698686686866b96b69a696b9696a66a6c6866a8c666b96b9b686a6686866866a686c66666c66a66c686a66a66a6a66a66ccfefc66cc666686fcf7fc6666a66a66666b9fccf7fcf7e4e4eefcffcf7f7f6ccfef7fdd9b79cf76c8f7fc6f6f7f7f7f7fb6a6ccffcfdbfcdd97d7b47ef7f7f
        9b9b9b9b866b6b9b96b9a9b9a66866a6686a666a686686a6866c686a666a698a6666668686b66866686a6686666b9b69b98b6a666a689b9b9a96a96a9b66b686686c66668a69a9b96a668686c6c6a6866c668b6a68666a686a6686686666966a6cfcf7f666cc6a66ccfcffec66866a66a69a96cfcffcf74e47e47eef7fcfcfc6cfcfffc7dd9bb7fc6fcfcff6ccffcf7fcfc6666cc77e77b77d9bbb9bbb7c7e7f
        9b96b9a66a686a96b9a96b986866a6686a666a666a6a66866a6866a686a68966a6a68b6a6b98b6a6866686b6a6a6969a9868668c666b6b6969b66866b9a66a66a66868a666b969b6a6686c6a668666c6868668666a6a666a6686a6c6a6a6a6666cf7fcfe68cf668b8f7fcf7f66a686669cc66cfef7f7ffb4e47be7fcf7e7f7fc7ef7f7f19db9bcfe6fe7f7c7f77777e77777e7777efffcfce7bb9b77cc777777
        b9b9b666a66669b9a96b96b6b6a6686c66868686866686a66866a66668666c6b66866866b96a6966a6a66a686669a9b69c66a666a68b99a9a6986c6a969b66986c6a6668c69a9b96686a666686a6866a66a6a6a666866a6666a6666666666a6acffcf7fc66fc6666cffcf7fc666cc69a6fc66cfcfcff7f797b9b7df7e4eeefcc7befffcdd9bb977e7777777777e7e777e7e77e7ef7c7c777c7c777e7777e7c7e
        6b9b9b9a668a6a6b669b9a99b966c666a66a66a66a66a666a66a6686a66a68969a6b6a696a966a66666a66866a9a969a66a66868666b6b969b6b6668b9a9b6b668668b866a69b6a66a6686a66666a6866c666668a66a666a66686a86a6a66696cf7fcf7f6ccfe6a6fef7ffcfc66cf966ccf6cfef7f7fcfddddb9bbff7b7df7fc7d65e77bddb9b7e7e7e7ee7e7e77e7e77e7e77ccfef7f7e77e77c77c7e77e77c
        9b6986896b6666866a6b69b69a9b68a66866a666668666a6686686a668666a6a969669ab96b666a6a66666a666b69a6966686a66a689b69a9b96a9b696969a98b6a6666a669b98668666a668a6866c6a66868a666b668666a66a6666866a6a68fcff7fcfccf7f666f6f7fcf7f66fcf6afcfef6cffcfcfcdd9b9b9b7c7db9ec7f7cf7be7d9b97db777e7e77c7e7c77c7c777c7ef7c777777e77f7e7e77c7f7fff
        9b9c6c6866a686a66699a96b96b666686a66686a86a6a6866a66a666a66a6666b9a9a96969a6a69669a6a666a696b9b98a66a66666a69a96b6a9969a9ab9a66686686a668b9a66a66a6666a666a6866686a6668b66b66a6b686668a66a66666ccf7ffcf7f7ffc68bc6efcf7fc6bcfc66cf7fcf7f7f774fd9ddbdb777bd9b7774747dbb7dddbb6ffe77e7c7e77c7e77e7e7c77c7ff7f7ec7c7e777c7e77effcfe
        6986866a6866a668b9a69b9a969a98b6666a66666666666a6666668666a668a696b96b9a6969866a666666a6686a669a666a66a6a69896b9696b6b96b96b66a66a66a68666b96666a66a6866a666a6a66a66c6689a96a6666a6a6666666a66a6ffcf7fcfcfcf7c6cfef7f7ffc6fcfc6cfcffefcfff4ed77dd9b96b4b7ddbe74be749db7e79bcfecf7e777e7c77e7c77c7c7ef7f777e777e7f77c7e77c7fffcfc
        76c66a66c668668b89b96b69a9b9686a6866a6a6a6a68a6686a6a6a6a666a669a96a66969a96a666a6a6a666a6666a666a66666666b6b96b9a99a9a9696966686686666a68686a686666a666686a66686666c86a69b696a686666a6a6a6669fcf7ffcf7f7f7ffc6cf7f7ffcfe6fef66cf7fcf7c7777db7b7cfffef74bd7e7e74eeedb947c77fcf777e7c77c7e77f7e7e77e7fc7ce7c7f7c77e7e7c7f7efcff7f
        666a68686a66a6698b69a9b96b698b668b86666668666666a6666666668666866a966a6a96b666a9666666a6698a666a668686a689a96b9a696b9696a9a6a86a6a6a6866a66a666a66a666a6a6666a66a6a6f669b69a69866a66866666c86a6fefcf7fcfcf6cf7c6fccf7feffef6fefc7f77777477b77e77cf7fc7e747474b4e47e49b77e7e7777e7c7e7f77f7e77c7f7ff7f7e7f77e7e7f77f7e77e7fff7fff
        6a6866c66686686b69b9696a969a6686666a6a686a6a66a66686a686a66a66a666986666a969a66689a66696a6666a6666a66a96a6969a969a96b6b96b66666666666a6666666a666a66866666a6666a666ccc9a969b66a6666a66a686cf66cffcf7ff7f7fcf7fcfef7f7f7f7fc77777747747e77e7e77e7ef77e7e7d47d7474e47eb9e77e77ec7e77e777e77e7c7f77f7c77e777ec7f777e7cff7f7ffcfffcf
        6666c66a68b6a6a66a96a9b96b966a6a6a66666a66666a6686a666a66666a666a66a6a6696a9866a6666a6a666a66666a669896969a9696b96b969a96986a6a6a66a666a6a6a666a6686a6a6a6686a6666afcf96b9a98666a6666a66a6fc66cf7fcf7eeff7fccf7fc7f7fcf7e77e7e7477e77e774777e77e77e77ecf7c74b7bd7bd9b77c7e7c77e7c7f7ec7f7c7f77fec7f7f7f7f77f7ec7f7fcfffffffcfcfc
        c6c86a6666866666b969b696b6b98666666a68666a66a666a666a666a6a6668666a6666a69696a666a6666666666a668666a66a6a96b6a96a96a9696a98666666866866866666a666666666666a6666a666cfc696b6698a666a6666668cfc6feff7e4e74fcf7fcfcfcf7c7e77e77e77e777e77e77e7e77e7777ecf7fef77e7edb9bb9b7e7c77e7f7e77e77e7e777ef7f77e7e7c7e7f77c7f7fffffcfcff7ffff
        7f666686a66a689a96a969a969a66a66a6666a6a6666666a66986666666686a6a66698666a6a6666666a6a6a6a9666a66a666666669a969a9696b6a966a6a66a66a66a66a68a6666a6a6a66a6666a6666acf7fb696986666a666a66a6ccfccfc7ffd74b9f7cfcf77777f7e7c77e77e77e7e7e77e7ec7e77e7ee7f7f777e7e77ddb9bd6e7c7e7f777c7f7f7c7f7fef7c7ef7c7f7e7f7e7f77ecffcffff7fffcff
        666a66a668666a69696b9a69a9696666998a666666a66a66986a66a6a66a6666666a96b666666a6a6a666696666a6666666a6a66a6696b696a969a969a6666666666a666666666a6666666666a666a6866cffc69a9a6a6a6666866666cf7f6fffcfd9db7cfc7777e7e747e77e77e77e77e777e7ef77e7e77e7fc7f7f7e7e7e7c7bcc7e7c77f77ec7f77e7e7f7e7f7c7f77c7f7c7f7c7f7ec7ffff7ffffffff7f
        66c66866a6a6669a9a96a9696b6a9a68a66666a6666a66968966666666666a66a66669a9a66a66666666a6869a666a6a6a66666669a69a9696b6969a6666a6a6a6a666a6a6a6a6668a66a6a6666a666a66cf7fc6966666686a6c6a6a6cffcf7f7fcddb9b7e7e7e77e77777e77e77c77e77e7eec7e7e7f7fefc7fcf7e7c77c7e7e7fff77e7e7e7c7e7e7c7f77fcf7c7f7e7f77e7f7c7f7c7f7ff7fffcffcf7fff
        6668b6686666a6b696b969a69a96966666a6a666a6666a66a6a6a9898a66666666a6b6969666666a66a66698666a966666666a6a669a966a9a9a9a696a666666666666666666666a66666666a6666a6668cffcf9b69a66ac668c66668fc7fcfcfe7e7cf7ec7f77e7747ee77e7e7e7e77e7ec7f77c77c7f7c7fc7f777e7e7e77c7fc7f7c7f7c7f7e7f7f7e7fc7f77f77c7f7cf7f7c7f7ef7c7ffffffff7ffffff
        6a6668a66a66669a696a969a6969a6a6a696668666a66666666666a6666a6a6a66666a66a9a66a6666666a66a66666a666a666669a6969a96696696a666a66a686a6a66a66a66a6666a6a68666a66666a6fef7f69a66a6cf66cfc66a6ccff7f77777777e7f7e7e747e777e77e777e7e7ec7f77e77e7fcefcf7f77e7e7c7f7c7e77e77e7f77e77e7f77e7f7f7f7c7ecef7c7e7f7c7f7c77f7ffffcfcffffffcfc
        666a666666a6a669b6969a6969a6966666866a66a666a6a6a96a6666a98666666a66669a96666666a66a666666a66666a666a66a6696a6969a69a69966666666a66666666666666a666666a6a666a6666cf7ffcc699698cf66cfc666cf7777747ee7e7fe7e77777e77e7e7e77e7e777f7f77e7c7e7fc7f77e77e7c7c77e77e7f7f7c7f77ec7f7f77ce7f7fcf7c7f7f77f7f7f7c7f7ef7f7fcfcfffff7ffcffff
        6666a9a6a66666a69a9a6969a696a69a66a666666666666968666a96666a666a666a6a6666a6a6a6666666a6a666a6a66666666966a696a9696696a6a6a6a6666666a6a6a66a6a666a66a666666666a6ccffcf7696a666fcc6fcf69677e7e7e7e7f7fe7777e7e7e7e77e777e7cf7f7fc77e7c77eff77e7f77c7c7e77f77f7c77e77f77ec7f7c7ec7f7fcf7f7cef7c7f7c7f7c7f7cf7c7fcfffffcf7ffffff7ff
        cc698966666a669a69696b6b96a966666666a66a9a6a66a666a9666a66666a6696666666666666666a69a66666696666989a6a686666a966a69a9696966666a66a6666666666666666666666a6a6a6666cf7fcfc6b96acfcfcc77e7e7477747ef7f7777e7e77e7777e77e7e7f7c7fc7e7c7e7ef7c7ffc77e7e7e7f7e7c7e7e7f7c7e7f7f77e7f7f77f7f7fc7f77f7e7f7f7cf7cf7e7f7f7ef7fffffffcfcffff
        ffffc69a6a6689696a96a986c9698a6a6a66666666666666a6666a666a6696668a66a66a6a66989a6666666a698a666a66666696a98666969a6989a98989a66666a66a66a68a66a6a6a6a6a6666666a6ccffcf76c9698cf7777e7747e77e7ef7c77e7e7e77e77ee7e7e7c7cf7fef77e7f7e7f7ff7fc77f7c77f777c7f7e7f7c7e7f7c7e7cf7f77efcfcfc7f7c7f7f7f7c7f7ef7ef7f7fcfcfffcf7ffffffffcf
        cfcffff66666a9a696a9696cc6a96666666a6a6a66a66a66666a6666666a66a696666966696a666666a66a666a666a666a66a66a696a96a9696a9669a698966a6666666666c66666666666666a6a66c66fc7fffcf9a66e77e7e77e777e7eef777e77e777e7e7e77e77c7ef7fec77e7f7ef7f7f7fc7e7f7e7f77ec7f77c7c77f7f77c7f7f77e7cf7f7f7f7f7f7f7c7f7cf7cf77f7c7fcf7ffcffffffcfcf7ffff
        ffffcfcf66a69696a9696a6cc696a96a666666696666666a666986a66a66666686a66a66a6666a66a966666989666669898966696866696a66966b66986b6a666a6a6a6a6af6a66a666a6c6a66c666c6bfff7fcfc67b777e777e77e7e777777e7e7e7e7e77e77c77c7ef7f7f77f77c7f7f7fcfc7f7f777c77e7c7e7c7e7f7e7e7cef7e7c7f7f7f7fcf7f7c7ec7f7f7c7f7f7fc7f7f7f7f7ff7ff7ffffffffcf7
        ff7fffff6a666a69696a966cc6b696966a698986a66a6a666a666c696666a6a696666666666a6666666a698666a66a66669a69a66a96a9696a9a96b6a9696666696666666ccc66666a666c666cf69cfc6c7ffc77e77e7e77e7e7e77e77e7e7e77e777e77e77fe7e7ef7f7fc7e77e7fef7fc7f7e77e7c7c7f7c7f7f7e7f77f7f7f777f7f7f7cef7f7f7f7f7f7f7f7ef7f7ce7cf7f7f7ffcfffffcff7fcf7fffff
        ffffcfcfc669a96a98966a6ccc698a6a666a66a66666696666a6ac68a6a66966a66a989a66666c6a66666a6a6666696a6a69666666696a669666696966a69a9a6866a9666cfc66a66c6c6cf69cfc6cfc6ffc77e77e7777e77e777e77e7e77e7e77e7e7e7c7fcf7f7f7f7f77e7c7fc7f7f7fc7c7f77c7e7c7e7f777c7f7c7c7c7c7fc7c7e7f7f7fcfec7cec7f7cef7cf7f7fc7f7cf7ffcffcf7ffcfffffffcf7f
        cffffffffe6696966a6a96ccfc6c9c6698966666ac6a686a6cc6ccc69669866666666a666a96ac696a66666966a986669666a9a969a6969a6b9a98a9a969666669a6666acfcf6666ac6fcfc6cfcf6cfcc777ee7e77e7e77e77e7e7e77e7e777c7e7c77c7fef7f7fc7fce7e7c7f7ff7fc7f77e777e7f7f77c7f7ece7f7e7f7f7f7f7ef7f7fcfcfcf7f7f7f7f7f7f7f7cecf7f7f7f7fcffcfffffcffcf7fffffff
        fcf7ff7ffc6b6a6c6cc669fc7feccfb666a66a66ccc69c66ccc6c7c666c6a66a6a666666666a6cc6666a96a666666a66a9666666a696a66966666966696a69a668666a66cf7f66966fcfccf6ccfcfc7e77e7f7e7e77e7e77e77e777e777e7e77e777e77f7c7f7f7fc777c7e7f7f7fc7fc7e77e7f7c7e7ce7f77c7f77c7f7e7c7f7c77f7fcf7f7f7f7f7c7f7cce7f7f7f7c7f7fc7f7ffff7fcfff7fffffcf7fcf
        fffffffff76c666cccccc6ccf7cf7ccc666a66ccc7e66cc6c7f7fcc66ac6c666696a96a6989ccfc66a968666a66a669666a96a9696a969a69a96a969a6696a9669a66666cffcc689cfcf7fccf7f7e777e7fe7f777e77e7e7e7e7e7e7ee77c7e7c7f7efef7fcf7fec7f7e7ef7fef7fef77e7c7677e7f7e7f77ce7f7cf7f7c7f7f7ef7fcf7f7fcf7f7c7f7f7f7f7f7cc7f7f7fc7fceffcffffff7fff7ffffffff7
        ff7ffcffcfccec6cccf7c7c7ec7cc7e7cc6cccc7eb16bcd6eccce7fe6cccc6c6a6666666a68cc7f6666696a6696696a669669896a9666696666966a696a69666a6666a6cf7fffc6bfcf7fcf7fc777e7e7f7fc77e7e7e777e777e77e777f7e7c77e77f7f7f7f7fc77e7e7f7f7f7fc7c7e7f7e7e7c7c7c7f7ce7f77f77c7f7f7cef7cf7fcfcf7f7fcf7f7f7fcef7fc7f7f7fc7f7c7f7fffcff7fffcfffcf7ff7ff
        cfffffffff77fcfef7f7c7e77f777b7eccf7f7e77bd7b77e777777f6cf77c7c666a66a6669ccfcccc66a6669c6a68696a66a66666669a66a9a989a96696986a6666a966cfcf7f766cfcfcf7e77e7e7efcf7c7e7e77e77e77e7e7e77f7e77e77f7e7fc7fcfcef7e7f7c7c7f7fc7f7e7f7c7e7c76e7f7f77c7f7c7f7cef7e7cef7ff7ff7f7f7fcf7c7f7fce7f7cc7fcf7fc7f7fcf7fffcffffffffffcfffffffff
        7fcff7ff7f7e77c7f7fcf7f7e7e7e7e777fccf77e7b7b7e7e77e77ef7fcf777e777b7bcb686e6f7fc6986986c66c96a696969a9a96a6969666698966a66a96666a6666cfc7fcfc6b6fef7777e77e7f7f7777e777f77f7e7f777c7f77e7e77f77efcf7f7f7f7f7c77e7f7fcf77e7c7f77f7f7f7f7f77e7f7f7c7f7c7f7c7f7f7f7fcf7fcfcf7c7f7f7ce7f7cf7f7f7cf7ce7f7f7f7fcf7fcffcffcfff7ffcffcf
        fcf7fffffff77e7f7f7f7f7f77f77f7c7e77f7fc77e7e77ed7e77e77f7f7f777e7e7777777777ecc5c6c6a66cc6c6a666a66666669666a69a96a966969666a69669866cff7f7fc6cf7777e7e7e77f7f77e7e7f7e77e777e77e77777e777c77e7f7f7fcf7fc77e7f7c77f7c7ec7f7e7c7e77c7c7e7ce7f7c7c7f7c7f7c7f7fcfcf7f7fcf7f7f7f7f7f7f7fc7f7f7f7f7f7fccf7fffffffffffffff7ffffffffff
        7ffcffcffff7e777cf7fccf7fc7e77e7f7e7cf7f7e7e7e77e777e777ef7fccf77e7e7e7e7e7e77777ccc669cccccc6c6969a69a96c6b9666666989a6a69cc668986a6cccf7fcff777e7e77e777fcf777e77c7777e77e7c77e7f7e7e7c7e7e7cf7f7fc7fc77f7c77e7f7fe7f77f77f7e7f7f7f7f7f7f7c7f7f7c7f7c7f7cf7f7fcfcfcf7f7ccf7ccf7fcc7f7f7fc7f7f7f7f7fffcfcf7ffcf7fcfffffcfcf7fff
        f7ff7fffcffc7f7e77f7f7fc7ff7f7c777f77cf7c77f77e77e7e77e777cc7f7fe777e7e77e77e7e7eb7ccccf7ccf7ccff6669866cc9869a96a98989696acf966a6c66cf7fef777e7e7e7e77f7fe7e7e7e7e77ee7c7e7e7e7c777e77c7e7c7f7fecf7ff7e7e7e7f7f7cf7c77f77ec7c7f7c7e7c7c7c7f7f7e7f7f7f7f7f7fcfcf7f7f7f7fc7f7f7f7c7f7f7fcc7fccecc7f7ffffff7fffffffff7ffcfffffffcf
        cfcfffcfffff77e7f7cf7f7fc7fc7f7ef77e777e7f77fcffc777e77e7fefffccfef77e7e77e77e7e77e7f7f7f777fffcfc6a696cccc9666696698966a66cf66666cfcfcf7f7e7e7e77c77f77fcf77c777c7e77c77e7c77f77e7c7f77e7f7f7f7f7fcf77c7f77c77ef7f7ef7e7f7c7f77f7f7f7f7f7e7f7c7f7c7ec7f7cf7f7f7fcf7f7f7f7f7ce7fef7fcc7f7f7f7f7fcfcfcfcfcffcf7ffcfffffff7ffcffff
        7ff7fcff7ffff77e77e7f6f7fc7fcf7f7e7f7f7f77e7777f7fe77e7e7ff7ff7f7c7fe7e7e7e7e7e7f7e77f7c7f7ffcffcf696cccccf69a6a66a69896966ccc6a98ef6cf7777e77c7c77e77fec77c7e7c77e7f77e7f77f77e7f77e7e7f77f7fec7f7f77e7f7e7f7fcf7e777c7f7c7f7c7c7c7c7e7cf7f7c7f7cf7f7f7fefcffcf7fcf7fc7f7cf7fc7f7f7f7f7fcc7f7f7f7fffff7ffcfffffff7ffcffffff7fff
        fcfcf7ffffcffef7f7f7cecf7fc7f7f77f7c7f7ec7f7fe77f77f7f7fffffff77fcf7f7f7f7e7f7f7ef7e77e7effcffcffcf6ccccf7c666989696a6a66cfefc668cf7f77e7e7e7e77e7f7efcf7f7e77c77c777e77e7777e77e7e77c7c7fefce7f7e77e7f77e7c7fe77f7f7f7e7c7f7e7f7f7f7fcf77c7f7f7c7c7fcfcf7f7f7fcf7f7f7cf7f7f7f7f7f7f7fcf7f7fcf7f7fcf7ffffcfcfcf7ffffff7ffcffffcf
        7fcf7fcffff7f77f7c7f7f7f7f7f7f7fc7f7f7c7f7ce7cf7ecf7e7fffcffcfe777fcf7c77f7f7e7f7ff7fc7ff7ffcff7ffc7e7c7cfcc6c6c6a669698bcf77ffe6f7e7e77e7c7c7f7e77f7f7f77e7f77e7e7e77c77e7e7e7f77c7ff7f7f7f77c77f7c7c7e7c7fcf7f7e7c7e7f7f7e7f76e7cec77c7f7f7ec7fcf7fc7fcfcfcf7fcf7f7f7cf7f7f7fcccf7f7c7f7f7f7f7f7ffff7ffff7ffffffcfcfffff7fffff
        fcffff7f7fffff7c7f7c77f7f6fcf7fcfc7f7f7f7f7f77ef7f7fcfcffffcfff7f77f7ffcf7e7f7fcffcfffc7ffcff7ffcfff7f7f77efcc6cc696a66c6fcfccff77e77e7e7e77e777e7fcfc77e77e7e7f77f7e7e7e7c7e7c7e7f7f7fce7f7c7f7e7c7f7e7f7f7f77c7f7c7f7c7e7f7c7cf7f7f7f7f7f7cf7f77ff7ff7f7f7f7fcf7f7ccf7cecccf7f7f7fcf7fcf7f7fcccf7ffcffcfffcf7fffffffcfcfffcf7f
        cf7f7fffcfffcffef7f7fe7c7f7c7fc7f7fcc7f7ce7fcf7ffffcfff7fcff7fffcf7ecc7f7fcf7fffcffcffff7ffcffcff7fffff7cf77f7fec6c669cfcf7e7f77e7c7e7e7c7f77f7e7fc7f7e7c7f777e7e777e77e777e7f77c7fcfc7f77c7f77c7f77c7f7cf7f7ce7f7c7f7e7f7f7cef77c7f7f7f7cec7c7fcf7fcfcfcfcfcfcf7f7fc7f7f7f7f7f7f7f7c7f7f7fcc7f7f7ffffcff7ffffffcf7fffffffcfffff
        f7ffcf7ff7fffffffc7f7fcf7fcfc7fc7f7f7fcf7fc7f7ffcf7ff7fffffffffffffcfffcf7f7fcf7fcff7f7fffcfcff7fffcf7fffffc7fc7f7cc66fc7fcf77e7c7e7c77f777e7e7ffcff7e7f7e7e7f77c7e7c7e7f7e777e7ff7f7e77c7f77e7f77c7e7c77f7c7f7f7e7f7cf7c7ce7f7cf7f7c7cef7f7f7f7fcfcf7f7f7f7f7f7f7ccf7fcf7f7f7fccf7fcfcf7f7fcf7f7fcfcff7ffcf7fcfffffcf7fffff7ffc
        ffcffcfcff7fcf7fffffc7f7f7c7fc7fffccf7f7f7f7ffffffffffffcf7ffcf7fffff7ffff7f7fffff7fffffcff7fcfffcfcffcfcfcffcfcf7fcfecfcf77e7c7e7e7f7e7e7f7c7fc7f7c77c77e7c77e7e7f77f77777f7cfcf7f7e7f7e7e7c7f7e7c76f7fe7c7e7c7c7f7c7e7f7f7f7c7e7cef7f7c7f7f7ff7f7f7ffcffcfcf7f7fc7f7f7f7fccf7f7fc7f7f7fcc7f7fcf7fff7fffffffff7ffcfffff7fcfffff
        7ff7ff7f7ffcffffffcfff7f7ffff7f7ffff7fccf7fcffcf7fcfcfcffffffffffcf7fffcfcfffcfcffffcfcff7ffff7fcff7fffcf7ffcff7f7fefcf777e7f7e7f77f77e7c77e7fcff7f7e7f7e7f7e7c7f77e7e7f7f77e7f7f7e7c77c7f7c7f7e7f7c7e77f7f7f7f7f7c7f7f7f7c7c7f7f7f77f7f7f7ccf7ffcfcfc7f7f7f7fcfc7fcf7f7fc7f7f7f7f7fc7fc7f7fcf7f7fcfffffcf7fcffffff7ffcffffffcff
        fcffcffffcf7f7ff7fff7ffcffcffffffcfffff7fc7fffffffffffff7ffcf7ffffffffff7ffcffff7ffffff7fffcfffff7fffcffffcff7ff7fcf7f7e7f7e7c7f7e77e7f77c7ffc7f7c77f77e777c7f777e7f7c7e7e7ffcf7c7c7f7f7e7f7e7e7c7c7f7f7c7e7c7e7c7f7c7f7cef7f7c7f7cf7fc7f7f7fcfc7f7f7ffcfcf7f7f7fc7f7fcc7fcf7fccf7fcf7f7fcf7f7f7fcf7ffcffffff7fcf7fffffffcfcfffc
        f7fcf7f7fcffcfcfffcfffff7ff7fffcfff7fcff7fcfcf7ffcf7f7fffffffffcfcffcfcffcff7fcfffcf7ffffcff7fcfcffcf7f7fff7ffcfc7fc77c7f77e77e77f7e7c7c7f7f7ffcf7e77e7c7f7e77ee7f77e7e7c7fcef7c7f7e7e7c7c7e7f7f7f7e7c7c7f7f7f7f7f7fe7ce7f7f7f7f7f7cf7fcceff7f7ffcffcf7f7f7fcc7f7fcf7f7ff7f7f7f7fcf7fcfcf7f7fccfcf7fffff7ffcffffffffcfcfffff7fff
        fff7ffffcf7ff7fcfff7fcffffcffcfffcffff7ffffffffff7ffffffcfcffcfffffffff7ff7fffffcfffffcfff7ffff7fcffffffcfcffcffcf77f7f77e7f7f7c77ef7e7f7fcfcf7f77ce7f7e7e7f7e7f77e7c7f7ffcf77c7e7c7f7c7f7f7f7c7c7f7f7f7f7c7ec7ec7e7f7f7f7c7f7f7cef7fcf7f7fcfcfcf7f7fcfcfcf7f7fcf7f7f7f7fccfcf7f7f7f7f7f7fcf7f7f7ffffcfffffffcf7ffcffff7ff7fffcf
        7fffcf7ffcfcffcf7ffffffcfffcfff7fffcfffffcf7ffcffffcffcffff7fff7ff7ff7fffffcfcfff7fcfff7ffffcfcfff7fcfcff7fcff7f77f7e7e7f7c77e7ef777f7f7fcf7f7c7e7f77e7f7c77e777c7c7f77f7f7f7f7f7f77c7f77e7c7c7f7e7c7e7f7ef7f7f7f7f7f7cf7f7f7cec7f7c7f7fff7f7f7f7ffcf7f7f7f7fcf7f7fcfcfc7f7f7fcfcf7fc7f7f7f7fcfffcffffcfcf7fffffffffcfffffffffff
        fcf7ffcf7ff7fcf7fc7ffcfff7fff7ffffff7fcffffffff7fcffcff7fffffcfffffffffcf7ffff7fffff7ffffcfcfffcfffff7fcffff7fffc7e7f7f7e7f7f7777fe7cf7ff7ff7c7f7e7c7f77e7f7c7f7e7f77fcfcfc7c7e777f7e77f7f7f7e7c7f7f7f7c7c7f7c7f7c7f7f7c7f7fcf7f7f7f7ffc7ffcffcffcf7fcf7f7fcc7f7fc7f7f7fcf7fc7f7f7f7ffcfcf7fff7f7ffcffffffff7ffcff7fff7ffcffcff7
        ffcfcffcfcfff7fffffcf7ffffcfffffcf7ffffcf7ffcfffffcff7fffcfffffcffcfcfcfffcf7fffcf7fffcfffff7f7ffcf7ffff7fcfffcf7f7f7e7c7f7e7ef7e7f7fcfcfcf7e7f77f7e77c7f77e7f7e7f7ef7f7f7e7f7c7f7e7f7f7e7c7f7f7f7c7c7f7f7f7c7f7cf7ce7f7f7ce7f7f7cf7f7fcfcf7f7f7f7ff7f7fcf7f7fcf7ff7f7f7f7fcfcf7fcfc7f7f7fcfcfffffff7fcf7fffffff7ffffffffffff7ff
        fcff7f7ff7f7ffcf7f7fff7f7ffcffcffffffcfffffff7ffcff7ffffff7fcfff7ffffff7ffffffcffffffffcf7fffffffffffcfcfff7fcffc7e7c7f7e7e7f77fcfcfcf7f7f7c7e7e77c7f7f77ec7f77c77ef7fef7f7c7e7f7e7f7c7c7f7e7c7f7e7f7f7ec7ef7f7f7ef7f7f7cf7f7cc7f7f7cfcf7f7ffcffcf7f7fc7f7fcf7f7f7fcfcfcfcf7f7f6f7f7fcf7f7f7ffcfcfcfffffffcffcfffffcfcffcf7fffff
        cf7ffffcffffcf7ffcfc7ffcfcf7ffff7ffcfff7ffcffffff7fffcfcfffff7ffffcf7ffffcf7fcff7ffcfcfffffcffcf7fcfcf7ff7ffffcff7f7f7ef7f7f7cef7f7f7ffcf77e777c7e77e7e7f7e77ec7fcf7fcf7c7e7f7f7cc7c7f7f7ec7f7f7c7f7cec7f7f7c7f7c7f7cf7f7ec7f7fcf7cfcf7ffcfcf7f7fcfcf7ff7fc7fcfcfcf7f7f7f7fcf7f7fcfcf7fcffcffcffffffcfcfcff7ff7ffcfffff7fffffcf7
        fffcfcff7fcf7ffcff7ffcf7ffffc7fffffff7fffff7ffcffffcfffff7fffffcffffffcfffffffcfffffff7ffcff7ffffffffffcfffcf7fcf7c7ce77f7c7f7f7fffcf7f77f77f7e77f7f7c7f7e7f7f7ef7fcf7c7f7f7c7c7f7f7f7e7f7f7c7e7f7cf7f7f7f7f7f7ef7cf7c7cf7f7fc7f7f7f7ff7f7f7ffcfc7f7fc7fcf7fc7f7f7f7fcffcf7f7fcf7f7f7fcf7f7fff7fcf7ffffff7fffffffffcf7fffffcf7ff
        cfcff7fcff7ffcff7ffcf7ffc7f7ff7f7cc7ffcf7f7fcf7f7f7f7f7f7fcf7f7f7f7fcff7ff7ffcffcf7f7fffff7fffcfcf7fcf7ffcffffffcf7f7f7f7ef7efcfc7f7ff7f7ece7c7e7777e7f7e6f7c7f7fcf7f7f7e7c7f7f7e7c7ecf7c7c7f7f7cf7e7f7cf7c7f7f7cf7c7fc7f7f7cf7f7fcff7ffcfff7f7ff7fc7ff7f7fcfcf7fcfcf7f7f7fcf7f7fcfcfcf7ffff7fffffffcf7ffffffcfcfcffffffcff7ff7f
        f7fcffff7ffcff7ffcf7ffcfffffcffcffff7f7fcffcf7fcfcfcf7fcfc7fcfcfcf7f7c7f7ffcff7ffffffffcfffffffffffffffcff7fcf7ff7f7c7f7c7e7f7f7ffff7c7ce7f7f77f7e7e7f7c7e7f7fcfcf7f7c7f7f7f7e7c7f7f77c7f7f7ce7f7e7f7cf7f7fe7f7f7c7fc7f7f7cf7f7f7fcf7fcf7f7fcff7fcf7fc7fcf7f7f7fc7f7ffcfcf7f7fcf7f7f7fcfcf7ffffcfcffffffcffcffffff7ffcffff7fccf7
        ffff7fcffcff7ffcf7ffcfc7f7fcf7f7f7f7ffcf7f7f7fcf7f7f7fc7ffc7f7f7f7fcff7fcc7f7fc7f7fffcfff7ffcf7fcfcf7fff7fffcffcfc7f7f7ef7fffcffc7f7f7f7f7c7f7f7c7f7c7e7ff7fcf7f7ff7ce7e7c7e7f7f7c7fef7f7cef7f7cf7f7fcf7ce7fc7fecf7f7f7fef7f7fcefc7ffcf7ffcfcf7f7f7fcff7fcf7fcf7ffcf7f7f7ffcf7fcfcfff7f7fffffcffff7fcf7ffffff7ff7ffffffcf7fcf7fc
        fcfffff7ff7ffcff7ffcf7ffffffcffcfcffcf7ffcfcfcf7fcfcfcff7f7fcf7f7fc7f7fcf7fcf7ff7f7c7fcfffffffffffffffcfffcff7fff7f7e7f7c7f7ffcfff7cec7f7f7f7e7f7f7c7f7f7ffcf7ffcf7c7f7f7f7f7c7cef77c7f7f77c7f7f7f7fc7f7f7f7f7c7f7f7fcc7f7f7f7fcfff7fcffcf7f7fcfcfcf7f7f7f7fcf7fc7ffcffcf7f7fcf7f7f7ffcfcffcfff7fffffffff7fffffffffcf7f7fcf7ff7f
        ff7fcf7ffcffcf7fccf7ffcfcf7ff7ff7f7f7ff7f7f7f7ff7f7f7f7f7ff7f7fcf7ff7fc7fcf7f7f7fcff7f767c7cffcf7fcfcfffcff7fffcfc7f7f7f7ffcfff7fcf7f7f7c7f7f7f7e7f7f7cfcf7f7fcf7c7f7c7f7c7c7f7f77f7f7c7ef7f7c7c7fcf7f7c7f7f7fcf7f7f7f7f7fcccf7f7f7ff7f7fcffcf7f7f7fcf7fcff7f7fcff7f7f7f7fcf7f7fcfcfcf7f7ffff7fffcfcfcfcfffcffcffcffffcf7f7f7fcf
        7fff7fffcfcffcfff6f6fcf7fffcffcffcffcfcffcffff7fcfcff7fcf7fcff7fcf7fcf7fc7f7fcfcf7cf7fcccf767f7ffffff7fff7fffcff7fc7f7fefcff7fffff7c7f7fef7cec7fcc7f7ff7fcfcfcf7f7f7f7f7c7f7f7e7f7c7ce7f7c7f7f7ffc7f7cf7f7f7cc7f7cccf7fcf7f7fcffcffcffcf7f7f7f7fcf7f7fcf7f7fcfcf7ffcf7fcfcf7fcfcf7f7fcfff7fcfffffffffffffcfff7fffff7f7fcfcfcfcf7
        ffcfffcfff7f7fcf7ffeffcfcf7fcff7ff7fcf7fcf7f7ffcf7f7ffcf7fcf7fcf7fcf7ff7ffcf7f7f7f7fcf7f7fcfc7f7c77cfffcfffcff7fff7f7ccf7f7fffcfcff7f7f7c7f7f7f7f7fefcfcf7f7f7fc7f7e7f7ef7ec7f7c7cf7f7f7f7f7cffc7f7cf7cf7fccf7f7f7f7f7f7cf7ff7f7f7f7f7fffcfcf7fc7fcfcf7fcfcf7f7ff7f7ffcf7f7fcf7f7ffcf7f7ffffffcfcf7f7fcffff7fffcf7fcf7f7f7f7f7ff
        cffcfcfcfcffffcffcff7ff7fcff7fffcfff7fff7ffcfcf7fffcfcf7fcf7fcf7fc7fc7ff7f7fcfcfcfcf7f7f67c7ff7ffff7f7c7f7ff7fffcfffff7ffffffff7ffffcf7fcf7f7f7f7fcf7f7fcffcff7f7cef7c7f7f7f7c7fc7c7f7c7f7cfef7f7f7f7f7ce7f7f7fcf7fc7fcf7fcfcffcffcffcf7f7f7ffcff7f7f7fcf7f7fffcfcfcf7f7fcfcfffffcf7ffcffcfcfffffffffff7fcffffff7f7f7ffcfcffcf7f
        f7ff7ff7ffcf7ff7ff7ffcff7c6ffcf7fcfcfcfcfcf7f7ffccf7ff7fff7fcf7fcff7ff7fcfcf7f7f7f7fcfcefffc7fc7c7f7f7fcf7f7ffcff7fcfffcfffcfcffffcf7cf7e7f7fcecf7fcfcf7f7f7f7f7f7f7cf7e7c7cef7c7f7f7f7f7f7f7f7f7ce7f7f7fc7f7f7c7f7fcf7f7ff7f7fcf7f7f7ffcfcf7f7f7fcfcf7f7fcfc7f7f7f7fffffff7fcf7ffffcf7fffff7ff7ffcffcfffffcfcf7ffcfcf7f7f7cf7fc
        ffcfffcff7fffcffcffcf7fcff7ffcffff7fff7fffffffcff7ffcffcfcff7ffcf7fcf7fcf7f7fcfcf7f7f7f7f7cfcf7ff7fcfc7f7fcf7c7fcfffcfcfcfffffffcff7f7f7fcf7f7f7ffcf7ffcffcf7cce7f7c7ef7f7f7f7c7f7f7cec7fcff7f7cf7fc7f7f7fc7fcf7fcf7f7fcf7ffcfcf7ffcffcf7f7fcfcfcf7f7ffcf7fcffcfcfcf7fcf7fffffffcf7fffffcf7ffffffff7ffffcfff7f7fc7f7f7fcf6c6cfcf
        cffcfcfcffcfcf7c6cf7ffcfcffcf7fcfcfcfcfcf7fccf7fffcff7ff7fcffcf7fcf7fcf7fcfcf7f7ffcfcf7fcf7f7fcf7fc7f7fcf7f7fcf7f7cff7fff7ff7fff7fff7fcf7f7fcfcfcf7ff7f7f7f7f7f7f7f7f7c7f7f7c7f7f7cef7ffcf7cc7f7ce7f7fecf7fc7f7fc7fcf7f7ffcf7f7ffcf7fcf7fcf7f7f7f7fff7f7ffcf7f7f7f7fffcffcf7f7fffffcfcfffffffcff7ffffcfff7f7fcf7ffcfcfcf7fcf7f7f
        f7ff7fff7fff7fffcf7ffcf7f7fcfff7ff7fcf7f6fcffcfcf7fcffcfff7fcfcff7ff7fcf7f7f7fcf7f7f7ff7f7fcf7f7fef7fcf7f7fc7f7f7f7c7ffcffffffcfffcfc7f7f7fcf7f7f7fcfcfcf7f7f7f7ce7f7f7f7cef7f7f7cf77f7f7f7f7fcef7f7f7c7f7f7fcf7fcf7fcffcf7ffcfcf7ffcf7fcf7fcf6fcfc7fcff7f7fcffcfcf7fff7ffffffcf7fffff7ffcfffffffffcfff7ff7fcf7fc7f7f7f7fcf7ffcf
        cfcffcfffcfffcfc7fcfcf6fcff7f7ff7fff7f6c7c7f7ff7fff7fcf7fcff7ff7ffcff7fcfcfcf7fcfcfffcffffc7fcfcf7fcf7f7fc7fcf7fcf7fc7f7ffcfffff7ffffcf7fcf7ffcfffcf7f7f7f7f7ccf7f7f7cf7f7f7c7f7c7cfcfcff7f7f7c7f7fccf7f7fcf7f7fc7f7f7f7fcf7ff7fcfcf7fcf7ff7f7fcf7ffcf7ffcfcf7f7f7fff7ffcf7fcffffcf7fffffff7ff7ffcfff7ff7fcf7ff7ffcfcfcfcf7fcf7f
        fff7ff7fff7fff7ffcfcf7ffcfcfffcffcfcfcfcfcfffcffcfcfcf7fcf7ffcffcf7fcf7f7f7fcf7f7f7cf7f7f7ff7f7f7f7f7fcf7ff7f7f7f7f7fc7f7cff7fcfffcff7fcf7ffcf7f7f7f7f7f7fccf7f7f7f7f7ec7f7f7f7fef7f7f7f7f7ccf7f7f7f7f7fc7f7fcf7ff7fcfcf7ffcf7ff7f7ff7f7f7fcff7f7fc7f7fcf7f7fcfcff7cfffffffff7fcfffffcfcf7fffffffff7ffccf7fcf7ffcf7ff7f7fcfcf7fc
        f7fffcfcfcfcfcffcf7fffcf7ff7fcf7ff7ff7ff7fcf7f7ff7fcf7ff7ffcf7f7fffcfffcfcf7fcfcfcf7ffcfffcffcf7fcfcf7f7f7fcf7fcef7f7fcf7f7cffffcff7ffffffcf7ffcfcf7f7f7f7f7cf7cecccef7f7ce7f7c7c7fffcf7fccf7f7fc7f7f7f7ff7fc7fc7fcf7ffcfcf7ffcffcfcfcffcfcf7fcff7ffcfcf7fffcf7f7fffffcf7fcfcfff7f7fffffffffcffcf7ffc7f7fcf7ffcffcfcf6fc6f7fcff7
        ffcfcfff7fff7fcffffcf7fffcffcfffcff7ffcffcf7fffcffcf7fcffcf7ffcfcf7f7f7f7fcf7f7f7fcf7f7f7fcf7ffcf7f7fcfcfce7fcef7fcfc7f7f7f7c77fffffffcf7ff7fcf7f7fcfccf7f7f7f7f7f7f7c7fc7fc7fef7fc7f7fc7f7ef7c7fccf7fcf7fcf7fcff7fcf7f7f7ffcf7f7fcf7f7f7f7fcf7fcfcf7f7ffcf7f7fcf7cf7ffffff7ff7fffff7fcf7fffffffffcf7ffcf7ff7fcf7ff7fc7fcffcf7ff
        cfff7f7fff7ffff7f7ffffcf7fcf7f7fcfcfcf7f7fffccf7f7fffcf7f7ff7f7ff7ffcfcff7fcffcff7fcfcfcf7fff7fcfcfcf7f7f7ff7f7f7f7f7fcf7fcf7fc7cf7ffcfffffff7ff7f7f7f7fccf7f7fcf7f7f7f7f7f7f7cffcffc7c7f7f7cf7f7f7fc7f7fc7fcf7f7fcfcfffffcf7ffcff7fcfcfcfcf7ff7f7f7fffcf7ffcfcf7ffffffcfcffcfffcfcfffffffcfcf7f7f7ff7f7ff7fcf7ffcfffffc7f7ffcf7
        fcfcffffcfffcfcfffcf7ffcff7ffffcf7ff7ffffc7ff7ffffc7ff7fff7ffcfcffcff7f7ffcf7f7fcf7f7f7fcf7cffcf7f7f7fcf7fcf7fcfcf7fc7f7f7c7f7fc7f7ffffcf7fcff7fcfcf7f7f7f7fec7f7f7f7f7f7f7fef7f7f7cf7f7cc7f7fcf7fc7fcfcefcf7fcfcf7f7f7f7f7ff7ff7fcf7f7f7f7fcf7fcfcfc7f7ff7f7f7ffc7ffcffff7ffcfcfffcf7ffcffffffcf7fccfcf7fcf7ffcf7fcf7f6f6fcf7ff
        ff7fcfcff7fcfffcfcfffcf7fffcf7ffff7ffcf7fffcffcf7fffcffccffcf7f7f7fcffcfcf7fcff7fcffcff7fff7f7ffffffcf7ff7f7fcf7f7f7ff7fcf7fcf7f7fc7cfffffff7fcc7f7f7fcf7fc7fcf7f7fccf7fcef7cffcff7f7f7f7fc7f7f7f7fcf7f7f7f7fc7f7ffffcfcfffcff7ff7f7fcfcfcf7f7ff7f7fffcfcfcffcfcf7fffff7ffffcfff7ff7fffffcf7f7c7ffcf7fcfcf7ffcf7ffcf7fcc7ff7ffcf
        7ffff7fcffff7f7fff7f7fffcf7fffc7fcfcffcfcf7fcf7ffcf7f7ff7f7fcfffcfcf7ff7f7ff7fcf7f7f7fcf7fcfcf7f7f7f7ff7fcfcf7f7fcfc7fc7f7f7f7f7f7fc777fcf7ffcf7fcf7fc7fc7fcf7f7fc7f7cf7f7fcf7ff7cf7ccf7f7fcf7fccf7f7fcf7fffcff7fcf7fcf7f7f7fcfcfcffcf7f7fcfcfcfcff7f7fcf7f7f7f7ffcfcffffcfff7fffffffcf7ff7fcfff7f7ff7ff7ffcfcff7f7ffcfffcffcf7f
        ffcfffff7fcffffcfcfffcf7fffcf7ffffcf7ff7fffcfffcf7ffffcffcff7f7fcf7ff7ffcfcff7ffcffcfcf7fcf7fcfcfcfffcfcf7f7fcfcf7f7fcfcf7fcef7fcc7fffc7fffcf7ff7f7ffff7ff7f7f7f7fecf7ef7ff7ff7fc7f7f7cf7f7e7f7f7fcfcf7ffccf7fcff7ffcf7ffcffcf7f7f7f7ffcf7f7f7f7f7ffcfcf7fcfcfcf7f7fff7fff7fffffcf7fffffcfcf7f7fcfc7ff7ffcff7f7ffcfcf7f7f7fcf7fc
        fcf7fcfcfff7fcff7fcfcfffcf7fffcf7ffcfcffcf7f7f7fffcf7fc7ff7ffcff7ffcffcf7fc7ff7fcf7f7fcfcf7fcf7f7f7f7ff7ffcf7f7f7fcf7f7f7fcf7fc7f7f77c7f7cfffc7fcfffcffff7fcf7fcf7f7f7f7fcffcfc7f7fc7f7f7cfcf7fcf7f7f7fcf7fff7fcff7f7ffcfcf7fcfcfcfcf7f7ffcfcffcff7fcf7ffcf7f7fcffffcfffcfffcfcffffff7f7f7f7fcf7f7ff7fcfcf7ffcfcf7fcffcfffcf7fff
        cffff7ffcfffff7ffff7f7fcfffcfcfff7ff7fcf7ffffcfcf7fcfcff7ffcfcf7fcf7f7fcffff7ffcf7fff7fcf7ff7ffcfcfcf7ffcf7ffcf7fcf7fcf7fc7f7f7fcf7ff7fcf77ffff7fcf7fcfcfff7fcc7fcf7fcf7ff7f7f7fcf7fcf7fef7f7fc7fcf7ff7fff7fcfcf7ffcfcf7f7ffcf7f7f7fcfcf7f7fc7f7fcfcf7fc7ffffff7f7ffffcfffcffff7ffcf7fcfcf7fcf7fcf7ffcf7fffcf7f7ffcf7f7f7cfcfcf7
        fcf7fff7fcf7fffcf7ffffff7fcf7fcfcfcfff7ffcf7ffcfcffcf7fffcf7f7ffcfcffcf7f7fcfcf7ffc7ffcf7fcff7f7f7f7ffcf7ff7f7ffc7fcf7fcf7fcf7f7f7f7cf7f7fc77ffffffffffffcfff7ff7f7f7f7fcffcf7f7f7f7f7f7f7f7f7ff7f7fcff7fcf7f7fcfcf7f7ffffcf7ffcfcf7f7fcffcfffcfcf7fcfcffffcffffcffcffff7fff7ffff7f7fcf7f7ff7ffcf7fccf7fcf7fcfffc6f7fff6c6ff7fff
        ffcffcffffffcfcfffcfcf7ffcffff7ff7fcfcfcffcfcf7ff7f7ffccf7ffffcf7ff7f7fffcf7fcff7fffcf7ffcf7fcffcffcf7f7fcfcfcf7ff7fcf7f7fc7fcfcf7fcf7f7f7fcf77fcf7fcf7ffffcff7fccf7fcffcf7f7fcf7f7f7fccf7fcfc7fcfcf7fcfcf7fffcf7fffffcc7f7ff7f7f7ffcfcf7f7f7f7f7ffcf7f7fcfff7ffffff7fffffcfffc7fcfcf7fcff7fcf767fcf7ffcfcff7f7f6fcfcf7ff7fffcf7
        fcfcff7fcf7ff7fcfcfffcfcff7f7ffcfff7ff7fcf7ffff7ffffcff7ffcf7fcff7ffcfcf7fffcf7ff7f7fcf7fcfcf7f7f7f7fcffcf7f7fcf7fff7ffcf7ff7f7f7fc7f7fcec7f7fc7fcffffff7ffffffc7f7fcf7f7fcfc7f7fccfc7f7fcf7ffcf7f7ffcf7fffccf7ff7f7f7fffcfcfcffcfcf7f7ffcfcfcfffcf7ffcffff7fffcf7ffffcfcfff7fff7f7f7fcf7fcf7f676cf7fcf7f7fcfffcf7ff7ffcffcf7fff
        ff7fcffff7ffffff7fcf7fff7ffffcff7fffcfff7ffcf7ffcf7ff7ffcf7ffcf7ffcf7ff7fccf7ff7ffcff7ffcf7ffcffcfcfcf7f7ffffcf7fcfcfcf7fcf7fcf7f7fcf7f7f7f7f7f7f7cf7fcfff7fcffffffcf7f7f7f7fcf7f7f7fcfcf7fc7f7fcff7f7ff7f7ff7fcffcfcfc7ff7f7f7f7f7ffcf7f7f7f7f7f7ff7f7ff7ffffffffcffffff7f7f7cfcfcff7f7fcf7f7ccfcffcf7fffcf7fcfffcffcffcf7ffcf7
        fffff7fcfffcf7fffffcfcfcffcfcf7ffcf7fcfcfcf7ffcffcfcffcf7ffcf7ffcf7ffcffcf7ffcffcf7fcfcf7ff7fcf7fcf7fcfcf7f7ff7fff7ff7fff7fcf7fcfcf7fcef7fcf7ccf7f7fcffcfffff7fcf7ff7fcfcf7f7f7fcf7fc7f7fcf7fcf7f7ffffcffcfcffcf7fcf7fff7ffcfcffcff7f7ffcfcfcffcff7ffcffffffcfcf7fff7fc7fcfcff7f7f7f7ffcf7ffcffcf7f7fcfccf7fffcf7ff7ff7ffcfcffff
        cf7fffff7fcfffcf7fcfff7fcff7fffcffcff7ff7fffcff7fff7fcfffcffcfcf7ffcf7fcfff7f7f7fcff7fcff7ffcf7fcf7ff7f7ffcf7ffcfcfcffcf7fc7fc7f7f7f7f7fc7f7fc7f7f7c77fffcffffffffffff7f7fcfcfcf7fcf7fcf7f7ff7ffcfcc7fcf7fcf7f7ffcf7fcf7fcf7f7f7f7ffcfcf7f7f7f7fcfcf7f7fcfffffffffcffcff7f7f7fcfcfcff7f7f676f7f7ffcfcf7f7ffcf7fffcffcff7ff7fcf7f
        fffcf7fcfff7fcfffff7fffff7ffcfff7ffcffcffcf7fcffcf7fff7fcf7ff7fffcf7fff7f7ffffffcf7ffcf7ffcf7ffcf7fcffcfcf7ffcff7ff7fcfcfffcf7fcf7fcf7f7fcf7f7f7fcf7fc77f7ffcfcfcfcfcfffc7f7f7f7fc7ffcf7ffcf7fcf7ffffcf7ff7ffffcf7ffcf7ff7ffcfcfcfcf7f7ffcfffcfcf7fcffffff7ff7fcf7f7f7f7fcfcf7f7f7f7fcffc7c6fcc6cf7f7ffffcf7ffcf7fcf7fcfcffffcfc
        f7ffffffcfcfff7fcfcfcf7fffcff7fffcff7ff7ffcff7fcf7ffcfff7ffcffcf7fffcf7fffccf7f7fffcf7ffcf7ffcf7ffcf7f7f7ffcf7f7fcfff7ff7f7ffcf7fcf7fcfc7f7fcf7f7c7f7ff7fc77f7ffffffffc7ffcf7fcf7ff7f7ff7f7ffcf7fcf7f7ffcffc7f7ffcf7fcfcfcf7f7fcf7fcfff7fcf7fcf7ff7f7fcfcffffff7fcfcfcfcf7f7ffcfcfcf7f7ffc6fe67c7ffffc7f7fffcffcff7fffcff7f7ff7f
        ffcf7fcf7ffcfcffcfff7ffcfcfcffcf7fcffcffcff7fff7ffcfcf7ffcff7ffffcf7fffcf7ff7fffc7f7ffcf7ffcf7ffcf7ffcfffc76fcffcf7fffcffcfcf7fff7fc7f7ff7f7f7fcfefcf7cf7fcf7f7c7ff7ffff7f7fcf7ff7fcfcf7fcfcf7fff7ffcfcf7f7ffff7f7ff7fcf7f7ffcf7ff7fc7ffcf7ff7ff7ffcfffffff7f7fcf7f7f7f7ffcf7f7f7f7ffcfcffeff7c6fc7f7ffffcf7fcf7fcfcf7f7ffffcffc
        fcffffcffcff7ffcf7ffffcfff7fcffffff7ffcf7fcfcfcfcff7fffcff7ffcf7ff7fcf7fcfcffccfffffcf7ffcf7ffcf7ff76c76f7c67f7f7ffc7ff7ff7fffcfcfcfcf7f7fcf7fc7f7f7cf7f7f7f7fcf7c7ffcfffcf7f7fcfcf7f7ffcf7f7fcfcfcf7ff7fffcf7ffcfcff7f7ffcf7fcf7ffcffcf7ffcffcffcfffcf7f7fcfcf7ff7ffcfcf7fcfcffcff7fcf7f7fcf6cffffcffcfcf7ff7fffcf7ffffcf7fcf7f
        ff7fcff7ff7ffcffffcf7ff7fffff7f7fcffcffffff7fff7fcffcf7f7ffcff7fcffffcff7ff7ff7f7f7fcffcf7ffcf7ffcfc6c6effcf6cfffcfff7ff7ffcf7fcf7ff7fcfcf7fc7fcf7f7f7f7f7f7f7c7ffc7f7fcf7ffcfcf7fcfcf7f7ffcffcf7f7ffcffcf7fcfcf7f7fcfffcf7ff7fcfcf7f7fff7fc7f7f7f7f7fcfcf7f7f7f7ff7f7f7fcf7f7f7f7ffcffffff7fff7f7ffcf7ffffcffcf7fffcf7ffcff7ffc
        fcfff7fffcffcf7f7ffffcffcf7fffffff7ff7f7f7ffcf7fff7ff7fffcff7ffff7fcf7fffcff7ffffcff7f7fffcf7ffcf7ffefff7fcfef7f7f7f7fcfcfcfcff7ffcfff7f7fc7c67cf7fccf7fccfccf7f7cf7f7f7ffcf7f7fcf7f7ffcf7ff7f7ffffcf7f7fcff7fcffcf7f7f7f7fcff7f7f7fff7fcfcffffcfcfcf7f7f7fcfcfcfcfcfcff7f7fffcfcfcff7f7fcffcfcfffcffcfcf7ff7ffcfcf7fffcf7fffcff
        7fcfcffcffcffffffcf7ffcffffcf7fcfcfcffffffcffffcfcfcffcfcf7ffcf7fffcffcf7f7ffcf7ff7ffffc7f7ffcf7ff7ff7fcfcf7fcfcfcfcfcf7f7ff7fffcf7f7fffcf7fc6c76f7f76c7f7f7f7fcf7fcf7fc7f7f7ff7f7fff7fcff7ffffc7f7fffcff7fcff7f7fcfcfcfcfcf7ffcffcf7fcf7ff7f7f7f7f7ffcfcfcf7f7f7f7f7f7ffcfc7f7ffcf7ffcff7fcf7fcf7f7fff7ffcffcf7ffffc7ffcfcf7fcf
        fff7fcff7ff7fcf7ffffcff7f7ffffcf7fff7fcfcff7cfcfcff7fcf7fffcf7ffcf7fcf7ffffcffffcffcf7fffffcf7ffcff7ff7fcf7f6f7fcf7fcf7fff7ffcf7ffcffcf7ffcf7fccfcf7cccf7fcf7fc7fc7f7f7fc7f7fc7fcf7cfcf7fcfcc7fffff7f7fcffcf7ffcf7f7fcf7f7fcf7fc7f7ffcfcf7fcfcfcfcff7f7f7f7ffcfcfcfcfcf7fcfffcfcf7ffcff7fffffff7ffffc7ffcf7fcf7ff7f7ffcf7ffcff7f
        cfffff7ffcfff7fff7fcf7ffffcf7ffffcfffff7fcf6c7ff7fffffffcf7fffcffcff7ffcfcff7fcf7fcfcfcf7fcfffcf7fcfcffcf7fcc7cf7ffcf7fccfcfcf7fcf7f7fffcf7ffcf7f7fcf7f7fc7fcf7f7fcf7fcf7fcf7fcf7fcf7f7fcf7fffcf7fcfcff7f7ffcf7fcfff7fcffcf7ffcffcfcf7f7fcf7f7f7f7f7fcfcfcf7f7fcf7fcf7ffcf7f7fcf7fcff7ffcf7f7fcfcf7fffcf7fff7fffcfffcffcfcff7fff
        f7fcfcffcfcffffcffffffcfcffcfcf7ff7fcfcfffff7f6ffcf7f7fcfcfcf7fcf7fffcff7fcffcffff7ff7fffcf7f7fffcf7fcf7ffcfff6ff7f7ffcf7f7f7fffcf7ffccf7ffcf7fcf7c7cf7fcfc7f7fcf7f7fc7fcf7fcf7fc7f7fcf7f7fc7f7ff7ff7fcfff7f7ff7f7fcfcf7f7ff7f7f7f7f7ffcf7ff7ffcff7fcf7f7fcfcfcf7ff7ffcff7ffcf7fffcf7ffcfffcffcf7ffcf7fffcfcffcffcfcf7ff7f7ffcf7
        fff7ffcff7fcf7ffcf7fcff7fcff7fffcfffcff7f7fffffcffffffff7ff7fff7ffcf7fcfff7fcf7f7ffcffc7ffcfffcf7fffcf7fcf7f7fcf7fffcf7ffcfffccf7ff7f7fffcf7ffcf76c667cf7f767cf7fcfcf7fc7fcf7fc7ffcf7f7fcf7ffcf7fccfcf7f7ffcfcffcf7f7f7ffcf7fcfcfcfcf7cf7fcfcf7f7ffcf7ffcf7fcf7ff7ffcf7fffcf7ffc7f7ffcff7fcf7f7ffcf7ffcf7fcf7ff7ff7fffcffffcffcf
        fcffcff7ffffffcffcfff7ffff7ffcfcfcf7f7ffffcf7fcf7f7fcf7ffcf6ccffcffcff7fcfff7ffffcff7fffcf7fcf7ffcf7fffcfffcff7ffcf7fcfcf7f7f7f7fcfcff7f7fffcf7ffc67cf6fcfcccf7fc7f7fcff7f7fc7ff7f7fcfcf7ff7f7fcf7f7f7fcf7f7f7f7fcfcf76b7f7ff7f7f7f7f67cfcf7f7fcf7f7ffcf7ff7f7fcffcf7ff7f7fffcfffffcff7ffcfcfffcf7ffcf7fff7ffcffcffcfcf7fcff7ff7
        ffcff7fffcf7fcf7ff7fffcf7ffcff7ff7fffffcfcffffcfffffcf6cffcf76fcf7ff7fff7f7ffcfcff7ffcfcffff7fffcfcfcf7f7f7fcffcf7ffcf7fcfcfcfffcf7f7fcfcf7ffffc7ffcfcf7f7f7ffcf7fcf7f7fcfcf7fcfcfcf7f7fcf7fcf7f7fcfcfcf7fcfcfcf7f7f76b6fcfcfcffcfcfcf6f7f7ffcf7ffcfcf7ff7ffcfcf7f7ff7ffcfc7f7f7f7fcfcfcff7fcf7fffcffcfcfcfcff7ffcff7ffffcf7ffcf
        fcf7fffcffcfffffcffcfcfffcff7ffcfffcfcff7fcf7ffcfcf7ffc7fcff6c7fffcffcfcfffcff7f7ffcff7f7f7ffcfcf7ff7ffffffcf7f7ffcf7ff7fcf7fc7f7ffcfcf7f7fc7f7ff7fcf7fcf7ff7fffcf7fcfcf7f7ff7f7f7f7fcf7f7fcf7fcfcf7f7f7fcf7f7f7ffcffcfcf7f7f7f7f7fcf7feffcf7fffcf7f7ff7ffcf7ff7ffcfcfcfcffffcffcff7ff7f7ffcf7fcf7f7ff7fcf7fcffcff7ffcf7ffffcff7
        fffffcff7ff7f7fcfcff7fcfcf7fffcfcfcfcf7ffffffcff7fffcfff7f7fffc6f7fcf7ff7fcf7ffffcff7ffffffcff7fffcffcf7fcf7ffffcf7ffcffcf7ffffcfc7f7fcfcfcffcf7fcf7fcf7ff7fcf7ff7fcf7f7fcf7fcfcf7ff7fcfcfcf7fcf7f7fcfcfcf7ffcff7f7f7fcf7ffcffcf7676fcfcf7fcfc7f7ffcfcfcf7fcf7ffcf7f7fcf7f7f7fcf7fffcffffcf7fffcffffcfff7fffcf7fcffcffcfc7f6f7ff
        cf7fcf7ffcffffff7fcffff7ffffcff7ff7ffffcf7f7ff7ffcfcf7fffffcfcfffff7ffcffcfffcf7ff7ffcfcf7ff7ffcf7fcf7ffcfffcf7fcffcf7f7fffc7f7fcfffcf7f7f7f7fcfcfcff7ff7fcf7ffcfff7fcfcf7fcf7f7ff7fcf7f7f7ffcf7ffcf7f7f7ff7fc7fcffcfcf7fcf7f7f76bccf7f7ff7ffffcfcf7f7fcfcf7ffcf7ffcff7ffcfcff7ffcf7f7fcf7ffcf7fcf7ff7fcfcf7fffff7ff7ff7ffccffcf
        fffffffcf7fcfcfcfff7fcffcfcff7ffcffcf7ffffffcfffcf7fffcc6ffcff7fcfffcff7ff7fcfcfcffcf7fcffcffcfffff7ffcff7fcfcff7f7fffcfc7fffcfcf7f7fcfffcfcf7f7f7fcffcfcfcfcf7fcfcf7f7f7fcf7fcf7fcf7ff7ffcf7f7fcf7ffcfcf7f676cf7f7f7f7ff7ffcfcfcff7ffcfcffc7f7fcf7fffcf7fffcf7ffcf7fcfcf7ff7ffcffcfffcfcfcffcff7ffcffcff7ffcf7fffcffcffcfcf7ff7
        f7fcf7fcff6ff7ff7fffff7ff7fcffcff7ffffcf7fcff7fcfffcf7ff7c6f7fffc7fcf7ffcffcf7ff7fcffff7fcf7ff7f7fcffcf7fff7ff7ffffc7ff7ffc7fcf7ffcfcf7cf7ffcfcffff7fcf7ff7ffcff7ffffcfcfcf7fcf7fcfcf7ffc7f7fffcf7fcf7f7ffc7cf7cfcffcffcff7f7ff7fcffcf7ff7ffffff7ffccf7ff7f7fffcf7ffcf7fff7ffcff7ff7fcf7fff7ff7ffcf7fcf7ffcffffcf7fcf7fcf7fffcff
        fffcfff7fcfcffcffcf7fcffcfff7ffcffcf7ffcffcfcfff7fcfffcff6f7fcfcf6cfffcff7ffffcfff7f7fcff7ffcffffcfcf7ffcfcfcffcf7fffcffcfffcf7fcf7f7ff7ff7f7ff7c7fff7ffcffcf7fffc7fcf7f7f7ff7ffcf7fffc7ffcfc7f7ffcf7ffcf7ffcffcf7f7f7f7fcfcfcffcf7f7ffcff7f7f7ffcff7ff7ffcfcf7fff7ff7f67cfcf7fcf7f6c7ffc7ffcffcffffcfffcff7f7ffcff7fcf6ffcfcfcf
        cfcf7fcfcfcf7ffcffcfff7ffcfcffcf7ffffcff7ff7fcfcff7f7ff7ffccfcffff767ff7ffcf7ff7fcfffcf7ffcff7fcff7fffcff7ff7fcfcfcf7f7fc7f7fcff7ffff7ffcfcffcffffc7ffcff7ff7ff7fffcffffcff7ff7f7ff7f7ffcf7fffcfcf7ffcf7ffcff7f7ffffcffcf7ff7f7ff7fffcf7fcffcffcf7fcf7ffcfcf7ffc7ffcffc7c667fffcffccf6c6ffcf7fcf7f7ff7f7fcffffcff7fffcfcfff7fff7
        ff7fffffcffffcff7ffcfcffcf7fcffffcf7ff7ffcfff7ff7ffffcffcfff7fc7fcffccffcffcfcffff7fcfffcff7ffcf7ffcf7fcffcfff7ffcffffffffff7fcffc7fcfcf7ff7f7f7fcffcff7ffcffcffcf7f7f7ff7fcfcfcf7fcfcfcfffcf7ff7ffcf7ffcfcf7fffcf7ff7ff7fcffcf7ffcf7fffcf7ff7fcff7fffcf7ff7fcfffcf7f7fc6cc6fcf7fcf7fc7fcf7ffffffffcfffff7fcfcf7fffcfcf7f7fff7ff
        cfffcf7ff7f7ff7ffcf7ffcffffff7f7ffffcffcff7fffcffcf7c6fcf7fcffffffcfff7ff7ff7fcf7fffcf7ff7ffcffcfcf7fff7fcf7fcfcf7f7fccf7f7ffcf7fffcf7fcf7ffcfffcf7f7f7ffcf7ffcf7ffcfcfcffcf7f7fcfcf7fcf7f7fffcffcf7ffcff7fffcfcfcfcffcffcf7f7ffcf7ffc7f7ff7ffcf7ffc7fcff7fffcf7ff7fffcfffefcf7ff7ffcfff7ffcf7f7fcff7fcfcfff7fffcfcff7fffffcfcf6
        fcfcfffcffffcfffcfffcff7f7f7ffffcf7ff7ff7ffcf7fcfffcfcffffcfcf7f7ff7fffcffcffffcfcf7fffcffcff7ff7fffcfcff7ffcf7fffffcf7ffffcff7fcf7fff7ffcf7fc7ffcfffcfcf7ffcf7ffcf7ff7fcf7ffcff7f7ffcf7ffcf7f7fcfffcff7ffc7fcf7f7ff7ff7ff7fffcf7ffcfffffcffcf7ffcfffcf7ffcf7fffcffcf7fcf7ff7ffcffcff7fcfcffcfffcf7fffcff7fffcfcfff7ffcc6cfff6fc
        fff7fcff7fcf6f7ff7fff7ffffffcfcffcffcffffcffffff7fcf7f7f7ff7fffffcffcf7fcff7fcf7ffffcf7fcff7ffcffcf7fcf7ffcf7ffcf7fcfffcf7ff7fffcff7fcfcf7ffcff7f7fcff7fcfcffffcf7ffcfff7ffcf7fcfffcf7ffcf7ffcff7f7ff7ffcfffcf7fff7ffcff7ffccf7ffcf7f7f7f7fcf7fcf7f7f7ffcf7ffcf7fcffcf6fcfcf6ccf7ff7ffcff7fcfcfcfffcfcf7ffcfcff7f7fffcfcfcf7ffff
        7fffff7fffff7fcfffcf7ffcf7fff7fcff7ffcf7ffcf7fcfff7ffffffcffcf7fcf7c6ffff7fffcffcf7ffcff7fcfcff7ffcff7ffcffcfcf7ffcf7f7fffcffcf7f7ffcf7fffcf7fcfffcf7fff7ff7f7f7ffcf7f7ffcffff7fc7f7ffcf7ffcf7fcfcf7ffcf7f7f7ffc7ffcf7f7cf7ff7fcf7ffcfcfffcf7ffcffcfffcf7ffcffcfff7ff7c76f7c7c6cfcffcf7fcfff7ff7fcfff7ffcff7fcfffffcff7fffffcf7f
        fcf7fffcf7ffffccfcfffcffcfcfcfff7ffcffffcfffff7fcffcfcf7ff7ffcffcfcfcf7fcfcf7fcffcfcff7ffffcf7ffcf7fffcff7ff7fffcff7fffcf7fcf7ffffcf7ffc7f7ffcf7f7fcfcfcfcfcffffcf7ffcfcff7f7ffcffffcf7ff7f7ffcf7ffcf7fffcfffcfffcf7ffc6c6fcffcfcfcf7ff7fcf7ffcf7ff7fcf7ffcf7ff7fcfcf6cc6cfff6ff7fcf7ffff7fffcffff7fffcff7ffff7fcfcf7fff7fcffffc
        ffffcfcfffcfcfff7fcf7fcffff7ff7ffcff7f7ff7f7fffff7ff7fffcffcff7ff7ff7ffcfffcfff7fff7fffcf7ffcfcf7ffcf7fcff7ffcf7f7ffcfcfcff7fffcfcfffcfffffcf7ffcff7f7ff7ff7f7fcf7fcff7fcffcfcf7f7f7fff7ffcfcf7ff7ff7fcf7fcf7f7f7fcfcffffcf7fcf7ff7ffcffcf7fcf7ff7ffcf7ffcfffcfffcf7f7c6c7fcfcfcff7ffcf7ffcfcf7fcffcf7fcfffcfcfff7ffffcffff7f7ff
        7fcff7fcfcf7fcffff7ffff7f7ffcffcff7ffffcffffcf7fcfcffcf7fcff7ffcffcffcff7f7fcf7fcf7ff7ffcfcf7ffffcf7fff7fcfcffcfffcff7fff7ffcfcf7f7fcf7f7fcf7fcf7fcfff7ffcffcfcf7ffc7fff7f7ff7fffcffc7ffcff7fffcff7fff7ffcf7ffcffcf7f7f7f7ffcf7fcffcf7f7ffffcffcffcf7ffcff7fcf7fcffffcf7fff7ff7fcffcffcffcff7ffff7ffffff7fcf7fcfcffcfcfcf7ffffcf
        fff7ffff7fffff7f7fffcfcfffcffcff7fffcfcfcfcffffffff7fffffcf7ffcfcff7ff7fffffcffffcfcffcff7fffc7fcfffcfcffcff7ff7fcf7ffcf7ffcfcfffffcffcffcf7ffcffcf7fcfcff7ff7fffcfffccffcfcffc7ff7fffcff7ffc7f7fcfccffcf7ffcf7fcf7fffcfffcf7fff7f7fffcfc7fcf7ff7fcffcff7ffcffff7f7fcfffcfcfcffcf7ff7ffcf7fffcf7ffcf7fcfffcffff7fcf7f6ffcfcfcffc
        f7ffcf7fffcf7ffffcfcff7fcff7ff7fffcfcf7ff7fcf7fcf7fff7fcf7fffcff7fffcffcf7fcf7fcf7ffcff7ffcf7fff7f7ff7fcf7fcfcffcfffcff7ffcff7f7fcf7f7fcf7ffcf7fcf7ffcf7fcf7ffc7fcf7ff7f7fcf7fffcff7f7f7ffcfffffcf7ff7f7ffcf7fff7ffcf7fcf7fffcfcfffc7ff7fff7ffcffcf7ff7ffcf7f7fcfffcf7fcffff7ff7ffcffcf7ffcf7fffcff7ffcf7ff7fcfff7fcfcf7fff7fcf7
        ffcffffcfcfffcfcff7fcffff7ffcfffcff7fffcffff7fffcffcffcfffcfcf7ffcf7fcffcff7fff7ffcf7fcfcf7ffcfffffcfff7fff7ff7ff7fcf7fffcf7ffffcffffff7ffcf7fff7ffcf7ffcfcfcfffcf7fcffffcf7fcf7f7ffcfffcf7f7f7ff7fcffcfcf7ffcf7fcf7ffcf7fcf7f7fcf7ffcffcfcfcf7f7fff7ffcf7ffffcfcf7fffff7f7ffcfffcfcffffcf7ffcfcf7ffcff7ffcffcf7ffcfcfffcfffffff
        fcfcf7fff7fcff7fcffff7fcfffcfcf7fcffcf7fcf7fffcff7ffcff7fcff7ffffcfff7f7fcffcfcffcffff7ffffcff7fccf7fcffcfcfcffcffcf7ffcfcffcf7ff7f7fcffcf7ffcfcfcf7ffcf7ff7f7f7fffcf7f7f7fff7ffcfcfcf7fcffffffcfffcf7ff7ffcf7fffcffcf7fffcfffff7ffcff7ff7fffcfffc7ffcf7ffcf7ff7fffcf7fcfffcff7fcff7f7fcfffcff7fffcff7fffcfcf7ffcffcf7fcf7fcf7fc
        ff7fffcfcfff7ffff7fcffff7fcff7ffff7ffffffcffcff7ffcff7ffff7fffcf7fcfcfffff7ff7fcff7f7ffcf7ff7ffcfffff7fcf7fff7ff7ff7ffcf7fcffcfcffffcf7ffffcfcf7ffcfcf7ff7ffffcfc7f7ffffcfcfcfcf7ff7fcfcf7fccf7fcf7fff7ffcf7ffcf7fcf7ffcf7fcf7fcfcff7ffcffcf7fcf7ffcf7ffcf7ffcffcf7fffff7fcf7ffff7fffff7f7ff7ffcf7fcffcfcf7fffcffcf7fffffff7fff7
`)
myMenu2.onButtonPressed(controller.A, function on_button_pressed8(selection6: any, selectedIndex6: any) {
    
    sprites.destroyAllSpritesOfKind(SpriteKind.MiniMenu)
    if (selectedIndex6 == 0) {
        statusbar = statusbars.create(120, 5, StatusBarKind.Health)
        statusbar.value = 0
        pause(100)
        tilemap_1 = tilemap`
            level4
        `
        tiles.setCurrentTilemap(tilemap_1)
        scene.setBackgroundImage(img`
            666a666666a66666a66666a66666a6666a66666a6666a6666a6666a6666a6666b666a666b6666a666b666b66966b669666b6696a6696a6966b66966b66966b6966b6966b6966b6966b6966b696b696b6966b6966b6966b696b6966b6966b6966b696b696b696b6966b6966b66966b66966b6696a6696a66966b666b666b666b666b6666a66666a66666a6666a6666666a66666a66666a6666666a66666a6666a
                        6a666a6a6a66a6a666a6a666a6a696a6966a9a669a6966a9669a6966a9669a6a66a966b66a9a696a989a669a6a669a6a9a69a6696a6696a6a96a6a96a98a96a6a96a6a96a6a96a6a96a6a96a6a698b66a9a698b69a6a96a6a698b69a6a96a6a96a666a6a66a66a6a96a6a96a98a96a98a96a6a696a6696a6a66a9a66b66a966a98989a696a9a696a9a696a9669a6a9a669a6a666a6a666a6a6a666a6a666a666
                        666a666666666698966696a966986a66a66666a666a6a66a6a66a6a96a6a66966966a66a96666a6666669a6669a66666666a66a696a98969666966a69696a696669696a696669696a9696a96969a69a96669a69a6696a69696a96a6696a9696a969a96969a969696a6966696a96696a966a9696a69a6a6969a96669a69a66a666a6a666a66666a66666a666a68966666a66696a96696a6966698966669a66a6a
                        6a669a6a9a6a98a6a6a6a666a6a666666a6a6669a666696666696666666698a6a6a696966a6a969a9a9a666a6669a9d9a966969a66989a6a6a9a69698a6966a9a6a6a696a9a6a6a966a6966a6a6698989a669a669a696989a666969a6966a6966a666a6a666a6a696989a98966a6a666a9666a69666966a6666a6a666669669a69669a669a6a696a6a666a66986a6a6666a6a666a68666a6a6a6a6a6a6666669
                        666a666666666666666666a66666a9a69669a6a666a98a6a9a6a6a6a6a98a9669666a6a669666a6666666a969a69d1dd19b6a666b6a989669666a6a696a6b966969696a966969666a966a969696a96a9669a669a696a6a98969a6a696a696a6a969a96969a96969a6a966a989a96969a669a966a69a6a969a696969a6b6a6a666a6a669866966a66969a696a6a96669a696666a6669a66666666666666a6a6a6
                        a6666a6a66a6a6a9a6a9a666a69a666a6a666666a966696666669669666966a66a96666a6a69a696a9a6966a69d1d9111d696b9a6966a6b6a9a96969a96986a989a6a966a989a9a9669a96a6a9698966a9a69a696a696969a6a9696a969a69696a696a69a696a98966a9696a966a6a696a666a96989698989a6a6a6696a6966b696698a9a6a666986a666a669689a666a6a66966a666a9a6a69a6a6a98966666
                        66a666666a669666666666a966a6666666a6a9a666a6a6a6a9a6a6a6a9a6a696a66a9a9696a666a66669a696b91d11d969a6b6669a6969a96666a9a666a9696a966966a9669a6696a966696966a9a69a9696696a969a6a669696a96989896a98969a696a966a96a9a966a696a699919a696b966a6b6a69a66696696a6696a696a6a6a9666966b6a966696698a66a66a66669a89896a6666698666696898a6a6a
                        669a6a9a6698a6a6a6a6a966a666a9a6b6966669a669669666696696666696a69696666a66969696b9a66a66111191119a696a9a669a6666a9a96669a966a96989a6b9669a6969a696a9a6a9a9669a696a69a6966a96969a9a696a6a9a96969a9a696a9669a9696696a969a6119bdd919b66a9696969a669a6a96a696a6698a69696666a66a96666a9a6a6a966966966a98666a6a669a6a66a6a98a66a666966
                        6a6666666a666669669666a669a666666a6a69a6698a6a66a986a66a96a98966a6a6a9696a6a6a6a666969a9d1911d1d191a96696a69a9a96696a9a696a96a9a969a669a696a9896a969696696b9696a969a96a9966a9a9669a6969696a9a6a9696a9669a696a69a999b6a999d11911d11996a6a6a6696a69698966a969a6966a66a9a969a66a9a666669666a6a6a6a966a9a69669866698966666698966a66a
                        666a6a6a669a69a6a66a66698669a6b696698666a696969a669a9696a666a6a9696966a66969696969a6a661911d19119d999a9a969669669a6969698969a966a9696b69a969a96969a6b6b9a69a6a969a69696a6b96966a969a9a9a69669696a69669a969a999a6939d199dd9d1d91916bb9696969a6969a6a989a66a669a6969a6666a66966669a9a6a6a966966666a66666a6a6a9a66a6a6a9a6a66a666a6
                        9a6966966a666a6666a69a6a69a6666a6a66b6a966a6a6669a666a6696b69666a66a696a9a6a6a6a6a9999d11d1111d119d9b9966b6a9a9a69a6a96a9a966696989a96b69a696a9a96969a969a69696a969a6a9969a6a996a9669669a9a9a9a969a9a96a9691d19911d191d11191d1d1d996a9a6a969a6a69669a696969a669a66969a696a6a9a69669669666a6a9a6966b6a96669666a69669686666a69a666
                        666a66a66989a666a96666698666a969669a6966a96696a9896a969a6a96a9a969a96a9666969696966b19d191d91d191d99b9a969a9666969696a9696a9a9a9a966a96b69a69696a9a696a9696a9a969a69969a96996a969a9a69a966969669a9696a969a191d1d9d91d1919d191919d9d999699a989696a9a696a9a6696a669a6a696a6969696a9a69a66a966666a6a98966a6a66a6986a6a69a69a66666b6
                        a666a669a66a669a66a9a6a69a696a6a6a666a6966a9896a66966a6696669896a666966a9a6a96a96a96d9d111111911d9b9a696a9669a9a6a9a969a696966966b9a969a969a9a69669a9696a969696b696a9a69a6a969a96969a969a9a9a9a966a9696b619d9b9b9d191d1d1d1d9dd9dd1dd9d9b969a9a96696a96669a6969a66966a696a66a69669a66a966a96a96666a6a696698966a9666666a6669a66a6
                        69a696a666a698669666696a66a66966969a966a696a6a696a6a969a6a9a698969a98b966969896a966b6b91d91d11d1116a96a9669a966996966969a9a69a9a96696b696a96969a9a969a9a96b9a9a96b969696996b969a9a9696a969669696b969a9a999d6b696a96b99b99d9d9d919d99d9dd9b9b6666b6a966a9a69a6a696a6b9698969a96a6b669666a966a669a969696a6a698a966a69a6966a666a696
                        a666a666a9666b6a6a9a6a696969a6a6a6666a96a696969896966a6969669a6a966696a9a69a9a9669b969d111d9191196969696b9a96b9a6b6b9a69669a96969a9a969a969a9a96969a96969a9696969a96b9a9a69a6b6969a9a969a9a9a9a96b9a9696a9b969a969a96a96a969a9b9a9b9dd99d999a9a96966b9696966969a999a69a989898969a69a9a966a969866a6a66a6966a966a666a66a669a669866
                        66a9669a66a96a969666966a6a66696969a969896a6a6a69a6a9696a6a9a696989a9a69669a66669a99a9a11911111d91d9a9a69a969a96969a969a9a9696a9a96969a969a96969a9a969a9a969a9a9a969a96969a9969a9a96996b969696969a96969a9696a9a96b96a969a96a96966969a96d9d9b99969a9b96a989a9a6b666a696a66b6b69a669a96d989666a69a96696a966a966a6696966989a666a69a6
                        a966a666966a666a66a6a96969a9a6a6a66a6a969696969a696a6a9696696a69a69669a69b969b9a9696911d1d191d11dd1199b969a9619a9696a96969a969696a9a969a969a9a96969a96969a9696969a996b6b969a969699ddd19a9a9a9a9696b6b969a9a96969a96969a96996b6b9a9696a9a9b9a6b9a969a9669a66969a9696a96969a6989a661919d9a9a9698989a66666966a6966a6a6a6a666a96a666
                        98989a9a6a969a969a9666a6a66669696969698a6a69a6696a969699a116a96696a9a696d9a99a966ba9d1911911d1911191d119a969d911b6a996b6b96b9a9a99696b969a96969a9a969a9a969a9a9a969b99b9a969a9a9a19191d1996969a9a99a96a96969a9a969a9a969a9a99a969a9a969696a996a69a696a9a969a966b9a996a9a696a9669d9ddd196666a69a669a9a9a6a696a6966969696a966666a6
                        a6a96666966a666a6669a96969a9a6a6a6a9a69969a69a9a696a96a9111119a9a96969a99b9d9699a96d111d111d111d91d9d9d9d99d9dd9119b69a96b96b9696a9a96b9a969a9696969b96969a9696969d939199a969696191d1d91d19b9b9696969b9b9a996969a96969a9696a969a96969a9a9696a996969a96966b6989a99d6d96696a966a99dd19d9b9a9696a69a666666966a698a9a6a6a6666a6a9696
                        9666a69a6a69696969a666a6a66696969696698a969669896a96696a919191199939d119b969b939999d191191d19191191d19d19dd9d91111119b99a969a96b9969b9a969a99b9a9b9a969a9b969a9b9bdd1dd9d9b9a9b99d191d191dd999a9b9a9a96969a9a9b9969a9b969a9969a969a96969a9a969a9a9696a9a969a9696d9a96b9a9669a9b9d9d19166989a6966969a9a6a9696a966669669a96696a6a6
                        a69a96a6966a6a6a6a69a96969a96a69a6a9a696a989a96a969a9a9696d1d1d11d1d191d11dd9d9b9b11d1d9d1911111dd9919d119d9d9dd19d1119b96b969a96a9696969b969a9969a969a9969a9969a919d9d9d969b96bd1d191d1919d9a969a9969a9a969969a9a9969a9b969a969a969a9a96969a9669a9a96969a96b9b9d99b966669a96919d19dd9a9a9896a9a6a6669666a66989a9a6a666a6a669666
                        96a66696a6969696969669a6966a969a69669a9696a96a969a69666a9a96d19d11911d11911dd16d9b91191d9d91d1d191d1d9d919d9b9a9699b9d969a9a969b99a9a9b9a969a969a9969b9b9a99b9a999d9d9dd9a9a9699a9191d91dd9d99b9696b9b999b9a9a9699a9a9969a969b969b9a96969a96969a96696a9a9669a9d9a9b6a9a99d69dd91d9d919966d9b96696969a69a969a698989696a96969a6a98
                        a969a6a696a989a6a989a696a9696a6969a9669a696a969a9696a996969a99d91d11911d1d19119d911d1d9119d9199119d91d9dd9d99a969a969a9a9969b9a9699b969a99a9969b969b9a9699a9699b9b99b199b9699a9b99d1d1d1919d9b99a99a99a69a99699a969969a969b9a9a9a96969a9a96b9a969a9a96969a96969a9696969a99a191d9dd1d9361d91d919a6a9896a69a696a966a66a96a6a666669
                        66a69696a966a96966b696a96a9a969a696a9a69a96969a969a969a9a6966a91d1911d1911911d1dd1d1911d919d9d9a99d19d91d99a969b969a9969b9a9969b9a969a99699b9b99a9b9b99a9b969a9dd91d9d9a99a999b961919191d9d9d9d99b99a999b969b9a99b9a9b99a969969969a9b969969a969a96969a9a969a9a969a96a969a99d9d919d9d91d9dd9ddd9d969a6969896a6989a9696669669a9a6a
                        9696a6a966a966a69a96a96696669a69a696969699b9a969a696a9669a9a9969911d191119d191d1191119111d9d9d9d9b9b19d9b9b969a96b99a9b96996b9a969b9b9b9b9a969a99b969a9969b9b911d1d1dd99b99dd9ddd1d1d1d1d9dd19dd99a996b969b9a9969a99b9699b9a9b9a99969a9a9a996b969a9b96969a96969a69699b996d9d1dddd91dd9dd91d919d99a696a96a9696a9666a6a9a66a666966
                        a6a969669a969a96a9696a9a9a9a696969a9a6a9d1d99b9696a969a969696a9a69d1111d19d9d9911d99d1d9119dd99b9999a969a969a99699b96969a9a99a99b969a969a99b9b969a9b9969b9a99dd919191d119dd91d9191919d1919d9d19dd99b99a9b9a9969b99b969a9a9969a996a9a9969b96b99a9b969a96b969a9a969a9a9da99dd9d9191d919191d9d19ddd996a96a966a6966a96969669a969a6a9
                        6966a9a9669a696969a6969669696b6a96969999d1ddd9da999a969a9a9a9699a99d91d19d9d9dd999dd91d1d1d99b99a9a969a996b99b9bdd91ddd9969b99699a9999a99699a99a9999a9b9b999b11d1d1d919dd91d1d1d1d1d191d9d91d19d9d9b9b99b9969b9a9a96b99b96b9b96999b96b9b969a96969a96969a9a96969a9696999dd91d919d9dd9ddd9d9d9d99d9d969696a969a696a9a6a9a666a69666
                        a9a966989a696a9a989a9a69a9a9a9969a9a6a9d1d191119d169a969696969a969a9d1919d9d9a99ba99b999d9d9d9a969b9b996b99a969d911d191dd9b969a9b9b6b99b9b9a9699b9a99b999a9d1919191d1dd91d19191919d191d19d1d9d9d9d9999a99a9b9b9999b99a99a99a99bbb969b9a969d9b9a9b969a9b96969a9696b6ba9a91d9d1ddd191d9191d9dd9dd9d9db6a9696a969a966969669a96989a9
                        66969a69a96a9696a96969a9696966a9a9696961d9111d1119d969a9a9a9a969a96969b9d9d999b96969a9b999b9a969b96969a99a969a111d191d1919b9a99b9699b9a99a999b9b9b9699a99d91d1d1d191919d9d91dd1d1d191d9d9d911d9d9dd9399b999b99a9b99a99b99d99b9996b9a999b9391999b96b99a969a9a96b9a99969619d19d99d9d91d9d9dd919d9d9d99a96a6966a6669a6a69a6696a9666
                        9a6a69a966969a6969a9a969a9a69b9696a9a9a9111d191919da9696969696b969a9a99a9b9a9a969a9b969a9a969b9a99a9b99a99b999d91d11d91dd99b9b99a9b9a99699b9b9b9969b9b9d9d1d91919d1d19d9d9d91919d91d1d19d9dd91d9d9d9d9d9b9a9b99b9a99b99a99d99b9a99b9b969b91ddd99b99a969a969969a969a69a9d9d9dd1d91d9d9d1d919dd9d9d9b96699a9a9969a969698969a6989a9
                        a96969669a9a969a969696a96969a96b6996969d11911111dd999a9a9b9a99a9a9969a96996969b9a9969a9699b9b969b999a99d996b9d1119191119d9b999a999b99b9b9b99699a9b9b99d9d1911d1d1919dd9d9d9d1dd11d19191d19d91d9d9d9d9d9d99999a9999b99b99b9a9d9b9b99b9a9b19d9193d1d99b9969b9a9b969a99b9191dd9199d9d9dd9d9d9d9d9d9d9a69a696696a9a96a9a96a9669a6966
                        69a9a69a96969a96a9a9a969a9a969a99a9a9a99d11d19d191d9b99696969a96969a9969a9a9b969969a999b9a969a996b699b9ddd19b19d11d1d1d19d9b9a99b99a999a99a9b9b999b9b9d1d1d19191d1d191d1d19d9191919d1dd91d1d9119d9d9d9d9b9a9b9b9a99a99d9a999a9999b1999b91d1dd9d9d91d9b9a969969a9696a99dd9d91ddd9d9d9dd9d9dd9d9d9d999a96a9a9696669669896a9a696a6b
                        966969a96a9a96969696969a9696b969a96996d99d191111d1119d9d9a9a9699b9b969b99b969a9b9a99b9a9699a99b99b9a9911911d1d11d191191d99b9b969b9a99a99b999b99b9a999d1d9191d1d919ddd19191d1d1dd1d1d911d919d19dd9dd9dd9d999b999b9b99b9a999b99b9a99b1dd919d919d191d9d99b99a9bd969a999d9d91d9d99dd9b99d9d9d9d9d9d9d93999d9696a9a9a9a96b969696a969a
                        6b9a9a969696a9a9a9a9a9a969a969a969a9b9dd1d111d911919d9d9d999b9a969a9b9a969a99969b9b9699b9b99b96b99b99d1d11d19119111d119d199a999b999b99b99b9b9b9b99b9a91d1d19191d1d9b91dd1919d919191d19d1d1d9dd91d9d9d9d9db99a9b999a9999b19b9d99b9b999d1dd19dd9d19d9d9b9699b99d9d9b9d9d1d9d9ddd91d9a969b99d9dd9d9d9d9dd9d9a969699999a96a9a6966a96
                        9a69696a9a99696969696969a969a969a9699d91191d911d1d19d9d9d9b9699a9b96969b9b96b9a9969a9b969a969b9939dd1d1191911d1d919191d9d9b99b9b9a99b99b99a999a99b999d19191dd1d91d9bd9d91dd11d1dd191d1919d119d919d9d919d9d9b999b9b99b9b9b99b9dd999b9b19d9d19d19dd9d9d9a9a969a9d9d99b9d9d9d9999d99b96b9a9a969a9b9d9b9d9d9d99d9d9b9b96a9669a69a96a
                        969a9a9696a9a9a9a9a9a9b969a9969a99a9a91d1111111911d9dd9d9d9b9a99699a99a99699b99b9a9996b9b99b99a911191d91111d19191dd119d9d99b9b99b99b9b99a999a999b9db9d1d1d191911d9bdbd91d19d919191d91d19d99d9d9dd9d9d9d9d9d9b9b999b9d9999a99dd1dd9d9d91d19d19d9d9d9d99969b9a99d9d9b9d9d99b9b9a9a969b969696a9696b9a9d9b9d9d9d9d9dd9a969a969a96696
                        9a96969a996969696996969a9696b9a969999111d91d1911d1919d9dd9d99b969a99b996b9a99a9699b9a99b9b99a99d9d911911d91191d19d99dd9d9d99b9a99b999a999b9b99b9999b91919191d1d9ddb9dbb91911d1d1d91d19d1d19d9dd9d919d9dd9d9d999b9a99b1ddd9b999d91dd9dd91919d91d9d9d9db9b99a999d99b999b9a99a9b9699a96b9a9a9969a96969a969a9b9b9d9b9696b696a969a9a6
                        969a9a969a9a9a9b9a9a9b969b9b9699b9a1d1d9111911d1911d9d9d9d9d99b9b9b96b99b99a99b9a9999b9969a99b9d9d91dd9d11d1191d191d9d91d939999b99a999b9b999b99bdb9d1d1d1d1d91d19b9b9b9bb1d919191d191d1919d9d9d9d9d9dd9d9d9ddd9b99b99b919d9ddd91d9d191dddd1dd91d9d9d999a9699b9a9a9b9a969b96969a969a9696996b9a99a9a996b9696a96a96a9a969a969a69696
                        b9696969a9699696969969a9b9a969a9696919111d11d1111191d919d9d9399b9969b9a99a99699b9b9a99a9b99b999d9d9d9d9d9119119d19d9d9d9d99b9a99b99b9b999b9d1dd999b191919191d19dbddb9db9c6d1d1dd191d9d91dd9d9d919d9d9d9d9d9d99d9b99b99ddd9d9d1d91d9d191919d91d9d9d9ddd999b9a9699969a99b969a9a996b9969a9a9a969696996a99a9a996969a9696b969a9696a9a
                        9a9a9a9b969a9b9a9b9a9b969699a999a9b9d1d191191191d1d9d9dd9d9d9d99a9b9b99b9969b9a99969b9999b99a9d9d9dd9d911d11d1d1919d19d9ddd999b99b99b9b9b9dd919d9391d1d1dd1d911d9b9db9db8c89d9191dd19dd9d9d9d9d9d9dd9d919d9d9d9d9d9d9b9911d19d91d91ddd9dd91d91d19dd99ddd9b9969b9a99969a9a996969b96b9a9969969a9a9a9969a9696b9a9a969a96a9696b69696
                        969696969a9969a99a96969a9b9a9b99999b19111d11d1d1919d911d9d9d9d9d99a99a969a99b99b9a999a9a99dd99d9dd919d9d19191d11d11d91d9d99db99b99a999b99dd11d1d1d11919d9191dd9bdb9bdb9d66c6b9d1d9191d9d9d9dd9dd9d9d919d9dd9dd9d9dd9d1ddd91d191dd19191d1919d19d9d9d9d999b9b9b9a99a9a996996b9b9a9b9a9969a9a9b996969a96969a9696969b96999a9a969a9a9
                        a9a9b9a9b96b9a969969b9b99a9969a9393919d191d19119119dd19191d99d9b9b96999b99b99a9999b9b999b111d9d9d9d91d19111d19191d11d919d19d9b9d9b9db99bdd9191919191dd11d1d191b9b9db9db9bbd6cb6d1d1d19d9d9d9d9d9d9d9d9d9d9d919d9d9d9dd9119d91dd919ddd919dd19dd91d9d9d9399b969b969969b9a9b99a996969969a9969969a9b9a99a9b969a9a9b969a9a6969a9a9696
                        9696969b69b9699b9a9b9a969969b99b99dd19d111911d19dd9d91d9d9d9319a999b9a99a99a99b9a99a99b99d191dd19d9d91d11d9111d119191d9d9d1d99d9d9d99b99d11d1d1d1d19d99d9d9d19dbdb9db9bdb9b6b6b689d911d9d19d919d9d9d9d9d9d9d9d9dd9d9191d91d19d19d1d91d91d9dd91d9d9d9d9d9b9b9a99b9a99a9969a9969a9b9a9b969b9a969969969969a99b9969a9a9699a969696b6b
                        9a9b9a99a99a9b9699b9699b9a9b9a99a999dd9d1d11919d9d919d919d9d99b9b9a999b99b99b99b9b99b9b91d1d19111d919d19111d91191d1d91d9d919d9b9d9d9d939d9191919191d9dd9d919dd9b9db9bd9b9bb6b6b6cb119d19d9d9d9d9dd19d9dd9d9d9dd919ddd191dd91d91d191d91d91d91d9d19d9d9d99b9999b9699b9969b9969a999a9969b9a969b9a9a9a9a9a99696b9a96969a969a9a9a99a9
                        699a99a99699b9a9a969b9a999b969b969a961d91191d9d919dd19ddd9d9d999699b9a9b99b99a9999b999b1d19111d911d9d11d19111d1d1919d9d9dd9dd99d9d9b199d11d1d1d1d1d91d911d19db9db9db9bdbd9b6b6b6b69d191d9d9d9d9d99d9dd9d9dd9d9d1d9d91dd911d91d919d91d91d91d91d9dddd9d9b99a9a99a9b969a9b9a9b99b69969a99699a9969969969996b9a96969b9a996b9696969696
                        9a9696969a9a96999b9a9996a99a999a99b9d9d1d1d19d9d9d919d9919d99a9b9b99b999a99a99b9a99a9b99d11d9111d911191911d91919119d1d9d9d9d9d9d9b99b1dd1919191919d1911d91919bdb9bd9bd9b9b6b6b6b6c9d1d191dd9dd9dd9dd9d9d9d9d9d9d91d9191d9d91d1ddd1d91d9dd91d9d19191ddd9b99b96999a9b999a9969a99a9a999a9b9a969a9a9b9b9a99a99b9a9b96969a969a9b9a9a9
                        b99a9b9a99b999a969b96b999b99b969b999dd1911919dd9d9d1d9ddd99399b9b9a99b9b99b99b999b9999a99d911d9111d1d11d1d11119dd19d9d919d9d9dd9d9dd9d91d1d1d1d1d19d1d911dd1b9b9db9bd9bd7d6b6b6b8c9d9191d19119d9d9d919d9d9d9d9d91d1d91d191d19d919d9d9d191d9d19dd9d9d999b9b99b9a9999a96969b9969999a96996999b99b9969a969a969699969a9b99b9a99696969
                        6b9969b9b996a99b9a999b9a99a99a999b939111d11d19d91d9d91991d99b99b999b99a99b9b99b9b9b9a99b9911d111919191d19191d9d9d9d9d9d9d9d9d9d9dd191d1919191919191d91d91919bddb9dbd9bd9bd6c6b6b6c9d1d1d91d191d91d9d9d9d9d919d9d19d91d9d19d91d9d191dd9dd9d19dd919d9d9d9a99a99b9b9a99b9b9b9b9a9a969b9a9b9a99a996b9b99b9969a9b939a996b69696b9a9a9a
                        99a9b9969a999b9699b9a999a99699b9a999d1919191191d9d9d9ddd9dd9b9a9b9b9b999b999b99b999b99b99d9d91911d111d91111d19d9d9dd919dd9dd9d19d9d1d191d1d1d1d1dd91d1d1d1db9b9db9b9bdb9b9c6c6cb6bb919d1d91dd91d191d9dd9d9d9d9d9d191d191d1d191d91d919191d9dd91d9dd9d9d9d999b999999b9699a99699969b99b99699a996b99a969a9b9b9d9d9996b99a9b99a969969
                        b9699a9b99a9b9a9b99b9b9b99b9b99b99b9d1d11d1d1d19d9d9191919d99b999b999a9b9b9b9b99b9b99d9b9d99d11d191d11119d1919dd9d9d9dd9d9d9d9d19d9191d191919d19d91d191919d9dbd9bddb9d9bdb6b6b6c6b6dd19191d911d91dd1d19d919dd9d19d1d9d19d9d9dd91d9dddd19d191d9d19d19dd9dd9b9dd939b9939b969b9a9b99a996b9a9969b9a999a9969b9d9d9d9a99a999a9699a9a96
                        9b9a999a99969999b9a999a969b99a99b99dd19111911919d9d9d9d9d9d9b9b9b9b9b99999b9993d999399b99b9391d19119191d1191d191d9d19d9d9d9d9d9dd91d1d191d1d191d11d91d91d1bdb9bd9b9dbbd79bb6b6b6c6c9191d191d9d1d91919d119dd9d9d9d191d91d191d191d919d919d9dd9d19dd9dd9dd9dd9d9d9d9d9d9999b9b99b9a996b99b9b9b99b969b99b9b99dd9d9d9b996b969a9b9699a
                        99b96b99b69b9a9b999d9999b99a99b99a999d1d911d11d9d91d9d9d9d9d999999b99b9b9d9b9d91db99d9939d99d1911d1d119191d11d1d9191d9d9d9d919d19d91d91d19191d19d91d911d9d9b9db9bdb9d9b9d6b6b6c6b6bb9d19dd191d91d9d1d9d9d9d9d9d9ddd91d9d91d9d19d1d9d9dd1d91d9d9d919dd919191d9dd9d9d9bd9399a96999b999a99969b9a99b99a9969d9d9d9b969a99a99b9969b9a9
                        699a99a999b9b9969b11ddd99a99b99a99ddd9111d191d1d1d9d9dd9dd9ddddd939b99b99399dd19d9d9dd99d9d9d11d191191d1d11919111d19d9d9d919dd99dd1911d91d1dd91d1d911d911b9db9bd9b9bb9dbb6b6b6b6cb66d91d191d191d91d911d1d19d9d9d191d91d1d91d9d19d9d919d91d91d9d9d9d9d19ddd9dd9d9dd9d9d99d999b9a99b9a99a9b9969b99a9969bd9d9d9d99b99a996d9a9a9699b
                        9a99b99b9d9a9b9b91d111dd99b99b99b999d1d91911191919d9d919d919d99d99d9b911d9bd911d9d9d9dd9d9d9d99d11d1d1d191d1d1d9191d9d1919d9d9d9d91dd911d91911d911d9191d9db9bd9bdb7d9bd9c6b6b6cb66b6dd919d19d191d919d9d99d9d9dd91d91d9191d91d9dd9dd9d19d9dd9d9d9d9d9d9d9d9d919d9d9d9d9dd939b9b99b999b99b9a9b99a9969b99d9d9d9939b9b99b99b999b9a96
                        99b99a99b99999b9d1919119d99b99a99b93191d9d9d911d1d19d9d9d9d9dd9ddd9111d1d9911d19d9d9d9d9d9d9d9d99d919191d9d91d11d1d91d1dd9d9d9d9d919d9d91d1d191d9191d19db9bd9bdb9d9bdb9c6b6c6b66bcb6b91d19d19d19d9dd919dd9d9d91d91d91d9d91d91d91d91d9ddd91919d9d9d9d9d9dd9dd9dd9d9d9d9d99d99b9b99b9a9b99999b969b9b9b939d9d9399d999a99a999b99b99a
                        9b9a99b99b9b9a999d11d1d19d9b9b99b9d1d19d9dd91d19199d9dd9dd9119199d19d191d1d1d911d19d9d9d9dd9d9dd91d11d1911119191d911d919d9d9d9d91d9d9d9d91919d1d19d9dd9d9bdbd9b9bbdb96b6b6c6b6cb66b6bd91d191d19d9d9d19d919d9d191d91d91d1d91d91d91d91d919dd9ddd9dd9d9d9d9d9d9d9d9d9d9d9d939d99b9b9a9999a9b9b9b999d9d99d9dd9d9dd939b9699b69d9d69a9
                        9999b99a99b199b9b1d19191dd99b9b99b991d9d919d9d111dd919d9d91d1d9dd9d91d1191d111d19d9d9d9d9d9d9d9d91191911d9d1d1d111d911d191d919d19d9d919d9dd9d919d9dd91d9bd9db9db9b9d6cb6c6c6cb66bc6b6dd919d19d1d19d9d91d9d9d1dd91d91d919d19dd91d91d9dd9d91d9d919dddd9d9d9d919d9d9d9d9d9d99b9b99999b9a9999b999a9b9d9a9dd9d9d9d9d999d9b99b9a9d999b
                        9a9b9b99b99b9b99991d111111d9999b99b911d9d9d9d19d19d9d9d9191d9d9d9d1d99d1d191919d19d9d9d9d9dd19dd1d1dd1d91d9191919111d9191d1dd9dd19d91d9dd91d19d19d9d19dd9bd9bdb9b6bbb6b6b6c66c6c6b6a6b91d1d91d919d9d9d9dd9d19d91d91d91dd9dd91d9dd9d191d9d9dd9ddd919dd9d9d9d9d9d9d9d9d9d9d9b9d9a9a9999b9a99dd9d99d9d919d9dd9d9ddd9399b9a9999d9b99
                        b999969b9a99d9b9b9d191d919d9bb99b99b9d111d9d19d9119d91d9d1d9d9d9d919dd99d111d119d9d9d9d9d9d9d1191919191d9d91d11d19d911d119191d9d19ddd9d9d191dd91d9d9d1b9bdb9b9db6c66b66b6c6cb8b6b8b6b819d91d91dd19d9d9d9b19d191d91d91d91d91d91d91d9d9d91dd919d919d9d91dd9d9d9d9d9d9d9b9d9b9d9d999b9b99b9b96d9d9b9dd9dd919dd9d9d9d9b9d99d9b99b9d9
                        9a9a9b9999b9a9dddd11d111dd9d99b9b9b9999d9119d9d19d9dd9d91d11919d9d9d9d9d99d919119d9d9d9d9d9d99d11d191d99d9d919d19111d919d1d1d9d99d919d919d191d1919d9d9db9b9bdb9c6f8c6c6cb6b66c6b6c6c6c61d191d919d9d9d9db9b19dd91d91d9dd91d91d91d9d191dd9d9d91d9dd919d9d91d9d9d9d99399d9d99d9d99b999d9d999b99d9dd9d9d9dd9d9d9dd9d9d9d9b9939a99b9b
                        9999b9b9a99911191191191919d9b99b99b9b939d91d9d9d91d9d9d911911d1d919d9191dd91d19d9d9dd9d9d9d9d9d99d9dd19d9d9d91d1d19d11d1d919119dd1d91dd1d19d191d9d9d9db9dbd9b9b6c6c6c6c66b6cc6c6c6c6b8c99dd91dd9d9d9d9b9dbd191d91d9dd91d91d9dd919d9d9d9191dd9dd91d9ddd9d9d9d9d9d939d9d9dd9a99399b9a9d99b9d9b9d9d9dd9d9dd9d9d99d9b9d9d9b9999b99d9
                        b9b99b9b9b931911d1d191d1d9d9d9b9b9d9d99d9d9d9d9dd9d9d9dd1d1d1911d1d19d9d91d91d1d9d9d9d919d9d9d9d9d9d9d9d9dd9dd9191d19199d9d1d91991d1d919191dd1919d9d9b9bd9bddb78c8c66b8bc6c6c6c6c6c6c6c6d91d919d9d9d939bd9b9d91d9d19d9d919dd919dd91dd9ddd99dd919d9d9191d9dd9d9d9d99d9d9d9b9d99b9b9999bd99d9d9bd9d9dd9d919d9dd9d9d99b9d9b9b9b9a99
                        9b9b99b999d11d191911d119d9d99b9d99b9939d9d9d9d9d9d91d9d9191911d91d91d91d9d9d9d91d9d919d9dd919d9d9d9d9d91d919d91d1919d1d1919d1ddd191911d91dd919dd9d9db9db9b9b9d6c8ccc6c66b6b68c8c6c6b8c8c9d9d9d19d9d9dbd9bdb9dd91d9d9d91dd9191d9d19d91d919dd919dd9dd9dd9d9d9dd9d9d939939d9d99399b9bd9399b939d9d9dd9d9d9d9d9d9dd9d9dd9d9d9d9b999d9
                        bd99a99b9b19191111d9119d9d9d9d9939d9d99b9dd9dd919d9d1111d111d111911d9d9d9d919d1911d9d9dd919dd9d9d9d919d1d9d19d9d9d9d9d9dd1d9d9191dd19d1d911d91d19d9d8c6bdbd9bd6c6f6c6c6c6c6cc6c8c8c6c6f66d91d9dd9d9b9b9b9b9bd9d91d9d9d9d9ddd9d19dd9d9d9dd919dd9d9d919d9d9d9d9d939d9d9d9d9d999b99b99b9d99d9d9d9d9d919dd9d9dd9d9dd9d9d9d99b99b9a99
                        d9dd9b99b111d11d9111d19dd91d9b9d99d9dd9dd9d9d9d9d9d9d9191d919191dd919d9dd9ddd9d1d919d9d9d9d191d9d9d9d9d91d9d9d1d19d9d9d99d1911d1919d19d1d9d1d919dd9b8c66b6db9bb6c6c8c6cc6c6c6f6c6c8cc68c6b9d9d9d9ddbd9bdbdd9bdb199d9dd19191919d9d91d91d9d9d9d9d91d9dd9d9d9d9dd9d9d9dd9d9dddd9d9b9b9999399d9dd9dd9dd9d9d9d9d9dd9d9d9d9939d9d9b9b9
                        9d9999b99d9119111d9191d9d9d9d9b9d9d9ddd9119d919d9d91d91d11d1d1d1911dd1919d99d99d11d9d9d9d9d91d9d9d9dd9d919d9d991d9d9d9d9d191d919d1d91d91919191dd9b18c8c6b9b6db6c8cc6f6c8c6c6c8c8f6f6cc6c6c8c99d9d9b9bd9b9b9b9b6b9d9d9d9ddd9dd9d19d9dd9d91d9d9d9d9dd9d9d9ddd9d9d9dd9d9d9d999d939d99b9b9d939d9d9d919dd9d9bd9dd9d9dd9d9399d9d9d999b
                        9dd9b9b9b11d1d191d1d19d9d9d9d99d9d9dd91191d9d9d9d1d91d919919191d19d919d1d9d19dd9d91d91d91d91d9d9d9d91d9d9d9d9d9d9191d9d9d9d191d1d91d91d1d1d91d9bd88c6f6bbb9bd9b6c6f6c8c6f6c666c6c68c6f8c6c6c8cb99c9b9bdb9dbdb9b6b9d9d91919dd919ddd19d9dd9dd9d9d9d9d9d9dd99dd9dd9d9d9d9dddd9d99d9d9b9b9d99d9d9d9dd9d9d9b9bd9d9dd9d9d9939d9d99b9a9
                        999dd99b9191911d1919d9d9d9d9d939d9d9111d1d11d9d9d91d11d1d1d1d9d9d911d9d919d1d9d991d11d191d19dd9d9d9d919d9d9d9d9d9d9d19d9dd191d9d1d91d19d9d91d1b9db6f68c66db9bdb6f68c6f6c6c6cc6c8cc6f6c6c86b8c88d6cc9bd9bd9b9d6b6b6d9dd9d9d91d9d9d9d9d9d9d9d91d9d9d9d9d9ddd9d9d9d9d9d9d9d9939b9d9d9d9d9dd9d9dd9d9d9d9d9bd9b9d99d91d9dd99d9bd9b99b
                        9a99dd99d1111d919d9d19d91119d99d9dd1d191919119d911d191919199d9d9d9d9d9d9d919119dd19191d191d191119d9d9d19d919d9b9d9d9d9d99d91dd19191d9191d1d91b9bb8c6c8cc8d9bd9b6c8cc6c8f68c66c6c6c6c8cc6c6c6c6c6c86c6bd9bdb9b6b8c8c99d9d9dd9d9dd919d9d9d919d9d9dd9d9d9d99d9d9d919d9d9d9d9d99d9d9b9d9d9d9d9399d9d9d9d9b9bb9b939dd9d9d9dd9d99b9b99
                        b9b9d9d9dd91d11d19d9d9dd9d1d1dd9d9d191d111d19dd1d191d1dd1d9d9d919d9d919dddd1d1d191d1d91d191d19d1d9d9d9dd9ddd6b8d9d9d9d9dd91d9191dd91d91d91919db9b6c8c6f6f9bd9b9b6c6f6c6c6c6cc6c8ccc6f6ccc6c66cc86c8c6bb9b9dbd8c6c68cc9d9d9d9d9d9d9dd9d9dd9d9d9d9d9d9d9dd9d9d9d9d9d9d9dd9d939d9d9d9d9d9d9d9d9d9d9d9d9bdb9db9bd9d9d9d9d9d9d9b9a69b
                        999b9d9d911d1919d9d9d9d9d9d9191d9d191d191d91199191d191999d9d9d1d9d9dd9d19999191d19191d191d91d1919d9d9d9d1968bb6b9d9d9d9d919d19dd91d91d919d1db9bb8cc6f66c9bd9bdbd8c6c8f68f6c66c6f66f68c6cc6c6c66f6f6c66dbdb9b6c6c8c8c6c9d9d9d9d9d9d9d9dd9d9dd9dd9d9dd9d99d9d9d9d9d9b9d9d9d9d9d9b9d99b9d9dd9d9d939d9db9b9b9bd9bb9b9d9dd9dd9b966b69
                        b9b99bd1d1d911d9d9dd9d9d9d91d1919d9d191d1119d9d1d191d9dd9dd9d9d1d119d9d9d9dd9d191d1d191d91191d1d9d9d9d99b8cc8b6c99d9d9d9ddd91d19191d91dd19d9bd66c6f6c8f6bd9bd979c6f6c6c6c6c6c66c6c8c6f66cc876c6c86c8cb9b9db6c8c6c6f68c88b99d9d9dd919d9d9d9d9d9d99d99d9d9d9d9d9d9d9d9d9d9d9d9d9d9d939dd9d9d9d9d99a69b9bdb9b9b9c6c6d9d9d99b9ba66a6
                        9b9b999d1911191d9d9d19d9d9d99dd9d91d9d919d19dd1d191d19d9d9d9d9d919dd1d9d9d9d9d1919191d911dd1919d9d9d99dd8c6866b6b9d9d9d9d91d9191dd91d9d9dd9d9b6c8c68c6c6b9bd7bdb66c6c8f6c6c6c8c6f6c6f66c6cc8c6c6cc8c66db9b6b8c6f686c86cc6c6d9d9d9dd9d9d9dd9d9d9d9d939d9d9d9d9d9d99d9d9dd9d9d9d9d9d6d9d9d9d9d9b9b9bb9b9b9bdb9c6c6a6b9d9399d96b96a
                        999d9b99d1191d111d9d9119d9d9d9d9dd91d1d1191d9191d1191d19d9d9d9d191d91919d19d91d1d1d191d19191d9d9d99dd9bb68ccc6bbb9d9d9d9d191b6b9d919d9d999bdbd8cc6f6f687bd9b9d9ddd8cc6c6c686c6c6c8c86c6c6686c6c68f6cc6bdb9bd6c66cc6ccc6c8c88b9d9d9dd9dd9d9d99d9d9b999d9b9d9d9d9b939d9d9d9dd9d9d9b9a6d9d9d9d9d9d9b9db9b9b9b9c8c866b6a6d9b9b9b6a69
                        b9b9b9b9dd1d119191191d19d9d9d9d9d9d99199d1d1d1d191d1d911d9d9d99dd91d91d9d91d191919d91d91dd191d9d9d9d939b8c6f6b6b6b9d9d9d91d99b6a91d9d99ddd9b9c86f68c6cc6b9bdb9b9bb6c6f6c6cc6c6c66c6f6c66cc6c6c6c6c6c6c6d9d9b66cc6c6c66c6c6c8c6b9d9d9d9d99d9d9d9d9d939d9d99399b9d999d9b9d99d9dd9d99b69d9d9d9b9b9b9b9bdb9bd9b86c8c8c6b6a99b99996b6
                        9b99b99d9191d1d11d11d9d19d19dd19d9dd91dd91919191d91911d919d19dd9191d19191d191d1dd11d191d919dd99d9d9bdb9b6c866bb6b69d9d1d19d9d999d99d9d9d9bb9b6c8c6c8c8c6cb9b9bdb96cc86f8c686c86c6f6c6c6c66cc66c6c6f6f6b9bbd9bb78c8c6c6c6f6c6c6bb6b9d9d9d9d9939d9d99d9b9d9399399d939b9d9d939d9d9b9b9b9d9d9d9d9d9b9bd9b9b9bb8c86c6c6c6b6b99bdba69a
                        99b9939d9d11919191919d91d919d91d9d9d919d9d1d1d19d9d1d911d99d99d19dd91d9d9dd1919d99d91d191d1919d9bdb9b9bb8c6fc666bb69dd919d9b9bb69d9d9d99b9db6c8c6f6f6c6f6db9db9bd8c6f66c6c6c6c6c68c8c6c6c6c6cc66c68c68bb9d7b9bb68c6f6c86c6c8c6b6bbb9d9dd993999d9b9399d99b99d9d9d99d9d99d99d9d9d9b99a69d9d939b9b9b9b9b9bd96c6c6c8666c66bb99969a66
                        9b93999d9d91d11d1d1d19d91dd1919119d9dd9dd9d9191d19d9d1d91d9dd9d9d91d9d9dd9191d19d91d9191d91d9d9b9b9bdb96c6f66cbb86bb919db6b9d9a6b9d99dbdbd9b6c6f6c68c6f66b9bd9b9b6f6c8c6c6c6c6c6f6c6c6c86c68c6c6c6c6c6b9b9b9d96c6c6c86c6c6c6c6b6b6b9d9d9d99d9399d99b9d939d99b9d9b9d9939939d9d9b9db69a9d9d99b9b9bdb9b9b9bb66c8c6c6cb6b66cb9ba669a
                        9999bd9dd9d191d91191d1dd9191dd1dd1119d919d919d191d919191d9d9d9d1dd9d19d91d1dd9d9d9d91ddd91d9d9bdd9bd9bb6c86c86b6bb6b61d9b69b9b696d9399b9db9db8c68cc6f68cb9bdb9bd6c8c6c66c66c6cc6c86c68c6c6cc8c6c6c68c87bbd9bbb6c66c6cc6c6c6f6c6b9b6b9d9d9dd9d9b9d9b9b9999d9399b9d99399399d9d9d9b99b66b9b939b9bd9b9bb9bd9bb86c6c6b66b6a6b6b99b6b6
                        9bd99dd9d1d1d11191d19191d91d1991919d1d9d9d9dd191d1d1dd1d19d91d9191191d1d9191919d9d9dd9191d91939b9bd9b68c8cc8c6b6b6b6cb999a6a996a699939db9bb9c68cc6f68c6c9bd9bd9bc6c6f6c66c6c66c68cc678cc6c86f6c66c6c6f66db9d9bd8c6c6666c6c66c6b6b6b6b9b9d9d99d9d9b9b9bd93999d9d99399399b9d939b99bb9b96a696b9b9bb9b9bd9bb96c68c6c6b6b6b66a6b99a96
                        d9b9b9d191919191d191d1d111d9d9d91d191d191d9d91dd919191919d9199d1d91d9191d19dd9d9d9d91d1d919d9bdbd9bb6c8c6c6f6c6b6b6b6b9b96966a96ba9d9b9b9d9b8c6f6c6cc6f87d9b9bd6ccc6c66bc6b6c6c6b76b6c6c66c86c6c6c6c86c6d9bbd9b7b6b6bcb66c6c66b66b6a69b6b9d9399b99b99a699bd9b9d939b99b9b9d9b99bb996a6969a9b9b9b9b9b9bb9b6bb86f68c66c66b66b6b966a
                        999b99d1d11d1d1d1d1d1919d91919d9d91d191d191d1911d1dd191d19d9319d19d1d91d9d9d91d99d99d99d19d9d9b9bb9c8c6cc6f6c6b6b6bb6b99bd9396b696d9db9bdb9b6c86f68cc86c9bbdb9b666c8c6c6b6c6b6c6d9db6c8c6c8c6c66c6c6c8cb9bd9bb9d9c6c6b6b6b6c8c6bb6b86c69a69d9b9d9b9b96ba999b9d999b9b6a96a99b6a969a969a96b9b9bb9b9b9b9b9bb96c68c68b6cb6a6b66a6b96
                        9b9d9bd9191d919191911d11119dd9d9d1d91d91d1d91d91919191d9d19d91d91d9191d9119d99d9d9d9d1d99d99d9b9d9c86c86f6868c6b6b6b66ab99b69a96a969b939bb6c8cc68cc6ccc6bd9b9b7b6b8c6c66c6b6c6c9bb9b6c6f6c66c6c6c686c666b9bb9db9b6c6c686b6b66c6b6b6b6cb69a999d9b99b9b969639d9939b999b9696a69b96a96b96b6d9b9b9b9bb9bdb9b9b68c86c6c6666b686a666a6b
                        1dd9b9111d1111d11d191919dd19d1dd9d1d9119d91d191d191ddd1d91d1d91191d1d91d99d9ddd9dd9d99d9d9d9b9bdb9c8c6f6c8cc6f66b6b9b6b6b8b9a6969a9b9bdb9c8c6f6f68cc6c6f9b9bd9dbb876c6cb6b6c66bb9db9c6c686c6c6c68c6c6f6bbd9b9b9b6c8c8c6c8c6b6c66b9b6b66a696399b9b9d9a6b6a99939b99ba96a9a99b69696b96a9b9bb9bb9bd9b9b9b9b98c68c6c86c6b6a6c66c8b666
                        1191d19d1919d919191d1dd191919d91919119d91d9191d91dd919191d9191d91d9d91d9d9d9999d9d99d9d99d9d939b9c8c6f686c6f66b6b6b6b8c66b66c6ba696db9b9b68c686c8c6f6f6cdbd9bb99bb6b6b96b6c6c6db9b9b66c6c6c6c68c66c6c6c6bb9bdb9b6c686cc6c686b6b6a66b6b696a69b99b9a6969a969a69b9a696b9696b69a9a69a969b9b9b9b9b9b9b9b9b9bb68c66f6c6c6c66b6c6c686a6
                        1d1d91d191d111d1d1d19191d1dd11d1d1d91d19d91d1d1d9191d19d191dd91d91d1d9d99d9d939d9d9d9d9d9b99d9b9bb6c68ccc6c6c8c6b6b6b66cc6b6b6969a9b9db9b6c6f6c8c6f686c669bd9dbd9bdb9bdb6b6b6b9bdbdb6c6c6c6c6c66c6c668c66db9b9bd66c6c6c8ccc6b6b6b6b6a6b6b9b69b99b9b9a6969a9b69b99b99a9a969a969b969a8b9b9b9b9b9bb9bb9b666c66c8668c686a66b6b68c6c6
                        1911d191d1919d1919191d1d91919d919191d9d9d9d999d91d19191d91d91d91d9191d9d9d9d9d9d9d9d99399d939b9bd9b6c6c6cc8c8c6c6c6c6bb686c6a68b66bb9b9bdc8c6c8c6f6c6c8cc6b9b79bd9b9b9b9c6b6bdb9b99b66c6c686c6c6c66cc68c6b9b9b9bb6b6c8c6c686c6b6b6b6b6b6a69a69b999b99b9a9699b99b99b96969a969b69a68666b9b9bb9bb9b9b9b9bc86c86c8c68c6c6c66a66c68c6
                        d1d911d191d1d191d1d1d911d1d1d191dd1911d9d9d9b9b9d91d9dd91d9191d91d9d9d9d9d9d9d9dd9d9399d9d999bd9bb9b8c6f68c6f66c6b6b6b6c6c6b6c68b8c6dbd9b66c8c6f66c8c6f686cb9b9b9b9bdb9db9bb9b9b9bb9c6c68c6c686c6c686c8c6db9bdb9b9c6c6c6f6c6c66c6b6b6b6b6b69b9b9b99b9696b9b6a9b9b99b9b9b969a99668c8cb6bb9b6d9b9b9b9bb66c86c86c6c6c8686c66b66c686
                        1d119191dd9191d1919d119d919191d19191d91d19b9d98b6b191d1d91ddd91d91d19d919d9d9d9199d99d9939d9d9bb9db6c6c6c6f66c6c66c66c68c6c6b6c8c68db9b9b8c6f6c6c86cc68c6b66cdb9bdb9b9bdb9b9b9bdb9bd6c6c6c6c6c6c68c6c86c6b9b9d9b9b666c8c68c66b6b6a66a66b669a99b9b9b9b9a9698b66699b9b99b96b96b88c66c686868b6b9b9b9bb966c68c6c6c68c6c6c66c86a66c6c
                        9191d1d1911d1d91d91d9d11d191d9191ddd919d9d9d9bb666a919d919d91d9dd9d919dd9d99d9d9dd9d993999b9db9db96c8f68f66c8c66cb6b68c6b86b6b6c6c879bdb9bc68c6f6cc6f6c6fb6c6b9b9b9bd79b9bdb9bd9bd9b6c66c86c6c66c6c8c6c6b9bdb9b7b9cb6c6c6c6f6b6a6b6b6b66a6c96a999b99b99b6c866a6a9b99a99b99a686c6c86c6c6c689b9bb9b9b9b8686c6868c6c68c6c86c6c6b68c
                        11d19191d1919119db9d191919d1d1dd9191dd1d19b9b96ba966b91d1d9d9b9d91d9d9d9d939d9dd9d9d9399399d9b9b9b8c66c6c8c6f6c666a6cc8dbdb6b6b68c6bd9b9b78c6f68c6f68c6c68c66db9bdb9b9bdb9b9b9b9b9bb66c66c86c68c6c66c6c6db9b9b9b9b66c68cc6c66c66b6b6b6a66c66b99b99a99a9986c8b6b686b99b998c86c6868c6868c68c6b9b9b9b98c6cc68c6c6c68c686c6c686c6c66
                        191d1d1d91dd19d999d9b1ddd1919d91d1d91919d99d9d9666a6b669b9d9b6a9191dd9d9d99d9d9d19dd9d9d9d999bb9b6c6f68c6c6c68c6bc6b66c9b9b9b6b6c66db9bd6b68c6c6c68c6c8c8c6fd9bd9b9db9d9b9bd9bdb9b9b6c6c86c686c66c6c86c9b9b9bdb9bdd66c686f68c6b66b66b66b66a66b9b9b9b99b8c86c6b6b6c86b98c686c86c6c68c6c686c66b9b6b9b9b68686c6868c66c6c6666c86b6b6
                        1d19191d19191d93b9b9969d91dd1919d91d91d9b9b9b9b9a696a6a69b9b999d9d9d9d9d9d9d9dd9dd9d9dd9993939bd9c86c8c6f6c8c6c66b66b8b9b9bd9c6b6cb9b9b6b8c6c8c6f6c6f6c6c6c66b9bb9b9bdb9bd9bb9b9bdb66c68c68c6c6c6866c8c79b9b979b9b9b6c6c86c86c6a68c6a66a6c6b6869b999b9886c8666b6b6868868c6c686c8686c686c68c89b9b9bb9b9c6c68c6c66c86c68c6c66c668b
                        91d1d191d1d1d9d99d9bda6619191d1d9191d9d9d9b9d9b99a6b696b69d9b6a61d19199d9d993919d91919d93999b9b9b8c86c6c68c6f68c6c6b8c9bdb9b9b6b68b9bd6c686f6c6c8c6c68cc6f6c6cd9b9b79b9b9bb9db9b9b9b86c6c8c6c6c6c6c6c68b9bdb9bdb9bb6b6c6c86c66c6b6666b66b66a6b886b9a88c6c6c6b6a666b6c6c68686c686c6c68c68c666b9b9b96b9b6b686c68c68c68c6686a686a66
                        1d919d191919d9b9b9b996b6a19d91919d99dd9d9b9d9b9d6b696a69a69b9b96d9d9dd9d99399d9d9d9dd9d99d9d9b9b6c6cc6f6c8c68c6c6b6c66b9b9b9b6b6b8db9b68c6c68cc6c6f68c6f68c8d88b7d6c6dbb9b9b9b9bd9b6c8c86c6c6686c6c68c79b9b9b9b9b9b9c666c6c6c66c6cc6c6a6b6a66c6c88866c686866a66bb8b68c6c6c6c86c68c686c6686cb9b9b9b9b9b668c686c6c66c66c6c66c6c66a
                        91d1d91dd1919b9d9b9b9a696b191d9dd9d99d9b99b9b9b996a6b698b6b966a661919dd9d99dd9dd19d9d9d9d9b9bb9d8c6c6c86c6f6c6c86c68cb9bdb9bb6b6b66db9c86f68c6c6f68c6f66c68c7d8b9b86c9b9b97b9bd9bb6c686c86f68c6c686c66b9bdb9b9bb9b9b6b6c6c68c6b6686c86b66a66b686c6cc68c6c6c86b666b6866868c686c6c686c66b6c86b9b6b9b9b69b866c6c686c86c8686c6866a66
                        d9d91d1919d9b9d9b9d966b6a69d9dd9d9d9d9b9b9d99d9b9a966a696a6a96b9a9d9d9d9dd9d9d99d9dd9d9d99d9b9bb68c8c6c8c66c8c6c8c8c6bb9b9b9b66b6b6b9c8c68c6f68c68c686c8c8c69b6b6b6c86b66b6bd9b79b66c6c6f68c6c66c6c6c6bb9b9b9b96bb6b66c668c66c6a6c66c66a66b86c6c6868c668c86c6b6b66a6c6c6c68c68686c68c6b9b9b9b9b9b6b9b98b6c686c686c686c6c86c6c68c
                        6b91191d91b9d9b99b9ba69696a6d99d9d9d9b9d9b9b9b99b66a96b6b969a9666b6dd91d9d9d9ddd9d9d919939b9bd96c86c6f6c6f686f686c686b9b9bd76b6b6c66c6c6f6c68c6c8c6f6c86c66bd9b9bb66c86cc6c6bb9b66c6c68c6c6c68c686c66b86b9b9bdbb69b6b6a6b6c8c666c6c68c66b66b68c68c6c68c66c6866b6a6666a686c66c6c6c68b9b96b9b6b9b9b9b9b9b6866c686c686c6c66c6868666
                        b6b9d191d99d9b9b99b9b6a6a696a9d99d99b9d9b99b99b9b696b69a66a69bb9a96a9d9d9d9d9d99d9a9b9d99b9b9bb6c6c6c686c6c8c6c6f6c6c9b9b9b9c6b6b6b6b66c68c8c6f66c68c6cc6f6db9b6b6c68c68c86c9b9b6c668c66c686c68c6c68b6d6c9bb9b9b6c66866b86c686c66a66c6c6b6a6c6686c686c68c68c66a66a6a666c686868686c9b6b9b9b9b96b96b9b6b9bb6b866c68c6868c686c6c6c8
                        69869b19d9b9b99d9bdb996b69a696d9d9d9d9b99b9d9b9b9a69a6969a96d9b96b6969b919dd99d9b96b6b9b99b9b9b66c8c6c8c68c6c68c68c6b7db9b9b66a66a6c6c6c86c6c68c8c6c6f68c66b9bd668c6c6c68c6866bb66cc66c66c6c8c6c66c6db9b6b9b9b9b66c6bc66b68c6c86b86c68686b666b8c686c68c686c6c66b6666b6c68c6c6c6c6b69b9b6b96b9b9a9b9b9b969b96b66c66c6c6686c666a66
                        a6b6a6b9b9b99b9bb9b9bb69a66b6b9b99db9b9b9d9b9b99b9a696a6b66db9bb9b6a9a69b999b9b99b9969a9a9b9b9db66c68c6f6c6c8c6c6c6c9b9b9bd9c6b6b6b6b6b6c6c6c8c6c6f686c6c86cb96cc68c8c8c6c8cc686c668c66c86c6c686c86b9b69b9b9b9b9b6b8b9b66b686c6c6c686c6c86a6a666c6c86c66c6868c66a6a66a6666c686c6b9b9b69b9b9b96b9b96b96b9a6bb6b6868686c6c686c8686
                        b69a9666a99bd9b9b9b9b9c669a96a66ba99b99b9b99b9d9b696b96969b9b9b9b969696b6ba9b99b99ba96696b9bdb9bdb9c6c668c86c6f68c6bb9b9b9bb6c6b6b66b6b68c8c6c6c6c6c8c6c6c6876c68c686c6c6c668c6c6a6c6c66c6686cc86c68b9cb9b9b9b9b9b96b6b6a6c6c86866b8c686c6666b6c686c686c86c666a6666b668b8686c6869b969b9b69a9b9b96b9a9b9b9666b6a6c6c668686c686c6c
                        6b666b9a99b9b9b9b9b9bb6a866b696b969b9b99b9b99b9b9b9a6a9a6b9b9b9b9b6a9a9696969b9b9b996b9a9b9b9b9b9b9bb6bc66cc6c68c66b9b9bdb9b66b66a6b6b66c6c6f68c6c86c6c8c6c6d86c68c6f68c6f6c6c866c668c8c6c6c86c6c8bb666b9bb9c6b6b9bb9d9a66686c6c6c666c6c68b6a6b68c686c686c68c666b6a68b66b86c686b9b6b9b69b96b9a96b9b969a9bb9866686686c6c6c66c6866
                        a96b9869b99b8b9bdb9b986b6b69a696a6999b9b99b9b9b999b96969b9b9b9bb9b96b69ab9a6b9b9b9b9a96b69b9b9b9b9b9b9b9b86c68c6c6d9b9b9b9b9b66a6b66a6b6686c68c6f66c6f686f6bb6c8c6f66c6c68c6f6c6c66c66c6886c686f6b99bb9b9b6b686c6d9b9b69b6c6c686c68b86c68b666b6b66c6c686c6866c6a666b66a66b668bb9b9b9a9b9a9b969b9a96b9a969b98a66a6c6c686866a68b86
                        66a96b9a9b9d9b9b9b9cb6b66a6a69a69b9b9d99b99b999b9a96b6b69b9bb9b9b6b969a9669b9a999b996b96b9bb9b9b9bb9b9b6b6c6f66c6bb9bb9b9b9bb6b6b6b6b66a6c66c6c66c6c86c6c689b686c66c86c8c686c6866c6a6c86c6c6c8c669bb9bb9b9868c66c9b9c9bb6b868c6c66c68686b66a6668686868c66c6c6666a6b6a66b66a66896b69b96b96b9a9b69b69a96b9a6b6686686866c66c686686c
                        9b66a98699b9b9b9b9c868c6b66b66b69a9b9b9b9b99bd9b996b969a9bb9b9bb6b6a96969a96996b99b9b9a9b9b9b9bb9b96b966c68c6c86c9b9b9b9b9b9b6b66a66b6a6b6c68c6c8db6c68c6c6b6c6c8c86c86c6c6c86c6c6c686c6c686866c6c9b9b9b9c8c66c86c9b9b6666c6c6866a66c6c66a66a6a6c6c6c66c8666b8b666666b66a66b6bb69a96b9b9b969b69a9b9b69b696686a6c66c686a6866c6c68
                        b69a969b6a9bb9bb9b86c68c6b6b6b6a669b99b99b9b9b99b9a96a9b9b9b9b98b9b6bb6b96b9a69a9b99a969bb9b9b9b96c66cc86c6868c66b9b9b9bb9b9b6b6b6b6a66b6b8c68c6b9668c6c8c6b66c86c6c6c6c6f68c6c66c66c6686c6c6c86c666b9b6b866c86c8686b9a6a68686c6c6866c68b6666686868668666c6a666a6a6a66a96b66a99a96b9b69a69a69b96b969b9b9b6a66686a66a6686c6a686c6
                        9a696a69a9b9b9b9b86c8c6866b6b6b6b6a69b9a99b99b9b99b969b9b9b9b9c666b69a96a96969b969a969a9b9b6b9b9c8c6c86c68c6c6c8b9bb9bb9b9bb9c96c66b6b66b666c66b9b6c68c6c6b9c68c68c6c8c686c6c68c66c68c6c86c66c6c86bd9b666c686c866c6c96b66b6c6c6866c6a6868b6a6b6c6c6c6c6c8666b66666b6966b96b996b69b9a9b69b9b9b6b96b9a96b9a668a666868686c66866c668
                        b69a69b69b9b9b9b9c686c6c8b6a66b698b6a66b6d9b99b9b96b9a9b9b9bb98c8b6a66b6b9a9a96b9a96b96b9b9b9b96c68686c68c68c6c67b9b9b9b9b9b98c66a666b6a66b86c66bb68c6c686b9c6c6c6c686c6c6868c66c68b68c6c66c6868c6d686b6c68c686c868c6b9b66a6686c6c686c6c666b6686868686866c6a6a6a6a66a69a9a9b6b9b9a96969a96b69a9a9a96b9a966a668a66a66c66a66a686a6
                        6969b69a9b9bb9b9b9b6c686c666b66a66b66b6a6b9b9b99b9b9b9b6b9b9b986c66b9b6b669b969a969b9686b69b9b6c86c6c68c68c66c6c9b9b9b9b9b97b66c66ba66b6b6b6c6c66b6c686cc6b9c686686f6c6c8c6c6c6c66c6c6686c66c6c66d86c68c86c6c6c6c6c68b96a666c6c68686c666a6a66a6b6c6a6c6a68666666666a9b696969a969696bb9a969b9b96969b9696b66668666866a66868668b686
                        ba969a69b9b9b9bb9b9c86c86c6b6a66b6b6b6b6b699a9a68b9a9b9b9bb9b6cb68686b69ab69a9b969b9a6c6bb6b9b866c868c686c6c8686b9b9b9b79bb9b68c8c66b66a66a66b6c66c68c6c6b9b68c6c6c686c6c6c86c66c66a68c6c66c668cb66c6c6686868686868666b66b6868686c6c66a6666a666a6668666866a6a6a6a69696b9a9bb96bb9a969a96b9a696b9a69a9a998a68b6a66a6686a66a668668
                        96b6b969bb9b9b9b9bb66c6c686b69a6b6a66a696a6a666c686b6b9b9b9b989b9b8c68b669a6969b9a96686868b9b86c86c6c6c6c686c6cb9b9b6b9b9b9b98c6688c6a66b66b6666c86c68c687b66c66c66b6c68686c686c6a66866c6bb68b6b66c6868c6c6c6c6c6c6c8c6d68b6b6c6c6898668b6a66a666a6c6a6c6c6666696b9a9a96b966b99a96a6866b969b6b969b696b6b66cc66686686a66686c6ccc6
                        b969a9b9b9b9b9b9b99b6686c686a66b669a666a6666b6b86c6b69b9b9b66bb9b66c68b6a66cbb8666868c6bb69b6686c68686868c6c6c6b9b6d9b9b9b9bb68c6c6666b66a66a6a66c68c66c6b9c66c66c6866c6c6c6c6c666c6c6c66686a69b6686c6c686c68686868666a98b6868686a6b6a66866666b6a66c66866868a68b9a96b969b69cc66686666a668a66a66a66a669a966cf686a66a6668b6668cf66
                        6b9a969b9b6b9bb9bbb6c6c86c686b66a666b66b6ba68686c686a9b69b9b89b98c86c66b66b6696a86c6c689b9b98c6c68c6c6c6c686866b9b9b9b9b6b9b66c686c6a66a668c6b6a66c68c686b9b6c6c66c6c66b66c68c68c6866c68c6a69b686c6c686c6868c6c6c6c6c68b666a6c6b686866a66b6a6a6666bf6cc6a66666b969b96b9a9a6fc6a6b6a6666a666666a6666a6866a6cc66a666668b686a66cc6c
                        9a969bb9b9b9b96b9996c86c68c66b6b6b6b6a66a666c6c686c68b9bb9b9b9bb666868c6b66a6a666c686c6b9b6b9c686c6868c686c6c86b9b9b9b6d9b9b9868c6866c6b6c686666c686c68c6bb6b668c68c6c86c66c6686c6c8686c686b9c6c68686c686c666c6866868666a66668686b66a668b666666a666cc6f668a6a69a9a69a96986ccf666666a6a6666a6a6668a6666a668ffc666a6a668c668ccffcc
                        6969a9b9b9b9bb9bbb6c66c686c6c6b698b6b6b66b6b686c686c6b9b9b69bb99b8c6c66b6b6b6b6b686c68d9b9b9b9bb686c6c68c686c6b9b69b69b9b9b9b8c66c6c66a666c6c6a66a6c686c69b96bb66a6686c68b66c8c6866c6c686c6d8686c6c686c6c68c686c6c6c6c666a6a6a66a686686b689a6c868acff6e8666c9b6969b66ba666cfc66a6a666668a6666686666a66686cccf6b98666a6c6acf6cfcf
                        9b9b9b9b6b9b9b9b99b68686c68686b6a69896a686a66b686c686b96b9b9b96b96868686b6a966b6a6c68b9b69b9b9b9b9b686c66c6c68b9b9b9b9b9b6b9b66c8686c666a68686c66666c6c6b9b6b69b666c6c686c68666c6c8686c6c6986c68686a6c6866c66c66868668a666666686686a66a668b86fc666cfcffe6b6c69a9b69f9966a6fefc668666a66666a686ac6a666a6666cf7c66986a66f66fcfef7f
                        96b9b9b9b9b9b9b9b69c8c6c68c6c66a6b6b6a66b666a6b6a66c69b9b9b69b9bb6c6c6c6a966a6966b866b9b9a9b6b9b9b6b6868686866b69b9bb9b69b9b68686c6c66a66c6c6c6a6ca66866b9b99b69a6b666c6c68c6c8686c6c6866b8c686c6c668686a686a686a6c6a668a6a68b6a6c96c6686666afc66cfcf7fc6b6cc966a6cfc8f66ccf7f666a6668a6a666a66c6666666a6fcffc6b6a666cfc6fef7ffc
                        b9b9b6b9b9b69b69b9b86686c668686696a6669a686a666668b6b9bb969a9b69b986c68666a666a6b668a96b9b69b96b969a6c6c6c6c6c9bb9b96b9b9b9b9c6c68686a66c68686668686c6cb9b6bb9b866a6a6686866c68c6c66b86a6666c6c6868c66a6686686c6666866c6666866866868686a18b8cff66cf7ff7fc9ccf6b666fcccc66ccffc6a666a6666668c666cc68a6a666cf7fc6986668cfccfcff7ff
                        9b9b9b9b9b9bb9b9bb66c6c686c6c6a6a66b6a66b6666a6a6b9b9a96b9b6b9b9b9c686a6a6b6a66b6866bb9b69b9b9b9a9b686868686c669b69b9b9b9b69c686c6c666c668b6a6c6a6c66c69b6996b66c8666a6c6c6c8666868b6666a6a66a66a666a668c6c6c668a6a6c686a6a6a66a66a66a666666cf7c6cff7fcfc6f7f666a6cffcf6e4747f6666666a66a6cf66cfc6666668ccfcfec666a66cf7fcf7fcf7
                        b9b69b9b69b9b9b9b98b66b86c6868666b66a96b6a6a666686b69b69b9b96b9a69b66866666b6866a6a8969b9b9a9a96b9b66c6c6c6c68b69bb9b69b69b686c6868c6a66a6666c66668c68686a6c98a686c866c666866c8c6c66bb9c666a66686c686c8666866a66686686a666666866866c666a68afcffcf6fcfcf7f6efc6a668cf7fc47eeee4c66a6a666666cc66cfcc66a6666c6fcff66666afcfcf7f7fcf
                        9b9b9bb9b9a96b9a9b9b9b9b8686c6c868b6686666668c6a686b96db9a9a9b69b9b6a6c86a666a668666b9b9a96b96b9b96868668668666c89b69b9b9b98b86c6c66666a66a6a68a6b668b6c6686a668c66c686a6a6c68666686b66a6b666a6b686c6c6c6a6a6686a6f66c6686a66a66a666a66866c6f7ff7fef7fcfcf7fcc666cfcfc7e4e74eee669696c6a6cffc6fcf66666a6cfef7f7ccbbecf7f7ffcfefc
                        79b9b969b9b9b9b69b69b969b6c6686c666a66a6a6a66686c66a9a69696b969b9a998666c66a66b86b86bb696b9b69b96b8b86c6c6c6c866c9b9b9a9b6b68668668c6a6686666b66b9a668686c6c68c66c686c68666b86c6a6c686a666a6666866ac6f66866686a666cc6fc66a6866a668a6686c6afccfcfccf7ff7f7fcf7f66acff7fe7edb7e7fb6a96ac9668ccf6ec7f6a6666cfcffcffce47b7fffcf7cf7f
                        9b6b9bb9a96b9b9b9b9b9a9b69b86c66a6a66686666a6a666a66b66abb9b9a9b698c68c68666b666a66b69a6b969b9a9b9666c6866866a66b69b69b69b6a6c6c6c66866a6c6b9b9b966c6c6c6868666c686a6686c6a666a68686a666a66a6a6b866fcf6c66a666686cfcfcc66666a6686666a66c6ccf7f7ff7ffcffcfcf7fc666f7ffffddb9bdce6696a6f69ccf7fc7ffc666a66ccf7f7fcf94bbdf7ef7f7ffc
                        79b9b9b96b9b69a96b96b9b9bb66a6868666a66a8686668c686866b68696b96b9a66666a6a686a6666a68666a9a9a96b9b6a66a6a66a6b9b9b9a9b9b9a66686686a6c6666a6b9a96b6a666a66a6c6c866a668c6a686b68666c6668686666b666a66cfec66868a68b6cfcfcf68a666866a6a666cfbcf7fff74e7f7f7f7f6fcfc66fcfcef9ddb9b7fc6b9cfcc6ccffcf7fcf666666cf7ffe7efd9b9be47eef7cfc
                        6b9b69b69bb9b96b9b9b96b696a6686c6b666a666c6c6c666a66a66668b69a66686c8a66686b66a6a6666a686b696b9b698686686866b96b69a696b9696a66a6c6866a8c666b96b9b686a6686866866a686c66666c66a66c686a66a66a6a66a66ccfefc66cc666686fcf7fc6666a66a66666b9fccf7fcf7e4e4eefcffcf7f7f6ccfef7fdd9b79cf76c8f7fc6f6f7f7f7f7fb6a6ccffcfdbfcdd97d7b47ef7f7f
                        9b9b9b9b866b6b9b96b9a9b9a66866a6686a666a686686a6866c686a666a698a6666668686b66866686a6686666b9b69b98b6a666a689b9b9a96a96a9b66b686686c66668a69a9b96a668686c6c6a6866c668b6a68666a686a6686686666966a6cfcf7f666cc6a66ccfcffec66866a66a69a96cfcffcf74e47e47eef7fcfcfc6cfcfffc7dd9bb7fc6fcfcff6ccffcf7fcfc6666cc77e77b77d9bbb9bbb7c7e7f
                        9b96b9a66a686a96b9a96b986866a6686a666a666a6a66866a6866a686a68966a6a68b6a6b98b6a6866686b6a6a6969a9868668c666b6b6969b66866b9a66a66a66868a666b969b6a6686c6a668666c6868668666a6a666a6686a6c6a6a6a6666cf7fcfe68cf668b8f7fcf7f66a686669cc66cfef7f7ffb4e47be7fcf7e7f7fc7ef7f7f19db9bcfe6fe7f7c7f77777e77777e7777efffcfce7bb9b77cc777777
                        b9b9b666a66669b9a96b96b6b6a6686c66868686866686a66866a66668666c6b66866866b96a6966a6a66a686669a9b69c66a666a68b99a9a6986c6a969b66986c6a6668c69a9b96686a666686a6866a66a6a6a666866a6666a6666666666a6acffcf7fc66fc6666cffcf7fc666cc69a6fc66cfcfcff7f797b9b7df7e4eeefcc7befffcdd9bb977e7777777777e7e777e7e77e7ef7c7c777c7c777e7777e7c7e
                        6b9b9b9a668a6a6b669b9a99b966c666a66a66a66a66a666a66a6686a66a68969a6b6a696a966a66666a66866a9a969a66a66868666b6b969b6b6668b9a9b6b668668b866a69b6a66a6686a66666a6866c666668a66a666a66686a86a6a66696cf7fcf7f6ccfe6a6fef7ffcfc66cf966ccf6cfef7f7fcfddddb9bbff7b7df7fc7d65e77bddb9b7e7e7e7ee7e7e77e7e77e7e77ccfef7f7e77e77c77c7e77e77c
                        9b6986896b6666866a6b69b69a9b68a66866a666668666a6686686a668666a6a969669ab96b666a6a66666a666b69a6966686a66a689b69a9b96a9b696969a98b6a6666a669b98668666a668a6866c6a66868a666b668666a66a6666866a6a68fcff7fcfccf7f666f6f7fcf7f66fcf6afcfef6cffcfcfcdd9b9b9b7c7db9ec7f7cf7be7d9b97db777e7e77c7e7c77c7c777c7ef7c777777e77f7e7e77c7f7fff
                        9b9c6c6866a686a66699a96b96b666686a66686a86a6a6866a66a666a66a6666b9a9a96969a6a69669a6a666a696b9b98a66a66666a69a96b6a9969a9ab9a66686686a668b9a66a66a6666a666a6866686a6668b66b66a6b686668a66a66666ccf7ffcf7f7ffc68bc6efcf7fc6bcfc66cf7fcf7f7f774fd9ddbdb777bd9b7774747dbb7dddbb6ffe77e7c7e77c7e77e7e7c77c7ff7f7ec7c7e777c7e77effcfe
                        6986866a6866a668b9a69b9a969a98b6666a66666666666a6666668666a668a696b96b9a6969866a666666a6686a669a666a66a6a69896b9696b6b96b96b66a66a66a68666b96666a66a6866a666a6a66a66c6689a96a6666a6a6666666a66a6ffcf7fcfcfcf7c6cfef7f7ffc6fcfc6cfcffefcfff4ed77dd9b96b4b7ddbe74be749db7e79bcfecf7e777e7c77e7c77c7c7ef7f777e777e7f77c7e77c7fffcfc
                        76c66a66c668668b89b96b69a9b9686a6866a6a6a6a68a6686a6a6a6a666a669a96a66969a96a666a6a6a666a6666a666a66666666b6b96b9a99a9a9696966686686666a68686a686666a666686a66686666c86a69b696a686666a6a6a6669fcf7ffcf7f7f7ffc6cf7f7ffcfe6fef66cf7fcf7c7777db7b7cfffef74bd7e7e74eeedb947c77fcf777e7c77c7e77f7e7e77e7fc7ce7c7f7c77e7e7c7f7efcff7f
                        666a68686a66a6698b69a9b96b698b668b86666668666666a6666666668666866a966a6a96b666a9666666a6698a666a668686a689a96b9a696b9696a9a6a86a6a6a6866a66a666a66a666a6a6666a66a6a6f669b69a69866a66866666c86a6fefcf7fcfcf6cf7c6fccf7feffef6fefc7f77777477b77e77cf7fc7e747474b4e47e49b77e7e7777e7c7e7f77f7e77c7f7ff7f7e7f77e7e7f77f7e77e7fff7fff
                        6a6866c66686686b69b9696a969a6686666a6a686a6a66a66686a686a66a66a666986666a969a66689a66696a6666a6666a66a96a6969a969a96b6b96b66666666666a6666666a666a66866666a6666a666ccc9a969b66a6666a66a686cf66cffcf7ff7f7fcf7fcfef7f7f7f7fc77777747747e77e7e77e7ef77e7e7d47d7474e47eb9e77e77ec7e77e777e77e7c7f77f7c77e777ec7f777e7cff7f7ffcfffcf
                        6666c66a68b6a6a66a96a9b96b966a6a6a66666a66666a6686a666a66666a666a66a6a6696a9866a6666a6a666a66666a669896969a9696b96b969a96986a6a6a66a666a6a6a666a6686a6a6a6686a6666afcf96b9a98666a6666a66a6fc66cf7fcf7eeff7fccf7fc7f7fcf7e77e7e7477e77e774777e77e77e77ecf7c74b7bd7bd9b77c7e7c77e7c7f7ec7f7c7f77fec7f7f7f7f77f7ec7f7fcfffffffcfcfc
                        c6c86a6666866666b969b696b6b98666666a68666a66a666a666a666a6a6668666a6666a69696a666a6666666666a668666a66a6a96b6a96a96a9696a98666666866866866666a666666666666a6666a666cfc696b6698a666a6666668cfc6feff7e4e74fcf7fcfcfcf7c7e77e77e77e777e77e77e7e77e7777ecf7fef77e7edb9bb9b7e7c77e7f7e77e77e7e777ef7f77e7e7c7e7f77c7f7fffffcfcff7ffff
                        7f666686a66a689a96a969a969a66a66a6666a6a6666666a66986666666686a6a66698666a6a6666666a6a6a6a9666a66a666666669a969a9696b6a966a6a66a66a66a66a68a6666a6a6a66a6666a6666acf7fb696986666a666a66a6ccfccfc7ffd74b9f7cfcf77777f7e7c77e77e77e7e7e77e7ec7e77e7ee7f7f777e7e77ddb9bd6e7c7e7f777c7f7f7c7f7fef7c7ef7c7f7e7f7e7f77ecffcffff7fffcff
                        666a66a668666a69696b9a69a9696666998a666666a66a66986a66a6a66a6666666a96b666666a6a6a666696666a6666666a6a66a6696b696a969a969a6666666666a666666666a6666666666a666a6866cffc69a9a6a6a6666866666cf7f6fffcfd9db7cfc7777e7e747e77e77e77e77e777e7ef77e7e77e7fc7f7f7e7e7e7c7bcc7e7c77f77ec7f77e7e7f7e7f7c7f77c7f7c7f7c7f7ec7ffff7ffffffff7f
                        66c66866a6a6669a9a96a9696b6a9a68a66666a6666a66968966666666666a66a66669a9a66a66666666a6869a666a6a6a66666669a69a9696b6969a6666a6a6a6a666a6a6a6a6668a66a6a6666a666a66cf7fc6966666686a6c6a6a6cffcf7f7fcddb9b7e7e7e77e77777e77e77c77e77e7eec7e7e7f7fefc7fcf7e7c77c7e7e7fff77e7e7e7c7e7e7c7f77fcf7c7f7e7f77e7f7c7f7c7f7ff7fffcffcf7fff
                        6668b6686666a6b696b969a69a96966666a6a666a6666a66a6a6a9898a66666666a6b6969666666a66a66698666a966666666a6a669a966a9a9a9a696a666666666666666666666a66666666a6666a6668cffcf9b69a66ac668c66668fc7fcfcfe7e7cf7ec7f77e7747ee77e7e7e7e77e7ec7f77c77c7f7c7fc7f777e7e7e77c7fc7f7c7f7c7f7e7f7f7e7fc7f77f77c7f7cf7f7c7f7ef7c7ffffffff7ffffff
                        6a6668a66a66669a696a969a6969a6a6a696668666a66666666666a6666a6a6a66666a66a9a66a6666666a66a66666a666a666669a6969a96696696a666a66a686a6a66a66a66a6666a6a68666a66666a6fef7f69a66a6cf66cfc66a6ccff7f77777777e7f7e7e747e777e77e777e7e7ec7f77e77e7fcefcf7f77e7e7c7f7c7e77e77e7f77e77e7f77e7f7f7f7c7ecef7c7e7f7c7f7c77f7ffffcfcffffffcfc
                        666a666666a6a669b6969a6969a6966666866a66a666a6a6a96a6666a98666666a66669a96666666a66a666666a66666a666a66a6696a6969a69a69966666666a66666666666666a666666a6a666a6666cf7ffcc699698cf66cfc666cf7777747ee7e7fe7e77777e77e7e7e77e7e777f7f77e7c7e7fc7f77e77e7c7c77e77e7f7f7c7f77ec7f7f77ce7f7fcf7c7f7f77f7f7f7c7f7ef7f7fcfcfffff7ffcffff
                        6666a9a6a66666a69a9a6969a696a69a66a666666666666968666a96666a666a666a6a6666a6a6a6666666a6a666a6a66666666966a696a9696696a6a6a6a6666666a6a6a66a6a666a66a666666666a6ccffcf7696a666fcc6fcf69677e7e7e7e7f7fe7777e7e7e7e77e777e7cf7f7fc77e7c77eff77e7f77c7c7e77f77f7c77e77f77ec7f7c7ec7f7fcf7f7cef7c7f7c7f7c7f7cf7c7fcfffffcf7ffffff7ff
                        cc698966666a669a69696b6b96a966666666a66a9a6a66a666a9666a66666a6696666666666666666a69a66666696666989a6a686666a966a69a9696966666a66a6666666666666666666666a6a6a6666cf7fcfc6b96acfcfcc77e7e7477747ef7f7777e7e77e7777e77e7e7f7c7fc7e7c7e7ef7c7ffc77e7e7e7f7e7c7e7e7f7c7e7f7f77e7f7f77f7f7fc7f77f7e7f7f7cf7cf7e7f7f7ef7fffffffcfcffff
                        ffffc69a6a6689696a96a986c9698a6a6a66666666666666a6666a666a6696668a66a66a6a66989a6666666a698a666a66666696a98666969a6989a98989a66666a66a66a68a66a6a6a6a6a6666666a6ccffcf76c9698cf7777e7747e77e7ef7c77e7e7e77e77ee7e7e7c7cf7fef77e7f7e7f7ff7fc77f7c77f777c7f7e7f7c7e7f7c7e7cf7f77efcfcfc7f7c7f7f7f7c7f7ef7ef7f7fcfcfffcf7ffffffffcf
                        cfcffff66666a9a696a9696cc6a96666666a6a6a66a66a66666a6666666a66a696666966696a666666a66a666a666a666a66a66a696a96a9696a9669a698966a6666666666c66666666666666a6a66c66fc7fffcf9a66e77e7e77e777e7eef777e77e777e7e7e77e77c7ef7fec77e7f7ef7f7f7fc7e7f7e7f77ec7f77c7c77f7f77c7f7f77e7cf7f7f7f7f7f7f7c7f7cf7cf77f7c7fcf7ffcffffffcfcf7ffff
                        ffffcfcf66a69696a9696a6cc696a96a666666696666666a666986a66a66666686a66a66a6666a66a966666989666669898966696866696a66966b66986b6a666a6a6a6a6af6a66a666a6c6a66c666c6bfff7fcfc67b777e777e77e7e777777e7e7e7e7e77e77c77c7ef7f7f77f77c7f7f7fcfc7f7f777c77e7c7e7c7e7f7e7e7cef7e7c7f7f7f7fcf7f7c7ec7f7f7c7f7f7fc7f7f7f7f7ff7ff7ffffffffcf7
                        ff7fffff6a666a69696a966cc6b696966a698986a66a6a666a666c696666a6a696666666666a6666666a698666a66a66669a69a66a96a9696a9a96b6a9696666696666666ccc66666a666c666cf69cfc6c7ffc77e77e7e77e7e7e77e77e7e7e77e777e77e77fe7e7ef7f7fc7e77e7fef7fc7f7e77e7c7c7f7c7f7f7e7f77f7f7f777f7f7f7cef7f7f7f7f7f7f7f7ef7f7ce7cf7f7f7ffcfffffcff7fcf7fffff
                        ffffcfcfc669a96a98966a6ccc698a6a666a66a66666696666a6ac68a6a66966a66a989a66666c6a66666a6a6666696a6a69666666696a669666696966a69a9a6866a9666cfc66a66c6c6cf69cfc6cfc6ffc77e77e7777e77e777e77e7e77e7e77e7e7e7c7fcf7f7f7f7f77e7c7fc7f7f7fc7c7f77c7e7c7e7f777c7f7c7c7c7c7fc7c7e7f7f7fcfec7cec7f7cef7cf7f7fc7f7cf7ffcffcf7ffcfffffffcf7f
                        cffffffffe6696966a6a96ccfc6c9c6698966666ac6a686a6cc6ccc69669866666666a666a96ac696a66666966a986669666a9a969a6969a6b9a98a9a969666669a6666acfcf6666ac6fcfc6cfcf6cfcc777ee7e77e7e77e77e7e7e77e7e777c7e7c77c7fef7f7fc7fce7e7c7f7ff7fc7f77e777e7f7f77c7f7ece7f7e7f7f7f7f7ef7f7fcfcfcf7f7f7f7f7f7f7f7cecf7f7f7f7fcffcfffffcffcf7fffffff
                        fcf7ff7ffc6b6a6c6cc669fc7feccfb666a66a66ccc69c66ccc6c7c666c6a66a6a666666666a6cc6666a96a666666a66a9666666a696a66966666966696a69a668666a66cf7f66966fcfccf6ccfcfc7e77e7f7e7e77e7e77e77e777e777e7e77e777e77f7c7f7f7fc777c7e7f7f7fc7fc7e77e7f7c7e7ce7f77c7f77c7f7e7c7f7c77f7fcf7f7f7f7f7c7f7cce7f7f7f7c7f7fc7f7ffff7fcfff7fffffcf7fcf
                        fffffffff76c666cccccc6ccf7cf7ccc666a66ccc7e66cc6c7f7fcc66ac6c666696a96a6989ccfc66a968666a66a669666a96a9696a969a69a96a969a6696a9669a66666cffcc689cfcf7fccf7f7e777e7fe7f777e77e7e7e7e7e7e7ee77c7e7c7f7efef7fcf7fec7f7e7ef7fef7fef77e7c7677e7f7e7f77ce7f7cf7f7c7f7f7ef7fcf7f7fcf7f7c7f7f7f7f7f7cc7f7f7fc7fceffcffffff7fff7ffffffff7
                        ff7ffcffcfccec6cccf7c7c7ec7cc7e7cc6cccc7eb16bcd6eccce7fe6cccc6c6a6666666a68cc7f6666696a6696696a669669896a9666696666966a696a69666a6666a6cf7fffc6bfcf7fcf7fc777e7e7f7fc77e7e7e777e777e77e777f7e7c77e77f7f7f7f7fc77e7e7f7f7f7fc7c7e7f7e7e7c7c7c7f7ce7f77f77c7f7f7cef7cf7fcfcf7f7fcf7f7f7fcef7fc7f7f7fc7f7c7f7fffcff7fffcfffcf7ff7ff
                        cfffffffff77fcfef7f7c7e77f777b7eccf7f7e77bd7b77e777777f6cf77c7c666a66a6669ccfcccc66a6669c6a68696a66a66666669a66a9a989a96696986a6666a966cfcf7f766cfcfcf7e77e7e7efcf7c7e7e77e77e77e7e7e77f7e77e77f7e7fc7fcfcef7e7f7c7c7f7fc7f7e7f7c7e7c76e7f7f77c7f7c7f7cef7e7cef7ff7ff7f7f7fcf7c7f7fce7f7cc7fcf7fc7f7fcf7fffcffffffffffcfffffffff
                        7fcff7ff7f7e77c7f7fcf7f7e7e7e7e777fccf77e7b7b7e7e77e77ef7fcf777e777b7bcb686e6f7fc6986986c66c96a696969a9a96a6969666698966a66a96666a6666cfc7fcfc6b6fef7777e77e7f7f7777e777f77f7e7f777c7f77e7e77f77efcf7f7f7f7f7c77e7f7fcf77e7c7f77f7f7f7f7f77e7f7f7c7f7c7f7c7f7f7f7fcf7fcfcf7c7f7f7ce7f7cf7f7f7cf7ce7f7f7f7fcf7fcffcffcfff7ffcffcf
                        fcf7fffffff77e7f7f7f7f7f77f77f7c7e77f7fc77e7e77ed7e77e77f7f7f777e7e7777777777ecc5c6c6a66cc6c6a666a66666669666a69a96a966969666a69669866cff7f7fc6cf7777e7e7e77f7f77e7e7f7e77e777e77e77777e777c77e7f7f7fcf7fc77e7f7c77f7c7ec7f7e7c7e77c7c7e7ce7f7c7c7f7c7f7c7f7fcfcf7f7fcf7f7f7f7f7f7f7fc7f7f7f7f7f7fccf7fffffffffffffff7ffffffffff
                        7ffcffcffff7e777cf7fccf7fc7e77e7f7e7cf7f7e7e7e77e777e777ef7fccf77e7e7e7e7e7e77777ccc669cccccc6c6969a69a96c6b9666666989a6a69cc668986a6cccf7fcff777e7e77e777fcf777e77c7777e77e7c77e7f7e7e7c7e7e7cf7f7fc7fc77f7c77e7f7fe7f77f77f7e7f7f7f7f7f7f7c7f7f7c7f7c7f7cf7f7fcfcfcf7f7ccf7ccf7fcc7f7f7fc7f7f7f7f7fffcfcf7ffcf7fcfffffcfcf7fff
                        f7ff7fffcffc7f7e77f7f7fc7ff7f7c777f77cf7c77f77e77e7e77e777cc7f7fe777e7e77e77e7e7eb7ccccf7ccf7ccff6669866cc9869a96a98989696acf966a6c66cf7fef777e7e7e7e77f7fe7e7e7e7e77ee7c7e7e7e7c777e77c7e7c7f7fecf7ff7e7e7e7f7f7cf7c77f77ec7c7f7c7e7c7c7c7f7f7e7f7f7f7f7f7fcfcf7f7f7f7fc7f7f7f7c7f7f7fcc7fccecc7f7ffffff7fffffffff7ffcfffffffcf
                        cfcfffcfffff77e7f7cf7f7fc7fc7f7ef77e777e7f77fcffc777e77e7fefffccfef77e7e77e77e7e77e7f7f7f777fffcfc6a696cccc9666696698966a66cf66666cfcfcf7f7e7e7e77c77f77fcf77c777c7e77c77e7c77f77e7c7f77e7f7f7f7f7fcf77c7f77c77ef7f7ef7e7f7c7f77f7f7f7f7f7e7f7c7f7c7ec7f7cf7f7f7fcf7f7f7f7f7ce7fef7fcc7f7f7f7f7fcfcfcfcfcffcf7ffcfffffff7ffcffff
                        7ff7fcff7ffff77e77e7f6f7fc7fcf7f7e7f7f7f77e7777f7fe77e7e7ff7ff7f7c7fe7e7e7e7e7e7f7e77f7c7f7ffcffcf696cccccf69a6a66a69896966ccc6a98ef6cf7777e77c7c77e77fec77c7e7c77e7f77e7f77f77e7f77e7e7f77f7fec7f7f77e7f7e7f7fcf7e777c7f7c7f7c7c7c7c7e7cf7f7c7f7cf7f7f7fefcffcf7fcf7fc7f7cf7fc7f7f7f7f7fcc7f7f7f7fffff7ffcfffffff7ffcffffff7fff
                        fcfcf7ffffcffef7f7f7cecf7fc7f7f77f7c7f7ec7f7fe77f77f7f7fffffff77fcf7f7f7f7e7f7f7ef7e77e7effcffcffcf6ccccf7c666989696a6a66cfefc668cf7f77e7e7e7e77e7f7efcf7f7e77c77c777e77e7777e77e7e77c7c7fefce7f7e77e7f77e7c7fe77f7f7f7e7c7f7e7f7f7f7fcf77c7f7f7c7c7fcfcf7f7f7fcf7f7f7cf7f7f7f7f7f7f7fcf7f7fcf7f7fcf7ffffcfcfcf7ffffff7ffcffffcf
                        7fcf7fcffff7f77f7c7f7f7f7f7f7f7fc7f7f7c7f7ce7cf7ecf7e7fffcffcfe777fcf7c77f7f7e7f7ff7fc7ff7ffcff7ffc7e7c7cfcc6c6c6a669698bcf77ffe6f7e7e77e7c7c7f7e77f7f7f77e7f77e7e7e77c77e7e7e7f77c7ff7f7f7f77c77f7c7c7e7c7fcf7f7e7c7e7f7f7e7f76e7cec77c7f7f7ec7fcf7fc7fcfcfcf7fcf7f7f7cf7f7f7fcccf7f7c7f7f7f7f7f7ffff7ffff7ffffffcfcfffff7fffff
                        fcffff7f7fffff7c7f7c77f7f6fcf7fcfc7f7f7f7f7f77ef7f7fcfcffffcfff7f77f7ffcf7e7f7fcffcfffc7ffcff7ffcfff7f7f77efcc6cc696a66c6fcfccff77e77e7e7e77e777e7fcfc77e77e7e7f77f7e7e7e7c7e7c7e7f7f7fce7f7c7f7e7c7f7e7f7f7f77c7f7c7f7c7e7f7c7cf7f7f7f7f7f7cf7f77ff7ff7f7f7f7fcf7f7ccf7cecccf7f7f7fcf7fcf7f7fcccf7ffcffcfffcf7fffffffcfcfffcf7f
                        cf7f7fffcfffcffef7f7fe7c7f7c7fc7f7fcc7f7ce7fcf7ffffcfff7fcff7fffcf7ecc7f7fcf7fffcffcffff7ffcffcff7fffff7cf77f7fec6c669cfcf7e7f77e7c7e7e7c7f77f7e7fc7f7e7c7f777e7e777e77e777e7f77c7fcfc7f77c7f77c7f77c7f7cf7f7ce7f7c7f7e7f7f7cef77c7f7f7f7cec7c7fcf7fcfcfcfcfcfcf7f7fc7f7f7f7f7f7f7f7c7f7f7fcc7f7f7ffffcff7ffffffcf7fffffffcfffff
                        f7ffcf7ff7fffffffc7f7fcf7fcfc7fc7f7f7fcf7fc7f7ffcf7ff7fffffffffffffcfffcf7f7fcf7fcff7f7fffcfcff7fffcf7fffffc7fc7f7cc66fc7fcf77e7c7e7c77f777e7e7ffcff7e7f7e7e7f77c7e7c7e7f7e777e7ff7f7e77c7f77e7f77c7e7c77f7c7f7f7e7f7cf7c7ce7f7cf7f7c7cef7f7f7f7fcfcf7f7f7f7f7f7f7ccf7fcf7f7f7fccf7fcfcf7f7fcf7f7fcfcff7ffcf7fcfffffcf7fffff7ffc
                        ffcffcfcff7fcf7fffffc7f7f7c7fc7fffccf7f7f7f7ffffffffffffcf7ffcf7fffff7ffff7f7fffff7fffffcff7fcfffcfcffcfcfcffcfcf7fcfecfcf77e7c7e7e7f7e7e7f7c7fc7f7c77c77e7c77e7e7f77f77777f7cfcf7f7e7f7e7e7c7f7e7c76f7fe7c7e7c7c7f7c7e7f7f7f7c7e7cef7f7c7f7f7ff7f7f7ffcffcfcf7f7fc7f7f7f7fccf7f7fc7f7f7fcc7f7fcf7fff7fffffffff7ffcfffff7fcfffff
                        7ff7ff7f7ffcffffffcfff7f7ffff7f7ffff7fccf7fcffcf7fcfcfcffffffffffcf7fffcfcfffcfcffffcfcff7ffff7fcff7fffcf7ffcff7f7fefcf777e7f7e7f77f77e7c77e7fcff7f7e7f7e7f7e7c7f77e7e7f7f77e7f7f7e7c77c7f7c7f7e7f7c7e77f7f7f7f7f7c7f7f7f7c7c7f7f7f77f7f7f7ccf7ffcfcfc7f7f7f7fcfc7fcf7f7fc7f7f7f7f7fc7fc7f7fcf7f7fcfffffcf7fcffffff7ffcffffffcff
                        fcffcffffcf7f7ff7fff7ffcffcffffffcfffff7fc7fffffffffffff7ffcf7ffffffffff7ffcffff7ffffff7fffcfffff7fffcffffcff7ff7fcf7f7e7f7e7c7f7e77e7f77c7ffc7f7c77f77e777c7f777e7f7c7e7e7ffcf7c7c7f7f7e7f7e7e7c7c7f7f7c7e7c7e7c7f7c7f7cef7f7c7f7cf7fc7f7f7fcfc7f7f7ffcfcf7f7f7fc7f7fcc7fcf7fccf7fcf7f7fcf7f7f7fcf7ffcffffff7fcf7fffffffcfcfffc
                        f7fcf7f7fcffcfcfffcfffff7ff7fffcfff7fcff7fcfcf7ffcf7f7fffffffffcfcffcfcffcff7fcfffcf7ffffcff7fcfcffcf7f7fff7ffcfc7fc77c7f77e77e77f7e7c7c7f7f7ffcf7e77e7c7f7e77ee7f77e7e7c7fcef7c7f7e7e7c7c7e7f7f7f7e7c7c7f7f7f7f7f7fe7ce7f7f7f7f7f7cf7fcceff7f7ffcffcf7f7f7fcc7f7fcf7f7ff7f7f7f7fcf7fcfcf7f7fccfcf7fffff7ffcffffffffcfcfffff7fff
                        fff7ffffcf7ff7fcfff7fcffffcffcfffcffff7ffffffffff7ffffffcfcffcfffffffff7ff7fffffcfffffcfff7ffff7fcffffffcfcffcffcf77f7f77e7f7f7c77ef7e7f7fcfcf7f77ce7f7e7e7f7e7f77e7c7f7ffcf77c7e7c7f7c7f7f7f7c7c7f7f7f7f7c7ec7ec7e7f7f7f7c7f7f7cef7fcf7f7fcfcfcf7f7fcfcfcf7f7fcf7f7f7f7fccfcf7f7f7f7f7f7fcf7f7f7ffffcfffffffcf7ffcffff7ff7fffcf
                        7fffcf7ffcfcffcf7ffffffcfffcfff7fffcfffffcf7ffcffffcffcffff7fff7ff7ff7fffffcfcfff7fcfff7ffffcfcfff7fcfcff7fcff7f77f7e7e7f7c77e7ef777f7f7fcf7f7c7e7f77e7f7c77e777c7c7f77f7f7f7f7f7f77c7f77e7c7c7f7e7c7e7f7ef7f7f7f7f7f7cf7f7f7cec7f7c7f7fff7f7f7f7ffcf7f7f7f7fcf7f7fcfcfc7f7f7fcfcf7fc7f7f7f7fcfffcffffcfcf7fffffffffcfffffffffff
                        fcf7ffcf7ff7fcf7fc7ffcfff7fff7ffffff7fcffffffff7fcffcff7fffffcfffffffffcf7ffff7fffff7ffffcfcfffcfffff7fcffff7fffc7e7f7f7e7f7f7777fe7cf7ff7ff7c7f7e7c7f77e7f7c7f7e7f77fcfcfc7c7e777f7e77f7f7f7e7c7f7f7f7c7c7f7c7f7c7f7f7c7f7fcf7f7f7f7ffc7ffcffcffcf7fcf7f7fcc7f7fc7f7f7fcf7fc7f7f7f7ffcfcf7fff7f7ffcffffffff7ffcff7fff7ffcffcff7
                        ffcfcffcfcfff7fffffcf7ffffcfffffcf7ffffcf7ffcfffffcff7fffcfffffcffcfcfcfffcf7fffcf7fffcfffff7f7ffcf7ffff7fcfffcf7f7f7e7c7f7e7ef7e7f7fcfcfcf7e7f77f7e77c7f77e7f7e7f7ef7f7f7e7f7c7f7e7f7f7e7c7f7f7f7c7c7f7f7f7c7f7cf7ce7f7f7ce7f7f7cf7f7fcfcf7f7f7f7ff7f7fcf7f7fcf7ff7f7f7f7fcfcf7fcfc7f7f7fcfcfffffff7fcf7fffffff7ffffffffffff7ff
                        fcff7f7ff7f7ffcf7f7fff7f7ffcffcffffffcfffffff7ffcff7ffffff7fcfff7ffffff7ffffffcffffffffcf7fffffffffffcfcfff7fcffc7e7c7f7e7e7f77fcfcfcf7f7f7c7e7e77c7f7f77ec7f77c77ef7fef7f7c7e7f7e7f7c7c7f7e7c7f7e7f7f7ec7ef7f7f7ef7f7f7cf7f7cc7f7f7cfcf7f7ffcffcf7f7fc7f7fcf7f7f7fcfcfcfcf7f7f6f7f7fcf7f7f7ffcfcfcfffffffcffcfffffcfcffcf7fffff
                        cf7ffffcffffcf7ffcfc7ffcfcf7ffff7ffcfff7ffcffffff7fffcfcfffff7ffffcf7ffffcf7fcff7ffcfcfffffcffcf7fcfcf7ff7ffffcff7f7f7ef7f7f7cef7f7f7ffcf77e777c7e77e7e7f7e77ec7fcf7fcf7c7e7f7f7cc7c7f7f7ec7f7f7c7f7cec7f7f7c7f7c7f7cf7f7ec7f7fcf7cfcf7ffcfcf7f7fcfcf7ff7fc7fcfcfcf7f7f7f7fcf7f7fcfcf7fcffcffcffffffcfcfcff7ff7ffcfffff7fffffcf7
                        fffcfcff7fcf7ffcff7ffcf7ffffc7fffffff7fffff7ffcffffcfffff7fffffcffffffcfffffffcfffffff7ffcff7ffffffffffcfffcf7fcf7c7ce77f7c7f7f7fffcf7f77f77f7e77f7f7c7f7e7f7f7ef7fcf7c7f7f7c7c7f7f7f7e7f7f7c7e7f7cf7f7f7f7f7f7ef7cf7c7cf7f7fc7f7f7f7ff7f7f7ffcfc7f7fc7fcf7fc7f7f7f7fcffcf7f7fcf7f7f7fcf7f7fff7fcf7ffffff7fffffffffcf7fffffcf7ff
                        cfcff7fcff7ffcff7ffcf7ffc7f7ff7f7cc7ffcf7f7fcf7f7f7f7f7f7fcf7f7f7f7fcff7ff7ffcffcf7f7fffff7fffcfcf7fcf7ffcffffffcf7f7f7f7ef7efcfc7f7ff7f7ece7c7e7777e7f7e6f7c7f7fcf7f7f7e7c7f7f7e7c7ecf7c7c7f7f7cf7e7f7cf7c7f7f7cf7c7fc7f7f7cf7f7fcff7ffcfff7f7ff7fc7ff7f7fcfcf7fcfcf7f7f7fcf7f7fcfcfcf7ffff7fffffffcf7ffffffcfcfcffffffcff7ff7f
                        f7fcffff7ffcff7ffcf7ffcfffffcffcffff7f7fcffcf7fcfcfcf7fcfc7fcfcfcf7f7c7f7ffcff7ffffffffcfffffffffffffffcff7fcf7ff7f7c7f7c7e7f7f7ffff7c7ce7f7f77f7e7e7f7c7e7f7fcfcf7f7c7f7f7f7e7c7f7f77c7f7f7ce7f7e7f7cf7f7fe7f7f7c7fc7f7f7cf7f7f7fcf7fcf7f7fcff7fcf7fc7fcf7f7f7fc7f7ffcfcf7f7fcf7f7f7fcfcf7ffffcfcffffffcffcffffff7ffcffff7fccf7
                        ffff7fcffcff7ffcf7ffcfc7f7fcf7f7f7f7ffcf7f7f7fcf7f7f7fc7ffc7f7f7f7fcff7fcc7f7fc7f7fffcfff7ffcf7fcfcf7fff7fffcffcfc7f7f7ef7fffcffc7f7f7f7f7c7f7f7c7f7c7e7ff7fcf7f7ff7ce7e7c7e7f7f7c7fef7f7cef7f7cf7f7fcf7ce7fc7fecf7f7f7fef7f7fcefc7ffcf7ffcfcf7f7f7fcff7fcf7fcf7ffcf7f7f7ffcf7fcfcfff7f7fffffcffff7fcf7ffffff7ff7ffffffcf7fcf7fc
                        fcfffff7ff7ffcff7ffcf7ffffffcffcfcffcf7ffcfcfcf7fcfcfcff7f7fcf7f7fc7f7fcf7fcf7ff7f7c7fcfffffffffffffffcfffcff7fff7f7e7f7c7f7ffcfff7cec7f7f7f7e7f7f7c7f7f7ffcf7ffcf7c7f7f7f7f7c7cef77c7f7f77c7f7f7f7fc7f7f7f7f7c7f7f7fcc7f7f7f7fcfff7fcffcf7f7fcfcfcf7f7f7f7fcf7fc7ffcffcf7f7fcf7f7f7ffcfcffcfff7fffffffff7fffffffffcf7f7fcf7ff7f
                        ff7fcf7ffcffcf7fccf7ffcfcf7ff7ff7f7f7ff7f7f7f7ff7f7f7f7f7ff7f7fcf7ff7fc7fcf7f7f7fcff7f767c7cffcf7fcfcfffcff7fffcfc7f7f7f7ffcfff7fcf7f7f7c7f7f7f7e7f7f7cfcf7f7fcf7c7f7c7f7c7c7f7f77f7f7c7ef7f7c7c7fcf7f7c7f7f7fcf7f7f7f7f7fcccf7f7f7ff7f7fcffcf7f7f7fcf7fcff7f7fcff7f7f7f7fcf7f7fcfcfcf7f7ffff7fffcfcfcfcfffcffcffcffffcf7f7f7fcf
                        7fff7fffcfcffcfff6f6fcf7fffcffcffcffcfcffcffff7fcfcff7fcf7fcff7fcf7fcf7fc7f7fcfcf7cf7fcccf767f7ffffff7fff7fffcff7fc7f7fefcff7fffff7c7f7fef7cec7fcc7f7ff7fcfcfcf7f7f7f7f7c7f7f7e7f7c7ce7f7c7f7f7ffc7f7cf7f7f7cc7f7cccf7fcf7f7fcffcffcffcf7f7f7f7fcf7f7fcf7f7fcfcf7ffcf7fcfcf7fcfcf7f7fcfff7fcfffffffffffffcfff7fffff7f7fcfcfcfcf7
                        ffcfffcfff7f7fcf7ffeffcfcf7fcff7ff7fcf7fcf7f7ffcf7f7ffcf7fcf7fcf7fcf7ff7ffcf7f7f7f7fcf7f7fcfc7f7c77cfffcfffcff7fff7f7ccf7f7fffcfcff7f7f7c7f7f7f7f7fefcfcf7f7f7fc7f7e7f7ef7ec7f7c7cf7f7f7f7f7cffc7f7cf7cf7fccf7f7f7f7f7f7cf7ff7f7f7f7f7fffcfcf7fc7fcfcf7fcfcf7f7ff7f7ffcf7f7fcf7f7ffcf7f7ffffffcfcf7f7fcffff7fffcf7fcf7f7f7f7f7ff
                        cffcfcfcfcffffcffcff7ff7fcff7fffcfff7fff7ffcfcf7fffcfcf7fcf7fcf7fc7fc7ff7f7fcfcfcfcf7f7f67c7ff7ffff7f7c7f7ff7fffcfffff7ffffffff7ffffcf7fcf7f7f7f7fcf7f7fcffcff7f7cef7c7f7f7f7c7fc7c7f7c7f7cfef7f7f7f7f7ce7f7f7fcf7fc7fcf7fcfcffcffcffcf7f7f7ffcff7f7f7fcf7f7fffcfcfcf7f7fcfcfffffcf7ffcffcfcfffffffffff7fcffffff7f7f7ffcfcffcf7f
                        f7ff7ff7ffcf7ff7ff7ffcff7c6ffcf7fcfcfcfcfcf7f7ffccf7ff7fff7fcf7fcff7ff7fcfcf7f7f7f7fcfcefffc7fc7c7f7f7fcf7f7ffcff7fcfffcfffcfcffffcf7cf7e7f7fcecf7fcfcf7f7f7f7f7f7f7cf7e7c7cef7c7f7f7f7f7f7f7f7f7ce7f7f7fc7f7f7c7f7fcf7f7ff7f7fcf7f7f7ffcfcf7f7f7fcfcf7f7fcfc7f7f7f7fffffff7fcf7ffffcf7fffff7ff7ffcffcfffffcfcf7ffcfcf7f7f7cf7fc
                        ffcfffcff7fffcffcffcf7fcff7ffcffff7fff7fffffffcff7ffcffcfcff7ffcf7fcf7fcf7f7fcfcf7f7f7f7f7cfcf7ff7fcfc7f7fcf7c7fcfffcfcfcfffffffcff7f7f7fcf7f7f7ffcf7ffcffcf7cce7f7c7ef7f7f7f7c7f7f7cec7fcff7f7cf7fc7f7f7fc7fcf7fcf7f7fcf7ffcfcf7ffcffcf7f7fcfcfcf7f7ffcf7fcffcfcfcf7fcf7fffffffcf7fffffcf7ffffffff7ffffcfff7f7fc7f7f7fcf6c6cfcf
                        cffcfcfcffcfcf7c6cf7ffcfcffcf7fcfcfcfcfcf7fccf7fffcff7ff7fcffcf7fcf7fcf7fcfcf7f7ffcfcf7fcf7f7fcf7fc7f7fcf7f7fcf7f7cff7fff7ff7fff7fff7fcf7f7fcfcfcf7ff7f7f7f7f7f7f7f7f7c7f7f7c7f7f7cef7ffcf7cc7f7ce7f7fecf7fc7f7fc7fcf7f7ffcf7f7ffcf7fcf7fcf7f7f7f7fff7f7ffcf7f7f7f7fffcffcf7f7fffffcfcfffffffcff7ffffcfff7f7fcf7ffcfcfcf7fcf7f7f
                        f7ff7fff7fff7fffcf7ffcf7f7fcfff7ff7fcf7f6fcffcfcf7fcffcfff7fcfcff7ff7fcf7f7f7fcf7f7f7ff7f7fcf7f7fef7fcf7f7fc7f7f7f7c7ffcffffffcfffcfc7f7f7fcf7f7f7fcfcfcf7f7f7f7ce7f7f7f7cef7f7f7cf77f7f7f7f7fcef7f7f7c7f7f7fcf7fcf7fcffcf7ffcfcf7ffcf7fcf7fcf6fcfc7fcff7f7fcffcfcf7fff7ffffffcf7fffff7ffcfffffffffcfff7ff7fcf7fc7f7f7f7fcf7ffcf
                        cfcffcfffcfffcfc7fcfcf6fcff7f7ff7fff7f6c7c7f7ff7fff7fcf7fcff7ff7ffcff7fcfcfcf7fcfcfffcffffc7fcfcf7fcf7f7fc7fcf7fcf7fc7f7ffcfffff7ffffcf7fcf7ffcfffcf7f7f7f7f7ccf7f7f7cf7f7f7c7f7c7cfcfcff7f7f7c7f7fccf7f7fcf7f7fc7f7f7f7fcf7ff7fcfcf7fcf7ff7f7fcf7ffcf7ffcfcf7f7f7fff7ffcf7fcffffcf7fffffff7ff7ffcfff7ff7fcf7ff7ffcfcfcfcf7fcf7f
                        fff7ff7fff7fff7ffcfcf7ffcfcfffcffcfcfcfcfcfffcffcfcfcf7fcf7ffcffcf7fcf7f7f7fcf7f7f7cf7f7f7ff7f7f7f7f7fcf7ff7f7f7f7f7fc7f7cff7fcfffcff7fcf7ffcf7f7f7f7f7f7fccf7f7f7f7f7ec7f7f7f7fef7f7f7f7f7ccf7f7f7f7f7fc7f7fcf7ff7fcfcf7ffcf7ff7f7ff7f7f7fcff7f7fc7f7fcf7f7fcfcff7cfffffffff7fcfffffcfcf7fffffffff7ffccf7fcf7ffcf7ff7f7fcfcf7fc
                        f7fffcfcfcfcfcffcf7fffcf7ff7fcf7ff7ff7ff7fcf7f7ff7fcf7ff7ffcf7f7fffcfffcfcf7fcfcfcf7ffcfffcffcf7fcfcf7f7f7fcf7fcef7f7fcf7f7cffffcff7ffffffcf7ffcfcf7f7f7f7f7cf7cecccef7f7ce7f7c7c7fffcf7fccf7f7fc7f7f7f7ff7fc7fc7fcf7ffcfcf7ffcffcfcfcffcfcf7fcff7ffcfcf7fffcf7f7fffffcf7fcfcfff7f7fffffffffcffcf7ffc7f7fcf7ffcffcfcf6fc6f7fcff7
                        ffcfcfff7fff7fcffffcf7fffcffcfffcff7ffcffcf7fffcffcf7fcffcf7ffcfcf7f7f7f7fcf7f7f7fcf7f7f7fcf7ffcf7f7fcfcfce7fcef7fcfc7f7f7f7c77fffffffcf7ff7fcf7f7fcfccf7f7f7f7f7f7f7c7fc7fc7fef7fc7f7fc7f7ef7c7fccf7fcf7fcf7fcff7fcf7f7f7ffcf7f7fcf7f7f7f7fcf7fcfcf7f7ffcf7f7fcf7cf7ffffff7ff7fffff7fcf7fffffffffcf7ffcf7ff7fcf7ff7fc7fcffcf7ff
                        cfff7f7fff7ffff7f7ffffcf7fcf7f7fcfcfcf7f7fffccf7f7fffcf7f7ff7f7ff7ffcfcff7fcffcff7fcfcfcf7fff7fcfcfcf7f7f7ff7f7f7f7f7fcf7fcf7fc7cf7ffcfffffff7ff7f7f7f7fccf7f7fcf7f7f7f7f7f7f7cffcffc7c7f7f7cf7f7f7fc7f7fc7fcf7f7fcfcfffffcf7ffcff7fcfcfcfcf7ff7f7f7fffcf7ffcfcf7ffffffcfcffcfffcfcfffffffcfcf7f7f7ff7f7ff7fcf7ffcfffffc7f7ffcf7
                        fcfcffffcfffcfcfffcf7ffcff7ffffcf7ff7ffffc7ff7ffffc7ff7fff7ffcfcffcff7f7ffcf7f7fcf7f7f7fcf7cffcf7f7f7fcf7fcf7fcfcf7fc7f7f7c7f7fc7f7ffffcf7fcff7fcfcf7f7f7f7fec7f7f7f7f7f7f7fef7f7f7cf7f7cc7f7fcf7fc7fcfcefcf7fcfcf7f7f7f7f7ff7ff7fcf7f7f7f7fcf7fcfcfc7f7ff7f7f7ffc7ffcffff7ffcfcfffcf7ffcffffffcf7fccfcf7fcf7ffcf7fcf7f6f6fcf7ff
                        ff7fcfcff7fcfffcfcfffcf7fffcf7ffff7ffcf7fffcffcf7fffcffccffcf7f7f7fcffcfcf7fcff7fcffcff7fff7f7ffffffcf7ff7f7fcf7f7f7ff7fcf7fcf7f7fc7cfffffff7fcc7f7f7fcf7fc7fcf7f7fccf7fcef7cffcff7f7f7f7fc7f7f7f7fcf7f7f7f7fc7f7ffffcfcfffcff7ff7f7fcfcfcf7f7ff7f7fffcfcfcffcfcf7fffff7ffffcfff7ff7fffffcf7f7c7ffcf7fcfcf7ffcf7ffcf7fcc7ff7ffcf
                        7ffff7fcffff7f7fff7f7fffcf7fffc7fcfcffcfcf7fcf7ffcf7f7ff7f7fcfffcfcf7ff7f7ff7fcf7f7f7fcf7fcfcf7f7f7f7ff7fcfcf7f7fcfc7fc7f7f7f7f7f7fc777fcf7ffcf7fcf7fc7fc7fcf7f7fc7f7cf7f7fcf7ff7cf7ccf7f7fcf7fccf7f7fcf7fffcff7fcf7fcf7f7f7fcfcfcffcf7f7fcfcfcfcff7f7fcf7f7f7f7ffcfcffffcfff7fffffffcf7ff7fcfff7f7ff7ff7ffcfcff7f7ffcfffcffcf7f
                        ffcfffff7fcffffcfcfffcf7fffcf7ffffcf7ff7fffcfffcf7ffffcffcff7f7fcf7ff7ffcfcff7ffcffcfcf7fcf7fcfcfcfffcfcf7f7fcfcf7f7fcfcf7fcef7fcc7fffc7fffcf7ff7f7ffff7ff7f7f7f7fecf7ef7ff7ff7fc7f7f7cf7f7e7f7f7fcfcf7ffccf7fcff7ffcf7ffcffcf7f7f7f7ffcf7f7f7f7f7ffcfcf7fcfcfcf7f7fff7fff7fffffcf7fffffcfcf7f7fcfc7ff7ffcff7f7ffcfcf7f7f7fcf7fc
                        fcf7fcfcfff7fcff7fcfcfffcf7fffcf7ffcfcffcf7f7f7fffcf7fc7ff7ffcff7ffcffcf7fc7ff7fcf7f7fcfcf7fcf7f7f7f7ff7ffcf7f7f7fcf7f7f7fcf7fc7f7f77c7f7cfffc7fcfffcffff7fcf7fcf7f7f7f7fcffcfc7f7fc7f7f7cfcf7fcf7f7f7fcf7fff7fcff7f7ffcfcf7fcfcfcfcf7f7ffcfcffcff7fcf7ffcf7f7fcffffcfffcfffcfcffffff7f7f7f7fcf7f7ff7fcfcf7ffcfcf7fcffcfffcf7fff
                        cffff7ffcfffff7ffff7f7fcfffcfcfff7ff7fcf7ffffcfcf7fcfcff7ffcfcf7fcf7f7fcffff7ffcf7fff7fcf7ff7ffcfcfcf7ffcf7ffcf7fcf7fcf7fc7f7f7fcf7ff7fcf77ffff7fcf7fcfcfff7fcc7fcf7fcf7ff7f7f7fcf7fcf7fef7f7fc7fcf7ff7fff7fcfcf7ffcfcf7f7ffcf7f7f7fcfcf7f7fc7f7fcfcf7fc7ffffff7f7ffffcfffcffff7ffcf7fcfcf7fcf7fcf7ffcf7fffcf7f7ffcf7f7f7cfcfcf7
                        fcf7fff7fcf7fffcf7ffffff7fcf7fcfcfcfff7ffcf7ffcfcffcf7fffcf7f7ffcfcffcf7f7fcfcf7ffc7ffcf7fcff7f7f7f7ffcf7ff7f7ffc7fcf7fcf7fcf7f7f7f7cf7f7fc77ffffffffffffcfff7ff7f7f7f7fcffcf7f7f7f7f7f7f7f7f7ff7f7fcff7fcf7f7fcfcf7f7ffffcf7ffcfcf7f7fcffcfffcfcf7fcfcffffcffffcffcffff7fff7ffff7f7fcf7f7ff7ffcf7fccf7fcf7fcfffc6f7fff6c6ff7fff
                        ffcffcffffffcfcfffcfcf7ffcffff7ff7fcfcfcffcfcf7ff7f7ffccf7ffffcf7ff7f7fffcf7fcff7fffcf7ffcf7fcffcffcf7f7fcfcfcf7ff7fcf7f7fc7fcfcf7fcf7f7f7fcf77fcf7fcf7ffffcff7fccf7fcffcf7f7fcf7f7f7fccf7fcfc7fcfcf7fcfcf7fffcf7fffffcc7f7ff7f7f7ffcfcf7f7f7f7f7ffcf7f7fcfff7ffffff7fffffcfffc7fcfcf7fcff7fcf767fcf7ffcfcff7f7f6fcfcf7ff7fffcf7
                        fcfcff7fcf7ff7fcfcfffcfcff7f7ffcfff7ff7fcf7ffff7ffffcff7ffcf7fcff7ffcfcf7fffcf7ff7f7fcf7fcfcf7f7f7f7fcffcf7f7fcf7fff7ffcf7ff7f7f7fc7f7fcec7f7fc7fcffffff7ffffffc7f7fcf7f7fcfc7f7fccfc7f7fcf7ffcf7f7ffcf7fffccf7ff7f7f7fffcfcfcffcfcf7f7ffcfcfcfffcf7ffcffff7fffcf7ffffcfcfff7fff7f7f7fcf7fcf7f676cf7fcf7f7fcfffcf7ff7ffcffcf7fff
                        ff7fcffff7ffffff7fcf7fff7ffffcff7fffcfff7ffcf7ffcf7ff7ffcf7ffcf7ffcf7ff7fccf7ff7ffcff7ffcf7ffcffcfcfcf7f7ffffcf7fcfcfcf7fcf7fcf7f7fcf7f7f7f7f7f7f7cf7fcfff7fcffffffcf7f7f7f7fcf7f7f7fcfcf7fc7f7fcff7f7ff7f7ff7fcffcfcfc7ff7f7f7f7f7ffcf7f7f7f7f7f7ff7f7ff7ffffffffcffffff7f7f7cfcfcff7f7fcf7f7ccfcffcf7fffcf7fcfffcffcffcf7ffcf7
                        fffff7fcfffcf7fffffcfcfcffcfcf7ffcf7fcfcfcf7ffcffcfcffcf7ffcf7ffcf7ffcffcf7ffcffcf7fcfcf7ff7fcf7fcf7fcfcf7f7ff7fff7ff7fff7fcf7fcfcf7fcef7fcf7ccf7f7fcffcfffff7fcf7ff7fcfcf7f7f7fcf7fc7f7fcf7fcf7f7ffffcffcfcffcf7fcf7fff7ffcfcffcff7f7ffcfcfcffcff7ffcffffffcfcf7fff7fc7fcfcff7f7f7f7ffcf7ffcffcf7f7fcfccf7fffcf7ff7ff7ffcfcffff
                        cf7fffff7fcfffcf7fcfff7fcff7fffcffcff7ff7fffcff7fff7fcfffcffcfcf7ffcf7fcfff7f7f7fcff7fcff7ffcf7fcf7ff7f7ffcf7ffcfcfcffcf7fc7fc7f7f7f7f7fc7f7fc7f7f7c77fffcffffffffffff7f7fcfcfcf7fcf7fcf7f7ff7ffcfcc7fcf7fcf7f7ffcf7fcf7fcf7f7f7f7ffcfcf7f7f7f7fcfcf7f7fcfffffffffcffcff7f7f7fcfcfcff7f7f676f7f7ffcfcf7f7ffcf7fffcffcff7ff7fcf7f
                        fffcf7fcfff7fcfffff7fffff7ffcfff7ffcffcffcf7fcffcf7fff7fcf7ff7fffcf7fff7f7ffffffcf7ffcf7ffcf7ffcf7fcffcfcf7ffcff7ff7fcfcfffcf7fcf7fcf7f7fcf7f7f7fcf7fc77f7ffcfcfcfcfcfffc7f7f7f7fc7ffcf7ffcf7fcf7ffffcf7ff7ffffcf7ffcf7ff7ffcfcfcfcf7f7ffcfffcfcf7fcffffff7ff7fcf7f7f7f7fcfcf7f7f7f7fcffc7c6fcc6cf7f7ffffcf7ffcf7fcf7fcfcffffcfc
                        f7ffffffcfcfff7fcfcfcf7fffcff7fffcff7ff7ffcff7fcf7ffcfff7ffcffcf7fffcf7fffccf7f7fffcf7ffcf7ffcf7ffcf7f7f7ffcf7f7fcfff7ff7f7ffcf7fcf7fcfc7f7fcf7f7c7f7ff7fc77f7ffffffffc7ffcf7fcf7ff7f7ff7f7ffcf7fcf7f7ffcffc7f7ffcf7fcfcfcf7f7fcf7fcfff7fcf7fcf7ff7f7fcfcffffff7fcfcfcfcf7f7ffcfcfcf7f7ffc6fe67c7ffffc7f7fffcffcff7fffcff7f7ff7f
                        ffcf7fcf7ffcfcffcfff7ffcfcfcffcf7fcffcffcff7fff7ffcfcf7ffcff7ffffcf7fffcf7ff7fffc7f7ffcf7ffcf7ffcf7ffcfffc76fcffcf7fffcffcfcf7fff7fc7f7ff7f7f7fcfefcf7cf7fcf7f7c7ff7ffff7f7fcf7ff7fcfcf7fcfcf7fff7ffcfcf7f7ffff7f7ff7fcf7f7ffcf7ff7fc7ffcf7ff7ff7ffcfffffff7f7fcf7f7f7f7ffcf7f7f7f7ffcfcffeff7c6fc7f7ffffcf7fcf7fcfcf7f7ffffcffc
                        fcffffcffcff7ffcf7ffffcfff7fcffffff7ffcf7fcfcfcfcff7fffcff7ffcf7ff7fcf7fcfcffccfffffcf7ffcf7ffcf7ff76c76f7c67f7f7ffc7ff7ff7fffcfcfcfcf7f7fcf7fc7f7f7cf7f7f7f7fcf7c7ffcfffcf7f7fcfcf7f7ffcf7f7fcfcfcf7ff7fffcf7ffcfcff7f7ffcf7fcf7ffcffcf7ffcffcffcfffcf7f7fcfcf7ff7ffcfcf7fcfcffcff7fcf7f7fcf6cffffcffcfcf7ff7fffcf7ffffcf7fcf7f
                        ff7fcff7ff7ffcffffcf7ff7fffff7f7fcffcffffff7fff7fcffcf7f7ffcff7fcffffcff7ff7ff7f7f7fcffcf7ffcf7ffcfc6c6effcf6cfffcfff7ff7ffcf7fcf7ff7fcfcf7fc7fcf7f7f7f7f7f7f7c7ffc7f7fcf7ffcfcf7fcfcf7f7ffcffcf7f7ffcffcf7fcfcf7f7fcfffcf7ff7fcfcf7f7fff7fc7f7f7f7f7fcfcf7f7f7f7ff7f7f7fcf7f7f7f7ffcffffff7fff7f7ffcf7ffffcffcf7fffcf7ffcff7ffc
                        fcfff7fffcffcf7f7ffffcffcf7fffffff7ff7f7f7ffcf7fff7ff7fffcff7ffff7fcf7fffcff7ffffcff7f7fffcf7ffcf7ffefff7fcfef7f7f7f7fcfcfcfcff7ffcfff7f7fc7c67cf7fccf7fccfccf7f7cf7f7f7ffcf7f7fcf7f7ffcf7ff7f7ffffcf7f7fcff7fcffcf7f7f7f7fcff7f7f7fff7fcfcffffcfcfcf7f7f7fcfcfcfcfcfcff7f7fffcfcfcff7f7fcffcfcfffcffcfcf7ff7ffcfcf7fffcf7fffcff
                        7fcfcffcffcffffffcf7ffcffffcf7fcfcfcffffffcffffcfcfcffcfcf7ffcf7fffcffcf7f7ffcf7ff7ffffc7f7ffcf7ff7ff7fcfcf7fcfcfcfcfcf7f7ff7fffcf7f7fffcf7fc6c76f7f76c7f7f7f7fcf7fcf7fc7f7f7ff7f7fff7fcff7ffffc7f7fffcff7fcff7f7fcfcfcfcfcf7ffcffcf7fcf7ff7f7f7f7f7ffcfcfcf7f7f7f7f7f7ffcfc7f7ffcf7ffcff7fcf7fcf7f7fff7ffcffcf7ffffc7ffcfcf7fcf
                        fff7fcff7ff7fcf7ffffcff7f7ffffcf7fff7fcfcff7cfcfcff7fcf7fffcf7ffcf7fcf7ffffcffffcffcf7fffffcf7ffcff7ff7fcf7f6f7fcf7fcf7fff7ffcf7ffcffcf7ffcf7fccfcf7cccf7fcf7fc7fc7f7f7fc7f7fc7fcf7cfcf7fcfcc7fffff7f7fcffcf7ffcf7f7fcf7f7fcf7fc7f7ffcfcf7fcfcfcfcff7f7f7f7ffcfcfcfcfcf7fcfffcfcf7ffcff7fffffff7ffffc7ffcf7fcf7ff7f7ffcf7ffcff7f
                        cfffff7ffcfff7fff7fcf7ffffcf7ffffcfffff7fcf6c7ff7fffffffcf7fffcffcff7ffcfcff7fcf7fcfcfcf7fcfffcf7fcfcffcf7fcc7cf7ffcf7fccfcfcf7fcf7f7fffcf7ffcf7f7fcf7f7fc7fcf7f7fcf7fcf7fcf7fcf7fcf7f7fcf7fffcf7fcfcff7f7ffcf7fcfff7fcffcf7ffcffcfcf7f7fcf7f7f7f7f7fcfcfcf7f7fcf7fcf7ffcf7f7fcf7fcff7ffcf7f7fcfcf7fffcf7fff7fffcfffcffcfcff7fff
                        f7fcfcffcfcffffcffffffcfcffcfcf7ff7fcfcfffff7f6ffcf7f7fcfcfcf7fcf7fffcff7fcffcffff7ff7fffcf7f7fffcf7fcf7ffcfff6ff7f7ffcf7f7f7fffcf7ffccf7ffcf7fcf7c7cf7fcfc7f7fcf7f7fc7fcf7fcf7fc7f7fcf7f7fc7f7ff7ff7fcfff7f7ff7f7fcfcf7f7ff7f7f7f7f7ffcf7ff7ffcff7fcf7f7fcfcfcf7ff7ffcff7ffcf7fffcf7ffcfffcffcf7ffcf7fffcfcffcffcfcf7ff7f7ffcf7
                        fff7ffcff7fcf7ffcf7fcff7fcff7fffcfffcff7f7fffffcffffffff7ff7fff7ffcf7fcfff7fcf7f7ffcffc7ffcfffcf7fffcf7fcf7f7fcf7fffcf7ffcfffccf7ff7f7fffcf7ffcf76c667cf7f767cf7fcfcf7fc7fcf7fc7ffcf7f7fcf7ffcf7fccfcf7f7ffcfcffcf7f7f7ffcf7fcfcfcfcf7cf7fcfcf7f7ffcf7ffcf7fcf7ff7ffcf7fffcf7ffc7f7ffcff7fcf7f7ffcf7ffcf7fcf7ff7ff7fffcffffcffcf
                        fcffcff7ffffffcffcfff7ffff7ffcfcfcf7f7ffffcf7fcf7f7fcf7ffcf6ccffcffcff7fcfff7ffffcff7fffcf7fcf7ffcf7fffcfffcff7ffcf7fcfcf7f7f7f7fcfcff7f7fffcf7ffc67cf6fcfcccf7fc7f7fcff7f7fc7ff7f7fcfcf7ff7f7fcf7f7f7fcf7f7f7f7fcfcf76b7f7ff7f7f7f7f67cfcf7f7fcf7f7ffcf7ff7f7fcffcf7ff7f7fffcfffffcff7ffcfcfffcf7ffcf7fff7ffcffcffcfcf7fcff7ff7
                        ffcff7fffcf7fcf7ff7fffcf7ffcff7ff7fffffcfcffffcfffffcf6cffcf76fcf7ff7fff7f7ffcfcff7ffcfcffff7fffcfcfcf7f7f7fcffcf7ffcf7fcfcfcfffcf7f7fcfcf7ffffc7ffcfcf7f7f7ffcf7fcf7f7fcfcf7fcfcfcf7f7fcf7fcf7f7fcfcfcf7fcfcfcf7f7f76b6fcfcfcffcfcfcf6f7f7ffcf7ffcfcf7ff7ffcfcf7f7ff7ffcfc7f7f7f7fcfcfcff7fcf7fffcffcfcfcfcff7ffcff7ffffcf7ffcf
                        fcf7fffcffcfffffcffcfcfffcff7ffcfffcfcff7fcf7ffcfcf7ffc7fcff6c7fffcffcfcfffcff7f7ffcff7f7f7ffcfcf7ff7ffffffcf7f7ffcf7ff7fcf7fc7f7ffcfcf7f7fc7f7ff7fcf7fcf7ff7fffcf7fcfcf7f7ff7f7f7f7fcf7f7fcf7fcfcf7f7f7fcf7f7f7ffcffcfcf7f7f7f7f7fcf7feffcf7fffcf7f7ff7ffcf7ff7ffcfcfcfcffffcffcff7ff7f7ffcf7fcf7f7ff7fcf7fcffcff7ffcf7ffffcff7
                        fffffcff7ff7f7fcfcff7fcfcf7fffcfcfcfcf7ffffffcff7fffcfff7f7fffc6f7fcf7ff7fcf7ffffcff7ffffffcff7fffcffcf7fcf7ffffcf7ffcffcf7ffffcfc7f7fcfcfcffcf7fcf7fcf7ff7fcf7ff7fcf7f7fcf7fcfcf7ff7fcfcfcf7fcf7f7fcfcfcf7ffcff7f7f7fcf7ffcffcf7676fcfcf7fcfc7f7ffcfcfcf7fcf7ffcf7f7fcf7f7f7fcf7fffcffffcf7fffcffffcfff7fffcf7fcffcffcfc7f6f7ff
                        cf7fcf7ffcffffff7fcffff7ffffcff7ff7ffffcf7f7ff7ffcfcf7fffffcfcfffff7ffcffcfffcf7ff7ffcfcf7ff7ffcf7fcf7ffcfffcf7fcffcf7f7fffc7f7fcfffcf7f7f7f7fcfcfcff7ff7fcf7ffcfff7fcfcf7fcf7f7ff7fcf7f7f7ffcf7ffcf7f7f7ff7fc7fcffcfcf7fcf7f7f76bccf7f7ff7ffffcfcf7f7fcfcf7ffcf7ffcff7ffcfcff7ffcf7f7fcf7ffcf7fcf7ff7fcfcf7fffff7ff7ff7ffccffcf
                        fffffffcf7fcfcfcfff7fcffcfcff7ffcffcf7ffffffcfffcf7fffcc6ffcff7fcfffcff7ff7fcfcfcffcf7fcffcffcfffff7ffcff7fcfcff7f7fffcfc7fffcfcf7f7fcfffcfcf7f7f7fcffcfcfcfcf7fcfcf7f7f7fcf7fcf7fcf7ff7ffcf7f7fcf7ffcfcf7f676cf7f7f7f7ff7ffcfcfcff7ffcfcffc7f7fcf7fffcf7fffcf7ffcf7fcfcf7ff7ffcffcfffcfcfcffcff7ffcffcff7ffcf7fffcffcffcfcf7ff7
                        f7fcf7fcff6ff7ff7fffff7ff7fcffcff7ffffcf7fcff7fcfffcf7ff7c6f7fffc7fcf7ffcffcf7ff7fcffff7fcf7ff7f7fcffcf7fff7ff7ffffc7ff7ffc7fcf7ffcfcf7cf7ffcfcffff7fcf7ff7ffcff7ffffcfcfcf7fcf7fcfcf7ffc7f7fffcf7fcf7f7ffc7cf7cfcffcffcff7f7ff7fcffcf7ff7ffffff7ffccf7ff7f7fffcf7ffcf7fff7ffcff7ff7fcf7fff7ff7ffcf7fcf7ffcffffcf7fcf7fcf7fffcff
                        fffcfff7fcfcffcffcf7fcffcfff7ffcffcf7ffcffcfcfff7fcfffcff6f7fcfcf6cfffcff7ffffcfff7f7fcff7ffcffffcfcf7ffcfcfcffcf7fffcffcfffcf7fcf7f7ff7ff7f7ff7c7fff7ffcffcf7fffc7fcf7f7f7ff7ffcf7fffc7ffcfc7f7ffcf7ffcf7ffcffcf7f7f7f7fcfcfcffcf7f7ffcff7f7f7ffcff7ff7ffcfcf7fff7ff7f67cfcf7fcf7f6c7ffc7ffcffcffffcfffcff7f7ffcff7fcf6ffcfcfcf
                        cfcf7fcfcfcf7ffcffcfff7ffcfcffcf7ffffcff7ff7fcfcff7f7ff7ffccfcffff767ff7ffcf7ff7fcfffcf7ffcff7fcff7fffcff7ff7fcfcfcf7f7fc7f7fcff7ffff7ffcfcffcffffc7ffcff7ff7ff7fffcffffcff7ff7f7ff7f7ffcf7fffcfcf7ffcf7ffcff7f7ffffcffcf7ff7f7ff7fffcf7fcffcffcf7fcf7ffcfcf7ffc7ffcffc7c667fffcffccf6c6ffcf7fcf7f7ff7f7fcffffcff7fffcfcfff7fff7
                        ff7fffffcffffcff7ffcfcffcf7fcffffcf7ff7ffcfff7ff7ffffcffcfff7fc7fcffccffcffcfcffff7fcfffcff7ffcf7ffcf7fcffcfff7ffcffffffffff7fcffc7fcfcf7ff7f7f7fcffcff7ffcffcffcf7f7f7ff7fcfcfcf7fcfcfcfffcf7ff7ffcf7ffcfcf7fffcf7ff7ff7fcffcf7ffcf7fffcf7ff7fcff7fffcf7ff7fcfffcf7f7fc6cc6fcf7fcf7fc7fcf7ffffffffcfffff7fcfcf7fffcfcf7f7fff7ff
                        cfffcf7ff7f7ff7ffcf7ffcffffff7f7ffffcffcff7fffcffcf7c6fcf7fcffffffcfff7ff7ff7fcf7fffcf7ff7ffcffcfcf7fff7fcf7fcfcf7f7fccf7f7ffcf7fffcf7fcf7ffcfffcf7f7f7ffcf7ffcf7ffcfcfcffcf7f7fcfcf7fcf7f7fffcffcf7ffcff7fffcfcfcfcffcffcf7f7ffcf7ffc7f7ff7ffcf7ffc7fcff7fffcf7ff7fffcfffefcf7ff7ffcfff7ffcf7f7fcff7fcfcfff7fffcfcff7fffffcfcf6
                        fcfcfffcffffcfffcfffcff7f7f7ffffcf7ff7ff7ffcf7fcfffcfcffffcfcf7f7ff7fffcffcffffcfcf7fffcffcff7ff7fffcfcff7ffcf7fffffcf7ffffcff7fcf7fff7ffcf7fc7ffcfffcfcf7ffcf7ffcf7ff7fcf7ffcff7f7ffcf7ffcf7f7fcfffcff7ffc7fcf7f7ff7ff7ff7fffcf7ffcfffffcffcf7ffcfffcf7ffcf7fffcffcf7fcf7ff7ffcffcff7fcfcffcfffcf7fffcff7fffcfcfff7ffcc6cfff6fc
                        fff7fcff7fcf6f7ff7fff7ffffffcfcffcffcffffcffffff7fcf7f7f7ff7fffffcffcf7fcff7fcf7ffffcf7fcff7ffcffcf7fcf7ffcf7ffcf7fcfffcf7ff7fffcff7fcfcf7ffcff7f7fcff7fcfcffffcf7ffcfff7ffcf7fcfffcf7ffcf7ffcff7f7ff7ffcfffcf7fff7ffcff7ffccf7ffcf7f7f7f7fcf7fcf7f7f7ffcf7ffcf7fcffcf6fcfcf6ccf7ff7ffcff7fcfcfcfffcfcf7ffcfcff7f7fffcfcfcf7ffff
                        7fffff7fffff7fcfffcf7ffcf7fff7fcff7ffcf7ffcf7fcfff7ffffffcffcf7fcf7c6ffff7fffcffcf7ffcff7fcfcff7ffcff7ffcffcfcf7ffcf7f7fffcffcf7f7ffcf7fffcf7fcfffcf7fff7ff7f7f7ffcf7f7ffcffff7fc7f7ffcf7ffcf7fcfcf7ffcf7f7f7ffc7ffcf7f7cf7ff7fcf7ffcfcfffcf7ffcffcfffcf7ffcffcfff7ff7c76f7c7c6cfcffcf7fcfff7ff7fcfff7ffcff7fcfffffcff7fffffcf7f
                        fcf7fffcf7ffffccfcfffcffcfcfcfff7ffcffffcfffff7fcffcfcf7ff7ffcffcfcfcf7fcfcf7fcffcfcff7ffffcf7ffcf7fffcff7ff7fffcff7fffcf7fcf7ffffcf7ffc7f7ffcf7f7fcfcfcfcfcffffcf7ffcfcff7f7ffcffffcf7ff7f7ffcf7ffcf7fffcfffcfffcf7ffc6c6fcffcfcfcf7ff7fcf7ffcf7ff7fcf7ffcf7ff7fcfcf6cc6cfff6ff7fcf7ffff7fffcffff7fffcff7ffff7fcfcf7fff7fcffffc
                        ffffcfcfffcfcfff7fcf7fcffff7ff7ffcff7f7ff7f7fffff7ff7fffcffcff7ff7ff7ffcfffcfff7fff7fffcf7ffcfcf7ffcf7fcff7ffcf7f7ffcfcfcff7fffcfcfffcfffffcf7ffcff7f7ff7ff7f7fcf7fcff7fcffcfcf7f7f7fff7ffcfcf7ff7ff7fcf7fcf7f7f7fcfcffffcf7fcf7ff7ffcffcf7fcf7ff7ffcf7ffcfffcfffcf7f7c6c7fcfcfcff7ffcf7ffcfcf7fcffcf7fcfffcfcfff7ffffcffff7f7ff
                        7fcff7fcfcf7fcffff7ffff7f7ffcffcff7ffffcffffcf7fcfcffcf7fcff7ffcffcffcff7f7fcf7fcf7ff7ffcfcf7ffffcf7fff7fcfcffcfffcff7fff7ffcfcf7f7fcf7f7fcf7fcf7fcfff7ffcffcfcf7ffc7fff7f7ff7fffcffc7ffcff7fffcff7fff7ffcf7ffcffcf7f7f7f7ffcf7fcffcf7f7ffffcffcffcf7ffcff7fcf7fcffffcf7fff7ff7fcffcffcffcff7ffff7ffffff7fcf7fcfcffcfcfcf7ffffcf
                        fff7ffff7fffff7f7fffcfcfffcffcff7fffcfcfcfcffffffff7fffffcf7ffcfcff7ff7fffffcffffcfcffcff7fffc7fcfffcfcffcff7ff7fcf7ffcf7ffcfcfffffcffcffcf7ffcffcf7fcfcff7ff7fffcfffccffcfcffc7ff7fffcff7ffc7f7fcfccffcf7ffcf7fcf7fffcfffcf7fff7f7fffcfc7fcf7ff7fcffcff7ffcffff7f7fcfffcfcfcffcf7ff7ffcf7fffcf7ffcf7fcfffcffff7fcf7f6ffcfcfcffc
                        f7ffcf7fffcf7ffffcfcff7fcff7ff7fffcfcf7ff7fcf7fcf7fff7fcf7fffcff7fffcffcf7fcf7fcf7ffcff7ffcf7fff7f7ff7fcf7fcfcffcfffcff7ffcff7f7fcf7f7fcf7ffcf7fcf7ffcf7fcf7ffc7fcf7ff7f7fcf7fffcff7f7f7ffcfffffcf7ff7f7ffcf7fff7ffcf7fcf7fffcfcfffc7ff7fff7ffcffcf7ff7ffcf7f7fcfffcf7fcffff7ff7ffcffcf7ffcf7fffcff7ffcf7ff7fcfff7fcfcf7fff7fcf7
                        ffcffffcfcfffcfcff7fcffff7ffcfffcff7fffcffff7fffcffcffcfffcfcf7ffcf7fcffcff7fff7ffcf7fcfcf7ffcfffffcfff7fff7ff7ff7fcf7fffcf7ffffcffffff7ffcf7fff7ffcf7ffcfcfcfffcf7fcffffcf7fcf7f7ffcfffcf7f7f7ff7fcffcfcf7ffcf7fcf7ffcf7fcf7f7fcf7ffcffcfcfcf7f7fff7ffcf7ffffcfcf7fffff7f7ffcfffcfcffffcf7ffcfcf7ffcff7ffcffcf7ffcfcfffcfffffff
                        fcfcf7fff7fcff7fcffff7fcfffcfcf7fcffcf7fcf7fffcff7ffcff7fcff7ffffcfff7f7fcffcfcffcffff7ffffcff7fccf7fcffcfcfcffcffcf7ffcfcffcf7ff7f7fcffcf7ffcfcfcf7ffcf7ff7f7f7fffcf7f7f7fff7ffcfcfcf7fcffffffcfffcf7ff7ffcf7fffcffcf7fffcfffff7ffcff7ff7fffcfffc7ffcf7ffcf7ff7fffcf7fcfffcff7fcff7f7fcfffcff7fffcff7fffcfcf7ffcffcf7fcf7fcf7fc
                        ff7fffcfcfff7ffff7fcffff7fcff7ffff7ffffffcffcff7ffcff7ffff7fffcf7fcfcfffff7ff7fcff7f7ffcf7ff7ffcfffff7fcf7fff7ff7ff7ffcf7fcffcfcffffcf7ffffcfcf7ffcfcf7ff7ffffcfc7f7ffffcfcfcfcf7ff7fcfcf7fccf7fcf7fff7ffcf7ffcf7fcf7ffcf7fcf7fcfcff7ffcffcf7fcf7ffcf7ffcf7ffcffcf7fffff7fcf7ffff7fffff7f7ff7ffcf7fcffcfcf7fffcffcf7fffffff7fff7
        `)
        col = 16
        load_p = 100 / 8
        row = 112
        world_gen()
        makeplayer()
    } else if (selectedIndex6 == 1) {
        statusbar = statusbars.create(120, 5, StatusBarKind.Health)
        statusbar.value = 0
        secworld = 1
        pause(100)
        tilemap_1 = tilemap`
            level4
        `
        tiles.setCurrentTilemap(tilemap_1)
        col = 16
        load_p = 100 / 32
        row = 112
        world_gen()
        tilemap_2 = tilemap`
            level4
        `
        tiles.setCurrentTilemap(tilemap_2)
        col = 16
        load_p = 100 / 32
        row = 112
        world_gen()
        tile_map_3 = tilemap`
            level4
        `
        tiles.setCurrentTilemap(tile_map_3)
        col = 16
        load_p = 100 / 32
        row = 112
        world_gen()
        tilemap_4 = tilemap`
            level4
        `
        tiles.setCurrentTilemap(tilemap_4)
        col = 16
        load_p = 100 / 32
        row = 112
        world_gen()
        makeplayer()
    }
    
})
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 320
    export const ARCADE_SCREEN_HEIGHT = 240
}

let death_messages = ["\"Well, that was embarrassing. Wanna try again… or just quit now?\"", "\"Looks like you're collecting deaths, not wins.\"", "\"Remember when you thought you were good at this? Yeah, me neither.\"", "Pro tip: You might want to avoid dying next time.\"", "\"Is this part of your master plan? Because it looks like failure.\"", "\"You make failure look effortless.\"", "At least you're consistent… consistently bad.\"", "\"No one dies quite like you.\"", "\"If you were trying to impress me, it's not working.\"", "Have you considered a less challenging hobby? Like watching paint dry?\"", "Don't worry, losing is just your style.\"", "\"You were so close! Just kidding, no, you weren't.\"", "\"On the bright side, no one saw that… except me.\"", "\"I think the game just felt sorry for you.\"", "\"That's a bold strategy. Let's see if it fails every time.\"", "\"You have the reflexes of a sleepy sloth.\"", "\"Maybe read the instructions next time?\"", "\"Maybe read the instructions next time?\"", "\"The controller isn't broken. You are.\"", "\"That's one way to lower the difficulty. Just keep dying.\""]
game.onUpdate(function on_on_update() {
    
    if (world_gen_done == 1) {
        if (player1.vy >= 300) {
            fall_damage = 1
            fall_damage_2 = player1.vy / 25
        }
        
        if (player1.isHittingTile(CollisionDirection.Bottom) && fall_damage == 1) {
            playerhealth.value += -1 * fall_damage_2
            fall_damage = 0
            fall_damage_2 = 0
        }
        
    }
    
})
forever(function on_forever() {
    if (world_gen_done == 1) {
        if (player1.tilemapLocation().y >= 1010) {
            if (lighting == 1) {
                shadowcasting.setAnchor(player1)
                shadowcasting.setShadowEnabled(true)
            } else if (lighting == 0) {
                shadowcasting.setShadowEnabled(false)
            }
            
        } else {
            shadowcasting.setShadowEnabled(false)
        }
        
    }
    
})
forever(function on_forever2() {
    
    if (world_gen_done == 1) {
        if (controller.up.isPressed()) {
            nextspot = player1.tilemapLocation().getNeighboringLocation(CollisionDirection.Top)
            select.setPosition(nextspot.x, nextspot.y)
        }
        
        if (controller.right.isPressed()) {
            nextspot = player1.tilemapLocation().getNeighboringLocation(CollisionDirection.Right)
            select.setPosition(nextspot.x, nextspot.y)
        }
        
        if (controller.down.isPressed()) {
            nextspot = player1.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom)
            select.setPosition(nextspot.x, nextspot.y)
        }
        
        if (controller.left.isPressed()) {
            nextspot = player1.tilemapLocation().getNeighboringLocation(CollisionDirection.Left)
            select.setPosition(nextspot.x, nextspot.y)
        }
        
    }
    
})
forever(function on_forever3() {
    characterAnimations.loopFrames(player1, [img`
                . . . . . . . c c . . . . . . . 
                        . . . . . . . c 5 c . . . . . . 
                        . . . . c c c 5 5 5 c c . . . . 
                        . . c c b c 5 5 5 5 c c c c . . 
                        . c b b 5 b 5 5 5 5 b 5 b b c . 
                        . c b 5 5 b b 5 5 b b 5 5 b c . 
                        . . f 5 5 5 b b b b 5 5 5 c . . 
                        . . f f 5 5 5 5 5 5 5 5 f . . . 
                        . . f f e e b f e e e f . . . . 
                        . . f f f b 1 f b b e f . . . . 
                        . . . f f b b b b b b f . . . . 
                        . . . e e f e e e e f . . . . . 
                        . . . e b b e b b 5 f . . . . . 
                        . . . e b b e 5 5 5 5 f . . . . 
                        . . . . e e 5 5 5 5 b c . . . . 
                        . . . . . f f f f f f . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . . . . c c . . . . . . . 
                        . . . . . . c 5 c c . . . . . . 
                        . . . . c c c 5 5 5 c c . . . . 
                        . . c c b c 5 5 5 5 c c c c . . 
                        . c b b 5 b 5 5 5 5 b 5 b b c . 
                        . c b 5 5 b b 5 5 b b 5 5 b c . 
                        . . f 5 5 5 b b b b 5 5 5 c . . 
                        . . f f 5 5 5 5 5 5 5 5 f . . . 
                        . . f f e e b f e e e f . . . . 
                        . . f f f b 1 f b b e f . . . . 
                        . . . f f e e b b b b f . . . . 
                        . . . f e b b e e e f . . . . . 
                        . . . . e b b e b b 5 f . . . . 
                        . . . . f e e 5 5 5 5 c . . . . 
                        . . . . . f f f f f f . . . . .
            `, img`
                . . . . . . . c c . . . . . . . 
                        . . . . . . . c 5 c . . . . . . 
                        . . . . c c c 5 5 5 c c . . . . 
                        . . c c b c 5 5 5 5 c c c c . . 
                        . c b b 5 b 5 5 5 5 b 5 b b c . 
                        . c b 5 5 b b 5 5 b b 5 5 b c . 
                        . . f 5 5 5 b b b b 5 5 5 c . . 
                        . . f f 5 5 5 5 5 5 5 5 f . . . 
                        . . f f e e b f e e e f . . . . 
                        . . f f f b 1 f b b e f . . . . 
                        . . . f f b b b b b b f . . . . 
                        . . . e e f e e e e f . . . . . 
                        . . . e b b e b b 5 f . . . . . 
                        . . . e b b e 5 5 5 5 f . . . . 
                        . . . . e e 5 5 5 5 b c . . . . 
                        . . . . . f f f f f f . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . . . . c c . . . . . . . 
                        . . . . . . c 5 c c . . . . . . 
                        . . . . c c c 5 5 5 c c . . . . 
                        . . c c b c 5 5 5 5 c c c c . . 
                        . c b b 5 b 5 5 5 5 b 5 b b c . 
                        . c b 5 5 b b 5 5 b b 5 5 b c . 
                        . . f 5 5 5 b b b b 5 5 5 c . . 
                        . . f f 5 5 5 5 5 5 5 5 f . . . 
                        . . f f e e b f e e e f . . . . 
                        . . f f f b 1 f b b e f . . . . 
                        . . . f f b b b b b b f . . . . 
                        . . e b b e e e e e f . . . . . 
                        . . e b b e b b b 5 5 f . . . . 
                        . . . e e e 5 5 5 5 5 c . . . . 
                        . . . . . f f f f f f . . . . .
            `], 100, characterAnimations.rule(Predicate.MovingRight))
    characterAnimations.loopFrames(player1, [img`
                . . . . . . . c c c . . . . . . 
                        . . . . . . c b 5 c . . . . . . 
                        . . . . c c c 5 5 c c c . . . . 
                        . . c c b c 5 5 5 5 c c c c . . 
                        . c b b 5 b 5 5 5 5 b 5 b b c . 
                        . c b 5 5 b b 5 5 b b 5 5 b c . 
                        . . f 5 5 5 b b b b 5 5 5 c . . 
                        . . f f 5 5 5 5 5 5 5 5 f f . . 
                        . . f f f b f e e f b f f f . . 
                        . . f f f 1 f b b f 1 f f f . . 
                        . . . f f b b b b b b f f . . . 
                        . . . e e f e e e e f e e . . . 
                        . . e b c b 5 b b 5 b f b e . . 
                        . . e e f 5 5 5 5 5 5 f e e . . 
                        . . . . c b 5 5 5 5 b c . . . . 
                        . . . . . f f f f f f . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . . . c c . . . . . . . . 
                        . . . . . . c 5 c . . . . . . . 
                        . . . . c c c 5 5 c c c . . . . 
                        . . c c c c 5 5 5 5 c b c c . . 
                        . c b b 5 b 5 5 5 5 b 5 b b c . 
                        . c b 5 5 b b 5 5 b b 5 5 b c . 
                        . . c 5 5 5 b b b b 5 5 5 f . . 
                        . . f f 5 5 5 5 5 5 5 5 f f . . 
                        . . f f f b f e e f b f f f . . 
                        . . f f f 1 f b b f 1 f f f . . 
                        . . . f f b b b b e e e f . . . 
                        . . e b b f e e e e b b e . . . 
                        . . e e f 5 5 b b e b b e . . . 
                        . . . f 5 5 5 5 5 e e c . . . . 
                        . . . . f f f f f f f . . . . .
            `, img`
                . . . . . . c c c . . . . . . . 
                        . . . . . . c 5 b c . . . . . . 
                        . . . . c c c 5 5 c c c . . . . 
                        . . c c c c 5 5 5 5 c b c c . . 
                        . c b b 5 b 5 5 5 5 b 5 b b c . 
                        . c b 5 5 b b 5 5 b b 5 5 b c . 
                        . . c 5 5 5 b b b b 5 5 5 f . . 
                        . . f f 5 5 5 5 5 5 5 5 f f . . 
                        . . f f f b f e e f b f f f . . 
                        . . f f f 1 f b b f 1 f f f . . 
                        . . . f f b b b b b b f f . . . 
                        . . . e e f e e e e f e e . . . 
                        . . e b f b 5 b b 5 b c b e . . 
                        . . e e f 5 5 5 5 5 5 f e e . . 
                        . . . . c b 5 5 5 5 b c . . . . 
                        . . . . . f f f f f f . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . c c . . . . . . 
                        . . . . . . . c 5 c . . . . . . 
                        . . . . c c c 5 5 c c c . . . . 
                        . . c c b c 5 5 5 5 c c c c . . 
                        . c b b 5 b 5 5 5 5 b 5 b b c . 
                        . c b 5 5 b b 5 5 b b 5 5 b c . 
                        . . f 5 5 5 b b b b 5 5 5 c . . 
                        . . f f 5 5 5 5 5 5 5 5 f f . . 
                        . . f f f b f e e f b f f f . . 
                        . . f f f 1 f b b f 1 f f f . . 
                        . . . f e e e b b b b f f . . . 
                        . . . e b b e e e e f b b e . . 
                        . . . e b b e b b 5 5 f e e . . 
                        . . . . c e e 5 5 5 5 5 f . . . 
                        . . . . . f f f f f f f . . . .
            `], 100, characterAnimations.rule(Predicate.MovingUp))
    characterAnimations.loopFrames(player1, [img`
                . . . . . . . c c . . . . . . . 
                        . . . . . . c 5 c . . . . . . . 
                        . . . . c c 5 5 5 c c c . . . . 
                        . . c c c c 5 5 5 5 c b c c . . 
                        . c b b 5 b 5 5 5 5 b 5 b b c . 
                        . c b 5 5 b b 5 5 b b 5 5 b c . 
                        . . c 5 5 5 b b b b 5 5 5 f . . 
                        . . . f 5 5 5 5 5 5 5 5 f f . . 
                        . . . . f e e e f b e e f f . . 
                        . . . . f e b b f 1 b f f f . . 
                        . . . . f b b b b b b f f . . . 
                        . . . . . f e e e e f e e . . . 
                        . . . . . f 5 b b e b b e . . . 
                        . . . . f 5 5 5 5 e b b e . . . 
                        . . . . c b 5 5 5 5 e e . . . . 
                        . . . . . f f f f f f . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . . . . c c . . . . . . . 
                        . . . . . . c c 5 c . . . . . . 
                        . . . . c c 5 5 5 c c c . . . . 
                        . . c c c c 5 5 5 5 c b c c . . 
                        . c b b 5 b 5 5 5 5 b 5 b b c . 
                        . c b 5 5 b b 5 5 b b 5 5 b c . 
                        . . c 5 5 5 b b b b 5 5 5 f . . 
                        . . . f 5 5 5 5 5 5 5 5 f f . . 
                        . . . . f e e e f b e e f f . . 
                        . . . . f e b b f 1 b f f f . . 
                        . . . . f b b b b e e f f . . . 
                        . . . . . f e e e b b e f . . . 
                        . . . . f 5 b b e b b e . . . . 
                        . . . . c 5 5 5 5 e e f . . . . 
                        . . . . . f f f f f f . . . . .
            `, img`
                . . . . . . . c c . . . . . . . 
                        . . . . . . c 5 c . . . . . . . 
                        . . . . c c 5 5 5 c c c . . . . 
                        . . c c c c 5 5 5 5 c b c c . . 
                        . c b b 5 b 5 5 5 5 b 5 b b c . 
                        . c b 5 5 b b 5 5 b b 5 5 b c . 
                        . . c 5 5 5 b b b b 5 5 5 f . . 
                        . . . f 5 5 5 5 5 5 5 5 f f . . 
                        . . . . f e e e f b e e f f . . 
                        . . . . f e b b f 1 b f f f . . 
                        . . . . f b b b b b b f f . . . 
                        . . . . . f e e e e f e e . . . 
                        . . . . . f 5 b b e b b e . . . 
                        . . . . f 5 5 5 5 e b b e . . . 
                        . . . . c b 5 5 5 5 e e . . . . 
                        . . . . . f f f f f f . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . . . . c c . . . . . . . 
                        . . . . . . c c 5 c . . . . . . 
                        . . . . c c 5 5 5 c c c . . . . 
                        . . c c c c 5 5 5 5 c b c c . . 
                        . c b b 5 b 5 5 5 5 b 5 b b c . 
                        . c b 5 5 b b 5 5 b b 5 5 b c . 
                        . . c 5 5 5 b b b b 5 5 5 f . . 
                        . . . f 5 5 5 5 5 5 5 5 f f . . 
                        . . . . f e e e f b e e f f . . 
                        . . . . f e b b f 1 b f f f . . 
                        . . . . f b b b b b b f f . . . 
                        . . . . . f e e e e e b b e . . 
                        . . . . f 5 5 b b b e b b e . . 
                        . . . . c 5 5 5 5 5 e e e . . . 
                        . . . . . f f f f f f . . . . .
            `], 100, characterAnimations.rule(Predicate.MovingLeft))
})
forever(function on_forever4() {
    if (world_gen_done == 1) {
        if (player1.y >= 2000) {
            scene.setBackgroundImage(img`
                ffcfffcfffcfffcfffcfffcfffcffcffcffcffcffcffcfcffcfcffcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcc8cccfccfcfcfcfcfcfcfcfcfcfcfcfcfccfcfcfcfcfcffcffcffcffcfcfcfcfcfcfcfcfcffcffcffcffcfcffcfcfcffcfcffcffcffcffcfcfcffcffcfcffcffcffcfcfcffcfffffffffffffffffffffffffffffffffffffcfffcfffcfcffcfcffcffcffcffffffffffffffffffffffcffc
                                fcffcffcfcffcffcfcffcffcfcffcfcffcffcffcffcffcfcfcffcffcfcfcf8fc8fc8fcfcfcfcffcffcffcffcffc8f8fcf8cf8cf8cf8cfcfcfcfcfcfcfc8fc8fcfcfcfcfcffcffcffcffcffcfcfcfcffcffcfffcffcfffcffcfffcfcffffcffffcffcffcffcfcffcfcffcffcfcffcffcffcffcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcffcfcfcfffcfffcffcfcfcffcffcffcffcfcfcfcfcfcfcfcfcfcfcfffcf
                                ffcffcffffcffcffffcffcffffcffffcffcffcffcfcfcfffcfcfcfcfcf8fcfcfccfcfcfcfcffcfcfcfcfcfcfcfcfcc8c8cfccfcfccfcf8fcf8fcf8fc8fcffcfcf8fcf8ffcffcffcffcffcfcfcffcfcfcfcfcfcffcffcffcffcfcfffcfcffcfcffcffcffcffcfcfffcfcfcfffcfcfcffcffcffcfffcfffffffffffffffffffffffffffffffffffcffcfffcfcfcffcffcfcfcfcffffffffffffffcfffffcffcfff
                                cffcffcfcffcffcfcffcffcfcffcfcfcfcfcfcfcfcffcfcffcffcfcf8fccf8cf8fcfcfcfcfcfcffcffcfcfcfcf8c8cfcfc8f8cf8fcfcfcfcfcf8fcfcfcfcfcfcfcfcfcfcfcffcffcffcfcfcfcfcfcfcfcfffcffcfcffcffcffcfcfcfcfcffcfcffcffcffcffffcfcffcffccffcfffcffcffcfcfcffcfcffcfcfcfcfcfcfcfcfcffcffcfeffcfffcffcfcffcfccfcfcffcffcfcfcffcffefcfcfffcfcfffffcfc
                                ffcffcfffcffcffffcffcffffcffcffffffcffcfffcffcfcffcfcfcfcfcfcfcfcfccfcfcfcfcfcfcfcfcfcfcfcccf6c8cfccfc8fcf8cfccfcfcfcfcfcfcfcfcfcfcfcfcfcfcffcffcffcffcfcfcffcfffcfcfcfffcfcfcffcffcfcfffffcffffcffcffcffcfcfcfcfcfcfffcffcfcfcffcffcfffcfcffffffffffffffffffffffffeffffffffcfffffffcffcfcfcfcfcfcffcffffffefffffffcfffffcfcffff
                                cffcffcfcffcffcfcffcffcfcfcffcfcfcffcffcfcfcffcfcfcfcfcfccf8cf8cf6f8fcfcffcffcfcfcfcffcfcf8c8cfcf6f8cfccfcfcf8fcfcfcfcfcfcfcfcfcfcfcfcfcfcfcffcffcffcfcfcffcffcfcfcfffcfcfffffcffcffffcfcfcfcfcffcffcffcffcfffcffcffccfcfcfcfffcfcfcfcfcfffcfcfcfeffcfefcfefcfefcfffffcffcfffefcfcfffcfcfcffcfcffcfcffcfcfffffcfcffffcfcfffffcff
                                fcffcffffcffcffcffcffcfffffcffcfcfcffcffcfcfcffcfcfcfcf8fcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcf6cfc8c8cccf6cfc8cfcfcfcf8fcfcfcf8fcf8fcf8fcfcfcfcffcfcfcfcfcfcfcfcfcfcfcffcfcfffcfcfcfcffcfcffcfcfffffcfffcfcffcffcfcfcffcfffcfcfcfcfcfffcffcffcfcfcffffffcffffffffffffffcfffffffefffffffcfcffcffcfcffcffcfcfffffcfcfffffcfcffffcfcffcf
                                cffcffcfcffcffcffcffcfcfcfcfcffffffcffcffcffcfcffcffcfcfcf6fcfcfcfcfcfcfcfffcffcfcfcfcf8cf8c8fcf8f8cf8cfcf6f6fccfcf8fccfcfcfcfccfcfcfcf8fcfcfcfffcfcfcfcfcfcfcffcfcfffcfcffcffffcffcfcffffcfcfcffcffffcffcffcffcfcfccfcffcfffcfcfcfcffcffffffcfcfffffcfcfcfcfcfcffffefcfefffcfcfcffffcfcfcffcfcfcffcffcfcffffffcffffffcfffffffff
                                fcffcffcffcffcffcffcffffcffcfcfcfcffcffcffcffcfcfcfcfcfcfcfcfcf6fcccfcfcfcfcfcfcffcfcfcfc8cccc8cccf6fcf6fcfccf8fccfccf8fccfcf6fcfcfcffcfcf8fffcfcffcfcfcfcfcffcffcffcffcfcffcfcffcffffcfcffcfffcffcfcffcffcffcfcfcfffcfcfcfcfcffcffcfcfcfcfcffcfcfcffffffffffffffeffffffffcffffcffcfffcfffcffcfcfcffcfffffcffcfffcfcfffcfcfcfcfc
                                ffcffcffcffcffcffcffcfcffcffffcffcfcfcfcfcfcfcffcfcfcf6fcfcfccfcf8ffcfcfffcffcffcfcfcf8c8cf8f6f6f6cfc8cf8ccf8cfcf8cf6fccfcf6fcf8fcfcfcfcfcfcfcfffcfcfcfcfcfcfcfcffcffcffffcffffcffcfcfcffcffcfcffcffcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcffcffffcffffffcfcfcfcfcfcfcfffcffcffffffcffcffefffcfcfcfcffcfcfffcfcfffeffcffffefffffffffff
                                cffcffcffcffcffcffcffffcffcfcffcfffffcffcfcfcfcfcfcfcfcfcf8fcfccfcfcfcfcfcfcffcfcfcfcfccfc8ccc8ccf8ccfccfcfcfcf6fcfcfcfcf6fcfcfccfcfcfcfcfcfcfcfcffcfcfcfcfcfcfcfcfcffcfcffcfcffcffcfffcffcffcfcffcffcfcfcfcfcffcfcfcffcffcffcfcffcffcffcfcffcfcfcfffffffffffcfffcffffffcffcffcfffffcfcfffffcfcffcfcffffffcffffffcfffcfcfcfefcff
                                cfcfcffcffcffcfffcffcfcfcffcfcffcfcfcfcffcfffcfcfcfcfcfcfcfcfcf8fcfcffcfffcfcfcfcfcf8cf68cf6f8fc8cf8f6f8cf8cf6fcf8cf6f8cfcfcf8cfcfcfcffcfcfcfffcfcfcfcfcfcfcfcffcfffcfcffcffffcffcffcfcfcffcffffcffcffcffcffcfcffcfcfcffcffcffcfcffcfcfcfffcffffffcfcfcfcfcfffcffffcfcfffffffffcfcfffffcfcfcfcfcffffcfcfcfffcfcfffcfffffffffffcf
                                fcfffcffcffcffcfffcffcfffcfffcfcffcffcfcffccffcffcfcfcfcfcfcfcfcfcfcfcfcfcffcffcfcfcfc8fcc8cccccfc8ccfccfcfcfcc8cfcfccfcfcfcfcfcf6fcfcffcfcfcfcfffcfcfcfcfcfcfcfcfcfcffcffcfcffcffcffcfffcffcfcffcffcffcffcfcffcfcffcfcfcfcfcffcfcfcfcfcf6fffcfcfffffffffffcfcfcfcfffffefcfcfcffffcfcfcfcfffcffcf6ffffffffcfffffcffcfcfcfcfcffff
                                cfcfcfcffcffcffcfcffcfcfcfcfcfffcffcffcfcfff6ffcfcfcfcfcfcfcfccfcfcfcffcffcffcfcfcfc8cf6f8fcccc8ccfcf6f8cccccfcfcf6f8fccf8fcfcf8fcfcfcfcfcfcfcfcfcfcfcfcfcffcfcffcfffcffcffcfcffcffcffcfcfcffcfcffcffcfcfcfcfcfcfcfcfcfcfcfcfcfcfcffcffcffcffffffcfcfcfcfcffffcfffffefffffffffcfcffffffcfcfcfcfcffcfcfcfcfffcfcfffffffffffffcfcf
                                ffcffcfcffcfffcfffcffffcfffcfcfcfcff7ffcf6fcfcfcfcfcfcfcfcffcfcf6fcffcffcffcfcfcfcfcf8cc8cc8f8fccc8f6ccf8fcf8fccfcfccf8fcfcf6fccfcfcfcfcfcfcfffcfcfcfcffcfcfcff6ffcfcfcffcffcfcff7ffcffcfffcffcfcffcffcfcfcfcfcfcfcfcffcffcfcfcffcf6fcfcfcfcfcfcffffffcfffcfcffcfcffffcffcffeffcfcfcfcfffcffcfcfcfffffffffcfffffcfefcfcfefcffffc
                                fcfcffffcffcfffcfffcfcffcfcfffcfff7ffcffcffcffcfcfcfcfcfcfcfcf6fcfcfcfcffcfcffcfcf6f6f8fcf6f6cc8f6fcf8fcccfcccf8cf8fccfccf6fcf8fccfcfcffcfcfcfcffcfcfcfcfcfcfcfcfcfffffcffcfcff7ffcffcffcfcf7ffcfcfcfcffcffcfcfcfcfcfcfcfcfcffcfcfcffcffcfcffffffcfcfffcfcfffcffffcfcfffffcfffffffffffcfcfcffcfffcfcfcfcfffcfcfffffffffffffcfcff
                                ffffcfcffcffcfffcffcffcffcfcfcfcffffcfcffcffcfcfcfcfcfcfcfcfcfcfcfcffcfcfcffcfcf6fccccf6c8ccf8cc8cc8cc8f8f6fcfcfccf6f8cf8fcf8cfcfcfcfcfcfcfcfcfcff6fcfcfcfcfcfcfcfcfcfcfcffcfcffcffcffcff7fffcffcfcfcfcff6ffcfcfcfcfcfcfcfcfcfcfcffcfcf6fcfcfcfcffffcfffffcfffccfcffffcfcfffcfcfcfcfcffffcfcff6fcfffffffcfffffcfcfcfcfcfcffffffc
                                fccffcfcffcffcfffcffcffcfffcffffcfcffffcfcfcfcfcfcfcfcfcfcfcfcfcfcfcffcfffcfcf6fcf8f8f8fcfc8cfccf8cf8fc8ccf8ccccf8cfcfcfcfccfcf6fcfcfcfcfcfcffcfcfcfcfcfcffcfcfcfcfffcfffcfcffcffcffcff7fffcffcffcffcff6ffcfcffcfcffcffcffcffcffcfcfcfcffcffcffffcffffcfcffcfffcffcfffffffcffffcfffcffcfcfcfcffffcffcfcffcfcfffffffffffffcfcfcff
                                cffcffffcffcffcfcfcffcffcfcfcf7ffffcfcfcffcfcfcfcfcfcfcfcffcfcfccfcfcffcfcfcfcfcfcccfccc8cfc8cc8cc8cc8cf6f6fcf8fcfccf8fccf8fcfcfcf8fcfcfcf6fcffcfcfcfcfcfcfcfcfcffcfcfcfcffcf6fcffcffcfffcffcfcfcfcff6ffcfcffcfcffcffcffcffcfcfcfcfcfcfcfcfcfcffffcfcffffcffcfcfcfffcfcffcffcfffcfcffcfffcfcfcfcffcfffffffffcfcfcfcfcfcfffffffff
                                fcffcfcffcffcffffffcffcffcffffffcfcffcffcfcfcffcfcfcf6fffcfccf6fcfccfcfcfcff6fcc8f8f8cfcf8cfccfccf6f6f6cfcc8fcccccf8fccf6fcf6fc8fcfcfffcffcfcfcfcfcfcfcfcfcffcfcfcfcfffcfcffffffcffcffcfcfcffcffcfcfcfcfcffcfcffcfcf6fcfcfcfcfcffcfcffcfcfcfcfcfcfffffcffffffffffcfcffffffcffcffcfffcffcff6fffcfcfffcfcfcfcffffffffffffefcfcfcfc
                                ffcffffcffcfffcfcfcffcfcffcf7fcffffcffcfcfcff6fcfcf6ffcfcffcf6fcfcfcfcfcfcfcf6fcfcccf8cfcf8ccc8f6c8cc8fc8cfc8f8fcfcccf6fcfcfcfcfcfcfcfcfcfccfcfcfcfcfcfcfcfcfcfcfcffcfcfff7fcfcffcffcffffffcffcffcfcffcffcfcff6fcfcffcfcfcfcffcfcfcfcfcffcffcfffffcfcfffcfcfcfcffffffcfcffffcffcfcfffcffcffcfcfffcffffffffffcfcfcfcfcfffffffffff
                                cffcfcffcffcfcffcffcfffcfcfffffcfcffcfcffcfcfcfcfcfcfcfcfcf6fcfcf8fcf6ffcfcf6cf8ccf8cfc8ccf6f8ccfccf8cc8f8c8ccf6f6fcf6fcf8cf8cfccfcfcfcffcfcffcffcffcfcfcfcfcfcf6fcffcfcfcfffcfcffcffcfcfcfcfcfcfcff6ffcffcfcfcffcfcffcffcffcfcfcffcf6fcfcfcfcfcffffffcfffffffffcfcffffffcfffcfffcfcfffffcfcffcfffcfcfcfcfcffffffffffcffcffcffcf
                                fcffcfcffcffffcffcffcfcfffcfcfcffcfcfffcfcfcffcf6fcfcfcffcfccfcfcfccfcfcfcf6cfcf8fcf6fcf8f6fccf8c8c8cf8cccfcf6cfc8cf6fcfcfcfcfcf8f6fcffcffcf6ffcffcfcffcffcfcfcfcffcffcfffcfffffcffcffcfcffcffcfcfcffcffcffcfcfcfcffcffcff6fcffcfcfcffcfcfcfcfcfcfcfcfffcfcffcfffffcfcfcffcfffcffcffcfcfcfff6ffcffffffffffffcfcfcfcfffcfffffcfff
                                cfcffffcffcfcffcfffcfffcfcfcfcfcffcfcf7ffcfcf6fcfcfcfcfcffcf6f8cf6fcfcfcfcfc6f8cfc8cf8ccf6c8f8ccfcfc8ccf8c8c8f8c8fc8cf8c8f6fccfccfcfcfcfcfcfcfcfcffcfcfcfcfcfcfcfcfcfcfcfcffcfcffcffcffcfcffcfcffcfcffcffcffcffcff6fcfcf6ffcfcffcfcfcfcffcffcfcffffffcffffffffcfcfffffffffffcffcfcfffffffcfcfcffcfcfcfcfcfcffffffffcffffcfcfffcf
                                fffcfcffcffcfcffcfffcfcfcffcffcfcffcfffcffcfcfcfcfcfcffcfccfcfcfcfcfcfcfcf6cfcfcfcfccf8f6fcfccc8c8cfc8c8cf6f6ccfcccfcccfcfcf8f6fcfcfcffffcfcfcfcfcffcfcfcfcffcfcfcffcfffffcffcfcfcfcfcffcfcfcffcfcfcfcfcff6ffcfcfcffcfcffcfffcfcffcfcff6fcfcfcf6fcfcffcfcfcfcfffffcfcfcfcfcfffffcfcfcfcfcfffcfcfffffffffffffcfcfcffffcffffffcfff
                                cfcfffcffcffffcffcfcfffcfcffcffcfcffcfcfcf6fcfcfcfcfcfcffcc6fccc8cf6fccfcf6c8fccf8fc8ccfc8c8cf8fcf6ccfcf6cfccf8c8f6c8f8c8c8cfcfcfccfcfcfcfcfcfffffcfcffcfcfcf6fcfcfcfcfcfcfcfcfcffcfcfcffcfff6ffcf6fcfcfcffcfcffcfcffcfcfcfcffcfcffcfcffcfcffcffcfffcfffffffffcfcfffffffffffcfcfcf6ffffffcffcf6fcfcfcfcfcfcfffffffcfffcfcfffffcf
                                fcfcfcfcffcfcffcffcfcfcfffcfcfcffcfcfcfcfcfcfcfcfcfcfcfcffcfcfcfccfcf8fcf6cfcf8fcfcfcf8cfcfc8cfcccf8c8c8c8c8c8cf6cf8cccccfcccf8fcfcfcffcff6fcfccfcfcfcfcfcfcffcfcfcfffcffcffcffcfcffcff6ffccffcffcfcf6ffcfcffcfcfcfcfcffcfcfcffcfcffcfcffcfcffcfcfcfffcfcffcffffffcfcfcfcfcffffff6ffcfcfffcffcfcfffffffffffcfcfcfffcffffffcfcfff
                                cfffffffcffcfcffcffcfffcfcfffcfcffcfffcfcffcfcfcffcfcfcfcf6cccf6f8cfcfcf6c8fcfcf8fc8fccc8c8fcc8f6f6cf6cf8cf6fc8cc8cf8f8f68cc8cccccfcfcffcfcf8ffcfcfcfcfcfcf6fcfcfcfcfcfcffcffcff6fcff6ffcfffcffcffcfcfcffcfcffcffcfcffcfcffcfcffcfcffcfcfffcfcfcfcfcfcfffffffcfcffffffffffffcfcfcfcffffcfcfcfcffcfcf7fcfcffffffffcfffcfcffffffcf
                                fcfcfcfcfcffffcff7ffcfcfffcfcfff7ffcfcffcfcfcfcfcfcffcffcfccf8cfcfc8cfcf6cfc8fcfccfccf8fcfc8f8fc8cf8c8c8c8c8c8cccf8ccc6ccf8fc8f6f8cfcfcfcfcfccffcffcffcfcfcfcfcfcffcffffcfcfcf6fffcfcfcffcfcfcff7ffcfffcffcfcff6ffcfcfcffcfcfcf6ffcfcfffcfcffcffcfcfcfcfcfcffffffcfcffcfcfcffffffcfcfcffcffffcfcfffcfffffcfcfcfcfffffffffcfcfffc
                                ffffcfffffcfcffcffcffcfcfffffcfcffcffcfcfcffcffcffcfcfcf6f6fcfc8f6fcfcc8c8fcfcf8fcf8fcf6f8cc8ccfc8ccfcf6cc8c8cf68c8c8f8f8c68c8c8c8ccfcffcfc6fcfcfcffcfcfcfcfcfcfcfcfcfcfcfcfcffcfcffcffcfcffcfcffcffcfcfcffcfcffcfcfcfcf6fcffcffcffcfcfcfffcffcffcfcfffffffcfcfcfffffcfffffcfcfcffcfffcffcf7ffcffcffcfcffffffffffcfcffcfffffcfff
                                cfcffcfcfcfffcffcffcffffcfcfcfffcffcff7fffcffcffcffcffcfcfc8f6fcfcccff6cfcfcf8fcf8cfcfcf6cf8fcc8fcf8cc8f8fccf68cc8ccc8cc8ccf8cc8ccf6ffcffcfccfcfcfcfcfcfcf6fccfcfcfcfcfcfcfcfcfcffcffcfcffcffcfcffcfcffcfcffcfcfcffcfcfffcfcffcfcfcffcffcfcfcffcffcf6fcfcffffffffcfcfffcfcffcfffcfcfcffcffffcffcffcfcfcfcfcfcfcfffffffffcfcfffcf
                                fffcffcfffcfffcffcffcfcffffffcfffcffcffcfcfcfcfcfcffcfcfccfccfcfc8cf6c8ccfcfcfcfcfcf6f8cf8cccf8fcccf8fcfcccc8cf8cc8f6f6cf8c8cf8fc8cfcfcfcfccf6fcf6fcffcfcfcfcf6fcfcfffcfffcffcffcffcfcffcfcf7ffcfcfcfcffff7ffcffcfcffcfcfcff6fcffcfcff6ffcfffcff6ffcfcffffcfcfcfffffcfffffcffcfcfffcfcffcfcffcffcfffffffffffffffcffcffcfffffcfff
                                cfcfcffcfcfcfcfcffcffffcfcf7ffcfcfcffcffffcfffcfcfcfcfcff6ffcff6cccf8c6f8fcfcfccfcfcfcf8ccf8f6ccf8f6fc8cf8ffc8c8c8c8cc8c8c8fc8ccfc8fcffcfcf6cfcf6cfcfcfcfcf6fcfcf6fccffcf7fcffcfcfcfff6ffcfffcffcfffcfcf7fffcfcffcfcfcfcffcffcfcffcf6ffcffcfcfcffcffcfcfcfffffffcfcffcfcfcffcfffcfcfffcff7fcffcffcfcfcfcffcffcffffffffffffcfffcf
                                fffffcffffffffffcffcfcfffffffcfffffcffcfcffcfcffcfcffcf6ffcfcfc886f6c6fcfcf8fcf8fccf8fccf8cc8fcccfcccfccfcc8fcc8c8c8c8c8c8c6ccf6cfccfcfcffcf8cfcf8cfcfcf6fcfc8fccfcffcfcffffcffcfffcfcfcffcfcfcffcfcfffcffcfffcfcffcffcfcfcfcffcfcfffcffcffcfffcfcfcfcf6fcffcfcffffcffffffcffcfcfffcfcfcffffcffcffffffffffffcffcfcfcffcfffffffff
                                cfcfcfcfcfcfcf7ffcffcfcfcfcfffcfcfcfcffcfcffcfcffcfcfcffcfcff6cc8c6c8fcfccfcfcfcf8fcfcf8cf8cc8f8f6f8f6f6ccfccf8cc6c8c8c8c6c8868c8c8fcfcfcfc6f8fc8c8fcfcfcf6fcfccfcf6fcffcfcffcffcfcfcffcfcfcfcfcfcffcfcfcfcfcffcfcfcf6fcfcfcfcffcfcfcfcffcffcfcffcffcfcfcfcffffcfcffcfcfcffffcffcfcf6fffcfcffcffcfcfcfcfcfcfffffffffffffcffcffcf
                                fcfffffffffcfffcffcffffffffcfffcffffcfcfffcffcfcffcf6fcfcffcfc8cf68fcf8fcfcfcfcfcfcfccfcf6fccc8ccfcfcf8f8f6f8fcfcf8ccc8c8c8c8c8c8cc6fcfffcfc8ccfccfcfcf6fcc8c8f8cfcfcfcffcfcff7ffcfffcffcfcffcffcfcfcfcffcfcfcfcfcfcffcfcfcfcfcfcfcffcfcffcffcfcffcfffcfcfcfcfffffcffffffcfcffcffcfcfcfcffcfcfcfffffffffffffcfcffcffcfffffcfffff
                                cfcfcfcfcfcfcfffcffcfcfcfcffcfcfcf7ffffcfcfcfffcf6fcfcfcfcfc6cc86cfcfcfcf8fcf8fcf8f8fcf6fc8cf6f8c8c8cccfc8ccccf6fcf8f6f6c8c86c8c86f8cfcfcf6c8fcf8c8fcffcf8fcfccfccfcfcfcffcfcffcffcf6fcfcff6ffcffcfcfcfcfcffcfcfcfcfcfcffcffcfcffcfcffcfcff6ffcfcff6fcff6fcffcfcfcffcfcfffffcffcffcfcfffcffffffcf7ffcfcffcffffffffffffcfcfffcffc
                                fffffcfffffffcfcfcffffffffcffffffffcfcffffff7fcfffccfcffcfcfccfccffcffcfcfcfcfcfcfccf8fccfc8c8c8cc8cf8c8cf8f6f6cf8cc6c8c8c8c8c8cf8ccfcfcfcf6ccfcf6cffcfc8cc8cf6f8f6fcffcfcfcfcfcfcffffcff6ffcfcfcfffcfcfcfcfcfcffcfcfcfcf6fcffcf6ffcfcffcfcfcffcfcffcfcffcf6ffffcfcffffcfcfcffcfcff6fcf6fcfcfcfffffcfffcffffcffcffcfffffffffffff
                                cfcfcfcfcfcfcfffffcfcf7fcffcfcfcfcffcfcf7fcffffcfc6ffcfcfcc6f8cf8fcfcfcffcfcfcfccf8fcfcf8cfccf6c8f6c8c8cc6c8c8c8cc8cf8c8fc8c8fc8ccc8fcffcf6c8fcf8c8fcfcfc8fc8cfccfc8fcffcfcfcfcfcfcfcfcfcfcfcffcfcf6fffcffcfcff6fcff6fcfcfcf6fcffcfcff6ffcfffcff6fcffffcfcfcfcfcfffcfcffffffcffff6ffcfcfffcfffcfcfffcffffcffffffffffcffcffcfffcf
                                fffffffffffffcfcfcfffffffcffffcffcfcfffffffcfcff6cfccfcff6cccfcfcfcfcffcfcffcfcf8fcfccfcf8cf8c8f6c8c8cc8f8cccfc8ccc8c8cc8cf8c8cfcf8fcfcfcf8c8fcfc8cfcfc8cccfcc8cc8fcfcfcffcffcf6fcffcff6fcfcfcffcfcfcfcfcffcfcffcfcffcfcffcfcfcfcfcfcffcffcfcf6fffcfccffcf6ffcffcfcfffcfcf7fffcfcfcf6ffcfffcfcffcfcffcfcfffcffcfcfcfffffffffcfff
                                cfcfcfcfcf7fcffcffcfcfcfffcfcffcffffcfcfcfcfffcfccffcff6c8fcf8fcfcfcfcfcfcfcfcfcfcfcf8fcfcf6fcc8c8c8c8c6c8c868c8c8f6c8c8c8c8cf6c8cf6fcfcf6c8fc8f8ccfcffccf6fcfcf8fc8cfcfcff6fcfcfcfcfcfcfcffcfcfcffcfcfcfcffcfcffcfcfcfcf6ffcfcfcfcfcfcfcfcfcffcfcfcffcffcfcfcf6fff6fcffcfffcffcfcfcfcffcfcfffcffffcffcfcfffffffffffcfcfcfffffcf
                                fcffcffcfffffcffcffffffcfcfffcffcfcffcffcfffcfcc6f6ffcccfcf8fcfcfcffcffcfcfcfcfcfcf8fcf8fcfc8ffcfcf8c8c8c86cc8c8c6c8f8cf6c8f6c8fc8cc8f6fcc8ccfcf68fcfccf6cf6f6f6fccfcfcff6ffcfcfcfcffcfcfcf6fcfcf6fcfcfcfcf6fcfcfcff6fcfcfcffcfcfcfcfcfcffcffcfcfcffcfcf6fcfcfcfccffcf6fcfcffcfffcfcfcfcfffcfffcfcffcffcfcfcfcfcffcffffffffcfffc
                                ffcffcffcfcfcfcffcfcfcffffcfcfcfffcfcfcffcfcfcf6fccf6f6f8fcfcffcffcffcfcffcfcfcfcfcfcfcfccfcfc8f8c8ccc8c8cf8cccf8c8c8c8c8fc8cfc8cf6fccffcf8c8cfc8cfcffcf8c8c8c8fc8f6fcf6ffcfcfcf6ffcffcf6fcffcfcfcfcf6fcf6ffcf6f6fccfcf6fcfcfcffcfcffcffcfcf6fcfcfcfcffcffcff6fcffcfcfcf6fcfcffcff6f6f6ffcffcfffcfcffcff6fffffffcffffcffcffffcff
                                cffcffcffcfffcfcfffcffcfcffffffcfcfffffcfffff6c8cfcfc8fcfcfffcffcfcfcfcfcfcfcfcfcfcfcfcfcf8fcfcfcfcf8cccc8c8f8c8cc8cc8c8c8cf8c8f68c8c8fcf6cfcf6f68cfcffcf8cc8fcc8fcfcfcfcfcfcf6fcfcfcf6fcfcfcfcfcfcfcfcfcfcffcfcfcfcfcfcfcf6fcf6ffcf6fcfcffcffcffcfcfcffcfcfcfcf6ffffffcf6ffcfcffcffcfccffcfffcffffcffcffcfcfcffffcfffffffcfcffc
                                fcffcffcffcfcfffcfcfcffffcfcfcffff6cf7ffcfcfcf6c8cfcfcf8fcfcfcfcfcfcffffcfcfcfcf8fcfcfcfcfcfcf8cf8ccf8f6f6f6c8f6f8fccfcfcf6c8cc8c8c8cfcf8c88c8f8ccfcfccc8cf8cc8cfc8cfcfcfcffcfcfccfcfcfcfcfcfcf6fcf6fccfcfcfcfffcffcffcfcfcfcf6fccfcffcff6ffcffcfcffcf6fcfcfcffcfcfcfcfffcfcfffcffcfffcfcfffcffcfcffcffcfcffffcfcfffcfcfcffffcff
                                ffcffcff7ffcfcfcfffffcfcffffcfcfcffcffcffffefc8ccc8fc8fcfcfcffcffcffcfcffcfcfcfcfcfcfcfcfcfcfcfccff8fccf8c8cf6cf8cc8f6f8c8f8c8c8c8c8c8ccc8c8ccc868cfcffcfccf6c8c8cfccf6fcfcfcfccfcffcfcfcfcfcfcfcfcfcfcf6ffcfcfcfcffcffcfcfcfcfcf6f6fcf6ffcfcfcfcfcfcffcffcfcfcfffcfffcffcfcfcffffffcffcfcfffcffffcffcffcfcfcfffffcfffffffcfffcf
                                cffcff7ffcffcfffcf7fcffcfcfcffffcf6fcffcfcff6f68cfcfcfcfcfcfcffcffcfcffcffcfcfcfcfcfcfcfcffcfcff8fcfcf8cfcf8cf8cfccfcfcfcc8cf6c8c6868ccf86c8c8f6c8fcfccc8f6cf8fcf6cf8fcffcffcf6fcfcfcf6fcfcfcfcfcfcfcfcffcffcfcfffcffcffffcffcffcfcfccfcccf6fcfcfcffcfcfcfcfcffcfcfcfcffcfcfcfcfcfcfffffcfcfffcfcffcff6ffcffffcfffffcffcffffcfff
                                f7ffcffcffcffcfcfffffcffcfffcfcffccffcffffcff6c8fcf8fcfcfcffcfcfcfcffcffcfcffcffcffcfcfcfcfcffcfcfcfcfcfcfcfcfcf8cc8fcfcf8f6c88c88c8c88cf8686c8c8c8ffcfcc8f8cc8c8c8cfcf6fcfcfcfcfcfcf6cfcfcfcfcfcfcfcffcfcfcfffcfcfcffcf6ffcffcfcffcffcffcfcf6f6fcf6ffcffcfcf6fcffcfcfcffff6fcfcfcffcfcffcfcfffffcffcffcffcfcffffcfffffffcffffcf
                                cffcfcffcfcfcfcfcfcfcfcffcfcfffcff6cffcfcffcfc6fcfccf8ffcfcffcfffcfcffcffcfcfcfcfcfcffcfcfcfcfcfcfccfcfcf8cf8cf6f8fc8fcfccc8c8c868686c8c8c8c86868cfcff8f6ccf8fcfcfc8cfccfcfcfccf8fcfc8cfcfcffcffcffcfcfcffcfcfcfcffcf6fcfcfcfcfcfcffcfcf6fcfcfcfcfcfcffcfcfcfcffcfcfcffcfcffcfcfcfcfffffffcfcfcfffcffcfcfcfffffcfffcfcfffffcffff
                                fcffcfcfcfcffcfffcfcffcfcfffcfcf6fcfcffcfcff6fcfcf8fcfcfcffcffcfcfffcffcfffcf8fcffcfcfcffcfcfcfcf6fcfcfcfcfcfc8cfc8cc8cfcf8c8c8686a868c8cc6868a8c8cfcfcc88fccf8c8c8cf8f8fcfcf8fccfcfc8fcfcfcfcfcfcfcfcffcffcffcffcfcffcfffffcffcffcfcffcfffcfffcfcfcfcfcffcfcfcf6fcff6ffffcffcfffcfcfcfcfffcffffcfffcfcfcfcfcffffffffffcffffffcf
                                cfcffcfcffcfcfcfcfffcffcfcfcfffffc6ffcffffcffc8f8fcfcfcffcfcfffcfcfcfcffcfcfcfcfcffcfcfcfcfcf6fcffcf8fcf6f8f6fcf8cc8ccf8fcf6c688c868a68cf868a686a68cfcf8c868fcfccfc8cfcccffccfcf8cfcc8fcf8fcfcfcfcfcfcfcfcffcffcf6ff6ffccf6ffcffcfcffcffcfcfcfcfffcffcff6ffcfcfcfcfcffcfcffcff6fcfcffffffcfffcfffcfffffffffffffcfcfcfcfffcffffff
                                cffcffcfcffcfffcfcfcfcffffcfcfcfcfccfcfcfcfcffcfcf6fcffcf8ffcfcfffcfffcffcffcfcfcfcffcfcfcfcfcfcfcfcfcfcfcfcf8c8cf8c8c8fcc8c886a68a686a8c8c68a68686cf8f68cc8cf8c8ccf6fcf8fcf8cccfcff6cfccfcfcfcffcffcfcfcfcfcf6fcfcfcfcffcfcffcfcff6ffcfcffcfcfcfcfcff6ffcffcfffcfcfcfffffff6fffffcf6ffcfffcfffcfffcfcf6fcffcffffffffffffffcffcf
                                f6fcfcffcfcfcfcffcffcfc6fcffffcff6fcffcfffffcffcfccf8fcfcfcffffcfcfcfcfcffcfccfcfcfcfcffcfcfcff8fcfcfcfcfc8fcfcf8ccf6cfcfcf6c868a68a868c8c68686a6a88fcf6c86cfcf6c8c8cf8cfcfcf8fcccfcc8fcfcfcfffcffcfcfcffcfcfcffcfcfcfcf6fcf6fcff6ffcfcffcffffffcfffcffcffcffcfcffcffcfcfcfcfcfcfffcfcfffffffcffffffffffffffffffcfffcfcffcfffffc
                                ffcfcfcfcffcfffcffcffffcfcf6fffcfcf8fcfcfcfcfcffcf8cfcfcffcfcfcfffffcfffcfffcfcffcfcfcfcffcffcfcfcfcfcfcfcfc8cf6fc8c8c8f6fc8c8c88c868a68c88a8a86868cfcf88688cf88c8cf8cf6cfcf6cf8f8cf8cf8fcfcfcfcfcfcfcfcffcfcfcfcffcffcffcf6fcc6ffcfcffcffcf6fcffcfcfcffcff6ffcfcffcffcffffffcffcffffffcffcfffcffcfcfcfcffcfcfffffffffffffffffff
                                cfcffcfcfcffcfcfcfcf6c6cf6ffcfcffcfcfcfcffcfffcf8cfcffcfcffcfffcf6fcfcfcfcf6fcfcfcf8fcf8fcfcfcffffcffcff8fcfcfcc8fcfcfccfcf6c8cc88c8888c8c8686888a68fcf6a8a8cfc68c8cccf8fcfc8fccfcfcccfcfcfcffcffcfcfcfcfcffcf6cf6fcf6fcfcffcfcfcfcffcffcfcffffcffffffcffcffcffffcfcfcffcf6fcfcffcfcfcffcfffffffffffffffffffffcffcffcfcfcffcffcf
                                cffcfcffcfcffcffcfcfcfcfcfcffffcf6fcf8ffcffcfcfcfc8fcfcffcffcfcffcffcfcffcffcfcfcfcfcfcfcfcfcfcfcffcffcfcffcf6ffcf8f68f8cfc8cf8cf8c8c8c8c868a88c888ccfc88668c8c888c88fcf6fcfc8f8c8cf6f6f8fcfcffcfcff6fcfcfcffcfcfcccfcfcfcfcfcf6fcfcfcfcfffcfcffcfcf6fffcffcfcfcffffffcffcfffffcfffffffcffcffcf7ffffcfcfcffcffffffffffffffffffff
                                f6fcffcffcfcff7ffcfcf6fcfcfcfcffcfcfcfcfcfcffcff6fcfcffccfcfcffcfcfcfcfcffcfcffcfcf8fcf8fcf8fcfcf6ffccfcfcf8cf8cfcfcfc8cfcf68c8c8c8c8c8c8c8c8c8c8c8cf8f6a8a68f86868cc8c8cf8c8c8fcfcf8cfcfcfcfcfcffcfcfcffffcfcfcfcf6fcf6fcfcf6fcc6ccffcfcfcfffcfffffffcffcffffffcfcfcffcffcfcfcfcf6ffffffffffffffffffffffffffcfffffffcfcffcffcfc
                                ffcfcfcfcfff6ffcfcffcffcfcfcffcffcfcf8fcfcfcfcfcfccfcfcfcfcffcfcfcfcffcfcffcfcfcfcfcf8fcf8fcfcf8fcfcf8fcffcf8cff8f8c8fcccfc8fcf8fcf8c8c8c8c8c8c8c8c8cfc86888cfc8a8c88fcf6cffc8fc8f6c8c8cf8fcfcffcfcfc8ccfcfcf6ffcfcfcfcfcfcfcfcff86f6ffcfff6fffcfcfcfffffffcfcfcfffffcffcffcffff6ffcfcfcffcfcfcfcfffcffcfcfcfffcffcfffffffffffff
                                cffcfcffcfcffcfcff6ffcfcfcffcffcf6f8fcfcffffcfcf6f8fcfcf8ffcffcfcfcfcfcffcff6ffcfcf8fcfcfcfcf8fccf8ffcfcfcfcfcfcfcfcf8f8f8f6cf8c8f8cf8f8c8f8c8c8cf8c8c8688a6cf86868c8cf8cfc8c8cf6c8f8cfcfccf8fcfcfcfcf8fcfcfcfcfcfcfcfcfcf8fcfcfc8c6fcff6fcfcfcffffffcfcfcffffffcfcfcfcffcffcfcfffcfffffffffffffffffffffffffffffffffffcfcfcffcff
                                cfcfffcffcfcfcfcfcfcfcfcfcfcfcffcfcfcf6fcfcffcfcfcffcfcfccffcfcfcfcf8fcfcfcfcfcf8fcfcf6fcfcfcfcf8ffcfccf8ffc6f8f8fcfccccfcc6fccf8cf8cfc8f8c8fc888cf8f8c8a8888c8a8c8c8c8c8ffc8f8cf8c8cf8f8f6fccfcfcf6f6cfffcf6fcfcfcfcfcf8fcfcfcfcc8cfcfcfcfcfcfcfcfcfffffffcffcffffcfffcff6ffcfcfcffcfcffcfffcfcfcfffffcffcfcffffcffcfffffffffff
                                cffcfcfcff6fcfcfcfcfcfcfcfcfcffcfcfccfcffcfcfcfcfcfcfcfcfcfffcfcf8fcfcfcffcfcf8fcfccfcf8fcfcfcfcfcffcf8fcfcf8cfcfcf8fcf8cffc8f8cc8cf8c8c8c8c8fc8c8c8c8f68c88cc8688c88cfcfc8f6c8f8cfc8cfccfc8f8cfcfcfc8c8cfcfc8f6fcfcfcfcfcfcfcf6fcf6fcffffcfcfcfcffffcfcfcfffffcf6ffcfffcffcfcffcffcfcfcfffffffffffcffffffffffcfffffffffcfcfcfcf
                                fcfcffcf6ffcfcfcfcfcfcfcfcfcfcffcf6f8fcfcffcfcfcfcf8ffcfcfcfcfcfcfcfcfcfcff6fcfcf8fccfcfcf8fcf8c8cfcfccfcffc8cfcf8fcf8fcf6f8fcf8fc8c8c8f888cf8c868c8fc88a86868c88c8c888cf8f68c8cf8cf8c8f8fcfcf6ffcf6f8cffcf6fc8fcfcfcfcfcfcfcfcff6c8fcfcfcfffcf6fcfcffffcffcfcffffcffcfcffcf6fcff6ffffcffcfcffcfcfcffcffcffcffffffcfffcfffffffff
                                cfff6ffcfcfcfcfcfcfcfcfcfcfcffcffcfcfcfcfcfcfcfcfcfcfcfcfcffcfcfcf8fccfcfcffcfcfcfcf8f8f8fcf8fcffcff8f8cfcf8cf8fcfcfcfccfcfccc8c8f8c8c8c8c88cf888c8c8cc86888a868a88f8c8cfcc8c8cf8cf8fc8ccf8f8c8fcfcf8c8cfcfc8cc8fcfcfcfcf6fcfcfcff8ccfcfffcfcffcfffffcfcfcfffffcfcfcffcfcffcfcfcfcfcfffcffffffffcffffffffffffcfcffffcffffcfcffcf
                                f6fcfcfcfcfcfcfcfcfcfcfcfcf6fffccfcfcf8fcff6ffcfcfcfcfcfcfcffcf6fcfcf8fcfcfcf8f8fccfccfcfcfcfcfc8fcfcfcfcfcf6cfcf8fcfcf6fcf8fcfcc8c8c868c868c8c68c88f886a6a8688688c88688cff868c8fcfc8668cfcc8ccfcfcfc88cffcc8f8fcfcfcfcf6fcfcffcfcc8fcfcfcfffcffccfcffffcffcffcfffffcffffcfffcff6fcffcffcf6fcfcffcfcffcffcfffffffcffffffffffcfff
                                cfcfcfcffcffcfcfcfcfcfcfcfcfcfcfccf6fcfcfcfcf6ffcffcffcfcffcfcffcfcfcfcfcffcfccfcf8fcfccf8fcfcf8fcfcf8cfcfcf8f8fcfcf6fcf8fcf8c8f8f68c688688c8f86a8c8c8c888886a6a868c8a8cf8c8c8cfc8f66868c8ffc8cfcf8f8c8fcff8c8c8c8fcfcfcc8fcfcfcf8cccfffffcfcfcfffcffcfcfcfffcfcfcfcfcfcffcfffcffcfcffffffcfcffcffffcffffffcfffffffffcffcfffffcf
                                fcfffcfcfcf6ffcfcff6ffcfcfcfffffcfcfcfcfcffcfcfcfcfcfcfcfcffcf6fcf8f6fccfcfcfcf8fcfcf8f8fcf8f8fcfcffcf8fcff8ccfcfccfcf8cfcfccfc8c8c88c8c8a88c8c68c868c8686a886868a888888cfc8688cfc8c68c8cfc8f68fcfcfc8cfcfc8cf6c8fcfffc8c6cfcfcfcf68f6cfcfcffcfcfcfcfffcf6ffcfffffcfffffcffcfcfcffcccfcffcffccffcfcffffcfffffcffcffcfffffffcfffc
                                ffccffcfcfcfcfcff6ffcfcfcfccfcfcf6fcfcfcfcfcfcfcfcfcfcfcffcfcfcf8fcfcf8fcffcfcfccf8cfcfccfcfcfcf8cfcfcfcfcfcf8fccfcfcfcf8fccc8cf6f8c686a6868cf8688c68688a886a868688c86c8f8f8668f8f8c88c868fcf8c8fcf8cf8cfcf68c8cc8cccfcc8c8cfcfcf6c8cffcfcfcffcfcfffcff6ffcfffcfcffcf6fffcfffffcfffcfcffffcfff6ffffcffffffcfffffffffffcffffffcff
                                cffcf6ffcffcfcfcffcfcffcfcfcfffccfcf8fcfcfcf6fcfcfcfcfcfcfcfcfcfcfcf8cfcfcfcf6f8fcfccf8fccfcfcfcfcfcf8cfcfcfcfcf8fcf8f8ccff8fc8c8c8c8c886a88c88a8c66a6888688866a688c888cfcc86a6cc8c868a8ccfc8c6cffcf8c8cf8cf8c88cf8fcf6f68ccfcfc8f6c8cfffcfcf6fcfcfcffcfcfffcffffcffcfcfffcfcfcfccfcffcfcffcfffcfcffcfffcfffffcffcffcffffcffffff
                                cf6fffcfcf6ffcfcfcfcfcfcfcfcfcff6fcfcfcffcfcf8fcfcfcfcfcfcfcf6fcfcfcfcccfcfcfcfcf8fcfcfcf8f8f8f8f8ffcfcf8fcccf8fcf8fccf8f6fc8cf8f6c8c868a6868c86688688a8c8a68698888c68c8ff86668f8f8c868688ffc88ccfc8cf8cfcf68c8c8cfcfc8c8c8cfcfcf6c8cfcfcfcfcfcfcfcfcff6f6fffcfcff6ffffcffffcffcf6ffcfffffffcfffffcfffcfffffcffffffffffcffffcfcf
                                cffcfcfcfcfcffcfcfcffcfcf6f8ffcfcfcfcfcfcf8cfcfcfcffcfcfcfcfcfcf8f6f6fcf6fcfcf8fcf6f8fcfcfcfcfcfcfcfcf8fcffcf8fcfcfcf6cf6fc8f6cc8f8c8c86886a88c68ca6a6888688a6666a88a88c8fc8668cc8c86a686c8c8c68fcfc8cf8cfc888c8c68ccfc868ccff8cc8c88fcfcfcfcfcf6ffcfcf8cfcfcfffcffcfcffcf6ffcf6fc8fcfcf6fcfffcfcfffcfffffffffffcffcffffffcfffff
                                fcfcfcffcffcfcfcffcfcfcfcfcfcff6fcfcfcfcfcfccfcf8fcf8fcffcfcf8fcfcfcfccfcffcfccf8fcfcf8f8fcfcfcfcfcf8fcfcfcfcfcfcfcfcf8cf8fccf8fc8c8c8c8a688c88a8686888c8c88666a8886868fcfc86a68f886666a68ffc86cfcf8c8cf8fc8c86c8cfcfc8c8c6fcfcf8c86cffcfcfcf6fcfccfff6f8cfffcfcfcfcfcfcfffcfcffcfccfcffcffcfffffcfffcffcfffffcffffffffffffffffc
                                fcffcfcffcffcfcfcfcfcfcfcffcfcfcfcfcfcf8fcf8fcfcfcfcfcfcfcf6fccf6fcf8f8cfccf6f8fccf8cfccfcfcf8f8f8fcfcfcfcf6f8fcfcf6f6f8ccc8f6c8cf8cc8c8886a8c6688a86a8888c8666668c8a88cf8f6668c8c6a6866a68c868cf8fccf8ccf68868c68cf6fc868c8fcccf6c8cfcffcf6fcf8cf6fcfc8cfcffcffcf8fcfffcfcfcfccf8f6ffcffcfffcffffcfffcfffcffffffcffcffcffcffcff
                                fcf6ffcf6fcfcffcfcffcffcfccfcfcf8fcfcfcfcfcccf6fcfcfcfcfcfcfcf8fcf8cfcfccfcfcfcfcfcf8cfcf8fcfcfcfcfcf8f8ffcfcfcf8fcf8c8cf8fc8f8f6cccc8c86c886888a668868c868869668886688cfc8a6988c86666a666cf868cfcc8c6f8cfc8c6886c8fcf8c8c8fcfc8c86c8ffcf6fcf8fcfcfcf6cf68fcffcf8fcfcf6fcf8ffcfcfcfc8fcffcfcffcfcffcfffcfffffcfffffffffffffffffc
                                ffcfcffcffcffcfcffcfcfcfcfcfcfccfcfcfcfcfcf6fcf8fcfcfcfcf6f8cfcfcfcf6c8fcf8fcf8cf8ccfccfcfcfcfcfcf8fcfcfcfccf8fcfcf6cfc8c8c8ccc8f8f8f6c8c868c8a6888a8888c8c866698c86a888cfc6668c8866a6668a88c68cf8f68c8c8f8686a68ccfcf6c8c6cfcfcf6c8fcffcfcfcfcf6f6ffc8c8fcfcf8fcfcf8fcf8ffcfcf8fc8fccfcffffcfffffffcfffcffcffffcffcffffcffcffff
                                cfcffcfcfcfcfcffcfcfcfcfcfcfcf6f8fcf8f6fcfc8fcfcfcfcfcf8fcfcf6f8cf8fcfcf6fcfcfcfcfcf6f8f8fcf8fcf8cfcf6fcfcf8fcfcfcfc88ccccfcccfc8cc8ccc8c8c8c8886a686a8c8888698988a6688cf888666886a66668668c8668fc8c68f8cfc86a68a8cfc8c868cfcf68c886cffcf8fc8f6fcfc8fccfc8ffcfcf8fcfcf8fcfcfcfcfcfccf6fffcfffcfcfcffffcffcffffcffffffcfffffffcff
                                cffcfcffcffcfcf6fcfcfcfcfcfcfcfcfcfcfcfcf6fccf8fcf8fcfcfcf6fcfcfcfcf8ccfc8fcccf8cf6fcfccfccfcf8fcf6fcf8fcfcfcfcfcc8cf6f8c8c8f8c8f8f6f8cc8c88c8c6888688688c889866686668c88fc698a88666666a66886a68fcf68ccc8c68668668cffc8c8c8cfcf8cc6cfcffcf6fcfc8f8cf8f68ccf8f8fcf6f8f6fcfcf8ffcf8fcfcfc8fffcffffffcfffffffcfcffffcffffffffcfffff
                                cf6ffcfcfcfcffcfffcffcfcfcfcfc8cfcfcfcfcfcf8fcfcfcfcfcfccfccf8cf8fcfcf8cfccf8fcfcf8c8f8f6f8f6fcccfc8fcfcffcf8fcfcfc68c8cf6f6ccf6cc8c8ccc8c68c68c86a86a8868c869666a66688c8c866668a6666a668a68666c8f8988f8cf86a66a86ccf8c86c8cf8ccc8c8cfcf6fcf8cfc8c8fcccf88fcfcf8fcfccfcf8fcfcfcfcf6f8ccfcfffffcfcfffcfcfcffffffcfffcfffcfffffcff
                                fcfcff6ffcff6ffcfcfcfcfcfcfcfcfcf6f8cf6fcfcf6f6fcfcfccf8fcf8cf6fcf8f6cf8cf8fcf8cfcfcfccfcfccf8f8f6fccf8fcf8fcfcf8c8cf6f68c8cf8c8f8fccccc86c88c86a8688688a88666666666a8886866a668666a666666a8a688cc866c8c68c66686a8fcfc8c88c8fcccc868cffcf8fcfccfcc6fcc8ccccfcfcfcf8f8f8fcf8fcffcfcfcfcccfcfcfffffcffffffffcfcffffffffcffffcfffff
                                cffcfcfcffcffcfcfcffcfcfcf6fcfccfcfcfcfcf8cfccfccf6fcfcfcf6fcfcfcfccf8ccc8cf6fcf6f8c8f8c8cf8cccccf8f8cfcfcfcf6fcf6c8c8c8fc8f6cfc8cccf6f8c88c8688688a68a6688a66a66a6668c86c86668a8666668686868668f8698c886c86a6a868cfcf68c8ccfccccf6cfcf8cf6f6f8ccf6cf6f6f6f8fcf6fcfcfcfcfcfcfcf6fcf6f8f6ffcffcfcffcfffcffffffcffcffcffffffffcfff
                                cfcfcffcfcfcfcffcfcfcffcfcffcfcfcf8f6fcfcf6fcf8f8fcf8f6fcfcf6cf8f6f8c8cf8fccf8cf8cfcfcfcf8cf8fcf8cfcfccf6fcfcfcf6c8c8c8c8cc8f8c8f6f6cf6c8c68c8c8a6868a6886866666668668866666666866a666a66a686698cc898cf688866668a8cf8c8c8c6f6f8f68c88ffcfccfccfc8c8c8c8c8c8fcfcfcf8f6f8f6f6fcfcfcfcfcccf6fffcffffcffcfffcffcfffcfffffffcffcfffcf
                                cfcffcfcfcfcffcfcffcfcf6ffccfcfcccfcfccccfcccfccf6fcfcfcf6fcf8cfcfc8f6c8cccf6fc8fc8c8c8f6fc8fcccf8cccf8ffcfcfcf8c8c8c8ccccf6cf8ccf8f8cf8c68c686868a868686a866686666a688a666a66a6a6668666686a66a888896886a866a66868fcfc68c8c8fcc8c86ccfc8cf8cf8f6f6f6f8f8f8cf6f8fcfcfcfcfcfcfcfcf8fccfcf6cccfffcfffcffffffffffcfffcffcfffffffffff
                                cfcf6fcfcfcfcfcff6ffcfcfcfcfcf6fcf6f6f8fccf8f6f6fccccf8fcf8cfcf6fcf6cf8f6f8cf8cfccfcfcf6fccf6f8fcffcfcfcffcfcfcc8c8c6f6f88cf8ccf6c8cf6c868c868c6a868a68a688a66a666866a8866666666686666a686668666c866a8c668a666a86ccfc8c88c6fcf6fcc88fcfcf6f8cfc8c8c8cc6c8cccfcfcfcf6fcfcfcfcfcfcfcfcf6fcf8f6fcffcffcffcffcffcffcffcffffcffcfcfcf
                                cf6ffcfcffcffcfcffcfcffcfcf6fcfcccf8cfccf6fccfcfcfcfcfcccfcf6fcf8cfc8cc8ccf8cfc8f8c8ccc8c8f8cfcccccf6fcfcfcfcf6f6f6f6c8ccc8c8f6cf8fccf8c6c68a6886866866686866666666668866a686686668a66666a6866688c669886a666a668c8fcf86c8cc8fcc8f8c6fcf6fccf8f6fcf6f8f8f6f8c8fcfcfcfcf8fccf8fcfcfcfcfcf8cfccfcfcfcfffffffffffffffffffcffffffffff
                                cffcfcfcfcfcfcfcfcfcfcfcfcfcf8cf8f6cfc8fcf6fccccf6f8f6fcf6fcf8cfcf8fcfcf8f6fc8fccfcf6f8fcf6fc8f8ff6fcfcfcfcfccf8c8c8c8c8f6fc8cf8cc6f8cc8686868a6a8a66a66a8666986a98966c866666a66a668686a6686a66988698c86686666a88c8fcc88c8cf6f8ccf6cf8cf8f8fc8f8c8c8c6c8f6cfcfcfcfcfcfcfcfcfcfcfcfcf6fcfcf6f6f6fcfcfcfcfcffcfcfcfcfcffffcfcfcfcf
                                6fcf6fcfcfcfcffcfcffcfcf6fcfcfcfccfc8cf6fcccf8f6fcfcfcf8cfc8cfcf8fccf6fcfcfcfccf6f6cfcc8c8c8fccf6fcf8fcfcfcfcf6fc8c8cf8cc8c8f6c8f8ccf86c6a6a8686866868666889666666666a866666668668686a668668666a86a668a98a96a66868cfc8c68c6fccf8c8c8fcf6cfc8fcccccf6f8f6c8f68fcfcfcffcfcfcffcfcf6fcfcfcf6fcfcfcf6ffffffffffffffffffffcffffffcffc
                                fcfcfcfcfcfcfcff6fcfcfcffcfcf6f6f8c8fccf6f8fccfccf8cf6fcf6ffcf8fcfcfcf8fcc8c8f8fc8f8c8fccfc8c8f6fcfcfcfcfcfcfcf8cf8f6ccf8fcc6f8c6f6f6fc68686a6a86a86a66666a669869666988669a666686a68666686866a6686696a66666668a8a6fcfc68c8ccf8cfcf66fc8fc8f6ccccc6c8c8cf8c8cf8fcffcfcffcf6fcfcfcffcfcf8fcfcf8f6fcf6fcfcffcffcffcffcffffcfcfff6ff
                                cf6fcfcfcfcffcfcffcff6fcfcf6fcfccfccccccfccf6f6f8cfccfccfcccfcfcf6f8fcfcffcfccf6fccfc8c8c8cf8ccfc8fccfcfcfcfcfcfc8cccf8cc6f8cccfc8ccf686a6a68686a66666a6986966989669668986668a666866a686a68a66668a666866a66a666868cfc8c8ccc8cfc8c8c6fc8cfccf8f6f8f8f6f68cf8c8cfcfcffcfcfcfcffcf6fcf6fcfccfcfcfc8fcfcfffcfffffffffffcfcfffffcffcf
                                6fcfcf6fcfcf6fcfcffcffcfcfcfcf8cc8f6fcf6f8fccfccfccf8cf8cfcf6f8cfcfccfcfc8fcf6cfc8fccf6f6f6ccf8cfccf8ffcfcfcfcf6fccc8cccfcc8f68c8fc8cc686686a68a686a666669666986669898a66989666a66a866668668666a86966a6666986a6a66cfcc868ccc6fcfcf68cfc8ccccc8cc6cc8c8cf8c8f6f6ffcfcfcffcfcffcfcfcfcfccf6fcff6fcf6fccfffcfcffcfcfcffffcfcfffcfff
                                cfcf6fcfcf6ffcffcf6fcfcf6fccf6fcfccf6f6fccccc8f6cf6fcf6fccfcfcfcf8fcf8fcfcf6cf8c8fcf8c8cc8c8c8cc8f8fcfcfcfcfcfcf6f8fccf6f8f6ccf6ccfcc8c6a6a686a68666a66a6666666a6989666666686686868668a668a66a6666669866a6666686a8cff8c8c8f6f6f6c8c68c8f6f8f6f8fcf6f8c8c8f6c8cfcfcffffcffcfcffcf6fcf8fcfccfcfcf8cfcf6fcffffcfffffffcfffffcfffcfc
                                fcf6fcfcfcfcffcfcffcfcfcfcfccfc8cf6cf8cc8f6fcf6fc8ccccfcf6f8cf6fcf6fcfcfcfc8f6cfcfc8c8c8cc8f6f8fccfcfcfcfcfcf8f6c8cccccf6ccf8c8fcc6f8c8c686a68686a66666666a969666698966698989a666a686666a6866666a66989a696a6a6a668cfc86c6c8cc8cf8c8cc8c6ccf6f6c8c8c8cfcf6ccf8c8fcfcfcffcfcfcfcfcfcf6fcf6f8fcfcfcf6fcfffcfcffcfcfcfffcfcfffcfcfff
                                6fcfcfcf6fcfcf6ffcfcfcfcfcf6fccf6cf8ccccccf6ccc8fcf8f6f6fccfccf8cfcfcf6f8fc8ccf8ffccf6fc8cc6ccc8f6fccfcfcfcfcfcf8fcf8f6fcf8ccf6cfcf6cc686a686a6a668a6a6696666a66966666a6668668686686a6a686686a6686a666666666666a68cfcc886cf8cc8cf6f68c6f8c8ccfcccf6fcf6cf88cccf6fcfcfcfcfcf6fffcf6fcfcfcfcfcffffcfc8ccfffffffffffcfffffcfcfffcfc
                                fcfcf6fcfcfcfcfcfcfcf6fcf6fcf8fcfc8cf6f8c8cf8fccc8cccfcc8f8cf8cfcfcf6fcfc8cf8cfcfc8c8c8cc6f8c8f6fcf8fcfcffcfcf6fc8ccfcf8fcccc8cf6c8fc8c686a686866a66666a66696666666a6966989866a686a6666688a66666a666a96a6a98a666a8cf8c6c86cc8cf6c8cc6c8cccfc8c8f6c8fcff8cf6f6c8fcfcffcfcfcfcfcffcfcf8f6fcf6fcfcfcfcffcfcfcfcfcfcffcfcfcfffcfcfff
                                cf6fcfcfcfcfcfcfcf6fcfcfcfcfccc6f6f6c8cccf6cc6f6fccf6c8fccf6fcf6f6fcfcf8fc6cfcfcf6f6cf6c8c6ccc8cf8cfcfcfcfcf6fc8cf6f6ccccf6f6f6ccfc6cc86a686a66a6666a66666a666989a6966666a66a666a688686a68686a6686a9689666666a6a68cfcc8c6c8c6c6f8f68c8c6f68f6f6ccf6cfcff6c8cf8cfcfcf6ff6fcfcffcfcf6fcfcf8fcffcfffcf6f6fcffffffffcffffffcfcfffcfc
                                fcfcfcfcfcfcfcfcfcfcfcf6fcccf6fccccfcccc6c8cfc8ccc6cfcf6f6cf6ccfcf8cf8ccccf6fcfc8c8c8c8cc8c8ccf6fcfcf6ffcfcfcfccc8ccf8fcf6fcccf8c6fc8c6c66a66a6868a6666a966666666666666a6668686868686a6868a6666a666666a6a6a6a66866cf8c8c8ccf68c8ccc6c8c8cf6ccc8f6c86ffcfcfc8cccccf6ffcffcfcfcfffcfcfcf8fcfccfcfcffcfcf8f6fcfcfcfffcf7fffcfcfcfff
                                6fcfcfcfcfcf6fcfcfcfcfcfcffcfcfcf8f6cccf8cf6c8f6f8f6ccfcfc8cfc8c8cfc8fcf6c8cfffcfccf6c8ccfcc6ccfccf6ffcfcfcfc8f6fcc8cccc8cc8f6cfcf6fc6c686686686a666a6666669a66a66666a6666a66a66a68a6668a6866a666a6a6666666a66a6a8cfc6c668c8c6cf8c8c8c6c8cfccf6cf8c6cfffc8ccccf6fcfcfccfcf6fcfcffcf6fcfcf6fcf6fffffc8cccfcfffffcfcfffcfcfffff7ff
                                cfcfcfcfcfcffcfcfcfcfcfcfcf6fcf6fccf8f6cc8cccccc6cc8fcfc8fcc8fcf6c8fcccfcfcfcfc8c8c8c8c8ccf6f8c8f8fcfcfcf6fcfcc8cccc8f6fcfcccf6c8ccc8c86a6a6a6a666a666a66a66666666a69666a6686868686686a686a6666a6666a6a6a6a666a668cfc8cc8c8c68c8c6c6c6c8c6c8ccf6c8c8fcfcff6f6f6fcfcf6ff6fcfcfcfffcfcffcfcfcfcfcfcfcfffcf6f6fcfffffcfffffcf7fffcf
                                fcfcfcfcfcfcfcfcfcfcfcfcf6fcfcfccf6cc8cccf6f6f6f8f6fcffcc6fcfcf6cfc6f6f6c8ffcfcccf6c8cccfcc8c8fccfcfcf8fcfcfcf6f6f6f6cccc8f68cccf6fc6c66666866686a666666666a669a69666866686a66a686a6a6686866a66686a66666666a6a66a6cf6c8c68c6c6ccf6c86c8ccfcf6f6c8c6ccfffcf6c8c8cf6fcfcfcfcf6fcfcffcfcffcf6fcfcffffffcfcf6cfcfcfcfffcfcfffffcfffc
                                fcffcfcfcf6fcfcfcfcfcf6fcffcffcf6fcfcf6f6c8c8c8ccccfcfcfcf6cfccf6c8ccfcfcfcff8cf8c8cc6f8ff6f6ccf6fcf8fcfcfcfcfcc8c8c8cf8f6ccc8c6cf6cc86a6a66a86a6668a6a6a6666a66666a66a6a6686868a668686a6a6a66a66a66a6a6a6a6686a68cc8cc68c6c6868c86c8c686c8cc8cfcc86fcfcffccfcf6fcf8fcf8f6fccfcfcffcf6ffcfcf6fcfcfcffffcfc8fcfffcfffffcfcfffcfcf
                                cfcf6ff6ffcffcfcf6fcfffcfcffcfcfcf8cccf6fccfccf6f8fcfcf6ccfcfcc8cfccf8c8fffcfcf6f6c8ccfcfcf6c8cfccfcfcf6f6fcf6f8ccccc6fc6cf6cc8c8cc8c6c686a66a66a6a66666698966666a666666868a6a66686a6a668866666a66666666a66a6a6686cf68c6c6c86ccc8c6c68cc8f6fcf68c6c8cffffcf68c8c8ccfccfcfc8f6ffffcff6fcffcfcfcfffffcfcffcfccfcfcfcfcfffffcfcffff
                                cfcffcffcfcf6fcfcffcf7ffcfcffcfcfcfcf6cc8f68c8cc8cffcf6f8fcff8f6c8c8ccfcfcffcfcfc8cccfcff6fc8f6cf8cf6fcfcffcfccccc6f6fcf6c6c86cc6f6f6c86a668668686666a6986a686a66666a6a66a66868a86a68686a6a6a66689a6a6a66a6666a6a68cc68c68c6668c6c68c6c6c6cc8ccc8cc6fcfcffcf6f6fcf6f6f6f6fccf6fcfcfcfcfcff6fcfcfcfffffcfffcf6fcfffffcfcfffffcfcf
                                fcfcfcfcfcfffcfcfcfcffcffffcffcf6fcf6ffcf6cf6f6fcfcffcfccffcf6cc8cccccffffcfcf8f6c8fcffcfc8cc8cf6fcfc8f6fcff8f68cc8ccf8c6c8cc6c6c6cc86c666a6a6a6a86a666a66666666a6666668a686a6866a6866a686666a6a686a666a66a6a6a686c8c8c66c8c6a6f86c6c868ccfcf6f6cc8c8fcffcfc8cc8c8ccfcfcc8f6cfcfffffcf6ffcfcfcfffcfcfffcfffcfcfcfcfcfffcfcfffffc
                                fcfcfcfcffccffcfcfcfcfcfcfffcfcfcf6fcf6f8cf8cc8cfcfccccfcfcf6c8c6c8f6f6fcfffcfcc8ccfcfcfcfc8ccc8fc8cfccfcfcfc6cf68c6fcf6c8c68c8c8c8cc86a866686866a686a666a66a69666a6a6a666a686a6866a666a68a66666a666a6a6666a6686a68c66c6c8c666c8c6c6a6cc68c8cc8cc8cccffcfffcc6f6fcc8c8c8fccf8cfcfcfcfcfcfffcfccfcfffcfffcfcffcffcfffcfffffcfcfff
                                cfcfcfcfcfffcffcfcfcfcfffcfff6fcfcfcfcfccf6ccfcf6fcff6fcfcfccc6f6cc6fcfffcfcfcfcf8fcffcfccc6c8fcccfccf8fcffc8c86ccccff6cc6c6c6c6cc6c6c66a6a6a6a6666a688a666666a666666868a6686a66a686a6866a66a6a66a66666a6a66a6a66a68b86a6c6a6a8c6c686c68cccf6fcc6f68c6fffcff6c8c6ccf6ff6cc6cf6fcffcfcf6fcfcfcfcfcfcffcfffffcff6ffcfffcf7fffffcfc
                                fcfcfcfcfcfff7ffcffcffcfffcfcffcfcfcf6f8f6f8c8cffcf6fcfcffcf6c8c8c8fcffcfcffcfc8cfcffcfff6f68c68f6cf6cfcfcfcf6cc86fcfcf6c8c6c8c6c8c8c8c68686666a6a668a66a6a6a666a6a6a6a668a6668686a66a6a666a666a66a6a6a666a6666a66a66a66686a66c8c6a6a6a6c86cc8ccc6ccfcfcfffcf6c8c8c6f6fcf8f6fc8fcfffcfc8fffcfcfcfffcffcf6fffcffcfcf6fffffcfcffcf
                                cfcfcffcffcfcfcfcfcfcfffcfffcfcfcfcfcfcfcccfcfccf8cfcf8fcfc6c8c6c6fcfcffcfcfcf6fcffcffcfcc8c8ccc8c8cf8fcffcf6c8cccffcfc8c6c8c6c6c6c6c68c6a6a6a86666a66a86866666666686668a66a6a6a6a686666a666a666a6666a66a66a6a68a686a66a6a66a68c68668686cc8fccc6f8c6cfcffcffcc8c6f6c8cf8cccf6fcfcfcfcfcfcfffcfcf6fcfcffcfcfcfcff6fffcfcfcffcfcff
                                cff6fcffcffcfcfcffffffcffcfcfcfcf6fcfcf6fc8ccfcfcf6f8cfffcf6ccc8c8cffcfcfcf6fccfcfcfcffff8c6c68c6f6c8fcfcff8c8c6f6fcfc6c6c8cfc68c6c8c6c68b6868c89a668686a6a6a6a6a6a6a6a666a68686866a6a6a66a66a6a66a6a6666a6668a66a666a6866a66a6c6a6a6ac68cc6cccc6c8c8cfcfffff6c6c6f8cfcf6f6cf8cfcffcfcf6fcfffcfcfffcfcfffcffffcffcfcfffffcffff6f
                                f7ffffcffcffcffcf6fcfcffcfffcfcfcfcf6fcfcfcf6fcf6fccfcf6f6c8f68c6fcfcf6f8fcfccf8ffffcfcfcc68c8c6c8c8fcfffcfc6c6c8fcffc8c6ccfc68c6c8c6c8c86a6a8c6866a6a668686666668668686a866a6a6a6a666a66a6666666a6666a6a66a666a66a6a66a6a66a68c666a668a6c8ccc6f6c8cccfcfcfcff6c8c8f6c8fccf8cf6ffcffffcfcfcfffcfcfcffcf6ffcfcffcfcffcf6fcfcf6ffc
                                fffcfffcff7ffcffffffffcffcf6ff6ffcfcfcf6f6cfcf8fc8f8cf6fc8f6c8ccfcfcfcfcfcf8f8cfcfcffcfcf8cc6c8c8c8ccfcfcf6f8c8ccfcfcf6c8cf8c6c6c6c6c8ccc6668c86b66668a6a6a6a68a6a6a6a6a66a68686686a6866866a6a6a666a6a666a66a8a6866a66a666a66686a68c8c6c8cc8f6c8c8c6f6fcfffffcc8c6fccfc8f8cf6fc8ffcfcf8f6ffcffcfcfcf6fcfcfcffcffcfcf6ffcfffcfcff
                                cfcfcfffcffcfcfcfcfcfcfcffcfcffcf6fcf6fccf8cf6ccfccf6fc8cc8c8cc8cf8ccf8cf6fccfcffcf6fcfccc68c6c6c6cf8fcf6fc6c6c8f6f6f6c8ccfc686c86c86cfc86a8cf6a66a6a66868686898666866868686a6a6a668a6a6a6a666a66a6666a666a66686a6a6666a6a66a6a66a6cfcc6c8c6c8c8c6f6c8cfcfcfffcc6f68f6fccf6fc8fcfcffcfcfcfffcff6fcfcffcfcff6ff6ffcfcfcffcfcfffcf
                                fffffcfffcfcffcfffffffffcffcfcfcfcf6fccf8cfccfcc6f8cfc8f8c8cc6fcc6fcccfccfccf6fcfcfcfcf8fcf68c868c8cfcf6f6c8c8c6c8cfcc8cf8c8c6c8c8c6ccf8666cc866a68666a6a6a6a686a6a6a6a6a6a686868a666a66866a6a66a66a6a6a6a68a6a66a66a6a666a66a68b66ffcc86c8fccc6f6c8c6fcfffcfff6f6cf8c8f6fc8f6cfcfcffcfcfcfcffcfffcfcfcfcfcfcffcfcffcfcfcffcfcfc
                                fcfcffcfffcfcffcfcf7fcfcfcffcf6fcfcfcf6cfccf8ccfccfcfcfc8c68c8c8fc8f8c8f8cf8fcfcffcfcfc6cf8c68c8c8cf6fccc8c8c8c8cc8cf8cfcf6c8c8c8c8c8fcc8c8fc8c868a68a6868686a6a686868688686a6a6a68a668a6a66a6666a66a68686a6868a66a6866a666a686a68acffc8c8c6c8f6c8c6c8cf6fcffcfcc8c8fccfc8fcf8c8fffcfcfcfcffcfffcfcfcf6fcfcffcfcfcf6fcfcfcffffff
                                ffcffffcfcfffcffffffffcffcf6ffcf6ccc8cf8cc6cf6f6f8fcf8c8c6c8c6ccffc6fcc6fccfcffcfcff8f8f8fc8c686c8cfcccf8fcf8fc68ccfcf6fc8c686cc8c6cffc68cfc8c868c886868a6a868686a8a6a86a8a688686868a66a68a686a6a6a686a6a868a6c68a68a6a68a686a68c668fcfc6ccf6c6c8c8c8cf6fcffcfffc8fc8f8cfcf8cf8fccfcffcfcf6ffcfcfff6fcffcfcf6fcf6fcffcffcfcfcfcf
                                cffcfcffffcfffcfcfcfcffcffcfcfccfcf6fc6f6fc8cfc8fcffcfc6c8c68c8fcfc8c8fccf8ffcfcfcfcfccccff68c8c8cf6f8c8fcc6c6fc8f6c8fc8f68c6cff68cfffc8cfcf868ccfc68a868686a88a8686886c868c6c8c8a6868a68686a6868686a86868c68c86a686686a66a6a8c8c68cffffc8c8cf8c8cc8c6cfcfcffffcfc8cf6f8f8cf8cf6ffcfcfcfcfcfcfffcfcffcfcfcfcffcffcfcfcfcfffcffff
                                fcffffcfcffcfffffffcffcfcffcf6f6f6cf6fccc8fcc8fcfccf6f68c88c8cfff8c8f6c8fcfccf8ffcfcf68ffcf6c86c8ccf8ccfcf8c8c8cccf8fccf6c86cf8c8cffcf8cf8ccf8ccf868c8c8c8a86c86c8c8cc8c6c8c8c6c6c8cc868c8a868a6a86a68cc8c6c86c8c8c8a686a868c6cc8c68fffffccc8ccccc6f6f8cfcffcfffcfccfcfccf8cf8cfcfcfcffcfcfcffcfffcfcfcf6fcfcfcfcfcfcffcfcffcfcf
                                cfcfcffffcffcf7fcfcfcfffcf6fcf6ccf6cc8cfcccf6fccfcfcf6ccfcc8c8cfcc8cc8fc8fcfcfcfcf8fcfc8fcf88c8c8c8ccc8ffc8cfc8f6f6ccf8fcf6c8fc8c8fcfcf8fcf8c8cfcc8c88c8c88c8c8c8c8c8c8c8c8c8c88c8c8ccc8cc6cc8c8c8c8c8c8c8c8cc8c6c6c8cc86c8c8cf8c86cfeffcf6fcccccf6c8cf6cfcffcfffcf6f8cf8cfccfc8f8fffcfcf8fcfcffcffcf6fcfcfcf6fcfcfcfcffcfcfffff
                                fffffcf7ffcffffffffffcfcfcfc6fcf6c8fcf6cf8ccf6cf6fcc8c8fcff6cfffc8ccfc8fcfcf8fcfcfc8c8fcfcfc68c8c8c88cfccc686cc8fcf8fcfcc8c8fc8ccfcfcfcfcf6f8cfff8cfcf8f8cf8f8f8f8cf6f8cf8cf6fc8fc8cc8fc8cf8cf8ccc8cf6c8cc8c8c8c8c8c8c6c8cc8c8cfcc88ffcffcf6f8f6f6f8f8c8fcfcfffcffcf8cf8fccf8fcfcfcfcfcfcfcfffcff6ffcfcfcfcfcfcfcf6ffcfcfff6fcf7
                                fcf7fffffcfcfcfcfcfcff6fcf6fcc8cf8cc8cf8cf6f6cccf6f6fccffc8c8fcf6cc8cccccf8fc8fcf8fc8cf8fcf8c868c68c6cfcf8c8c8fc6c8cc8ffcfcfcf86f8fcfcfcf6f8cfcfccc8f8f8f8f8cf8fcf8f8cf8cf8cf8fcf8ffcf8fcfcf8cfcfcfccfcf8fccccc8fc8cf8cc8c8cfcccf66cfcffff8c8ccf8c8ccf6c8f6fcfffcfccf8cccf8cf6f8fcfcfcfcfcfccffcffcfcfcf8f6fcfcf6ffcfcffcfcffcff
                                ffcffcfcffffcffffcff6ffcfcfcf6fcccf8f6ccc6f6fc8cc8cc6cfcfcccfcfcf8fccccccfc8cc8fcc8cf6fcf8f68c8c88c8c8fc86c8cc8cfcf8fcf6fc8cfcc8cfcf8ffcc8cf8cffcf8fcfcfcfcf8fcf8fcfcfcf8fcfcf8fcfcf8fcfcf8fcfcf8fcf8f8fccf6f8fc8fcccf8fcfcf6fcf6f68fffffcfcfc8ccfcf8c8ccfcffcfffffcfcf8f6f8cfcccf8ffcfcfcfcfcfcfcf6fcfcfcfcf6fcfcfcfcf6fcfcffcf
                                cffcffffcfcffcf7ff6fcfcc6f6fccccf6cccf8f6fcc8fcccc8ccf8fc86fcff8cc6f8c8f8cfc8cc8f8f6cffcffcc8c868686cfcfc8c8c8cc8ccc8cfcfcfcf6fcfc8cfcf8cfcfcf8c8ccf8f8f8f6fcfcfcff8fcfcffcfcfcfcf8fcfcf8fcfcfcfcf8fcfccf6fccf6fccf8f6fcf8fcf8fcfc8ccfcffffccfcc8c8c8ccf6fcfcfcffcffcc8cf8cf8cf8fcfcfcfcfcfcffcfcfcfcf6f6f6fcfccf8cfcfcfffcfcffc
                                fcffcfcffcfcffcfcffcfcffcfccf8f6cf8f6cccc8cffc6f6cc6fcffcfcffccffc8ccc8ccfc8c8f6c8fcfcffcf8c868a68a8cfcf86cfccf6f8f6fc8fcf8f6fc8cfcfcfcc6fcfcfcf6f8c8ccffcc8f8fcfcfcfcffcf8ff8ff8fcfcf8fcfcf8f6fcfcfcfcfcfcf8fcfcfcfcfcfcfc8fccf8f68fffeffffccf8ffcfc68cf6fcfffcfffcfffccfcfcfcf6fcfcfcfffcfcfcffcffcfcfcfccc8f8cfcfcffcfcffcfcf
                                ffcffcfcfffcf6fcfcfcfc6f6fcf6ccf8cccf8f6f6fcfc8c8c8cffcfcffcfffcfcc8f8c8ffc86c8cfcf8cfcf8ff88c86a88cf8f8c8cf8c8ccc8cc8ccc8ccf8cf6f6fcf6f8cfcfcc8c8fcfcffcfc8fcf8f8fcfcf8fcf6fccfcfcf8fcfcf8fcfcf8fcfcf6f8f8fcfcf8fcfcf8fcfcfcfcfcfc6cfffffcffcfcccf6f6cfccffcfcffcfffcf8f8f6f8fcfcf8fcfcfcffcff6ffcfcffcfcfcfccfcf6fcf6fcfcffcfc
                                fcfcffffcfcfffcfcf6fcfcfcfcfcfc8cf6f6c6c8cffc8c6f6cfcfcfcfcfcfcff8cc8c8cfcf688c88cfcff8fcfc686a8868cfcc88c8f68c8ccccccc6fc6c8cfcfcf8f6cccfcfcffcfcf6f8fcfcffcf8fcfcf8fcf8f8fcf8fcf8fcfcf8fcfcfcffcfcfcfcfcfcf8fcfcfcfcfcfcfcff8fcf8cfcffeffffccff8fc8cccfcfcfffcfffcffcfcfcfcfcf8fcfcf6fcffcf6ffcfcffcfcf8f8f6f6fcfcfcfcfcfcffcf
                                ffffcfcffcfccfcfcfcfcf6fcfcfccfcccc8cfc8fcffcf6c8ccfcffcffcfcfffcc8cc8ccfc8c8c8cf8fcfcfcff8c8a686a8cf8c8c6cfc86c868cc6fc8f6ccc8c8cfccf8f8fcfcfcf6fcfcfffcffcfcfcf8fcf6f8ccfccfcf8fcffcfcffcfcfcfcffcfcf8f8cfccf6fcfcffcffc8fcfcfcf868fcffffcff8cfccfcf8fccf6fcfffcffcffcfcfcfccfccfcfcfcffcffcfcffcf6fcfcfcfccfccccf6fcfcfcf6ff6
                                fcfcffcfcfcff6fcfcf6fcfcfff6f6cf6f6fcf6ccffcc8cccfcffcfffcfcfcffccc6c8cfcf6868c8cfcf8ffcffc8686a868fc8f868f8c686c8c8c86cfc88ccf6fc8f6fccfcfcfcfcfcfcfcfcfcfff8f8fcf6fccfcf6f8fcfcffcfcffcffcff8ffcf8ffcfcfcf8fcfcfcfcffcfcfcffcf8fcc8fffcfffccfcf8f6f8ccf6fcfffcfffffcffcf8fcf8fcf8fcfcfcfffcfcfcfcffcfcf6f6f6ccf8fcfcfcfcfcfcff
                                cfcfcffcffcfcfcfcf6fcfcffcfc8f6cccfcfcfcffcffcfccffcffcffffcffcff68f6c6ffcc6c8cfff8ffcf8fc8c868688cf8c8fcccf8a8c8c8c6c8fc8cc86c8ccf6fc8f6fcfcf6fcfcffcffffcffcfcfcfcff8f8fcfcf8fcfcfcfccf6fcfcfc8fcfcffcffcffcfffcfffcffcf6fffcfcf8c6cffffeffcf6fcfc8fcfcf6fcffffcfcffcfcfcf6fccfcfcf6fcffcffcfcfcfcfcf6fc8ccf8f6cf6fcfcfcffcfcf
                                ffcff7ffcf6fcfcf6fcfcffcffccfcfcccfffcfcffcf6f6fccffcffcfcfcfcfcc8cc88cfcf688c8c8fccfcfcffc88a8a8cfcf8ccf8fc88c8c8c8c8cfcf68c8c8f6c8c8fcfcffcfcfccfcfcfcfcffcfcfcfcf8cfcc8c8c8ccc6f8f8ffcff8fcffcffcfcfcfcfcfcf6fcfc8fcfccfcfffcfcf68cfcfffcffffcf6fccc6fccffcfcffffcfffcf6fc8f6f6f6fcf8fcffcfcfcfcf6fcf8fcf8ccfcfcfcf6fcfcfcffc
                                fcf7ffcfcffcfcfcfcfffcfffcf6f6ccfcfffcfcffcfcfc8ffcffcffffcfcfffcccc86fcf8c8c8cfcfffcffffc8c868cffcf868fccfc8c8fc86c8fc8fcf6c8c8c8fcfc6c8fccfcf6fccccfcfcfcfffc8fcfcffcffcfffffcfc6ccccfcfcfcfcffcffffff8f8f8fcfcfcfcfffccfffcffcfc668ffcffcfcffcfc8cf8f6fcfcffffcfffcfcfcfcfcfc8fcf8ccfcfcfffcfcfcfc8f6cc8cf6f6f6fccfcfcf6fcfcf
                                cfcfcfcfcfcfcf6fffcfcffcffcfcfccffcfcfffcfcfc6ccfffcffcfcf6ffcfcf6f86cffcc68c8cfcfcf8fccffc8cc8fcfc8c8cff8cf8c8f8c8c8cfcf8c88c8c8c8c8cf8fc8f6fcfcf8f6fcfcfcfcffcffcfcfccf6fccfcfcf8f6f8fcfcf8f8f8f8c8ccfcfcfcfff8ffcfcffccfcffcfccf86ccffcf6fffff6fcf8ccfccffcfcfffcffff6fcf8f6fcf8cfcccfcffcff6fcf8fccf8fc6fccfcfcf8fcfcfcffcff
                                cfcfcfcfcfcffcffcfffffffcfcf6ff6fcfffcffcffcfcfcfcffcfffffccfffcfc8cc8fcf8c8ccfcfcfcfcfffcfc8cfcfffc8cfcff8fc8cfc888c8cfcf8c8c8c8fccf8cc8cf6f68c8cccf6ccccc6f6ffccfcf8fcffcfcfcf8fcfcfccf8fcc8c8c8c8f8f8f6f6fc8ffcff6fff6fcffffcfcf68c8fcffccfcfcfcf8cf8cfcfcfffcfcfcfcffcfccfcf8cfccfcf6ffffcffcfcfcf6cf6fc8f8fc8fcfcf6fcfcffcf
                                cfcffcffcff6ffcffcfcfcfcf6fcfcfcfffcffcffcfcf6ffffcffcfcfcfcfcff8c86cfffcc68c8fcf8fcfcfcf8c8fc8fcf8fc8cfcfcf8c8c86c8cf8cc8f6c8cc8c88c8f6f6c8cfc8f6f6c8f8f6f8c8c88c8c8f8c88888686c688c8f8cccf8f6c888686c8c8c88cfcfcfcfcffccfcfcffcf8c6ccffcf6fffffcfcc8ccccfcfcfcfffffffcfcf8fcfcfcfcf6fcfcfcffcfcfccccf8cccfcfcfcfcf6fcfcfcfcfff
                                6ff6ffcffcffcffcfffffffcfcfcffcffcffcffcffcfcfcfcffcfffffcfcffcfcc6cfcfcf8ccfcffcfcfcfcfcfcc8fcfcffcfcfcf8fc8ccfc88c8cf8fccf8f8f6f6ccc8c8f8f8c8cc8c8fc8c8c8cc8fc8f8cc8c8c8c8c88888688c68f88c8c88c8c86866868c888f8fcfcffcfcffffcfccf88c8fcfc8cffeffcfc8f8cf6fffcfcfcfcfcfcfcf6f8fcf8fcf8fcfffffffcfcff8cfcf8f6fccfccfcfcfcffcfcfc
                                fcffcffcffcffcfffcfcfcfcf6ffcfcfcfcffcffcffcfcfffcffcfcfcf6fcffcc8c8fcffcf8c8fcfcf8ffcfff8ccccffcfcf8c8ffcffcf8f8c8c8ccf6f8ccf6cf8ccccfc8ccc8c8c8cc8c8fcf8fcfcfcfcffcf8c8c888c86888888c88cf8c8c8c868a6666a66666c6c8ffcffcfcfcffff6f6c8fcfcf6fffffcff8c8cccfcfcfffcfffffcfcfcfcfcfcf6fcfcfcfefcffcf6f6fccfcfcfcfcf6fcfcfcfcfcffcf
                                ffcffcffcffcfffcfffffcf6fcfffcffcfcfcfcffcffcfcfcfcffcfffcfcfcff6cfcfcfcfcfcfcffcffcffcfcccf6fcffcfcfcfcffcfcfcfcf8cf8c8c8c8c8c8ccf8f8cfcf8fccf6f8c8c6c68c688688c8c8f6fcf8cc86c8c8cc8c8c8c8ccf8f8c8c888a6868a8c88c8cffcfcf8ffcfcfcf8ccc6f6fcffefffcffcfcf6fcffcfcfcf7fffcf6f8f8f8fcfcfcfcffffffffcfcfcf8fcfcfcf6ffcfcfcfcfcfcffc
                                fcfcffcffcffcfffcfcfcfcfffcfcfcfcfcfcffcffcfffffcffcffcffcccffcfcfcfcfcfcf6fcfcffcfcfcfcf8c8fcfcffcfcfcfcffcfcffc8c8cf6f8cf6f8cf68c8ccc8c8c8c8c8c8cc8c8c8c8c68c68c6c8c88c8c8c88c8688c88c8f8c8c6c8fc8cc88c8c8f8c8cfcfcfffccfcfffffcf88cf8cf6cfffffffcf6f8cfcffcfffcfffcfcfcfcfcfcfcf8fcf6fcfcffeffcf6f8fcfcfcf6ffcfcfcfcffcfffcff
                                cfffcffcffcffcfffffcf6fcfcfffffcf6fcfcffcff6fcfcfcffcffcff6fcffccfcfcfcfcfcfcffcfcffcfffc8fcfcffcfcfcfcffcfcffcffcffc8c8c8c8c868c8c8c8cc6f6cccccccccc8c8c888c88c888c8686868c8c868a868c8c8c8f8c8c8c8f8fc8c8fc8cfcf8cfcfcfcf6ffcfcffcc86cfcf8cffcfeffcffc8c8cfcfcfcfcfcfffcfcf8cf8cfcfccfcffcffffcffcfcfcfcfcfcfcfcfcfcffcfcfcffcf
                                fcfcfcffcffcffcf7ffcfcfcffcfccf6fcffcfcff6ffcfffffcffcffcfcffcff8fcfcffcf8cffcffcffcffcfccccfcfcffcfcfcfcf8fcffcf8ccfcf8c8c86c8c8c8cc6c8c8c868868c868c6868c686c86c6868c86a68668a668a6868c8c6f8fc8c8c8c8c8f8cf8c8cf6cfcfcf6fcffcfcfcfc8ccfc8fffffffffcf8cf6fcfffcffcffcfffcfcfc8fcf8cf8fc8ffcfcffcffcfcfcfcfcfcfcfcfcfcfcffcfcffc
                                ffffffcffcffcfffffcf6fcfcffcffcfcfcfcff6ffcffcfcfcfcffcffccfcfcfcfcffcffcfcfcfcffcffcffcf8fccfcfcffcfcfcfcfffcffcfcf8f6fcfc8f8c8c8c6f88c8c68c8c8c6c8c686866a68a686a68a6a8688a8668a686a86868c8c8cf6f6c8c8cc8c8c8f6c8fcfcfccfcfcfcff6f8c8f6fccfcfeffeffcf8c8cfcfcfcff6ffcfcfcfcfcf8fcfcfcfcfcffffffcfcfcfcfcffcfcfcfcfcfcfcfcffcff
                                6fccfcffffcffcfcfcfcfcffcfcf6fcfcfcffcfcfcfcffcfcfffcffcff6ffffcfcfcfcfcfcfcffcfcfcffcfccfcfcffcfcfcfcffcfccffcfccfcfccf8cfcccfcf6f8c6c86c8c8c686886866a6a68a668a68686686a666a6a668a688c8c8868c8c8c8c88c88c88c8c8fc8fcf6f8cfcfcfcfcfc86cf68ffcfffffcfcfcfc8ffcffcfcfcffffcfcf8fcfcf6f6fcfcffcfcfffffcfcfcfcfcffcfcfcfffcfcfcff6f
                                feffffcfcffcffffffcfcfcfcf6ffcf6f6fcfcffcfcfcfcffcfcfcffcffcfcfcfcfcffcfcfcfcffcffcfcfffcfcfcfcfcfcfffcfcfffcffff8cfcf8cc86f88c8c8c8c8c8c8c8c8c86a686a68668668a6686a688686a868688a6886a6868c8c8c8c8fc8c8c686868cfc8c8fcfc8ccfcfcfffccfc8f68cffffeffcfcf8c8ccff6fcfffcfcfcffcfcc8f6fcfc8f8fcffffeffcffcfcfcfcfcfcfcffccfcffcfcffc
                                ffcfcffffcffcfcf7fcf6fcfcfcfcfcfcfcfcfcfcffcfffcffffffcffcffffcfcfcfcfcfcfcffcfcfcffcfcfcfcfcfcffcfcfcfcfcfcfcfcfcff8fc8fc8cc8c68c8c8c8c8c8c868c886a686a6a6a66666a688a6a6a66a6a8686a6888a888c8cc86cfcf6c88c8c88cffc8fcf6fccccfcfcfcf8c8cc86cfccfffffcfcf8fcf6fcf6fcffcffcfcfcfcfcf8c8fcfcfcffefffffcffcfcfcfcfcfcfcffcfcfcffcfcf
                                cffffcfcfffffffcfcfcffcf6fcffcfcfcfcfcfcfcfcf6ffcfcfcffcfcfcfcfcfcffcfcfcfcfcfcfcfcffcfcfcfcfcfcffcfcfcfcfcfffcffcfcfcfccfc8cc8c8c868c8868686c88cc888a8686866a6a688a688686668686a6868a6868c68c8c8c8ffc88c86888c8fcfcccfc8f868cfcfcfcfcc8c88ffcffcfeffcfcc8ccffcfcfcfcfcffcffcf6f8cfcfcf6fcfcffffcfeffcfcfcfcfcfcfcfcfcfcfcfcffcf
                                fcfcffffcfcfcf7fffcfcf6fccfcfcf6fcfcfcffcfcfcffcfffcfcffff6ffffcffcfcfcfcfcfcfcffcfcfffcfcfcfffcfcffcfcffcfcfcfcffcfffcfc8fcf8f6c868c868c68c886a686c8c88c8a8a686866669a66a8a68a8686a868a868a8688c8cfff68686a6868cfcf8f8fcc8fcfcfcfcffcf6c86cfc6fffffcfcffcf8cfcfcffcfffcffcffcfcfc8fc8fccfcfffcffffcfffcffcfcffcffcfcfcfcffcfcfc
                                ffffcf7fffffcffcfcffcfccfcffcfcfcfcfcfcfcff6fcffcfcfffcfcffcfcffcfcfcfcfcfcfcffcfcffcfcfcfcfcfcfcfcfcfcfcfffcffcfcfcfcfcfcf6fcc8c8c868a68a86a8688a88c8c8c8c8f8886a6a686a88888868a88688686a86886868ccffc886a68a868cffccfc8f6cf8fcfcfcf6f8c8cfffcffcfcfcfccccfcfccf6ffcfcfcff6ffcc8fccfcf8f8cfcfffefffcfcfcfcffcfcfcfcfcfcfcffcffc
                                fcfcffffcfcffcffcfcfcfcf6fcffcf6fcfcfcffcfcfffcffcfcfcfffcffcfcfcff6fcf6ffcfcf6ffcfcfcffcfcfcfcffcf6fcfcfccfcf6f8fcfcfcfcfcfc8fcfc8cc8c8c8c888a868868688c8fcfcc8c8868a868c6cc8a686a86a8a8686a68a868fffc8a868888a68fcfc8fccf8cfcfcfcfcfcfc8cfcffcffffffcffcf6cff8fcfcffffcfcfcffcf6f8fccfcfcfffefffcffffcfcfcfcfcfcffcfcffcf6fcff
                                cfffcfcffffcffcfffcfcf6cfffcfcffcfcfcfcff6fcfcffcfcfffcfcfcffcfff6ffcfcfcfcffcfcfcfcffcfcfcfcfcf6fcfcf6fcfcfcfcfccfcfcfcfcf6fcc8c8f8c8c8fc8cfcfcccc8a8a86c886868868a866a66868688a868a86888a8886888ccfffc8888c8686a8fcfc8c8cfcfcffcfcf6f6f6fcfcffcfefcffcf8cf8cfcfcffcf6fffcffcfcfcfcfcfcf6fcffffcffcfcffcffcfcffcfcfcffcfcfffcfc
                                fcfffffcfcffcffcfcfcf6fcfcfffcfcfcfcffcfcfcfffcff6ffcffffcfcffcfcfcfcfcfcff6ffcfcfcfcfcffcffcffcffcfcfcf8cf6f6f6f8cfcffcf8fcf8fcfccc8c8c8fffcffff8c888688866a68a6a6888888a6a6a66888868a868868a8a688cfcfc8cc8c8c8a68ffcfcfcfccfccfcfcfc8fc8cfcffcfffffcfcffccfcfcffcffcfcfcfcfcffcfcf6fcfcfcffcffffffff7ffcfcff6ffcfcfcfcffcfcffc
                                ffcfcfffffcffcffcfcfcfcfffcfcf6fcfcfcff6fcfcfcffcfcffcfcfcff7ffcfcfcfcffcfcfcffcffcffcfcffcfcfcfcfcfcfccf6fccfc8cf6fccf8fcfcfcf8cc8f6cfc8c868c8c8c8c86ca68a686a6886ac8c86888688a66a68868a8c8886888ccffffc8fcfc8c86ccffcc8f6f8ffcfcfccfc8fcfcfcffcffeffff6fcf8fcfcf6fcfffffcfffcfcf8fcfcf8fcfffcfcfefcfffcfffcffcffcffcffcfcffcff
                                6ffffcfcfcfcffcffcfcfcfcfcfffcfcffcff6ffcfcfffcfcffcffffcf7ffcffffcfffcffcfcfcffcffcffcfcfcffcfcfcfcfcf6fccf8c8fc8c8f8cf6f8c8f6fcf6cf8c8c6cc8c86c868c686866a868cc8c88c68cc8c88688a68a6a8868c8c8c8c8fcffffcc8fcff8a8fcffcfc8fcfcfcf6fc8cfc8fcffcffcfffcfcfcfcfcfcfcfcffcfcffcf6fcfcfcfcfcfcfcfffffffffcfffcfcfcffcffcffcffcfcff7f
                                fcfcffffcfffcffcff6fcfcfffcfcfcfcfcfcfcfcffcfffcfcfffcfcfffcffcf7ffcfcfcffffcfcfcfcfcffcfffcfcffcfcfcfcfcf8cf8cfcfcfcf6cfccfccf8c8c8cccf6f8c86c88c86a88a6a668ccf8c8c88c88c8cccc8c8868868cc8c8c8c8c8fcfcffffcf8fc868cfcfc8fccfcfcfcfcfc8cfccfcffcfffcffffffcfccf8fcffcfffcfcfcfffcfcfcfcfcfffcfcfeffcffcfcffcffcfcfcfcfcf6fff7ffc
                                ffffcf7ffcfffcffcffcfcffcffcfcfcfcfcfcfcfcffcf6fcfcfffffcfcfcffffcffcffcf7fcffcffcfcfcff6fcfcfcfcfcf6f6f8cf6cfccf8c8c8f8c8cf8f6cccfccf8cfc8cc8c686a868c6868fcffc8c88cc8c68c888c8c8c8c8cc8c8c8cc8c8cfcffffcf8fcfcf86ccfffcfcfcfcfcfcf8cc6f6fcfcffccffcfcfcfcf8fcfcfcfcfcffffcfcfcfcfcfcfcfccfcffcffefcffcffcfcffcfffcfffcfcfcffcf
                                fcffffffcfcfffcffcfcffcffcfcfcf6fcfcffcffcfffcfcfffcfcfcfcfffcfcffcffcffffcfcffcffffcf6fcfcfcf6fcf6fc8fccfcf8fcfcffffccfcf8fccf8f86c8cfccffffc8cc8c8c68c8cfffcfc8c8cf6c8cc8cc8c8c8cc8cf8c8cfc8fccfccfcfcffcfcfcfc6c8fcffcf6fcffcfccfcf8fcccf6fcfffcfffffffcfcfcffcfcfffcf6ffcfcfcffcffcfcffcfcffcffffcffcfffcfcfcfcfcf7fffcfcffc
                                ffcfcfcffffcfcfcffcfcff7ffcfcfcfcf6fcfcfcff7ffcfcfffffefffcfcfcfcffcff7fcffffcffcf7ffffeffcfcfcf6fc8fccf8cfcccfcfcc8cfccfcfffcfc8cf8fccf8fc8cffcfcfc8cc8ffcfc868c8c6c8c8c8c8c8c8cc8cfc8fcfc8fc8f68f8ffcffffcfcfc8c8ffffcfcfcfcffcf8fcfccf8fcffcf7ffcf7ffeffcf6fcfcfcfcffcfcffffcfcffcfcffcfcffcfffcfffcffcfcffcffcffcffcfcfffcff
                                cffffffcfcffffff7ffcfcffcffcfcfcfcffcff6fffffcfcfcf7fffcfcffcffcfcff7fffcfcfcfcffcffccffcffcfcfcfcfccf8fcf8fcf8ccf8fccfcfcfcfc8cc8cc6f8cc8cf8c8f8c8fcfffcfc8c8cc8ccc8fcf8c8cf6fc8cf8cfccf8fccfccfccfcffcffffcfcfc8ccfcfffcfcfcfcfcfccfcfcccfcffffcffffffffcfcffcfcffcfcffffcf6ffcfcfcfcfcfcfcfcfcffcfcfcffffcff7ffcffcffcfcfcfcf
                                fcfcfcffffcfcf7ffcffffcffcf6fcf7ffcfcfcffcfcffcfffffcfffffcffcffcfcffcfcffcffcfcffcfffcffcfcfcfcfcffcfcfcfcf8cfcf6fcfcfcfcfcfcf8f68c8c88cc8ccc8cfcccf6cfcc8c8c8c8ccc8c8c6cf6cf8cf6cf6cf8cfcf6f8fccf6ffcfffcfcfcffccfcffcffcfcfcfcfcfcfcf6f6fcfcfcffcffcfcfffcfcfcfcfcffcfcffffcffcfcfcfcfcfcfcfffcffffffcfcff7ffcffcffcffcfcffcf
                                cfffffcfcffcfffcffcfcfcfcfcfcfcfcfcff7ffffffcffcf7fffcfcfcfcffcffcfcffffcffcfffcfcfcfcfcfcffcfcfcfccfcfcfcfcfccc8fccfcf6f8f6f6f6c8c8c8c68cc68fc8ccf8cfc8f6fcf6cccc8cf6c8f8cf8ccf6f8cf8cfcf6fcfcf8fcfcffcfffffcf6fc8cfcffcffcfcfcfcfcf6fcfcfcfcfffcfffcfffcfcfcfcffcffcfffcfcfcfcfcfcfcfcfcffcfcfcffcfcfffffcfffcfcffcfcfcffcfcff
                                fcfcfcffcfcfcfcfcffcfcfcfcfcfcfcfcfcfffcfcfcfcffffcfcffcffcfcff7ffcfcfcffcffcfcfffffcfffcfcffcffcffcfcfcfccf6f8fc6f8ccfcfccc8fc8c88c8fcfcf8cc8cf6f6fcfccfc8fcf8c8cf6c8fcc8ccf8fcfcfc8fccfcfcfcfcfcfcfcfffcfffcfcfcf6ffcfffcffcfcfcfcfcffcf6cffcffffcffcffffffcfcfcfcffcfcfffcffcfcffcfcfcfcfcffcfcffffefcfffcfffcfcffcfcfcffcfcc
                                ffcfffcffcfcfcffcfcffcffcfcfcfcfffcfcffffffcff7fcffffcffcffcfcffcfffcffcffcffcfcf7fcfcfcffcf6fcff6fcfcfcf8fcfcc8c8ccf8cf6c8fc6c88c6ccf6f8c6cfcfc8ccf8cf8cfc8ccf6f6c8fcc8fcf8cf6f8ccfccf8cccf8fcfcfcfcffcfffeff6fcf6fcfffefffcfcffcfcffcfcf6f6ffcfcfffeffcf7fcfcfcffcfcfffcfcfcfcff6fcffcfcfcfcffffcfeffffefcfcfcfffcffcfcf7ffcff
                                cffcfcfcffcfffcfcffcfcf7fcf6fcfccfcfffcfefcf7ffffcfcffcffcffcfcffcfcfcffcffcffcfffffcffcfcffffcfcffcfcfcfcfc8fcfcfcfcfcfcfcc8f8cc8fffcfcfcff8ccfcf8cfccfc8fcf8cfc8cc8cfcf6fcccfccf8fcfcfcf8fcf6fcf6fcfcffcfffffcfcfcfcffffcffcfcfcfcfcfcfc8cfcffffeffffffffffffcfcffcfcfffcffcff6ffcfcfcfcffcfcf7ffffcfcffffffffcfcf7ffcfffcfcf7
                                fcffffcfcff7fcfcfcf6f6ffcfcfcfcff6ffcfffcffcffcfcfffcffcff7ffcfcffcfffcffcff7ffcfcfcfcfffcfcfcffcfcfcfcfcf6fcf6fcf8cf6f8fcfcfccfcfcffffcffcfcf68ccfcf8f6fccccfc8fcf8f6f6fc88c88cccf6f6fcfcfcfcffcffcfcffcffffcfcfccccfcfcffcffcfcfcfcfcfcfcfcfcfcfffcfcfefcfcfcfffcffffcfff7ffcffcfcfcfcfcfcfcffffcffffffcfcfcfcfcfffcff6fcfcfcf
                                ffcf7ffffcffcfcfcffcfccfcfcffcf6ffcffefffcffcfcffcfcfcffcffcffcfcffcfcfcffcfffcffcffffcf7ffcffcffcffcfcfcfcfcfcf8cfcfcfccf8fcf8fcfffcfffcfcf6fcf8f6fcfcfcfcf6fcfccfccfc8c8c86c8ff8cfcfcfcfcfcfcffcfcffcffcfcfffcf6ff6ffffcfffcffcffcffcffccfcf6ffcfffffffffffffcfcfcf7ffcfcffcfcfcffcfcfcfcfcfcfcffcfefcffffffeffcfcfcfcfcfcfcfc
                                fcfffcfcffcfcffcfcfccfcfcff6fcffcffffffeffcffcfcffcffcfcfcffcffcfcffcfffcffcfcfcffcfcffffcffcff7ffcfcfcf6fcf8cfcfcfcfcfcfccf6cfcfcfcfcfcfcfcfcfcfcc8fcfcf8cfc8f6f8fcf6fcfc8c88fccfcfccfcfcfcfffcfcfcfcfffffffffcffccfcfcffcfffcffcffcffcffcffcfcffcf7fcfcffcfcffffcfffcffffcffcffcfcfcfcffcffcfffcffffffcfcfeffcff7fcfcfcffcffcf
                                ffcfcffcfcfffcffffcf6ffcfcfcfcfcfcfefeff6ff7ffffcffcffcfcfcfcfcffcfcfcf7fcffffffcfffcfcfcfcffcffcfcfcfcfcfcfcfcfcfcfcf6fcfcfcfcffcffcfcf6f6f8fcccfcf6f6ccfc8fccfccf6fcf8cf8cfccfcfcfcfcfcfcfcfcfcfcfcfcffcfcfeffcfcfcfcfcffcfefcfcfcfcfcfcfcfff6cfffffffffffcffcfcfcfcf6cf6fcff6ffcfcfcfcfcfcfcfcfcfefcffffffcffcffcffcffcfcf7fc
                                fcfffcfffcfcfcf7ffcffcffcfcfcfffffffffcfcfffcfcffcfcf7fffcfffcf6ffcfcfffffcfccfcfcfcffcffffcffcfffcfcfcfcf8fcf8cfcf6fcfcf8f8fffcf6fcf6fcfcccc8fcf8fcfcf8f6fc6f8c8c8c8c8fc8f8cf8fcfcfcfcfcffcfcfcffcfcffcfffffffffcf6fcfffcffffffcfcfcfcffcfcfcffcfcffcfefefffcffffcfc6cffcfcf6ffcfcffcfcfcfcfffcfffffffcfefcffcffcfcfcfcfcfcffcf
                                cfcfcfcfffcfcffffcf7fcfcfcfcfcfcfcfefffcfcfcffcfcfffffcfcfcf7fffcfcff6fccffcffffcfcfcf6fccfcf6fcfcfcf6fcfcfcfcffccfcf8fccfcfccfccfccfcfcf8ffcf6fcccc8fcfccfcf6fcfcfcfcf6cfccccccccf6fcf6fcfcfcffcfcffcfffcfcfcffcfcfcfcfcfcfcf7fffcfcff7ffcfffcffcffffffffcfffcf7fff6fcfcfcfcfcffcfcfcffcfffcf7ffcf7fcffffffeffcffcfcfcfcfcfcfcf
                                ffcffffcf7fffcfcfcfcffcfcfcffcfffffffcff6fcfcffcfcf7fcffcffcfcfcfcfcffcffcffcf7ffffcfffcff6fffcfcfcfcfcfcfcfcfcfcf8fccf8fcfcfcfcfcf8fcfcfcc8fcfccffcfccf8f8ccfc8cccccccfc8f8fcfcf8fcf8fcfcf6fcf6fcfcfcfcfffcffcfffcfcfcffffcffffcffcf6ffcffcfcffcfcfcfcfcffcfcffffcfcccffffcfffcffffcfcffccffffcffffffcfcfeffcffcffcfcfcfcfcfcfc
                                fcfcfcffcfcfffffcf6fcfcffcf7fff7fcfcffcffffcfcffcfffcfcffcffffcfffcfcfcfcfcffcffcfcfcfcfcffcfcffcfcfcfcfcfcfcfccfccfcfcfcfcfcfcfcfcfcfcfcfcfcccf8cf6fcfccfcff8fcff8fcf8fcfcf6f6fcfcfcfcfcfcfcfcfcfcfcfcffcffffffcfcf6ffcf7ffcfcffcffcfcffcfcffcffffffffffcffffcfcffcf6fcfccfcfffcfcffffcfffcfcffcfcfeffffffcffcffcffcfcfcf7ffcfc
                                ffffcfcfcffcfcf7fcffcff6fcfffcffffffcffcfcfffcfcfcfcfffcffcfcffcfcffcffcfff7ffcffcffcffffcffcfcffcffcffcfcfcf6f8cfccfcfcfcf6fcfcfcffcfcfcf6fcf8fcfcfc8fcf6fcccfccfcfcfcfccfcfcfc8fccf6fcf6fcfcfcffcffcfcffcfcfcffffcfcfcffcffffcff7ffcfcffcf7fffcf7fcfefffcfcffffcfffcfcfccffcfffcfcfcffcf6fffcffcfffcfefcffcffcff7ffcfcfcfcfcfc
                                fcfcfcfcfcffffcfcfcfcfcfcfcffffcfefcffcfcfcfcffcffcfcfcfcffcfcffcfcff7ffcfcffcfcffcff7fcffcffcfcff6ffcfcfcfcfcfcfcf8fccfcfcfcfcfcfcfcffcfcfcf6cfccf6fcccfccf8fcf8fcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcff6ffcfcffffcffcffcfcffcffcfcffcffcffcfcffcffcffffffffcfffff7fcffcfcf6fcf6fcfcfffffffcffcfcfcfcffcfcfcfffcffcffcffcff7ffcffcfcf
                                fcffcfcffffcfcf6fcfcfcfcfcffcfffffffcffcffcff7ffcffcffcff7ffcfcffcf7ffcffcffcfffcff7fffcfcfcffcfcffcfcffcf6fcf8fccfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcf6fccf8fcf8fcfcfcfcfcf6fcfcfccfcfcf6fcfccfcfcfcff6ffcffcf6f7ffcfffcfcf6ffcffffcfffffcffcfcffcfffeffcfcffcf7fffffcffcfcffcffcfffcfcfcfffcffcfcffcfcfcfff7fcffffcffcffcffcffcfcff7
                                ffcf7ffcf7ffff6cffcfcfcfcffcffefcfcffcfcfcfcffcff7ffcffcffcffcfcffffcffcffcffcfffcfffcffcffcfcffcfcfffcfcffcfcfcfcfcfcffcfcfffcfcfcffcff6fcfcfccfcfcfcf6fcccf6f6f6f6fcfccf6fcfcfcfcfcfcffcfcfcfcffcffcffcfcffffcfffffcfcffcf7ffcfcfcfcffffcfcfcfffffffffffffcfcffcfff6fcfcf6fcffffff7fffcffcfcff7fffcfcfffcfcffcfffffcffcfcfcfcf
                                cffcfcfffffcfcfcfcfcfcfcfcfffcfffff7ffcfcfcfcffcffcffcffcffcffcf7fcffcffcffcffcfcfcfcfcffcffcfcffcfcf7ffcfcfcfcfcfcfcfcfcffccfcfcfcf6f6fffcfcfcfcfcfccfc8fcfccfcfcfcf6f86cfcfcf6fcfcfcfcfcfcffcfcffcfcfcfcfcfcffeffcffcfcffcffffffcffcfcfcfcf6fcffefefcfcfcffcffcfcfcfcfffcfcffcf7ffffcffcfcfcfcffcfcffcfcfffcffcfcfcfcfcfcfcfcf
                                fcffffcffcfffccfcfcfcfcffffcfffcfcffffcffcfcfcffcffcffcffcffcffcffcfcfcffcffcffffffffffcffcffcf7fffcffcffcfcfcf6fcfcffcffcfffcfffcffcfcfcfcfcfcfcfccf8fcfcf6f8cfccfcfcffc6cfcfcffcffcffcffcfcfcffcfcffcff6fcffffffffcffcfcffcfcfcffcffcfcffcfcfffffffffffcfcffcffffffcfcffcffffffffcffffcffcffcfcfcffcfcffcfefcffffefffcffcffcfc
                                ffcfcfffeffcf6fcfcfcfcf7fffffcffffcfcff7ffcffcfcfcffcff7ffcfcf7fcffcfffcffcffcf7fcfcfcffcff7ffffcfcfcffcfcfcfcfcfcffcfcfcfcffffcfffffcfcfcfcf6fcf6ffcfcfcfcfcffcfcfcffcffc8fcfcfcfcffcffcffcfffcffcfcff7ffcffcfefcfffcffcfcffcfffcff7ffcfcff7fcfcffeffefffcfcffcfcfcfcfcfcffcfefcfffcfcffcff6fcffcfcffcfcffcfffcf7ffcfcfcfcf7fcf
                                cfcfffcffffcfcffcfcf7ffffcfeffcfcffcfcffcfcfcffcffcff7ffcffcfffffcffcfcfcff7ffffffcfcfcffcfffcfcfffcfcfcf6fcfcfcffcfcfcffcfcfffffcfcfcfcfcfcfcfcffcfcfcfcfcfcfcfcfcfcfcfcf6fcfcfcfcfcfcffcffcfcfcffcfcffcffcfffffffeff7fffcfcfcfcfcffcffcf7ffffffefffffcfcfcfcffcfcfcf6fffcffffffcfcffffffcffcfcffff7fffcfcfcfffffcfffcffcfcffff
                                cffcfffcfcfcfcfcf6fcfcfcfffffffcf7ffcfcffcfcfcff7ffcffcffcfcfcfcffcffcffcffffcfcfcfffffcffcfcfffcfcffcfcffcf6fcfcfcfcffcfffffcfeffffcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcffffccfcfcfcfcfcffcffcffcffcf7fffcffcffffcffefffffcfcfffffcfffcffcffcfcfcfcfffcfcffffcfffcffcffcfcf6fcfcfcfffcffcfefffcffcfcf7fffcffcfffcf7fffcfcfcffcffcff
                                cfffcfffffcfcfcf7fcfcffffefcfcffffcf6fcfcfcfcf7ffcffcffcffcfcfcfcffcff7ffcfcffffffcfcf7fcffffcfcfcfcff6fcfcfcfcfcffcfcfffcfffffffcfcfcfcfcfcfcf6fcfcfcfcfcfcfcf6fcfcfcfcfccfcfcfcfcffcfcfcf7ffcffffcfcfcfcffeffffffcfcfffcf7fcff7fffcffcffcffffffcfffffcfefcfcfcff7ff6cffff6fffcfcfcfffffcff7fffffffcffcff7fffffcfeffcff7ffcffcf
                                fcfff7fcf6f7fcfcfcfffcffffffffcf7fcfcfcfcfcffcffcfcffcffcfcfcffcfcff7ffcffcfcfcfcffffffffcfcffcffcff7ffcfcfcfcfcfcffcfcfffcfcfcfcfffcfcfcfcf6fcfcfcf6fcf6fcfcfcfcfcfcfcffccfcfcfcfcf6fcfcfffcfcf7fcffcffcfcfffcfefffffcfcffffcfffcfcfcfcf6fcfcfeffffefffffffffffcffcffc8fcffcfcfffffcfcfffcffcfcfcfcfcffcfffcfeffcfcffcffcffcffc
                                fff7fffffcfcfcf6fcfcfffefcfcffffffcfcfcff7fcffcffcfcffcfcff7fcffff7fffcfcffcfffff7fcfcfcffffcffcff6ffcffcfcffcffcfcffffcfcfffffffcfcffcffcfcffcfcfcffcfcfcfcfcfcfcfcfcffcf6fcfcfcfcffcffcf6ffcffcffcffcffffcffffffefcfffcfcfcfcfcfffcfcfcffcfffffcffffcf7fcf7fcffcffcfcfcfcfcffcfcfcffffeffcffcfcfcfffcffcfcfcfcfffcfcfcffcffcff
                                fcffffcfcf6fcfcfcfcffeffffffcfcfcff6fcfcfffcfcfcffcfcfcff7fffcf7fcffcfffcfcfcf7fffffffffcfcffcffcffcffcffcfcffcffcfcf6fcffcf7fcfcfff7ffcffcfcfcfcfcfcfcfcfcfcfcfcfcfcfcffcfcfcfcfcfcfcfcfcfcfcfcfcfcfcf7fcfcfcfcffffffeffcffcffffcfcffcffcfcfcffffeffffffffffffcffcfff6ffcfcfcffcfffcfcfffffcffcffcfcfcfcffcffcfcfcffcffcfcfcfcf
                                ffffcffcf7fcf6fcfcfcffffcfcfffffcfcffcffcfcffcffcffcfcfcffccfcffcfcffcfcffcfcffcfcfcf7fffcfcffcffcffcffcffcfcfcf6ffcffcfcfcfffcff7fcffcfcffcfcffcfcfcfcffcfcfcfcfcfcf6fffcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfffcfffffffeffefffcfcffcf7ffcfcff7ffcfcffeffffefcfcfcffefffcffcfccfcfcfffcffcfffffeffffcffcffcfcfcfcffcfffcffcffcfcffcfffc
                                fefffcfcfcfcfcfcfffffcfffffcf7fffcfcffcfcffcffcfcfcffcfcfcffcfcfcffcffcfcffcfcffcffcffcfcfff7ffcffcffcff7ffcfcfcfcfcfcfcfcfcfcfcffcfcffcfcffcfcffcffcffcfcfcfcfcfcf6ffcfff6fcfcfcfcfcfcf6fcfcfcfcfcfcfcfcfcfcfcfffffffffffcfcfffcffcfcffcfcffcfffcfffffffffefffcffcffff6fcf6fcffcffcfcffffefffcff7ffcfcfcfcfcfcffcffcfcffcffcfcf
                                fffeffcf6fcfcfcfcfcffffefcffffcfcffcfcfcfcfcf7fffcf7ffcfcfcffcffcfcfcffcfcffcfcffcffcffcfcfcffcfcff7ffcffcffcfcfcfcfcfcfcfcfcffcfcfffcffcf7ffcfcff6ffcfcfcffcfcfcfcfcffcfcffcff6ffcfcf6ffcfcfcfcfcfcfcfcfffffffcfcfcfeffeffcfcfcfcffcfcfcff6fffcfffcffeffeffffffefffefcffcfcfffcfcfcfffefffcfcfcfffcffcffcfcfcfcfcf7fff7ffcfcffc
                                fffffcfcfcfcf7fffffcfcffffcfcffff6ffcfcffcffcfcfcfffcfcfcfcfcfcfffffcfcfcf7ffcfcfcfcfcffcfffcffff7fffcfcffcfcf6fcfcffcfcfcfcfcfcffcfcfcffffcfffcfcfcffcfcfcfcfcfcfcfcfcfffcfcfcfcf6ffcfcfcffcfcfcfcfcfcfcfcff7fffffffffffcff7ffcffcfcffcfcffcffffeffffffffffefefffcffffcfcfcfcfff7ffcffffcffffffcfffcfcfcfcfcfcfcfcfcfcffcfff7ff
                                fefcffcfcf6fcfcfcfffffffcffffcf6ffcfcff7ffcfffcfcfcfcffcfcfcfcfcfccffcffcffcffcfcffcffcffcfcfcfcfffcffffcffcccf8fcfcfcffcfcfcf6fcfcfcffcf6ffcfcfffffcffcffcffcfcfcfcfcffcfcffcfcfcfcfcfcfcf6fcfcfcfcfcfcfff7ffffcfcffeffff7ffcffcfcff7fffcfcfcfeffffeffeffefffffffffcfcf6fcffffcfffcffeffffcf7fffcfffcfcfcfcfcfcfcffcffcffccffcf
                                ffffcf7fcfcfcffff7fcfcffffcfcfffcffcf7ffcfcf7ffcfcfcfcfcffcffcffcffcffcfcfcfcffcfcffcfcfcfffffcfcfcfcfcffcff888c8fcfcfcfcfcfcffcfcfcfcf6ffcffcfcf7fcfcff7ffcfcff6ffcffcfffcf6fcffcfcf6fcf6fcff6ffcff6fcf7ffffffffffffffefffcffcfcfcfcfcfcfcfffffffefffffffffffcfefcffffcffcfcfffcfcfffffeffffffcffefffcfcfcfcfcfcfcffcffcfffcffc
                                ffcfcfcfcfcfcfcfffffffcfcffffcfffcffcfcffcfffcffcfcfcfcfcff7ffcffcff7ffcffcffcffcf7ffcffcf7fcffffcfffcfcffcfc88cfcfcfcfcfcfcfcfcfcfcf6ffcfcfcffcffffcfcffcffcf6ffcfcfcffcfcffcfcfcfcfcfcfcfcfcfcfcfcffcffcfcfefeffeffeffcfcfcfcfcff7fffcfff7fcfcfffffeffeffeffffffffeffcfcfcffcffcfcffefffefcfffcffcfffcfcfcfcfcfcfcffcfcfcffcff
                                feffcffcfcfcfffcfcfcffffff7fffcffcfcfffcfcfcfcfcfcfcfcfcf7ffcfcfcf7ffcffcffcff7ffffcffcffffcfcf7ffcfcffcf7f6f88fcfffcffcffcfcfcfcfcfcfcfcffcfcffcfcffcfcffcffcfcfcfcffcfffc6fcff6fcfcfcfcfcfcfcfcf7fcfcfcfcfffffffffffffffffcfcff7ffcfcfcfcfffffcfcffffffffffeffcfcfffffcfffcfffffcfcfffcfffffcffcff7fffcfcfcfcfcfcfcfcffcfcfcf7
                                ffcfcfcfcfcffcffffcfcf7fcffcf6ffcfcfcfcfcfcfcfcfcfcfcfcfffcffcffcffcffcfcfcfcffcfcffcff7fcfffcffcffffcfcffcf8cfcfcfcfcff6ffcfcfcfcffcffcfcffcfcfcfcf6ffcfcfcfcfcff6fcffcfffcfcfcffcffcfcfcfcfcfcfcffcfcfcffcffcfeffeffefcfcffcf6ffcffcfffcfcfcfffffefcffeffeffffffffeffcfcfcffcfcf6fffcffffcfffcffcfffcffcfcfcfcfcfcfcfcffcfcfff
                                cffcfcfcfffcfff7fffffffcffffffcffcfcfcfcffcffcfcfcfcfcf7fcfcfcfcfcffcfcffcffcfcffcfcfcffcfcfcfcffcfcfcfcfcfcfcfcfcffcfcffcffcffcffcffcffcfcffcfcfcfcfcfcfcfcf6fcfcffcfcff7ffcfcfcfcf6fcfcfcffcfcffccfcfcfcffcffffffffffffff7ffcfcfcfcfcfcffcffcfefcfffefffffffefefffffffcfffcffffffcffffcfffefffcfffcffcffcfcffcffcfcfcfcfcff7fc
                                ffcffcff7fcffcffffcfcfcfcfcfcffcffcfcfcfcff7fcff7ffcfcffcfcfcfcfcfcfcffcff7ffffcffcffc8cfffcfffcffcffcfcfccfcfcfcfcffffcffcff7ffcff7ffcffcfcffcffcffcffcff6ffcffcfcfcffcffffcfcfcffcffcffcfcfcff6fcfcf6fcfcffcfcfcfefefcf7fffcfcfcfcffcff7ffcffffffcfffffeffefffffefcfcffcfcfcfcfcf6feffffefffeffcfffcffcffcf7ffcfcffcfcfcf7ffcf
                                cffcff7ffffcffffcffffffcfcfffcffcfcffcfcf7ffcfcffcfcfcfcfcfcffcffcffcfcfcffcfcffcfcfcc8cfcffcfcfcffcffcf6ffcf8fcfffcfcff7ffcffcff7ffcffcffcfcff7ffcffcff6ffcf6fffcfcfcfffcffffcffcffcffcfcfcff6ffcfcfcfcfcfcfffffffffffffffcffffcfffcffcffcffcfcf7fffcfcfffffffcfffffffcffcffcffcfcffffcffffcfffffcfcffffcffffcfcff7ffcfcfffcffc
                                fcffcffcfcfffcfffffcfcffffcfcffcfcf7ffcfffcffcfcfcfcfcfcfcffcfcfcfcffcfcfcffcfcfcffffc8ffcfcfcfffcff7ffcfcfcfcfcfcfcfcfcffcfcffcfffcfcffcffcf7ffcffcff6ffcfcfcfcffcfcfcfffcfcffcff6ffcfcffcfcffcfcfcfcfcfcffcfcfefcfcfcfcfffcfcffcfcfcfcfcffcffffffcfffffcfcfcfffeffcfffcffcffcffffcffeffeffffcfcffffcfcfffcfcffcfcfcffcfccfcfcf
                                ffcffcfffffcfffefcfffff6fffffcffcfffcfcf6fcfcfcfcfcf7fcfcfcfcffcfcfcffcffcfcffcffcf7fffcfffcffcfcfcffcfcfcfcfcffcfffcfcfcffcfcffcfffffcff7ffffcffcffcffcfcffcfcfcffcfffcfffffcfcfcfcfcff6ffcfcfcfcfcf6fcf6fcfcfffcfffffffefcffcfcfcffcffffcffcfcfcffcfeffffffffefffffefcfcff7fff7fcfcffffffeffffffcffffffcffffcfcffcfcfcfffcfcfc
                                fcfcffcfcffffffffffcfffffcf6ffcff7fcfcfcfcfcffcffcfffcfcfcfcf7fcffcf7ffcffcfcffcfcffcfffcfcfcffcfcfcfcfcfcf6fcfcfcfcfcfcfcffcfcffcfcfcfcffcfcffcffcffcffcfcfc6fffcff7fffcf7fcfcf7ffcff6ffcfcfcfcf7fcfcf6ffcfcfcfcfcf7fcfcfffcffffffcff7fcffcffffefcfffffefcfeffffcfeffffffcfffcffffcfffefffffeffefffefcffffefcfcfcfcfcff7fcffcff
                                cffcfcfffcffeffffcffcfcffffffcfcffcfcfcfcffcfcfcfcf6fcffcfcfcffcfcfcfcfcf7ffcfcfffcffcfcffcffcfcffcfcfcfcfcffcffcfffcfcfcfcfcfcfcfcfffffcffcfcffcff7ffcffcfcffcffcfcffcffffffcfcfcfcfcfcfcfcfcf7ffcf6cfccfcffcfcfcfcfffffcfcfcf7fcfcfcfcfcff7fcffcfcfcffffffffeffffffcfcffffcfffcfffcffffeffffffffcffffcfeffffcfcfcffcfcffcfcfcf
                                fcff7fcfffffffefffcfffffcfcfcffcfcffcffcfcfcfcfcfcfcffcfcfcffcfcfcffcfcfffcffcfcf7fcffcfcffcffcfcffcfffcfffcffcffcfcfcfcfcfcfcfcfcfcfcfcfcffcfcffcffcfcfcffccfffcfcfcffcfcfeffcfcfcf6fcfcfcf6fcfccfcfccf6fccf6fcffcfcfcfeffffffffffcfcffcf7fffcfcfffcfcfcfcfffffcffcffff7ffcffcffcfcffeffffeffefffffcffffffcfff7ffcfcffcfcfcfcfc
                                fcfffffcfcffeffffffcfcfffffffcfcffcfcfcfcfcfcfcfcfcfcfcfcf7fcfcfcf7ffcfccfcfcffcffffcffffcff7fffcf7fcfcfcfcfcffcffcfffcfcfcfcf7fcffcffcffcfcfffcffcffcfff7ff6fcffcfcfcffffcfcfcf6fcfcffcfcfcfcfcfc6f6f6cfccfcfcf7fcffcfcfcf7fcfcfcffcfcfcffcfcffcf7ffffcfffcfefffefffcfffffffcffcfffcffffcffffffefeffcfcfcfff7ffcfcff7fffcffcffc
                                ff7fcfcfffffffffcffffffcffcfcfcfcfcffcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfffcfffcffcfcffcfcfcfcffcffffffcffcffcfcff7ffcf7ffcfcffcffcfcfcff7ffcfcfcfcfcfcfcfcfcffffcffcfcfcf7ffffcfcfcfcfcfcfcfcfcf6fcfcccfcccf6fcfcfcfcfcffcfffcffcffcfcfcffcffcfcffcfcf7ffcffffffefffcfffeffefffcfffcffffeffffefcffffffffffffcfffcf6fcffcfcfcffcff
                                7fffcfffcffeffffffcfcffffffcfcfcfcfcffcfcfcfcfcfcfcfcfcfcfcffcffcffcffccff7fcfcffcfcffcfffcfcffcf7fcffcff7fffcfcffcfffcffcfcffcfcfcfcfcfcffcfcfcfcfcffcffcfccfffcffcfffffcfcf7fcfcfcfcfcfcfcf6fccfccfccf6fcf7fcfcfcfcfcffcfcfcffcfcff7fcffcffffcffffcffcfcfefcfffffffeffffffefffcffcfcffffefffffcffefcfefcfffcffcfcfcfcfcff7ffcf
                                fcfcffcfffffffefffffffcfffffcfcfcfff7ffcfcfcfcfcfcfcfcfcfcfcfcf6fcfcfcff7ffcfff7ffffcffcf7fffcfcfffcfcfcffcfcffcfcfcfffcff7fcf6fcfcffcfffcffcfcffcffcff6ffcffcfcfcfcf7fcffcfcffcfcf7ffcfcfcfcfcfccf6fcccfccfcfccf6fcfcf7fcffcfcfcfcfcfffcffcfcffcfcffcfffffffffcfefefffcfcffffcffcffffffeffffcfffefffffffffcffffcfcfcffcfcffcffc
                                fffffcffcffefffffcfcfffffcfcfcfcf7fffcffcfcfcfcfcfcfcfcfcfcfcfcfcfcfcf7ffcffcfcffcfcfcfcfffcffcfcfcfffcfcffcfcffcfffcfcf7ffcfcfcfcf7ffcfcfcffcf7ffcfcfcfcffcfffffcf6ffcfcfcfcfcfcfcfcfcfcf7fcfcfcfcccf6f6fccf6fcfcfcf6ffcfcffcfcfcf7fcfcfcff7fcffcfcffcfcfcfeffffffffcffffefcfffffcfcfeffffefffeffffcffcfffffeffffffffffffcffcff
                                cfcffffffcfffffffffffcffffff7ffcffcffcfcfcfcfcfcfcfcfcfcfcfcfcffcffcfffcfcfcfffcffcfffcfcfcfcffffcfcfcfffcffcfcffcfcfcfffcfcfcfcfcffcfcffcf7ffcfcff7ffcffcffcf7ffcffcffcfcf7fcfcf7fcfcf7fcfcf6f6ccf6fcccfcf6fcfcf6fcfcfcfcfcffcfcfcffcffcfcffffcffffcffffefffcfcfcfcfffeffffffefeffffffffcfffffffcfffefffefefffcfcfcfcfcfcfcfcfc
                                ffffcffcfffffffcffcffffcffcffcfcfcffcfcfcfcfcfcfcfcfcfcfcfcfcfcffcff6fcfcfffcfcfcffcf7fffffffcfcffffcfcfcfcffcfcfcfcffccfcfcfcf6fcfcfcfcfcffcffcfcffcffcfcfcfffcffcfcfcfcfcffcfcffcfcfcfcfcfccfcfccf6fcc6fcfcfcfcfcfcfcfcfcfcffcfcfcffcffcfcfcffcf7ffcfefffcfffffffffcfffcfcffffffcfcffeffffefeffffefffcfffffcffffffffffeffcffcf
                                fcfffffffcfcffffffffcffffcfcfcfcffcffcfcfcfcfcfcfcfcf7ffcffcfcf7fcfcfcffcfcfcffffcffcffcfcfeffcfcfcffcfcffcfcffcfcff7ffcfcfcf6fcfcfcffcfcfcfcfcffcfcfcfcffcfcfffcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcf6fcccfccccf6f6fcfcfcfcfcfcfcff6fcfcfcfcfffffcffffcffffcfffcfcfefcfffcfffffefcfcffffffffcffffffeffffcfffcfffffefcfcfcfffcff7ffc
                                ffffeffeffffffcfcfffffcfffcfcf6fcffcfcfcfcfcfcff6fcfffcff6fcffcfffcfcfcffcfffcfcffcffcffeffcfcffcfcfcfff7fffcf7ffcfcfcfcfcf6fcfcffcfcfcffcfcfcfcffcffcff7ffcfcfcfcf7fcf7fcf7fcfcfcfcfcfcfcf6fcf7fcfccf6fcf6fcfcfcfcf6fcfcfcfcf7ffcfcfcffcf7fcffcfcffcfcffcfefffffffeffcfcfefffffffcfcfeffffeffcfffcffffefffefcffffffffefff7ffcff
                                fcffffffffffffffffcffffcfcf7fcfcfcfffcf6fcfcfcfcffcf6fcfcfcfcffcfcffcffcffcfcffcfcfcffcffcffffcffffcfcfcffcffffcffcfcfcf6fcfcfcfcfcfcff7fcffcfcfcffcff7ffcffcfffcfcfcfcffcfffcffcfcfcfcf6fcfcfcfcfcfcfccfcfcfcfcfcfcfcfcfcfcfffcfcffcfcfffffcffcffcffffcfffffcfefcffcfcffffcfcfeffffffffefffffffcfffeffffcfffffcfcfefcff7fffffcf
                                fffeffefffefffcfffffcffff6fcfcfcffcf7fcfcfcfcf7fcfcfcffcffcfcfcfcfcffcffcfcffcffcfffcffcffcf7ffcf7fffcffcfcf7fcfcfcfcf6ffcfcfcfcfcfcf7ffcfcfcffcf7fcfcfcffcffcf7fcf6f6fccfcfcfcffcfcf7fcfcfcfcfcfcfcfcfcfcfcfcfcfcfcffcfcfcf7fcfcfcfcfcf7fcffcff7ffcfcffcfcfcffffffffcfcfcffcfffcfeffeffffcfefffffefffcffffcfcffffffcffffffcfcfc
                                feffffffefffffffcfcffcfcffcfcfcfcfffcffcfcf7fffcfcfcfcfcfcffcffcffcfcfcfcffcff7ffcfcfcffcffffcffcfcfcfcffcfffffcfcfcfcfccfcfcfcfcf6ffcfcfcfcf6fcffcfcfffcfcfcfffcfcfcfcffcfffff7ff7fcfcfcfcfcfcfcfcfcfcf6fcf6fcfcfcfcfcfcf7ffcfcfcfcfcfffcfcffcfffffffcffffffcfcfcfefcffffcffcfffffffffcffffffefefffffffeffffffcffeffcfcfcfffffc
                                ffffefffffffffcfffffffffcfcf6fcffcfcfcfcfcffccfcffcfcfcfcfcfcfcfcffcffcff7ffcffcffcfffcff7fcffcffffcfff7ffcfcfcffcfcfcfcfcfcfcfcfcfcfcfcffcfcfcfcfcffccfcffcfcfcfcfcfcfcffcf7fffcffcfcfcfcfcf6fcf6fcf6fcfcfcfcfcfcfcf6fcfcfcfcffcfcfcfcfcfffcffcfcfcfcffcfefcfffffcffcfcfeffcfcfcfcfcffffeffcffffffefeffffeffeffffffffffffcfcfcf
                                ffcfffcfffeffffffcfcfcfcf6fccfcffff7fcf6fcfcfcfcf6fcfcfcfcfcfcfcfcff7ffcffcffcffcffcfcfcffffcffcfcffcfcffcfcfcfcfcf7fcfcfcf6fcfcfcfcfcfcfcfcffcfcffcffcfcfcfcfcfcfcf7fcfcffffcfcfcfcfcf6fcf6fcfcfcfcffcfcfcfcfcfcfcfcfcfcfcfcfcfcffcfcfffcfcfcffffcfffcffcfffcfcfefcffcfffcffffefffffefcffffffcffcfffffefffffffefcfcfcfefffffefc
                                ffffffffeffffffcffffffffcfcfcfcf7fffcfcfcf7fcfcfcfcfcf7fcfcfcffcff7fffcfcffcffcffcffcfffcfcffcffcfcffcfcffffcffcffcffcfcf6ffcfcf7fcfcfcfcfcfcfcfcf6fcfcfcf6ffcfcfcfcfcfffcfcffffffcf6fcfcfcfcfcfcfcfcfcfcfcffcfcfcf7fcfcf6fcf6fcf6fcff7fcfffffcfcffcfefcffcfefffffffcffcfffcf7ffcf7ffffffcfeffffffffcffffcfcfeffffffffcfcfefcfff
                                feffeffffffffcfffcfcfcfcfccf7ffffcfcccfcfcfcfcfcfcf7fcffcfcfcf7fcfffcffffcffcffcffcff7fcfffeffcffcfcffcfcfcffcff7ffcfcffcfcfcfcffcfcfcfcfcfcfcfcfcfcf6fcfcfcffcfcf7fcfcfff7ffcfcfcfcfccf6fccccf7fcf6fcfcfcfcfcfcfcffcfcf7fccfccfcfcfcffffcfcfcffcfcffcffcfcffcf7fcffcfff7ffcffcffffcfcfcfffffefefeffffefffffffffcfefcffffffffcfc
                                ffffffefffeffffffffffff6fcfcfcfcffcffcf6fcfcfcf6fcfcfcfcfcfcfffffcfcfcfcffcff7ffcff7ffffcfcfcffcffcfcfffcff7ffcffcfcff6fcfcfcfcf6fcfcf6fcfcfcfcfcfcfcfcfcfcf7ffcfcfcfffcffffcfcfcf6fccf6ecf6f6cfcfcfcfcfcfcf6fcfcfcfcf6fcfcccfcfcffcfcfcffcfcfcffcfcffcffcfcfcffffcfcfcfffcfcffcfcffffffefcffffffffeffffeffeffeffffffcfcfcfefffc
                                fffeffffefffffffcfcffcfcf7fcffffcffccf7fcfcfcfcfcfcfcfcfcfcf6fcfcfffffcfcff7ffcffcfffcfcfffffcff7ffff7fcfcffcffcffcfcffcfcfcf7fcfcfcfcfcfcf7fcfcfcfcfcfcf7fcfcffcffcfcffcfcffffcfcfcf6cfcfccfcccf6fcfcf6fcfcfcfcfcf6fcfcccfcf7fcfcfcffcfcffcfcf7fcfcf7fcffcfcfcfcffcffffcffcfcffcfcfefcffffefcffcffffeffffffffffcffcffffffcfcfcf
                                fcfffffffffffcffffffffcfcfcfcfcffcfcf6fcfcfcfcfcfcfcfcf6fcffeffcfcfcfcffcfcffcfcffcfcfffcf7fcfcfffcfcfffffcffcffcffcfcfcfcfcffcfcfcf7fcfcfcffcfcfcf6fcf6ffcfcfcffcffcfcffffcf7fcfcf7fcfcccf6cf6fcfcfcfcfcfcfcfcfcfcfcfcfcf6cfcfcffcf7fffcfcf7fcfcfcfcffcfcffcfcfcfef6feffcfffcfcfcfcfffcf7ffffffffcffffcfeffeffffffffefcfefffffc
                                ffffcfeffcfcfffffcfcfcf6fcfcfcfcff7fcfcfcffcfcfcfcfcf6ffcfcffcffffcfcfcffcfcffffcffcfcfefffffcfcfcfffcfcfcfcffcffcffcfcfcfcfcfcffcfcffcfcfcfcfcf6fcfcfcfccfcfcfcff7ffff7fcffcffcf7fccccf6fccccccccf6fcfcfcfcfcfcf6fcfcf6fccfcfcfcfcffcfcfcfcfcfcfcf7fcfcff7ffcfcfcfcffffefcfcfcffcffcfcffffcfcfefffeffffffffffefefefffffcfcf7fcf
                                ffefffffffffffffffffffcfcfcfcfffcfcfcfcffcfcffcfcf7ffcfcffcfcfcf7ffffcfcffffcfcffcffffcfcfcfefffffcfcffcffcfcff7ffcffcfcfcf6fcfcfcfcfcf6fcf6fcfcfcfcfcfcfcfcffcfcfffcfcfff7ffcfcfcfcf6f6ccf6f6f6fcfcfcfcf6fcf6fcfcfcf7fcccf7fcf6fcfcffcfcf7fcf6fcfcfcfcfcffcfcfcfcfcffcffffeffcfcfcfcffcfcffffffcffffefcfcfeffffffffefcffffffffc
                                fffffffeffcffffcfcfcfcf7fcfcfcffffcfcfcfcfcfcf7ffcfcfcffcffcffcffcfcffcfcf7ffcfcfcfefcfffcfcfcfcfefffcffcfffcfffcfcf7ffcfcffcfcf6fcfcfcfcfcfcfcfcfcf6fcfcfcfcffffcfcfffcfcfcfcfcfccccfccf6cccccf6f6fcf6fcfcfcfcfcf7fcfccf6fcfccfcfcfcffcfcfcccfcf7fcfcfcfcffcfcf7fcfcfffcfcfcffcfcf7fcfcffcfefcfffeffffffffffcffcffffffcf7fcfcff
                                effefffffffffcfffffff6fcfcfcff7fcfcfcfcffcfcfffcfcffcfcffcffcffcffcfcffcfffcfffcffcfcfcfcfffffcfffcfcfcff7fcfcfcfffcfcffcfcfcfcffcf6fcfcfcfcfcfcfcfcfcf6fcfcfcf7ffffcfcfcffcffcf6ff6f6cccfcf6f6cccfcfcfcfcfcfcf6fcfcccfccccfcfcfcf7fcf7fcfcfcf6efcfccfcfcfcffcffcfcfffcffffffcfcfcffcfcfcffffffcffffcfcfeffcfffffefcfcffffffcfcf
                                fffffeffeffeffffffcfcfcfccff7ffffcf7fcfcffcfcfcfcfcfcffcfcfcf7ffcfffcf7fcfcfcfcfcffffffcfcfcfefcfcfffffcffffcfffcfcfffcfcf7ffcf7fcffcfcf7fcfcf7fcf6fcfcfcfcfcffffcfcfcfcfcfcfcfcfccccfcf6ccccccfcf6cf6fcfcf6fcfccfcfcf6fcfccf6f7fcfcfcffcf6f6efccfcfcf6fcffcffcfcfcfcffcf7fcfcfcfcfcffcffcfcf7ffcfcffffffffffefeffffffcfcfcffffc
                                ffcfffffffffffffffffcfccfcfcfcffcfcfcfcfcffcfcfcfcfffcfcff7fffcffcfcfffffcfffcfffcf7fcffffcfffffcfcf7fcfcfcffcfcfcfcfcfcfcfcfcffcfcfcf7ffcfcfcfcfcfcf7fcf6fcfcfcffffcfcfcfcfcf6fccf6fccccf6f6fc6ccfccfcfcfcfccfcf6cf6fccc6fcfccfccfcfcfcfccefccfccf6fcfcf7ffcfcfcfcffcffffffcffcffcfcfcfcfcfffcffffcfcfcfcfefffffcfcfffffefcfcff
                                cffffcffeffcffffcfcfcfcf6fcffcfffcfcfcffcf7ffcffcfcfcfff7fffcffcffcfcfcfcfcfcfcfcffffcf7fcfcf7fcfffffffcffcfcfffcfcfcfcfcfcffcfcfcfcfcfcfcf6fcfcfcfcfcfcfcffcfffcf7ffcfcfcfcfcfcf6cfcc6f6ccccccf6ccf6fccf6f7fc6fcfccfccfcf7fcfccfccf6fcfcfcf6fccf6fcfcfcffcfcff7fcfcffcfcfeffcfcf7ffcffcffcfcffcfcffffffffffffcfffffcf7fffffffcf
                                ffcfffefffffffffffffccfcfcfcffcfcf6fcfcffcffcfcffcfcfcfcffcffcffcffffcfffcfffffcfcfcffffffffffffcf7fcfcfcffcfcf7fffcfcfcfcfcffcfcf6fcfcfcfcfcfcf6fcf6fcfcfcfcf7ffffcfcfcf7fcf7fccfcccfccfcfcf6f6fcccccfcfccfcfccf7fccf6f7fccf6fccf6fcfcfcc6fccccfccfcf7fcfcff7ffcfcffffefffcff7fffcfcfcfcff7fcffffcfefcfeffcffffefcffffcfcfcfefc
                                fffeffffcfefcffffcfcf6fccfff7ffcfcfcfcfcffcffcfcffcffcffcffcffcffcf7ffcfcfcfcfefffcfcfcfcfefcfcffffffefffcffffffcfcfcfcfcfcfcfcfcffcfcfcfcfcfcfcfcfcfcf6fcf7fffcfcffcf7fcfccfccf6cf6ccf6cc6f6cccccf6fccf7fccccf7fccf6fccccfccfccf7fcfcfcfcf7cfc6fcfcfcfcfcfcffcfcfcfcfcfcfcfcffcfcfcfcfcf7ffffcfcfffffffffeffefffffcfcfffeffcfff
                                cffffcfffffffffcfffcfcfcf7fcfcfffcfcffcfcffcffcfcff7ffcffcffcffcfcffcffcfffcfcfcf7fffcffeffcffcfcfcfcfcfcfcf7fcffcffcff7ffcffcfcfcfcfcfcf6fcfcfcfcf6fcfcfcffcfcfcfcfcfcfccf6fcccfccfc6cfcfcccfccf6cccf6cfcf6fcfccfccfccfcf6fccf7fccfcfcf7fccfcfccf7fcfcfcfcfcfcfcfcffffffffffcfcfcffcfcfffcfcffcfcfcfcfcffffffcfcfffefcfffcffcfc
                                ffcffffeffcffefffcfcfcf7ffffffcfcfcfcffcfcfcfcffcfcfcff7ffcffcfcffcffcffcfcfffcffffcffcffcffcffcffeffffcffcffffcffcff7ffcffcff7fcfcfcf6fcfcfcf6fcfcfcfcfcfcfcfcfcfcf6fccf6cfccf6cc6fcfcc6cf6f6cc6fcf6cfcccfccf6fccf6cf7f6cfcf6cfccfccf7fccfccccf7fcfcfcfcfcfcfcfcffcf7fcfcf7ffcfcfcfcff7fcffcfcfffffffffefcfcffffefffffcfcfcffff
                                cfff7ffffffffffcffcf7fcfccfcffffcf7fcfcfcffcffcffcfffcffcffcffcfcffcffcffcfcf7fcfcffcffcffcffcffcffcfcffcffcfcffcff7ffcffcff7fffcffcfcfcfcfcfcfcf6fcf7fcf6fcfcf6fccfcfcfcfccf6cfcfccc6fcfccccfcfcc6cfccf6f6fccccf6cfccfcfccccfcccf6fccfcfccf6f6fcfccfcf7fcf7fcfcf7fffffffeffcfcffcfcfcffcfcffffcfcfcfefffffffcfcffcfcfcfffff7fcf
                                fcfffffcfefcfffffcfcfccfcfffcfcffcfcfcfcfcff7ffcffcfcfcffcff7fffcfcfcffcffcfffffcfcffcffcffcff7ffcffffcffcffcfcffcffcffcfcfcfcfcfcfcfcffcfcf7fcfcfcfcfcfcfcf6fcfcf6fccf6ccf6cfcc6fcfcf7f6cfccc6ccfcf6fccfcccf6fccfccf6cccfcfccfcccccfcfccf6fccfccfcfcfcfcfcfcfcfcfcfcfcfffcffcfcfcffcfcffcfcfeffffffffcfcfefffffcffffcfcf7fffffc
                                fffcfcfffffffcffcf6fcfcffcfcfffcf6fcffcfcf7ffcfcf7ffcffcffcffcfcfffcfcfcf7fcfcfcfffcfefcfcff7fffcfcfcffcff7fffcfcfcffcfcffcffcfcffcf7fcfcfcffcfcfcfcfcf6fcfcfcfccfccf6cfcf6fcccfcc6f7cfcccccfcfc6cccccf6cfcccfccf6fccfcf6f6cf7cf6fcf7fcf6fccfccfccfcf6fcfcfcfcfcfcfcfffefcfcffcfcfcfcffcffcfffcfcfef7ffffffcf7fffcf7ffffffcfcfcf
                                cffffffeffcffffffcfcfcf6fffcfcffcfcfcfcffcfcffcfffcffcffcffcffffcf7fffcfffffcfffcfcfffcfff7fffcffffcfcff7fffcffcffcfcffcfcfcffcfcffffcfcfcf6fcfcfcf6fcfcfcf6fcfcf7f6fcfcccccf6f6fcfcfc6fcf6f6ccfcf6fcf7fccf6f7f6cccf6fccfcfccfccfcfcfccfcfcccf7fcfcfcfcfcfcfcfcfcfcfcfcfffffcffcfcfcfcfcfcfcfcfffcffffcfefcfffcfeffffcfcfcffcfff
                                f7fcfefffffcfcfcf7fccfcfcfcffff7fcfcfcf7ffcfcffcfcfcff7ffcffcfcfcffcfcfcfcfcfcfcffcfcffcfcffcffcfcffff7fffcffcff7ffffcffcffcfcffcfccffcfcfcfcfcf6fcfcfcfccfcfccf6fcccf6cf6fcccccccc6cfccccccfc6cccfcccfcf6fccccfcf6fecf6cccfccfcccf6fcfcf7fcfcccf7f6fcf7fcfcfcf7fcfffffcfcfefcffcfcfcfcfcfffcfcfcfcfcffcfffcfffffcfcffcfcfcffcf7
                                fffffffcfeffffffcfcfccfffffcf7fffcfcfcffcffcfcfcffcfcffcffcffcfffcffffcffcffffefcffcfcffcffcffcfffcf7fffcffcffcffcfcfcfcfcfcffcffcffcfcfcfcfcfcffcfcfcf6fcfcf7fcccfcf6fccfccf6fcf6fcf6cf6fcf6fcf6f6fcf6ccfccfcf6fcccf6fcfcf7fccfcf7fcfcfcfcccfcfcfcfcfcfcfcf7fcfcfcf7fcffcffcfcfcffcfcfcfcfcfffffffffcffcfcfcfefffffcffffffcffcf
                                ffcffcfffffcfcf7fcfcfcf7fcfffffcfcfcfcfcfcfcfcffcfcffcffcff7ffcf7fcfcffcffcfcffffcffff7ffcffcffcfeffffcffcffcffcffcffcffcfff7ffcffcfcfcfcfcfcf6fcfcf6fcfcf6fcfcf6f6ccfccf6cccf6ccfcccfcccc6cccccfccc6cfcccc6f6cccfcf6ccf6fcccf6f6fcfcf6f6cf6f6ccccfcccfccf6fcfcfcfcffffcfcfcfcfcfcfcff7fcfcfcfcf7fcfcfcfcffcffcfcfeffcf7fcff7ffc
                                fffefffefcffffffcf6fcfcfffcfffffccf6fcfcfcffcfcfcffcfcfcfcfffcfffffcfcff7ffcfcf7ffcf7fffcfcffcffffcfcffcffcffcffcffcff7ffcfcfcffcff7ffcfcfcfcfcfcfcfcfcfcfcfcccfccfcf6fccfcf6cfcc6c6c6c66cc6c6c6c6cfc7c66cfc6ecc6c6c7cccf76c66cc6cccf6ecc7ccccc6f6cc67ccf6ec6c6c6c6ccc7ccf7f6fcf7f6ccfc6cf6f6ccfcfcf76c7f6c7c6f67cf6cfcfccfcffff
                                cffffcfffffcfcfcfcfccffcfffcfefcfcfcfcfcfcfcfcfcf7fcffcfffcfcfcfcfcfffcffcffffffcfffffcffffcffcfcffcfcffcffcfcfcfcff7ffcffcfffcff7ffcfcfcfcfcffcfcfcfcf7fcfcf6f6fccccfcc6f6cfcccfc7c6cc6b6c6b6c7c6b6b6ccc67b66c7c7c6cc67fcccbb7cc6c6bc6cc6c6767cb67cccc67cc6cb6c6bc6cf666c6bc766bcc766cbc67c76c766b6ccc6bc6c6cccc6b6c76b66cfcfcf
                                fefcfffcfcffffcf6fcfccfffeffffffcfcfcf7fcfcfcfcfffcfcffcfcfffffcfffcfefcffcfcfcffcfcfcfcfcffcffefcffffcffcffcffcff7ffcffcffcfcfcffcffcfcfcfcf7ffcfcf7fcfcf6fcfcccf6fccfcfcccccf6cf6ccc6cccccccc6cb6bccc6cb6bcb6c6bcc6cccc8cc6c6ccc7b6ccc6c6bccb8ccb8c6ccc8fbc6ccc6c7ccccccc6cccccfccccf6fbcccc6cccbfcccc6bccccf6ccc7ccc6ccccfcfc
                                fffffefffffcfcfcfccfcfcffffcffcfcf7fcffcfcf7fcf6fcffcfcfcfcfcfcfcfcfcfffcffcfcfcffcfffffcfcffcffffcfcffcffcff7ffcffcffcffcffcffcfcfcffcfcfcfffcffcfcfcfcfcfcfcfcf6fcf6f6ccfcf6cfcccf6fcccccc6fcccfccc8fc6ccf6fccc8fcfccccfcfcfcfccffccfcfccfccfccfcffcfccfcfcfcfccfcffcfcfcfffcfcfcffcffcffffcffcf6fffffccfcfcffffcffcfffcffffcf
                                fcfcfffcfcfffcf7fcf7fcffefffcffcfcfcf6fcfcfcfcfcfcfcfcfffcffcffcffcffcfcfcffffffcffcfefcfffcffcfcffcfcffcff7ffcffcffcffcffcffcffffcfcfcffcf7fcfcffcfcfcfcfcfcf6f7cccfccfcf6ccfc6fc6cfcccf6fcfccfccfcfcccfccccccfccccccfcfcfcfcfcfcfcfcfcfcfccfcfccf6cfcfcfcfcfcfcfcfcffcfffcfffffcfcffcffcfcffcffffcfcfcffcfffcfcfffcffcffcfcffc
                                fffffcfffffcf7ffcfcfcfcffcfffffefcfcfcfcfcfcfcfcfcfcff7fcfcff7ffcffcffcfffcf7fcffcffcfffcfcfcffcfcffffcffcfffcfcffcffcffcff7ffcf7ffcffcfcfffcffcf7ffcfcfcfcf6fccfcfccf6f7cfc6cfccfccccf6cfcccf6cf6fccccccfcfcfccfcfcf6cf6cfccfcfcfcfcfcf6fcfccf6fcfcfccfcfcfccfcfcfffcffcfcfcfcfcfffcffcffcfcffcfcffcfcfcffcfcfffcfcffcfcffcfcff
                                cfefffcfcfffffccfcfcfffcffcfcffcfcfcfcfcf6fcfcfcfcfcfcfffcfcffcffcff7ffcf7fffffcff7ffcfcfffffcffff7fcff7ffcfcfffcffcffcffcffcfcffcffcffcf7fcfcffffcfcfcfcf6fcfcfcccf6fccfc6fcf7cc6fcf6cfccf6f6fccfccf6f6f6cc8ccc6cc6fcfcfccfcfccfcf6fcfcfccfcfcfcfcfcfcf6fcfcfcfcfccfcfcfcfffcfffcfcfcffcffffcffcfcfffcffcffcfcfcfffcffffcffcfcf
            `)
        }
        
        if (player1.y >= 2500) {
            scene.setBackgroundImage(img`
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcffffffffffffffffffffffffffffffffffffffffffffcf8fffffffffffffffffffffffffffffffffffffffffcfcffcfcffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffcffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcfffffffffffffffffffffffffffffffffffffffffffffffffff8fcfcffffffffffcfffffffffffffffffffffffffcfffff8fffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffcffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffcffffffffffffffffffffffffffffffffffffffffffcfcfffffffffffcffffffffcffffffffcffffffffffffffffffffffffffffffffffffffffffffffcfcf8fffffffffcfffffffffffffffffffffffffcfff8fcffcffffffffffffffffff
                                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffcffffffff8fffffffffffffffffffffffffffffffffffffffffffffffff8cffcffffffffffffffcfcfffffffffffffffffffffffff8fffffffffffffffffff
                                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffff8ff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcffffffffffffffffffff8fcf8fffff8fffffcffcffffffcff8ffffffcffffffffffffffffffffffffffffffffffffffffffffcf8fffffffff8ffcffffff8ffffffffffffff8fffcfcfcffcffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcf8fffcf8fffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfccf8ffffffffffff8fcfffffffffffff8ffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffcffcffffffffffffffffffcfcf8ffffffffffffcff8ffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f8fcffffffcfcfffffffcfcff8fcfffffffffffcf8fcffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcffcfcfcffffffcfffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfffffffffff8fffcf8ffffcffffffffffffcffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffff8f8fcfffffffffff8fcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f8cfffff8fcffffffcfcf8ff8cf8ffffffcffffcf8fffffffffffffffffffffff
                                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffcffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffcffcff8fcfffffcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfffffffffffcffff8f8ffcfcfffffff8ffffff8ffcffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffcffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcfcfff8ffffffffcffffffffffcfffffcfffffffffffffffffffffffffffffffffffffffffffffffffcf8fcff8fcf8fffffffcfcff8fc8ffffffffffffcfcfffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffff8fffffffcfff8fcfffff6cfcffffffffcffffff8fffffffffffffffffff8fcfffffffffffffffcffffffffffffffffffffff8fffffcfffcfffcfff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffcf8fccfcffcfffffffcff8ffffffffffffffffffffffff
                                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcff8fcfccfff8ff8ffffffffffffff8ffffffffffffffffffcffffffffffffffff8fcffffffffffffcf8fcfffcfffffcfffffffcffffcffffffffffffcffffffffffffffffffffffffffffffffffffffffffffcffcfffffffcffffffcfffcf8c8ffffffcffcfffcfffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffcffffff8ff8fcfcf6fcc6fcffcfffffffffffcffffffcfffffffffffcfcff8ffffffffffff8fffffffffffffffcfffffffcfffcffffffcffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcfffcfffffff8fcfcfcf8fffffffff8fcffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffff8ffffcffffff8ffffcf6f6fc6fcf6f6cf8cfffffff8ffffffcfffffcfcffffffff8fffffffffffffffcfcfcfffcffcfffff8ffcffffffffcfcffffcffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcf8fffffffffffffffffffc8f8fffffcf8ffcffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffff6ffccf6f6cc6f8cf6fffff8fffffffffffffff8fcffff8fffcffcffffffffffffcffffffffffff8fffcffffcfffffffffcffffcfffffcfffffffcffffffffffcfffffffffffffffffffffffffffffffffffffffffcf8ff8ffffffffffffffcfcfcfffffffcfffcf8ffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffcffffcf6f6f6f6fccf6fcfffffffffffff8ff8ff8ffff8fffffcffcffffffffffffcff8fcff8ff8fffffcfffcffffcffcffcfffcfffffffffffcffffffffcffffffffffffffffffffffffffffffffffffffffffffff8fcffcfffffffffffffffff8fcffcff8fffcff8ffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ff8ffffffffffffff6f6f6c6f66f6fcffffffffffffffffffcfcffffffcfcffffffffffffffffcffffffffffcfffffcfff8ffffffffffcfffcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcf8fffffffffffffffff8ffff8ffffffcff8ffcfffffffffffffffffffffffff
                                ffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffff8ffffffffffffffff8ffff8ffcff6f6f6f6f6f6fffcfffffffffffffffffcfcfcffffff8ffcffff8fffffffffcfffffcfff8fcffffcffffffffcfffffcfffffffcffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffcffcfcfffffffffffffffffffcfffffcfff8fcffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffcc6c6f6f6c6f6cfffffffffffffffffcf8ff8ffff8fffcffffffffffff8ffffffffffcfcffff8fffffcffcffffcffcffcfcfffffcffffffffcfffffcfffffffffffffffffffffffffffffffffffffffffff8fcff8ffff8ffffffffffcfffffffffcffcffcfcffffffffffffffffffffffff
                                ffffffffffffffffffffffffffffffffffffffff8fcf8ffffffffffff8ffffff8ffff8fffffffcffffffffffffffffff6f6c6f6fcfcffffffffffffffcffffcfcffffffcffff8ffffcfcffffffcffffffff8fcfcfffcfcffffffffffffffffffcfcfffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffcff8fffcf8fffffffffffffffffffffffffffff
                                ffffffffffffffffffffffffffffffffffffff8ffffffffffffffff8ffffffffffcfffffffffffffff8ffcfffcff8fcfc6f6f6f6ccfcffffffffffffffff8ff8ffcffcff8f8ffffff8ffffffffffffff8fcfff8ffcffffffcffcffcffffcffcfffffcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfffffffffffffffffffcf8ffffffffff8fcffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffcf8fcffffffffffffcffffffff8fffffff8fffffffffff8fffffff6f6cf6f6f6f6ffffffffffff8fffffcffcff8ffffcffcfcffffcffffffffffffffffcfcfffffcfcfffffffffffcffffffcfcffffffcffcffffcffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffcffffcf8ffcfffffffffffffffffffffffffffff
                                ffffffffffffffffffffffffffffffffffffffffffffffffffff8fcfcff8fffff8ffffffffffffffcffffcffffcf8ccc6f6cc6c6f6fcf8fcffff8fffffcff8fcf8fffc8cf6f8ccf8ffffffffffffffffcff8ffcfcf8ffffcfcfcfffcfffffcfffffcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffcffff8ffffffcffffffffffffffffffffffffffffff
                                ffffffffffffffffffffffffffffffffffffff8fcf8fcfffffffffffff8ffffffffffffffffffffffffcfffcff8fcf6f6f6f6f6c6f6cfcfff8ffffffcff8fcf8fcf6fcf6f8fcf6fffcfff8fffffffffff8ffcff8ffffcffffffffcffffffffffcfffffcffcffffcffffffffffcfffffffffffffffffffffffffffffffffffffff8ffcfffffffffffffffff8fcffffcffffffffffffffffffffffffffffffffff
                                ffffffffffffffffffffffffffffffffffffffffffffffffffffcfff8fcffffffffffcfffffffcf8ffff8fff8fcf6f6f6cc6c66f6cf6f6fcffffcfcff8ffcf6fcf6f8ccf6f6f6fc8fc8fffffffffffffffcff8ffcfcffcf8fcfcffffffffffffffcfcffcffcfcffffffffcfffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffcfffffffffffcffffffffffffffffffffffffffffff
                                ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffcffcf8ffcffffff8fcff8ffcfffc8fcf8f6f6f6f6f6c6666f6cfcffcff8f8fcfcf8cf6f6fcf6ccf6fcfcf6f6fcfcfffffffffffffcffcffffcffffffffffcffcffcffcffffffffcfffffffcfffffffffffffffcfffffcfffffcfffffcfffffcfffffffffffcfffffffffffffffff8fcffcf8ffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffcfffcf8fffffcff8ff8fffcff8fffffcfcffcffffcffcfcc6f6f6f6c6c66c6f6f6f6fcf8fccf6fcfcf6f6fccc6f6f6f8f6f6f6f6fffffffffffffcfffcffcfcffcfcfcfcfcffffffffffffffffcfffcfcffcffffcfffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffff
                                ffffffffffffffffffffffffffffffffffffff8ffffff8f8fffcffffffcffffcff8fffcfcff8f6ff8fcff8f8f6f6f6f6cf6f6c6666c6f6f8f6c6f6ccccc6f6f6f6fcf6c6f6f6f6fcf6f6fcff8ff8ffffff8ffcffcfcfffffffffffcffcffffffffcffffcffffcffffcffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff8fcfffcfffffffffffffffffffffffffffffffffff
                                cfffffffffffffffffffffffffffffffffff8ffffff8ffcfc8fff8fcf8fffcff8ffcf8fff8c6f6cfcff8fcf6cc6f6f6f6866c666c66f6c6f6fcf6f6f6f6f6ccccf6c6f6f6f6f6f6f6f6ffffffffffcffffffff8ffcfcfcf8fcfcffffffffcffcfffffffffcfffcfcfffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffcfff8fffffffffffffffffffffffffffffffffffff
                                ff8ffffffffffffffffffffffffffffffffffffcfffffcf8ffcf8ffffcfff8ffcf8fcf8fccf6cf66f6fcf6cc6f6c6f6ccf6f66f76666cf6f6f66f6f6f6f6c6c6f6fcc6f6fcf6f6f6f6f6ffffffffffffffcfcffcffcff8fffffffcffcffffffffffffcffffcfffffcfcfcfffcffffffffffffffffffffffffffffffffffffffff8ffcfffffffffffffffff8fcfffffffffffffffffffffffffffffffffffffff
                                ffffffffffffffffffffffffffffffffffffcf8f8ffcf8fcf8fcfc8ff8ffffcff8fcf8fcc6f66c6f6c6f6f66f66f6f6f66c6666666766f6cc6f6f66c6c66c66c6f6f6fffcfcf6f6c6f6c6cffffcf8ffcfffffcffcffcffcfcfcfffffffcfffffffcfffffcfffcfcffcfffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffcffffffffcfffffcfffffffffffffffffffffffffffffffffff
                                cffcf8fffffffffffffffffffffffffffffff8fcff8fffcf8fcf6ff6fcfffcf8fff8fcf6f6f6c6c666fcf66666f6f6c6f6f6c676666c66f6f6f6cc6c667676c6c6f6f6fcf8fcfcfc6c6f6ffffffffcffff8fffcf8fcfcffcfffcf8fcffffcffcfffffffffffcfffcffcffcffffffcffffffffffffffffffffffffffffffffffffffffcfffffffffffffffff8fcfffffffffffffffffffcfffffcffffffcfffff
                                f8ffffffffffffffffffffffffffffffff8fcfcf8cc6cf8fcf6ff6fff8ffffffc8fcf8f6f6c66c67678ccfc6f66c6f6f666c666b69766c66c6c6f66676b6bb676c6ccffffcff8fff6f66fcffff8ffffcfffcfcfcfcffcfcffcfffffffcffffffffffffcffffffcffcffcfffcffcffffffffffffffffffffffffffffffffffffcfffffffcffcffffffffffcfcffff8ffffffffffffffcffffffffffffffffffff
                                fffcffcfffffffffffffffffffffffcf8ffff8f8c6ff6f6f6fccfcf6ffffff8fcfcf6f6f6f6c766666fccff66cf6f6c6f6f6676b9796b6766c6c66766b9b99b9b6c6ffcfffcfffcff6ffffffffffcf8fffcfffcffcfcfffcffcfcfcfffffcfffcffcfffffcfffffffffffcfffffffffffffffffffffffffffffffffffffffffffffcfcfffffffffffffffff8fffffffffffffffffcffffffffffffffffffffff
                                cfff8ffffffffffffffffff8ffffcf8fcfcf8fc66f6cf6f6f6ff6fcfffffcffcf8f6f6f6f66667676ccf8cfc6f66ccc6c6c66b969b9b96b67666766b9699b9d9b7ccfffcf8ffcffffffffcffffff8fffcffcf8fcffcfcfcfcfffffffcfcfffcffffffffffffcfcfcfcfcfffcfcffcfffffffffffffffffffffffffffcfffcffcfcfffffcfcffffffffffffffcfffffffffffffffffffffffffffffffffffffff
                                f8fffcf8fffffffffffff8ffffcfcfcc8cf6c66c666c6f6fcf6ff6fcfcffffffcf6f6f6f6c67666c6cfcfcfc6cf6f6f6f66c76b9d999b96b6b676b96b9d9d9db6b6cfffffffcfffcfffcfffcfffffcffffcfcffcfcfcfcfffcf8fcfffffffffffffffcfffffffffffffffcffffcffffcfffffffffffffffffffffffffffffffffffffcffcffcffcfffffffcff8ffffffffffffcfffffffffffffffffffffffff
                                ffcf8ffffcffffffffffffcfcfffcfcccc66666666c66c6f6fccfcf8ffffffff8ff6f6f6c666b66cffcfcfff66f66f66c6c6b9d9d9d9d9d9b9bb969b99d9d99bb6cccffcfcfffcfffffffcffffffffcfcffcfcfcf8ffcfcf8ffcffcfcffcffcffcffffffcfffcffcfffcfffcffffcffffffcfffffffffffffffffffffffffcfcffffffcffcffcfffffcffff8ffffffffffffcfffffffffffffffffffffffffff
                                cffffcf8ffffffffffffcfffffcfc8c6c6b6b766c66c66c6c6f6f6ffffffcf8ffcfccc6f66c666ccf8cff8fcf66f6ccf66679b9d9d9d99b69699b9b9d99b9d9b9b6cfffffffcffffffffff8fffffcffff8fcfcfcffcffcfcffcffffffffffffffffcfffffffffffffcfffffffcfffcfffcffffffffffffffffffffffffcfffff8fff8ffcfcfcffcffffffffffffffffffcffffffffffffffffffffffffffffff
                                f8fcf8fffffffffffffff8f8fffccc6b796969676676766c6f6f6fcfcffff8ffff8f6f666676b6fcffcfcfff6cf6f666c67b99d9d919d9b7bb9b99999d9d9d9b7bc7cffffcfffffffffffffcffffff8fcfcffcfcfcfcfcffcffcfcfcfcfcfcffcfffffcfffcffcfffffffcffffcffffcffffffffffffffffffffffffffffcfffffffffcfcfcfcffcfcfffffcfcfffffcffffffffffffffffffffffffffffffff
                                fff8ffcfffffffffffffffffffcc6b7b9b9b96b6b6c6b6766c6fcf8fffffcfcffcf6c66c66666c8cffffffccf66c6fcc67b9b9d919d9d9b6b6b9db9b9d99d9d9b6bcffffffff8ffffffffcff8fffffffcffcfcfcfcfcffcffcffffffffffffffffffcffffffffffcfffffffcffffcfffffffcfffcfffffcfffffffcfffcfffcffffffffcffcffcfcfffcffffffffffffffffffffffffffffffffffffffffffff
                                cfffcfffcfff8fff8ffffffffcf6cb99d99b7b6b6b96b9666c6f6fcffcfff8ffff8f666666666cfcf8fffff8cff6f6c66b9b9d9d9d19dbbb6b9b69d979d9d9db9b6c6fffffcffffffffffffffcffcfcfcfcf8fcfcfcfcf8fcfcfcf8fcf8fcfcffcfffffffffcfffffcffffffffffffcfcfcfffffffffffffffffcfffffffcfffcfffcfffcffcfcffcfcffcffcfffffffffffffffffffffffffffffffffffffcf
                                f8fff8fffffffffffffffffcfcccb9d99b9999b99b9b96bb6666f6ffcf8fffff8fcc6c666766cfcfcfffc8fffcf6c6f67b99d9d919d9d96bb6bbdb9b99d99d9bb6bccffffffffffcfffff8fcffffffcfcfcfcfcfcfcf8fcfffcffcffffffffffffffffcffcfffcffffffcffffffffffffffffcffffffffffffffffffcfcfffffffffffcffcffcfcfcffcffffff8ffffffffffffffffffffffffffcffffcfffff
                                fffcffffff8fcffffffffff8fcc6d9d9d9db9b9b99799d969766cf6ffcffcfccf6f666666666fcffffc8fffcfff8f66c69b9d91d919d9bb6cbb9b999d99d9d9b6b7cfcfffffffcffffffffffffcffcfcfcfcfcfcfcfcffcfcffcffcfcfcffcfcffcfcffffffffffcffffffffffcffffcffcfffcffcffffffffffffffffffcfffcfffffffffcffffcfcfcfcfcfffffcffffffffffffffffffcfffffffffffffff
                                fffffffffffff8ffffffffffcc6b79d9d99d9b99d9d9b97966666cf6fcf6f6f6f6c6ffc6c6cfffcffcfcffffffcf6c67bb9d9d919d19dbbb6c6bb6d79b9d9d9b7bc6cffffffcffcf8ffffffcffffcf8fcfcfcfcfcfcfcffcfcffcffffffcfffffffffffffffcfffffcffffffcffffcffffffcffffffffffffffffffcffcfffffffffffffcfffcffffcffcffffffcffffffffffffffffcfffffffffffffffffff
                                fffffffff8fcfffffffffcfffc6b9d9d9d9b9d9d9d99d696b66666cc6f6f6f6c6f6f6cffffcfcffff8fcfffcfffcf6c669d9d9d9d9d9d6b6ccb6b999b9d9b9d9b6ccfcfffcfff8fffffffffff8ffcfcfcf8fcf8fcfcfcfcffcf8fcfcfcfffcffcfcffcffcfffffcfffffffcffffffffffcffffcfcffcffcffffffcffffffffcfffffffffffffffcfffcffcfcffffffcfffcfffffffcfffffffffffffffffffff
                                ffffffffffff8fffffffffffccbb9d9d9d9d9d9d9d9b9bb696c6c66c6f6c6c6f66f6fc6fcf6fffcfffff8fff8fffcfc6bb9b9d9d1919b9bccc6bb9b9b9b99d9bbccccfcffffcffcfffffcff8fffcfcfcfcfcfcfcfcfcfcfcffcfffff8ffcfffcffffffffffffcfffffffcffffffffffffffffffffffffffffffcffffcfffcfffffffffffffffffffcffcfcfffcfcfcffcfffffffcfffffffffffffffffffffff
                                ffffffffffcfffffffffffffcc6bb9d9d9d9d9d9d9db9b6cccc6f66666f6f6666cfccffffffffcfffcfffffffffcf8fc66b9b9d9d9dd9bb6ccc6b9b9b99b9b9b6bcfcfcfffcfcffcfcffffffffcfcfcfcfcfcfcfcfcfcfcfcffcfcfcffffcffffcffcffcffcffffcffcfffffffffffffffffcffcfcfcffcffcffffcffffffffffffffffffcffffffffffffcfffffcffcffffcfffffffffffffffffffffffffff
                                ffffffffffffffffcfffcffffcc6d9d99d9b9d9d999bb6bc6fcfcf67c66666c6f6ff8fcffcfcff8fffffffcfffcfcccfcc6c7b9d9d9dbb6cccc7b9796d9d99d9bc6f6ffcfff8fcffffcfffffcfcfcfcfcfcfcfcfcfcffcffcfcfcfffcfcfffcffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffcfffffffcfffffffffffffffcfcffffffcffcffcfcfffffffffffffffffffffffffffff
                                ffffffffffffffffffffffffcf6cb9b9d9b9d9d9dd9bbbcccffff6f666c6c6f6cfcffcfffffffcfcfffcfffffff8ff8fcfcf6bb9d919b6bccfc6b9b9b9b9b9db6c7fccfffcffcfffcffcfccfcfcfcf8fcf8cfcfcfcfcfcfcf8fffcf8fffcfff8fcfcfcffffffcffcffffffffcffcffcffffffffffcfcfffcfcfcfcfcfffffffffffffffffffffffffffffcffcffcffcffcffcfcffffffffffffffcfffcfffcff
                                fff8ff8ffffffffffffffffffccc6d9b9b9d9d999d9b66c6cffcffcff666f67ffffcfffffffffffffffffffffcffcffcfcfccb9d9d9dbb6cc6c679b9b99b9d9b7cccfcfcffcf8ffcffffcfcfcfcf8fccfcfcfcf8fcfcf8fcffcfcfcffcffcffffffffffcffcfffffffffcffffffffffffffffffcfffffcffffffffffffffffffffffffffffffffffffffffffffffcffcffcfffffcfffffffffffffffffffffff
                                ffffffffffffffffffcfffffffcc6b9b99b99d9d9db9bccccfffffc8cf6f6ffcfcfffffffcffffffff8fcffffffffcff8fff6cb9d9d9b6cccfc7b69b9b9b99d6b6cfcfcffffffffffcfcffcfcf8cfcfcfcfcfcfcfcfcfcffcfcffcffcffcffcfcffcffffffffffcffcfffffffffffffffffffffffffcfffcfcfcffcffffffffffcfffffffffffffffffcfffffffffcffcffccfcfffcfffffffffffffffffffff
                                f8ffcfcf8fffffcfffffffffcf8ccb69b9d9b9d9d96bcc7f6cfffcffcffcfc8ffffffffcffcf8ffffffcffffff8fff8fffcfc7bb9d99bcccfcc66b9b9b99b9b9cccfcfffffcffcfcffffcfcfcfcfcfcfcfcfcfcfcfcfcfcfcffcffcffcffcffffffffcffcfffcfffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcffcffcfcfcfffcffcffffffffffffffff
                                fffcffffffcfffffffffffffffcc6b9b9b9d9d9d9bb6cccccfcfffcf8fffcfcfcffffcff8f8ffcfffcf8f8ffffffcfffcffccc6d9d9db6cfcfcc6b69b96d979bc6ccfcfccffcfffffcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcffcfffcfcfcfffffffffffffcfffffcffcfffffffffffffffffffcffcfcffcffffffffffffffffffcfffcfffffffffffffffcffcffcffcfcfcfcffffffcfffffffffffff
                                cfff8f8fcfffffffffffffffcfcc6b79b9b9d9b99b6cccfcf8fffffcfcff8fffffcffffcffcfcfffffffcfffffffffcfffffc6bbb9d9bcccf6cc6b9b69b9b9b9c7cccfcfcfcffcfcffffcfcfcfcfcfccf8cfc8fcfcfcfcffcfcfcfffcffcfcffffff8fcffcfffcffffffcffffffffcffffffffffffffffffffffffffffcffffffcffffcfffffffffffffffffffffffffcffcffcfffcffcfcfffffffcfffcffff
                                ff8ffffcf8fcfffffffffffff8cc7b9b9b99b99d9bcccf6fcfffff8fcfffffcffffffcffcff8fffff8fffffffffffffffffcfc76b99d6ccffcf6c66b9b9696db6cccf6fcfcfcfffffcfffcfcfc8fccfcfcfcfcfcfcfcfcfcfcfffcf8ffcfffcfcfcffffffffcffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffcfcfcfcffcffcfffcffffffffff
                                8ffcfcfffcfffffffffcfffffcc6b6b999b9d9b9b66cfcfffcffffffffffcffffffffff8fcffcffcfffcfffffffcffffffffcccb6d9d6ccfcfccc66b69b6b97b6cccfcfcfffffcffffcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcffcffcfffffffcffcfffffffcfffffffffffcfffffffffffffcffffffffffffffffffffffffffffffffffffffffcffffcffffffcfcffcffffffffcffcfffcffffffffffff
                                fffff8f8f8f8fffffcffffffffcc7b9b9b9d9b9b96cfcffffffffffffffffffffffffcffff8fffffffffffffcffffffffffcfc6c7d9bbcfffcfcf6c6b67969b6bccfcfcfccfcfffcffffcfcfcfcfcfccfcfcfcfcfcfcfcfcffcf8ffcffcffcfcfcffffffffcfffffffffffffcffffffffcfffffcfffffffffffffffffffffffffcfffffffffffffffffffffffffcffffffffffcfcfcffcffcfcfffffcfffffff
                                cfcf8ffcfcffffffffffffffccc6bb9b979b9d996bcffffffffffffffcffffffffffffffcfffcfffffffffffff8fffffffffcfccc99b6ccf6fcf6c666b6b9b9bccccfcfcffcffcfffcfcffcfcfccfcfcfccfcfcfcfcfcfcfcf8ffcffcffcffffff8ffcffcffffcffcffffcffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcffcfffffffffcffcffffcfcffffffcfff
                                ff8ffcff8fcfffffffffffffffc7b6b969b99b6b978fffffffffffffffffffffffffffffffcffff8ffcffff8fcfffffff8fffcf6cb99e6ffffcfcc6c669669b66cf6fcfcfcffffffffffcfcfccfcfccfcfcfccfcfcfcfcfcfcfcffcffcffcf8fcffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffcffffffffffffcffffffffffcfcffffffcfcfffcfcfcfffff
                                cffcff8fcf8fcfffffffffffcccc6b79b69b9b99b6cfffffffffffffcfffffffffffff8ffffff8ffffffffffcfcfcfffffcf8fcfc79b6ecfcff8f8c66b6b969bcccfcfcfcfcfcfcfcfcffcfcfcfccfcfccfcfcfccfcfcfcfcffcfcfcffcfffffffcfcfcfffcffcffcffffffffffcfffcffffffffffffffffffcfffffcffffffffffffffffffffffffffffffffcfffffcffcffffffffffcfffcffcfcfffffffcf
                                ffff8fcf8ffffffffffffffffcf6e6b69b6b9b6b97cffffcfcfffff8ffffffffffffffffff8fffffcfcfffcfff8fffffcffcfcfcc697cccfffcfcc6c66696d76bcfcfcfcfcfffffffffcffcfcfcfcfccfcfcfcf8fcfcfcfcfcffcfffcffcfcfcffffffffcffffffffffffffffcfffffffffffcffffffffffffffffffffffffffffffffffcfffffffffffffcffffffcfffffffffffffcfffcfffcfffcfcfcfcff
                                f8fcfcf8fcfcfffffffffcfffcccc7696b96b6969bcfffcf8fffffcffcffffffffffffffffffffffffffffff8ffcfffff8f8f8fcf9b9c6fcffffcf6666b6969bcfcfcfcfcfcfcfffcfffcfcfcfcfccfcfcfccfcfcfcfcfcfcfcffcf8fcffffffcfcffcffffffcffcffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffcfffffffcfffcffcfcffffc
                                ffff8fcfcffffffffffffffffffccc6b66b69bb9b9ccff8ffffffff8f8fffffffffffffffffffffffcffff8ffcfffffffffcfcfcf969cccfffcf86f6c66769b6ccfcfcfcffffffcfffcffcfcf6fcfcfcfccfcfcfcfcfcfcffcfcfcffffcf8fcffffffffcffcfffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffcffcffffcfffcfffffffffffffffcfffcfcff
                                ffcff8f8ff8ffffffffffffffcff6c76b66b696b9678ffcfcffff8fcffffffffffffffffffffffffffffffffcfcffff8fcffcf8ffb97ccfffffcf6c6c66696b7cfcf6fcfccfcffffcffcfcfcfcfcfcfccfcfcfcfcfcfcfcfcfcfcfcfcffcfffcfcfcfcfffffffffcfffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffcfffffffffffffffffcfffffcffcfcf
                                fff8fcffffffffffffffffffffcffc6666696b969bbccff8ffffffcf8fcfffffffffffffffffffffffffffcffffffffffffcfffff66bcc8fffcfc6f6666669b6ccfcfcfcffcffcffffffcfcfcfcfccf8fcfcfcfcfcfcfcfcfcffcffcfcffcfffffffffffcfffcfffffffcfffcfffcfffcffffffffffffffcffffffffffffffffffffffffffffffffffcfffffffffcffcffffffffffffffffffffffcfffcffffc
                                ffffffcfcffffffffffffffffffffcc676b6b6b9796ccffffffffcfcffffffffffffffffffffffffffffffffffcfffffffff8fcff969fcfffff8f66f6c6676b6cfcfcfcfcffcfffcfcfcffcfcfccfcfcfcfcfcfcfcfcfcfcffcffcffcfcffcfcf8fcfcffffffffffcffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffcfff
                                ffcffffffffffffffffffcffffffcf766666b66b9bb6fffffffff8f8fcffff8fffffffffffffffffffffffffcffffffffcfffffffb6bc8cfffcf6cc6c66669b6cfcfcfcfcfcffcffffffcfcfcf8fcfcfcfcfcfcfcfcfcfcfcf8fcfcffffcfffffffffffcffcffcffffffffcffffffffffffffffffffcffffffffffcffffffffffffffffff8ffffffffffffffffffffcffcfffffffffffffcffffffffcffffcfc
                                fffffffffffffffffffcfffffffffc66b6b66b969d6eccfcffffffcffffffffffffffffffffffffffffffffffffffffffffffffff696cfffffcf6c6f6c666b67cfcfcfcfcffcffffcfcffcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcff8fcfcfcfcfcfcffcffffffffffcffcffffffcffffffffffffffffffffffffffffffffcfffffffffff8fffffffcffffffffffffcfffffffcfffffffffffffffffffffcfffff
                                fffffffffffffffffffffffffffffc666666b6bb9bbcfcffffffcf8fcffffcffcfffffffffffffffffffffffffffffffffffffffc6b7ccffff8f6cc6c66667b6cfcfcfcfcfcffcfffffcffcfcfcfcf6fcfcf6fcfcfcfcfcfcfffcffcfcffffffffffcfffcffcffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffcffcffffffcfffffffffcffffffffffff
                                fffffffffffffffffffffffffffcff766b666b66997c6c8fffffffcffffffffffffffffffffffffffffffffffffffffffffffcfcfb96cffffcfc86f6f6c669bccfcfcfcfcffcfffcfcffcfcfcf6fcfcfcfcfcfcfcfcfcffcfcfcfcffcfcfc8fcfcffffcfffffffcffcffffcffffffffffffcffffcfffffffffffffffffffffffffffcffffffffffffffffffcffffffffffffffffffffffffffffffffffffcffc
                                fffffffffffffffffffffffffffffcc666b666b6b9bccfcfffff8ff8ffffff8ffffffffffffffffffffffffffffffffffffffff8c669cfffffff6c6c66666766cfcfcfcfcfcffcfffffcfcfcfcfcfcfcfcfcfcfcfcfcfcfcffcfcfcffcfcffffff8fcffffcffffffffffcffffcffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffcffcffffffffffffffcffffffffcffffffff
                                fffffffffffffffffffffffffffffc66766b666b9b6c8cffcffffcffffffffffcfffffffffffffffffffffffffffffffffff8ffcf9b7cffffcfc66f6f6c66bbccfcfcfcfcffcffffcffffcfcfcfcfcfcfccfcfcfcfcfcfcfcfcffcfcffffcfcfcfffffcffffcffcffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffcfffffffffffffcffffffffffffffffffffffffffffff
                                fffffffffffffffffcfffffffcffffc66666c6b669bccf8fffff8fcfffff8fcfffffffffffffffffffffffffffffffffff8ffffcc69bcfcffff86c6c6c666966cfcfcfcfcffffcffffcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcffcffffcfcfffffffcfcfffcfffffffcffcffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffcfffffffcffffffffffffffcfffffcfffff
                                fffffffffffffffffffffffcffffcf666b6b6c66b97fc8ffffffffffcffffcf8fcfffffffffffffffffffffffffffffffffffffcc7b9ccfffffc6ccc6c6676bccfcfcfcfcfcffffcfffcffcfcfcfcfcfcfcfcfcfcfcfcffcfcf8fccff8fcfcf8ffffffcfffffcfffffffffcffcfffcffffffffcfffffffffffffffcfffcffffffffffffffffffffcfffffffffffffffcffcfffffffcfffffffcfffffffffffcf
                                ffffffffffffffcffffffffffffffcc766666c6c6bbcffcffffcf8ffff8fcfcfffffffffffffffffffffffffffffffff8ffffffcf96b6fcffff666f6f6666b67cfcfcfcffcfcfcfffcffcfcfcfcf6fcfcfcfcfcfcfcffcfcffcfcffcffffffffcfcfcffffcfffffcffffffffffffffffffffcfffffffffffffffffffffffffffffcfffcfffffcffffffffffffffcffffffffffffffffffffcfffffffffffffff
                                ffffffffffffffffffffffffffffff6666c6c6c6697cfffffffffffffffcf8f8fffffffffffffffffffffffffffffffffffffffcc69bcffffff666c66c6667b6fcfcfcfcfffffffcffcffcfcfcfcfcfcfcfcfcfcfcfcfcffcffcffcfcfcfcfcfffffffcffffffcfffcffcffffffcffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffcffffffffffffffffffffffffcfffffff
                                ffffffffffffffffffffcfffffffcfc66b66c6f66b9ffffffffffcffcfcf8fcffffffffffffffffffffffffffffffffffcffffffcb976cfcfcf66c6f6f66696ccfcfcfcfcfcfcffffffcffcfcfcfcfcfcfcfcfcfcfcfcfcf8fcfcfffffcff8ffcfcfcfffcffcfffffffffffcfffffffcfffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffffcfffcffffffffffffffffffffffffffffff
                                ffffffffffcffffffffffffffffffc6c666c6c6c67bcfcfcffffffffff8fcffffcfffffffffffffffffffffffffffffffffffcfcc69bcffffff666c6c6667b6ccfcffcfcfcffffcfcfffcffcfcfcfcfcfcfcfcfcfcfcfcfcfcfffcfcf8ffcfffffffffcffffffffcffcfffffffcfffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffcffffffcffffffffffffffcfff
                                ffffffffcffffffffffffffffcffff676666c6f669b6f8fffffffffffcfcf8fcfffffffffffffffffffffffffffffffffffffffc6b79c7fcfcf66c6f66c669b6fcfcfcffcffcffffffcff6fcfcfcffcfcfcfcfcffcffcffcffcfcfcfffcfffcfcf8fcfffcfffcffffffffcfffffffcffffcffffffffffcfffffffffffffcfffffffffffffcffffffffffffcffffcfffcffffcffffffcfffffffffcffffffffff
                                ffffffffffffffffcffffffcffffccc66c6c6f6c6b9fcffcfffffffff8f8fffffffffffcfcffffffffffffffffffffffffff8fcf6b9b6cfffffc666c6f666b6ccfcfcfcffcfffcffcffcfffcffcfcfcfcffcfcfcffcffcffcffcfffcfcffcfffffffffcfffcffffcfffcffffcfffffffffffffffffcffffffffffffffcffffffffffffcfffffffcfffffffffcfffffffffcfffffffffffffffcfffffffffffff
                                fffffcffffffffffffffcfffffffff6c7666c6f667bccf8fffff8fffffcfcfcfffffffff8ffffffffffffffffffffffffffffcfcb6d9ccfffcff66c6c666797cfcffcfcfcfcfffffffffcfcfcfcfcfcffcfcffcfcfcfcfcfcfcfcf8fffcffcfcfcfcffffcffffffffcfffffffffffffffffffffcfffffffffffffffffffffffffcffffffffffffffcfffcff8ffcffcfffffffffffffffffffffffffffcfffffc
                                ffffffffffffffffffffffffffffccc6666c6f6c6b9c8ffcffffffffcffffffffffffffcfffffffffffffffffffffffffffffcc8c9bb7cffffcf666c66666b6ccfcffcfcfffcfcfcfcfffcfcfcfcfcfcfcfcfcfcfcfcfcfcffcffcffcffcffffffffcf8fffffcffcffffffcfffcffcffcffffffffffffffffffffffcfffffffcffffffffffffffffffffffffcfffffffcfffffffffffffffcfffffffffffffff
                                fffffffffffffffffffffffffffffc676b66c6f666bccfcffffcfcffff8f8ffffffffffffcfffffffffffffff8fffffffffcf8fcb79b6cfffcfc6666f6667b6cfcfcfcffcfffffffffcfcfffcfcfcfcfcfcfcfcffcffcffcfcfcffcffcffcfcf8fcffffffcffffffffffcffffffffffffffffcffffffffffffffffffffffffffffffcfffffffcfcffcfffcfcf8fcffcfffffffffffffffcffffffffffffffcff
                                cfffffffffffffcfffcfffffffcfcf6b6766c6c6c79c8ffcfffffffffffffffffffffffffffffffffffffffffffffffffffffccc6b6b6cffff8f666c66c66b6cffcfcfcffcfcffcffffffcf6ffcffcfcfcfcffcfcfcffcff8fffcffcffcffffcfffcfcfcfffffcffcfffffffcfffffffffffffffffffffffffffcfffffffcfffffffffffffffffffffffffffffcffffffffffffffcfffffffcffcfffffffffff
                                ffffffffffffffffffffffcffffff6c76b6b6f6f696cccff8ffffffffffffffffffffffffffffffffffffffffffffffffffcfcccc6b9ecffcffc6666c6666bcccffcffcfcfffffffcfcfcfffcffcfcffcffcfcfcfcfcf8fcffcffcffcffcf8fffcffffffffcfffffffcfffcffffcffffffcffffffffffffffffffffffffffffffefffffcffffffcfcfffff8fcff8fffffffffffffffffffcffcfffffcfffffff
                                cfffffffffffffffffffffffffffcc6b696666c66b7cf8cfffffffffffffffffffffffffffffffffffffffffffffffffffffcf8c6b6bcfffffcf666c6f676b6cfcffcffcfcfcfcfffffffcfcfcfcfcfcfcfcffcffcffcfffcfcf8fcffcffffcfcffcf8fcfffffcffcfffffffffffffcffffffffffffffffffcfffffffcffffeffffffefffffcfffffffffffff8fffcffcfffffffffffcffffcffffcfffffffff
                                fffffffffffcfffffffcfffffffffcc6b6bb6c6c66bcfcf8ffcffffffffffffffffffff8ffffffffffffffffffffffffffff8cccc76b6fffffff6666c66667ccffcfcfcffffffffcfcfcffcfcfcfcfcfcfcfcfcfcfcffcfcfffcfffcffcfcffffcfffffffcffffffffffcffffcffffffffffffffffffffcffffffffcffffeffffffffffffffffffcfffcffcfcffcffffffffffcfffffffffcfcfcffffffffcff
                                fcffffffffffffffcffffffffcfffc676b6676c6c766ffcfff8fcfffffcffffffffffffffcff8ffffffffffffffffffff8fffcf6ccb7cffffffc666c6666b6bcfcffcffcfcfcffffffffcffcfcfcfcfcffcfcffcffcfcfcfcfcffcffcffffcfcff8fcfcffffcffcffcfffffcffffffffcffffffcfffcfffffffffffffffffffffefffffcfffffcfffcfffffffffffff8ffffffffffffffcffff8ffffffffffff
                                ffcffffcfffffffffffffffcfffffcc6b6b6b6c66bbccfffffcffffff8ffcffffffff8fcfffffffcfffffffffffffffffffffcccc66bcfffffff666cf6c66b6cffcffcfcfffffcffcfcffcffcffcffcfcfcffcfcfcfcffcff8ffcfcff8fcff8fcfffffffcffffffffffffcfffffcffcfffffcffffffffffffffffcffffeffffeffffeffffcffffffffffffff8fcffffffffffffffffffffffcfffcffcfffffff
                                cf8cfffffffffffffffffcffffffcfc6666b66c676b6ffffffffffffffcffffff8ffffcf8fffcfffffffffffffffffffcffffffcc76bcfcffcff66c66c6676ecfcfcfcffcfcffffffffcff6ffcfcfcfcfcfcfcfcfcffcffcffcffffcffffcffffcfcfcffffcfffcffcfffffffffffffffffffffffffffffffffcfffffffffeffffffffcfffffffcffffffffffffffcfffcfffffffffffffffffcfffffffcffff
                                fcfcfffffffffcffffcffffffffffcf76b66b6c6c6b6fffffffffff8fcffffffffffcfffffffff8fffffffff8ffffffffffffcfcf6b6cfcfffff666cf6666b6cffcfffcffcffcffcffffcffcfcfcfcffcfcfcfcfcfcfcfcfcffcfcffcfcfffcfcfffff8fcfffcfffffffcfffcfffffffffffffffffffffffffffffffeffffffffeffcfffeffefffffcfffcfffffffffffffffffffffffffff8ff8fcffcffffff
                                ff8ffffffffffffffffffffffffffc6c66c6c76c67b6effcfffcfffffffffffffffffffcfffffffcffffffffffffffffffffffff7c7bcccfffcfc6666f676bccfcfcfcfcfffffffffcfcfcfcfcfcfcfcfcffcffcffcff8fffcff8fcffffcffcffcfcfcfffffffffcffcffffffffcfffcffffffffffcfffffcfffffeffffefffeffffffeffffffffffffffffffcfffffffffffffffffffffffffcffffff8fcffc
                                fffcffffffcfffffcfffffffcffcffc6c66c6c666b6cfffffffffffffffcff8ffffffffffffcffcfffffffffcfcffffffffffffcc66bcffffffc66cf66c6676cffcffcffcfcfcfcffffffcffcfcfcfcfcfcfcfcfcfcfcfcfcfcffffcf8ffcffcfffffffcfcfffcffffffffcfffffffffffcfffcfffffffffffffeffffffffeffffefeffffffffcffcffcfffffffffffffffffffffffffffffcfffcf8fffcfcff
                                fffffffffffffffffffffcfffffffcc66c6c6c6c66b6cffffcfffffffcfffffffffffffffffffff8ffffffffffffffffffffffcf6b67cfffcfcfc666f666bb6ccffcffcffcffffffcfcfcfcfcffcfcfcfcfcfcfcfcfcffcffcfcfcffcfff8fffcf8fcffffffcfffffcfffffffcfffcffffffffffffffffcffffffffffeffffffefffffffcfefffffffffffffffffffffffffffffff8ffffffff8fffffcff8fff
                                fcfcfffcfffffffffffffffffffffcf6c6f66f6c67bcffcfffffcffcfffffffffcffcffcfffffffffffffff8ffffffffffffffccc7b6cfffff8f6b6c6f6667bfcfcfcffcfffcffcffffffcfcfcfcfcfcfcfcfcfcffcfcffcffffcfcffcffcfcffffcff8ffffffffcffffcfffffffffffffffffffffffffffffeffffefffeffefffffefffffffffcfffffffffffffffff8ffffff8fffffff8ffffffffff8fcfcf
                                fffffffffffffcffffcffffffcfffc6c676f6c6c66b6ffffffcfffffffffcffcfffffffffcffcffcfffcffffffffffffffffcfcc6b6bccfffcfcb66f6c667b6cfffcfcffcfffffffcfcf7ffcfcfcfcfcfcfcfcffcfcffcfcfc8ffffcffcfcffcfcffcfffcfcfffffffcffffcfffcffffcffffffffcfffffffffffffffffffffffeffffeffeffefffffcffffffffffffffffffffffffffcffffcfffcffcfffcf8
                                ffcfffffffffffffcfffffcfffffffc6f66c6f6f667ccffcfffffffffcffffffffffffffffffffffffff8ffffffffffffffffcc6e79b6fffffcf666c6f666b6ccfcfffcffcfcfcfffffffcfcfcf6fcfcfcfcfcfcfcfcfcfcfffcfcffcffffcffff8fffcfffffcffcffffffffffffffffffffcffffffffcffffffeffeffefefefffefeffffffffffcfffffffffffffffffffffffffffffffffffffffffffcffcf
                                fcfffffffffffffffffffffffffcfcf76c6f6c6c6cb6ffffffffcffcffffffffffcffcffffcffffffffcffffffcffffffff8fcc6bb6bccffffffb66f6c66b6bcffcfcfcfcffffffcfcfcffcfcfcfcfcf7fcfcfcf6fcfcfcfcfcffcf8ffcf8ffcfcffcffffcffffffffffcfffcffffcfffffffffffffffffffefffffffffffffefeffffefefefcfffffffffcffffffffffffffffffffff8fffffffffff8ff8ffc
                                ff8ffffffcffffffffffcffffcfffc6c66c6f6f6676ccfffcfffffffffffcfffcffffffcfffffcffffffffffcfffffffffffcf6e6db9cffcffcf9b6c6f667b6cfcffcffcffcfcfffffcfcfcfcfcfcf7ffcfcf6fcffcfcffcfcfcffffcffffcffffcfffcffffffcffcffffffffffcffffffcfffffcffffffffffffeffefefefffeffefffffffffefffefffffffffffffffffffffffffffffffffffffffffffcff
                                fffffffcfffffcffffcfffffffffffc6c6f66f6f66bcffcffffcfffffcfffffffffffffffffcfffcfffcfffff8fcf8fffcffccc7b6b6ccfffffc666f6c666b6cffcffcffcfffffcfcfffcffcfcf7fcfccfcfcfcfcfcfcfcfffcfcfcffcffcffcf8ffcffcffcfffffffcffcfffcffffffcfffffffffffcfffeffffffffffffefeffcffefefefcfffeffffffffffffffffff8fffffffffffffffffff8ffffcfff8
                                ffffffffffffffffcffffffcffffcfc6c66f6c6c6c76cfffffffffcffffffcffffcffcfffcfffffffffffff8fcfffffffffffcc6bb6bccfcffcfd66c6f667b6ecffcfcfcfcfcfffffcfcfcfcf7fcfcfcfccf7fcfcfcfcfcfcffffcfcffcff8fffffcffffcfffcffcffffffffffffffffffffffcffffffffffffeffefefecffeffefefffffffffeffffffeffffffffffffffffff8ffffffffcfff8ffffcffcfff
                                fffffffffffffffffffffffffffffcc67f66f6f666bcfffffcffcfffffcfffffcffffffffffffcffcfffffffcf8cfcfffffcffcc6bb6ccfffffc96c6f6666bbcfcfcffcffffffcfcfffcfcf7ffcfcccf6fcfcfcfcfcfcfcfcfc8ffffcfffcfcfcfffcf8ffffffffffffcfffcfffffcfffffffffffffcfffcfffffffffeffeffeffffefefefefffffffeffffcffffffff8fffcfffffffffffff8fffffcf8ffcff
                                ccfffcffffffcffffffffcfffcffffc6c66f6c6f6c7ccffcffffffffcfffffcfffffffcffcffffffffcfffffcffcfffffcffcfccc6bb6fcffcfcb66c6c6c6b6cffcfcffcfcfcffffcf7ffcffccfcfcfccf7fccfcf6fcfcfcfcffcfcffcffffcffcffffffcffcfffcfffffffffcffffffffffcffffcfffcfffeffefefffcfefefefeffffefffeffeffffffffffffffffcfffcfffffffffff8fcffcfcffffcff8f
                                f8ffffffffcfffffffcfffffffffcf6c6c66f6f6666cffffffffffcfffffcfffffcffffffffcffcffffffffff8cf8fcffffffcf6c7c6cfffcfcc966f6f6679cccffcfcffcffffcfffffcfcfcfccccf7fccfcfccfcfcfcfcfcfcffcfcff8fcf8ffff8fcfffffffcfffcfffcfffcffffffcfffffffffffcffffffffffefefeffffefefeefffeffffffefffcfffffffffffcfff8ffffff8ffcfcfcf8ff8fcffffff
                                cffffffffffffffcffffffffffcffcc7c6f66c6c6c7ccffffcffcfffffcfffffcfffcffcffffffffcffcfffffcfcfffffcfcffccccccffcffff67666c6666b6cfcffffcffcfcffcfcfcffcf6fcfcf6ccfccccfcf6fcffcf7cccccfffcfffffcffcfffffcfcfffffffffffffffcffcfffffffffffcfcfffcfcffeffffffefcfefeefeffefeffefeffffffffffffffffcfffffffffffffc8fcf8fcfcfcff8fcfcf
                                cfffffffcfffffffffffffcfffffffc6c66f6f6f66b6ffcfffffffffcfffffcffffffffffcffcffffffffcfffffffffcfffffffccc67cfffcfccb6c6f6c67b6effcfcf8fcffffffffcfcfcfecf7f7fecccf7fccfefcfcc7c7ccfccfcffcfcffcfffcfcfffffcfffcfffcfffcfcffffffffffffcffffcfffffffffefefefffefeeeeefefffeffffeffeffeffcfffcfffff8fffffffcf8fcf8fcf8fcff8fffffff
                                fffffffffffffffffffcfffffcfffcc66c66f666676ccfffffcfffcfffffcfffffcffcffffffffcffcfcfffcffffcffffcffcffcf6fccfcfffcc966c6c666bccfcfcfcfffcfcfcfcffcfcf7fccfccccf7ccccf7fcfccf7cbccffcfcfcfff8ffffcfffffcffffffffffffffffffffffcffcffcfffcfcffcfcfeffffffffefefeefeefeffeffefeffffffffffffffffffffffffffff8cfcfcfcfcfcf8ffffcff8f
                                ffffcfffffffcfffcffffffffffffcc7c6f66f6f66bcffffcfffffffffffffffcffffffcffcffffffffffcfffcffffcffffcfffcccc6fffcfcfc766cf6667b6cffcfffcfcfffffff7ffcfcfcfccccf7ccfef7fccf6fc7cc7cefcfcfffcffcfc8fffcfcfffcfffcffffcffcfffcfffffffffffffffffcffcffffefefefefffefe2eeefeffefffffefefeffffffffcfcfffffffffcfcfcf8fcf8ffffffcfffffff
                                ffffffffffcfffffffffffcffffcff6c66c6f6666c7cfcffffffcfffcffcffcfffffcfffffffcfcfcffcfffffffcffffcffffcfcf6eccfffffc6b6666f66b6ccfcfcfcfcfcfcfcfffcffcfcf7fcf7cccec7cccfccfcfffceccffffcfcffcfffffcfffffcfffcffffffffffffffffcffffffffffcfcfffcfcfcffffffffefefeeeeefefeffefefefffffffeffeffccfcffffffff8cf8fcfcf8fcf8ffffffcffcf
                                fffffffcfffffffffffcfffffcfffcc6c6f66cc6c66ccfffffcfffffffffffffffcffffcffcfffffffffffcfcffffcffffcffffccf6cfcfcfcfb96cc66c67b6fcffcffcfffffffcfcfcfcf7fccccccecccfccccfccfcffc7fcfcffcffcff8fccfffcfcfffffffffcfffffffcfffffffffcffcffffffcffffcfffefefeffeffef2eeefefeffeffffeffefffcffffcf8fffffffc8fcfcf8f8fffffffcffcffffff
                                ffcffffffffffffcffffffffffffffc6c66f66f6676cfffcffffffcffcfffffcfffffcfffffffcffcfcfcfffffcffffcfffcfcffccf7ffffffcc676f6f666bccfcffcffcfcfcfcffffcf7fcfcf7fecc7f7ccf7fcf7ffcfcccfffcffcfffcfffffcfffffcfcfffcffffffcfffcffffffcfcf8ffffcffffcfcffeffffefeffefefe2e2efefeffefefffefffcffffcfcfcfffffcfccf8fcfcffcfffffffffff8ffc
                                ffffffffffffcffffffffcfffffcfcc6c6f6c66666b6cfffffffcffffffcfcfffffcffffcffcfffffffffffcffffcffff8ffffcfcf6cfcfcf8fb666c6666b6ccffcfcfcfcfffcffcfefffcfccccc7cfecce7cccccfcfff7cfcffffcfcfffcfcf8ffcfcfffffcfffffffcffffcff8fffffffcfcffffffffffffffefffffeffefeeeeeeeffefefffeffffefffffcfcf8f8fffc8f8fcfcf8fffffcffcff8fffffff
                                ffffffffffffffffffcfffffcfffffc7c666f6f667ccffffcffffffffcffffffcfffffcfffffffcffcffcffffcffff8ffffcfffcfcfccfffcfc6d66cf6c67b6fcfcff8fffcfcffcffcfccfccf7fcce7e7cccfecfccfeffcefcf7fffffcfcffffcffffffcfffffffcffccffffcffffffffcfcfffffcffcfcfcffffefefefefefef222eeeffeffeffefefffffefffcffffffffcfcf8ffcffcf8fffffffffcffcff
                                fffffcffcfffffffcfffffffffffcf6c6f6c6666c667cfffffcfffcfffffffcffffcfffffcffcfffffffffcffffcfffcfcfffcffcf6cffcfffcc766c66666bcfcffcffcfcfffcffcffcfcfcf7ccecccfec7cc7f7fcfcfccfcfffffcfffff8cffcffcfcfffcfffcffffcffffcffffffcffff8fcffffffffffffefffffefffeffeeeee2eeeffeffefffffffefffcff8fcfffcff8fcfcfffcffffff8ffcfffffff8
                                ffffffffffffcffffffffcfffcfffcf6666f6f6667bcffcfffffffffffcffffffcffffcfffffffcfcfcfcfffcffffcfffffffffcfcfcfcffcfc696c6f6c676ccfcffcfcffcfffcffcfcf7fccfccc7f7e7fececccfccf7ff7fffffffcfcfcfff8fffffffcfffcffffcfffcffffffcfffffcfffffcf8fcffffcfffefeffefefefeee24e2efeffeffefeffefcffffcffffffff8fcfcf8fcf8fccfffffffff8ff8ff
                                fffffffffffffffffffffffcffffff6e6c66666c666ccffffcffcffcffffcffcffffcffffcfcffffffffffffffcfffffcffcfcffffcfcffcfccc766c6666bccfcfcfcffcffcfcffcff7ffcf7cf7fceee7ec7fcfccf7ffcfcfcffffffffff8cffcfcfcfffffffffffffffcffffcfffffffffcfcffcfffffcfffeffffeffeffefeee444e2efefefffffffffcffcffffffffcffffcffff8fcf8ff8fffcfffffffff
                                fffcffffffcffffcffcffffffffcfcc6c6f6f66666bcffffffffffffffcfffffffcffffcfffff8ffcffcffcfcfffcfcffffffffcfcfcffffffc696c6f6c676ccfffcfcffcffffcffcffcfcfcccecec7cececc7ccfcfcc7becffcfcffcfcfcfffcfffff8ffcfffcfffcfffffffffffffffffffff8ffcfffffffffefefeffefeffeee444eeefefefefefeffffffffffffffffcf8fcf8cfcfcfcfffffff8ffcffcf
                                fffffffcfffffffffffffcffffffffcc66666c6f676cfcffcfffcfffcffffcffcffffcffffcfffffffffffffffcfffffcfcf8fffffffcfcfcfc7666c6666b6cfcfcfffcffcfcffcffcfcfccfefc7ccf7ecc7fcef7cfcc7b7fcffffffffffcfffffcfcffffffcfffcfccffffffffffffffcfff8ffffffcfffeffffffffefeffeef2e44544effffeffffffefcffffcffffcffffffffcfcf8fffffcff8fffffffff
                                ffffffffffffffffffffffffcffffcf67cc6f66666bcffffffcffffffffcffffffffffffcfffcffcfcffcfcfffffcfffffffffcfcfcffffffcc6b66cc6c66cccfcfcfcfcffcffffcffcfcf7fc7ccc7eb7eccecccfcfc7bbccfcfcfffcfcf8cffcfffffffcfffffffcccffffcfcfffffffffffffcfcffffffffefefefeffefeffee4444e4eeefeffefeffffffcffffffcf8fcfcf8fc8fcfc8fcfffffffcffcffc
                                ffffcfffffffcffcffcffffffffcff6c66f666f6676cfcffffffffcffcfffffcffcffcffffffffffffffffffcfcfffcfcffcffffffffcfcfcfc696c6f66767cfcfffcffcfcffcfcfcff7fcfccfcecce7cc7cc7fccfcececfcfcffffffffcfffffcffcfffffffcffcc8fcfcff8fcffffffffffcffffffffcffffffffefeffefefeee47452effefefcffefcfccffcfcffffffffffffcfc8fffcffffcffffffffff
                                ffcfffffffcffffffffffcfffcfffcf6c666f66666c6ffffcfffcffffffffcfffffffffcfcfcfcffcfcfcfffffffcffffffffcfcfcfffffffcc7b6666c66bc6ffcfcfcffcffcfffff7ffcfcf7ccc7fce7cecfccf7fcf7ccfefcfcfffcfffc8fffffffcfcffcffffcccfffffffcfffffffffffffffffcffffeffefeffffeffefefe444444eeffecfcfffffeffffffffcffcfcffcf8c8fccf8fff8ffffcff8ff8f
                                ffffffffcfffffffffffffffffffffc66c666666676cffcffffffffcfffcffffcffcffffffffffffffffffcf8fffffcfcf8fffffff8fcfcfcfc666ccf6666cccffcfffcffcfffcf7ffcfcfccfcefc7cccef7ce7fccf7cceffcfffffffcfcfcffcf8ffffffffffcfcf8fffcffffffffffffffffffcfffffffffffffefeffefeffee2454e4efefcfcfefeffffcffcffffcfffffffffccfcfffcfffffffffffffff
                                ffffffffffffffffcffcfffcffffcfcc66f6c6f66c6cffffffcffffffcffffcffffffcffcfffcffcffcfffffffcfcfffffffcf8fcffffffffcc796666c67c7cfcffcfcfcffcffffffcffcfefccc7cfe7e7ccefccfcffcffcffffffffffff8fffffffcf8fcffcffffcffffffffffffffffffffffffffffffeffefeffffefeffefeee4e44eefefecfeffffefffffffcfffffffff8fcf8cf8fcfffffcf8ffcffcff
                                fffffcfffffffcffffffffffffcfff6c76666666667cfcffcfffcffcffffcffffcffffffffcfffffffffcfcffffffffcffcfffffffcffcf8fcc6b6ccf6666ccfcfcfffcfcffcfcfcffcfcfccf7fceceecfecc7fccfcfccfffcfcffffcfcfccfffcfffffcffffffffffffffcffffffffffffffffffffffcffffffffefefffefeffeee4eeeeffefcffcfefffcffcfffcfcffffffffc8fcffcff8fffffffffffffc
                                fffcfffffffcfffffffffcfffffffcf66c6f666c66ccfffffffffffffffffffcfffcf8fcfffffcfcfcffffffcffcfcffffffcffcffffcffffcc696666f66b6cffcfcf8fffcffffffcffefcf7fcccc7f7ec7fcccfcfcff7c7fffffcfffffcfffffffcfffcffcfffffffffffffffffffffffffffffffcffffffeffeffffefefefefefeeeefefefcfefffffcfcfcffcfffffffffffffccf8fffffffffffcff8ffff
                                ffffffffcffffffffcffffffcfffffc6c6666f66676cffcfffcfffcffcffcfffffffffffffcffffffffcffcffffffffcfcfffffffcffffcffc6766cf6667cccfcfffcffcfffcfcfefcffcfcfccf7fccfcecccfccf7fcfcecfffcfffffcff8fcffcfffcffffffcccfffccffffffcff8ffffffffffcfffffffffffffefefffeffefefefefefeffefcfefefcfcfffffffcff8fff8ffcf8ffcf8fffcffcffffffcff
                                fffffffffffffffcfffffffffffcfcc666c6666666c6ffffffffcffffffffffcffcffffcffffcffcffffffffcfcffcfffff8fcfcfff8fffcffcb6766f6c66c6ffcfcffcffcffffffffcfcf7fcfccececccf7f7fcfcfcff7cfcfffffffffcfcfffff8fff8fcfffffffffffffff8ffffffffffffffffffffffeffefffffefeffeffefefefeffefcffefffcfcfcfcffffffffcffffffffcffffcffffffff8fffff8
                                ffcfffcffffffcfffffcffcfffffffcc666f6666c67cfffcfffffffffcffcfffffffcffffcfffffffcffcffffffffffcfffffffffcffcfffcc6b66c6c6667cfcffcffcffcffcfcfcfcfcfcfcf7fcfcc7f7cccfcefcfcffccfffffcffcffcffffffcfffcfffffff8fff8fffffffcf8ffffffffffffffffffffffffefeffffeffefeffefefeffefefffccfcfcfffcffffffcfffcffcf8ff8ffffff8ff8fffcffff
                                fffffffffffcfffffffffffffcfffcf67c66666667ccfcfffcfffcfffffffffcffcffffcffffcffcffffff8ffcfcfcfffcfcffcfffffffcfffc6b66f6f6c6ccfcffcffcffcffffffffcfcfcfcfccc7fccfcfecfcfcffcfffcfcfffffffff8ffffffffffcffffffffffffffff8f8fffffffffffffffffffefffeffffffefefefeffefefefefefffefefccfcfcffffffcfff8ffffffffcfffcff8fffffffffffcf
                                fffffffffcfffffffffffffcffffff6c666666f6666cfffffffcfffcffcffcfffffffcffffcfffffffcf8ffffffffffcffffffff8fcfcfffcc6b666c6c667cfcfcffcffcfffcfcfcfcffcfcfccfcfcfcecccfcfc7fc7fccffcffffffffcfcffcffffcfffcfffffffffffffffcfffffffffffffffffffffffffffeffeffefffefefeffffefffefcfcfffcffffcfcfffffffcffff8fffffffffffffffcffffcfff
                                ffcffcfffffffffcffcffcfffffcfcf666c6666666c6fffcffffffffffffffffcffcffffcffff8ffcffffffcffcffcffffcfcf8fffffff8ffcc796ccf666c6cfffcffcfffcffffffff7ffcfcfcf7fccfcfcf7fcfcfccfcfcffcfffffffffcffffffffffff8fcfffffffffffffcfcffffffffffffffffffffefffffffefffefefcfefefefeefefeffcfcfcfcffffffffffff8fffffcff8ffffffffcffffcfffff
                                cffffffffffffcffffffffffffffffc6c666f666767fcfffffffcfffcffcffcfffffffcffffcfffffffcffffffffffffcfffffffcffcfffcfc66b66c6f667cfcfffcfffcfffcffcf7fffcfcf7fcfcf7fc7fcfcfcffffcf6ffffffcffffcffffffffcf8fffcfc8fcfffffffff8fffffffffffffffffffffffffcfefefffefefcfefcffeffefffcfcfffffffffcffccfcfffffffcfffffffcfffcfffffffffff8f
                                fffffffcffcffffffffffffcffcffcc666c666666c6cffffcfcffffffffffffffcffcffffcffffcffcfffcffcffcffcfffcffcffffcffcfffcc766cc66c6ccffcfcffcffcffffcffffcffcfcfcfcfcfcfcfcfcfc7fcfcfcfcffffffcfcfffcffffffffcfff8fcffffffffffffffffffffffffffffffffcffcffcfffffffeffefcfefeffeffeffffefcfcfcfffffc8fcffffcfffff8fcffff8ffffffffff8ffff
                                ffffcfffffffffffcffcffffffffffc6c666666666ccffcfffffffcffcffcffcfffffffcffffffffffffffffffffffffcffffffcffffcffcfc6b666f6f666ccffcffcfcffcfcfffcfffcffcffcfccfccfcfcfcf7cfffcfcfffcffcfffc8fffc8ffffcff8fcfcf8ffffffffffcffffffffffffffffffffffffcfffcffefffcfcfcfcffeffeffececfccfcffcfcfffcfffffffff8ffffff8fffffff8ff8ffffcfc
                                ffcfffffffffffcffffffcffffffcfc676666666676fcfffffffcfffffffffffffcffcfffffcffcffcffcffcffcf8fffffcfcffffcfffffffc6b66c6f667ccfcffcffffffffffcfffcffcffcfcffcfcfcf7fcfccefcfcffffcfcffcfffffffcfcfffffcffcf8fffffffffffffffffff8ffffffffffffffffffcffffffefeffefcfefeffffefffcccfccfcfcffffffcf8fffffffffcfffffffffcffffffcfffff
                                ffffffffcffcffffffffffffcfcfffc66c66676666ccffffcfffffffcffcff8ffffffffffcffffffffffffffffffffcfffffffcfff8fcf8fcf6b66c66c66c6ffcffcfcfcfcfcfffcffcffcfcfcf7fcfcfcff7fc7cfffcfcfcfcfffffcffcff8fffffffffff8ffcffffffffffffffffffffffffffffcfffffcfffcffefffffeffeffffefefffefcfccfcccfcfcfcfffffffcff8fffff8ffcffcfffffcffff8ff8
                                fcfffcfffffffffffcffffcffffffcf666f666666c6fcfffffcfffcffffffffffcffcffcffffcffcffcffcffcffcffff8ffcfff8fffffffffc6b766f6f66ccfcffffff8ffffffffffffcffcfcfcffcfcfcffccffcfffcfffc8cfcffffcf8ffcffcfffffffcffffffffffffffffffffffffffff8fffffffffffffffffffefffcffefeffcffeffccccccfcfc8fcf8ff8fcffffffffcffffffffffffffff8ffffff
                                ffffffffffffffcfffffcfffffffff6c76666666676cffcfffffffffffcffcffffffffffffffffffffffffffffffffcffffff8fffcffcfcfcf6b66c6f667c6fffcfcfcffcffcfcfcfcffcffcffcfcfcfcfcffeffffcffcffcfcffffffcfccfffff8ffffffffcfffffffffffffffffffffffffffffffcffffffcffeffefffefffffffcffffccffcfcfcf8cfcc8fcffffffffffffffffffffffffff8fffffcfcff
                                fffcffffcffcffffffffffffffcffcc66666666666cfcffffffcfffcffffffffcfffcfffcffcffcff8ffcff8ffcffffffcfcfffcfffffffffc6b66c6c6c6cfcfcfff8fffffcfffffffcffcffcffcffcffcfcfffcffcfffff8f8ffffff8ff8fffcfccf8ffffffff8ffffffffffffffffffffffffffcffffffffffffffffffffefefeffefeffcfefcfcfcfcfcffcfcffcffff8ffffffcfffcffffffffcfcfffffc
                                ffffffcfffffffffcffffffcffffffc6c6666666676fffffcffffcfffffcffffffcfffffffffffffffffffffffffcffcfffffffffcfcf8fcfc6b66c6f6666cfffcfcffcfcfffffcffffcffcff6ffcfcfcfcffcffffccffffcfcffffcffcfffff8fcfcfffffff8ffffffffffffffff8fffffffffffff8ffcffffffffcffeffcffffffffffffefffcfffcffcfcfcff8fffffffffcf8fffcfffff8fcfffffff8fff
                                fcfffffffffffcfffffcffffffffcf6c66c666676c6cfcfffffffffffcffffcfffffffcffcfffcfffcfffcffcfffffffffcfcfcfffffffffcf6b766f66c6cfcfffffffffffcfffffcfffcffcffcfcffcfffcffffcfcfcfcffcfffffffcf8cfffcf8ff8ffffffffffffffffffffffffffffff8fff8fffcffffffffffffffcfffeffefefefefcfcfffcffcf8ff8fcfffffffffffffffffffffffffff8ff8ffffcf
                                fffffcfffcffffffffffffcffffffcf76666666666ccfffffcfffffcfffffffffffcfffffffcfffcffffffffffcff8ffcfffffffcffcfcfffc6b66c6f667ccfcfcfcfcfcffffcffffcfffcffcffcfcffcf6fcfcfff6ffcffffffffffffcffffffcfcffffffffffffffffffffffffffffffffffffffcffffffffcffefcffffeffffcffffffffcffcfffffffcffcfffcfff8ffcf8fcfcf8fffffcffffffffcffff
                                fffcffffffffcfffcfffcfffffcfff6c66666666667fcffffffcfffffffcfffcfcfffffcfffffffffffcffcffffffffffffcffcfff8ffffcfc6b666c6c66cfcfffffffffcfffffcfffcfffcffcffffcfcffffffcfffffcfcfffffff8ffffcffcf8ff8ffffffffffffffffffffffffffffffffffcfff8fffffffffffffcfcffffeffffefcffcffcffcfcfcffcffffffffffffffffffffffff8fff8ffcffffff8f
                                fcffffffffcffffffffffffffffffcc66c66676666ccfffcffffffcffffffcfffffffcfffffffffffcfffffffcffcffcfcffffffcffffcffcc676c6f66c66fcfcfcf8fcfffcfffffcfffcffcffcfcffcfcfcfcffcffcff8ffffcffffff8fffffffcffcfffffffffffffffffffffffffffffffffff8fffcfffcfffffcffcffffffffefffcfffcffffffcffcfffffcfffffcfcf8fcf8fcfffffffffffffcff8fff
                                fffffffcffffffffffcfffffcfffffc666666666676ffcffffffcffffcfffffffffcfffffcffcfcffffffffcffffffffffffcfcffffcfffffccb6666f666ccfffffcffffcfffcfffffcffcffcffcfcfffffcffcffcffcfffffcffffffffffff8ff8fffffffffffffffffffffffffffffffff8ff8fffcffffffffcfffcffffefffeffffcffcfffcfccc8ccfcfcfffffff8ff8ffcfffffffcfcfcffcffffffffff
                                fffffcffffffffcfffffffcfffffcf6c6666666666ccfffffcffffffffffcfffcffffffffffff8fffffcfffffffcffcffcffffffcffffcf8fc66b6c66c676fcfcffffcffffcfffcfffffffcffcffffcfcfcffcffcfffcfcffcffcffffffffffffffcf8ffffffffffffffffffffffffffff8ffffffffffffffcffffcfcfcffffffffffffcfffcfccc8fcf8fcf8fcffffffcffcfffcfff8f8fcf8ffff8ffffffcf
                                fcffffffffffcfffffffcfffffffffc676c66666666ffffcfffffffcffcfffffffffffcfffcf8ffcf8fffcfffcfffffffff8ffcfffcfffffccc766cf666c6cfffcfcffcfcfffffffcfcfcfffcffcfcfffcfcffcfffcfcffffcfffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffcffffcffffcfcfffffeffffeffcffffcfccccccccfcfffffffcffcfffcffffcfccf8fcfcfffffcfffff
                                fffffffffcfffffffcffffffffcffcc66666676667ccfcffffffcfffffffffcfffcffffff8fcfcffcffcfff8ffffcff8ffffffffcfff8fcffc6b6666c666cfcfffffcffffffcffcfffffffcffcffffcfcffffffcffff8fcffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffcff8fffffcfcf8fffffffffefffcfcfcfcc8fc8fc8f8fcf8fcfff8fff8fffff8ccf8cfcfcffcfffffcfff
                                fffcfffcffffffffffffffffffffff6c66666666666fffffffcfffffffffcffffffffffcffcfcf8ffcf8cffffffffffffcfcfcffff8fffffcf6b6c6f66c76cfcfcfcffcffcffffffffcffcffffcfcffffcfcfcfffcffcfffffffffffff8fcffffffffffffffffffffffffffffffffff8fffffffcffff8ffffffffffcfffffefffffffffffffcfcccccc8ccfcfcffffffffcffffffccf8cfcfcf8fffff8fffff8
                                ffffffffffffffcfffffffcffffffcf666666666667cffffcffffffcffcfffffcffffcffcf8fcffcf8fcf8fffcfffcfffffffff8ffffcfcffc6766666c666cfffffffffcffffcfffcfffffcfcffffcfcffffffcfffcfffcffffffffffffff8fffffffffffffffffffffffffffffffffffffffffff8fffcfcffffffffffffffffffffffcfcffc8c8f8cfcfcf8ffcfffffcffffcff8f8cfc8fcfcfffffffffffff
                                fffffcfffffcffffffcfffffffcfff676666766676cfcffffffffcffffffffcffffffff8fcfcfcfffcfcfcfcfffffffcffcffcfffcffffffccc66c6f6667ccfcfcfcfcfffcfffffffffcffffffcfffffcfcfcffcffffcffffffff8ffffcfcfffffffffffffffffffffffffffffffffffffffffcfffcf8fcffffffffffffffffffefffffcffffcccccf8cf8cfcfff8ffff8fffffffccc8fcf8fffffcfffffcfff
                                ffcfffffffffffffffffffffcffffcc66c666966666cfffffffcffffffffcffffff8fcfcf8fcfff8ff8fcff8fcffcffffffffffcfffcffcffc6b6666c6666cfffffffffcffffcffcfffffcfcfffcfcfffffffcfffcfcfffffff8ffffff8fffcffffffffffffffffffffffffffffffffffffffffffffcfcf8ffffffffffcffffcfffffffffcfccf8fccfccfcfff8ffffffffcfffcf8cfcfcffcffffffffcffffc
                                ffffffffcffffffcffffcfffffffff6c6666666666ccffcffcffffffcffffffffcffff8fcfcf8ffffcfcf8fcfffffff8ffcfcffffcffffffcfc66c6c6667ccfcfcfcfcffffcffffffcfffffffcffffcfcfcffffcfffc8cfffffcfcffffcfcfffffffffffffffffffffffffffffffffff8fcfff8fcf8ff8ffffffffcfffffffffffffcffcfff8cccc8fc8fcfcfcffffffcfffffff8cf8cf8fcfff8fffffffffff
                                ffffffffffffcfffffffffffffffcfc666676966676fcffffffffffffffcfffcfffcfcfcfcfcffcffcf8ffcfc8fff8ffffffffcffffcfcfffc67c66c6c66c6fffffffffcfffffcfffffcfcfcfffcfffffffcfcfffcfccffffffcfffffff8fffffffffffffffffffffffffffffffffffffffffffffffcfcffffffffffffffffffffffffcfffcfcf8fccfcf8fffffcfffffff8fffcfccfcfcfffffffffffffffff
                                fffcffcfffffffffffcffffcfffffcc67666966666ccfffffffffcfffcfffffffffff8fcf8ffcff8ffcfcfcf8ffcffffcffcffffcfffff8fcfc666c666c6cfcfcfcfcffffcffffffcffffffffcffcfcfcffffffcffc8fcffffc8cffcffcfffcfffffffffffffffffffffffffffffffffcfffffffcf8f8fcfffffffffffffffcfffffcfffffc8ccccf8cf8fcf8fffffffffffffff8fcf8ffffcffffffffff8ff8
                                ffffffffffffffffffffffffffffff6666666696667fcfffcffcfffffffffcfffcf8ffcfcfcff8ffcff8ff8fcfcffffffffff8ffff8fcffffc6c666f66766ffffffffcfcfffcffcffffcffcffffffffffcfcfcffffcccfffffcfcfffffffffffffffffffffffffffffffffffffffffffffffffcffffcff8fffffffffffffcfffffcffcffcffcf8f8cfcfcffcffcff8fffffffffcfcffffcfffffffffffffffff
                                ffffffffffcfffcffffffcffffcffcc766669666766cfffffffffffffffcfffffffffcff8ff8ffcffcffcffcfcfffcffcffcfffcffffffcffcc66c666f66ccfcfcfcfffffcfffffffcffffffcfcfcfcffffffffcff8cffffffc8ffffffffffffffffffffffffffffffffffffffffffffffffffff8fcf8fffffffcffffffffffffffcffffff8ccfcfcf8fcf8fffffffffffffffffffcfcfffffffffffffffffff
                                ffffffffcfffffffffcfffffffffffc66666696666ccffcfffffffcffcfffffff8fcff8ffcfffffcffcfffcf8fcffffffffffcfffcffcfffcf6c766c666c6fffffffcfcfffffcfffffffcffffffffffcfcfcfcfffccc8fcffffccff8ffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffcfffffccccfcfcffcfcf8ccf8fcf8ffcf8ffffffffffff8ffffffff8fffffffffffffff
                                fcffcffffffffffffffffffffffffcc66669667666ccffffffcffffffffffffcffffffcfcffcffcfccccfffcfcffffcffcffffffffffffcffc666c66c676cfcfcfcfffffcffffffcffcfffcfcfcfcffffffffffcffcfcfffffcffffffffffffffffffffffffffffffffffffffffffffffffffffcffff8ffffffffffffffffcfcf8c8fcf8ffcf8cff8fcfffffffffffffffffffffffcfff8ffffffffffffffffc
                                ffffff8fffffffcffffffffcfffcff6766667966667fcfffffffffffffffcfffffcffffff8fffffcfccfcff8fc8fcffffffcffcfcfcfcfffcfc666c6666c6fffffffcfcfffcffcffffffffffffffffcfcfcfcffff8ccfffffff8cfffcfcffffffffffffffffffffffffffffffffffcff8ffffff8fcfffffffffffffffffffff8cfcfcfffcfffffcffcffcffcffffcffcffcfffffffffffffffffffffffffffff
                                fffffffffcffffffffcffcfffffffcf66669669666c6fffcffffcffcffcfffffcffffcf8ffffffffcfcfcfffcffcfcf8ffff8fffffffffcffc676666c66c6fcfcfcfffffcffffffffcffcfcffcffcfffffffffcffccfcfffffffffcff8ffffffffffffffffffffffffffffffffffffffffcf8ffcffffffffffffffffffffcfcfc8c8fcfffffcff8fffffffffcfcffffffffff8fffffffffffffffffffffff8ff
                                ffff8fffffffffffcfffffffffffff6b6666696666ccffffffcfffffffffffffffffff8fffffffcffcffffcff8ff8fcfcfcffffcff8fcfff8cc6b6c66c67fcffffffcffffffcfffcffffffffffffffcfcfcfcffffc8ffffcffffcffccfcffffffffffffffffffffffffffffffffffcffcffffcffcffffffffffffffffffffff8fcfcff8fcffffffffffcf8c8ffffffffc8cfffffffffffffffffffffffffffff
                                ffffffffcfffcfffffffffffffcffcc666769666676fcffffffffffffffffcfff8fffffffcffffffffcfffffcfcfcf8ffffffcffffffffcffc66666c666c6fcfcfcfffcffcffffffffcffcfcfcfcffffffffffcfffccf8fcfffffff8fcfffffffffffffffffffffffffffffffffffffff8fcfffffffffffffcffffcfffff8ffccf8fcffffffffcffcfff8cfcf8fcfffffcffffffffffffffffffffffffffffff
                                ffffffcfffffffffffffffffcfffffc67666696666bfffffcfffffcffcfffffffffffcfffffffffffcfcffffffff8cfc8fcfffffcfcfffffcf76b666766ccfffffffcfffffffcffcffffffffffffcfcfcffcfffcff8ffffcffffffcccf8fffffffffffffffffffffffffffffffffcf8fffff8fcffffffffffffffffffffcfcff8cfcfffffffffffffffccf8cfcfff8ffcf8fffffffffffffffffffffff8fffff
                                fff8ffffff8ffffffffcfffffffffcc666696696667cffcfffffcffffffcffffffffffffffffffffffcffffffcfffcfcfcfffcffffffcfcff6c666c66c67cfcfcfcfffcfcffffffffffcffcffcfffffffffffcfffffcffcfcfffffc8cfffcffffffffffffffffffffffffffcffffffffcf8fcfcffffffffffffffffffffcfffcfcff8ffcffffffffff8c8cfcf8fcfffffcffcfffffffffffffffffffffffffcf
                                fffffcfffffffffcffffffffffffff676666966766ccfffffffffffffcfffffffffffffffffffffffffffcfcfffcff8fcffcfffcffcfffffcc6b6676666c6fffffffcfffffcffcffcffffffffffcffcfcfcffffcfcffffffffffffccc8ffffffffffffffffffffffffffffffffffffffffcfcf8ffffffffffffffffffff8fcff8f8ffffffffffffffcfcfc8cfcffcffff8fcf8ffffffffffffffffffffffffff
                                fffcfff8ffffffffffffffcfffffcfc6666696966678ffffffcfffff8ffcffffffffff8ffffcffcfcfefeffefffffcfff8ffffffffffcfcffc67666c6c67cfcfcffffffcfffffffffffcffcfcffffcfffff8fcffffffcfcfcffffc8cffcffffffffffffffffffffffffffff8ffffcff8ffcf8fccffffffffffffffffffccfffffcffcffffffffffff8c8cfcf8fcfffffffffcfffffffffffffffff8fffffffff
                                fffff8fffffffcffffffcfffffffffc6669669666b6fcffffffffffffcfff8fffffffffffffffffffefefeefeffcfffcfcfcfffcff8fffffcc6b66c6666c6fffffcfcffffcffcfffcfffffffffcffffcfffffffcffcff8cfffffffcc8fffffffffffffffffffffffffffffffcffffffffcf8cfcffffffcfffffffffffcf8fcfcffcfffffff8ff8fffcfcf8c8fcf8fcffffcffffffffffffffffffffffff8fff8
                                fff8fffcffffffffffcfffffffcffcc676669679667cffffcfffffcfff8fffffff8fffffffffcffefefefef2ffff8ffffffff8ffcffffcfff6b66666676ccfcfcfffffcfffffffcffffcffcfffffcffffcffcffffff8fcfcffffff8ccfcfffffffffffffffffffffffffffffffffffcfff8fcc8cfffffffffffffffff8fcff8fcffffcffcffffffff8c8cffcfcfffffff8fcfffffffffffffffffffffcffffff
                                fffffcffffffffffffffffffffffff6c6669669666ccffffffffffff8ffcfffffffcfffffffffefefefefefeefcffcff8fffffcff8fffffcfc6b666c6666cfffffcfcfffcffcfffffcffffffcfcfffcfffcfffcfcffffcc8ffffffccffffffffffffffffffffffffffffffcffcffffff8fcfcfcffffffffffffcfffffccfffcf8fcfffcfffffccffffcf8c8fcf8fcf8ffccfffffffffffffffffffffffffffff
                                fffcffffcffffffcffffffffcffffcc666669666667fcffffffffffffffffcfffcff8ffffffcffffefefecefefffcffffffcff8fcffffcffcc676b666c7cccfcffffffffffffffffffffcfffffffcfffcfffcfffffcfc8fcfffffff8cffffffffffffffffffffffffffffffffffffffffcfc8c8fffffffffffffffffcf8fcf8cfff8fffcfcff8ffffc8cffcf8ffcfffffc8fff8ffffff8fffffffffcffffffcf
                                fffffcffffff8fffffffffffffffff676696696966bcffffffffcffffcfcffff8fcfffffffffffeffeccccfeffffffcffcfffcfcfcfcfffff6b666676666cfffcffcffcffcffcffcffcfffcffcffffcfffffffcffffffccffcffffcffcffffffffffffffffffffffffffffff8fffffffff8fcffffffffffffffffffff8cfffcfcffffffcffffcfcfffcf8cfffcfffffcfcffffccffffffcfffffffffffffcfff
                                ffffff8ffffffcfcfcffcfffffffcfc666669667666fffcfffcffffffffffffffcfcfcffffffeffefeccecefeffcfffcffffff8f8fffffcfcc6b66666b6ccfcffffffffcfffffffffffffffffffcffffcfcfcfffcfcffc8ffffffffcfffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcf8ffcffffcfffcfffff8ccfcf8ffffcfffff8fffc8cfffcfffffffffffff8fffff
                                ffcfffffffcfcf8fcfcfffffffcfff6b6696696966bcffffffffffcfffffff8fcff8fffffffffffefcf7ccfefeffffffffff8fcffcf8fffffc76b6b66667cfffcfcfcffffcffcffcfffcffcfcffffcffffffffcfffffffcfcffffff8fcfffffffffffffffffffffffffffffcfffffff8fcfffffffffffffffffffffff8fcffcffffffffffffff8fffff8f8ffffcffffffffffffcf8fffcffffffffffffffffff
                                fffffcffcfff8fcf8f8ffcffcffffcc666669666676fcffffffffffffff8fffcf8fffcfffffffeffefeccfcffffffff8fffffffcffcffcffcc696666b6b6cfcfffffff8ffffffffffcffffffffcffffcffcfffffcffcfffcffcfffffffffffffffffffffffffffffcfffffffffffffffcfcffffcffffffcffffffffffcfff8ffcf8ffffffff8ffffffccffcffffffffff8ffff8fffcffffffffffffffffffff8
                                fffffffff8fcfcfccfccffffffffff676696696966bffffffffffcffcfffffcfffcffff8ffffffffefcfcfcfffffcffffcffcffff8fffffcfcb66b666666cfffcffcfffcfcfcffcfffffcffcffffcfffffffcffffffffcffffffffffcfffffffffffffffffffffffffffffffffffffcff8cfffcffffffffffffffcffff8fffcffcfffffffffffffffff8fcfffcfffff8fcffffffcfffffffffffffffffcfffff
                                fffffffcfcff8fcf8cf8cf8ffffffcc666669666667cfcfffffcfff8fffffcfcfcfcf8fffffffffffcffcfffcfffffffffffffcffffcff8fcc676676b67bcfcfffffcfffffffcfffffcfffcffcffffcfcfcfff8fcfcfffff8fcfffffffffffffffffffffffffffffffffffffcffffffffcf8cff8fffffffffffffffffcfffcffccfcfffcfcffffffffffffffffff8fffcfcffffcfffffffffffffffffffffcff
                                ffffffff8fcffcf8fccfcfcfffffff6b6696696966ccfffffcffcfcfcfcfffff8ffffffcfffffffeffffffffffcfffcffffffffffffffcffcc696b666b66cfffcfcff8fcf8ffffffcfffcfffcffcffffffffcfffffff8ffcffffffffffffffffffffffffffffffffffffffffffffff8ff8ccffccfffffffffffffffffffffffcfccffffccffffffffffcffcffffffffffcfffcf8fcffffff8fcfffffffffffff
                                ffffff8ffcfcf8fccf8f8cfffffffcc66666969676b6ffffffcf8ff8ffff8fcfffcfcffffffffffffffffcffffffffffff8ffffffff8fffcf6b666b6b6976fcffffcffffcfcfcfcffffffcfcfffffcffcfffffffcffffffffffcffffffffffffffffffffffffffffffffffffffffffffcffc8ff8fffffffffffffffffffffcfccfccffccfcffffcfffffffffffffffcffff8ffcfc8fffffffcf8ffffffffffff
                                fffffffcff8fffcf8fccfcfcffffff6766966966666cfcff8ffcfcffcf8ffff8fcfff8fcfffffcfcfffcffffcffcf8fcffffffffffffffcf8cb96b66966bcfcfcfffcfcfff8fffffffcff8ffcfcfffffff8ffcffffcffcfffcfcffffffffffffffffffffffffffffffcfffffffffffcffc8fcffcfffffffffffffffcfcfffffcfcfcffcccfcfcf8cfffff8cf8fffff8cf8ffffffffcffffffcfffffffffff8ff
                                ffffffffcffcfcfcfcfcf8fffffffcc6666966966b7cf8fffcf8ffcffffffcfffff8ffffffffff8ffcffffffffffcfffffcfffffffffff8fcc6b666b6696ccfff8fffff8fcffcffcfffcffcfffff8ffcfffffffcfffffffcfffffffffffffffffcfffffffffffffffffcffff8cffffffffcccffffffffffffffffff8fffcffccfcffffcffcff8cfcf8fffcfffffffccf8ffffffcfffffffff8ffffffffffffff
                                ffffffcff8ffff8fcf8fcfcf8fffff6669669667666ccfcfcfcfcf8f8fcfffcfcfcfcfcf8ffffcfcffffffcffcf8fc8fcfff8fffffffcffcfc96769676b9cfcfcffcf8ffffcff8ffffffcff8fcfffffffcffcfff8ffcfffffffcfffffffffffffffffffffffffffffffffffffffffffcf8f8cfffffffffffffcfffcccfffffcfcfffffcfcfffcf8fcffffcfcfcfff8ccffffccfffffffffffffcffffffffffff
                                ffff8fffcfcf8ffffcfff8fffcff8fc76669696966b8cffff8fffcffcffff8ffffff8fcffffff8fcf8ffcff8ffcfcffcffffffffffffffffccb66b696967ccf8fffffffcfff8ffffcf8ff8fcff8fcffcffffff8ffcfffcfffcfffffffffffcffffffffffffffffffffffffffcffc8ffffcfcffffffffffffffffff8f8ffcffcfffcfffcfcfcfccfcfcfcffff8cfffcc8fcffff8fcfffffffffffffffffffffff
                                fffffcffffffffcfcfcfcffcff8fff6b6966669666bcf8cfcfcf8ffcfffffffcf8fcfcf8ffffffcf8ffffcffcff8fcffffcfffffffffffcf8c6966b6b699cfcfffcffffff8fffcffffffffcfcfffffffffcffcffcffffffcfffffffffffffffffcfffffffffffffffffffffffffffcfffffffffffffffffffffffffcffcffffcfffffffcffff8f8f8fffffffcfffc8cfcffffcffffffffffffffffffffffffff
                                ff8fcff8fcfcffffffffffcf8ffffcc666696966676ccff8fffcfcffffcffcffffcf8cffffffcf8fcfcfff8ffcfcc8f8fffffffffffffffffcb67969696b6fffcffffcffffcffffcfffcfffff8fcfcfcffff8ffcffcf8fffffcfffffffffcffffffffffffffffffffffffffffffcffffffffc8cffffffffffffffffcffffcffffffffcfffcfcfccfcf8fcffffffffcc8ffffffffffffffffffffffffffffffff
                                ffcfcfcfffffff8fcf8fcfffcfcffc666966969666b6f8ffcf8fff8fcffffff8fcf8fcfcffffffcfffff8ffcf8f8fcfcfffcf8fffffffffcfc6666b69769cfcfffffffffcfffcffffffffcf8ffffffff8fffffcfcffffffffff8fffffffffffffffffffffffffffffffffffffffffffffcf8ffcfffffffffffffffffcffffffffffffffcfffc8fcf8ffcf8fffcfff8cfcf8fffffffffffffffffffffffffffff
                                cff8ffffffffffffffffff8ffcffffc76669666966bccfcffffcfcffffff8fffffcccf8ffcfffcfcfcfffffffcfcfcfffcf8fcfffffffffffc6b9697696dcfffcff8fffffffffffff8ffffffcfcff8ffffcfcff8f8fcffcfffcfffffffffffffffffffffffffffffffffffffffffffffffffcfcffffffffffffffffff8fffcffffcffcfffffcfcf8fcfffffcfffffccf8fffffffffffffffffffffffffffffff
                                f8fcfcf8fffffffcfcfcfffcfffcfc6669669696676c8fcf8fcffffcff8fffffcf8f8fcffffffff8ff8fffcfffc8c8cffffcfcfffffffffffc666b969696cffffffffffff8fff8fffffff8ffffffffcfcffff8fffcffffffcfcffffffffffff8ffffffffffffffffffffffffffffffff8fcfc8cfffffffffcffffff8cfcffcfffffffffffff8f8ffffcfcfffffffff8fffffcff8fffffffffffffffcffffffff
                                cfcfcffffffffffffffffffff8ffffc66696696666bcfcfffffcf8ffffffffcffcfccfcffffff8ffcffffffff8fcffcf8ffcf8ffffffffffffb7969b6b6dcffffffffffffffffffffffffffffffcffffff8fffcfcff8fcffff8fffffcfffffffffffffffffffffffffffffffffffffffffcfffcffffffffffffffffccfcffffffffcffffcfffcffcfff8ff8ffffffcccfcfcfffffffffffcffffffff8fffffff
                                fcf8ffcffcffffff8fffffcfffffc8cb6669669696b6f8fcfcffffcffffcfffff8fcf8ffcfffffffffffffffffcfc8fffcf8fcfcfffffffffc6669699697cfff8fffffffffffffffffffffffcfffff8fcffffffffcfffffffccfffc8c8fffffcfffffffffffffffffffffffffcfffffcfcf8fc8fffffffffffffffc8fcf8fffcfffffcccfffffcffcf8ffcffffffff8ffff8ffcfffffff8ffcffffffffffffff
                                8fcffcffffffffffffffffffffcfff6696669696676ccfcffff8ffff8fffcf8fffcf8fcffffffcfcfffffffcfcf8cfcffffcfcfffffffffffc696b97b966cffffffffff8ffffffffffffffcffffffffffffcffcf8ffcfff8fcfcffcccfcffffffffffffffffffffffffffffffcfffffffffcffffffffffffffffffcfcfffcffffffcff8fffffffff8ffcffffffffffcffffcfffffffffffcffffffffffffffff
                                fcfcff8fcffffffffffffffffffffcc66696969666bcfcff8fffcf8fffff8fcfcffcfcfffffffffff8ffffffffcfcf8fcffcf8fffcfffffffc6769b96979ffffffffffffffffffffffff8fffffff8ffcfffffffffffff8fffc8ff8cc8fcffcfffffffffffffffffffffffffcffcffffcf8ffcfcffffffffffffffff8fcfcfffffffffcfcffff8fcffcff8fcffff8cffcffffcfffffffffffffffffffffffffff
                                cfff8fffffffffffffffffffffffcf6b6669696796b8f8ffffcfffffffcffcfcfcffcfffcfffff8ffffffcf8fff8fcffff8fcfcffffffffffc69b699796bcfffffffffcffffffffffffffffffffffffff8fff8ffcff8fffffcfcffccccfcfffffffffcfffffffffffffffffff8ffcfffffcfff8ffffffffcffffffcff8ffcfcfffffff8ffcfffff8cf8ffffffffccfff8ff8fff8fffffffcffffffffffffffff
                                f8fcffcffcfffffffffffffffffffcc66966969666bcffcffffffcfffffcf8fcff8fffcfffffffffffffffffcfffcffcffffcfff8ffffff8fc669b9b9696cffffffffffffcfffffffffffffffffffffcffffffffffffffffff8ffc8f8f8fffffcffffffffffffffffffffffcffcc8c8ccffcfcfffffffcfcfcfffffcffffff8ffcfffcfcfffffcffcfcfcfcffff8c8ffffffffffcfffffffffffffffffffffff
                                fcffcffcffffffffffffffffffffff6766696969676cfcffcff8ffffcfffcfc8fcfffffffffffffcffffffcfffcf8fffffcff8fffffffffffcb6969799b9cffffffff8fffffffffffffffffff8fffffffffffffffcffffcfffffffcccffffcfffffffcffffffffffffffffffcc8fcfcf8f8fffc8fcfcff8f8fffffcffffcfcfccfffffffffffff8ff8fcf8ffffccfcffffffcfcfffffffcfff8fffffffffffff
                                ffcfffcffffffffffffffffffffffcc66696697696b6ffffffffffcfff8fcf8fcfffcffffffffffffffffffcf8fffcfffff8ffcfffffffccc6b979b99b97bcfffffffffcfff8ffffffffffffffffcfffffffcffcffffcfffcfcfc8fcfccffffffcffffffffffffffffffffcf8cfc8fcfcfcfcf8fcf8f8ffcfcfcf8fcfcfff8c8fcffff8cf8fffffcffcfffffff8fc8ffffcfff8fcfffff8fcfffffffffffffff
                                cff8ffffcfffffffffffffffffffffc6666969966b6cffcfffcfffffffff8fccfcfffffffffffffffffffff8fffffff8fffffcfffffffcccc69b999b99996cffcfffcffffcfffffffffffff8ffcfffff8ffffffffffffffff8fcfff8f8fffffffffffffffffffffffffffffcfc8fcf8fcfff8ffcfcfcffffcfffcff8ffffcfcccffffcfcffffcffffff8fcffffcfcfcfffffffcfffffffcffffffffffffcffff
                                f8ffcf8ffffffffffffffffffffffcc669669696967cffffffffcffffcfcfcfc8ffcfffffffffffffffff8ffcffffcffffffffffffffccc6bb99b9d9b9b9bccffcffffffffffffffffffffffcfffff8fffffffffff8ffcf8fcff8cffcffffff8fcfffffffffffffffffccf8c8fcfcfcf8f8fcfcf8fcfcfcfff8fcfcffffff8cf8cffff8cfcffffffcffffffffff8fcfffffff8ff8ffcffffffffffffffffcfff
                                ffcfffffcfffffffffffffffffffff676696979676b8ffffffffff8ffffffc8fcfffffffffffffffffffffffffffffffffffcfffffffcc67b9d9d99d999d7cc6fcfffcff8ffffcffffffffcfffcf8fffffffcfff8fffffffffcffffffcfffffcffffffffffffffffffc8cffcfcf8f8fcfcffcffcff8fffff8ffcf8fcfcffffc8fcfffcfcffffffffffcffffcffffffffffffffcffffffffcffffffffffcfffff
                                cfffcfcfffffffffffffffffffffffc66669696966bfffffffffffffff8fcffcf8fcffffffffffff8fffffcfcfffffffffffff8ffffcc6cb9b9d9d9d9d79b6cccc8ffffffffcffffffffffff8fffffffffffff8ffffffcfcffffffffffffc8fcfffffffffffffffffcccffcf8fccfcf8ffcfff8fcffcff8ffcfffcfffff8fcfcfcffffff8fffffffffffcffffffcffffff8fcfffcfffffffffffffffffff8fff
                                ffcffffffffffffffffffffffffffc666969699696bcfffffffffffffffffcf8fffffff8fffffffffffffffffffff8fcffff8fccccffc7b9d9d9d9d9d999bc7c6ccccffffffff8ffffffff8ffcfcfffffffcfffffffcffffffcfcfffffcfffffcffffffffffffffffcf8fcf8cf8fcfcfcff8fcff8ff8ffffffcfff8f8fffffffffffffffffffff8ffffffffffcffffffffcfff8fff8fffffffffffffff8fffff
                                ffffcffcffffffffffffffffffffffc766697969676ffffffffff8fffffcffcfcfcffffffffff8ffffffffffffffffcf8fffccccccc6bb9d9d91919d9d9d9b6bb6cccfcffcffcffcfffffffffffffcfffcfffffffffffff8ff8fcffc8ffffcf8ffffffffffffffc8cfffffcffcff8ffff8ffcffcffcffcfcf8fcfcffcfcfcfffffffffffcfffffffff8fcfff8ffcf8ffcfffffffffffcfffffffffffffffffff
                                cf8ffffffffffffffffffffcfffffc66696969976bbcfffffffffffcfffff8ffcfffffcffcfffffffffffff8ffffcfcffcfcfc6c76c79d9d9d19d1919d91b9bbbb67cccfcffffffffffffffcfcf8fffcffff8fffffffffcffffcfffcfcfcfffffffcffcfcfccfcfcf8fcfff8ffcffcf8ffcffffffcffffffffff8ffcf8fff8ffffffffffffffffffccfcf8ffffffcfcfffffcffffffffffffffcffffffffffff
                                fffffcffffffffffffffcf8ffcfcffc666969696966fffffffffcfcffcfffffffcfffffffff8ffffffffffffffffff8cfffcccb6bb9d9d9d19d19d9d19d9d9b99bb6b6ccfcff8ffffcf8fffffffffcffffffffcffffffff8fcfcff8fc8fffffcfc8fc8cc8c8c8c8fcfcff8ffcff8ffcffcf8cfcfffff8ff8fcfffff8fcf8ffcfcffffffffffffc8c8c8ffffffcfffff8fcf8fffffffffffff8ffffffffffffff
                                ffcfffff8fffffffffcffffcffff8f6b669699796b6cfffffff8f8fcff8fffcfffff8fcf8ffffcfffffffffffffffffcf8ff6c7b9bd9d9d9d919d19191919d9bd9bbb67c6fcffffff8ffcffffcffffffff8fcfffff8fffffffff8ffcffcc8cff8fcc8cfcccccfcfcf8f8ffffffcfcffffc8fff8fcfffffffff8cc8ffffcfcfcff8fffffffffc8cfccfcfcffffff8f8ffcf8fcfcfffffffffffcf8fffffffffff
                                ffffcffffffffffffff8fcffcf8ffcc69679699666bcffffffffcfcf8fffcffffffffffffcfcfffffffffffffffffcf8ffccc6b9b9d9d9d919d19d9d9d9dd9d9b9b9dbbcccfcfffcffffffffffffcf8ffffffffffffffffcfffffcffcf8cfc8fcfcffc8cf8cf8fcfffcfcfffffffff8fcfccfcccff8fffffffccfccccfff8f8cfffcffffff8fccc8cf8fffcfffffffcf8fcfcfff8fcfffffcffcffffffffffff
                                fcfffffffffffff8fcffffcffffcfc6766969979967cffffffffcffcfccfffffffffcf8fcfffffffcf8cffffffffffcffffcccbb9bd9d9d19d9d911911919d9d9d9d9b67c6fcfcffcfcffffffffffffffffcff8fffcffffff8fccff8fcccfcfff8fc8fcfccfcfcf8ccfcffcffcffffffc8f8ff8ffffffcfffc8f8cf8f8cffcfcfcffffffffccf8fcfcfcfffffffcffcffcf8f8fffcffffcff8fffcffffffffff
                                fffffffffffffffffffcfff8fcffcfc696696996b6b8fcffffcff8f8ff8ffffffffffcfffffcfffffccfcfffffff8ffcfcffc6bb9b9d9d9d19119d9d9d9d9d9db9bd9b9bcccfcfffffffffffffffffffcffffffffffffffffffcfcfffcf8cfcffcf8fc8cf8c8f8ffcf8fc8fc8fcf8fffcfcfcfcfcfffffffffccf8cccfc8ffc8ff8fcff8ff8fccc8cf8ff8ffcffffff8fcfcffcfff8fcffffffcffffffffffff
                                fcffffffffffffcffcff8fcfff8ffc666969979966bcfffcffffcfcfcfcfcffffff8ffcf8fff8fff8fcc8cfcfcfcffcfffccc76bb9d9d9d9dd9d9119191d9dd9dd9d9bbb6ccfffcffffcffffffff8ffffffffffffffffffffff8fffcf8cff8ffffcfcffc8ffcfcffffffcccffcfffcfcf8fffcfffffffffffcf8cfcf8fcfcfffcfff8cfffccf8fcf8ffcfffffffff8fff8f8fcffcfcfffffcfffffffffffffff
                                ffffff8fffffffffff8fffffcffcffc9669699696b6cfcfffffcffcfcff8fffffffff8ffffcffcffcccccccfcc6cc6cc6c6c6bb9b9dd9d19191919d9d19d9d9d9b9bd9b7bcfcffffffffffffffffffcfffffffffffffffffffcccffffcfcffcfcff8fc8ffcf8ffcfcffc8cf8f8fcfff8ffcfff8fcfffffffff8cf8fcf8fc8fcff8fcfc8fff8cfcfcfcffffcff8ffffffffffffffffffcffffffffcffffffffff
                                ffffffffffffffcf8fffcfcfffffcf66669699b9676cfffffcff8ff8f8ffcfffffffcffcffffcfccf68cc86c66c6bc6c6b66b6b69b99d9d9d9dd9d1919d919d9d9d9b9b6cfcfcffcffffffffffffffffffffffffffffffffff8ff8ffcf8fcff8cfffcffcf8fcfcfffffcccfcffcff8ffcff8ffffffcfffffffcfcfc8fcf8fcffcffc8fcffcffcf8fff8ffffffffffcffffcffffcff8fffff8fcfffffffffffff
                                ffffffcfffffffffffcfffff8fcffcc69697997969bcffcffffffcfcffcffcfffffffcfffffffc866c686f68c8c68c6c86c8666b6bb9b9b9d9d919d9d9dd9d9b9b9dbb7ccffcfcfffffffffff8fffffffffffffffffffcf8ffcfcfffccfcfcfcfcfffcffcfcf8fffff8c8cf8ffffffcff8ffffcfff8cffffff8f8fcfcfcffffffffccc8fffcf8ffcfcffcf8fcffffffcffffcfffffffffffcffffffffffffffc
                                ffffffffcffff8fffffffcffffffff6b669699969678ffffffcffcffcfcf8ffffff8fff8ffffcc66686c68cc6f6c8c86c86c8c86c66c6b6b9b9d9d9d9d99b9b9b9d9b6bcfcfcffffffffcf8fffffffffffffffffffffffffffcffffcf8ffffcf8ffcff8fff8ffcff8ffcfcffcf8ffcffffffcfff8fcf8ffffffffcf8f8fcf8ff8fff8fcfcff8ffff8fffffffffffffffffffffff8ffcffffc8ffffff8fffff8f
                                ffff8fcffffffffcffcffffcffcfcfc6696997996b6cfffcffff8fcf8fffffffffffcffcffff86c6c68ccc6f86f6f6c686c666c8ffcf6c6cb9b9b9d9d9bb9b6b69b9b6cffffcfcffffffffffcfffffffffffffffff8fcfffcff8fcffcffcff8cfcffffffcffcff8ffffcc8fffcccfffcffcffffffcc8cfffffcfffffcffffffffffcccf8ffffcfcfffcf8ffcffffffcfffffffffffffffffcfcfffffffffcfff
                                ffffffff8ffffffffffff8ffffffff6b669799b966bffffffffffffcfcf8fcffffffff8fffffc6668686ccf6f68c6ccc6c68c8cffcfcf6c6c6bb9b9b9bb6b6b6b6b69c6cfcfcfffcffff8fcffffcfffffffffff8fffff8ffffcfffcf8fc8fccfcffffffff8fcfcffffffcffc8cf8ffffffffff8fffcffcffffff8fcffff8ffffffff8fcffffcfff8fffffffffffffffffffffffffcffffcfc8ffff8fffff8cfc
                                ffffffcfffcfffffffcffffffffffcc69696996976b6fffcfcfcfcffffcfffffffff8ffcffcfc6c6686f68cc8fcf6f66f666cffc8fffcfccc6c6bbb9b6b66c66b69b6cffcfffcffffffffffffcfffff8fcfff8ffffcfcfcfffcffcfffcfcfcf8fcffffcfffcfffffffffffc8fc8ffffffffffffcf8fcf8fffffffffff8ffffffcffffcffffff8ffffcffcffffffffffff8fffffcffffffffcfcffffcfcffffff
                                ffffffffcffffffcffffffffffffffc666997999697fffffffffff8fcfffcfffffffffcffffcc66686c68f6fc6f6c6c666c6fcccfcfff8cccccc66b6b6b6c6cc66b66ccf66ffffffcffffffcf8fcffffcffffffffffffff8cff8ffffcc8ff8cfff8ffffcfcff8fffffcf8fcfcffcffcfffffcfffffcf8fffffffffffffffffffffffc8ffcfffffcffffffffcffffffffffffffffffffffff8cffffcf8fffcfcf
                                ffffcfffffffffffffffffffffffff67696999b966bcffcf8fcf8ffff8ffffffffffffffffcfc6666c68c6fcfc6f6f6c666cfc8fcffffffcf6fcccc6c6cc6c66c6b6cfcc66fcfffff8fffff8fcfffffff8fffffffffffcfffcffffcf8ffcfcfcffffffff8ffffffffc8ccf8f8cffffffffffff8fcf8ffcfcfff8fffffffffffcffffffffffffffff8ff8fffffcfcf8ffffffffffffffffffccf8ff8fffffffff
                                ffffff8fcffffffffffffffffffffcc66969799696bffffcfcffffcfffcf8fffffffffffffcf6b66c66c6f6f6fc6c6c6c76ccfcfffcffcfccf6f6f6ecc6c6c6c6b6bcff667cfffffffcffffffffffffffffffffffffffffffffffffcfcffcf8fcfcfff8ffcfcffffcccf8ffcff8fffffffff8fffffcffffffcfffffffffffcf8ffffffffffffcffcffcfffcfffffffffffffffffffffffff8cffffccfcffffff
                                ffff8fffffffffffffffffffffffffc696999b976b6cffffff8fffffcfffffffffffffffffccc66668c6f6f6f6fccf676b6cfffcfffff8ff6fccf7f6f6f6c6c6b69bf6fcfcfcffffcfffffcfcff8ffffffffffffcfcfffcfffffcff8fcf8fcfcfffffffcffffffff8f8cfcfffcfcffffff8ffffcfff8fcf8cffffcfffffff8fffffffffffffcf8cc8cfccffffffffffffffffffffffffffccf8fcfff8ffff8ff
                                ffffffffffffffffffffffffffffff6667699999697ffcf8fcffcfffffcffffffffffffcfffc6b66c6c6cccf6f6f66c66b9ccfcfcfffffcffcf6cfcf6c6c6c676b9bfcfffcffffffffffffffffffffffffffc8fcf8fffff8ffffffcfcfffcf8ff8fffffffcffffffccfcffffcfffffffccfcffff8fcfff8fcfcffff8fffcfcfcffffffffff8ccc8fcc8c8c8ffcfffffffffffffffff8ffff8cffff8fffffffff
                                ffffffcfffffffffffffffffffffffc7969979b966bcffffcfcfffcf8fffcfffffffffffffcfc6666c6f6f6cf6c6cc6cb96ff8c8ffffcfffffcfcfffcf7c6c6b6d69fcfcfc8cffffffffffffffffffffffcffffcffffcffffffcfff8fcff8fcffffcffffffffffcf8fcf8ffcf8ffffff8ccfcffffffcffffcff8fffffff8fcfff8fffffffcc8cfcc8fcfcfccffffcffcffcff8fffffffffcfcfcfffcfcffffff
                                ffffcffffffffffffffffffffffffcc669699997967fffffffffffffffcfffffffffffffffff6b666c6c6cc6f6fc6f7676fcccfcfcfffffffffffcfcfc6f76c7b9dbffcfcfffcfcffffffffffffffffffff8ffcf8fffffcffffff8fffffcfcfcffffffffffffff8cff8ffcfcffcffffccc8fffcfcff8fcf8f8fffcfffffcff8fffffffff8cfc8c8ccc8c8c8f8cfffffffffffcfcfffffff8fcff8ffcfffcffff
                                ffffffffffffffffffffffffffffff666969b99696b8fffcfcf8ffffcfffffffffffffffffffcb666c6f6f6f6c6c67c6bccffccf8ffffffffffcfcfcffc6c66b6999cffcfcffffffcffffffffffffffffffffcffffcffffffcffcffcffff8fff8ffffffcfffffcfccffcfff8cff8fff8cfcf8fffffffffffffcffffcffff8fffcffffffcf8ccfccf8fcfcfcccf8ff8fff8fccc8fcffffffcffffcffc8fffffff
                                ffffffffffffffffffffffffffffffc769979d9b6b6fffffffffffffffffffffffffff8fffffc6666c66f66c6f6c6c6b9ffcff8ffffffffffffffcff8ff6c7b6dbdbfcffffcfcfff8fcffff8fc8fffffffcfcfcfcfff8fffffffffffffffcf8ffffffcfffffff8c8fcffffcff8fffffcc8fcffff8fcff8ffcfffcf8ffcffffcfffffffffccf8c8fccc8c8cf8f8cffffffffc8cccf8fffffcf8ffcffcfcffffff
                                fffffcffffffffffffffffffffffffc69699999967bcffffffffffffffffffffffffffffffffc76666f66cc6c666c676bfffffcffffffffffffffcfcfcfc76b69999ffcfcffff8fffcfffffcfffffffff8ffff8ff8ffffcffcf8fffff8ffffffcffcfffffffffcccff8fcff8ffcfffcfcfcf8fffffffcfcffff8ffccff8fcffffffffff8f8cfcfc8f8fcf8cfcfcffcffcfc8cfcf8fcffff8ffff8ff8ff8fffff
                                fffffffffffffffffffffffffffffcc6669b9797966cfffffffffffffcfffffffffffccfffffc666666c6c666c66766b6fffcfffffffffffffffffcffcff6b6dbbddcfffffcfffffffffffcf8cfcfffcfffc8ffcffcfcffffffffffffffffcffffffffff8ffffcf8cfffffcfcfff8ffc8c8fcffffff8cc8fcffffcf8ffffff8fffffffcfcfc8f8cccfc8fcf8cf8fff8ffc8fccf8fcfffffcfcfffcffcfffffff
                                ffffffffffffffffffffffffffffff67969999b969bfffffffffffffffffffffffff8ff8ffffcb666c66f66c666c66b9bffffffffffffffffffffffc8fcfcbb9b99bcffcffffffffffffcffcffff8ffffcfffcff8fffffffffffffffffff8ffffcfffcfffffff8cfcf8fcffcf8fffffcffcfcffffcffcfc8ff8ff8fffcf8cffffffffff8f8ffcfcf8cfccf8fcfffcfcfcfccf8fcfff8fffcffffcfffffffffff
                                ffffffffffffffffffffffffffffffc669697999667cfffffffffffffffffffffffffcfcfcfcf966666c666667666b69bfffcffffffffffffffffcffffff6b979b99fffffcfffffffffff8fffcfffcfcff8fff8fffcffffffffffffcffcfffcf8ffffffffffffcfcf8fffff8fffcffffcfcf8ffffffc8cfcfcffffffffccfcffffffff8fcfc8fcf8fcf8fcfcf8fcf8ff8f8fcfcff8fffff8fffff8fffcffcfff
                                ffffffffffffffffffffffffffffffc696979d9b96bffffffffffffffffffffffffff8ffcffcc66666c66667666676d997ffffffffffffffcfffffffcffcb6db9db9fffffffffffffff8fffcffffffff8ffcfcffcffffffffffffffffffcc8cccccffffcffcffcf8fffccccfcccfcfcfff8ffcffffffc8cf8ffcffcf8f8cfff8ffffffcff8fcf8fcff8ff8ff8fcffffcfcfcf8fcffffcffcffcffcffffffffff
                                ffffffffffffffffffffffffffffff67696999969678ffffffffffffffffffffffffffcfffffc6b66666c666b66b69b9dbfcfffffffff8fcfffffffffffc6d9b99b6ffffffffffcfffffffffff8ffffffffffffffffffffffffffffffc8cccc8c8c8cffffcffffcfcfcc8c8cc8c8c8f8fffcfffcff8ffcf8fcfffffffcfc8ffffffff8fcfcfcfcff8ffcffcfffc8ffff8fcf8ffffcffffffcfffffcfcfffffff
                                ffffffffffffffffffffffffffffffc69699b9b96b6cfffffffffffffffffffffffffff8ffffc66666c6666666666b9d99fffffffff8ffcf8fcffffffcfc9b979b9fcfffffffffffffffffffcfffffcffc8c8c8fffffffffffffffff8cf8cf8cccccffff8fcf8f8ffc8ccccc8cfcfcfcfcffc8fcfffcf8ccff8ffffffc8ffcfffffffff8ff8fff8ffcfff8ffcfffcffcff8ffcf8fffffffcfffff8ff8fff8fff
                                ffffffffffffffffffffffffffffff6b69699997967fffffffffffffffffffffffffffffffffcb6666666c66b66b69b9d9fcfffffffcfcfcfffffffffff6d79b9dbffcfcfffffffffffffcfffffff8f8cfcfcfffffffffffffffff8cfccc8cfcf8fc8cfffffccfcffcfc8fcfcf8cf8fff8ffffcf8fffcfcf8ffcf8ffffcffffffffffcffcffcf8fffff8ffffffcffffffcfcfffffffffcfffcfffffffcffffff
                                ffffffffffffffffffffffffffffffc66979d79966bcffffffffffffffffffffffffffffffffc67666c666666666b69d9bccfcfffc8fc8cf8fffffffcfcf9b9d9b9fcfffcffffffcfffff8cfffffcfcfc8f8fffcfffffffffffffcfc8cf8fccfcfcfcf8fcfff8fffc8cfc8f8ccffffcffff8fffcffcff8fcfcfffffffff8ffcfffffff8ff8fffffcf8ffffcffffffcfffffffffffffcfffcfffffffcf8ffffff
                                ffffffffffffffffffffffffffffff679699999b96bfffffffffffffffffffffffffffcffffffb66b666666b66b69b99d6fc8fff8fcccfcfcfcffffcffcfb9d9d9bcfccffffffcf8fcffcfcfffff8cf8ffcffcffffffffffffff8f8fcf8fcff8f8f8fcfffffffcfffff8fccf8ff8fff8fcfffffffff8fc8ffffcfcfff8fffffffffffffcfff8fcffffffffffcffcffff8ff8fffffffffffff8fffcffffcfffff
                                ffffffffffffffffffffffffffffffc66969b996967cfffffffffffffffffffffffffff8ffffc696666c666666666979dccfcfcffcfcc8c8ffffffffcffcb9d9b9bcffffcffffffcffff8f8ffffffcfcfcffffff8fffffffffffffcf8fcfffffcfcf8ff8fcfcfffffcffff8ffcffcfffff8fcffff8ffcffc8fffffffffffffffffff8fff8fffff8fffffcffff8fffffffffffffcfffffffcfffffffcfcffffff
                                ffffffffffffffffffffffffffffff6b69699799676cffffffffffffffffffffffffffffffcfcb6666666b66b69b9b9d9ccccfffcfcccccfcff8fffff8ff9d9d9d9fcfcffffff8ff8ffcfcfffffcffff8ff8ff8ffffffffffffcf8ffcfff8fcffffffcffffcf8ffcfcfcfffffff8ff8fcffffffffffcf8fffcf8ff8ffffffcffffffffcffcfcfcfffcfffffc8fcffcffffffffffffffffffffffffffff8fffff
                                ffffffffffffffffffffffffffffffc9697999b96b6ffffffffffffffffffffffffffffff8fff696666666666b6699d99cf8fcfffc8cc8ccf8fffffffcfc9d9d99bcffffcfffffcffff8ffcffffff8fffffffffffffffffffffffff8ff8ffff8f8fcff8fcffcfffccfcff8fcf8fffffff8fcffffffcfcfcf8fffffffffffffffffffcfffffff8fcfffffffcfcfcffffffcffcffffffcffcfcffffffffffcffff
            `)
        }
        
        if (player1.y >= 3300) {
            scene.setBackgroundImage(img`
                eceeceeeceeceececcffeeeeeeeceeceeceecececececececececececececececcfcfcfcfcfcfcfcfcfcfcfccfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcccccfccfcfccfcfccfcfccfccfcfccfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcf
                                ceaeeaeceaeeceeceefceaeaeceeaeeceeaeeceeceeceeceeceeeceeceececececefefcfefcfcfcfcfcfcfcfccfccfcfcfcfcfcfccfcfccfccfccfccfcfccfcffcfcfcfccfcfccfcfccfcfcfccfcfececcfccfccfccfccfccfccfccfccfcfccfccfccfccfccfccfccfccfcfccfcfccfcfcfcfccfccfcfcfcfcfcfcfcfcfcfccfccfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfc
                                eeeeeeeaeeeaecaeccfeceeeeeaeeeaeeceeceaeeaeeaeeaeeaeceaeeaeeaeeecfcfccfccfcefcfccfcfccfcfcfcfccfccfcfcfcfcfccfcfcfcfcfcfccfcfccccfcccfcfcfccfcfccfcfccfcfcfceceeeecfcfcfcfcfcfcfcfcfcfcfcfccfcfcfccfccfcfcfcfccfccfcfccfcfccfcfcfccfcfccfcfccfccfccfcfcfcfccfcfcfcfccfccfccfccfccfccfccfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcf
                                aeaeaeceeceeeeececffeeeaeeeeeeeeaeeaeeeeeeeceeeeeeeeaeeeeeeeeeaeecefcfcfccfcfccfcfccfcfccfecfcfefcfccfccfccfcfccfccfccfcfccfcfcfcfcfccfccfcfcfcfcfccfcfcceceeeeeeeccfccfccfccfccfccfccfccfcfccfccfcfcfcfccfccfcfcfcfcfcfcfcfcfccfcfcfcfcfccf8fcfcfcfccfcfcfcfcfcfccfcfcfcfccfcfcfcfcfcfcfccfc8fccfccfc8fccfccfccfccfccfcfcfcfcfc
                                eeececececaeacffffcfaeeeeaeaeaeeeeeeeeaeaeeaeaeaeaeeeeeaeaeaeeececfccfecfcfccfccfccfcccfccfccfcccfccfccfcfccfccfccfcfccccfcccfcfccfcfccfccfcccccfcfcfceeeeeeeeeeaeefccfcfccfccfccfccfccfccfccfcfccfccfccfccfcfccfccfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfccfcfcfc8fccfcf8cfc8fcfcf8cfcfcfcfcf8fcfcfcfcf8fcf8fcfcf8cfc8fc8fc
                                ceaecfffceeeeccfcffceeaeeeeeeeeaeeaeaeeeeeeeeeeeeeeaeaeeeeeeeaeecccfccfccfcfccfccfccfcfcfccfccfcfccfccfcccfcccfccfcccfcfccfcfcccfcccfcfccfccfcfccccccfceeee2a2a22ececfcccfccfccfccfccfccfccfccccfccfccfccfccfcfccfccf8fcfcfccfcfccfcfcfcccfcfcccfcfcfcfccfccfcfcfc8fcfccfcf8fcfcfcfccfcfcfc8fcfcfcfcfcfcfcfcfcfccfccfcfcfcfcfcfc
                                eeeeecfcfeaeaefcfcffeeeeaeeaeeeeeeeeeeeeaeaeeeaeeaeeeeeeaeeaeeeaececfccfccccfcefccfccfcccfccfccccfcccfccfcccfcccfccfccccfccfccfccfcfcccfccfccfcfcfcfecfeea2e2e2eaeefccfcfccfccfccfccfccfccfccfcfccfccfcfccfcccfcfcfccfcfcfcfcfc8fcfccfcfcf8cfcfcfcfc8fcf8cfcfcf8cfcfccfcfcfccfcfcfcfc8fcfcfcfccfccfccfccfc8fccfcfcfcfcfcfcfccfcf
                                aeaecfffeeececfcffcfaeeeeeeeeaeeaeaeeaeeeeeeaeeeeeeeaeeeeeeeeaeeefcfecfccfefccfccfccfecfccfcccfcfccfcccfccfccfccccfccfcfccfccccfccccfcccfcccfcccccfccfeee2a2e2a2e2ccfccccfccfccfccfccfccfcccfcccfccfccccfccfcfcccfcfccfcccfcfcfcfccfcfccfcfcfcccfcfcccccfccccfcfcfccfcfcfccfcfccfccfcfccfcfccfcf8fcfccfc8fccfcfcfcf8cfc8fccfcfcc
                                eeeecefccceaeccfcfffeeaeaeeaeeeeeeeeeeeaeea2eeeaeeaeeeaeeaeeeeecececcfecfcccfcccfcceccfccccfcfccccccfccccfccfccfcfccccfccfccfcfecfefecfecfefcefefecefeceaeeea4ebebeecfcfccfcccccfcccfccccfcfccfccfccfcfccfcfccfcfcccfccfcfccfccfcfcfcfcfcccfcffcfcfcfcfcccfcfcfcfcfcfccfcfcfccfccfcfccfcfccfcfcfccfcf8fcfcfcfccfc8fcfcfcfcfcfcfc
                                ceaecfefeeeeaefcfcfccee2eeeeeea2aeea2ce2c2ceeaeeeeeeee2ceeeaeeaeecfeeccfecfcccfcccfcfcccfccccccfcfcfecfcfcccccfcccfcfcccfccccecceecececececeecececececeeeee2eeeeeeececececccfcfcccfcccfccccccfccfceceecefcccfccfcfcfcfcfccfc8fcfccfcfcfcf8fcfcccfcfcccccfccccfcfcccfcfccf8cfcfcfcf8cfcfccfcfc8fcfccfcfcfcfcfcf8cfccfccfccfcf8cfc
                                eeeeeececeaeeccfcfffaeeaeaeea2ceeeeeeeaeeceeeeeea2c2aec2aee2c2eeaeeeeeeccccfefccfcccccfccfefcfcccccccfceccfcfcccfccccfcfcefefeceecececeeceeaeececececececeaeceeaeececececefccccfcccfcccfcfcfcccccceceececcfccfcccfccfcccfcfcfcfcfccfccf8fcfcfcfcf8fcffcfcfcfcfcfcfccfcf8cfccfc8fccfcfccfcf8cfcfccfcfccfccfccfcfcfcfcfcfcfc8fcfcf
                                aeaeaeeeeeeaecfcfcfceeeeeee2cececaeeaeeea2cea2a2eeaeeeeceeaeeaeee2aeeaeecfecfccfeccfccccccccccefcfefcccfccccccfcefcfecceccececeeaeeeeeceeaeeceeaeeeeeceeaeeeeaeeeeeeceececccfcccfcccfcccccccfcfcfeceeaeecfcfcfcfccfccfcfc8cfcccfcffcfcfcfccfcfccfcfcffcfcfcfcfcfccfccfcfcfcfcfcfcfcfcfcf8cfcfccfcfc8fccfccfccfcfcfccfccf8fccfccf
                                ee2ee2aea2eeaecfcfffeaea2caeeaefcfeeeeeeeea2eeeceeeeea2eee2ceeeeaeeeaeececfeccfeccfccfefcfcfcfcccccccfcccfcfeccfccccfcfceceeceaeeecaeceaeeececeeecaeceaeeeceeeeceaececeececccfeccfeccfcfcfcccccecfeaeeeafcccfccfcfcfccfcfcfcfcfcfcff8ffcffcfcfccfcfcfcfcfcfcfcfcfcfcfcccfcfccfccfccfccfcfcfccfcfccfcfcfcfcf8fccfccfccf8cfcfcfcfc
                                aeaeaee2eea2eefefcfceeeeee2ceeafefceeaea2ceeceeeaeea2eceaeeea2a2eeaeeeaececfececfcececccecccccccfccfcccfceccfceccfccccceceeaeeeeceeeeeeeeceeeaeceeeeeeeeceeaeceeceeceeaececfecfcccfccceccefcfcfcfeeeeeeeccfccfccfccfcfccfccfccfccf8ffcffcfcfcf8fcfcfcfcfcfcfcfcfccfccfcfcccfccfcfcfcf8cfccfcfcfcfcfccfccf8cfcfccf8cfcfcfccfcfccf
                                e2e2e2eee2eeeeececefea2aeeeeaeeefeece2eeceaeeea2ee2eeee2eee2eeeeeeeeaeeeefeeefeceefefefefefcefceccccefececeeeccfecfcfcfeeceeeeceeaeeceaeeeaeeeeceaecaecceaececaeeceeaeeececccccfcccfefcfcfcceccecceceaeecfcfcfcfcfccf8fcfcfcfcfcfcffcfc8fcfcfcfcfcf8ffcfcffcffcfcfcfcfccffcfcfcfccf8cfccfcfccfccfc8fccf8cfccfcfccfcfccfcfcfccfcc
                                e2ee2ea2ea2e2a2eeee2eeee2ceeeee2ee2eeeaecfeee2eee2cee2ae2a2a2e2ea2cefecce2eee2ee2e2e2e2eeccccccfcfefcccfeeeeaeeefccecfcce2aeeaeeeeeceeeeceeccccecfceccceccccceccceceeeceeaefefecefeccecececefefcfeceeeeafccfcfffcfffcff8fff8ff8ffffcffcfcf8ffffff8ffcffff8fffcfcfcccfcfcccfccfccf8cfcfcfcfcfccfc8fcfcfcfcfcfccfcfcfcfcfccfcfcfcf
                                e2b2e24224e2b2e2e2b2e2eee2a2cea2e2a2eeeefeffaea2ea22a2e2e2e2e2a2eaefcfeeeb22b2e2e2b2e4a2aeefcfeccccccfeeea2e2eaecfcfcceeaee2eeeeaeeeaeeeeceecfefcecfcfccfcfefcfefeaeeeeaeeeeeaeeeeeeeceeeceeceaeeeea2aeecfcffcf8ff8ff8ffcf8ffcff8fff8fcfccff8f8ffffff8f8fffcfffccfcfcccfcfcfccfccfccfccfccccfcfcfcfcfccfccfcfccfccfc8fcfccfccfcc
                                2e242b2e4e242e4e4e2beeeaeeecee2e2e2e2eaefcfee4e42e4e2e4e2b2e4e2e4eeecefe2e2b2e4e4e2e22e4eefeccccfecfecceeea2aeeefeccefcee2eaeeaeeeceeceaeaececcccfcccefcceccccccceeeaeeeeeaeeeeaeaeaeeeaeeeaeeeeaeeeeeeecffcffffcffcfffcffffcffcff8fffcf8fcffffcf8fcfffffcff8ff8fcccfcfcfcccfcfcfcfccfccfcfcfccfcccfcfccfcfccfcf8fcfccfcfccf8cfc
                                e24e2242a24e2e22b2e2e2eeeceecee2b2e2ceeefcfeaeaeee2b2e2b2e242e42b2efefeea2eee2a2a24e4b2aeececfeecefecefee2eee2eeecefeceeee2eaeeccceccecceccccfcfcccfccccfcfcfcfefeaeeeeaeeeea2eeeeeeea2eeae2ea2eeea2ceaecfff8fcff8ff8fff8fcff8ff8ffcf8fccfcfcfffffff8fcfff8fffcfcfcfcfcccfcfccfccfcfccfcfcfccfcfcfccfcfcfccfcfccfccfcfccfcfcfcfc
                                2e232b2e242e42b2242b2aeeeeceeee2e2b2e2cefccfccfecee24e2242e4e22e2e2e2e2e2b2eeeee2e2b22e2eeeeeeeeeeeeeeeeaeea2aeeeeeeeeee2ae2eecfecccccccfcefccccfcccfcfcccccccccceeeea2eeea2eceeea2eeeeeeeeeeeea2eeeeeeefcfffff8fffffcf8fff8fffffcffffcfcf8ff8f8fcf8fff8ffffcffcccfcccfcfcfcfc8fcccfcfccfccfcfccfcfccfccfcfcfcfccfccfcfccfccfccf
                                42b22e242e42e24e2b2242eeececeee3242e2ceecfccfcefcee2b24e2b224e424e4e4a2b2ebeeceee422e2b24e2ea2eaeea2a2a2ee2eeeeea2e2a2e2e2eaecfccfcffcfecfccefcecfcccccfcfcfcfefceceeeea2eeeeea2eeea2cea2eaeeaeeeea2aeeafcfcf8ffcf8fcffffcfffcf8fff8fcfcfcffffffff8ffcff8fcff8fcfccfcfcfccccfcfcfcfccfcfcfc8fcfccfcfccfccfcccf8fcfcfccfcf8fccfcc
                                e22e424e42e42b242e4e2e2eeeeef22e2b2b2eeefcfefcfefe2e24e424e2b22b24a2e4eeeeeeeeee2ae4e24e2ae2eee2e2eeeeea2aeaee2a2ea2ee2a2e2eeecfcfceeeefeeeecefcccfcfcccccceccccceea2aeeeaea2eeeaeeeee2ece2ee2eeeeeeeeeecfffffcffffff8fcff8fffffcfffff8fc8fcf8fcffffff8ffff8fffcfcfcfcccfcfccfcccfcfccfcccfccccfccfcfccfccf8fcccfccfcfc8cfcfcfcf
                                b2b2b242b24242eeb2e24e2eeee2eb242422b2eeeeeeeeeeee24e22b2e242e42b2eeeeeeeececcece242e42a42beb2aeb2a2b2eeeee2eaeeeeee2b2eeeb2aeecceceeee2eeeeeeeefecccfcfcfcfcfcfeceeeeeeee2ecea2ee2aeeaeeeaeeaeea2aeeaeecfcf8ff8f8f8ffcf8fcf8c8ff8fcf8fcfcffffff8fcf8fffcffffcfccfcccfcfcfcfccfcfcccfccfcfcfcfcfcfc8cfcfcfcfcfcfcfccfcfcfccfccfc
                                ceee2e4224e2b2e2ee2b24a2222e22b2e2b2242e22e2e2e22e2b2b2242b242e2eeecececcecceceee2b24a24eeeeceee2beeea2ae2aee2eea2ebeeee2b2eeeececeee2a4e2a2eaeccfcfceccccccccccceaeeea2aeeae2eeeaee2ee2a2ee2ee2eeee2eeafffff8ffffffcfcfccfcfcfccfcfffcfcfcf8fcfcf8ffcfff8f8ff8fccfcfcccfcccfccfccfccfccfcccfcfcc8fcfccfccfcccfcccfc8cfccfccfccf
                                cffee4e4e242e4eb2be2e2424e42b242424e4e24e242e24e4e42e24ee42e2b2b2bececcececeeeee2e2e24e2beefcfebe2ee2eeeeeeeaeeeebeea2abeaeb2aecfeceae2b2b2eb2cfececcfcfecfccfcefeeea2eeeeeeeaeee2eeeeeeeeeeeeaeea2ceaeecfcfcffcfcffff8cfcf8cfcf8cff8fcfc8ffffff8fcfcff8ffffcffcfcfccfcfccfccfccfcfcccfccfcfcccfcfccfcfc8fccfccfcfcfcfcfccfccfcc
                                fcfee23242b242e2e2ee42e422e42b2beb2b2b2b2e2b242e2b2b2be4a2b4e4e4eecccfcceceeeee2e42b2e42eefceceeb2beaeea2a2eeea2ceceeceeeeeecccecfeeeeeeeeeeececefcecececfececefeae2eeaeea2eeeea2c2a2e2a22e2a22e2eea2eecfcfff8ff8fc8ccfcf8cfccfcfcffffc8fcfcf8ffcfcff8ffcf8ff8fcfccfccfccfcfccfccfccfccfccfcfcfcccfccfccfccfcfcfccfcfcccfccfcfcf
                                cfcfb22e2424e2324e424242e44eeeeeeeeeeeee24242e42beeefeceefecececccfcfccfcfe2e2e24a2424a2b2fcffe2eb2e2a2eeeea2eeaeefcfcfcfcfccfefcccee2e2eeeeeeeeceeceeceeeceeceeeeaeeee2eeeae2eeeee2e2a2ee2b2eeaeeeeeaeecff8ffccfcfcfcf8fffff8cf6f8fcffcfcffffcfcf8cfffffffcfffccfccfccfccccfccfccfcccccfccccfcfcfcfccfccfccfcccfccfccfccfcfccfc
                                fcfee4b24e24242e2424e2e42b2eefcfefcfefee2b2e42b2eefccfcfccfcffcfcfcccfcceee32b2b2242e242eeefe2ae22eaeeeea2eebeeeeccccececccefecceefeea2a2e22e2ae2aeeeeeeaeeeeeeae2eea2ceaee2caee2a2e2b242b22e224e2a2eeeaffcffff8cf8cf8cffcf8ffcfccfff8fccf8f8fff8fcffcf8f8ff8fcfcfcfccfccfcfcfccfcccfcfccfcfccccfcccfccfccfccfcfcfccfcfcfcccfccc
                                ffef322424b2b24242b2242422beeecefceceeee2424e42beccfcccfcfccccfcfcfcfcfcfe2e22424e2b24e42eeeee24b242e2a2ebeeea2aefefcfcfcefccccefceeeee2eea2ae2eeeea2ae2ee2a2a2eeae2eea2eeaee2eae2e4e2e2e2e2b2b2eeeaeeeeccfcc8fcfcfcfcfcffffcfc8fcf8ffcfccffff8fcfcf8fffffcffffcfcccfccfccfccccccfcccccfccfcfcfccfcfcfccfcfcfccfccfccfcccfcfcfcf
                                beb2e4e4e22422b24224242e422eefeceeefeee2e4e242b2eefefefecefefefeecefeceeeee2b2e2b242e2b2b2e2e2b22e2b2eeeeeae2eeeeccecececfceceeceeee2e2e22ee2eeee2e2ee2a2ae2eee2e2eaeeeee2e2cee2ee2e2b2e4e4e2e2ea2e2ea2ccfcfcfcfccfccfcffcfcffcfcfcffcf8fcfcffffcfcffcf8fff8fcfccfcfccfccfccfcceceeeececfccfcfcfccfcccfcfccfcfccfccfccfcfcfcccfc
                                242442423242b242b24e42b24e42e2e2e2e42e2b2232b24242b24e4e2e4e2b2e2ee4e2ee2e242424eeeee22e22e2e22e42b2eeeaeeeeaecececececececeeee2e2ee2a2be2b2e2e2a2ee2a2e2e2e22ea2ee2e2a2aeea2eae2eb2e2ee2a2ee2b2eeae2eeeecccf8cfcfcceecfff8fffcfcffcffcfcf8ff8ff8fcf8fffcf8fff8fccfccfccccfcccceeaececccfcfccccfcfccfcfccfccccfccfccfccfcccfcfcc
                                e4b2b2b24e42442424242b24242b2442b24a4242b24242e4e424e2b242b24244b242b242e42b2e4a2eeeeee2e4242b24e224e2eeeaeeceeaeeceeceeceecee2ee2a2e2e22e2e2b2e2e2a22e2e2e2b22e2eeaeeeee2eeee2ee2eeae2beee2beee224ea2eecfcfcfccfceeb4efcfffcfeb7bffcf8cfcffcffcfcfcffcfffffcffcfccfcccfcfccfceaeeaeaeecfccfcfccfccfcccfccfcfccfccfcfcfccfccfccf
                                3242424242b2b2b2b2b2424e4b242b2424242b2424e4e42b24e23224e242b2e242b224e42b224242beefee2b2e2b22424e4e2aeeeeeceeceeceeceeceaeee2a2e2e2e42b2b2b22e2b2e4e4e4e2b2ee4eb2e2ee2aeea2bea2bea2e2ee2e2e2e2ebe2e2e2eecfccf8fcfe4ebeffcffffee4eeffcfcfcf8ffff8fcf8ff8f8fff8fcfcccfcfcccfcccceceececfccfccfcfccfccfcfcfccfcfccfcfccccfcfcfccfc
                                eb4a4b2b242424242424e4242242424e4b2424e4e4242b242b2424e232e42442b224e242b24e4e2b2eeeee2e2e2e4e2e22b2b2eeeeeeeeeeeeeeeeeeeeeeeee2b2b2ee2ee2e2ee4e2e2e2e2a2e2e2e2e2aeeaeeee2eee2eeee2eeb2e2b2ee2e22e2b2eeeefcffcffffeb4e4fffcfcfebebfcffcfc8fff8ffcfcffcffffcf8ffccfcfcccfcfccfccfccfcfccfccfccccfccfccfcccfccccfccfccffccfcccfccf
                                cfffee424e42b24e4e4242b2b2b2b242242b24242b2b242b242b2b424e424e2424e42b24224242b2eeeeeeeeeb2e2b2b2e22e2e2a2a2a2a2a2a2a2a2ae2ae2aeee2eb2a2ee2b2ea2ea2be2e2eb2be2a2beeeeeaeeaecaecaecee22b24e2b24b2b242242eecffffcfcfee4becfff8ffee4eeffcfcfcfcfff8fcf8ff8fcfffffcfccfccfccccfccfccfceccfccfccfcfccfccfccfcfccfcfcfccfcccfccfcfcfcc
                                fccfeb2b24b242b242b2b242424244e32b242b2b24242b242eeeeeee22b242b242424242b2b2b24242ee2a2e22b2e2e2e4a2e4e2e2ee2ee2eeee2eee2ea2ee2e2ae2eeee2beee2ee2ee2aeeb2ee2eb2eeeeaeeececeeceeeeecea42e24e2422242e2b2e2cefcf8fffce4e4efcfffffeb4effcfcfccfff8ffcfcfcffff8f8fcfcfccfccfcfccfccfcecfcfccfcfccfcfccfccfccfccfcfcccfccfcfcfccfcccfc
                                ffcfceb4b224e4242424244e42b24242424e424242b2424e42e2e2eee42b2424e4e42b24242424e3ee2aee2aee2b2b2e2e2e4e2b2e2b2e4a2e2bea2beeee2ae4e2ee2b2ee2e2ae2be2be2e2ee2ae2eeeaeeeeceececeececeeee2e2b2e2b2e4e2b2422b2efffffcfcfeeebeffcfcffebebfeff8fcfcffffcf8fcff8ffffffffccfccfccccfccfccfcfcccfccccfccfcfccfccfccfccccfcfcfccfcccfccfcfcc
                                ccececffefb242b4b2b42b242b24e42b24242b24b244e424b2eeefeeea424e42b22b242b2e4ee22e2ae2eee42b22e22b2b2b22a2e4e2b2ee4ae2eeee2a2be2ee2b2be2e2be2b2ee2ee2ee2b2ae2eb2a2e2eeeeeeeeeeeeeeee2e2b224242e242e24e2b2becfcffffffe4e2bfffff8fe4e4ffffcfc8f8fcffcfcf8ffcf8fcf8fcfcfccfcfccfccfccccfcfccfcfcfccccfccfccfccfcfccfcccfccfcfccfcccfc
                                eeeaeffffe2b42424242424b24424b244e4b244242b242b22b2cfcfce2b242b242424e424b22bea2e2eee2b2b2e42b242242b24e2b2e2b2b2eececec2b2e2b2b2ee2e2b2e2b2e2b2b2b2b2ee2e4e2e4e2ee2a22a222a222a2e2a224e2b2e42a242e2b2e2ecffcf8fcfee4b2fcfcfffcbebfcfcfcfcffff8fcf8ffcfffff8fffccccfccccfccfccfcfccfccfcccccfcfccfccfccfccfcfccfcfccfcccfccfcfcc
                                eeeebfefefe42b24e42b44242b24242b242424e4b242b24442befcefe324e424e4b242b242ee22ebeb2eb2e242b2b2b2bee2e2e242b4242e4aeeceece4b2b242b24b2b2b2b24b24e24e2e4e4b2b2b2e4b2b24e42b2b24b242b24e4e2b242b242b24224e4cffcfffffce2b2effff8ffeebeffffcfcfcf8fff8fccff8f8fffcfcfcfccfcfccfcccfccfcfcfccfcffccfcfccfccfccfccccfccccfccfcfccfcccfc
                                ceceefffff4b244232424a42424b2b242b24b24224e424e2b4eeeffee2b242b24242b244a42beb2e2ee2ee2be2e2e2e2e24a24e2b242b2b24eeefefe2e2424e42b242424424e24e4b24b2b22e24e24b2242b24a2424e22b2e242b242e2b22e4e2e2be2eeeefffcfcffee4ebfcfffcffcfefcf8fc8cffffcfcfcfcffffcf8fffcfcfccccfccfcfecfcfcfcfccfecfccccfccfccfccfcfccfcfccfccccfccfcccf
                                cfcfcffcfee42b24e42b242b2b24244244242b232424b244242ee4b2e44e4424b24244242b22e2b2b2b24322b24b244e4b244a424b2b2424b22e4a2b232b242b242b24e2b2b242322b2242b2b2b2b22b2b22b242eb24b22b2b2b2eeb2e2eb2e2b2b2e42becfcff8ffcee2e4ffcffffcfffffffcffcfcffffcfcff8fcfffff8fcceaecfcceceeaefcfcfcfcfcccfccfcfccfccfccfcccfccfcfccfcfccfccfcfc
                                fffcffffff32b244244242442442b24b2b2b2442b4e424b2b2b42b24b242b24242b42b2b24e2b2e2442b22b244242b24224e242b2b2beeb22b4242442e42b2b24e424e424242b2e424b2beb2b2b2eb24e2b24e2b24a2eb24e4e2b22b2b2b2eb2ee2e4eb2efffcfffffe4e4efcff8ffffcf8fcf8cfcff8f8fcf8fcfff8f8ffffceb2beecececeecfcffcffccfcfccfcccfccfccfccfcfcfccccfccccfccfccccc
                                fcffcfcfcf4e442b2b2b2b24b2442424244242b24242b224242424242b2424b2b242424242b2ee4a2b2442442b2b242b2b242b242eceee24424b242beeeb2be4a2b242b2b2e4242b2b2eeeecececeee42b2e4a4eee2ee2ceea2eeb2ee2bee2a2b2b2e2eeecfcffcfcfe4eebffcffcf8fffff8ffcfc8fffff8fcffcfffffcfcffbeb2cccceceeaeffcffcfcfcccfccfcfccfccfccfcccccfcfccfcfccfcccfcfc
                                ffffffffff4b2b242424442424b2b4b242b2b4244e42444e42b232b2424b242424e4e4e4b22b2b2e4242b2e424242b24242b242bbeefcfb2b2424b242a2eeeeee42b24242442b2424e4cecefcccfee2b2e4e2e2b2beeaeea2eea2eb2be2e2b2ee2ee4b2becfffff8ffe2b2eefff8fffcf8fcffcfcffcffcfcfccff8f8fff8ffce4beefefceeeeccff8fffccfcfccfccccfccccfccfcfcfcccfcccfcfccfccfcc
                                e4b4bfcfcf42424b24b242b4b2242244b2442442b24b2b243244244e4b242b24e424232242b24242b4e42442b2b24244e42442b24aecfe242b2b224aeeeeeb2b2eb24e32b2b24e4b2b2eeefcffffee42b2432324b2e2eb2ebe2e4e2e2e2b2e42b24e2e4eefccc8cfcfb2e4efcffff8fffffcfcfc8cff8fffcf8fcffffcf8ffcfbe2becfcfeaeecfcfff8ffccccfcccfcfccfcfcccccfcccfccfcfccccfccfccf
                                424e4ffffea4b242b242b42244b23422442b24a42424242424e2b242424b244242b2424b2442b2b424232b244244e4e232b2b244eeefeebe424244242e2e2e2ee242b224242423224244b2fffcffeeb24b224e4b2eaeeeee2aee32b4323232b22e2b2e2cccfcfccfcf2e4ebffcf8ffcf8f8fc8fcfcffff8fcfcff8fcfffffcffe3e4cfcceeeeaefff8ffcfcfcfccfcccccfccccfcfcccfccfcccccfcfccfccfc
                                b4a4bfcfff42b2b42b44232b24242b4b2b24b2424b2b2b2b243244b2324242b2b424b2424e4244242b24424e4b2424442424242b2beeee242b2b2b24e42b42b24b2424e4e4b2b24e4e42ebefcffcfe23244b2424b2ee2a2aee2e2b224e4242e4e424e4aeefcccfccfeee4e2fcfffcffffffcfcfcfcf8ffff8fcfcfff8f8fcffeee4aefcfceceeccfcffcfcfcccfccfcfcfccfcfcccfcfccfccfcfcccccfccccc
                                242b2fffcfbb4b2b4b2b244232b2424a4b4a42b4242442442b2424242b2b244242b242b242b42b24424e4e42424e4b2b24b24b2442e2ee4e424242423242b24424e4b2423224242422e42efffcffee4e42242b2b2e2be2ee2eee424b242b2b2e4aee2b2efccfcfcfffe4eebfffcff8f8fcfcfcfcf8ffcfcfcfcf8f8fffffffcfb4e4ccfcfeaeeefff8fff8cfcfccfcccfccccccfcfcccfcccfcccfcfcfccfcfc
                                e424befffeeeeffcffeee4a42442b2b2feef2b24b24b24b24244b2b244244a42b244b244b242424b2b424232b244242442442442b24b24232b24b2b24e42442b2b2242b242b24e4a2b2ebefcfffffe32b4b2442444b24b44b43232b24b242eeeeeeeeeeecfcfffcfcfeb24eefcffffffff8fcfc8fcfcffff8fcfffffcf8fcfffbe3ecfeceeeeaecfff8ffcfcccfcccfcccfcfcfccccfcccfcccfcccfcccfcccf
                                42b4efcfffcefcffcfcf4244e42324eefefee4b242424242b4224244e4b242442b242b2b24b2b424242b424e44e32b24a42b2b242b244b2e42424424e4a42b24244b242b242b2424e4e4eeffcfcfce242242b2b2b224242242242424242b42eeeeeeb2eeccffcffcfee2eeefffcf8fcf8ffcf8fccfcff8ffcfc8fcf8ffff8fcfeaeeecfeceeeecfcfcffcfccfcccfccfcfcccfccfcfccfccfcfccfcccfcccfcc
                                e42b4ffcffeecfcffcfe2b24232442befefee232b42b4b2424b2b42b2242b2b2b4b2b442b24424b2b4242b242b224242424242b4424e24424b2b2b242424b24b2b22b2442b424b2b2eeeaeffffffeeb2b4b2442424b2b2b42b4e4b2b2b24ebeeeaeeebeefefcfcffffeb24bfcfffff8ffcfcfccfcff8fffcf8ffcffff8fffffcfecfeeececeaecff8ff8fcfccfcfccfccccfcccfccccfccfccccfccfccfcfccf
                                4b2b4fffcfceeffffcee4232b24e232e2eee2b442b2424232424242432b244242b2fefcf442b242424b2444b244e4b2b4e4b2424b2324b2b2442444b2b42424242442b2b242b24eeeeaeeefcfcfcfe4424242b24b242442b24232244244242eeeeee2e2eccfff8fcfce2ee2ffcf8fcfffff8cfcfc8fffcffcfcfcf8fffcf8fffcfcececeeeeeeecfffcfffcfccccfcccfcfccfcccfcfccccfcfccfccfccccfcc
                                244ebefffceeccfcfeeb2b2424232424b24aeeee244b2324e32b4b242424b2b4b2cffffebe444b24b244e24242b24242424232b24244242442b24a24242b2b2b2b2b424442444b2eeeeeccffcfffceb2b2b2b24242b24a4242b24b2b2b2b2b2e2e2e2beefcfcffcfffe4e4bfcfffff8f8fcffcfcfcfcff8fcfcf8ffcf8fffcf8fcfceeeeceaeeaffcfffcfcccfcfccfccccfccfcfccccfcfcccfccfccfcfccfc
                                e2b2bffcffceeffffcb2442b4b242b424232eeeee32242b242424232b2b242424befefcf32b224b2442b232b42442b44b2324424b2b2b2b2b2442442b244244244242b24e32e24b2aecccfcfffcff2b2442444b2b2442424b24242424244e4bbb4b2e2eeecffcffcfcee2beffcf8fffffffccfcfcfcfffff8fcffcfffff8fffcfcfececeeeeeeecff8f8fcfcfccccfccfefcccccccfcfccccfcccccfccccfccc
                                2b44bfffcfeccfcfcceb2b422423242b2b24efee24e4b2444b24b2424442b42b24effcfee44b2424b2442442b42b4242424e4e4242442442442b2b2444a442b42b2b4242424b42beeecefcffcffcfe44a442b224442b24b242b2b2b2b4b2beefefee34becfcff8ffcfe4e2eeffffcf8fcf8fcf8cf8ff8fcfcf8cfff8fcffcf8fceeceeeceeeaecfcfffffccccfcfcccfccccfcfcfcccccfcfccfcfcccfcfccfc
                                e42b2cfcffcfcffffffee4232324e423244eeeeee424244a244242b4e2b424b2beefcffeb24232b244a4b2b242b24b2b2b4232b42b24b24b2b24424b2242b242b24244b2b242b24eecfcffcff8ffce3242b244b22b244242b2442424242b2efefeee2b2cefcfcfcffce2b2bffcf8fffcfffcfcfcfcffffff8fcfcfcfff8fffffeceeeceeeaeeeeffcf8fcfcfccccfcccfcfccccfccfcfcccccfcccfcfcccfccc
                                24e4effffcffff8f8ffee32b24b232b242b2242e4232b24242b2b4244242b24423effcff3e4b2444242424442b42b2b4b2b4242b42442b24424b2b244b242b24444b22442b424b4cececfffcffcffe4e4b2b2b2b4232b2b2442b24b2b2b4ecfcfcfeb4befcfcfff8ffe2eeeefffff8ff8ff8fcfccfcf8f8fcfcff8ff8fff8fcfebeeeeeceeeeaecffffffcfccfcfccfccccfcfcccfcccfcfcfccfccccfcccfcf
                                4e4a4cfcff8fcffffcffb2b4b24b244b2b24b244b24444b2b42424b232b424b2b2efffef4b244e4a4b2b42b2424b2eefeeeeb2424b2b2442b4242442b24b244b2b2234e3242b2b2cecccfcffcfffeeb2b2b4b2b42b2424242b24424424b2befcfcfe4b2cecffcfcfcfeb24efcf8fcffcffcfcfcf8cffffffcfcfcffffcfcfffcceeaeeeeeeeeecfcf8fcf8cfcccccfccfcccccfcccfcccfccccfccfcfccfcccc
                                2b24efffcffff8fcfffceeeeeeeeeeeee2324b242b2b224424b232424424b242b4cfefcee44a4242424244232b42cfffffe24b23242442b242b232b2442442b2424424242b444eeeccfcffcff8fcfe4beeefeeef4424b232b242b2b2324becfcfceee4bfefcff8fffee2bebffffff8ff8ffcfc8fcfcf8fcfcf8fcfcf8fff8fffee2eeeceeaeeeaffffcffcfccfcfcccfccfcfccfcccfcfccfccccfccccfccfcf
                                42b2befff8f8ffff8fffceeeeeeeeceeee4b244a4242b42b24244e4b2b242b2b4aeffcff32b2432b2344a42442b4efefcfea4244e4b2b244b24424442b2b24242b2b2b2b424a2beececcfffcffffce4eefecfcfe2b42424424b244242b2beecfcffe3b2cccfcfffcffbe2e4fcfcfcffffcf8fcfcfcffffff8fcfcfffff8ffcfcebebeeeceeeaeecfcff8fccfccccfcfccfcccfccfccccccccfefcecfeccfcccc
                                e42befccffffcf8ffcffcececeeceeeee224423244b4244232b24242424b24eeeefeffcf4b24242442b242b2b42beffcffee4b24242444a2442b4e2b244232b4424424424b244eeeccccfcff8fcffeb2cefccfeeb2b2b42b42432b2324b4eefcfcce34befcffcf8ffceeeeccfff8ff8ffffcfccfccf8fcf8fcfcf8f8fcffffffcebeececeaeeccff8fffcfccfcfcccccccfcccfecfcfefcfeccccfeccfecefec
                                2e44eefcf8f8fffcffcfb2e2e2b2e2b24b4a424e4242b2324444b232b424b2beecffcffee4b2b4b2b242b4442b42eeffcfee4232b232b2442b2423244a424424a42b2b24242b23ececfeffcffffcfe4befcfccfee32423242b242442b24ebefcfcfefcefccfcfffcffffcfffcf8ffcfcf8fcfcfcf8ffffffcfcfcfffff8fcfcfcbececcececceccffcf8ffcccccfcfcfefccfeccccccfcccfcfececfecefcefc
                                24b2bfcfcfffcf8fffffb4b43244324422424b2432b2442b24e2424424b24beecefcfcfee324242444442b2b4b2befcfffea42442442442b244b244a242b2b242442442b2b24b2cececcfffcfcffceb2cccfcfcee44b24e4324b2b244e4beecfcfcccfccfcffcf8ffcfcffcffffcfffffff8fcfccfcfcf8fcf8fcfcf8ffff8ffcffccceacfcfcffcffffcfcfcfccccccfccccfcfcfcfccfeccecfececfececce
                                e2e4ecfcff8fffff8fcf42424e42e42b4b2324424244b2444232b42b24232e2cecffffcfe42b432b2b2b23eeeee4cffcfcf4b2b2b2b42b244a242b244442444b2b232b2442324beeccfcfcff8ffcfe4befccfcece3242b2b24b244b2b2b2befcfcfccefecccffffcff8ffcf8f8ff8f8f8fcfcfcfcfcfffffcfcf8ffffcf8ffcfffffcccccffffcffcf8ffccfccfcfcfcccfefcccccfeccccfeceececeecfefec
                                2b4beefcfcff8f8ffffcb2b2323243242442b2b2b42b24b2b2442b2432b2b4eefecfcffee32424244232b2eeceebecffcfee4424442b2442324b2442b2b42b242442424b24e4eeececccff8fffcffeb2cfefcfceee3e4b2eeeebeeb2b4ebecfccfcfcfccfcff8fcf8ffcfffffcfffffffffcfc8fc8ff8fcf8fcfcff8ffffcff8fcffcccecfcffffffcfcffcccfccccefccccccfcfeccfcfecececececfececcf
                                42e2bfcfcffcfffcfcffb423242b242b232442442b24424244b2444242444ebeccffcfcfb2b4b2b232444befecebefcffcee32b2b2424b2b24244a4242423242b2b2b42442323eeccfccfcffcfffce4eecfcccfeeeeeeeececfefeececeecfcffcfceececfcffffffcff8f8fcf8fcf8fcf8fcfccfcffffffcfcfcfffcf8ff8ffff8fccfccffcfcf8ffffcfcfcccfefccfcfcfccecfccecececeeeeeceecefeec
                                e4b4eefcfcff8fff8fff4b24e4424b2442b2b4232442b232b24232b2b4b2b2eeeccffffee42423244e4a2beececeecfcffee2b24232b24244b2b242b4b2b24b2442424b2b24e4eefecfcfffcffcfcebeeccfcfcecb2aeaeffcfcfccccecccefcfcfcceccfcfcf8fcff8ffcfffffcffcffffcfcfcfcf8fcf8fcf8fcf8fffcfffcffffffffffff8ffcfcf8fccccfcccccccecccfcfccfccecececeaececeececee
                                2b2becfcff8ffcf8ffcf324b24b24244a4242324e4b2442442b24244242b4b4ceefcfcfce323244b24244beefceccffcfcf3444b24424b232424423224244244232b42424b23eeeccfccfcffcfffce2befefccfeeeceeecfcfcffccceccecfcfcfcfeaecccffffcf8ffcff8f8f8ff8ff8f8fcf8fcfcfffffcfcfcffff8ff8fff8fcfcfcf8f8ffcfff8ffcccfcccfcfefcfcfeccccecfececeeeceeaeeceeeecc
                                24e2bfefcffff8ffffff4b242324b232424b24e442432b2b2444b2b2b4b2bebeccffcfcf4e44b24234b232ececccecffcfeee424b2b424424b2b2b24b232b2b2b2424b232442beefccfcffcff8fcfeb2cefcfcfcccccfcfcfcfcfcccc7ccccfcfcfccecefcfcf8fffcff8fffcffcffcffcfcfccfc8ff8f8fcf8fcf8fffcffcfffff8fffffffcffcfcfcfcfcccfececccececcfefcfececeeceaeeceeaeeaeaee
                                e4b2bfcfcf8ffffcfcfce4232424242b24424423232242444a242444beeceeceeceffcfee3242b44242b4befcceccfcffcf4b2b2442b4a4b242442442442442444b24242b2b44ecefccfcff8ffffceebefcfcfcffcfcfccfcffcffcffcfcffcfcfcfebecfcffffcf8ffcffcffcff8ff8fffcfcfcfcfffffcfcfcfffcf8ffff8f8ffff8f8fcff8ff8fffcfccfecccfcfefcfceccecccfceccecececeeececeece
                                2b2beefcfffcf8ff8fffb4b24b232b444b232b2424b2b42b244b2b2b2eecccecccfcffcfe4b2324b2b42b4ceccccccfcffeb232b2b32b2424b232b42b2b42b232244b232442b2aefcfccfcffcfcffe4eecfcfcfcffcccccfcfcfcffcfcffcfcfcfcfaecccfcf8ffffcff8ff8ff8ffcffcf8fcf8cfcf8fcff8fcf8fcffff8fcfffcf8ffcfff8ffcffcfcfcccccfecececccecfcfcfececcefecececccececfecc
                                e2b2ecfccf8fff8fffcf4242424e42423242444b2424232442324242beecfcfeceffcffce3232b2432442befffeccfcfcfee4e44beeeeee4242442b424232424b2b2242b2442beecccfcffcffffcceb2cfecfcfcfcfcccfcfcfcfcfcfcfcfcfcfccececfccfcff8f8ffcfcfcfcfcffcffcfcfcfccfcfff8fcfccfff8fcffff8ff8ffcfff8ffcffcffcffcfcfeccfcfccfefcececccfcfecccfcfcefefcfecece
                                ebebeefcffff8fffcfffb32b232432b242b42b242b4b244a4242b4b42ecceccccccfcfcf4b2beeee2b23befefcfcfcffcfceb42b2efcfee32b4b24232b42b442424432b44a4b4eefcfccfcfcf8fffeebeefcfcfcffcccccfcf8ffcf8fcfcccccccceccecfcffcffffcff8fffcffcf8fcf8fcfccfcf8fcfffcf8fcfcfff8f8ffcfffff8fcffcfcff8ffcfcccecfececefecccfcfefececcfecececcecececefcc
                                eeeecfcfcf8ffcfff8fee2b244b22442b242b24b24244a242b442423eeecccefecfcfcfceb4beefeb44e4ecfcfccccfcffee4b24befecee24242b424424424a4b232e4242424aeecfcfcffffffcfce4befcfcfcfcffccccffcfcf8fcfccfcfccfececfcfccfff8fcff8ffcf8fcf8ffcfcfcfcf8fccfff8fcfcfcf8ff8ffffcff8fcfcfff8fff8fcfcffcfcfcecefececcefeecececefececfcefefccfecfcece
                                fecfecfcfcffff8fffffb4442b24b23244b244244b23244442b23242beecfccfccffcfffbb4befeeeb23befcfcfcfcfcfcfb24b2becfcf4b4b24232b2b2b242424244232b2b24ecfcccfcf8fcfffcee2cefccfcfcfcfcf6fcfcfcfcfcffcfccceceeeefcfccfcff8fffcffcff8ffcfcfcfcf8cfcfcf8ffff8fcfcffffcfcff8ffff8fcfcff8ffffff8ffccececececeeceececececececfececccececcececfe
                                cececfcfcff8fcff8fcf4b2b2424242b2324b23223242b2b23242b4b2ecec7fcfccffcfceecccffceeeeeccfcfccccfcffee3e4beefccee24232b24442444b232b42b244244b4ececfcfcffcffcffeb4cfcfcfcfcf8fcffcfcf8fccfccf8ffceceeeaeccfcfff8ffcf8fcf8fcfcffcfcfcfcfcfccfcffcfcfcf8ff8fcfff8fffcfffcf8ffffcfc8fcfcfcceceeeeeeceeceeceeeeecececcefcefcefefcfcecc
                                ecefccfcf8ffff8ffffce24232b4b2442423242b424b2442424b2424beeccccfccfcfcfcfcffcfcccececefcfcfcfcffcfee42b2becfcf34b24444e232b2242442b2432b42b2befcfcfcfcffcffcce2beefefcfcfcfcfcfcf8fcfcfcfcfcfcceeea2ecfecfcfcffcffffcffcfffcffcfcf8fccfcf8ffffffcfccfcfff8fcffcff8fcfcffcf8fcffcffcffceaeeceaeeceeceeececeecefefecececcccececfec
                                feccefcfcffcf8ffcfff34b24422432b4b244b242b244232b42442b24bececefcfcfcfcfcfcfcfcfccecccffcfccccfcfceeb2b4eefceee24b2b243244234b2b244424242324b2cfcfcfcff8ffcffeb2efecfcfccfcfcfcfcffcfcfcf8ffcfeeeeececcfcfcff8ff8fcff8ffcfcf8fcf8fcfcfcfccfcf8f8fcfcff8fffff8ff8ffff8fcffffffcff8ffccceeceeeeeceeeaeeaeeeaeeecececfefefeefeceece
                                cecefcfcff8ffffcfcffb242b234e242423224b2324b2b24232b2324bebe7cccccfcfcfcfcfcfcfcccceccfcfcfcccfcffeeb42beecfcf32b242424e42b242444a232b2b42b2befcfcfcfcfff8ffcee4eefccfcfccfcfcf8fcfcfcfcfcfcfceeaeecfefcfcfcffcfff8fcfcfcf8fcfcfcfcfccf8fcfffffcf8cf8ffcf8fcffcffcfcfcff8fcf8fcffcfffcceceaeceeaeeeeeeeaeeeceeeeceeceeececececec
                                efeccfcfcffcf8ffffcf4b2444e43e3e324b4a44e32b42344244244b2eefccfcfccfcfcfcfcfcfcffcccccfcffcfccfcfcfb4be4bcccfee444b2b4232b244b2b24424442b244beefcfcfcffcfffcfeb2b2bfcfcfcfcccfcfcf8fcfc8fcfcffeeebecccccfcff8ff8fcfffcfcfcfcfcfcfcfcfccfccf8fcffcfcfcffffcff8fff8fffcfcffcffcff8fcfcccceceeceeeeeceaeceeeeeeaeceeeeaeaeeceeceece
                                ceccefccf8ffffcf8fffb2b2b2bee2e4eb2b2eebeeeee4e2b4a4b2423ecfcfccfcfcffcffcfcfcfcfcfcfcfcfcfcfcfcfcfeceeecefccee322442324244b224232b2b23244b24efcfcfcfcff8fcfce2b2beeffcfccfcfccfcfcff8fcfcfcbeeaeecfeffccfcffcffff8f8ff8fcfcfcfcfcfccfccfcffcf8fcf8fcf8f8ffffcfcff8fcfcfff8ff8ffcffffccceccececeaeeeeeeaeeaeeeeeaeeeeeeceeceecee
                                ccefccfcfff8fffffcfce444beeeeceee2b2eeeececeee342424232b4efcccfcccfcfcfcfcfcfcfcfcfcfcfcfcccfcfcfcfcfececccfcf42b4a424e4b24232324244242b242bbbefcfccff8ffffffeb244efefcfcfcccfc8fcfcfcfcfcfbeeeeeaefcfcfccfcff8fcffffcfcfcfcfcfcfcfcf8fcf8fcffff8fccfffcff8f8fff8fffcf8fcffcffcff8fcfcfccfefeceeeeeaeaeeeceeeceeeeeaeeeeceeceece
                                cfeccfcfcfcff8f8ffff4a2b2eecececebbbecccfcccee2b4b232442becfefcfcfcfcfc8cfcfcfcfcfcfcfcfccccfcfcfcfcfeccecfcceb42424b232423244e44b232b4232324efcfcfcfcffcfcfce2b2b2eeafcccfcccfcff8fcfcfcfceceaebecfccfcfcff8ffff8fcff8ffcfcfcfcfcfccfcfccff8fcfccfcf8fffcfffcf8ffcf8fcff8ff8ffcfcffcccfeccceeceaeeeeeeceececececeeeeeceeceeceec
                                eececfcfcfff8fffcfcfb442beecececeb2becfcccfece4b2442b2b4beefcccccccfcfcfcccccccccfccfcfcfccfccfcfcfcececcecfcf4e32b24424b24e4232242442324e4b2bfccfcf8ffcfffcfee442b4b4cffcfcfccfcfcfcf8fcffceceeecefcfcfcf8ffcf8ffcf8ffcffcfcfcfcfcfcfccfcfffff8ff8fcff8ff8ff8fffcffcffcffcffcf8ff8ffcfccfefceceeececececececcececeaea2ceeaeecec
                                eccfecfcfcfffcfff8ff4a4b2ececcecebebceccccccfe4232b444242cccfcfcfcfcfcfccfcfcfcfccfcfcfcfcccfcfcfcfcccececfccee423232b242b232b24b2b2b24b232b4bfcfccfcfff8fffce4b2b243eeefcfccfcf8cfcfcfcfcccceccccfcfcfcfcfcffffcffffcffc8fcfcfcfcfccf8fcf8fcf8ffcfff8ffcffcfffcff8fcfcf8ff8fcffcfffccccfecceceaeceaeececfefefefeeeeeeeaeeeeecef
                                cececfcfcf8fff8ffffce42bbecceccecccefcfcfcfeee3e44232b23befecfccccfcfccfccfccfccfcfcfcfcfcccfcfcfcccece7ccfcfeb4b24e44b23244244e444b2b24b2eeecefcfcfcf8ffcfcfee2424e4bfefccfccfcfcf8fcf8fcfcccfecccfffcf8cff8fcff8f8ff8ffcfcfcfcfcfcfccfccff8fffcff8fffcff8ff8ff8fff8ffffcffcfcffcf8fcfcccfcfeceeceececececccccecceaeaeeeaeeceff
                                ececcfcfcffcf8ff8fcfbeb2ececceccecccfccfccccce44a42424b24eefccfcffcfcfcffcfcfcfcfcfcfcfcfcccfcfcffccecececcfceee2bee2b2b44b2b4232a42b4b2beeeaefcfcf8fffcffffceb4b23e3eefcfcfcfcfcfcfcfcfcfccceccfecfcffcfcfcff8fffcffcffcfcfcfcfcfcf8fccfcfcffcff8ffcfff8ffcffcffcf8ff8fcf8ff8fcf8fffccfecceccefcefcefcfecfecefceceeeeee2eecfecf
                                cefcecfcfcfffffcffffecfccfcccececefecfccfcfcfeb2b4b2324b4cccfccfccfcfcfccfcfcfcfcfcfcfcfcccfcfcfcfccececcfccfcebeeebe2b2eee42b4eeeceeee3eececccfccfccfcff8fcfe2e4b2eecfcfcfcfcf8f8fcfcffcfccfececcfcfcfcfcff8ffcf8ff8ffcfcfcfccfcfcccfcfc8ffcff8ffcff8fcffcf8ff8ff8ffcff8ffcffffcffcfcccfefcefecececcececcecfececfececeaeaeecfef
                                ececfcfcff8f8fff8fcfcfcfcfceccebcecccfcfcccfeebbee232b24aeefccccfcfccfcfcfcf8cfccfccfcfcfcccfcfcfccecec7ecfccfbeebeebeeceeea42beecececeeecececfcfccffff8ffffcee324efcefcfcfccfcfcfcfffcfcfececfccccfff8fccfcfff8ffcfff8ff8fccfcfcfcfcfccfcfff8ffcff8ffff8ffffcffcffcff8ffcff8fcf8fffcfcfcecececefcfefecfecfeccefecceceeecececcff
                                ccceccfccffffcf8ffffcfccfcfcfccfeceecefccfccfcefeee4444b2ecefcfcfcfcfccfcf8cfcfcfccccfcfccccfcfcffcccceccccfcfcccfececcfcee4b4aeecefececececcecfcfcccfcfcfcffe42b2cecfcfcfcfcfcffcfcceb2becccececfcccfccf8ff8fcffff8fcffcfcffcfcfcfcfcf8fcf8ffcff8fffcf8ff8fcf8ff8ff8ffcff8fcf8ffcf8fffceceeececeeecececceccefcccefeccceceffffcf
                                ececfcfcffcff8fffcffccfcfccfccfccebccfccfcfccfccfeb2b232beefcccfcfcfccfcfcfcfccf8fccccfcfccfcfcfccccec7cccf7fcfcfccfcfccecea2b2ececcceccccccccfccfcff8fffffcfeb24beecececcecfcfcffcfeb2b4eefeccfceffcfcfcfcffff8f8ffff8ffff8ffcfccfccfccfcfcff8fffcf8fffcffcfffcffcffcff8ffcfffcf8fffcffceeaeeeeececececefececeefeccfeefccfcffff
                                cefeccfccff8fffcff8ffcfccfccfccfccceccfccfcfccfccee43244beccfcccfccccfccfccfcf8fcfcecfcfccccfcfcffcfcfcfcfcccfcccccccccfcceececceccccccffffececfcfccffcf8fcfcee4b2eececceccccfcf8fcfe2b4bececfecccfcfff8fff8fcffffcf8ffcf8ffcffccfcf8cfccf8ffcff8ffffcf8ff8ff8ff8ff8ff8ffcff8fcfffcf8ffceaeeeeceeeeececececfecfececeeccecefffcff
                                cceccfcff8fff8ff8fffcfcfcfcfcfcfccfcfcfcfccfcfcfcf324b2b2eefccfccffcfccfcf8fccfccfcbecfcfcccfcfcfcfcfcfcfcfccf6cccfccfccffccecefcccceccccfccccfcfcfcfffcfffffeb24b2cececececcfcfcfcfeb42beefecccfcffcfcffcffcf8fcffffcffffcff8fcccccfcfcfcfcff8ffcf8ffffcffcffcffcffcffcff8fcf8fcffffcffceeeeeeaeaeeeeecefeeceecefefefecfcfcffff
                                ceccecfccffcfffffcffcccccfccfcfccc6ccfcfcf8cfcccfee32b43eecccfccfcccccfcfcfcfcfcceececfcfcccfcfcfcfcfcfcfc6fcfcffccccccccffcffccccccccccfcfceccfccfc8f8ff8fcfe2b22eeeececccccffcfcfcee4b2ececcfcccfcfff8ff8ffffcf8f8ff8f8ff8ffcfcfcfcfcf8cff8ffcff8ff8fcff8ff8ff8ff8fcff8ffcfffcf8f8fffcceaeaecefeeaeceeeeecececeeceeeceecffffcf
                                ccecfcfcffcff8f8ff8fcccfccfccf8fcfcfccf6cfcfcfcfceeeeeeebecfeccfcfcfecfccfccfccccceeccfcfcccfcfcf8f8f8fcfcfc6ffcffccfccfccfcfcffcccccccfcffcccfcfcfcfffcffcfceb2b432befeceeccfcf8fffeb24befcfeccfcff8fcffcfcf8ffffcfcffffcffcfccccfccf8cfcfcffcf8ffcffcf8ffcffcffcfff8fcfcff8fcfcfcffcffceeeecfeceeeeeaeeaeeeeeeceecececcecfcfff
                                ceccefcfcff8ffffcfffcccecccfcccf6cc6fccfccccccceeceaeeeeeeecfcccfcfccfcfcfcfcfcceceaecfcfcecfcf8fcfcfcf8fccfcfcfcf6cc6fccffcffcffffffffcfcfccecfcfcfcfcfcffffe2b24e4eececccccfcffccfe2b4beeeccceffcffff8fff8ffcf8ffff8fcff8ff8fcfccfccfcfcff8ffffcff8ffffcff8ff8ff8fcfff8f8fcf8ff8ff8ffcceccececececeeeeeeeaeeceeceeeeeeccffff8f
                                ccefccfcfcfffcf8ffcfcececefccfccfcfccfcccfecfeebee4eecceaecfccfccfecfccfccf8ccccefececcfcccfcfcfcfcfcfcfcfcccfcffccfccccfcfcf8fc8fcfccffcfcccccfccfcf8fff8fcfeb2b2b2befeceeccffcffcfeb232efcfecccffcf8ffcf8ffcfcfcf8ffcf8ffcffcfccfcfcfccf8ffcf8ff8ffcf8ff8ffcffcffcf8fcfffcfffcffcfffcfccecccfcfeceaeeaeeeeeaececcccccceccfcfff
                                eccecfccff8ff8fff8ffcecececccccccccccccecccececebea4cecebeeccfccfcfcecfcfccffcceccccccecfcccfcfcf8f8fcfcf8cf6ffcff6ccf6f6fcfcfcffcf8ffcf8ffceccfcfccffcfcfffce244e4b2cfecceccfcfcfcfe2b4beececccfcff8fcff8ffcf8cf8cfcffffcff8ffccfcc8cfcfcfcf8ffcffcff8fcffcff8ff8fffcff8fcfcf8fcff8ffffcfccfececcececeeeceaeeefcfefececcecfcfcf
                                ceccecfcfcffcffcfffccceecececfecfecfecfcefecceebee2beceeebeecccfccfccccfcfccfccefecefccfcfccccf8fcfcf8fcfccccfcfcfccccfcfcf8ff8fcfcfcf8ffcfccecfccfcfcfffcfcfebe432beefeeccecfcf8ffcee42befecfeccffcfff8ffcffccfccfff8fcff8ffcfccccfcfc8cfcfffcf8fcf8ffff8ff8ffcffc8ff8ffcff8ffcf8ffcf8fccceccefccfecefceeeeeecececcfcfccfcfcfcf
                                cfecfcfcfff8ffff8fffcecececececceccccecccecfeceeeeb2ceccbbbbfcfcfcfeffccfcfcfcecccccecccfccffcfcfcfcfcf8ffcfcf8ffcccccfcfcfcfcffcfffcffcfcfceccfcfcf8ff8ffffcee42e24eecececccfcfcfcfeb4b2eececccfcff8fcffcff8fc8fc8fcff8fcffcfcfcfccfcfcfcf8fcfffcffcfc8ffcffcf8f8ffcffcff8ffcf8ffcffffcfcefefccececfcececececeececccfcefccfcfff
                                cececfcccffff8fcffcfcccecececceccfecefcefcececeaeebeeeeeebebccccfcccccfcfccfcccecefecfcfffcfcfcfcf8fcfcfccc6cffcf8fc6fcf8fcf8fcffcfcfcffcfcccccfcfccffcfcf8ffe2b2b4aeeeceaeccfcfcffcf4234cfefecccffcfffcff8ffcfccfcff8ffff8fff8fccfccfcfc8fcff8cf8f8ffffcf8f8ffcffcff8ff8ffcf8ffcff8f8ffcccccecfefcceccececeeeaececefcfccfcfccfc
                                ccefccffcf8fffff8fffcceceeaeeccececcceccecececeeea2becccecccfcfccecceccfcfccfcecceccc7fcfcf8fcf8fcfcf8fcf8fccfcfcfcccfcfcfcfcfcfcccccfcccfcececcfcfcf8fffcfcfeb2b242beeaeececfcff8fceb2b2ececcecfcff8f8fcffcfc8cfc8fcfcfcfcf8fccfc8fc8ccfcff8fffcfffcf8ffcfffcf8fcf8fcfcfcf8ffcf8fcfffcfcfefecceccefcefcefecceeeececcccfcccffcff
                                ceccefccfffcf8fcff8fccececececefcecefcecefeeeccccebeececcefccccfccfcccfccfcfcccecceccccfcfcfcfcfcfcfcfcfcfcccfcffcccccfcfcfcfcfccccecceccceccefccfccffcf8fffcee42b2b2ceececccfcfcfcfe2b4befeccccff8ffcfff8ff8cfcccfcfcf8cf8cfcfcfcfcfcfccf6fcf8f8fcf8fcf8fcf8fffcffcff8ff8ffcf8ffcfcfcffccecccecccceccecccceeceaeeccfcfcfcfcfcff
                                ccefccfccff8ffff8ffcccecececcececcececceceabeecceceaeecfcccfcfccfcececcfcfcfccecece7c7ccfcfc8cfc8cf8fcf8fccf6ffcf8f6fcf8fcf8fcfcccecefcfefcecbcfccfcfcfffcfcfe2b42b4bececceccfcf8fcfee44beecfecccffcff8fcffcfccc8ccf8cfcfcfcfcfc8fcccfcf6cfcfcfcff8ffcfffcfcfcf8fcff8ffcffcf8ffcf8ff8fcfcccccccfcecfcfcfeefceceecececfcccfcfcfcf
                                ceccefcfcffff8fffcffcececececfccecfccecfece4aecfcee2cccecfccfcfcfececefcfccfcccececcccccf6fcfccfcfcfcfcfcfcccfcfcfccccfcf8fcfcfffcffcfccfcfcecfcfcfcff8fcfffceb2b24e2cfcfcfcfcfcfcffe4b24ececcecfcff8ffff8fffc8cfccfcfcf8cfccf8fccfcf6fcfcff8fff8ffcff8fcf8ff8fff8fcfcf8fcffcfcfcfcfcfcfccecfcfccfccececccecceceecefccfcfcccfcfc
                                ccefccfcf8fcffcf8fffccecefecececececececceebbeccecbeeccfccfccfefecececccfcfcfcececce7cfccfcfcf8cc8fcf8fcf8cfcf8ffccccccfcfcfcf8cfcfcfcfcfcfcceccfccfcfcff8fcfee42b2bbefecccfcfcfcfcfe2b4aefecfcccf8ffcf8ffcf8cfcccccfc8cfccf8cfcfcfccfcccc8ffcf8fcf8fcfcfffcffcfcff8ff8ff8fcf8f8ff8fcfccceccfccfccfccfecefecfeececccfccfccfcfcfc
                                cfecefccffff8fffffcfceeeececfecefceccfceceebeccfceaeececceceececececcecfcfcfccecec7fcfcfccc8ccfcfccfcfc8fccccfcfcfc6fcfcfcfcfcfcfccfcfcfcfcecccfcfccf8ffcfffcee4b242eeecececcfcffcfcf3234ecececeffcfcfcfcf8ffccc6f6fcfcfcfcfcfcfcfcfc8fcfcfcf8fcffcff8ff8cf8fcf8f8ffcffcffcffcffcfcfc8cccecefffcfffcfcececceefecececfcfccccfcfcf
                                ceccccfccf8fff8f8ffcceaeecececcececececceceb2cceceebecfcfcfeceececeececfccccfcececcccfccfcfcfccfccf8cfcfcfcccfcf8fcccccfcf8fcfcfcfcfccfcccccecefccfcffcffcfcfee24b2b4ceccecccfcf8ffceebebefceccccff8fff8ffcfcccfccfcf6fccf8cfcfcf8cfcfccccfcffcfcf8fcfcfffcff8ffcfcf8fcf8ff8ff8f8ffccfcfececfcffcfcfccefcefccecececfcfcfcfcfcfcc
                                cecefcfcfffcfffffcffebeeaeecececcecceccefceabecccea2ceccececeeceeecececefcfcfbecececcfcfcfcfcf8fcfcfcf8fcfcf6fcfcfcffcfcfccf8fcf8fccfcfcfcceccccfccfcff8ff8ffeb2b24eeececccccfcfcfcffeeeececfcecfcffcf8fcffcfc8ccc6fcfcf8cfcfc8fcfccccf6fccfcf8ff8ffcff8cf8fcfcff8fffcffcfcfcfcffcf8ccccecccffcff8fccfecececfececfcfcffccccfc8ff
                                ccecccfccfff8f8fff8fceaeeececececcefccfceceebefcceeeccefeceeeceeceeeececceccecececcccfcf6fccfcfcf8fcfcfcf8cccfcfcfccfcfc8fcfcfccfcfcfccfcfcecefccfcfcfcfcffcfe4b2b232cececcccffcfcfcfcecccfcecfccf8ff8fffcf8fccf6fccfc8cfcfc8fccccf6fcfcf6ff8ffcfcfcf8fffcff8ff8ffc8ff8ff8ff8ff8fcfcfcfceeecfcf8fffcfeccfececeeaecfcfcf8cfcfcfcf
                                cefefccffcf8fffcf8ffeeeeecececcefccccecccecbecceccecefeceeceeeaeeaeceeceececfceccec7fcfcfcf8fcf8cfcf8fcfcfcccfcfcfcfc8fcfcfcfcfcfcfccfccccecccefcfccf8fffcffcee244e4eeccccefcfcfcffcfcccfecccccccffcffcfcf8fcccccccfcfcfcfcfcfcf6fccccfcfccfcfcf8ff8fcfcf8fcfcfcfcffcfcfcfcffcfcffcfccccccecffffcfcfcceeccfecceecfcff8fccccfcfcf
                                ceccefccfffffcffffcfaceaeecececcecfefcfcfceebcefcceceeaeeaeeaeeeeeeeceeceaecccece6eccfcfcfcfccfcfcfccf8cfccfccfcfcccccfcfcfcf8fcfccfccfcfccececcfcfcffcf8ffcfee3e23eeecccccccfcffcfcfccecccccfcfcfcf8fcf8fcffccccccf6fcfcf8fcfcfcccf6f6fccf8fcfcfcfcff8fcfcf8ff8f8fcf8f8ff8f8fcfccfccfcc7cccfccff8fccfcfeeccfeccccfcfcfcfcfcfcfc
                                ccecccfccf8fcf8f8fffceeecececcecfccccccccfccefcccfceceeeeeeeeecececeeaeeecccfccccfcccf6f8cf8f8fcfc8fcfcfcfc8fccccccccfcfcfcfcfcfcfccfccfcfececcfcccfcffcffcffe42b24b2cfefcfccfcf8fcfcccffccfccffcf8fcffcfcfcf8cf6f6fccf8fcffcf8f6f6cfcfcf6fcff8ff8ff8fcf8ffcfcfcffcfcffcfcfcfccc8cfcf6fcceccfff8ffcfcececfeccccfcfcfcfcfcccf8cff
                                cefecfcfcffffffffcfccceceececfcccccccfcfccccccccececeeeaeeaeeaeeceaeeeecececfcffececcfcfcfcfcfcf6cfcfcfcf8fcfcccccffcfcfcf8cfcccfcfccfccccceccecfcfcfcffcffcfcb24b2beecfcccccfcfcfcffcccccccccfcfcffcf8fcfcfccc6ccccfccfcfcf8fcfccfcccccfccfcfcfcfcfcf8ffcf8f8ff8fcf8fcf8ff8fcfcccfccfcfffffcfcfcffcfcccecccefcecfcf8ffccfccfcfc
                                ceccefcfcfcf8f8fffffceaeaeececfefccccccccfececfecfeceeeeeeeeeeceaeececeaeccfcfccfccccfcfc8fccfccfcccccf8cfcfcfcccccfc8fcfcfcfcfc8ccfccfcfeccecfccfccfcf8fcffcee4a2b2beecfccf6ffcfcfcccfcccfccfcff8fcfcfcf8cc8cfcf6fcf8fcfcfcffcfccccccf6ccf8f8f8f8f8fcfcf8fcffcfcf8ffcfcfcffcfccfcfcfcccfcfcf8ff8fcccfefcfeffcfcfcfcfcf8ccfcfcff
                                cececcfcfffffffcf8fcceeeeeafeccfccc6cccfcccccecceceeeaeeaeeaeececceceeeececcfcfccceccf6fcfcf8cfccccf8fcfcfccfccfefcfcfcf8cfccf8fcfccfccccfececcfccfcffcfff8ffeb24b24eecfccccccccfcfffcccccccccfcfcfcf8fccccfcc6ccccf6fcf8fcfcf8ff6f6f6cfcccfcfcfcfcfcfcfcfcfcf8f8ffcf8ff8fcf8cccccfccfcfffcfffcffcffccfcfefcfcfcfcf8fcfcfccfcf8f
                                cecfcfcccf8f8fcfffffbeaeeaeecfccccbcccccfceccfeceeeeeeeeeeeeeaefefcfececccfcccfcceccfcfcf8cfcfcf6fccfccfccfccfceccfcfc8fcfcfcfccfcfccfcfeccececefccfcffcfcfcfcebe4bbbecefcfccfcccfc8fcccfccf6fcf8fcfcfcfc8cccfcccf6cfccfcff8fcfccccccfccf6fcffcffcff8ff8f8f8fcfcfcf8fcfcff8ffcfcccfcf6f6fcf8fcf8ffccfccfecfcfcfcf8fcff8fcfcf8cfc
                                ecececfcfffffff8fcfcceeea2eceefefecececcecceeceeeeae2aea2ceaeecccfeceeaeecccfcfcccecfccfcfcfcfcccccccfccfcfcfccbccfc8fcfccfcccfcfccfccfccfeccccfcfccfcf8fff8fcfcefefeffcfccccccfcffcfcffcffcfcfcfcf8fcf8fccf6c6f6ccfcfcfcfcfcfcffcfcccf6ccfcf8fcf8fcfcfcffcfcf8fcfcfcf8fcfcfcfccf6fccfccffcfcfcfcffcfcfecfcfcf8fcfcfccfcfcfcfcff
                                cecefcfccf8fcf8fff8feaeeeeeeeceeaececcececececea2e2aee2eeeeeecefecfeceececfccfcfeccccfcf6fccfcfcccfcfcfcfccfcfcecfcfcfccfccffccfccfcfccefccececcccfcf8ffcfcffcfffcfffcfccccf6f6cfcfcfcfcfcfcffcfcfcfc8fcccc6cfccccf6fc8f8f8fcf8fc6ccf6cfcccfcfcfcfcf8f8fcf8ffcfcf8fcfcfcf8f8fc8cccfcfccfcf8ff8ff8f8cfccfccfcfcfcfcf8fccccccfcfcf
                                cefccccfffff8fffcfffceea2aeaeeaeeeecececececeeeebeb2bebeaeaececcfccfcececccfcccccecefcfcfcf8fccfccccfccf8fcfcccecccfccfcfcfccfccfccccefccecceccfcfccffcf8ff8fcfcffcfcfcffcccffffcf8fcf8f8f8fcf8fcf8cfccfcf6fccccf6cfccfcfcfcfcfcfcf6cfccccfcfcf8f8fcfcfcfcfcf8ffcfcf8ff8fcffcfccfccf6fccfcfcffcfcffccfecfccfcf8fcfcfcfcfcfcfcfcf
                                cececfcccfcfffcff8fcebeeeee2b2ebeececececeeeee2a2e2b2eeeeeeeececcfeccccbcecccfcfecccfccf8cfccfccccfccfccfccfcfbcefcfcfccfccfccfccfcccccefcceccecfcfcfcfcfcfcf8f8f8f8f8fcccfcccfcfcfcf8fcfcfcfcfcfcfcfcccccfccf6c6cccfccfcff8ff8fc8cfcccf6f6fcfcfcfcf8ff8f8f8fcf8fcfcfcfcffcf8cfcccfcccfcff8fcf8ff8fcfcfcefcfcfcf8ccfccfccccfccfc
                                ccecfeffcff8fff8ffffceeaeebeeae2aeeececcecea2ae2b2beb2a2beeaececfccfcccccfcfccccceccfcfcfcf8fcfcccccfcfccfcfccceccfcccfccfccfccfcccfecfccfeccccfcccfcf8ff8ffcffcfcfcfcffccccff8f8fcfcfcfcf8fcf8fcf8fcfccf6ccccfcfccf6fcf8fcfcfcfcfcc6f6cccfcf8fcff8ffcfcffcfcfcfcf8f8f8fcf8fcfccccfcfccfcfcff8fcfcfcfccfccfcf8fccfccfcccfccfcf8f
                                ececefccfcffcf8ffcfcceeeea2ae4aeeeeceeeceeeeb2bebee2aebeeaeebeccefcccfcfccfccfcf7cccfccfccfccfcfccfccfcfcfccfcececcfcfcfccfccfccfceccecfeccececcfcfcfcfcffcf8fcf8f8fcfcf8cccfcfcfcf8fcf8fcff8fcf8fcfc8cccfcff6cc6ccfcf8fcfcf8fcfcc6fccfcf6cfcff8fcfcf8fcf8fcf8fcfcfcfcff8fcfcfccfccf6fccfcf8ffcff8fccfecfefcfcfccccccfcccfcfcfcf
                                cecfccfcff8fffffcfffaea2beeeeceeeae2aeeceaeeeaeeeaeeeeeeeeececefccfcecfcfcccccfccccfcfccf8cf6cfccccfcccf8cfcfccecfecfcccfccfccfccfcfcfecceccccfccccfcff8fcf8ff8fcffcf8fcfcccfcfcf8fcf8fcff8fcfcfcfcccfcc6cfcffccfc6fcfcfcf8fcf8fcfccccccccfcfcfcf8fcfcf8fcf8fcf8f8ffcfcfcf8fcfccccfccfcfcfcfcff8ffcfccfeccfcf8fcfcfcfcfccccfcfcf
                                cecefccfcfff8fcff8fceeeeececececeeaeeaeeeeaeeeea2eeaeeaeaecececcfecfcfccccccfccfcfcfccfcfcfcfcfcccfcfcfcfcfcfcececfccfcccfccfccfccecfececcececccfcfcfcfcf8ffcfcffcf8fcfcccfccf8fcfcfcfcf8cfcfcfcfc8cc6cfccffcfc6cccfcfcf8fcfcfcf8cfcfccff6cfcf8fcfcf8fcfcfcfcfcfcfcf8f8fcfcf8fcfcfcfccccff8ff8fcfcfcfcccfccfcfc8cc6ccccfcfcfc8fc
                                cecccfccf8fffff8ffffccbeaeecececee4a4eeaeeeea2eeeaeeeeeeeeccecececcecccfcccccfcfcfccfcf8cf6ccfcccccccfcccccccceccccfccfcfccccfccefcfecfceccccecfcccfcf8fcfcf8fcf8fcfcfcfccccfcfcfcf8fcfcfcfcf8f8cfccfcc6f6fcffcfcccfcf8fcfcf8fcfcfccfcf6cccf8fcfcf8fcf8fcf8fcf8fcf8fcfcf8ffcfcf8fcf6fcfcfcfcfcffcffcfcfecfcfcffccfcfcfcccccfcfcf
                                ecefecfcffcf8fcffcfccecececeeceeeceeeaeeeeeeeeaeeeeea2ceececececcececcfccc7fcccfccfcfccfcfcfccfcccfcfcfcfccececcefccfccfccfcfccfeceeceeccececcccfcfcfcfcf8fcfcfcfcfcfccfccccfcf8cfcfc8f8fcf8cfcfcfc6ccfcccffcf8fcf6ffcfcfcfcfcfccccccfcfcfcfcfcf8fcfcfcf8fcf8fcfcfcfcf8fcfcf8fcfcfcccf6fcff8ff8f8fcfcccfecfcfcf8fcfcccfcfcfcfcff
                                cecefccfcffff8ffff8fcccceeeeeeeceeeaeeeeeaea2a2ea2a2eeeaeececcececececcfccccfcfcfcfc8fcfcfccfcfccccfcccfccccccfcfcfccfcccfcccececeaeececcfcccefccfccfcf8ffcf8f8fcf8fcfcfccccf8cfcf8cfcfcf8cffcf8fccfc6ccccf8fcfc6ccf8fcf8f8fcf8fcfcf6cfccc6fcf8fcfcf8fcfcfcfcfcf8fcf8fcfcf8fcfcfcfcfccfcfcfcfcfcff8fcfccfcfcf8fcfcfcfccccccfcfcf
                                cecccfccf8f8fff8fcffccfeceaeea2eaeeeeeeeee2eeeb2eeebeb2eecefceceeececfccfccccfccfccfcfc8fcccccfcccfccfccceccfccccccfccfcfccfefcceb2beeaefcfecccfcefcfcffcf8ffcfcfcfcf8cfccfccffcfcfcfcfcfcfc8fcfcfc6fccf6cfcffcfcccfcf8fcfcf8fcfccccfcfcfccfcfcfcf8fcf8fcf8fcf8fcf8fcfcf8fcfcf8fcfcfcfccf8ff8ff8fcfcfcfcfcfcfcfcf8fccfcfcfccfcfc
                                cecefcfcffffcfffffffcceceeee2eae2eeeeeaea2aeb2ebe3e2eeaececccecebeccecfececfccfccfcfccfccfcfccfcceccccceccfcefcfcfccfceccefececfeeaeeeeccfccc7fccfccf8fcfcfcfcf8fcf8cfcfccccfccf8fcf8f8fcf8fcfc8fcccccc6fcffcf8fcccfcfcfcf8fcfcfccfcccfccccf8fcf8fcfcfcf8fcf8fcfcfcfcf8fcfcf8fcf8fcccccfcfcffcfcffcfcfcfcfcf8f8fcfcfccccccfcfcff
                                cecccfcfcfcff8fcf8fcccceceaeae2eaea2ae2eee4e2ae2e2aeb2ececfefceebececececcecfccfccfcfccfcf6cccfceccfecfccccfcccccefcecfcfeaecececeeeaeccfcfeccccfccfcfcf8fcf8fcfcfcfcfccfccccfcfcf8fcfccfcfcf8fcf8fcccfccccf8fcf8ff8fcf8fcfcf8cccccccfcf6f6fcfcfccf8fcfcfcfcfcfcf8fcfcfcf8fcfcfcfcfcfcf6ffcf8fcf8fcfcfcfcfcfcfcf8fccfcfcfccfcfc8
                                ecefeccfcff8fff8ffffcefeceeeeebee2eeeea2b2aeeebeaeeeececececeecebecfecececcccfcccccccfcfccccfcccceccfcccfcfccfcfccccfcceceeeaefeceaeeeecefcccefcccccfcfcfcfcfcfcf8fcfcfcccccfcfcfcfcfcf8fcf8fcfcfccf6f6ccf6ffcfcfcfcf8fcfcf8fcfccfccccfccccfcf8cf8fcf8f8fcf8fcf8fcf8fcf8fcfcf8fcfcfccfccfcfcfcfcfcf8fcfcf8fcf8fcfcfccccccccfccff
                                ececfcfcf8fff8fffcffcceceeceea2ebea4a2beebeeb2e2b2beececcfeceeaeecfeceeeceecfecfeccfccfcfcfcccfeccfeccfcccecfcecefecececfceeeeceeeeeececcfcecccfeccfcfcf8fcf8fcfcfcfcfcfcccccfcf8cfc8fcfc8fcfcf8fcfcfcfcccfcf8ff8fcfcfcf8fcfcfcccccfcfcfcfccfcfcfcfcfccfcfcfcfcfcfcfcfcfcfcfcfcf8fcfccfcf8ff8fcf8fcff8f8fcf8fcf8ffcfcfcfcfcfcfcf
                                cececfccffcfffcff8fcceeeeeeeeeea2eeeeee2aeeeeaeaebecececeecebebececcecceeccecfccccecfccfcccccccfececcfccfcfccccfeccececececaeeeceaebeeccfcfcceccfc7cfcfcfcfcfcf8fcfcfcccfcccccfcfcfcfcf8fcfcfccfcfcfcfcf6cf8fcfcfcf8ff8fcfcf8cfccf6cccfcf6cfcf8fcf8fcf8fc8fcf8fcf8fcfccccccccccfcfcfcccfcfcfcf8ffcfcfcfcffcfcfcfcf8ccccccccfcfcf
                                ceccfcfccff8fff8ffffeeaeaeaeaeeebe2a2aeeeeaeeeeeeeeceeceeceeee2cecfeceeaeecccecceccccfccfccccef7ccccccfeccccefeccecfececeeeececeeeeeececcfcecccfcccfcf8fcf8fcfcfcfc8fcfcccccfcc8fcf8fcfcfcf8cfcfccfcccccccfcfcf8fcfcfcfcf8fcfcfcccccfccfcccf8cfcfcfc8fcfcfcfcfcfcfcfcccccccccfccffcfcf6cff8fcffcfcf8fcff8fcf8ff8fcffcfcfcfecfcfc
                                cececccfcfffcf8ffcfcceeeeeeeeea2eae4aeeaeeececececeeceeaeeeaeaebeecfcceecbecfcfcccefccfccfcfcccce7cefcccfefcccceeceececeaeceecececaeecececfcc7ccfcccfcfcfcfcf8fcf8fccfcfccccccfccfcfcf8fcfcfcfccfcccccccc6fcf8fcf8fcf8fcfcfcf8ccccfccfccfccfcfcf8fcfcfcf8fc8fcf8fcfcfccfcfcfcccfcf8cccfcfcfcfcf8f8fcf8fcfcfcfcfcf8fccccceccfcfcf
                                ceceffcfcf8fffffffffaeeaeeaeaeebeebe2beeeceeeeaeeeaeeeeeeceeeeececcececceccecccfefcccfccfcfcfcfccccccefecccfefeceeaeeeaeeeecececeeeaececfcfeccfcce6cfcf8fcf8fccfccfcfcfcfcccfccfccfc8fccf8cfccfccfcfccccfcf8fcfcffcfcfcf8fc8fcfcccccccfcf6fcfcfcfc8fcf8fcfcfcfccfccfcccccccccccf8ffcfcccf8ff8fcfcfcfcfcf8f8fcf8fcfcfcfcfcfcfccfc
                                ceccccfcfffcf8f8f8fcceeeecefecefceeaeeeeeeeaeaeeeeea2aeccecccceccefcfcefcfcfcfeccccfeccfcccccfecfececccccfececececececeecececeececeeececcfcccbcfcccfcfcfcfcfcfcfcfcfcfccccccccfcf8cfcfcfcfccfccfccfcccf6cccfcfcfcf8f8fccfcfcfcccfcccfcfccfccf8cf8fcf8fcfc8fcccfcccfcfccfccccfcccfcfccfcfcfcfcf8fcff8fcfcfcfcfcfcfcfcccccccccfcff
                                ccecfcfccf8fffffcfffceaeaefefcfcceceeeaeea2eeeeeea2ebeefecfeeceeecbeeccccecccccfcfeccfcccfcfccfccfccececececcececeeceececeaeecefeceaceccfecceccfcfcfcf8cf8fccfc8fccfc8fcfccfcfcccfcfcf8fcf8fcfccfccfcccfcfcfcf8f8fcfccf8fc8fcfcccccfcfcfccf8cfcfcfcfcfccfcfcfccccccfcccccfccccfcfcfcfcc8fcf8fcfcf8fcfcf8fcf8fcf8f8fccfcfccfcfcfc
                                cfefcfccfffcf8fff8fceeeeececceccfffeaee2eeeaeeeeeeceeececeeaeececeaeaefcfcfcfcceceaeeccfcccefecefececcefecfeeceeececececeeececececcfecfecccccfccfcfccfcfcfcfc8fccfccfcfcfcfcccfcfccf8cfc8fccfcfcfcfcccccc6f8fcfccfc8fcfccfcfccfcccccfcccfccfcfcf8cfcf8fcfcf8fccccfccfccfcccfcfccfcfc8cfcfcfcfcffcfcfcfcfcfcfcfcfcfcccccccccfcfcf
                                ceccfcfccf8fff8fffffccececececceccfceeeaea2eeeaeeeaeaeeecceeaeeaeeeeececcccecfeceeeeceecefecccfeccecefececeeaebeaeeeeeeeeceececefecefcccccefccfccfcfcfcfccfcfcfcfcfcfccfcfccfcfccf8cfcfcfcfccccccfcfccfcfccfc8fcf8fcf8fcfcfcf8cccfcfccfccfccfcfcfcf8cfcf8cfcfcccccfcfcccecfccccfcf8fccccf8ffcf8fcf8fcf8fcf8fcf8fcfccfcfcfecfccfc
                                ccfcccfcffff8ffcf8fcceaeeaeececccfceceeeeeeaeeeeaeeeeeceefeceeeececcecfcfefcccceaeaeeaececceeeceeecececeeeaeeeeeeeaeaeaeaeeceecececfccfcefcccccfccfc8fc8fcf8cfcfccfccfcccccccfcccccfcfcfccfcfccfccfccccf6cfcfcfccfcfcfc8fc8fcfcfccecfccfccfccfc8fcfcfccfcfcfcfccccfccccfcccfcfcf8fcffffcfcfcfcfcfcfcfcfcfcfcfcfcfcccccceccfcffcf
                                cecefcfc8fcffcffffcfeeeceecccccefcfceceaeeaeeaeceeceecececeea2aecefefccecccfefeceebeeeececeeceeaeaeeeeeeaeeecefeeeeeee2beeeececeecccceccccecfcfcfccfccfcfccfccccfc8fccffccccccfccccfc8f8f8ccccceccfcccfcfccfc8f8fc8fc8fcfcfccfcccccfcfccfcccc8fcfc8fcf8fc8fcfcccefcfcfeccfcfcffcffcfccf8ff8f8fcf8fcf8fcf8fcf8fcf8fccfccfcccff8ff
                                cccfcfccfff8fff8ffffaececfcfefccffcccececeeceececeeceeeeeeea4beeeccccefcfccccceceeeececefeaeea2eeeececeeeeaeeeaeaeeaeaeeeceaeeeaecefcfcecec7ccccfcfcfcfcfcfcfcfcfcfcfcccfccccfcfccfcfcccfcfcfcccefcfcccccfc8fcfcfcfcfcfccfccfcfcceccccfccfccfccfcfcfccfcfcfc8fccccccfccccccfcf8fcf8ff8fcfcfcfcfcfcfcfcfcfcfcfcfcfcfcccccfcfcfffc
                                cfccfcfccfcff8ffcf8fcececcecccfccffcffcffccecceeeaeeeaeeaeee3ebecfecfccceceeeceececeeeeabeeeeeaececeeaecceececeeeeaeeeeceeeeeceececececcecccccfccc8fcfcfc8fccfcccfcccfcfccccccfccfcccffccfccccecccecccfcfcfcfcfccf8cfccfccfccccfcccfcfccccfcccccfcf8fcf8cfcfcfcfefcfecfcfecfcfcf8ffcfcff8fcfcf8fcf8fcf8fcfcfcf8fcfcccfcccccffcff
                                ccfccfcfcff8fff8ffffccccefcfefefcfcfcfffcfcfeecaeeeaeeaeeeaeeeeaecefecefcfaeaeaeefeececeefeeaeeeececeeceecceceececeececececececececececfcfcfcfcfcfccfc8cfccfccfcfccfccfccccecfccfccfc8cf8fcfcccecccecccfcfcfccf8fcfc8fcfcfcfcfccccecfccfcfcccccfcccfccfcfc8fcccccfccfcfccccfcffcfcf8fcfcfcf8fcfcfcfcfcfcfc8ccccff8fffccfcfcccccf
                                cfcfccfc8ffffcfffcfcccecceeceaeecefcffcffccfceeeeaeeeeeeaeeeeeeecececefeeeeeeeebeeeeeeeeeeeeeeeaeecececececececeeeceeeceecececececeecececfcfccccfcfccfcfcfccfccfccfcfccfccecccfccfccfcfccfccfcfcfecccecfcc8cfcfccfcfcfc8ccccfcfccccfccfcccccccccfcfcf8fcfcfcffcfecfccfccfccfcf8fcfcfcf8fcfcfcfcf8fcf8fcf8fcccccfffcfcfcccccfcf8f
                                ccfcfccfcfcf8ff8ffffcfcfeceaeeeaefcfcffffcfeceaeeeecceceeeeececeeeeeeeeaeeceea4aeeeea2b2aeaeeeaeeaeececececeeeeeceeeaeeceeceaececeaeececeececfcfcccfccfcccfccfcccfccccfcfccccfcfccfccfcfccfcccecefcfcccfcfcfcfcf8cfc8fcfcffcccfcceccfcccfcfeccfcccccfccf8fcfccccfcfcfcfcefcfcfcf8f8f8fcf8ffcf8fcfcfcfcfcfcfceccfcff8f8fffffc8ccf
                                cfecfcfcffffffcff8ffccecceceeaeecfcfcffffcccfeeeccfcfcfeeaeeaeececea2a2eeeea2be2ca2a4b2beeeeaee2aeeecececeaeaeaeeaeaeeaececeecfeceeceaeececcccfccfccfccfcfcfccfcccccfccccececcccfccfccccfccfcfeccfccfcccfcfcc8cfcfcfccfccccfcfcccccccfcfeccccecccfccfcfccfccfcfecffffcfccccf8f8ffcfcfcfcfcf8fcfcf8fcf8fcfccccccff8ffffcf8fcfcfcf
                                ebeecfcc8f8f8fffcfcfccfefecececccfcfcffcfceeeaeceeffffceceeeeaeeee2be4beaeeeeaeceeee2bb2beeeeeeceeaeececeeecececcecececfeccccecccceceeeececcfcccfccfcfccfcccfcccfcfcccfcfbeccfcfcfccfcfccfccccceccfecefccccfcfcfcc8fcfccfcfcccfccecfceccfccfccccccccf8cfccfccccfccfcfccfcfccfcfcfcffcf8ff8fcfcf8fcfccfccfcfcfcfccfcccffffffccccf
                                b2becffffffffcf8ffffceecececccefefcfcffffcceeeeeaefcfffeeeea2eeceaeeaeeaeececeeeeceea2eb2ceeeceeeeeecececccececfecfcfceccfecfccfecfeceaeeaeccfcccfccccfcccfcccfccccccecececcccfcccfccccfccfcfceaefcfcccfcfccfccfcfccfccfcccfcfcccccecfcccfceccfecccccfcfcfccfcecfcfcffcccccfcfcf8f8f8ffccccccfcccccfcfcf8cfccfcfccf8ff8fcf8fcfcc
                                ebeecfcfcf8fcffffcfccececefcfecccfcfcffcfcececececffcffceee2aeeeeea2eee2ceeceeeceea2ebeeaeeceeaeaeaeeaeecececfceccececfececcefeccececeeceecfecfcfccfccccceccececcfecfcfcfcecefccfccfcfcccfcccececcecceccfcfccfccfcfcccfccfccccfcecccccfcfccccecfceccfcfcccccecfccfcfcfcfcccfcf8ffcfcfcfcfcfcfccfcfcf8f8fcfcfccf8fcfcfcff8ffcf6fc
                                e4aecffcffcff8fcffffcececececccfcfcfcffffceceaececffffcea2a4b2a2a2eeaeaeeeeeee2a2b2eeea2eeeeaeeeeeeceecececceccfcecccecccceccccecceceaeeaececcecccccccfecfecceccecccecececcefccfcfcccccfcccfcceaefcfcccfcccfccfccfcfcfccccfcfccccecefccccccecccfecccfccfcceececffcff8fcccfccffcfcffcff8fccc8ccccc8cfcfcfcfcf8fcccfccff8fffffcfff
                                bebefcff8ff8ffffcf8fcececcecfececfcfcffcfccececceccfcffeb4b2b2beebeeeeeeaeee2a4b4a4aeeeececeeeaeaecccfccccefcfecefceccececcececcececeeceecececcececececceccecceccfefccfcfeccecfcccfcfcccfccecececcfececccfccfccfcccccccfcfcccfcfcecccfcfcfeccceccccccfcfcceaecfcff8ffccccecfcf8fcf8fcfcfcfcfcf8fcfcfcfcfcf8fccfcfc8fcfffcf8fff8f
                                4ebeffcffcfffcfc8cccccecefcecccfcfcfcffffccccfcccfffffceeaeea4eeeeaeceaeeeaeeeee2beeececea2a2aeeecfcceccfecceccfcecceccecefeccececceccecceccececefecfecefececececccceccecceecccfcfcccfcccfccfceaefeccccfccfccfccfcfcfcfccccfcccececececcecccefcfeeccfcfccececccfcfcfcfccccccfcfcfcfcf8fcf8ccccccfccf8fcf8fcfcfcf8fccf8f8fffcfcff
                                b2becffcff8ff8fccfcccfcfceccececefcfcff8fccfecfffcfcffffcfeeeaeaeeeeaeeeeee23b2aececceceeeebeeccfcecfcceccfcfececcefecfeccecefecfecfeececefecfeccececececcfeccccefecfefcfeaececcccfcccfcecececeecccfecccfccfccfccfccccccfcccefcecececfefceeceeeecceccfcfcccececff8ff8fccfccfcf8fcf8ccfccfcfffffcfcfcfcfcfcfccf8ccfcfcffff8ffff8f
                                b2befcff8ffcfffccccfcffcceecececcfcfcffffcfccfcfffff8fcfccceeeeeeeaeeeeaeeaeeeaeecececececeaecececfcecfeceeececeececeeeceecececeeeeececeeceeeaeeececeeceececfecfcccecccecececcfcfcccfcccceccfeaecefccecccfccfccfcccfcfccccfecececebececececeeaeceeccfcfcfccccfcfcfcfcfccceccfcfcfcfcccc8fcfc8cfc8fcfcccccccfccfcfccff8fcffcf8fff
                                b2beffcffcff8ffccfcccfcfeceecececfccffcffcccfcffcf8fff8ffcceaeeaeeeeeeeeeeeeaeeececeeeaeeeeeecfcccecccececcececececececececeeceeaeceaeececeaeececeaeceaecececcecefecfececceccececefcecececceceececececcfccccccccfccccccfececceceeaeeceaeeceaeeeececccfcfcccfeccff8ff8fccccccfcf8fcf8cfcfcccfcfcfcfc8fcfccfc8fcfccfc8ffff8ffffcfc
                                ebebfcf8ff8ffcfcc6cccfffceceecececfcfcfffcfcccfffffcfffcfcfeee2eeeeeaeeaeeaeeeeceeecebebeaeaececfccfecceaeececececeeaeaeeaeceaececeaeeceaececcececececececececfecccecececefcfcfefcecceccecececeaecfccceccfefcfccccfcfecccfceceeceeeceeececeececececefcfcfccccfcfcfcfcfccecccf8fcf8fcfccfcfcfcf8cfcfcfcccc6cfcf8fcfcfccccfcc8ffff
                                bebecffcfcffff8fffffffcfcbecececcfcfcffcfcccfcfcf8ff8fffcfceeaea2a2b2a2ea2eeeeeeeceeeeeeeceecfccefecfefececececececcececcecceccecceccccececcfecccfcecfecceaececcefeceaeaecceecececaeecefceceaeeececefefcecccccfcfcceccfeecececeeeceececececeecececccfcfcfccfcccf8f8ffccccccfcfcfcfcfcf8fcf8fccfcfcfcffcfcccfccfcf8cfcf8ccfcff8fc
                                cfcffcffcfcf8fffcffcfffceeeecececfcfcffffccfccffff8ffcfccceeeeeebbb2bebe4aeeaeaeeeecececceccecefeceebeecefcefcfefcfefcfefcfecfecfccfefefccecccfceccfcccceccecceccccecececfecfececeeeaececcececececfceccefcfefececefcececececeeceeeaeeeceecececececcccfcfcfcfcfcfcfcfcfccfcccfcf8fcfcfcfcfcfcf8fc8fcccfc6cfccfcf8cfcf8cfcfccfcfff
                                cfcfcf8fcfcfffcff8ffcfcfccececececfcfcf8fcfcccfcf8ffffffceeaeaee2eeeeeeaeeeeeeeeaeaeeecececfececebebebeeceeceeeceeceeeccecccecccecececccecfcececfcececfefcfcecfefeccfccfececeeeaeeaeeececfecfeccfecefcececececcfececcececececeecaeeeaeecececececcccfcfcf8fcfcf8fcf8f8fcfcffccccfcc8fcf8fc8fcfccfcfcfccfccccfcfcfcfcfcfcccfcfff8f
                                cccffffcfcffcff8fff8ffffcebecececfcfcffffcccfcfffffcf8fccceee2eaeeaeae2eeeaeeaeeee4bececefeeeceebebeeebececececebececeecefecfececefecfecfcccfccccccfccccceccfcccccececeeceeeaeeeeeeeaececececcfeccccecececececeececeecececeeeceeeeaeecececececccccccfcfcfcf8fcfcfcfcfcfcfccfcfcccfccfccfcfcfcfcfcfcccccccf6cfc8fcfccfcfcfcc8fcff
                                cfcfcfcf8fcff8fffcfffcfcceceecececfcfcfffccfccf8fcff8fffceaeaeeeaeeeeeaeceeeeeeeeaeeeeeeeeceeebeeeebebebeeecebececebecbeccececececececccecececfecfecefecfececeecefecececeaeeeaeaeaececcecfecfeccefefececeeceeeeeeefeeaeeeececeeaeeeecececececcccfccfc8f8fcfcfcf8f8fcfcf8fcf8fc8ccccf8fcfcfc8fcf8cfccfccf6ecfcfcfc8fcfccccfcfffff
                                cccff8ffcff8fffcff8ff8ffcebecececfccfffcfcccfcfff8fffcfcceeeeeaeeeeaeeeceeaecececececececeeceeebebebebeeecebeeeeeecececefececececececececcfececcececceceeceeeceeeeeeeeceeeeaeeeeeecececceccececececececeaeeceaeaeeeeebeeceeeeaeeeaecececcccfccccfcfcfcfccf8fcf8fcfcf8fcfcfcfcfcfcc8fcfcf8cfccfccfccccccccf6fcfccfcfc8fcfccfcf8fc
                                ccfcffcffcffcf8ff8ffcffceceecececcfcfcfffcfcccfcffcffffffcceceececeececeeceeeeeceeeeeeecebeebeceeee7eb7beeceeccebcecececccececeeceecececececccececcececeeaeeeeeceaeaeeaeeaeeeeaeecefccefcecceceeaeaeaeecececeee2eeeea4eeeeaeeeeceececccfefccccfccf8f8fcf8fccfccccccccccf8cf8cfcccfccfcfcfccfcccfccfcfcfcf7cfccfcfcfcfcfcf8cfffff
                                cccfcff8fc8ffffcfff8ffffcebeececefcfcff8fccfccff8ff8f8fcfcecececeeceececeecececeececebebeeeceebebeceeeeeceeceeeceececccececeeeceeceececececececcceccececeeeaeaeeeeeeceeeaeeeaeeecececececcefececeeeeecececeeceab2aeeeaeaeceeccecececececccecfcccfcfccf8fccf8fcfcfcfcfcfcfcfcfcf8cccfcf8fcfcccfcccccccccccfccfcfcf8cfcff8ffff8f8f
                                cfcff8ffcffcf8ff8ffffcfcceeceececfccfcfffcccfcfcffffffffffcecececececeeeceeeeeeeeeebeeeeebebebee7ebebeceece7ecbeccecefecfecececececececcecececececececeeea2eeeaececceceaeeeaeeeaececefcececececececcecececceee2ebeeeeeeeeeaeeecececefeccfffcfcfcf8cfcfccf8fcf8cccccfcc8fcf8fcfcfcccccccccccfcccfcfcfcfcfccfcfcf8cfcf8ffffcfffcff
                                cccfffcfcfcfffcffcf8ffffccececececfcfffcffccccfff8fcf8fcfcfececeeceeeceeeaecbebebeceebcbeceebe7eceeceeeceececeececfecececececeecececececececececefcecfeceecceeeececececeeceeeceecececececfececececececececececceeeaea2aeaeeeaeeececcecceccfcfcf8cfcf8fcfcfcfcfcfcfc8cfcfcfccf8fccfc8cccfccfccfccccccfccfcfcccccfcfcfcfcf8ff8fff8
                                ecfcfcff8fcf8ff8ffffcfcfcccccccccfcfcfff8cfcfcfcfff8fffffcceceeceececeeaeeeeeeececececeececececececececececeececeecececececececeecececececececefececeececeeececcececececececceccecefececececcececececececececeeceeeeebeeeeceeaeaeececcfccfcf8fcfcf8fcf8fcfcf8fcc8cfccccf8cf8fccfc8fcfcfccfcccccfcfcccfccf6fccccfcf8cffffffcff8ff
                                cccfff8fcfcffcffcf8ff8fffffffffffffff8ffffcffcff8ffffcf8fccecececeecebeebebebebeececececececceccecceccecececcececfececececeeecececececececeeceeceececeececececeececececefeceecececececececeecececececececcececeeeceeeececceceecececceccccfccfccfcfcfccfcf8fccfcffccffcfcfcfcfcf8fcfcfcf8fccfcfccccfcfccfccfcfcfcfcfcf8f8f8ffffff
                                cfcfcffcfcf8ff8ff8ffcffcfcfcfcfcfcfcffcfcffcff8ffcf8fffffceceeececeeeeceeebeebebeececfefccfefcfecfececcccccececeeeceeceeeeeceecececececeeeceeeceeeeeeceecececeaeeceecefeceececeececececececeeeeeeeceececececeeaeeaecceccecceccececccfcfccfcfcf8cccccfcc8ccfcfcfccfcfcfcfcfcfcfcfcfccfccfcfcccccfeccccfccfcfccfc8fccfcfffffcf8f8f
                                cccff8ffcfcffcffcffcff8fff8fff8fff8ff8fff8ff8fffffffcf8ffcececeeeecebcececececececeeececeeceeecececccfefefcfcfecceeceeeceaeecececececececeeeaeebeaebeaecececeeeeaeeceeceeceeceeeeeeeceeceecececeaeeaecececeece2a2eeeececceccecccccefccfcfcf8fccfccfc8cfccfcf8cf8fcf8cfc8fcf8fcfccfcf8fcfcfccfcccfcfcccfcfccfccfcfcf8fcf8ff8fffff
                                cccfcff8fcf8ff8fff8ffcff8fff8fff8ffcffcfcffffcfcf8f8fffcfcceecececebecececececeececceceecececececececcccccececceeceeeceaeeeaeececececeeeeeceeeeeceeceeececeececeeceeceeceeaeeeaececeecececececeeeceeeceeceeaeaeeaececececccfccfeccccfccccfccfccccccccccccccfcfcfcccccccccccccccf8fccfcf8cfcccfcccccfcfcfcfcf8fcfcfccffffcfff8fcf
                                cccffcffffffcfff8fff8ffcffcffcfcffff8ffff8fcfff8fffffcfffceceeceecececececcefececeecececeeecececeaecefecfecfcececeaeaeeeb2aeececececcceaebebeccecececcceccceccececececeeceeeaeeeeaeececccccececceececeeceaeeeeeeeececcecfcfecfccfcccccfccfcfcfcf8fcfcfcffcfcf8cfc8cfccfccccccccfccfcfccfcfcfccfefcccccfccfccfcfccfcfcf8ff8fffff8
                                cfcfff8fcf8ff8fcffcfff8ff8ff8fff8fcffcf8ffff8fffcf8fff8ffccece7cebcecccfecfecceccceceeeeceaeeaeecececccceccccfecceceeceaeceecececcccecceceeceecececcceccceccecececececceeaeeeeeaeeececceccccccececeeaeea2eeeececcecececccecfccfccfcfcccfccf8fc8cfccfcfcccf8cfcfcfccccccccfccfcccfcf8fcfcfccccccccfcfccccc8fcfccf8fc8fffcffcf8fcf
                                fcfcf8fff8ffcfff8ff8fcffffcfff8fff8fff8ffcf8fcf8fffcf8ffcfec7ecececfefeccecccefcecceceab2beeeeceececccfecfcececcfcefceceececececceffffffceceaeeccffffcfffffccececececeeceeeaeceeececcccfccfcfecececeeeeececeeeaeecececcfcfccfccfccccfccccfcccfccccfccccfccfccfccfcfcfccccccccccf8fcfcf8fcfcfcfcfccccfccccfcfcf8fccfcfc8fc8ffffff
                                cfffffcfcff8ff8ffcffffcf8ffcfcfcfcfcf8ffcfcfffffcffffffcfcceceecbececccefccfecccfececeebebeeaeeceaecececccefccfececcececceccecccfcfcfcfccceeecececfcffcfcffcccececececececeececceccececcf6fccfceceeceaeaeea2aeeecececccefccfccfccfeccfcfccccccccfcccccccccccccf8fcfcfccfeccccccfccfccfccfccccccccfcccf7c6cfcfcfcfcfcfcfccfcf8f8f
                                cccf8ffff8fffcffcff8cf8fccf8fcfcf8fcfccfcf8cc8fcff8f8fcffcceecbeeccfefccececcfececcecea4b2aeeeeaeececfccfeccecccefceccfeccefcefeccffcfffcccccccccfffcffffcffecececececececceceecececcccf6f7fcccececeaeeeeaeebeaeececcfcccfccfccfeccfccccccfccccccccccf6fccccfccfccfcccccccfcfcfcfcf8ccfccfcfcfcfccfcfccccfcf8cfcfcf8fccfcfffffff
                                cfcffcf8ffcf8ff8ffcfcfccfcfccf8fcfcf8fcf8cfffcff8ffffff8fcccececcececececeeeeececececeececeeeceececcecececcefececcececececececccfcfcf8fcfffcfffffcfcf8f8ffcfcceccececececeececececececccfcccfcecececeececeeceeecececcecececcececccccefcfcccccffcfcfcf6eccfcfcfcccccccfccfccfcfccf8cfcccfcccccccefcfcfcccccfcfcfc8fcfcfccc8f8fcf8
                                fcfcff8fcffffcffcfff8fcfcf8fcfccfc8cfcfcfcfc8fcfffcf8fffffecfefccfefccfeececececececececeeeceaecececfcecececececececcececececefecfcfffcfcfcffcfcff8fffcccccccececcececececececececececfccf6fcfceccecececececccececcefcccccecccccecfccceccfcccccfcccf6ecf6cccfccfcccfccccccfcfcfccfccfccccfcfccfccfcfcf6cccfcfcfcfcfcfcf8fcffcfff
                                ccff8ffff8fcff8ff8fcfcf8fcfcf8fcfcffcf8fcf8cfcff8ffffcfcfcccecececcceeeceeeaeeaeecececececeeeececfececececececececececececececcccffcf8fff8ffcfcfcffcf8fcccccfccfeccececececececeececfecf7fcfcccecececcecececececececcececececececcccfccfeccfccfcf6fcfcccccfccfcccfcccccfccfccfcf8cfccfcfcccccfecccf6fccccf6fcf8fcf8fc8cfccfff8fc
                                fccffcf8fff8fcffcfff8cfccf6cccf6cf6ccccf6fcfcf8ffcf8ff8ffcfecfecfeefeceeaeeeceeececeeceecececeeceecececececececececececfeccccefeccff8ff8ffcf8ff8f8ff8fffffffcffcfcfeceeceeceeececeeeececf6fcccececececececececececcefccceccceccccfeccefccfcccfcccfcccccf6ccfccfcfccfcfccccfcfc8cfcfccccccfcfecccfcfccfffcfcfccfcfccfcfccfcf8ffff
                                ccfcffcfcfcfff8ff8fcfccf6cfcf6cfccfcf6fcfcfccfcfffffcffffccceeceecebeeceeeaeeaeceececececeeeeaeececeeceeeceeceeceeecececcfefcccfcfcffcffcffffcffffcffcf8fcfcfcfcffcceceeceeeceeeecececcfcccfcceeceeceececeecececcecccececceccececccfccccccfcccfcfcfccf6cefccfccfccfcccccfccfcfcfcfcfcfcfccecccfccfcfcfccfcfcf8fc8fcfcfcf6cffcf8f
                                cfcf8ffff8ff8ffcffffc8fcfcccfcfccccccf6fc8fcf6ff8f8fff8ffcceceeceeeeaeeeaeeeceeeceeceeceececeeeceeeceececeeceeceeceeecceccccefccccfcffcff8f8ff8fcff8ffcff8ffffcfcfceceaeeaeeececeeeeeeccf6f6feceeceeceeeeaeeeccfecececcceccecc7f7fcccfccfccfcfcccccc6cccccfccfccfccfcfcccfcfc8fccfccccccefccfcccfccfccf8cf8cfccfcfcf8fccfcffffff
                                ccfffcf8ffcffcff8fcfcccccf6fcffff8f6fccfcfccfcfffffcfffcfcececeeceea4eaeeeeceeceeceeceeceeeeceeeeceeceeeeceeeceeeeeceecfcefcccccfcffcf8fcffcfcff8fcfcff8ffcf8ffffcfccceebeebeeeeecececcccfccccecececececeecbceececcccececfecfeccccc7c7c7cfccccfcfccfccfcfccfccfccfccfccfcccfcfcf8cfcfccfccccccfccfccf8cfccfcfcfcfcfcfcfccfcf8fcf
                                c8cf8ffcfff8ff8fff8fcf6f6fcff8fcffcccccfccf6fcfcfcff8f8ffcceececeeeeeb2eebeebeeceeeeeeeeeceeeaecebeeebeceebeebeebecebccecccccfecccccfcfff8ff8fcffcff8fcfcf8ff8f8fffffcceebeeceaeeceecccfcfcfcececeeeebeeccececfccececccfecccccfcccccccccccfcfccccf6cc6ecfcfcfccfccfccccccfccfccfcfccccfcccfefccccfcfcfcfcfcfcfcfcfcfccfcfcfffcff
                                cfcffcff8fcffcffcfff8cfccccfcfffcffcf6fcf8fcf8ff8ffffffffceeceeeceea4eebeeaeecbebeaeececeeaeeeebeecbeecebeeceececebececcfccfcccfcfecffcf8fcfff8fcf8ffcff8ffcffcfcf8cffcceecebeececfcfcfcf6fff7ceeeceebececfefcececccececcecef7cfcc7c7c6ecccfccfcfcccfcfccfcccfcccfccfcfcfccccfccfcfcfccecfcccecfcf6fccfccccccccccccccccfffcf8ff8
                                ccffcf8ffcfcff8ff8fcfccfcfcfff8fff8ccf6fccfccfcfff8f8fcffcebeeceeceeeaeeaeeeceeeeeeeeeaeeeeeebeecececceccccececeecececcccccceccceccccffcfff8fcfff8fcff8ffcff8ff8fcffccceceeeeeecefeefcffcffcfcebcbebeebecceccecccececceccccccfccefcccc7ccf6ecfcccfcfcccfcccfcccfccccccccccfcfccfccfccccfceccfcccfcfcfccfcfcfceeceeaececcf8ffffcf
                                cccffffcfff8fffcffcfccccccfcffff8ffccccfcf6fccfcfcfffff8fce2aeeeeeeae4a4eececfeceaecbeeeaebeaeccefcfecfefeccccecceccccfccfccfccfcfccfcffcfcff8fcffff8ffcff8fcfcfffcfcffcececebeeeeeccfcfcfcffceeeebececcfecceccececfeccfecefeccfcc7c7ccc7ccccccfcccccfcccfcccfcccfcfcfcfcfccccfcccccfcccccfeccfccfcccfcfccccecbebeebebcfffcfcfff
                                ccfcf8ff8fcfcf8fcff8fcf6fcff8fcfffcf6fccfcfcfcffff8fcf8ffebb2beeeceeececcecececececefcccefecececfecefceccfefecceccccfeccccecccccfcfcfcf8ff8fcff8fc8fcfcf8fcff8f8f8fcfccecebeeecebeaecfccfcfccecbcbeeccecececcecfececceececc7ccec7ccccc7ccc7cccfccfcfccccc7ccccccccccfccccccfccccfcfcccfefcccfccfccfcfcfccccfccfcfcffcfcfcfff8fcf
                                ccffcfcffcfff8fff8ffc8cfc6ffffff8fccf6fccccccf8f8ffff8ffcceeb2eaeeeeeececececeececcccfcfccfcecececececececccfcccfcfcfcccfccfcefcffcffcffcffcfcffcffcff8ffcf8fffcfffcfcfeceeebeeeceeeececccccececefcecececfecfececcececcccfecce6ecccccccccccececccceccfeccfcecccccfcfccfcfcfccfccccccfccccefcccccfcfccfccfcccefffffcffffff8fcfff8
                                eccffff8ff8fcffcffcfcfccfcf8fcfcfff6cccfcfcf6fcffcf8fffcfeea2ce2a2aeeeececececeaccfcfccfcfecefeeeceeceeceeeccfcfcfcfccccccccccccfcfcf8ccc8cc8cf8fcff8ffcffcfcf8fcfcfcfcceecececeeececececececcfefeccecfecececececefecfeecec7cecc7cec7fcc7cccccfecfcceccececcceccccccccccccccfccfcfcfccefccccfefccfcfccfccfccfcfcffffcfcfcfff8fff
                                cccfc8ffcffff8ff8ff8ccf6ccfccf8fc8cfcf6fccfcfcffcffffcfffceebebbebe2aeeececeeeceeccccfccfcceceeeeeeceeceecececccfcfcfcfccf7fcccfcfcfcfcfccfcfccff8fcfcf8f8ff8ffcff8fccfccceceececeececceccecececcfceceececececececececceccecc7cecccfcccccecececcecefcef7cccec7f7fcfcfcfefcfecefccccccfcccfecccccfecccccfecefcfffcfcfff8ff8fffcfc
                                cecfffcff8f8ffcffcffcf6fcf6fccfcfcf6ccfccf6ccfcff8fcff8ffcbeaeeaeebeb2aeeeecececcccfccfccfeceeaeeaeeeeeebecececccfccfccfcfccceccff8fcfc8cfccc8fcffcff8ffcfcffcff8fcfffffcfccceceececfffffffffffffffeeeeeeeeeeeeeececececececececec7cc7fcfccfeceececececcecefccecececefccefecfccefcfeccefeccfefececbeeeececcecfcff8f8fcffcffcff8f
                                bccffcf8ffcfcff8ff8fccccccf6f6cc8ccfcc8f6cfcccfcffff8ffcfccecefefeeea4eaeeceeeeeecccfcfcfceeeeeeeeeebeceecebececfcfcf8fcfcfcfccfcfcf8fccf6cfccff8ff8ffcff8fcf8fcfff8fc8ffffccceeceecffcfffcffffffcfcea2ea2eeeeeeecececefececececcfcfcfcfccfceeceeceeceecefe7ceccecfeceecceccecececececcecceccecfeeeeceeeceecbffcffcfff8ffcff8fff
                                ccffcfffcfff8fcfcffcf8fcf6ccfcfcfcf6fcccfccf6fff8fcffffffffffcffcfcebeaeeeeeeaeececccccccfecbe4aeebeecebebecccccfcfcfcfccfcccc7fcfcfcfcccfc6cccfcfcfcf8fcff8ffcf8fcfcffcfcfcfceceeaeffffcfff8f8ffffbe4a2eb2a2beaeecececececececececffcfccfceceeceeecececececefeeceececceccecceccceccecececeececececeebeaeaebecffcffc8ffcff8ffcfc
                                ffcff8fcf8fcfffff8ffcccccfcf6ccc6f6ccf6fccf6fc8ffff8f8f8fcfcffffffcea4eeeae3e4b3becfecf7fceb4ee4eeeeceeccfceccfccfccfc8fccfccfccfcfcf8cf6ccfcf8ff8ff8ffcfcffcff8fcff8fcf8ffcffeeeeeefcfff8fffffffffeee4b2ee4ee2beeecececececececccfcfffcf6efcceececeeeceececeececececeecefecefecefecececeecceceeceeeeceeeececfcff8fffcff8ffcffff
                                8fffcffffcff8f8fcfcf8cf6f6fccfcfccfcccf6f6cfccffcfcfffffff8ff8fcfffcffaeeeeb323e3eecc7ccceeeb4bbeebeebefccfcfcfcfcf8cfcf8fcfceccfcf8fcfccfccccfcffcffcff8fcf8fcfff8ffcfffcffcf3b432bfffffff8f8ffcfceb2aeeb2bebeaeececececececefeccffcf8fccfccecceeececececeececeeceecefececececececeeecececececeeeebefcfcfcfcfcfcfcf8fcffcff8f8f
                                ff8fff8f8fcffcff8ffcfccfccccf6ccf6cf6fccfcfccfcff8ffcf8f8fffffff8ffffceceeeeeceeeccecfcccccb4a24a2eebcecfcfcfccfccfcfcfcfcfcccccfcfcfcccf6cf6cfcfcfcff8fff8ffcfcfcfcff8fcf8ffcb4a4b4ffcf8fffffffccee2be2b2ee2a2eeceeeeeeeeeeecececcfcffccfccfccecceceececececeececececeececececfecececeecefeecefeebecefcfcfcfcff8ffcfffcfcfcfffc
                                fffcf8fffff8ff8fff8fcf6fcfcfcffcfcfcf6fcfccf6ff8ffffffffff8f8f8ffcf8ffcecaeceececcfcfcffcfeeb4b4eebcecccfccfcfcfcfcfcf8cfccf7cecfcfcf8f6cfccfccf8ff8fcfcfcfcff8f8ff8fcfcfcfcffb44343ffffff8ff8ffceb2ae4a2bebeeebeececeeaeeceeeeeccffcfcf6cfccefeceeeceecefeecececeeceeceeeeceeeeeeeeeeeceeeceeeeeeb2cfcfcfcfcfcfcfcfcc8fcf8fccfc
                                f8ffffcf8fffffffcffffffcfcfffcffcff6cfcf8ffffcfffcf8f8fcfcffffff8ffffccceececcecefffffcfffee4b2beeececfccfccfccfc8fc8cfccfcccccfcfcfcfcccccc6fcffcfcff8f8ff8fcfffcffcff8ff8fcfea44b4fcffcfffffcfeeeb2ee4ee2b2beeeeeeea2eeeeeebebeccffcfcfccfcceceeeeeeeeeeeeeceefececeeceeeeeeececeeaeeeeceeeebeb2bbeffcfcfcfccfccf8fcfcfccfcfcf
                                8ff8fffffcf8f8fff8fcf8fcfcccffcffcfccccffcfc8ffcffffffff8ffcf8ffff8fffccececececcfcfcfffffceb4a4ecefccefccfccfccfccffcfcfcfcccccfcf8fccfcf6fccfcf8ff8fcffcffcfcf8fcf8fcfcffcffeb4b23fffffcccceeeea2eb2b2e4e4e2eeeee2e2eee2b2eeeeecfcff8fccfcefeeee2a2b2b2beeceeceeceefeeeea4a4aeeebeeeeeeeeee324b42becfcfccfcfccfccfcfccfcfcfc8f
                                ffcfcf8f8fffffcf8fccffccccfcfcfccfcfcccfcfcfccf8fc8cc8cffcf8ffccfcfcfcceccececcecfcfffcfcffb4b2beececccccccfcf8fcfcccfcfccfcfccfcfcfcfcc6cfcccf8ffcfcffcf8fcf8fcfcf8fcf8f8ffcfc4b23bffcfffbb4be32434434b43432343234b34b4343b4beecefcfcffccebe4be4b4b2b2be32eeeee2aeee2aeee2eeeeb2b2eb2a4b2b2b4b24b4befcfcfccfcfccfccfcfc8fcc8fcc
                                fcfff8ffff8fcffffcfcccfcf6ccc6ccf6cccf6ccc6cccfcffffffc8fcfcfcf8fcf8fcccececceccccfccfffffcebbbbeccccfecfcccfccfccffccfcfccfcfccfccccccfcfccccfcfcf8f8f8fcf8fcf8ff8fcffcffcfcfcb4b43ffffcfb4a432b44b24b232b2b44b4b242b232b24b2eeeccfff8ffcb4d44b22b2bebebeb2b232b2423e4b2bebeb2eeeaeee4e4b2b42b4b2bbeffcfcf8cccccfcfcccfccfcfcfc
                                f8fcfcfccfcf8f8cfcccccc6ccfccfccccfccccf6fccccfcfc8cf8fcf8fcf8fcf8fcfcfcfcfcfcfcfcff8ff8ffcceeeecfefeccccccccfccfcc8fc8cfcfcccfccfcfccf6cccf6fcfcfcfcfcfcfcff8ffcfcff8fcfcf8fffcfcceffcfffcfe2ee2b2ea2eee24342b24323444b4432b2bebefcf8fcfbe34b44b2b2b2cfeee44b2b2b4b2324b2be2eaebee2b232b244b42b2b2bcfcfcccfcfcccfccf8fcfcfccfcc
                                fcf8fcff8fcfcfcfcf8fcfcfcfcfccfcfccfcfcfccfcfcfcfcffcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfffcffcfcfcfcccccccccfcfcfccfcfcfcfcccfcfcfcfccccccfcccccf8fcf8fcf8ff8fcfcf8ff8fcf8ffcfcfcfcffcfcffcffeecebeee2eb2b2b42b4432b44b2324b24b4b2bbcfffcfcfeb4434e42b4cefcfeb24b2442b24b2bb2eaeee2bee2b4b23e42b44b4fffcfcfcfcfccccfcfcfccfccfccfc
                                fcfcfcfcfcf8fcf8fccfccfcfcccfcfccfcfccfcfccfcfcf8fcf8fcfcf8fcff8ffcf8ff8fcf8fcfcfcf8ff8fffcfccfcccfccfccfccccccfccfccfccfcfccfccf6fc7cfcccf6fccfcfcff8ffcfcf8fcfcfcfcfcfcf8ffcfcfcfcfff8ffffee2e2a2be2eee2b4432b42324b4b44342b4b4bfcfcffcfc4344b2b4ebecfece2324b2b234b232eeeee4aee2b42b2444b432b2befcffcfcfccceccfcfcfcfcfccfcfc
                                f8fcf8f8fcfcf8ffcfccf6cccf6f6ccf6fccf6cccfcccfcfcfcfcfcf8fcff8fcf8fcfcfcf8fcfcf8f8fcffff8ffccfccfccfcccceccfcfcf8fcf8cfcfccfccfccfecceccf6ccccfcfcfcfcfcf8fcff8ff8fcf8ff8ffcccff8fccfcfcfccfeaebeeeebe4eb2b4a44234b4b23232b4bb2baeefcffcfceb434442b2b2fefee4b2b234b2e4b2b4ae4aee2b2b4b44b2b2bebbbbfffcffccfcfceccfcf8cfc8cfcf6fc
                                fcffcfcfcf8fcfcfcff8ffff8fcfffcfcfcfcfffcfcfcfcfcff8fcfcffcfcfcfcfcf8fcfcfcfcfcfcfcfcf8ffcf8fcfcffcfcfffcfcfff8fffcfffff8fffffcfceeecccccfcfccccccfcff8fcff8fcfcfcfcffcfcfccccfcffffcccceceeeee2b2b2e2a2e4232434e2e4b2e4e44beffeffcbbbbcceee4eeb2b442b432b2b244b2423e2ebeeeeee4b4b4b24b234b4eefefefcffc8cccccee4efcfcfcfcfccfccc
                                fcf8fcfcfcffcfcf8fcfccfcfcfccf8fcfcfcf6fcffcfcfcfcffcfff8ff8fcf8fcfcfcf8fcf8f8fcfcf8fffcff8ff8ff8fcffccffcfcfcffcff8fcfcffcf8ffccbebecfcccccf7cebcfcfcfcfcfcfcccccccfcf8fcfcccff8fcfaececeecea2aeeeb2b4e4a4b4b234eeeeebee32bfefffcebebeefeb2b24232b232b244324b24b2b4eae2eb2beeee34b3b43b4bebecffcfff8fffccfcc44eeefcfccfcfff8fff
                                8fcfff8ffff8ffffffffff8fcfcffcfcf8fcfcfcffcfffffff8fff8fffff8fcfcf8fcfcfcfcfcfcf8fcfcf8f8ffcffcfcff8ff8fcf8ffff8fffffffff8fffcfcececcecfcf6fccebecfcccfcff8fcfcccccfcfcffcfccc8fcffccceceeceeebee2a4b2b432432432b2a2a2eeeb4befffffcbcbcfeeeb2b2b2b4b244b2b24b232432b2bebeeaeb2aeefeffffff2beebeffcffffcfcfcefc4444ecf8fcff8fffff
                                cff8cffcf8fff8f8f8f8ffff8ff8fcfcfcfcf8ff8fff8f8f8fff8fff8f8ffcf8fcff8fcf8ffcff8fcffcf8fffcff8ff8fcfcfcfcfcfcf8ffcf8fcf8fcffcccccececcfffcffcffffcfcccccfcfcffcfcccccf8fcffccccfffcffcececeaeeaeeaee3234a4b4b43e34eeeeebe2b3effcfcfffffffffe4e2b2b42432b2324b24b4b2b4ee2a2be2ebebeffffcfefeb3ebecfcf8f8fcfc444ff744eeefcf8ffff8ff
                                8fcff8f8fff8fffffffff8fcfcfcf8fcfcfcfcfcff8fffffff8fff8fffffcfcfcfcfcf8fcf8fcfcffc8fcffcff8ffcffcf8f8f8f8ff8fcfcfcfcfcfcfcffcccecccecfcffcffcfcfcfcecccfcfcfcfcccccfcfcfcf8fffcfcfcfcceceeeceeeeeeeeeeee2ee2ee2eeebebeeaee2eeeeeeccfffcffebe32e4234e44444b243242324b2aebeebeaeeecffcfffffbebbecfcffffff8c44445efe444eefcffcfffcf
                                fcfcfcfcf8ffff8ff8fcfff8fcf8fcfcf8fcfcfcffff8ff8fffffffff8ff8f8fcf8fcfcffcfcf8fcfcfcff8f8ffcf8fcffcffcfffcfcff8ff8ff8f8ff8fcccecfefffcfcffcffcffcfccceccfccccccccecccfccfcfcccfcfcfcceaeccececcecececeeeceeee2ceea2eeeee2beb32bbbbffcffffce2ee4a42b4a4a2b232b4beeeeaeeeeeeeeeebecfffffcffccefeefcf8f8ffe44474447fc444ecf6ff8fff8
                                fcf8fcffcfff8ffffffff8ffcfcfcfcfcfcf8f8fcf8ffffff8f8f8f8fffffcfcfcfcf8fcf8fcfcf8fcf8fcfffcff8fff8ff8ffcf8fcfcfcfcfcfcffcfcffcccecffcfff8fcfcffcffcfcccccccccccececceccccccccccccccccececeeaeceecececeaeeeea2aee2b2ebea2beea2bb2be3efffcfffbb2b24b4b2434434e4b23eeeeeeeecececececefcf8ffffcfce444fcfffce444eeee444ff7effffffff8ff
                                f8ffcf8fcff8fff8f8f8fffcf8fcfcf8fcfcfcfcffff8f8fffffffffff8f8fcf8f8fcfcfcfcf8fcfcfcfcff8ff8ffcfcffcff8ffffff8ff8ff8ff8fcffcfcececfcff8ffffcfcf8fcffccecececececcceccecececeecececececcececececcececeeecec2eeebeaeeeeeebea2beeeeeeefcfcfcceeeeeeeee2beeeeeeeeeeeeeeeececeecececefcfffff8ffcfcfcecff8fc444ee4e2e4444efff8ff8f8fff8
                                fcfcfcfcfffff8fffffff8ffcfcf8fcfcfcfcfcfcf8fffff8ff8ff8ff8fffcfcfcfcf8fcf8fcfcfcf8fcf8ffcffcff8ff8fffff8f8fffcfcfcfcfcf8fcfcccefcffcffcc8fcfcfcfcfcfcfccccccfcceccecececececececececececcecececececececeaecaeeeeecea2beeeeeeecfececeecefefececcececeecececececececcfeefececefececffcfffffcccccfcfcfe44e4eee4ee4447ffcffffffff8ff
                                fcf8ff8fcf8ffff8ff8ffff8f8fcfcfcfcf8fcf8fffff8fff8fffffffff8fcf8fcf8fcf8fcfcfcf8fcf8ffcff8ff8fff8ff8f8fffff8ff8f8f8f8fcfcfcfcfececffcffcfccccccccccccccefecececfecfececececceccecceccecececcecececececeeceeeeceaeeaeeeaeeeecfeefefefcfefecfefefeecececeeceeececefeeececefefeecefcfff8ff8fcffcfcffce44e4ee4e2e444efffff8f8f8fffff
                                8fcfcfcf8fff8ffff8ff8fffffffffffcffffffff8ff8ff8fff8f8f8f8fffffffffffffcff8f8fcfcfcfcff8ffcfff8fffffffff8fff8fcffcffcff8f8ffcccecfcff8fc6cf6fcfcfc8fccfccceccecececcececaececececececececececececececeaeececeaeeceeeaeeeaecefecefcefeefecfecefefecececfeefecfeefecefefecececefeccfffffcffcccfcfcce44e4ee2eee444fcf8f8fffffff8ff8
                                ffcfcf8fff8fff8fffffff8f8f8f8f8fff8f8f8ffffffffff8fffffffff8f8f8f8f8f8ff8cfcffcfcfcff8ffcff8fcffcf8ff8ffff8fffcf8fcfcfcfcfcfceccfcfcffffffcfccccfffffffceccecceccececcecececececececececececececececeececeaeeeceeceeeeeeecfecfefcefcfcefecefececcececeececeeefeecefececefecfececffcf8ffffcfccfce4444ee2ee4e444fcfffffff8ff8fffff
                                cf8ffcfcfcffffff8f8f8fffffffffff8fffffff8f8f8f8fffff8ff8fffffffffffffffcffcfcf8f8ff8fcff8ffcff8fffff8ff8ffff8f8fcf8f8f8fffcfcfcecfcff8f8fffcccccfcfcfcfccececececcececccececeaececececececececececeeaeceaeecceeceaeceaecceffcfccfccecfccfcfcfcfececeefefefefececefeecefeeceecefecfffff8ffcfcfce4444ee4e4e244efcfcfcf8fffffff8f8f
                                fcfcf8fcfff8f8ffffffff8ff8ff8f8fff8ff8ffffffffff8f8fffff8f8ff8ff8ff8ff8fcf8f8fcfcfcfcf8ffcff8fff8f8fffff8f8fffcffcffcffc8ffcfcfcfccfffffcf8fccfcff8ffffcceccececeaecfffffccecececeaeceaeaeeaeeceaeceeceeeceeaeceeececececcffffffffffffffffffffffcecececeecececfececefececfecfecccff8ffff8fc8cfc447e4eeee444fcfcf8e4fff8f8f8fffff
                                8ff8ffcf8fffff8f8ff8ffff8fffffff8fffff8f8ff8ff8fffff8f8fffff8fffff8ffff8fcffcffcf8f8fffcff8fff8fffff8f8fffffcf8fcfcf8fcffcfccccccfcf8fcfffffcccccfff8ffcccececcececccfcfffcaeceaecececeeeceeceaeeeceaecaeeaeeecaeceaeceaecfcfcfcfffcffcfcfcfcffccececefecfecfeecefececefeeceecefcffff8fffffe44fce44e2e444efcfcfce447effffffff8ff
                                f8ffcf8ffcf8ffffff8ff8ffff8f8fffff8f8fffffff8fff8fffffff8ff8ff8f8fff8fffff8fff8ffffff8fff8ff8fff8f8ffffff8fff8fcf8fcfcfcf8fffcffcfcffff8f8fcfccff8ffffcfececececcfcffffcfccececeeceeaececececeecececeeeeceecceeeccffcfcfffffffff8f8ff8fffffff8ffcfefefcfecfeefcfefcfefccfcffcfefcff8fff8f8ee444cf7444444efcf6fcce74eef8ff8f8fff8
                                fcfcfcfcffff8f8f8fffff8f8fffff8f8ffffff8f8ffff8fff8f8f8ffffffffffffff8ff8fff8ffff8fffff8ffffff8ffffff8f8fff8ffcfcff8ff8fcfcf8fffffff8fffffff8ff8fffcfffcccfecefeccffcfffffccececceceececeaececcecececcceccececccecfcffffcf8f8f8ffffffff8f8f8ffffccfefcefcfefcfefcefefcfecfeefefcfffff8fffff2e445efe4444cfcfcfcfffe4ffffffffff8ff
                                fcf8ff8fcf8fffffff8f8fffff8ff8fffff8f8fffff8ffff8fffffff8f8f8ff8f8f8fff8ffffff8ffff8f8fff8f8ffffcf8ffffff8fffcf8fcfcfcfcf8ffffcf8f8fff8f8f8ffffffcff8ffcfecefeccfcfff8f8ffcfefcfefececeaeeececfefcfcefecefecfecefcfff8ffffffffff8f8f8ffffffff8ffcfeccfcefecfecfefcefcefefefccfeccfcffff8ffee4ee444ff74ffcf6ff8fccfcff8f8f8fffff8
                                ffffffffffff8ff8fffffff8ffff8fff8ffffff8ff8ff8ffff8ff8fffffffffffffff8fff8f8ffff8ffffff8fffff8ffffff8ff8fff8f8ffcf8f8fcfcfcf8fffffff8ffffffff8ff8fffffcfccfecfefecfcfffffcfccefecececeeeccececffcfefcfcfcfcfefcfcffcfff8f8f8f8fffffff8f8f8f8fffcfcfcfefcfcfefcefcfcefcfecfefecffcff8f8fffce4e2e4e44cfff8fcfcfcfcffff8ffffff8f8ff
                                f8f8f8f8f8fffffff8ff8ffff8ffff8fff8ff8fffffffff8ffff8ff8f8ff8f8f8ff8fffffffff8fff8f8f8ffff8fff8f8f8fff8fffffffcf8ffcff8ff8ffff8f8fffff8ff8f8ffffff8f8ffccecfeeccfcfff8f8ffccfecfefececcececececefefefefefefecfefeffff8ffffffff8f8f8ffffffffff8ffccfecfefecfcefccefefcefcfecfcfecfffffffcfe2e4e4e4e4ff8ffcfcf8fcfcf8ffff8f8fffff8
                                fffffffffff8f8f8fff8ff8fff8f8fff8fff8fff8f8f8fff8f8ffffffff8ffffff8fff8f8f8fff8fffffffff8fff8fffffff8fff8f8f8fcffcfcfcfcfcf8ffffff8f8ffffffff8f8fffffffcfcfecfefecfcffffffcfefececfefecfecfefefcfecfcecfecfefecfccfcfff8f8f8fffffff8f8f8f8f8ffffcfefecfcfecfcfefcfcefcfecfcefefccff8ff8fee4e2eeefeffcffcf8fcfcf8fffff8fffff8f8ff
                                ff8ff8ff8ffffffff8fffff8ffffff8fff8fff8ffffff8ffffff8f8f8ffff8ff8fff8fffffff8fff8f8ff8ffff8fff8ff8ffff8ffffffcf8fcf8f8ff8fcff8f8ffffff8f8f8ffffff8f8fcfcceefececfcfff8f8ffccecfefecfecfefeecfcfecfecfefefecfcfecffff8ffffffff8f8f8fffffffffff8ffccfcfcefcfefecfcfefcfecfcfefccfcfffff8ffee2eeffffffcfff8fcff8fcfcf8ffff8ffffffff
                                8fffffffff8f8f8ffff8f8fff8f8ffff8fff8fff8f8ffff8f8ffffffff8ffff8ffffff8ff8ffff8fffff8ff8ffff8fff8ff8ffff8ff8ffcfcfcfffcfcff8fffff8f8ffffffff8f8ffffffffcffcefefcefcffffffcfcfefcefecfeecefcfeefefefefcfccfefecfecfcfff8ff8ff8ffffff8ff8ff8ffff8ffcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcf8fffffffffffcfcfff8ffff8ffffcffff8ffff8f8ff8f
                                ff8f8f8f8fffffff8ffffff8fffff8ffff8fff8fffff8ffffff8f8ff8fff8ffff8f8fff8fff8ffff8f8fffff8f8fff8fffff8f8fff8ff8fffff8ff8fff8ff8f8fffff8f8f8fffff8f8f8f8fcccfefcfefcff8f8fffcfcfefcfcfefcfcfeefcfcefcfecefefcefcfcfcff8fff8fffff8ff8fffff8fff8ffffcffffffffffffffffffffffffffffffffffff8f8fcfcf8ffff8ffff8fffcf8ff8f8ff8f8ffff8fff
                                8fffffffff8ff8fff8f8f8fff8f8fff8ffff8fff8ff8ff8f8ffffff8ff8ff8f8ffff8ffff8ff8f8fffff8f8fffff8fff8f8fffff8ffffff8f8fff8ff8ffffffff8f8ffffff8f8fffffffffffcfefcefccfcffff8ffccfecfecfecfefefcfefefcfecffefcefcfefefcffff8fff8f8ffffff8f8fff8ff8f8fff8fcfcfcf8fcf8fcf8fcf8fcf8fcf8f8f8ffffffffffff8fff8f8fff8fffffffffffffff8ffff8f
                                ff8f8f8f8fff8ff8fffffff8fffff8fff8ffffffff8fffffff8f8ffffffffffff8ffff8fffffffff8f8fffff8f8fff8fffff8f8fff8f8ffffff8ffffff8f8ff8fffff8f8fffff8f8f8f8ffcfcfcefcefcffcf8fffcfcefcefecfefcefefccfcefefcecfefcfecfecfcff8fff8fffff8f8ffffff8ffffffff8fffff8fffff8ffffffffffffffffffffff8f8f8f8f8f8fff8fffff8fff8f8f8f8f8f8f8fff8ffff
                                8fffffffff8ffffff8f8f8fff8fffff8fff8f8f8ffff8f8f8ffff8f8f8f8f8f8fff8fff8f8f8f8ffffff8f8fffff8fff8f8fffff8fffff8f8ffff8f8fffffcfff8fcfffff8f8fffffffff8fcfcfefcfcfcfffff8ffcfcfefcfefccfccfefecfecfcfcfecfecfecfcfcffff8ffff8fffff8f8f8fff8f8f8ffff8f8fff8f8fff8f8f8f8f8f8f8f8f8f8ffffffffffffff8fff8fffff8fffffffffffffff8ff8f8f
                                ff8ff8ff8fff8f8ffffffff8fff8f8fff8ffffff8f8fffffff8ffffffffffffff8fff8ffffffff8f8f8fffff8f8fff8fffff8ff8fff8fffff8f8fffff8f8ff8fffff8f8ffffff8ff8f8ffffccfccfecfefcf8fffffccfefccfccfecfecccfecfccefecfcfcfcfcfccff8ffff8ffff8f8fffffff8fffffff8ffffff8fffff8ffffffffffffffffffff8f8f8f8f8f8f8fff8fff8f8fff8ff8f8ff8ff8fffffffff
                                8fffff8fff8fffff8f8ff8fff8fffff8fff8f8ffffff8ff8fff8f8ff8f8f8f8ffff8fff8f8f8ffffffff8f8fffff8fff8ff8fffff8ffcf8ffffff8f8fffffff8f8fffff8f8f8fff8ffff8fffcfcfcfcfcffff8f8ffcfcfcfcfcfcffcfffcffcfffcffcfcfcfcfcfffcfff8ffff8ffffff8ff8ffff8ff8fff8f8f8fff8f8fff8f8f8f8f8f8f8f8f8ffffffffffffffff8fff8fffff8fff8ffff8ffff8f8f8f8ff
                                ff8f8fff8ffff8fffff8fff8fff8f8fff8fffff8f8ffff8ff8fffff8ffffffff8ffff8ffffff8f8f8f8fffff8ff8fffff8fff8f8ffff8ff8f8f8fffff8f8f8ffff8f8ffffffff8fffcfff8ffffffffffff8fffff8fffffcffffffcffcfffcffcfffcffffffcfffcfff8fff8f8ff8f8f8fff8ff8fff8fff8fffffff8fffff8ffffffffffffffffff8f8f8f8f8ff8ff8fff8fff8f8fff8ffff8fff8ffffffffff8
            `)
        }
        
        if (player1.y <= 2000) {
            scene.setBackgroundImage(img`
                666a666666a66666a66666a66666a6666a66666a6666a6666a6666a6666a6666b666a666b6666a666b666b66966b669666b6696a6696a6966b66966b66966b6966b6966b6966b6966b6966b696b696b6966b6966b6966b696b6966b6966b6966b696b696b696b6966b6966b66966b66966b6696a6696a66966b666b666b666b666b6666a66666a66666a6666a6666666a66666a66666a6666666a66666a6666a
                                6a666a6a6a66a6a666a6a666a6a696a6966a9a669a6966a9669a6966a9669a6a66a966b66a9a696a989a669a6a669a6a9a69a6696a6696a6a96a6a96a98a96a6a96a6a96a6a96a6a96a6a96a6a698b66a9a698b69a6a96a6a698b69a6a96a6a96a666a6a66a66a6a96a6a96a98a96a98a96a6a696a6696a6a66a9a66b66a966a98989a696a9a696a9a696a9669a6a9a669a6a666a6a666a6a6a666a6a666a666
                                666a666666666698966696a966986a66a66666a666a6a66a6a66a6a96a6a66966966a66a96666a6666669a6669a66666666a66a696a98969666966a69696a696669696a696669696a9696a96969a69a96669a69a6696a69696a96a6696a9696a969a96969a969696a6966696a96696a966a9696a69a6a6969a96669a69a66a666a6a666a66666a66666a666a68966666a66696a96696a6966698966669a66a6a
                                6a669a6a9a6a98a6a6a6a666a6a666666a6a6669a666696666696666666698a6a6a696966a6a969a9a9a666a6669a9d9a966969a66989a6a6a9a69698a6966a9a6a6a696a9a6a6a966a6966a6a6698989a669a669a696989a666969a6966a6966a666a6a666a6a696989a98966a6a666a9666a69666966a6666a6a666669669a69669a669a6a696a6a666a66986a6a6666a6a666a68666a6a6a6a6a6a6666669
                                666a666666666666666666a66666a9a69669a6a666a98a6a9a6a6a6a6a98a9669666a6a669666a6666666a969a69d1dd19b6a666b6a989669666a6a696a6b966969696a966969666a966a969696a96a9669a669a696a6a98969a6a696a696a6a969a96969a96969a6a966a989a96969a669a966a69a6a969a696969a6b6a6a666a6a669866966a66969a696a6a96669a696666a6669a66666666666666a6a6a6
                                a6666a6a66a6a6a9a6a9a666a69a666a6a666666a966696666669669666966a66a96666a6a69a696a9a6966a69d1d9111d696b9a6966a6b6a9a96969a96986a989a6a966a989a9a9669a96a6a9698966a9a69a696a696969a6a9696a969a69696a696a69a696a98966a9696a966a6a696a666a96989698989a6a6a6696a6966b696698a9a6a666986a666a669689a666a6a66966a666a9a6a69a6a6a98966666
                                66a666666a669666666666a966a6666666a6a9a666a6a6a6a9a6a6a6a9a6a696a66a9a9696a666a66669a696b91d11d969a6b6669a6969a96666a9a666a9696a966966a9669a6696a966696966a9a69a9696696a969a6a669696a96989896a98969a696a966a96a9a966a696a699919a696b966a6b6a69a66696696a6696a696a6a6a9666966b6a966696698a66a66a66669a89896a6666698666696898a6a6a
                                669a6a9a6698a6a6a6a6a966a666a9a6b6966669a669669666696696666696a69696666a66969696b9a66a66111191119a696a9a669a6666a9a96669a966a96989a6b9669a6969a696a9a6a9a9669a696a69a6966a96969a9a696a6a9a96969a9a696a9669a9696696a969a6119bdd919b66a9696969a669a6a96a696a6698a69696666a66a96666a9a6a6a966966966a98666a6a669a6a66a6a98a66a666966
                                6a6666666a666669669666a669a666666a6a69a6698a6a66a986a66a96a98966a6a6a9696a6a6a6a666969a9d1911d1d191a96696a69a9a96696a9a696a96a9a969a669a696a9896a969696696b9696a969a96a9966a9a9669a6969696a9a6a9696a9669a696a69a999b6a999d11911d11996a6a6a6696a69698966a969a6966a66a9a969a66a9a666669666a6a6a6a966a9a69669866698966666698966a66a
                                666a6a6a669a69a6a66a66698669a6b696698666a696969a669a9696a666a6a9696966a66969696969a6a661911d19119d999a9a969669669a6969698969a966a9696b69a969a96969a6b6b9a69a6a969a69696a6b96966a969a9a9a69669696a69669a969a999a6939d199dd9d1d91916bb9696969a6969a6a989a66a669a6969a6666a66966669a9a6a6a966966666a66666a6a6a9a66a6a6a9a6a66a666a6
                                9a6966966a666a6666a69a6a69a6666a6a66b6a966a6a6669a666a6696b69666a66a696a9a6a6a6a6a9999d11d1111d119d9b9966b6a9a9a69a6a96a9a966696989a96b69a696a9a96969a969a69696a969a6a9969a6a996a9669669a9a9a9a969a9a96a9691d19911d191d11191d1d1d996a9a6a969a6a69669a696969a669a66969a696a6a9a69669669666a6a9a6966b6a96669666a69669686666a69a666
                                666a66a66989a666a96666698666a969669a6966a96696a9896a969a6a96a9a969a96a9666969696966b19d191d91d191d99b9a969a9666969696a9696a9a9a9a966a96b69a69696a9a696a9696a9a969a69969a96996a969a9a69a966969669a9696a969a191d1d9d91d1919d191919d9d999699a989696a9a696a9a6696a669a6a696a6969696a9a69a66a966666a6a98966a6a66a6986a6a69a69a66666b6
                                a666a669a66a669a66a9a6a69a696a6a6a666a6966a9896a66966a6696669896a666966a9a6a96a96a96d9d111111911d9b9a696a9669a9a6a9a969a696966966b9a969a969a9a69669a9696a969696b696a9a69a6a969a96969a969a9a9a9a966a9696b619d9b9b9d191d1d1d1d9dd9dd1dd9d9b969a9a96696a96669a6969a66966a696a66a69669a66a966a96a96666a6a696698966a9666666a6669a66a6
                                69a696a666a698669666696a66a66966969a966a696a6a696a6a969a6a9a698969a98b966969896a966b6b91d91d11d1116a96a9669a966996966969a9a69a9a96696b696a96969a9a969a9a96b9a9a96b969696996b969a9a9696a969669696b969a9a999d6b696a96b99b99d9d9d919d99d9dd9b9b6666b6a966a9a69a6a696a6b9698969a96a6b669666a966a669a969696a6a698a966a69a6966a666a696
                                a666a666a9666b6a6a9a6a696969a6a6a6666a96a696969896966a6969669a6a966696a9a69a9a9669b969d111d9191196969696b9a96b9a6b6b9a69669a96969a9a969a969a9a96969a96969a9696969a96b9a9a69a6b6969a9a969a9a9a9a96b9a9696a9b969a969a96a96a969a9b9a9b9dd99d999a9a96966b9696966969a999a69a989898969a69a9a966a969866a6a66a6966a966a666a66a669a669866
                                66a9669a66a96a969666966a6a66696969a969896a6a6a69a6a9696a6a9a696989a9a69669a66669a99a9a11911111d91d9a9a69a969a96969a969a9a9696a9a96969a969a96969a9a969a9a969a9a9a969a96969a9969a9a96996b969696969a96969a9696a9a96b96a969a96a96966969a96d9d9b99969a9b96a989a9a6b666a696a66b6b69a669a96d989666a69a96696a966a966a6696966989a666a69a6
                                a966a666966a666a66a6a96969a9a6a6a66a6a969696969a696a6a9696696a69a69669a69b969b9a9696911d1d191d11dd1199b969a9619a9696a96969a969696a9a969a969a9a96969a96969a9696969a996b6b969a969699ddd19a9a9a9a9696b6b969a9a96969a96969a96996b6b9a9696a9a9b9a6b9a969a9669a66969a9696a96969a6989a661919d9a9a9698989a66666966a6966a6a636a666a96a666
                                98989a9a6a969a969a9666a6a66669696969698a6a69a6696a969699a116a96696a9a696d9a99a966ba9d1911911d1911191d119a969d911b6a996b6b96b9a9a99696b969a96969a9a969a9a969a9a9a969b99b9a969a9a9a19191d1996969a9a99a96a96969a9a969a9a969a9a99a969a9a969696a996a69a696a9a969a966b9a996a9a696a9669d9ddd196666a69a669a9a9a6a696a6966969696a966666a6
                                a6a96666966a666a6669a96969a9a6a6a6a9a69969a69a9a696a96a9111119a9a96969a99b9d9699a96d111d111d111d91d9d9d9d99d9dd9119b69a96b96b9696a9a96b9a969a9696969b96969a9696969d939199a969696191d1d91d19b9b9696969b9b9a996969a96969a9696a969a96969a9a9696a996969a96966b6989a99d6d96696a966a99dd19d9b9a9696a69a666666966a698a9a6a6a6666a6a9696
                                9666a69a6a69696969a666a6a66696969696698a969669896a96696a919191199939d119b969b939999d191191d19191191d19d19dd9d91111119b99a969a96b9969b9a969a99b9a9b9a969a9b969a9b9bdd1dd9d9b9a9b99d191d191dd999a9b9a9a96969a9a9b9969a9b969a9969a969a96969a9a969a9a9696a9a969a9696d9a96b9a9669a9b9d9d19166989a6966969a9a6a9696a966669669a96696a6a6
                                a69a96a6966a6a6a6a69a96969a96a69a6a9a696a989a96a969a9a9696d1d1d11d1d191d11dd9d9b9b11d1d9d1911111dd9919d119d9d9dd19d1119b96b969a96a9696969b969a9969a969a9969a9969a919d9d9d969b96bd1d191d1919d9a969a9969a9a969969a9a9969a9b969a969a969a9a96969a9669a9a96969a96b9b9d99b966669a96919d19dd9a9a9896a9a6a6669666a66989a9a6a666a6a669666
                                96a66696a6969696969669a6966a969a69669a9696a96a969a69666a9a96d19d11911d11911dd16d9b91191d9d91d1d191d1d9d919d9b9a9699b9d969a9a969b99a9a9b9a969a969a9969b9b9a99b9a999d9d9dd9a9a9699a9191d91dd9d99b9696b9b999b9a9a9699a9a9969a969b969b9a96969a96969a96696a9a9669a9d9a9b6a9a99d69dd91d9d919966d9b96696969a69a969a698989696a96969a6a98
                                a969a6a696a989a6a989a696a9696a6969a9669a696a969a9696a996969a99d91d11911d1d19119d911d1d9119d9199119d91d9dd9d99a969a969a9a9969b9a9699b969a99a9969b969b9a9699a9699b9b99b199b9699a9b99d1d1d1919d9b99a99a99a69a99699a969969a969b9a9a9a96969a9a96b9a969a9a96969a96969a9696969a99a191d9dd1d9361d91d919a6a9896a69a696a966a66a96a6a666669
                                66a69696a966a96966b696a96a9a969a696a9a69a96969a969a969a9a6966a91d1911d1911911d1dd1d1911d919d9d9a99d19d91d99a969b969a9969b9a9969b9a969a99699b9b99a9b9b99a9b969a9dd91d9d9a99a999b961919191d9d9d9d99b99a999b969b9a99b9a9b99a969969969a9b969969a969a96969a9a969a9a969a96a969a99d9d919d9d91d9dd9ddd9d969a6969896a6989a9696669669a9a6a
                                9696a6a966a966a69a96a96696669a69a696969699b9a969a696a9669a9a9969911d191119d191d1191119111d9d9d9d9b9b19d9b9b969a96b99a9b96996b9a969b9b9b9b9a969a99b969a9969b9b911d1d1dd99b99dd9ddd1d1d1d1d9dd19dd99a996b969b9a9969a99b9699b9a9b9a99969a9a9a996b969a9b96969a96969a69699b996d9d1dddd91dd9dd91d919d99a696a96a9696a9666a6a9a66a666966
                                a6a969669a969a96a9696a9a9a9a696969a9a6a9d1d99b9696a969a969696a9a69d1111d19d9d9911d99d1d9119dd99b9999a969a969a99699b96969a9a99a99b969a969a99b9b969a9b9969b9a99dd919191d119dd91d9191919d1919d9d19dd99b99a9b9a9969b99b969a9a9969a996a9a9969b96b99a9b969a96b969a9a969a9a9da99dd9d9191d919191d9d19ddd996a96a966a6966a96969669a969a6a9
                                6966a9a9669a696969a6969669696b6a96969999d1ddd9da999a969a9a9a9699a99d91d19d9d9dd999dd91d1d1d99b99a9a969a996b99b9bdd91ddd9969b99699a9999a99699a99a9999a9b9b999b11d1d1d919dd91d1d1d1d1d191d9d91d19d9d9b9b99b9969b9a9a96b99b96b9b96999b96b9b969a96969a96969a9a96969a9696999dd91d919d9dd9ddd9d9d9d99d9d969696a969a696a9a6a9a666a69666
                                a9a966989a696a9a989a9a69a9a9a9969a9a6a9d1d191119d169a969696969a969a9d1919d9d9a99ba99b999d9d9d9a969b9b996b99a969d911d191dd9b969a9b9b6b99b9b9a9699b9a99b999a9d1919191d1dd91d19191919d191d19d1d9d9d9d9999a99a9b9b9999b99a99a99a99bbb969b9a969d9b9a9b969a9b96969a9696b6ba9a91d9d1ddd191d9191d9dd9dd9d9db6a9696a969a966969669a96989a9
                                66969a69a96a9696a96969a9696966a9a9696961d9111d1119d969a9a9a9a969a96969b9d9d999b96969a9b999b9a969b96969a99a969a111d191d1919b9a99b9699b9a99a999b9b9b9699a99d91d1d1d191919d9d91dd1d1d191d9d9d911d9d9dd9399b999b99a9b99a99b99d99b9996b9a999b9391999b96b99a969a9a96b9a99969619d19d99d9d91d9d9dd919d9d9d99a96a6966a6669a6a69a6696a9666
                                9a6a69a966969a6969a9a969a9a69b9696a9a9a9111d191919da9696969696b969a9a99a9b9a9a969a9b969a9a969b9a99a9b99a99b999d91d11d91dd99b9b99a9b9a99699b9b9b9969b9b9d9d1d91919d1d19d9d9d91919d91d1d19d9dd91d9d9d9d9d9b9a9b99b9a99b99a99d99b9a99b9b969b91ddd99b99a969a969969a969a69a9d9d9dd1d91d9d9d1d919dd9d9d9b96699a9a9969a969698969a6989a9
                                a96969669a9a969a969696a96969a96b6996969d11911111dd999a9a9b9a99a9a9969a96996969b9a9969a9699b9b969b999a99d996b9d1119191119d9b999a999b99b9b9b99699a9b9b99d9d1911d1d1919dd9d9d9d1dd11d19191d19d91d9d9d9d9d9d99999a9999b99b99b9a9d9b9b99b9a9b19d9193d1d99b9969b9a9b969a99b9191dd9199d9d9dd9d9d9d9d9d9d9a69a696696a9a96a9a96a9669a6966
                                69a9a69a96969a96a9a9a969a9a969a99a9a9a99d11d19d191d9b99696969a96969a9969a9a9b969969a999b9a969a996b699b9ddd19b19d11d1d1d19d9b9a99b99a999a99a9b9b999b9b9d1d1d19191d1d191d1d19d9191919d1dd91d1d9119d9d9d9d9b9a9b9b9a99a99d9a999a9999b1999b91d1dd9d9d91d9b9a969969a9696a99dd9d91ddd9d9d9dd9d9dd9d9d9d999a96a9a9696669669896a9a696a6b
                                966969a96a9a96969696969a9696b969a96996d99d191111d1119d9d9a9a9699b9b969b99b969a9b9a99b9a9699a99b99b9a9911911d1d11d191191d99b9b969b9a99a99b999b99b9a999d1d9191d1d919ddd19191d1d1dd1d1d911d919d19dd9dd9dd9d999b999b9b99b9a999b99b9a99b1dd919d919d191d9d99b99a9bd969a999d9d91d9d99dd9b99d9d9d9d9d9d9d93999d9696a9a9a9a96b969696a969a
                                6b9a9a969696a9a9a9a9a9a969a969a969a9b9dd1d111d911919d9d9d999b9a969a9b9a969a99969b9b9699b9b99b96b99b99d1d11d19119111d119d199a999b999b99b99b9b9b9b99b9a91d1d19191d1d9b91dd1919d919191d19d1d1d9dd91d9d9d9d9db99a9b999a9999b19b9d99b9b999d1dd19dd9d19d9d9b9699b99d9d9b9d9d1d9d9ddd91d9a969b99d9dd9d9d9d9dd9d9a969699999a96a9a6966a96
                                9a69696a9a99696969696969a969a969a9699d91191d911d1d19d9d9d9b9699a9b96969b9b96b9a9969a9b969a969b9939dd1d1191911d1d919191d9d9b99b9b9a99b99b99a999a99b999d19191dd1d91d9bd9d91dd11d1dd191d1919d119d919d9d919d9d9b999b9b99b9b9b99b9dd999b9b19d9d19d19dd9d9d9a9a969a9d9d99b9d9d9d9999d99b96b9a9a969a9b9d9b9d9d9d99d9d9b9b96a9669a69a96a
                                969a9a9696a9a9a9a9a9a9b969a9969a99a9a91d1111111911d9dd9d9d9b9a99699a99a99699b99b9a9996b9b99b99a911191d91111d19191dd119d9d99b9b99b99b9b99a999a999b9db9d1d1d191911d9bdbd91d19d919191d91d19d99d9d9dd9d9d9d9d9d9b9b999b9d9999a99dd1dd9d9d91d19d19d9d9d9d99969b9a99d9d9b9d9d99b9b9a9a969b969696a9696b9a9d9b9d9d9d9d9dd9a969a969a96696
                                9a96969a996969696996969a9696b9a969999111d91d1911d1919d9dd9d99b969a99b996b9a99a9699b9a99b9b99a99d9d911911d91191d19d99dd9d9d99b9a99b999a999b9b99b9999b91919191d1d9ddb9dbb91911d1d1d91d19d1d19d9dd9d919d9dd9d9d999b9a99b1ddd9b999d91dd9dd91919d91d9d9d9db9b99a999d99b999b9a99a9b9699a96b9a9a9969a96969a969a9b9b9d9b9696b696a969a9a6
                                969a9a969a9a9a9b9a9a9b969b9b9699b9a1d1d9111911d1911d9d9d9d9d99b9b9b96b99b99a99b9a9999b9969a99b9d9d91dd9d11d1191d191d9d91d939999b99a999b9b999b99bdb9d1d1d1d1d91d19b9b9b9bb1d919191d191d1919d9d9d9d9d9dd9d9d9ddd9b99b99b919d9ddd91d9d191dddd1dd91d9d9d999a9699b9a9a9b9a969b96969a969a9696996b9a99a9a996b9696a96a96a9a969a969a69696
                                b9696969a9699696969969a9b9a969a9696919111d11d1111191d919d9d9399b9969b9a99a99699b9b9a99a9b99b999d9d9d9d9d9119119d19d9d9d9d99b9a99b99b9b999b9d1dd999b191919191d19dbddb9db9c6d1d1dd191d9d91dd9d9d919d9d9d9d9d9d99d9b99b99ddd9d9d1d91d9d191919d91d9d9d9ddd999b9a9699969a99b969a9a996b9969a9a9a969696996a99a9a996969a9696b969a9696a9a
                                9a9a9a9b969a9b9a9b9a9b969699a999a9b9d1d191191191d1d9d9dd9d9d9d99a9b9b99b9969b9a99969b9999b99a9d9d9dd9d911d11d1d1919d19d9ddd999b99b99b9b9b9dd919d9391d1d1dd1d911d9b9db9db8c89d9191dd19dd9d9d9d9d9d9dd9d919d9d9d9d9d9d9b9911d19d91d91ddd9dd91d91d19dd99ddd9b9969b9a99969a9a996969b96b9a9969969a9a9a9969a9696b9a9a969a96a9696b69696
                                969696969a9969a99a96969a9b9a9b99999b19111d11d1d1919d911d9d9d9d9d99a99a969a99b99b9a999a9a99dd99d9dd919d9d19191d11d11d91d9d99db99b99a999b99dd11d1d1d11919d9191dd9bdb9bdb9d66c6b9d1d9191d9d9d9dd9dd9d9d919d9dd9dd9d9dd9d1ddd91d191dd19191d1919d19d9d9d9d999b9b9b9a99a9a996996b9b9a9b9a9969a9a9b996969a96969a9696969b96999a9a969a9a9
                                a9a9b9a9b96b9a969969b9b99a9969a9393919d191d19119119dd19191d99d9b9b96999b99b99a9999b9b999b111d9d9d9d91d19111d19191d11d919d19d9b9d9b9db99bdd9191919191dd11d1d191b9b9db9db9bbd6cb6d1d1d19d9d9d9d9d9d9d9d9d9d9d919d9d9d9dd9119d91dd919ddd919dd19dd91d9d9d9399b969b969969b9a9b99a996969969a9969969a9b9a99a9b969a9a9b969a9a6969a9a9696
                                9696969b69b9699b9a9b9a969969b99b99dd19d111911d19dd9d91d9d9d9319a999b9a99a99a99b9a99a99b99d191dd19d9d91d11d9111d119191d9d9d1d99d9d9d99b99d11d1d1d1d19d99d9d9d19dbdb9db9bdb9b6b6b689d911d9d19d919d9d9d9d9d9d9d9d9dd9d9191d91d19d19d1d91d91d9dd91d9d9d9d9d9b9b9a99b9a99a9969a9969a9b9a9b969b9a969969969969a99b9969a9a9699a969696b6b
                                9a9b9a99a99a9b9699b9699b9a9b9a99a999dd9d1d11919d9d919d919d9d99b9b9a999b99b99b99b9b99b9b91d1d19111d919d19111d91191d1d91d9d919d9b9d9d9d939d9191919191d9dd9d919dd9b9db9bd9b9bb6b6b6cb119d19d9d9d9d9dd19d9dd9d9d9dd919ddd191dd91d91d191d91d91d91d9d19d9d9d99b9999b9699b9969b9969a999a9969b9a969b9a9a9a9a9a99696b9a96969a969a9a9a99a9
                                699a99a99699b9a9a969b9a999b969b969a961d91191d9d919dd19ddd9d9d999699b9a9b99b99a9999b999b1d19111d911d9d11d19111d1d1919d9d9dd9dd99d9d9b199d11d1d1d1d1d91d911d19db9db9db9bdbd9b6b6b6b69d191d9d9d9d9d99d9dd9d9dd9d9d1d9d91dd911d91d919d91d91d91d91d9dddd9d9b99a9a99a9b969a9b9a9b99b69969a99699a9969969969996b9a96969b9a996b9696969696
                                9a9696969a9a96999b9a9996a99a999a99b9d9d1d1d19d9d9d919d9919d99a9b9b99b999a99a99b9a99a9b99d11d9111d911191911d91919119d1d9d9d9d9d9d9b99b1dd1919191919d1911d91919bdb9bd9bd9b9b6b6b6b6c9d1d191dd9dd9dd9dd9d9d9d9d9d9d91d9191d9d91d1ddd1d91d9dd91d9d19191ddd9b99b96999a9b999a9969a99a9a999a9b9a969a9a9b9b9a99a99b9a9b96969a969a9b9a9a9
                                b99a9b9a99b999a969b96b999b99b969b999dd1911919dd9d9d1d9ddd99399b9b9a99b9b99b99b999b9999a99d911d9111d1d11d1d11119dd19d9d919d9d9dd9d9dd9d91d1d1d1d1d19d1d911dd1b9b9db9bd9bd7d6b6b6b8c9d9191d19119d9d9d919d9d9d9d9d91d1d91d191d19d919d9d9d191d9d19dd9d9d999b9b99b9a9999a96969b9969999a96996999b99b9969a969a969699969a9b99b9a99696969
                                6b9969b9b996a99b9a999b9a99a99a999b939111d11d19d91d9d91991d99b99b999b99a99b9b99b9b9b9a99b9911d111919191d19191d9d9d9d9d9d9d9d9d9d9dd191d1919191919191d91d91919bddb9dbd9bd9bd6c6b6b6c9d1d1d91d191d91d9d9d9d9d919d9d19d91d9d19d91d9d191dd9dd9d19dd919d9d9d9a99a99b9b9a99b9b9b9b9a9a969b9a9b9a99a996b9b99b9969a9b939a996b69696b9a9a9a
                                99a9b9969a999b9699b9a999a99699b9a999d1919191191d9d9d9ddd9dd9b9a9b9b9b999b999b99b999b99b99d9d91911d111d91111d19d9d9dd919dd9dd9d19d9d1d191d1d1d1d1dd91d1d1d1db9b9db9b9bdb9b9c6c6cb6bb919d1d91dd91d191d9dd9d9d9d9d9d191d191d1d191d91d919191d9dd91d9dd9d9d9d999b999999b9699a99699969b99b99699a996b99a969a9b9b9d9d9996b99a9b99a969969
                                b9699a9b99a9b9a9b99b9b9b99b9b99b99b9d1d11d1d1d19d9d9191919d99b999b999a9b9b9b9b99b9b99d9b9d99d11d191d11119d1919dd9d9d9dd9d9d9d9d19d9191d191919d19d91d191919d9dbd9bddb9d9bdb6b6b6c6b6dd19191d911d91dd1d19d919dd9d19d1d9d19d9d9dd91d9dddd19d191d9d19d19dd9dd9b9dd939b9939b969b9a9b99a996b9a9969b9a999a9969b9d9d9d9a99a999a9699a9a96
                                9b9a999a99969999b9a999a969b99a99b99dd19111911919d9d9d9d9d9d9b9b9b9b9b99999b9993d999399b99b9391d19119191d1191d191d9d19d9d9d9d9d9dd91d1d191d1d191d11d91d91d1bdb9bd9b9dbbd79bb6b6b6c6c9191d191d9d1d91919d119dd9d9d9d191d91d191d191d919d919d9dd9d19dd9dd9dd9dd9d9d9d9d9d9999b9b99b9a996b99b9b9b99b969b99b9b99dd9d9d9b996b969a9b9699a
                                99b96b99b69b9a9b999d9999b99a99b99a999d1d911d11d9d91d9d9d9d9d999999b99b9b9d9b9d91db99d9939d99d1911d1d119191d11d1d9191d9d9d9d919d19d91d91d19191d19d91d911d9d9b9db9bdb9d9b9d6b6b6c6b6bb9d19dd191d91d9d1d9d9d9d9d9d9ddd91d9d91d9d19d1d9d9dd1d91d9d9d919dd919191d9dd9d9d9bd9399a96999b999a99969b9a99b99a9969d9d9d9b969a99a99b9969b9a9
                                699a99a999b9b9969b11ddd99a99b99a99ddd9111d191d1d1d9d9dd9dd9ddddd939b99b99399dd19d9d9dd99d9d9d11d191191d1d11919111d19d9d9d919dd99dd1911d91d1dd91d1d911d911b9db9bd9b9bb9dbb6b6b6b6cb66d91d191d191d91d911d1d19d9d9d191d91d1d91d9d19d9d919d91d91d9d9d9d9d19ddd9dd9d9dd9d9d99d999b9a99b9a99a9b9969b99a9969bd9d9d9d99b99a996d9a9a9699b
                                9a99b99b9d9a9b9b91d111dd99b99b99b999d1d91911191919d9d919d919d99d99d9b911d9bd911d9d9d9dd9d9d9d99d11d1d1d191d1d1d9191d9d1919d9d9d9d91dd911d91911d911d9191d9db9bd9bdb7d9bd9c6b6b6cb66b6dd919d19d191d919d9d99d9d9dd91d91d9191d91d9dd9dd9d19d9dd9d9d9d9d9d9d9d9d919d9d9d9d9dd939b9b99b999b99b9a9b99a9969b99d9d9d9939b9b99b99b999b9a96
                                99b99a99b99999b9d1919119d99b99a99b93191d9d9d911d1d19d9d9d9d9dd9ddd9111d1d9911d19d9d9d9d9d9d9d9d99d919191d9d91d11d1d91d1dd9d9d9d9d919d9d91d1d191d9191d19db9bd9bdb9d9bdb9c6b6c6b66bcb6b91d19d19d19d9dd919dd9d9d91d91d91d9d91d91d91d91d9ddd91919d9d9d9d9d9dd9dd9dd9d9d9d9d99d99b9b99b9a9b99999b969b9b9b939d9d9399d999a99a999b99b99a
                                9b9a99b99b9b9a999d11d1d19d9b9b99b9d1d19d9dd91d19199d9dd9dd9119199d19d191d1d1d911d19d9d9d9dd9d9dd91d11d1911119191d911d919d9d9d9d91d9d9d9d91919d1d19d9dd9d9bdbd9b9bbdb96b6b6c6b6cb66b6bd91d191d19d9d9d19d919d9d191d91d91d1d91d91d91d91d919dd9ddd9dd9d9d9d9d9d9d9d9d9d9d9d939d99b9b9a9999a9b9b9b999d9d99d9dd9d9dd939b9699b69d9d69a9
                                9999b99a99b199b9b1d19191dd99b9b99b991d9d919d9d111dd919d9d91d1d9dd9d91d1191d111d19d9d9d9d9d9d9d9d91191911d9d1d1d111d911d191d919d19d9d919d9dd9d919d9dd91d9bd9db9db9b9d6cb6c6c6cb66bc6b6dd919d19d1d19d9d91d9d9d1dd91d91d919d19dd91d91d9dd9d91d9d919dddd9d9d9d919d9d9d9d9d9d99b9b99999b9a9999b999a9b9d9a9dd9d9d9d9d999d9b99b9a9d999b
                                9a9b9b99b99b9b99991d111111d9999b99b911d9d9d9d19d19d9d9d9191d9d9d9d1d99d1d191919d19d9d9d9d9dd19dd1d1dd1d91d9191919111d9191d1dd9dd19d91d9dd91d19d19d9d19dd9bd9bdb9b6bbb6b6b6c66c6c6b6a6b91d1d91d919d9d9d9dd9d19d91d91d91dd9dd91d9dd9d191d9d9dd9ddd919dd9d9d9d9d9d9d9d9d9d9d9b9d9a9a9999b9a99dd9d99d9d919d9dd9d9ddd9399b9a9999d9b99
                                b999969b9a99d9b9b9d191d919d9bb99b99b9d111d9d19d9119d91d9d1d9d9d9d919dd99d111d119d9d9d9d9d9d9d1191919191d9d91d11d19d911d119191d9d19ddd9d9d191dd91d9d9d1b9bdb9b9db6c66b66b6c6cb8b6b8b6b819d91d91dd19d9d9d9b19d191d91d91d91d91d91d91d9d9d91dd919d919d9d91dd9d9d9d9d9d9d9b9d9b9d9d999b9b99b9b96d9d9b9dd9dd919dd9d9d9d9b9d99d9b99b9d9
                                9a9a9b9999b9a9dddd11d111dd9d99b9b9b9999d9119d9d19d9dd9d91d11919d9d9d9d9d99d919119d9d9d9d9d9d99d11d191d99d9d919d19111d919d1d1d9d99d919d919d191d1919d9d9db9b9bdb9c6f8c6c6cb6b66c6b6c6c6c61d191d919d9d9d9db9b19dd91d91d9dd91d91d91d9d191dd9d9d91d9dd919d9d91d9d9d9d99399d9d99d9d99b999d9d999b99d9dd9d9d9dd9d9d9dd9d9d9d9b9939a99b9b
                                9999b9b9a99911191191191919d9b99b99b9b939d91d9d9d91d9d9d911911d1d919d9191dd91d19d9d9dd9d9d9d9d9d99d9dd19d9d9d91d1d19d11d1d919119dd1d91dd1d19d191d9d9d9db9dbd9b9b6c6c6c6c66b6cc6c6c6c6b8c99dd91dd9d9d9d9b9dbd191d91d9dd91d91d9dd919d9d9d9191dd9dd91d9ddd9d9d9d9d9d939d9d9dd9a99399b9a9d99b9d9b9d9d9dd9d9dd9d9d99d9b9d9d9b9999b99d9
                                b9b99b9b9b931911d1d191d1d9d9d9b9b9d9d99d9d9d9d9dd9d9d9dd1d1d1911d1d19d9d91d91d1d9d9d9d919d9d9d9d9d9d9d9d9dd9dd9191d19199d9d1d91991d1d919191dd1919d9d9b9bd9bddb78c8c66b8bc6c6c6c6c6c6c6c6d91d919d9d9d939bd9b9d91d9d19d9d919dd919dd91dd9ddd99dd919d9d9191d9dd9d9d9d99d9d9d9b9d99b9b9999bd99d9d9bd9d9dd9d919d9dd9d9d99b9d9b9b9b9a99
                                9b9b99b999d11d191911d119d9d99b9d99b9939d9d9d9d9d9d91d9d9191911d91d91d91d9d9d9d91d9d919d9dd919d9d9d9d9d91d919d91d1919d1d1919d1ddd191911d91dd919dd9d9db9db9b9b9d6c8ccc6c66b6b68c8c6c6b8c8c9d9d9d19d9d9dbd9bdb9dd91d9d9d91dd9191d9d19d91d919dd919dd9dd9dd9d9d9dd9d9d939939d9d99399b9bd9399b939d9d9dd9d9d9d9d9d9dd9d9dd9d9d9d9b999d9
                                bd99a99b9b19191111d9119d9d9d9d9939d9d99b9dd9dd919d9d1111d111d111911d9d9d9d919d1911d9d9dd919dd9d9d9d919d1d9d19d9d9d9d9d9dd1d9d9191dd19d1d911d91d19d9d8c6bdbd9bd6c6f6c6c6c6c6cc6c8c8c6c6f66d91d9dd9d9b9b9b9b9bd9d91d9d9d9d9ddd9d19dd9d9d9dd919dd9d9d919d9d9d9d9d939d9d9d9d9d999b99b99b9d99d9d9d9d9d919dd9d9dd9d9dd9d9d9d99b99b9a99
                                d9dd9b99b111d11d9111d19dd91d9b9d99d9dd9dd9d9d9d9d9d9d9191d919191dd919d9dd9ddd9d1d919d9d9d9d191d9d9d9d9d91d9d9d1d19d9d9d99d1911d1919d19d1d9d1d919dd9b8c66b6db9bb6c6c8c6cc6c6c6f6c6c8cc68c6b9d9d9d9ddbd9bdbdd9bdb199d9dd19191919d9d91d91d9d9d9d9d91d9dd9d9d9d9dd9d9d9dd9d9dddd9d9b9b9999399d9dd9dd9dd9d9d9d9d9dd9d9d9d9939d9d9b9b9
                                9d9999b99d9119111d9191d9d9d9d9b9d9d9ddd9119d919d9d91d91d11d1d1d1911dd1919d99d99d11d9d9d9d9d91d9d9d9dd9d919d9d991d9d9d9d9d191d919d1d91d91919191dd9b18c8c6b9b6db6c8cc6f6c8c6c6c8c8f6f6cc6c6c8c99d9d9b9bd9b9b9b9b6b9d9d9d9ddd9dd9d19d9dd9d91d9d9d9d9dd9d9d9ddd9d9d9dd9d9d9d999d939d99b9b9d939d9d9d919dd9d9bd9dd9d9dd9d9399d9d9d999b
                                9dd9b9b9b11d1d191d1d19d9d9d9d99d9d9dd91191d9d9d9d1d91d919919191d19d919d1d9d19dd9d91d91d91d91d9d9d9d91d9d9d9d9d9d9191d9d9d9d191d1d91d91d1d1d91d9bd88c6f6bbb9bd9b6c6f6c8c6f6c666c6c68c6f8c6c6c8cb99c9b9bdb9dbdb9b6b9d9d91919dd919ddd19d9dd9dd9d9d9d9d9d9dd99dd9dd9d9d9d9dddd9d99d9d9b9b9d99d9d9d9dd9d9d9b9bd9d9dd9d9d9939d9d99b9a9
                                999dd99b9191911d1919d9d9d9d9d939d9d9111d1d11d9d9d91d11d1d1d1d9d9d911d9d919d1d9d991d11d191d19dd9d9d9d919d9d9d9d9d9d9d19d9dd191d9d1d91d19d9d91d1b9db6f68c66db9bdb6f68c6f6c6c6cc6c8cc6f6c6c86b8c88d6cc9bd9bd9b9d6b6b6d9dd9d9d91d9d9d9d9d9d9d9d91d9d9d9d9d9ddd9d9d9d9d9d9d9d9939b9d9d9d9d9dd9d9dd9d9d9d9d9bd9b9d99d91d9dd99d9bd9b99b
                                9a99dd99d1111d919d9d19d91119d99d9dd1d191919119d911d191919199d9d9d9d9d9d9d919119dd19191d191d191119d9d9d19d919d9b9d9d9d9d99d91dd19191d9191d1d91b9bb8c6c8cc8d9bd9b6c8cc6c8f68c66c6c6c6c8cc6c6c6c6c6c86c6bd9bdb9b6b8c8c99d9d9dd9d9dd919d9d9d919d9d9dd9d9d9d99d9d9d919d9d9d9d9d99d9d9b9d9d9d9d9399d9d9d9d9b9bb9b939dd9d9d9dd9d99b9b99
                                b9b9d9d9dd91d11d19d9d9dd9d1d1dd9d9d191d111d19dd1d191d1dd1d9d9d919d9d919dddd1d1d191d1d91d191d19d1d9d9d9dd9ddd6b8d9d9d9d9dd91d9191dd91d91d91919db9b6c8c6f6f9bd9b9b6c6f6c6c6c6cc6c8ccc6f6ccc6c66cc86c8c6bb9b9dbd8c6c68cc9d9d9d9d9d9d9dd9d9dd9d9d9d9d9d9d9dd9d9d9d9d9d9d9dd9d939d9d9d9d9d9d9d9d9d9d9d9d9bdb9db9bd9d9d9d9d9d9d9b9a69b
                                999b9d9d911d1919d9d9d9d9d9d9191d9d191d191d91199191d191999d9d9d1d9d9dd9d19999191d19191d191d91d1919d9d9d9d1968bb6b9d9d9d9d919d19dd91d91d919d1db9bb8cc6f66c9bd9bdbd8c6c8f68f6c66c6f66f68c6cc6c6c66f6f6c66dbdb9b6c6c8c8c6c9d9d9d9d9d9d9d9dd9d9dd9dd9d9dd9d99d9d9d9d9d9b9d9d9d9d9d9b9d99b9d9dd9d9d939d9db9b9b9bd9bb9b9d9dd9dd9b966b69
                                b9b99bd1d1d911d9d9dd9d9d9d91d1919d9d191d1119d9d1d191d9dd9dd9d9d1d119d9d9d9dd9d191d1d191d91191d1d9d9d9d99b8cc8b6c99d9d9d9ddd91d19191d91dd19d9bd66c6f6c8f6bd9bd979c6f6c6c6c6c6c66c6c8c6f66cc876c6c86c8cb9b9db6c8c6c6f68c88b99d9d9dd919d9d9d9d9d9d99d99d9d9d9d9d9d9d9d9d9d9d9d9d9d9d939dd9d9d9d9d99a69b9bdb9b9b9c6c6d9d9d99b9ba66a6
                                9b9b999d1911191d9d9d19d9d9d99dd9d91d9d919d19dd1d191d19d9d9d9d9d919dd1d9d9d9d9d1919191d911dd1919d9d9d99dd8c6866b6b9d9d9d9d91d9191dd91d9d9dd9d9b6c8c68c6c6b9bd7bdb66c6c8f6c6c6c8c6f6c6f66c6cc8c6c6cc8c66db9b6b8c6f686c86cc6c6d9d9d9dd9d9d9dd9d9d9d9d939d9d9d9d9d9d99d9d9dd9d9d9d9d9d6d9d9d9d9d9b9b9bb9b9b9bdb9c6c6a6b9d9399d96b96a
                                999d9b99d1191d111d9d9119d9d9d9d9dd91d1d1191d9191d1191d19d9d9d9d191d91919d19d91d1d1d191d19191d9d9d99dd9bb68ccc6bbb9d9d9d9d191b6b9d919d9d999bdbd8cc6f6f687bd9b9d9ddd8cc6c6c686c6c6c8c86c6c6686c6c68f6cc6bdb9bd6c66cc6ccc6c8c88b9d9d9dd9dd9d9d99d9d9b999d9b9d9d9d9b939d9d9d9dd9d9d9b9a6d9d9d9d9d9d9b9db9b9b9b9c8c866b6a6d9b9b9b6a69
                                b9b9b9b9dd1d119191191d19d9d9d9d9d9d99199d1d1d1d191d1d911d9d9d99dd91d91d9d91d191919d91d91dd191d9d9d9d939b8c6f6b6b6b9d9d9d91d99b6a91d9d99ddd9b9c86f68c6cc6b9bdb9b9bb6c6f6c6cc6c6c66c6f6c66cc6c6c6c6c6c6c6d9d9b66cc6c6c66c6c6c8c6b9d9d9d9d99d9d9d9d9d939d9d99399b9d999d9b9d99d9dd9d99b69d9d9d9b9b9b9b9bdb9bd9b86c8c8c6b6a99b99996b6
                                9b99b99d9191d1d11d11d9d19d19dd19d9dd91dd91919191d91911d919d19dd9191d19191d191d1dd11d191d919dd99d9d9bdb9b6c866bb6b69d9d1d19d9d999d99d9d9d9bb9b6c8c6c8c8c6cb9b9bdb96cc86f8c686c86c6f6c6c6c66cc66c6c6f6f6b9bbd9bb78c8c6c6c6f6c6c6bb6b9d9d9d9d9939d9d99d9b9d9399399d939b9d9d939d9d9b9b9b9d9d9d9d9d9b9bd9b9b9bb8c86c6c6c6b6b99bdba69a
                                99b9939d9d11919191919d91d919d91d9d9d919d9d1d1d19d9d1d911d99d99d19dd91d9d9dd1919d99d91d191d1919d9bdb9b9bb8c6fc666bb69dd919d9b9bb69d9d9d99b9db6c8c6f6f6c6f6db9db9bd8c6f66c6c6c6c6c68c8c6c6c6c6cc66c68c68bb9d7b9bb68c6f6c86c6c8c6b6bbb9d9dd993999d9b9399d99b99d9d9d99d9d99d99d9d9d9b99a69d9d939b9b9b9b9b9bd96c6c6c8666c66bb99969a66
                                9b93999d9d91d11d1d1d19d91dd1919119d9dd9dd9d9191d19d9d1d91d9dd9d9d91d9d9dd9191d19d91d9191d91d9d9b9b9bdb96c6f66cbb86bb919db6b9d9a6b9d99dbdbd9b6c6f6c68c6f66b9bd9b9b6f6c8c6c6c6c6c6f6c6c6c86c68c6c6c6c6c6b9b9b9d96c6c6c86c6c6c6c6b6b6b9d9d9d99d9399d99b9d939d99b9d9b9d9939939d9d9b9db69a9d9d99b9b9bdb9b9b9bb66c8c6c6cb6b66cb9ba669a
                                9999bd9dd9d191d91191d1dd9191dd1dd1119d919d919d191d919191d9d9d9d1dd9d19d91d1dd9d9d9d91ddd91d9d9bdd9bd9bb6c86c86b6bb6b61d9b69b9b696d9399b9db9db8c68cc6f68cb9bdb9bd6c8c6c66c66c6cc6c86c68c6c6cc8c6c6c68c87bbd9bbb6c66c6cc6c6c6f6c6b9b6b9d9d9dd9d9b9d9b9b9999d9399b9d99399399d9d9d9b99b66b9b939b9bd9b9bb9bd9bb86c6c6b66b6a6b6b99b6b6
                                9bd99dd9d1d1d11191d19191d91d1991919d1d9d9d9dd191d1d1dd1d19d91d9191191d1d9191919d9d9dd9191d91939b9bd9b68c8cc8c6b6b6b6cb999a6a996a699939db9bb9c68cc6f68c6c9bd9bd9bc6c6f6c66c6c66c68cc678cc6c86f6c66c6c6f66db9d9bd8c6c6666c6c66c6b6b6b6b9b9d9d99d9d9b9b9bd93999d9d99399399b9d939b99bb9b96a696b9b9bb9b9bd9bb96c68c6c6b6b6b66a6b99a96
                                d9b9b9d191919191d191d1d111d9d9d91d191d191d9d91dd919191919d9199d1d91d9191d19dd9d9d9d91d1d919d9bdbd9bb6c8c6c6f6c6b6b6b6b9b96966a96ba9d9b9b9d9b8c6f6c6cc6f87d9b9bd6ccc6c66bc6b6c6c6b76b6c6c66c86c6c6c6c86c6d9bbd9b7b6b6bcb66c6c66b66b6a69b6b9d9399b99b99a699bd9b9d939b99b9b9d9b99bb996a6969a9b9b9b9b9b9bb9b6bb86f68c66c66b66b6b966a
                                999b99d1d11d1d1d1d1d1919d91919d9d91d191d191d1911d1dd191d19d9319d19d1d91d9d9d91d99d99d99d19d9d9b9bb9c8c6cc6f6c6b6b6bb6b99bd9396b696d9db9bdb9b6c86f68cc86c9bbdb9b666c8c6c6b6c6b6c6d9db6c8c6c8c6c66c6c6c8cb9bd9bb9d9c6c6b6b6b6c8c6bb6b86c69a69d9b9d9b9b96ba999b9d999b9b6a96a99b6a969a969a96b9b9bb9b9b9b9b9bb96c68c68b6cb6a6b66a6b96
                                9b9d9bd9191d919191911d11119dd9d9d1d91d91d1d91d91919191d9d19d91d91d9191d9119d99d9d9d9d1d99d99d9b9d9c86c86f6868c6b6b6b66ab99b69a96a969b939bb6c8cc68cc6ccc6bd9b9b7b6b8c6c66c6b6c6c9bb9b6c6f6c66c6c6c686c666b9bb9db9b6c6c686b6b66c6b6b6b6cb69a999d9b99b9b969639d9939b999b9696a69b96a96b96b6d9b9b9b9bb9bdb9b9b68c86c6c6666b686a666a6b
                                1dd9b9111d1111d11d191919dd19d1dd9d1d9119d91d191d191ddd1d91d1d91191d1d91d99d9ddd9dd9d99d9d9d9b9bdb9c8c6f6c8cc6f66b6b9b6b6b8b9a6969a9b9bdb9c8c6f6f68cc6c6f9b9bd9dbb876c6cb6b6c66bb9db9c6c686c6c6c68c6c6f6bbd9b9b9b6c8c8c6c8c6b6c66b9b6b66a696399b9b9d9a6b6a99939b99ba96a9a99b69696b96a9b9bb9bb9bd9b9b9b9b98c68c6c86c6b6a6c66c8b666
                                1191d19d1919d919191d1dd191919d91919119d91d9191d91dd919191d9191d91d9d91d9d9d9999d9d99d9d99d9d939b9c8c6f686c6f66b6b6b6b8c66b66c6ba696db9b9b68c686c8c6f6f6cdbd9bb99bb6b6b96b6c6c6db9b9b66c6c6c6c68c66c6c6c6bb9bdb9b6c686cc6c686b6b6a66b6b696a69b99b9a6969a969a69b9a696b9696b69a9a69a969b9b9b9b9b9b9b9b9b9bb68c66f6c6c6c66b6c6c686a6
                                1d1d91d191d111d1d1d19191d1dd11d1d1d91d19d91d1d1d9191d19d191dd91d91d1d9d99d9d939d9d9d9d9d9b99d9b9bb6c68ccc6c6c8c6b6b6b66cc6b6b6969a9b9db9b6c6f6c8c6f686c669bd9dbd9bdb9bdb6b6b6b9bdbdb6c6c6c6c6c66c6c668c66db9b9bd66c6c6c8ccc6b6b6b6b6a6b6b9b69b99b9b9a6969a9b69b99b99a9a969a969b969a8b9b9b9b9b9bb9bb9b666c66c8668c686a66b6b68c6c6
                                1911d191d1919d1919191d1d91919d919191d9d9d9d999d91d19191d91d91d91d9191d9d9d9d9d9d9d9d99399d939b9bd9b6c6c6cc8c8c6c6c6c6bb686c6a68b66bb9b9bdc8c6c8c6f6c6c8cc6b9b79bd9b9b9b9c6b6bdb9b99b66c6c686c6c6c66cc68c6b9b9b9bb6b6c8c6c686c6b6b6b6b6b6a69a69b999b99b9a9699b99b99b96969a969b69a68666b9b9bb9bb9b9b9b9bc86c86c8c68c6c6c66a66c68c6
                                d1d911d191d1d191d1d1d911d1d1d191dd1911d9d9d9b9b9d91d9dd91d9191d91d9d9d9d9d9d9d9dd9d9399d9d999bd9bb9b8c6f68c6f66c6b6b6b6c6c6b6c68b8c6dbd9b66c8c6f66c8c6f686cb9b9b9b9bdb9db9bb9b9b9bb9c6c68c6c686c6c686c8c6db9bdb9b9c6c6c6f6c6c66c6b6b6b6b6b69b9b9b99b9696b9b6a9b9b99b9b9b969a99668c8cb6bb9b6d9b9b9b9bb66c86c86c6c6c8686c66b66c686
                                1d119191dd9191d1919d119d919191d19191d91d19b9d98b6b191d1d91ddd91d91d19d919d9d9d9199d99d9939d9d9bb9db6c6c6c6f66c6c66c66c68c6c6b6c8c68db9b9b8c6f6c6c86cc68c6b66cdb9bdb9b9bdb9b9b9bdb9bd6c6c6c6c6c6c68c6c86c6b9b9d9b9b666c8c68c66b6b6a66a66b669a99b9b9b9b9a9698b66699b9b99b96b96b88c66c686868b6b9b9b9bb966c68c6c6c68c6c6c66c86a66c6c
                                9191d1d1911d1d91d91d9d11d191d9191ddd919d9d9d9bb666a919d919d91d9dd9d919dd9d99d9d9dd9d993999b9db9db96c8f68f66c8c66cb6b68c6b86b6b6c6c879bdb9bc68c6f6cc6f6c6fb6c6b9b9b9bd79b9bdb9bd9bd9b6c66c86c6c66c6c8c6c6b9bdb9b7b9cb6c6c6c6f6b6a6b6b6b66a6c96a999b99b99b6c866a6a9b99a99b99a686c6c86c6c6c689b9bb9b9b9b8686c6868c6c68c6c86c6c6b68c
                                11d19191d1919119db9d191919d1d1dd9191dd1d19b9b96ba966b91d1d9d9b9d91d9d9d9d939d9dd9d9d9399399d9b9b9b8c66c6c8c6f6c666a6cc8dbdb6b6b68c6bd9b9b78c6f68c6f68c6c68c66db9bdb9b9bdb9b9b9b9b9bb66c66c86c68c6c66c6c6db9b9b9b9b66c68cc6c66c66b6b6b6a66c66b99b99a99a9986c8b6b686b99b998c86c6868c6868c68c6b9b9b9b98c6cc68c6c6c68c686c6c686c6c66
                                191d1d1d91dd19d999d9b1ddd1919d91d1d91919d99d9d9666a6b669b9d9b6a9191dd9d9d99d9d9d19dd9d9d9d999bb9b6c6f68c6c6c68c6bc6b66c9b9b9b6b6c66db9bd6b68c6c6c68c6c8c8c6fd9bd9b9db9d9b9bd9bdb9b9b6c6c86c686c66c6c86c9b9b9bdb9bdd66c686f68c6b66b66b66b66a66b9b9b9b99b8c86c6b6b6c86b98c686c86c6c68c6c686c66b9b6b9b9b68686c6868c66c6c6666c86b6b6
                                1d19191d19191d93b9b9969d91dd1919d91d91d9b9b9b9b9a696a6a69b9b999d9d9d9d9d9d9d9dd9dd9d9dd9993939bd9c86c8c6f6c8c6c66b66b8b9b9bd9c6b6cb9b9b6b8c6c8c6f6c6f6c6c6c66b9bb9b9bdb9bd9bb9b9bdb66c68c68c6c6c6866c8c79b9b979b9b9b6c6c86c86c6a68c6a66a6c6b6869b999b9886c8666b6b6868868c6c686c8686c686c68c89b9b9bb9b9c6c68c6c66c86c68c6c66c668b
                                91d1d191d1d1d9d99d9bda6619191d1d9191d9d9d9b9d9b99a6b696b69d9b6a61d19199d9d993919d91919d93999b9b9b8c86c6c68c6f68c6c6b8c9bdb9b9b6b68b9bd6c686f6c6c8c6c68cc6f6c6cd9b9b79b9b9bb9db9b9b9b86c6c8c6c6c6c6c6c68b9bdb9bdb9bb6b6c6c86c66c6b6666b66b66a6b886b9a88c6c6c6b6a666b6c6c68686c686c6c68c68c666b9b9b96b9b6b686c68c68c68c6686a686a66
                                1d919d191919d9b9b9b996b6a19d91919d99dd9d9b9d9b9d6b696a69a69b9b96d9d9dd9d99399d9d9d9dd9d99d9d9b9b6c6cc6f6c8c68c6c6b6c66b9b9b9b6b6b8db9b68c6c68cc6c6f68c6f68c8d88b7d6c6dbb9b9b9b9bd9b6c8c86c6c6686c6c68c79b9b9b9b9b9b9c666c6c6c66c6cc6c6a6b6a66c6c88866c686866a66bb8b68c6c6c6c86c68c686c6686cb9b9b9b9b9b668c686c6c66c66c6c66c6c66a
                                91d1d91dd1919b9d9b9b9a696b191d9dd9d99d9b99b9b9b996a6b698b6b966a661919dd9d99dd9dd19d9d9d9d9b9bb9d8c6c6c86c6f6c6c86c68cb9bdb9bb6b6b66db9c86f68c6c6f68c6f66c68c7d8b9b86c9b9b97b9bd9bb6c686c86f68c6c686c66b9bdb9b9bb9b9b6b6c6c68c6b6686c86b66a66b686c6cc68c6c6c86b666b6866868c686c6c686c66b6c86b9b6b9b9b69b866c6c686c86c8686c6866a66
                                d9d91d1919d9b9d9b9d966b6a69d9dd9d9d9d9b9b9d99d9b9a966a696a6a96b9a9d9d9d9dd9d9d99d9dd9d9d99d9b9bb68c8c6c8c66c8c6c8c8c6bb9b9b9b66b6b6b9c8c68c6f68c68c686c8c8c69b6b6b6c86b66b6bd9b79b66c6c6f68c6c66c6c6c6bb9b9b9b96bb6b66c668c66c6a6c66c66a66b86c6c6868c668c86c6b6b66a6c6c6c68c68686c68c6b9b9b9b9b9b6b9b98b6c686c686c686c6c86c6c68c
                                6b91191d91b9d9b99b9ba69696a6d99d9d9d9b9d9b9b9b99b66a96b6b969a9666b6dd91d9d9d9ddd9d9d919939b9bd96c86c6f6c6f686f686c686b9b9bd76b6b6c66c6c6f6c68c6c8c6f6c86c66bd9b9bb66c86cc6c6bb9b66c6c68c6c6c68c686c66b86b9b9bdbb69b6b6a6b6c8c666c6c68c66b66b68c68c6c68c66c6866b6a6666a686c66c6c6c68b9b96b9b6b9b9b9b9b9b6866c686c686c6c66c6868666
                                b6b9d191d99d9b9b99b9b6a6a696a9d99d99b9d9b99b99b9b696b69a66a69bb9a96a9d9d9d9d9d99d9a9b9d99b9b9bb6c6c6c686c6c8c6c6f6c6c9b9b9b9c6b6b6b6b66c68c8c6f66c68c6cc6f6db9b6b6c68c68c86c9b9b6c668c66c686c68c6c68b6d6c9bb9b9b6c66866b86c686c66a66c6c6b6a6c6686c686c68c68c66a66a6a666c686868686c9b6b9b9b9b96b96b9b6b9bb6b866c68c6868c686c6c6c8
                                69869b19d9b9b99d9bdb996b69a696d9d9d9d9b99b9d9b9b9a69a6969a96d9b96b6969b919dd99d9b96b6b9b99b9b9b66c8c6c8c68c6c68c68c6b7db9b9b66a66a6c6c6c86c6c68c8c6c6f68c66b9bd668c6c6c68c6866bb66cc66c66c6c8c6c66c6db9b6b9b9b9b66c6bc66b68c6c86b86c68686b666b8c686c68c686c6c66b6666b6c68c6c6c6c6b69b9b6b96b9b9a9b9b9b969b96b66c66c6c6686c666a66
                                a6b6a6b9b9b99b9bb9b9bb69a66b6b9b99db9b9b9d9b9b99b9a696a6b66db9bb9b6a9a69b999b9b99b9969a9a9b9b9db66c68c6f6c6c8c6c6c6c9b9b9bd9c6b6b6b6b6b6c6c6c8c6c6f686c6c86cb96cc68c8c8c6c8cc686c668c66c86c6c686c86b9b69b9b9b9b9b6b8b9b66b686c6c6c686c6c86a6a666c6c86c66c6868c66a6a66a6666c686c6b9b9b69b9b9b96b9b96b96b9a6bb6b6868686c6c686c8686
                                b69a9666a99bd9b9b9b9b9c669a96a66ba99b99b9b99b9d9b696b96969b9b9b9b969696b6ba9b99b99ba96696b9bdb9bdb9c6c668c86c6f68c6bb9b9b9bb6c6b6b66b6b68c8c6c6c6c6c8c6c6c6876c68c686c6c6c668c6c6a6c6c66c6686cc86c68b9cb9b9b9b9b9b96b6b6a6c6c86866b8c686c6666b6c686c686c86c666a6666b668b8686c6869b969b9b69a9b9b96b9a9b9b9666b6a6c6c668686c686c6c
                                6b666b9a99b9b9b9b9b9bb6a866b696b969b9b99b9b99b9b9b9a6a9a6b9b9b9b9b6a9a9696969b9b9b996b9a9b9b9b9b9b9bb6bc66cc6c68c66b9b9bdb9b66b66a6b6b66c6c6f68c6c86c6c8c6c6d86c68c6f68c6f6c6c866c668c8c6c6c86c6c8bb666b9bb9c6b6b9bb9d9a66686c6c6c666c6c68b6a6b68c686c686c68c666b6a68b66b86c686b9b6b9b69b96b9a96b9b969a9bb9866686686c6c6c66c6866
                                a96b9869b99b8b9bdb9b986b6b69a696a6999b9b99b9b9b999b96969b9b9b9bb9b96b69ab9a6b9b9b9b9a96b69b9b9b9b9b9b9b9b86c68c6c6d9b9b9b9b9b66a6b66a6b6686c68c6f66c6f686f6bb6c8c6f66c6c68c6f6c6c66c66c6886c686f6b99bb9b9b6b686c6d9b9b69b6c6c686c68b86c68b666b6b66c6c686c6866c6a666b66a66b668bb9b9b9a9b9a9b969b9a96b9a969b98a66a6c6c686866a68b86
                                66a96b9a9b9d9b9b9b9cb6b66a6a69a69b9b9d99b99b999b9a96b6b69b9bb9b9b6b969a9669b9a999b996b96b9bb9b9b9bb9b9b6b6c6f66c6bb9bb9b9b9bb6b6b6b6b66a6c66c6c66c6c86c6c689b686c66c86c8c686c6866c6a6c86c6c6c8c669bb9bb9b9868c66c9b9c9bb6b868c6c66c68686b66a6668686868c66c6c6666a6b6a66b66a66896b69b96b96b9a9b69b69a96b9a6b6686686866c66c686686c
                                9b66a98699b9b9b9b9c868c6b66b66b69a9b9b9b9b99bd9b996b969a9bb9b9bb6b6a96969a96996b99b9b9a9b9b9b9bb9b96b966c68c6c86c9b9b9b9b9b9b6b66a66b6a6b6c68c6c8db6c68c6c6b6c6c8c86c86c6c6c86c6c6c686c6c686866c6c9b9b9b9c8c66c86c9b9b6666c6c6866a66c6c66a66a6a6c6c6c66c8666b8b666666b66a66b6bb69a96b9b9b969b69a9b9b69b696686a6c66c686a6866c6c68
                                b69a969b6a9bb9bb9b86c68c6b6b6b6a669b99b99b9b9b99b9a96a9b9b9b9b98b9b6bb6b96b9a69a9b99a969bb9b9b9b96c66cc86c6868c66b9b9b9bb9b9b6b6b6b6a66b6b8c68c6b9668c6c8c6b66c86c6c6c6c6f68c6c66c66c6686c6c6c86c666b9b6b866c86c8686b9a6a68686c6c6866c68b6666686868668666c6a666a6a6a66a96b66a99a96b9b69a69a69b96b969b9b9b6a66686a66a6686c6a686c6
                                9a696a69a9b9b9b9b86c8c6866b6b6b6b6a69b9a99b99b9b99b969b9b9b9b9c666b69a96a96969b969a969a9b9b6b9b9c8c6c86c68c6c6c8b9bb9bb9b9bb9c96c66b6b66b666c66b9b6c68c6c6b9c68c68c6c8c686c6c68c66c68c6c86c66c6c86bd9b666c686c866c6c96b66b6c6c6866c6a6868b6a6b6c6c6c6c6c8666b66666b6966b96b996b69b9a9b69b9b9b6b96b9a96b9a668a666868686c66866c668
                                b69a69b69b9b9b9b9c686c6c8b6a66b698b6a66b6d9b99b9b96b9a9b9b9bb98c8b6a66b6b9a9a96b9a96b96b9b9b9b96c68686c68c68c6c67b9b9b9b9b9b98c66a666b6a66b86c66bb68c6c686b9c6c6c6c686c6c6868c66c68b68c6c66c6868c6d686b6c68c686c868c6b9b66a6686c6c686c6c666b6686868686866c6a6a6a6a66a69a9a9b6b9b9a96969a96b69a9a9a96b9a966a668a66a66c66a66a686a6
                                6969b69a9b9bb9b9b9b6c686c666b66a66b66b6a6b9b9b99b9b9b9b6b9b9b986c66b9b6b669b969a969b9686b69b9b6c86c6c68c68c66c6c9b9b9b9b9b97b66c66ba66b6b6b6c6c66b6c686cc6b9c686686f6c6c8c6c6c6c66c6c6686c66c6c66d86c68c86c6c6c6c6c68b96a666c6c68686c666a6a66a6b6c6a6c6a68666666666a9b696969a969696bb9a969b9b96969b9696b66668666866a66868668b686
                                ba969a69b9b9b9bb9b9c86c86c6b6a66b6b6b6b6b699a9a68b9a9b9b9bb9b6cb68686b69ab69a9b969b9a6c6bb6b9b866c868c686c6c8686b9b9b9b79bb9b68c8c66b66a66a66b6c66c68c6c6b9b68c6c6c686c6c6c86c66c66a68c6c66c668cb66c6c6686868686868666b66b6868686c6c66a6666a666a6668666866a6a6a6a69696b9a9bb96bb9a969a96b9a696b9a69a9a998a68b6a66a6686a66a668668
                                96b6b969bb9b9b9b9bb66c6c686b69a6b6a66a696a6a666c686b6b9b9b9b989b9b8c68b669a6969b9a96686868b9b86c86c6c6c6c686c6cb9b9b6b9b9b9b98c6688c6a66b66b6666c86c68c687b66c66c66b6c68686c686c6a66866c6bb68b6b66c6868c6c6c6c6c6c6c8c6d68b6b6c6c6898668b6a66a666a6c6a6c6c6666696b9a9a96b966b99a96a6866b969b6b969b696b6b66cc66686686a66686c6ccc6
                                b969a9b9b9b9b9b9b99b6686c686a66b669a666a6666b6b86c6b69b9b9b66bb9b66c68b6a66cbb8666868c6bb69b6686c68686868c6c6c6b9b6d9b9b9b9bb68c6c6666b66a66a6a66c68c66c6b9c66c66c6866c6c6c6c6c666c6c6c66686a69b6686c6c686c68686868666a98b6868686a6b6a66866666b6a66c66866868a68b9a96b969b69cc66686666a668a66a66a66a669a966cf686a66a6668b6668cf66
                                6b9a969b9b6b9bb9bbb6c6c86c686b66a666b66b6ba68686c686a9b69b9b89b98c86c66b66b6696a86c6c689b9b98c6c68c6c6c6c686866b9b9b9b9b6b9b66c686c6a66a668c6b6a66c68c686b9b6c6c66c6c66b66c68c68c6866c68c6a69b686c6c686c6868c6c6c6c6c68b666a6c6b686866a66b6a6a6666bf6cc6a66666b969b96b9a9a6fc6a6b6a6666a666666a6666a6866a6cc66a666668b686a66cc6c
                                9a969bb9b9b9b96b9996c86c68c66b6b6b6b6a66a666c6c686c68b9bb9b9b9bb666868c6b66a6a666c686c6b9b6b9c686c6868c686c6c86b9b9b9b6d9b9b9868c6866c6b6c686666c686c68c6bb6b668c68c6c86c66c6686c6c8686c686b9c6c68686c686c666c6866868666a66668686b66a668b666666a666cc6f668a6a69a9a69a96986ccf666666a6a6666a6a6668a6666a668ffc666a6a668c668ccffcc
                                6969a9b9b9b9bb9bbb6c66c686c6c6b698b6b6b66b6b686c686c6b9b9b69bb99b8c6c66b6b6b6b6b686c68d9b9b9b9bb686c6c68c686c6b9b69b69b9b9b9b8c66c6c66a666c6c6a66a6c686c69b96bb66a6686c68b66c8c6866c6c686c6d8686c6c686c6c68c686c6c6c6c666a6a6a66a686686b689a6c868acff6e8666c9b6969b66ba666cfc66a6a666668a6666686666a66686cccf6b98666a6c6acf6cfcf
                                9b9b9b9b6b9b9b9b99b68686c68686b6a69896a686a66b686c686b96b9b9b96b96868686b6a966b6a6c68b9b69b9b9b9b9b686c66c6c68b9b9b9b9b9b6b9b66c8686c666a68686c66666c6c6b9b6b69b666c6c686c68666c6c8686c6c6986c68686a6c6866c66c66868668a666666686686a66a668b86fc666cfcffe6b6c69a9b69f9966a6fefc668666a66666a686ac6a666a6666cf7c66986a66f66fcfef7f
                                96b9b9b9b9b9b9b9b69c8c6c68c6c66a6b6b6a66b666a6b6a66c69b9b9b69b9bb6c6c6c6a966a6966b866b9b9a9b6b9b9b6b6868686866b69b9bb9b69b9b68686c6c66a66c6c6c6a6ca66866b9b99b69a6b666c6c68c6c8686c6c6866b8c686c6c668686a686a686a6c6a668a6a68b6a6c96c6686666afc66cfcf7fc6b6cc966a6cfc8f66ccf7f666a6668a6a666a66c6666666a6fcffc6b6a666cfc6fef7ffc
                                b9b9b6b9b9b69b69b9b86686c668686696a6669a686a666668b6b9bb969a9b69b986c68666a666a6b668a96b9b69b96b969a6c6c6c6c6c9bb9b96b9b9b9b9c6c68686a66c68686668686c6cb9b6bb9b866a6a6686866c68c6c66b86a6666c6c6868c66a6686686c6666866c6666866866868686a18b8cff66cf7ff7fc9ccf6b666fcccc66ccffc6a666a6666668c666cc68a6a666cf7fc6986668cfccfcff7ff
                                9b9b9b9b9b9bb9b9bb66c6c686c6c6a6a66b6a66b6666a6a6b9b9a96b9b6b9b9b9c686a6a6b6a66b6866bb9b69b9b9b9a9b686868686c669b69b9b9b9b69c686c6c666c668b6a6c6a6c66c69b6996b66c8666a6c6c6c8666868b6666a6a66a66a666a668c6c6c668a6a6c686a6a6a66a66a66a666666cf7c6cff7fcfc6f7f666a6cffcf6e4747f6666666a66a6cf66cfc6666668ccfcfec666a66cf7fcf7fcf7
                                b9b69b9b69b9b9b9b98b66b86c6868666b66a96b6a6a666686b69b69b9b96b9a69b66866666b6866a6a8969b9b9a9a96b9b66c6c6c6c68b69bb9b69b69b686c6868c6a66a6666c66668c68686a6c98a686c866c666866c8c6c66bb9c666a66686c686c8666866a66686686a666666866866c666a68afcffcf6fcfcf7f6efc6a668cf7fc47eeee4c66a6a666666cc66cfcc66a6666c6fcff66666afcfcf7f7fcf
                                9b9b9bb9b9a96b9a9b9b9b9b8686c6c868b6686666668c6a686b96db9a9a9b69b9b6a6c86a666a668666b9b9a96b96b9b96868668668666c89b69b9b9b98b86c6c66666a66a6a68a6b668b6c6686a668c66c686a6a6c68666686b66a6b666a6b686c6c6c6a6a6686a6f66c6686a66a66a666a66866c6f7ff7fef7fcfcf7fcc666cfcfc7e4e74eee669696c6a6cffc6fcf66666a6cfef7f7ccbbecf7f7ffcfefc
                                79b9b969b9b9b9b69b69b969b6c6686c666a66a6a6a66686c66a9a69696b969b9a998666c66a66b86b86bb696b9b69b96b8b86c6c6c6c866c9b9b9a9b6b68668668c6a6686666b66b9a668686c6c68c66c686c68666b86c6a6c686a666a6666866ac6f66866686a666cc6fc66a6866a668a6686c6afccfcfccf7ff7f7fcf7f66acff7fe7edb7e7fb6a96ac9668ccf6ec7f6a6666cfcffcffce47b7fffcf7cf7f
                                9b6b9bb9a96b9b9b9b9b9a9b69b86c66a6a66686666a6a666a66b66abb9b9a9b698c68c68666b666a66b69a6b969b9a9b9666c6866866a66b69b69b69b6a6c6c6c66866a6c6b9b9b966c6c6c6868666c686a6686c6a666a68686a666a66a6a6b866fcf6c66a666686cfcfcc66666a6686666a66c6ccf7f7ff7ffcffcfcf7fc666f7ffffddb9bdce6696a6f69ccf7fc7ffc666a66ccf7f7fcf94bbdf7ef7f7ffc
                                79b9b9b96b9b69a96b96b9b9bb66a6868666a66a8686668c686866b68696b96b9a66666a6a686a6666a68666a9a9a96b9b6a66a6a66a6b9b9b9a9b9b9a66686686a6c6666a6b9a96b6a666a66a6c6c866a668c6a686b68666c6668686666b666a66cfec66868a68b6cfcfcf68a666866a6a666cfbcf7fff74e7f7f7f7f6fcfc66fcfcef9ddb9b7fc6b9cfcc6ccffcf7fcf666666cf7ffe7efd9b9be47eef7cfc
                                6b9b69b69bb9b96b9b9b96b696a6686c6b666a666c6c6c666a66a66668b69a66686c8a66686b66a6a6666a686b696b9b698686686866b96b69a696b9696a66a6c6866a8c666b96b9b686a6686866866a686c66666c66a66c686a66a66a6a66a66ccfefc66cc666686fcf7fc6666a66a66666b9fccf7fcf7e4e4eefcffcf7f7f6ccfef7fdd9b79cf76c8f7fc6f6f7f7f7f7fb6a6ccffcfdbfcdd97d7b47ef7f7f
                                9b9b9b9b866b6b9b96b9a9b9a66866a6686a666a686686a6866c686a666a698a6666668686b66866686a6686666b9b69b98b6a666a689b9b9a96a96a9b66b686686c66668a69a9b96a668686c6c6a6866c668b6a68666a686a6686686666966a6cfcf7f666cc6a66ccfcffec66866a66a69a96cfcffcf74e47e47eef7fcfcfc6cfcfffc7dd9bb7fc6fcfcff6ccffcf7fcfc6666cc77e77b77d9bbb9bbb7c7e7f
                                9b96b9a66a686a96b9a96b986866a6686a666a666a6a66866a6866a686a68966a6a68b6a6b98b6a6866686b6a6a6969a9868668c666b6b6969b66866b9a66a66a66868a666b969b6a6686c6a668666c6868668666a6a666a6686a6c6a6a6a6666cf7fcfe68cf668b8f7fcf7f66a686669cc66cfef7f7ffb4e47be7fcf7e7f7fc7ef7f7f19db9bcfe6fe7f7c7f77777e77777e7777efffcfce7bb9b77cc777777
                                b9b9b666a66669b9a96b96b6b6a6686c66868686866686a66866a66668666c6b66866866b96a6966a6a66a686669a9b69c66a666a68b99a9a6986c6a969b66986c6a6668c69a9b96686a666686a6866a66a6a6a666866a6666a6666666666a6acffcf7fc66fc6666cffcf7fc666cc69a6fc66cfcfcff7f797b9b7df7e4eeefcc7befffcdd9bb977e7777777777e7e777e7e77e7ef7c7c777c7c777e7777e7c7e
                                6b9b9b9a668a6a6b669b9a99b966c666a66a66a66a66a666a66a6686a66a68969a6b6a696a966a66666a66866a9a969a66a66868666b6b969b6b6668b9a9b6b668668b866a69b6a66a6686a66666a6866c666668a66a666a66686a86a6a66696cf7fcf7f6ccfe6a6fef7ffcfc66cf966ccf6cfef7f7fcfddddb9bbff7b7df7fc7d65e77bddb9b7e7e7e7ee7e7e77e7e77e7e77ccfef7f7e77e77c77c7e77e77c
                                9b6986896b6666866a6b69b69a9b68a66866a666668666a6686686a668666a6a969669ab96b666a6a66666a666b69a6966686a66a689b69a9b96a9b696969a98b6a6666a669b98668666a668a6866c6a66868a666b668666a66a6666866a6a68fcff7fcfccf7f666f6f7fcf7f66fcf6afcfef6cffcfcfcdd9b9b9b7c7db9ec7f7cf7be7d9b97db777e7e77c7e7c77c7c777c7ef7c777777e77f7e7e77c7f7fff
                                9b9c6c6866a686a66699a96b96b666686a66686a86a6a6866a66a666a66a6666b9a9a96969a6a69669a6a666a696b9b98a66a66666a69a96b6a9969a9ab9a66686686a668b9a66a66a6666a666a6866686a6668b66b66a6b686668a66a66666ccf7ffcf7f7ffc68bc6efcf7fc6bcfc66cf7fcf7f7f774fd9ddbdb777bd9b7774747dbb7dddbb6ffe77e7c7e77c7e77e7e7c77c7ff7f7ec7c7e777c7e77effcfe
                                6986866a6866a668b9a69b9a969a98b6666a66666666666a6666668666a668a696b96b9a6969866a666666a6686a669a666a66a6a69896b9696b6b96b96b66a66a66a68666b96666a66a6866a666a6a66a66c6689a96a6666a6a6666666a66a6ffcf7fcfcfcf7c6cfef7f7ffc6fcfc6cfcffefcfff4ed77dd9b96b4b7ddbe74be749db7e79bcfecf7e777e7c77e7c77c7c7ef7f777e777e7f77c7e77c7fffcfc
                                76c66a66c668668b89b96b69a9b9686a6866a6a6a6a68a6686a6a6a6a666a669a96a66969a96a666a6a6a666a6666a666a66666666b6b96b9a99a9a9696966686686666a68686a686666a666686a66686666c86a69b696a686666a6a6a6669fcf7ffcf7f7f7ffc6cf7f7ffcfe6fef66cf7fcf7c7777db7b7cfffef74bd7e7e74eeedb947c77fcf777e7c77c7e77f7e7e77e7fc7ce7c7f7c77e7e7c7f7efcff7f
                                666a68686a66a6698b69a9b96b698b668b86666668666666a6666666668666866a966a6a96b666a9666666a6698a666a668686a689a96b9a696b9696a9a6a86a6a6a6866a66a666a66a666a6a6666a66a6a6f669b69a69866a66866666c86a6fefcf7fcfcf6cf7c6fccf7feffef6fefc7f77777477b77e77cf7fc7e747474b4e47e49b77e7e7777e7c7e7f77f7e77c7f7ff7f7e7f77e7e7f77f7e77e7fff7fff
                                6a6866c66686686b69b9696a969a6686666a6a686a6a66a66686a686a66a66a666986666a969a66689a66696a6666a6666a66a96a6969a969a96b6b96b66666666666a6666666a666a66866666a6666a666ccc9a969b66a6666a66a686cf66cffcf7ff7f7fcf7fcfef7f7f7f7fc77777747747e77e7e77e7ef77e7e7d47d7474e47eb9e77e77ec7e77e777e77e7c7f77f7c77e777ec7f777e7cff7f7ffcfffcf
                                6666c66a68b6a6a66a96a9b96b966a6a6a66666a66666a6686a666a66666a666a66a6a6696a9866a6666a6a666a66666a669896969a9696b96b969a96986a6a6a66a666a6a6a666a6686a6a6a6686a6666afcf96b9a98666a6666a66a6fc66cf7fcf7eeff7fccf7fc7f7fcf7e77e7e7477e77e774777e77e77e77ecf7c74b7bd7bd9b77c7e7c77e7c7f7ec7f7c7f77fec7f7f7f7f77f7ec7f7fcfffffffcfcfc
                                c6c86a6666866666b969b696b6b98666666a68666a66a666a666a666a6a6668666a6666a69696a666a6666666666a668666a66a6a96b6a96a96a9696a98666666866866866666a666666666666a6666a666cfc696b6698a666a6666668cfc6feff7e4e74fcf7fcfcfcf7c7e77e77e77e777e77e77e7e77e7777ecf7fef77e7edb9bb9b7e7c77e7f7e77e77e7e777ef7f77e7e7c7e7f77c7f7fffffcfcff7ffff
                                7f666686a66a689a96a969a969a66a66a6666a6a6666666a66986666666686a6a66698666a6a6666666a6a6a6a9666a66a666666669a969a9696b6a966a6a66a66a66a66a68a6666a6a6a66a6666a6666acf7fb696986666a666a66a6ccfccfc7ffd74b9f7cfcf77777f7e7c77e77e77e7e7e77e7ec7e77e7ee7f7f777e7e77ddb9bd6e7c7e7f777c7f7f7c7f7fef7c7ef7c7f7e7f7e7f77ecffcffff7fffcff
                                666a66a668666a69696b9a69a9696666998a666666a66a66986a66a6a66a6666666a96b666666a6a6a666696666a6666666a6a66a6696b696a969a969a6666666666a666666666a6666666666a666a6866cffc69a9a6a6a6666866666cf7f6fffcfd9db7cfc7777e7e747e77e77e77e77e777e7ef77e7e77e7fc7f7f7e7e7e7c7bcc7e7c77f77ec7f77e7e7f7e7f7c7f77c7f7c7f7c7f7ec7ffff7ffffffff7f
                                66c66866a6a6669a9a96a9696b6a9a68a66666a6666a66968966666666666a66a66669a9a66a66666666a6869a666a6a6a66666669a69a9696b6969a6666a6a6a6a666a6a6a6a6668a66a6a6666a666a66cf7fc6966666686a6c6a6a6cffcf7f7fcddb9b7e7e7e77e77777e77e77c77e77e7eec7e7e7f7fefc7fcf7e7c77c7e7e7fff77e7e7e7c7e7e7c7f77fcf7c7f7e7f77e7f7c7f7c7f7ff7fffcffcf7fff
                                6668b6686666a6b696b969a69a96966666a6a666a6666a66a6a6a9898a66666666a6b6969666666a66a66698666a966666666a6a669a966a9a9a9a696a666666666666666666666a66666666a6666a6668cffcf9b69a66ac668c66668fc7fcfcfe7e7cf7ec7f77e7747ee77e7e7e7e77e7ec7f77c77c7f7c7fc7f777e7e7e77c7fc7f7c7f7c7f7e7f7f7e7fc7f77f77c7f7cf7f7c7f7ef7c7ffffffff7ffffff
                                6a6668a66a66669a696a969a6969a6a6a696668666a66666666666a6666a6a6a66666a66a9a66a6666666a66a66666a666a666669a6969a96696696a666a66a686a6a66a66a66a6666a6a68666a66666a6fef7f69a66a6cf66cfc66a6ccff7f77777777e7f7e7e747e777e77e777e7e7ec7f77e77e7fcefcf7f77e7e7c7f7c7e77e77e7f77e77e7f77e7f7f7f7c7ecef7c7e7f7c7f7c77f7ffffcfcffffffcfc
                                666a666666a6a669b6969a6969a6966666866a66a666a6a6a96a6666a98666666a66669a96666666a66a666666a66666a666a66a6696a6969a69a69966666666a66666666666666a666666a6a666a6666cf7ffcc699698cf66cfc666cf7777747ee7e7fe7e77777e77e7e7e77e7e777f7f77e7c7e7fc7f77e77e7c7c77e77e7f7f7c7f77ec7f7f77ce7f7fcf7c7f7f77f7f7f7c7f7ef7f7fcfcfffff7ffcffff
                                6666a9a6a66666a69a9a6969a696a69a66a666666666666968666a96666a666a666a6a6666a6a6a6666666a6a666a6a66666666966a696a9696696a6a6a6a6666666a6a6a66a6a666a66a666666666a6ccffcf7696a666fcc6fcf69677e7e7e7e7f7fe7777e7e7e7e77e777e7cf7f7fc77e7c77eff77e7f77c7c7e77f77f7c77e77f77ec7f7c7ec7f7fcf7f7cef7c7f7c7f7c7f7cf7c7fcfffffcf7ffffff7ff
                                cc698966666a669a69696b6b96a966666666a66a9a6a66a666a9666a66666a6696666666666666666a69a66666696666989a6a686666a966a69a9696966666a66a6666666666666666666666a6a6a6666cf7fcfc6b96acfcfcc77e7e7477747ef7f7777e7e77e7777e77e7e7f7c7fc7e7c7e7ef7c7ffc77e7e7e7f7e7c7e7e7f7c7e7f7f77e7f7f77f7f7fc7f77f7e7f7f7cf7cf7e7f7f7ef7fffffffcfcffff
                                ffffc69a6a6689696a96a986c9698a6a6a66666666666666a6666a666a6696668a66a66a6a66989a6666666a698a666a66666696a98666969a6989a98989a66666a66a66a68a66a6a6a6a6a6666666a6ccffcf76c9698cf7777e7747e77e7ef7c77e7e7e77e77ee7e7e7c7cf7fef77e7f7e7f7ff7fc77f7c77f777c7f7e7f7c7e7f7c7e7cf7f77efcfcfc7f7c7f7f7f7c7f7ef7ef7f7fcfcfffcf7ffffffffcf
                                cfcffff66666a9a696a9696cc6a96666666a6a6a66a66a66666a6666666a66a696666966696a666666a66a666a666a666a66a66a696a96a9696a9669a698966a6666666666c66666666666666a6a66c66fc7fffcf9a66e77e7e77e777e7eef777e77e777e7e7e77e77c7ef7fec77e7f7ef7f7f7fc7e7f7e7f77ec7f77c7c77f7f77c7f7f77e7cf7f7f7f7f7f7f7c7f7cf7cf77f7c7fcf7ffcffffffcfcf7ffff
                                ffffcfcf66a69696a9696a6cc696a96a666666696666666a666986a66a66666686a66a66a6666a66a966666989666669898966696866696a66966b66986b6a666a6a6a6a6af6a66a666a6c6a66c666c6bfff7fcfc67b777e777e77e7e777777e7e7e7e7e77e77c77c7ef7f7f77f77c7f7f7fcfc7f7f777c77e7c7e7c7e7f7e7e7cef7e7c7f7f7f7fcf7f7c7ec7f7f7c7f7f7fc7f7f7f7f7ff7ff7ffffffffcf7
                                ff7fffff6a666a69696a966cc6b696966a698986a66a6a666a666c696666a6a696666666666a6666666a698666a66a66669a69a66a96a9696a9a96b6a9696666696666666ccc66666a666c666cf69cfc6c7ffc77e77e7e77e7e7e77e77e7e7e77e777e77e77fe7e7ef7f7fc7e77e7fef7fc7f7e77e7c7c7f7c7f7f7e7f77f7f7f777f7f7f7cef7f7f7f7f7f7f7f7ef7f7ce7cf7f7f7ffcfffffcff7fcf7fffff
                                ffffcfcfc669a96a98966a6ccc698a6a666a66a66666696666a6ac68a6a66966a66a989a66666c6a66666a6a6666696a6a69666666696a669666696966a69a9a6866a9666cfc66a66c6c6cf69cfc6cfc6ffc77e77e7777e77e777e77e7e77e7e77e7e7e7c7fcf7f7f7f7f77e7c7fc7f7f7fc7c7f77c7e7c7e7f777c7f7c7c7c7c7fc7c7e7f7f7fcfec7cec7f7cef7cf7f7fc7f7cf7ffcffcf7ffcfffffffcf7f
                                cffffffffe6696966a6a96ccfc6c9c6698966666ac6a686a6cc6ccc69669866666666a666a96ac696a66666966a986669666a9a969a6969a6b9a98a9a969666669a6666acfcf6666ac6fcfc6cfcf6cfcc777ee7e77e7e77e77e7e7e77e7e777c7e7c77c7fef7f7fc7fce7e7c7f7ff7fc7f77e777e7f7f77c7f7ece7f7e7f7f7f7f7ef7f7fcfcfcf7f7f7f7f7f7f7f7cecf7f7f7f7fcffcfffffcffcf7fffffff
                                fcf7ff7ffc6b6a6c6cc669fc7feccfb666a66a66ccc69c66ccc6c7c666c6a66a6a666666666a6cc6666a96a666666a66a9666666a696a66966666966696a69a668666a66cf7f66966fcfccf6ccfcfc7e77e7f7e7e77e7e77e77e777e777e7e77e777e77f7c7f7f7fc777c7e7f7f7fc7fc7e77e7f7c7e7ce7f77c7f77c7f7e7c7f7c77f7fcf7f7f7f7f7c7f7cce7f7f7f7c7f7fc7f7ffff7fcfff7fffffcf7fcf
                                fffffffff76c666cccccc6ccf7cf7ccc666a66ccc7e66cc6c7f7fcc66ac6c666696a96a6989ccfc66a968666a66a669666a96a9696a969a69a96a969a6696a9669a66666cffcc689cfcf7fccf7f7e777e7fe7f777e77e7e7e7e7e7e7ee77c7e7c7f7efef7fcf7fec7f7e7ef7fef7fef77e7c7677e7f7e7f77ce7f7cf7f7c7f7f7ef7fcf7f7fcf7f7c7f7f7f7f7f7cc7f7f7fc7fceffcffffff7fff7ffffffff7
                                ff7ffcffcfccec6cccf7c7c7ec7cc7e7cc6cccc7eb16bcd6eccce7fe6cccc6c6a6666666a68cc7f6666696a6696696a669669896a9666696666966a696a69666a6666a6cf7fffc6bfcf7fcf7fc777e7e7f7fc77e7e7e777e777e77e777f7e7c77e77f7f7f7f7fc77e7e7f7f7f7fc7c7e7f7e7e7c7c7c7f7ce7f77f77c7f7f7cef7cf7fcfcf7f7fcf7f7f7fcef7fc7f7f7fc7f7c7f7fffcff7fffcfffcf7ff7ff
                                cfffffffff77fcfef7f7c7e77f777b7eccf7f7e77bd7b77e777777f6cf77c7c666a66a6669ccfcccc66a6669c6a68696a66a66666669a66a9a989a96696986a6666a966cfcf7f766cfcfcf7e77e7e7efcf7c7e7e77e77e77e7e7e77f7e77e77f7e7fc7fcfcef7e7f7c7c7f7fc7f7e7f7c7e7c76e7f7f77c7f7c7f7cef7e7cef7ff7ff7f7f7fcf7c7f7fce7f7cc7fcf7fc7f7fcf7fffcffffffffffcfffffffff
                                7fcff7ff7f7e77c7f7fcf7f7e7e7e7e777fccf77e7b7b7e7e77e77ef7fcf777e777b7bcb686e6f7fc6986986c66c96a696969a9a96a6969666698966a66a96666a6666cfc7fcfc6b6fef7777e77e7f7f7777e777f77f7e7f777c7f77e7e77f77efcf7f7f7f7f7c77e7f7fcf77e7c7f77f7f7f7f7f77e7f7f7c7f7c7f7c7f7f7f7fcf7fcfcf7c7f7f7ce7f7cf7f7f7cf7ce7f7f7f7fcf7fcffcffcfff7ffcffcf
                                fcf7fffffff77e7f7f7f7f7f77f77f7c7e77f7fc77e7e77ed7e77e77f7f7f777e7e7777777777ecc5c6c6a66cc6c6a666a66666669666a69a96a966969666a69669866cff7f7fc6cf7777e7e7e77f7f77e7e7f7e77e777e77e77777e777c77e7f7f7fcf7fc77e7f7c77f7c7ec7f7e7c7e77c7c7e7ce7f7c7c7f7c7f7c7f7fcfcf7f7fcf7f7f7f7f7f7f7fc7f7f7f7f7f7fccf7fffffffffffffff7ffffffffff
                                7ffcffcffff7e777cf7fccf7fc7e77e7f7e7cf7f7e7e7e77e777e777ef7fccf77e7e7e7e7e7e77777ccc669cccccc6c6969a69a96c6b9666666989a6a69cc668986a6cccf7fcff777e7e77e777fcf777e77c7777e77e7c77e7f7e7e7c7e7e7cf7f7fc7fc77f7c77e7f7fe7f77f77f7e7f7f7f7f7f7f7c7f7f7c7f7c7f7cf7f7fcfcfcf7f7ccf7ccf7fcc7f7f7fc7f7f7f7f7fffcfcf7ffcf7fcfffffcfcf7fff
                                f7ff7fffcffc7f7e77f7f7fc7ff7f7c777f77cf7c77f77e77e7e77e777cc7f7fe777e7e77e77e7e7eb7ccccf7ccf7ccff6669866cc9869a96a98989696acf966a6c66cf7fef777e7e7e7e77f7fe7e7e7e7e77ee7c7e7e7e7c777e77c7e7c7f7fecf7ff7e7e7e7f7f7cf7c77f77ec7c7f7c7e7c7c7c7f7f7e7f7f7f7f7f7fcfcf7f7f7f7fc7f7f7f7c7f7f7fcc7fccecc7f7ffffff7fffffffff7ffcfffffffcf
                                cfcfffcfffff77e7f7cf7f7fc7fc7f7ef77e777e7f77fcffc777e77e7fefffccfef77e7e77e77e7e77e7f7f7f777fffcfc6a696cccc9666696698966a66cf66666cfcfcf7f7e7e7e77c77f77fcf77c777c7e77c77e7c77f77e7c7f77e7f7f7f7f7fcf77c7f77c77ef7f7ef7e7f7c7f77f7f7f7f7f7e7f7c7f7c7ec7f7cf7f7f7fcf7f7f7f7f7ce7fef7fcc7f7f7f7f7fcfcfcfcfcffcf7ffcfffffff7ffcffff
                                7ff7fcff7ffff77e77e7f6f7fc7fcf7f7e7f7f7f77e7777f7fe77e7e7ff7ff7f7c7fe7e7e7e7e7e7f7e77f7c7f7ffcffcf696cccccf69a6a66a69896966ccc6a98ef6cf7777e77c7c77e77fec77c7e7c77e7f77e7f77f77e7f77e7e7f77f7fec7f7f77e7f7e7f7fcf7e777c7f7c7f7c7c7c7c7e7cf7f7c7f7cf7f7f7fefcffcf7fcf7fc7f7cf7fc7f7f7f7f7fcc7f7f7f7fffff7ffcfffffff7ffcffffff7fff
                                fcfcf7ffffcffef7f7f7cecf7fc7f7f77f7c7f7ec7f7fe77f77f7f7fffffff77fcf7f7f7f7e7f7f7ef7e77e7effcffcffcf6ccccf7c666989696a6a66cfefc668cf7f77e7e7e7e77e7f7efcf7f7e77c77c777e77e7777e77e7e77c7c7fefce7f7e77e7f77e7c7fe77f7f7f7e7c7f7e7f7f7f7fcf77c7f7f7c7c7fcfcf7f7f7fcf7f7f7cf7f7f7f7f7f7f7fcf7f7fcf7f7fcf7ffffcfcfcf7ffffff7ffcffffcf
                                7fcf7fcffff7f77f7c7f7f7f7f7f7f7fc7f7f7c7f7ce7cf7ecf7e7fffcffcfe777fcf7c77f7f7e7f7ff7fc7ff7ffcff7ffc7e7c7cfcc6c6c6a669698bcf77ffe6f7e7e77e7c7c7f7e77f7f7f77e7f77e7e7e77c77e7e7e7f77c7ff7f7f7f77c77f7c7c7e7c7fcf7f7e7c7e7f7f7e7f76e7cec77c7f7f7ec7fcf7fc7fcfcfcf7fcf7f7f7cf7f7f7fcccf7f7c7f7f7f7f7f7ffff7ffff7ffffffcfcfffff7fffff
                                fcffff7f7fffff7c7f7c77f7f6fcf7fcfc7f7f7f7f7f77ef7f7fcfcffffcfff7f77f7ffcf7e7f7fcffcfffc7ffcff7ffcfff7f7f77efcc6cc696a66c6fcfccff77e77e7e7e77e777e7fcfc77e77e7e7f77f7e7e7e7c7e7c7e7f7f7fce7f7c7f7e7c7f7e7f7f7f77c7f7c7f7c7e7f7c7cf7f7f7f7f7f7cf7f77ff7ff7f7f7f7fcf7f7ccf7cecccf7f7f7fcf7fcf7f7fcccf7ffcffcfffcf7fffffffcfcfffcf7f
                                cf7f7fffcfffcffef7f7fe7c7f7c7fc7f7fcc7f7ce7fcf7ffffcfff7fcff7fffcf7ecc7f7fcf7fffcffcffff7ffcffcff7fffff7cf77f7fec6c669cfcf7e7f77e7c7e7e7c7f77f7e7fc7f7e7c7f777e7e777e77e777e7f77c7fcfc7f77c7f77c7f77c7f7cf7f7ce7f7c7f7e7f7f7cef77c7f7f7f7cec7c7fcf7fcfcfcfcfcfcf7f7fc7f7f7f7f7f7f7f7c7f7f7fcc7f7f7ffffcff7ffffffcf7fffffffcfffff
                                f7ffcf7ff7fffffffc7f7fcf7fcfc7fc7f7f7fcf7fc7f7ffcf7ff7fffffffffffffcfffcf7f7fcf7fcff7f7fffcfcff7fffcf7fffffc7fc7f7cc66fc7fcf77e7c7e7c77f777e7e7ffcff7e7f7e7e7f77c7e7c7e7f7e777e7ff7f7e77c7f77e7f77c7e7c77f7c7f7f7e7f7cf7c7ce7f7cf7f7c7cef7f7f7f7fcfcf7f7f7f7f7f7f7ccf7fcf7f7f7fccf7fcfcf7f7fcf7f7fcfcff7ffcf7fcfffffcf7fffff7ffc
                                ffcffcfcff7fcf7fffffc7f7f7c7fc7fffccf7f7f7f7ffffffffffffcf7ffcf7fffff7ffff7f7fffff7fffffcff7fcfffcfcffcfcfcffcfcf7fcfecfcf77e7c7e7e7f7e7e7f7c7fc7f7c77c77e7c77e7e7f77f77777f7cfcf7f7e7f7e7e7c7f7e7c76f7fe7c7e7c7c7f7c7e7f7f7f7c7e7cef7f7c7f7f7ff7f7f7ffcffcfcf7f7fc7f7f7f7fccf7f7fc7f7f7fcc7f7fcf7fff7fffffffff7ffcfffff7fcfffff
                                7ff7ff7f7ffcffffffcfff7f7ffff7f7ffff7fccf7fcffcf7fcfcfcffffffffffcf7fffcfcfffcfcffffcfcff7ffff7fcff7fffcf7ffcff7f7fefcf777e7f7e7f77f77e7c77e7fcff7f7e7f7e7f7e7c7f77e7e7f7f77e7f7f7e7c77c7f7c7f7e7f7c7e77f7f7f7f7f7c7f7f7f7c7c7f7f7f77f7f7f7ccf7ffcfcfc7f7f7f7fcfc7fcf7f7fc7f7f7f7f7fc7fc7f7fcf7f7fcfffffcf7fcffffff7ffcffffffcff
                                fcffcffffcf7f7ff7fff7ffcffcffffffcfffff7fc7fffffffffffff7ffcf7ffffffffff7ffcffff7ffffff7fffcfffff7fffcffffcff7ff7fcf7f7e7f7e7c7f7e77e7f77c7ffc7f7c77f77e777c7f777e7f7c7e7e7ffcf7c7c7f7f7e7f7e7e7c7c7f7f7c7e7c7e7c7f7c7f7cef7f7c7f7cf7fc7f7f7fcfc7f7f7ffcfcf7f7f7fc7f7fcc7fcf7fccf7fcf7f7fcf7f7f7fcf7ffcffffff7fcf7fffffffcfcfffc
                                f7fcf7f7fcffcfcfffcfffff7ff7fffcfff7fcff7fcfcf7ffcf7f7fffffffffcfcffcfcffcff7fcfffcf7ffffcff7fcfcffcf7f7fff7ffcfc7fc77c7f77e77e77f7e7c7c7f7f7ffcf7e77e7c7f7e77ee7f77e7e7c7fcef7c7f7e7e7c7c7e7f7f7f7e7c7c7f7f7f7f7f7fe7ce7f7f7f7f7f7cf7fcceff7f7ffcffcf7f7f7fcc7f7fcf7f7ff7f7f7f7fcf7fcfcf7f7fccfcf7fffff7ffcffffffffcfcfffff7fff
                                fff7ffffcf7ff7fcfff7fcffffcffcfffcffff7ffffffffff7ffffffcfcffcfffffffff7ff7fffffcfffffcfff7ffff7fcffffffcfcffcffcf77f7f77e7f7f7c77ef7e7f7fcfcf7f77ce7f7e7e7f7e7f77e7c7f7ffcf77c7e7c7f7c7f7f7f7c7c7f7f7f7f7c7ec7ec7e7f7f7f7c7f7f7cef7fcf7f7fcfcfcf7f7fcfcfcf7f7fcf7f7f7f7fccfcf7f7f7f7f7f7fcf7f7f7ffffcfffffffcf7ffcffff7ff7fffcf
                                7fffcf7ffcfcffcf7ffffffcfffcfff7fffcfffffcf7ffcffffcffcffff7fff7ff7ff7fffffcfcfff7fcfff7ffffcfcfff7fcfcff7fcff7f77f7e7e7f7c77e7ef777f7f7fcf7f7c7e7f77e7f7c77e777c7c7f77f7f7f7f7f7f77c7f77e7c7c7f7e7c7e7f7ef7f7f7f7f7f7cf7f7f7cec7f7c7f7fff7f7f7f7ffcf7f7f7f7fcf7f7fcfcfc7f7f7fcfcf7fc7f7f7f7fcfffcffffcfcf7fffffffffcfffffffffff
                                fcf7ffcf7ff7fcf7fc7ffcfff7fff7ffffff7fcffffffff7fcffcff7fffffcfffffffffcf7ffff7fffff7ffffcfcfffcfffff7fcffff7fffc7e7f7f7e7f7f7777fe7cf7ff7ff7c7f7e7c7f77e7f7c7f7e7f77fcfcfc7c7e777f7e77f7f7f7e7c7f7f7f7c7c7f7c7f7c7f7f7c7f7fcf7f7f7f7ffc7ffcffcffcf7fcf7f7fcc7f7fc7f7f7fcf7fc7f7f7f7ffcfcf7fff7f7ffcffffffff7ffcff7fff7ffcffcff7
                                ffcfcffcfcfff7fffffcf7ffffcfffffcf7ffffcf7ffcfffffcff7fffcfffffcffcfcfcfffcf7fffcf7fffcfffff7f7ffcf7ffff7fcfffcf7f7f7e7c7f7e7ef7e7f7fcfcfcf7e7f77f7e77c7f77e7f7e7f7ef7f7f7e7f7c7f7e7f7f7e7c7f7f7f7c7c7f7f7f7c7f7cf7ce7f7f7ce7f7f7cf7f7fcfcf7f7f7f7ff7f7fcf7f7fcf7ff7f7f7f7fcfcf7fcfc7f7f7fcfcfffffff7fcf7fffffff7ffffffffffff7ff
                                fcff7f7ff7f7ffcf7f7fff7f7ffcffcffffffcfffffff7ffcff7ffffff7fcfff7ffffff7ffffffcffffffffcf7fffffffffffcfcfff7fcffc7e7c7f7e7e7f77fcfcfcf7f7f7c7e7e77c7f7f77ec7f77c77ef7fef7f7c7e7f7e7f7c7c7f7e7c7f7e7f7f7ec7ef7f7f7ef7f7f7cf7f7cc7f7f7cfcf7f7ffcffcf7f7fc7f7fcf7f7f7fcfcfcfcf7f7f6f7f7fcf7f7f7ffcfcfcfffffffcffcfffffcfcffcf7fffff
                                cf7ffffcffffcf7ffcfc7ffcfcf7ffff7ffcfff7ffcffffff7fffcfcfffff7ffffcf7ffffcf7fcff7ffcfcfffffcffcf7fcfcf7ff7ffffcff7f7f7ef7f7f7cef7f7f7ffcf77e777c7e77e7e7f7e77ec7fcf7fcf7c7e7f7f7cc7c7f7f7ec7f7f7c7f7cec7f7f7c7f7c7f7cf7f7ec7f7fcf7cfcf7ffcfcf7f7fcfcf7ff7fc7fcfcfcf7f7f7f7fcf7f7fcfcf7fcffcffcffffffcfcfcff7ff7ffcfffff7fffffcf7
                                fffcfcff7fcf7ffcff7ffcf7ffffc7fffffff7fffff7ffcffffcfffff7fffffcffffffcfffffffcfffffff7ffcff7ffffffffffcfffcf7fcf7c7ce77f7c7f7f7fffcf7f77f77f7e77f7f7c7f7e7f7f7ef7fcf7c7f7f7c7c7f7f7f7e7f7f7c7e7f7cf7f7f7f7f7f7ef7cf7c7cf7f7fc7f7f7f7ff7f7f7ffcfc7f7fc7fcf7fc7f7f7f7fcffcf7f7fcf7f7f7fcf7f7fff7fcf7ffffff7fffffffffcf7fffffcf7ff
                                cfcff7fcff7ffcff7ffcf7ffc7f7ff7f7cc7ffcf7f7fcf7f7f7f7f7f7fcf7f7f7f7fcff7ff7ffcffcf7f7fffff7fffcfcf7fcf7ffcffffffcf7f7f7f7ef7efcfc7f7ff7f7ece7c7e7777e7f7e6f7c7f7fcf7f7f7e7c7f7f7e7c7ecf7c7c7f7f7cf7e7f7cf7c7f7f7cf7c7fc7f7f7cf7f7fcff7ffcfff7f7ff7fc7ff7f7fcfcf7fcfcf7f7f7fcf7f7fcfcfcf7ffff7fffffffcf7ffffffcfcfcffffffcff7ff7f
                                f7fcffff7ffcff7ffcf7ffcfffffcffcffff7f7fcffcf7fcfcfcf7fcfc7fcfcfcf7f7c7f7ffcff7ffffffffcfffffffffffffffcff7fcf7ff7f7c7f7c7e7f7f7ffff7c7ce7f7f77f7e7e7f7c7e7f7fcfcf7f7c7f7f7f7e7c7f7f77c7f7f7ce7f7e7f7cf7f7fe7f7f7c7fc7f7f7cf7f7f7fcf7fcf7f7fcff7fcf7fc7fcf7f7f7fc7f7ffcfcf7f7fcf7f7f7fcfcf7ffffcfcffffffcffcffffff7ffcffff7fccf7
                                ffff7fcffcff7ffcf7ffcfc7f7fcf7f7f7f7ffcf7f7f7fcf7f7f7fc7ffc7f7f7f7fcff7fcc7f7fc7f7fffcfff7ffcf7fcfcf7fff7fffcffcfc7f7f7ef7fffcffc7f7f7f7f7c7f7f7c7f7c7e7ff7fcf7f7ff7ce7e7c7e7f7f7c7fef7f7cef7f7cf7f7fcf7ce7fc7fecf7f7f7fef7f7fcefc7ffcf7ffcfcf7f7f7fcff7fcf7fcf7ffcf7f7f7ffcf7fcfcfff7f7fffffcffff7fcf7ffffff7ff7ffffffcf7fcf7fc
                                fcfffff7ff7ffcff7ffcf7ffffffcffcfcffcf7ffcfcfcf7fcfcfcff7f7fcf7f7fc7f7fcf7fcf7ff7f7c7fcfffffffffffffffcfffcff7fff7f7e7f7c7f7ffcfff7cec7f7f7f7e7f7f7c7f7f7ffcf7ffcf7c7f7f7f7f7c7cef77c7f7f77c7f7f7f7fc7f7f7f7f7c7f7f7fcc7f7f7f7fcfff7fcffcf7f7fcfcfcf7f7f7f7fcf7fc7ffcffcf7f7fcf7f7f7ffcfcffcfff7fffffffff7fffffffffcf7f7fcf7ff7f
                                ff7fcf7ffcffcf7fccf7ffcfcf7ff7ff7f7f7ff7f7f7f7ff7f7f7f7f7ff7f7fcf7ff7fc7fcf7f7f7fcff7f767c7cffcf7fcfcfffcff7fffcfc7f7f7f7ffcfff7fcf7f7f7c7f7f7f7e7f7f7cfcf7f7fcf7c7f7c7f7c7c7f7f77f7f7c7ef7f7c7c7fcf7f7c7f7f7fcf7f7f7f7f7fcccf7f7f7ff7f7fcffcf7f7f7fcf7fcff7f7fcff7f7f7f7fcf7f7fcfcfcf7f7ffff7fffcfcfcfcfffcffcffcffffcf7f7f7fcf
                                7fff7fffcfcffcfff6f6fcf7fffcffcffcffcfcffcffff7fcfcff7fcf7fcff7fcf7fcf7fc7f7fcfcf7cf7fcccf767f7ffffff7fff7fffcff7fc7f7fefcff7fffff7c7f7fef7cec7fcc7f7ff7fcfcfcf7f7f7f7f7c7f7f7e7f7c7ce7f7c7f7f7ffc7f7cf7f7f7cc7f7cccf7fcf7f7fcffcffcffcf7f7f7f7fcf7f7fcf7f7fcfcf7ffcf7fcfcf7fcfcf7f7fcfff7fcfffffffffffffcfff7fffff7f7fcfcfcfcf7
                                ffcfffcfff7f7fcf7ffeffcfcf7fcff7ff7fcf7fcf7f7ffcf7f7ffcf7fcf7fcf7fcf7ff7ffcf7f7f7f7fcf7f7fcfc7f7c77cfffcfffcff7fff7f7ccf7f7fffcfcff7f7f7c7f7f7f7f7fefcfcf7f7f7fc7f7e7f7ef7ec7f7c7cf7f7f7f7f7cffc7f7cf7cf7fccf7f7f7f7f7f7cf7ff7f7f7f7f7fffcfcf7fc7fcfcf7fcfcf7f7ff7f7ffcf7f7fcf7f7ffcf7f7ffffffcfcf7f7fcffff7fffcf7fcf7f7f7f7f7ff
                                cffcfcfcfcffffcffcff7ff7fcff7fffcfff7fff7ffcfcf7fffcfcf7fcf7fcf7fc7fc7ff7f7fcfcfcfcf7f7f67c7ff7ffff7f7c7f7ff7fffcfffff7ffffffff7ffffcf7fcf7f7f7f7fcf7f7fcffcff7f7cef7c7f7f7f7c7fc7c7f7c7f7cfef7f7f7f7f7ce7f7f7fcf7fc7fcf7fcfcffcffcffcf7f7f7ffcff7f7f7fcf7f7fffcfcfcf7f7fcfcfffffcf7ffcffcfcfffffffffff7fcffffff7f7f7ffcfcffcf7f
                                f7ff7ff7ffcf7ff7ff7ffcff7c6ffcf7fcfcfcfcfcf7f7ffccf7ff7fff7fcf7fcff7ff7fcfcf7f7f7f7fcfcefffc7fc7c7f7f7fcf7f7ffcff7fcfffcfffcfcffffcf7cf7e7f7fcecf7fcfcf7f7f7f7f7f7f7cf7e7c7cef7c7f7f7f7f7f7f7f7f7ce7f7f7fc7f7f7c7f7fcf7f7ff7f7fcf7f7f7ffcfcf7f7f7fcfcf7f7fcfc7f7f7f7fffffff7fcf7ffffcf7fffff7ff7ffcffcfffffcfcf7ffcfcf7f7f7cf7fc
                                ffcfffcff7fffcffcffcf7fcff7ffcffff7fff7fffffffcff7ffcffcfcff7ffcf7fcf7fcf7f7fcfcf7f7f7f7f7cfcf7ff7fcfc7f7fcf7c7fcfffcfcfcfffffffcff7f7f7fcf7f7f7ffcf7ffcffcf7cce7f7c7ef7f7f7f7c7f7f7cec7fcff7f7cf7fc7f7f7fc7fcf7fcf7f7fcf7ffcfcf7ffcffcf7f7fcfcfcf7f7ffcf7fcffcfcfcf7fcf7fffffffcf7fffffcf7ffffffff7ffffcfff7f7fc7f7f7fcf6c6cfcf
                                cffcfcfcffcfcf7c6cf7ffcfcffcf7fcfcfcfcfcf7fccf7fffcff7ff7fcffcf7fcf7fcf7fcfcf7f7ffcfcf7fcf7f7fcf7fc7f7fcf7f7fcf7f7cff7fff7ff7fff7fff7fcf7f7fcfcfcf7ff7f7f7f7f7f7f7f7f7c7f7f7c7f7f7cef7ffcf7cc7f7ce7f7fecf7fc7f7fc7fcf7f7ffcf7f7ffcf7fcf7fcf7f7f7f7fff7f7ffcf7f7f7f7fffcffcf7f7fffffcfcfffffffcff7ffffcfff7f7fcf7ffcfcfcf7fcf7f7f
                                f7ff7fff7fff7fffcf7ffcf7f7fcfff7ff7fcf7f6fcffcfcf7fcffcfff7fcfcff7ff7fcf7f7f7fcf7f7f7ff7f7fcf7f7fef7fcf7f7fc7f7f7f7c7ffcffffffcfffcfc7f7f7fcf7f7f7fcfcfcf7f7f7f7ce7f7f7f7cef7f7f7cf77f7f7f7f7fcef7f7f7c7f7f7fcf7fcf7fcffcf7ffcfcf7ffcf7fcf7fcf6fcfc7fcff7f7fcffcfcf7fff7ffffffcf7fffff7ffcfffffffffcfff7ff7fcf7fc7f7f7f7fcf7ffcf
                                cfcffcfffcfffcfc7fcfcf6fcff7f7ff7fff7f6c7c7f7ff7fff7fcf7fcff7ff7ffcff7fcfcfcf7fcfcfffcffffc7fcfcf7fcf7f7fc7fcf7fcf7fc7f7ffcfffff7ffffcf7fcf7ffcfffcf7f7f7f7f7ccf7f7f7cf7f7f7c7f7c7cfcfcff7f7f7c7f7fccf7f7fcf7f7fc7f7f7f7fcf7ff7fcfcf7fcf7ff7f7fcf7ffcf7ffcfcf7f7f7fff7ffcf7fcffffcf7fffffff7ff7ffcfff7ff7fcf7ff7ffcfcfcfcf7fcf7f
                                fff7ff7fff7fff7ffcfcf7ffcfcfffcffcfcfcfcfcfffcffcfcfcf7fcf7ffcffcf7fcf7f7f7fcf7f7f7cf7f7f7ff7f7f7f7f7fcf7ff7f7f7f7f7fc7f7cff7fcfffcff7fcf7ffcf7f7f7f7f7f7fccf7f7f7f7f7ec7f7f7f7fef7f7f7f7f7ccf7f7f7f7f7fc7f7fcf7ff7fcfcf7ffcf7ff7f7ff7f7f7fcff7f7fc7f7fcf7f7fcfcff7cfffffffff7fcfffffcfcf7fffffffff7ffccf7fcf7ffcf7ff7f7fcfcf7fc
                                f7fffcfcfcfcfcffcf7fffcf7ff7fcf7ff7ff7ff7fcf7f7ff7fcf7ff7ffcf7f7fffcfffcfcf7fcfcfcf7ffcfffcffcf7fcfcf7f7f7fcf7fcef7f7fcf7f7cffffcff7ffffffcf7ffcfcf7f7f7f7f7cf7cecccef7f7ce7f7c7c7fffcf7fccf7f7fc7f7f7f7ff7fc7fc7fcf7ffcfcf7ffcffcfcfcffcfcf7fcff7ffcfcf7fffcf7f7fffffcf7fcfcfff7f7fffffffffcffcf7ffc7f7fcf7ffcffcfcf6fc6f7fcff7
                                ffcfcfff7fff7fcffffcf7fffcffcfffcff7ffcffcf7fffcffcf7fcffcf7ffcfcf7f7f7f7fcf7f7f7fcf7f7f7fcf7ffcf7f7fcfcfce7fcef7fcfc7f7f7f7c77fffffffcf7ff7fcf7f7fcfccf7f7f7f7f7f7f7c7fc7fc7fef7fc7f7fc7f7ef7c7fccf7fcf7fcf7fcff7fcf7f7f7ffcf7f7fcf7f7f7f7fcf7fcfcf7f7ffcf7f7fcf7cf7ffffff7ff7fffff7fcf7fffffffffcf7ffcf7ff7fcf7ff7fc7fcffcf7ff
                                cfff7f7fff7ffff7f7ffffcf7fcf7f7fcfcfcf7f7fffccf7f7fffcf7f7ff7f7ff7ffcfcff7fcffcff7fcfcfcf7fff7fcfcfcf7f7f7ff7f7f7f7f7fcf7fcf7fc7cf7ffcfffffff7ff7f7f7f7fccf7f7fcf7f7f7f7f7f7f7cffcffc7c7f7f7cf7f7f7fc7f7fc7fcf7f7fcfcfffffcf7ffcff7fcfcfcfcf7ff7f7f7fffcf7ffcfcf7ffffffcfcffcfffcfcfffffffcfcf7f7f7ff7f7ff7fcf7ffcfffffc7f7ffcf7
                                fcfcffffcfffcfcfffcf7ffcff7ffffcf7ff7ffffc7ff7ffffc7ff7fff7ffcfcffcff7f7ffcf7f7fcf7f7f7fcf7cffcf7f7f7fcf7fcf7fcfcf7fc7f7f7c7f7fc7f7ffffcf7fcff7fcfcf7f7f7f7fec7f7f7f7f7f7f7fef7f7f7cf7f7cc7f7fcf7fc7fcfcefcf7fcfcf7f7f7f7f7ff7ff7fcf7f7f7f7fcf7fcfcfc7f7ff7f7f7ffc7ffcffff7ffcfcfffcf7ffcffffffcf7fccfcf7fcf7ffcf7fcf7f6f6fcf7ff
                                ff7fcfcff7fcfffcfcfffcf7fffcf7ffff7ffcf7fffcffcf7fffcffccffcf7f7f7fcffcfcf7fcff7fcffcff7fff7f7ffffffcf7ff7f7fcf7f7f7ff7fcf7fcf7f7fc7cfffffff7fcc7f7f7fcf7fc7fcf7f7fccf7fcef7cffcff7f7f7f7fc7f7f7f7fcf7f7f7f7fc7f7ffffcfcfffcff7ff7f7fcfcfcf7f7ff7f7fffcfcfcffcfcf7fffff7ffffcfff7ff7fffffcf7f7c7ffcf7fcfcf7ffcf7ffcf7fcc7ff7ffcf
                                7ffff7fcffff7f7fff7f7fffcf7fffc7fcfcffcfcf7fcf7ffcf7f7ff7f7fcfffcfcf7ff7f7ff7fcf7f7f7fcf7fcfcf7f7f7f7ff7fcfcf7f7fcfc7fc7f7f7f7f7f7fc777fcf7ffcf7fcf7fc7fc7fcf7f7fc7f7cf7f7fcf7ff7cf7ccf7f7fcf7fccf7f7fcf7fffcff7fcf7fcf7f7f7fcfcfcffcf7f7fcfcfcfcff7f7fcf7f7f7f7ffcfcffffcfff7fffffffcf7ff7fcfff7f7ff7ff7ffcfcff7f7ffcfffcffcf7f
                                ffcfffff7fcffffcfcfffcf7fffcf7ffffcf7ff7fffcfffcf7ffffcffcff7f7fcf7ff7ffcfcff7ffcffcfcf7fcf7fcfcfcfffcfcf7f7fcfcf7f7fcfcf7fcef7fcc7fffc7fffcf7ff7f7ffff7ff7f7f7f7fecf7ef7ff7ff7fc7f7f7cf7f7e7f7f7fcfcf7ffccf7fcff7ffcf7ffcffcf7f7f7f7ffcf7f7f7f7f7ffcfcf7fcfcfcf7f7fff7fff7fffffcf7fffffcfcf7f7fcfc7ff7ffcff7f7ffcfcf7f7f7fcf7fc
                                fcf7fcfcfff7fcff7fcfcfffcf7fffcf7ffcfcffcf7f7f7fffcf7fc7ff7ffcff7ffcffcf7fc7ff7fcf7f7fcfcf7fcf7f7f7f7ff7ffcf7f7f7fcf7f7f7fcf7fc7f7f77c7f7cfffc7fcfffcffff7fcf7fcf7f7f7f7fcffcfc7f7fc7f7f7cfcf7fcf7f7f7fcf7fff7fcff7f7ffcfcf7fcfcfcfcf7f7ffcfcffcff7fcf7ffcf7f7fcffffcfffcfffcfcffffff7f7f7f7fcf7f7ff7fcfcf7ffcfcf7fcffcfffcf7fff
                                cffff7ffcfffff7ffff7f7fcfffcfcfff7ff7fcf7ffffcfcf7fcfcff7ffcfcf7fcf7f7fcffff7ffcf7fff7fcf7ff7ffcfcfcf7ffcf7ffcf7fcf7fcf7fc7f7f7fcf7ff7fcf77ffff7fcf7fcfcfff7fcc7fcf7fcf7ff7f7f7fcf7fcf7fef7f7fc7fcf7ff7fff7fcfcf7ffcfcf7f7ffcf7f7f7fcfcf7f7fc7f7fcfcf7fc7ffffff7f7ffffcfffcffff7ffcf7fcfcf7fcf7fcf7ffcf7fffcf7f7ffcf7f7f7cfcfcf7
                                fcf7fff7fcf7fffcf7ffffff7fcf7fcfcfcfff7ffcf7ffcfcffcf7fffcf7f7ffcfcffcf7f7fcfcf7ffc7ffcf7fcff7f7f7f7ffcf7ff7f7ffc7fcf7fcf7fcf7f7f7f7cf7f7fc77ffffffffffffcfff7ff7f7f7f7fcffcf7f7f7f7f7f7f7f7f7ff7f7fcff7fcf7f7fcfcf7f7ffffcf7ffcfcf7f7fcffcfffcfcf7fcfcffffcffffcffcffff7fff7ffff7f7fcf7f7ff7ffcf7fccf7fcf7fcfffc6f7fff6c6ff7fff
                                ffcffcffffffcfcfffcfcf7ffcffff7ff7fcfcfcffcfcf7ff7f7ffccf7ffffcf7ff7f7fffcf7fcff7fffcf7ffcf7fcffcffcf7f7fcfcfcf7ff7fcf7f7fc7fcfcf7fcf7f7f7fcf77fcf7fcf7ffffcff7fccf7fcffcf7f7fcf7f7f7fccf7fcfc7fcfcf7fcfcf7fffcf7fffffcc7f7ff7f7f7ffcfcf7f7f7f7f7ffcf7f7fcfff7ffffff7fffffcfffc7fcfcf7fcff7fcf767fcf7ffcfcff7f7f6fcfcf7ff7fffcf7
                                fcfcff7fcf7ff7fcfcfffcfcff7f7ffcfff7ff7fcf7ffff7ffffcff7ffcf7fcff7ffcfcf7fffcf7ff7f7fcf7fcfcf7f7f7f7fcffcf7f7fcf7fff7ffcf7ff7f7f7fc7f7fcec7f7fc7fcffffff7ffffffc7f7fcf7f7fcfc7f7fccfc7f7fcf7ffcf7f7ffcf7fffccf7ff7f7f7fffcfcfcffcfcf7f7ffcfcfcfffcf7ffcffff7fffcf7ffffcfcfff7fff7f7f7fcf7fcf7f676cf7fcf7f7fcfffcf7ff7ffcffcf7fff
                                ff7fcffff7ffffff7fcf7fff7ffffcff7fffcfff7ffcf7ffcf7ff7ffcf7ffcf7ffcf7ff7fccf7ff7ffcff7ffcf7ffcffcfcfcf7f7ffffcf7fcfcfcf7fcf7fcf7f7fcf7f7f7f7f7f7f7cf7fcfff7fcffffffcf7f7f7f7fcf7f7f7fcfcf7fc7f7fcff7f7ff7f7ff7fcffcfcfc7ff7f7f7f7f7ffcf7f7f7f7f7f7ff7f7ff7ffffffffcffffff7f7f7cfcfcff7f7fcf7f7ccfcffcf7fffcf7fcfffcffcffcf7ffcf7
                                fffff7fcfffcf7fffffcfcfcffcfcf7ffcf7fcfcfcf7ffcffcfcffcf7ffcf7ffcf7ffcffcf7ffcffcf7fcfcf7ff7fcf7fcf7fcfcf7f7ff7fff7ff7fff7fcf7fcfcf7fcef7fcf7ccf7f7fcffcfffff7fcf7ff7fcfcf7f7f7fcf7fc7f7fcf7fcf7f7ffffcffcfcffcf7fcf7fff7ffcfcffcff7f7ffcfcfcffcff7ffcffffffcfcf7fff7fc7fcfcff7f7f7f7ffcf7ffcffcf7f7fcfccf7fffcf7ff7ff7ffcfcffff
                                cf7fffff7fcfffcf7fcfff7fcff7fffcffcff7ff7fffcff7fff7fcfffcffcfcf7ffcf7fcfff7f7f7fcff7fcff7ffcf7fcf7ff7f7ffcf7ffcfcfcffcf7fc7fc7f7f7f7f7fc7f7fc7f7f7c77fffcffffffffffff7f7fcfcfcf7fcf7fcf7f7ff7ffcfcc7fcf7fcf7f7ffcf7fcf7fcf7f7f7f7ffcfcf7f7f7f7fcfcf7f7fcfffffffffcffcff7f7f7fcfcfcff7f7f676f7f7ffcfcf7f7ffcf7fffcffcff7ff7fcf7f
                                fffcf7fcfff7fcfffff7fffff7ffcfff7ffcffcffcf7fcffcf7fff7fcf7ff7fffcf7fff7f7ffffffcf7ffcf7ffcf7ffcf7fcffcfcf7ffcff7ff7fcfcfffcf7fcf7fcf7f7fcf7f7f7fcf7fc77f7ffcfcfcfcfcfffc7f7f7f7fc7ffcf7ffcf7fcf7ffffcf7ff7ffffcf7ffcf7ff7ffcfcfcfcf7f7ffcfffcfcf7fcffffff7ff7fcf7f7f7f7fcfcf7f7f7f7fcffc7c6fcc6cf7f7ffffcf7ffcf7fcf7fcfcffffcfc
                                f7ffffffcfcfff7fcfcfcf7fffcff7fffcff7ff7ffcff7fcf7ffcfff7ffcffcf7fffcf7fffccf7f7fffcf7ffcf7ffcf7ffcf7f7f7ffcf7f7fcfff7ff7f7ffcf7fcf7fcfc7f7fcf7f7c7f7ff7fc77f7ffffffffc7ffcf7fcf7ff7f7ff7f7ffcf7fcf7f7ffcffc7f7ffcf7fcfcfcf7f7fcf7fcfff7fcf7fcf7ff7f7fcfcffffff7fcfcfcfcf7f7ffcfcfcf7f7ffc6fe67c7ffffc7f7fffcffcff7fffcff7f7ff7f
                                ffcf7fcf7ffcfcffcfff7ffcfcfcffcf7fcffcffcff7fff7ffcfcf7ffcff7ffffcf7fffcf7ff7fffc7f7ffcf7ffcf7ffcf7ffcfffc76fcffcf7fffcffcfcf7fff7fc7f7ff7f7f7fcfefcf7cf7fcf7f7c7ff7ffff7f7fcf7ff7fcfcf7fcfcf7fff7ffcfcf7f7ffff7f7ff7fcf7f7ffcf7ff7fc7ffcf7ff7ff7ffcfffffff7f7fcf7f7f7f7ffcf7f7f7f7ffcfcffeff7c6fc7f7ffffcf7fcf7fcfcf7f7ffffcffc
                                fcffffcffcff7ffcf7ffffcfff7fcffffff7ffcf7fcfcfcfcff7fffcff7ffcf7ff7fcf7fcfcffccfffffcf7ffcf7ffcf7ff76c76f7c67f7f7ffc7ff7ff7fffcfcfcfcf7f7fcf7fc7f7f7cf7f7f7f7fcf7c7ffcfffcf7f7fcfcf7f7ffcf7f7fcfcfcf7ff7fffcf7ffcfcff7f7ffcf7fcf7ffcffcf7ffcffcffcfffcf7f7fcfcf7ff7ffcfcf7fcfcffcff7fcf7f7fcf6cffffcffcfcf7ff7fffcf7ffffcf7fcf7f
                                ff7fcff7ff7ffcffffcf7ff7fffff7f7fcffcffffff7fff7fcffcf7f7ffcff7fcffffcff7ff7ff7f7f7fcffcf7ffcf7ffcfc6c6effcf6cfffcfff7ff7ffcf7fcf7ff7fcfcf7fc7fcf7f7f7f7f7f7f7c7ffc7f7fcf7ffcfcf7fcfcf7f7ffcffcf7f7ffcffcf7fcfcf7f7fcfffcf7ff7fcfcf7f7fff7fc7f7f7f7f7fcfcf7f7f7f7ff7f7f7fcf7f7f7f7ffcffffff7fff7f7ffcf7ffffcffcf7fffcf7ffcff7ffc
                                fcfff7fffcffcf7f7ffffcffcf7fffffff7ff7f7f7ffcf7fff7ff7fffcff7ffff7fcf7fffcff7ffffcff7f7fffcf7ffcf7ffefff7fcfef7f7f7f7fcfcfcfcff7ffcfff7f7fc7c67cf7fccf7fccfccf7f7cf7f7f7ffcf7f7fcf7f7ffcf7ff7f7ffffcf7f7fcff7fcffcf7f7f7f7fcff7f7f7fff7fcfcffffcfcfcf7f7f7fcfcfcfcfcfcff7f7fffcfcfcff7f7fcffcfcfffcffcfcf7ff7ffcfcf7fffcf7fffcff
                                7fcfcffcffcffffffcf7ffcffffcf7fcfcfcffffffcffffcfcfcffcfcf7ffcf7fffcffcf7f7ffcf7ff7ffffc7f7ffcf7ff7ff7fcfcf7fcfcfcfcfcf7f7ff7fffcf7f7fffcf7fc6c76f7f76c7f7f7f7fcf7fcf7fc7f7f7ff7f7fff7fcff7ffffc7f7fffcff7fcff7f7fcfcfcfcfcf7ffcffcf7fcf7ff7f7f7f7f7ffcfcfcf7f7f7f7f7f7ffcfc7f7ffcf7ffcff7fcf7fcf7f7fff7ffcffcf7ffffc7ffcfcf7fcf
                                fff7fcff7ff7fcf7ffffcff7f7ffffcf7fff7fcfcff7cfcfcff7fcf7fffcf7ffcf7fcf7ffffcffffcffcf7fffffcf7ffcff7ff7fcf7f6f7fcf7fcf7fff7ffcf7ffcffcf7ffcf7fccfcf7cccf7fcf7fc7fc7f7f7fc7f7fc7fcf7cfcf7fcfcc7fffff7f7fcffcf7ffcf7f7fcf7f7fcf7fc7f7ffcfcf7fcfcfcfcff7f7f7f7ffcfcfcfcfcf7fcfffcfcf7ffcff7fffffff7ffffc7ffcf7fcf7ff7f7ffcf7ffcff7f
                                cfffff7ffcfff7fff7fcf7ffffcf7ffffcfffff7fcf6c7ff7fffffffcf7fffcffcff7ffcfcff7fcf7fcfcfcf7fcfffcf7fcfcffcf7fcc7cf7ffcf7fccfcfcf7fcf7f7fffcf7ffcf7f7fcf7f7fc7fcf7f7fcf7fcf7fcf7fcf7fcf7f7fcf7fffcf7fcfcff7f7ffcf7fcfff7fcffcf7ffcffcfcf7f7fcf7f7f7f7f7fcfcfcf7f7fcf7fcf7ffcf7f7fcf7fcff7ffcf7f7fcfcf7fffcf7fff7fffcfffcffcfcff7fff
                                f7fcfcffcfcffffcffffffcfcffcfcf7ff7fcfcfffff7f6ffcf7f7fcfcfcf7fcf7fffcff7fcffcffff7ff7fffcf7f7fffcf7fcf7ffcfff6ff7f7ffcf7f7f7fffcf7ffccf7ffcf7fcf7c7cf7fcfc7f7fcf7f7fc7fcf7fcf7fc7f7fcf7f7fc7f7ff7ff7fcfff7f7ff7f7fcfcf7f7ff7f7f7f7f7ffcf7ff7ffcff7fcf7f7fcfcfcf7ff7ffcff7ffcf7fffcf7ffcfffcffcf7ffcf7fffcfcffcffcfcf7ff7f7ffcf7
                                fff7ffcff7fcf7ffcf7fcff7fcff7fffcfffcff7f7fffffcffffffff7ff7fff7ffcf7fcfff7fcf7f7ffcffc7ffcfffcf7fffcf7fcf7f7fcf7fffcf7ffcfffccf7ff7f7fffcf7ffcf76c667cf7f767cf7fcfcf7fc7fcf7fc7ffcf7f7fcf7ffcf7fccfcf7f7ffcfcffcf7f7f7ffcf7fcfcfcfcf7cf7fcfcf7f7ffcf7ffcf7fcf7ff7ffcf7fffcf7ffc7f7ffcff7fcf7f7ffcf7ffcf7fcf7ff7ff7fffcffffcffcf
                                fcffcff7ffffffcffcfff7ffff7ffcfcfcf7f7ffffcf7fcf7f7fcf7ffcf6ccffcffcff7fcfff7ffffcff7fffcf7fcf7ffcf7fffcfffcff7ffcf7fcfcf7f7f7f7fcfcff7f7fffcf7ffc67cf6fcfcccf7fc7f7fcff7f7fc7ff7f7fcfcf7ff7f7fcf7f7f7fcf7f7f7f7fcfcf76b7f7ff7f7f7f7f67cfcf7f7fcf7f7ffcf7ff7f7fcffcf7ff7f7fffcfffffcff7ffcfcfffcf7ffcf7fff7ffcffcffcfcf7fcff7ff7
                                ffcff7fffcf7fcf7ff7fffcf7ffcff7ff7fffffcfcffffcfffffcf6cffcf76fcf7ff7fff7f7ffcfcff7ffcfcffff7fffcfcfcf7f7f7fcffcf7ffcf7fcfcfcfffcf7f7fcfcf7ffffc7ffcfcf7f7f7ffcf7fcf7f7fcfcf7fcfcfcf7f7fcf7fcf7f7fcfcfcf7fcfcfcf7f7f76b6fcfcfcffcfcfcf6f7f7ffcf7ffcfcf7ff7ffcfcf7f7ff7ffcfc7f7f7f7fcfcfcff7fcf7fffcffcfcfcfcff7ffcff7ffffcf7ffcf
                                fcf7fffcffcfffffcffcfcfffcff7ffcfffcfcff7fcf7ffcfcf7ffc7fcff6c7fffcffcfcfffcff7f7ffcff7f7f7ffcfcf7ff7ffffffcf7f7ffcf7ff7fcf7fc7f7ffcfcf7f7fc7f7ff7fcf7fcf7ff7fffcf7fcfcf7f7ff7f7f7f7fcf7f7fcf7fcfcf7f7f7fcf7f7f7ffcffcfcf7f7f7f7f7fcf7feffcf7fffcf7f7ff7ffcf7ff7ffcfcfcfcffffcffcff7ff7f7ffcf7fcf7f7ff7fcf7fcffcff7ffcf7ffffcff7
                                fffffcff7ff7f7fcfcff7fcfcf7fffcfcfcfcf7ffffffcff7fffcfff7f7fffc6f7fcf7ff7fcf7ffffcff7ffffffcff7fffcffcf7fcf7ffffcf7ffcffcf7ffffcfc7f7fcfcfcffcf7fcf7fcf7ff7fcf7ff7fcf7f7fcf7fcfcf7ff7fcfcfcf7fcf7f7fcfcfcf7ffcff7f7f7fcf7ffcffcf7676fcfcf7fcfc7f7ffcfcfcf7fcf7ffcf7f7fcf7f7f7fcf7fffcffffcf7fffcffffcfff7fffcf7fcffcffcfc7f6f7ff
                                cf7fcf7ffcffffff7fcffff7ffffcff7ff7ffffcf7f7ff7ffcfcf7fffffcfcfffff7ffcffcfffcf7ff7ffcfcf7ff7ffcf7fcf7ffcfffcf7fcffcf7f7fffc7f7fcfffcf7f7f7f7fcfcfcff7ff7fcf7ffcfff7fcfcf7fcf7f7ff7fcf7f7f7ffcf7ffcf7f7f7ff7fc7fcffcfcf7fcf7f7f76bccf7f7ff7ffffcfcf7f7fcfcf7ffcf7ffcff7ffcfcff7ffcf7f7fcf7ffcf7fcf7ff7fcfcf7fffff7ff7ff7ffccffcf
                                fffffffcf7fcfcfcfff7fcffcfcff7ffcffcf7ffffffcfffcf7fffcc6ffcff7fcfffcff7ff7fcfcfcffcf7fcffcffcfffff7ffcff7fcfcff7f7fffcfc7fffcfcf7f7fcfffcfcf7f7f7fcffcfcfcfcf7fcfcf7f7f7fcf7fcf7fcf7ff7ffcf7f7fcf7ffcfcf7f676cf7f7f7f7ff7ffcfcfcff7ffcfcffc7f7fcf7fffcf7fffcf7ffcf7fcfcf7ff7ffcffcfffcfcfcffcff7ffcffcff7ffcf7fffcffcffcfcf7ff7
                                f7fcf7fcff6ff7ff7fffff7ff7fcffcff7ffffcf7fcff7fcfffcf7ff7c6f7fffc7fcf7ffcffcf7ff7fcffff7fcf7ff7f7fcffcf7fff7ff7ffffc7ff7ffc7fcf7ffcfcf7cf7ffcfcffff7fcf7ff7ffcff7ffffcfcfcf7fcf7fcfcf7ffc7f7fffcf7fcf7f7ffc7cf7cfcffcffcff7f7ff7fcffcf7ff7ffffff7ffccf7ff7f7fffcf7ffcf7fff7ffcff7ff7fcf7fff7ff7ffcf7fcf7ffcffffcf7fcf7fcf7fffcff
                                fffcfff7fcfcffcffcf7fcffcfff7ffcffcf7ffcffcfcfff7fcfffcff6f7fcfcf6cfffcff7ffffcfff7f7fcff7ffcffffcfcf7ffcfcfcffcf7fffcffcfffcf7fcf7f7ff7ff7f7ff7c7fff7ffcffcf7fffc7fcf7f7f7ff7ffcf7fffc7ffcfc7f7ffcf7ffcf7ffcffcf7f7f7f7fcfcfcffcf7f7ffcff7f7f7ffcff7ff7ffcfcf7fff7ff7f67cfcf7fcf7f6c7ffc7ffcffcffffcfffcff7f7ffcff7fcf6ffcfcfcf
                                cfcf7fcfcfcf7ffcffcfff7ffcfcffcf7ffffcff7ff7fcfcff7f7ff7ffccfcffff767ff7ffcf7ff7fcfffcf7ffcff7fcff7fffcff7ff7fcfcfcf7f7fc7f7fcff7ffff7ffcfcffcffffc7ffcff7ff7ff7fffcffffcff7ff7f7ff7f7ffcf7fffcfcf7ffcf7ffcff7f7ffffcffcf7ff7f7ff7fffcf7fcffcffcf7fcf7ffcfcf7ffc7ffcffc7c667fffcffccf6c6ffcf7fcf7f7ff7f7fcffffcff7fffcfcfff7fff7
                                ff7fffffcffffcff7ffcfcffcf7fcffffcf7ff7ffcfff7ff7ffffcffcfff7fc7fcffccffcffcfcffff7fcfffcff7ffcf7ffcf7fcffcfff7ffcffffffffff7fcffc7fcfcf7ff7f7f7fcffcff7ffcffcffcf7f7f7ff7fcfcfcf7fcfcfcfffcf7ff7ffcf7ffcfcf7fffcf7ff7ff7fcffcf7ffcf7fffcf7ff7fcff7fffcf7ff7fcfffcf7f7fc6cc6fcf7fcf7fc7fcf7ffffffffcfffff7fcfcf7fffcfcf7f7fff7ff
                                cfffcf7ff7f7ff7ffcf7ffcffffff7f7ffffcffcff7fffcffcf7c6fcf7fcffffffcfff7ff7ff7fcf7fffcf7ff7ffcffcfcf7fff7fcf7fcfcf7f7fccf7f7ffcf7fffcf7fcf7ffcfffcf7f7f7ffcf7ffcf7ffcfcfcffcf7f7fcfcf7fcf7f7fffcffcf7ffcff7fffcfcfcfcffcffcf7f7ffcf7ffc7f7ff7ffcf7ffc7fcff7fffcf7ff7fffcfffefcf7ff7ffcfff7ffcf7f7fcff7fcfcfff7fffcfcff7fffffcfcf6
                                fcfcfffcffffcfffcfffcff7f7f7ffffcf7ff7ff7ffcf7fcfffcfcffffcfcf7f7ff7fffcffcffffcfcf7fffcffcff7ff7fffcfcff7ffcf7fffffcf7ffffcff7fcf7fff7ffcf7fc7ffcfffcfcf7ffcf7ffcf7ff7fcf7ffcff7f7ffcf7ffcf7f7fcfffcff7ffc7fcf7f7ff7ff7ff7fffcf7ffcfffffcffcf7ffcfffcf7ffcf7fffcffcf7fcf7ff7ffcffcff7fcfcffcfffcf7fffcff7fffcfcfff7ffcc6cfff6fc
                                fff7fcff7fcf6f7ff7fff7ffffffcfcffcffcffffcffffff7fcf7f7f7ff7fffffcffcf7fcff7fcf7ffffcf7fcff7ffcffcf7fcf7ffcf7ffcf7fcfffcf7ff7fffcff7fcfcf7ffcff7f7fcff7fcfcffffcf7ffcfff7ffcf7fcfffcf7ffcf7ffcff7f7ff7ffcfffcf7fff7ffcff7ffccf7ffcf7f7f7f7fcf7fcf7f7f7ffcf7ffcf7fcffcf6fcfcf6ccf7ff7ffcff7fcfcfcfffcfcf7ffcfcff7f7fffcfcfcf7ffff
                                7fffff7fffff7fcfffcf7ffcf7fff7fcff7ffcf7ffcf7fcfff7ffffffcffcf7fcf7c6ffff7fffcffcf7ffcff7fcfcff7ffcff7ffcffcfcf7ffcf7f7fffcffcf7f7ffcf7fffcf7fcfffcf7fff7ff7f7f7ffcf7f7ffcffff7fc7f7ffcf7ffcf7fcfcf7ffcf7f7f7ffc7ffcf7f7cf7ff7fcf7ffcfcfffcf7ffcffcfffcf7ffcffcfff7ff7c76f7c7c6cfcffcf7fcfff7ff7fcfff7ffcff7fcfffffcff7fffffcf7f
                                fcf7fffcf7ffffccfcfffcffcfcfcfff7ffcffffcfffff7fcffcfcf7ff7ffcffcfcfcf7fcfcf7fcffcfcff7ffffcf7ffcf7fffcff7ff7fffcff7fffcf7fcf7ffffcf7ffc7f7ffcf7f7fcfcfcfcfcffffcf7ffcfcff7f7ffcffffcf7ff7f7ffcf7ffcf7fffcfffcfffcf7ffc6c6fcffcfcfcf7ff7fcf7ffcf7ff7fcf7ffcf7ff7fcfcf6cc6cfff6ff7fcf7ffff7fffcffff7fffcff7ffff7fcfcf7fff7fcffffc
                                ffffcfcfffcfcfff7fcf7fcffff7ff7ffcff7f7ff7f7fffff7ff7fffcffcff7ff7ff7ffcfffcfff7fff7fffcf7ffcfcf7ffcf7fcff7ffcf7f7ffcfcfcff7fffcfcfffcfffffcf7ffcff7f7ff7ff7f7fcf7fcff7fcffcfcf7f7f7fff7ffcfcf7ff7ff7fcf7fcf7f7f7fcfcffffcf7fcf7ff7ffcffcf7fcf7ff7ffcf7ffcfffcfffcf7f7c6c7fcfcfcff7ffcf7ffcfcf7fcffcf7fcfffcfcfff7ffffcffff7f7ff
                                7fcff7fcfcf7fcffff7ffff7f7ffcffcff7ffffcffffcf7fcfcffcf7fcff7ffcffcffcff7f7fcf7fcf7ff7ffcfcf7ffffcf7fff7fcfcffcfffcff7fff7ffcfcf7f7fcf7f7fcf7fcf7fcfff7ffcffcfcf7ffc7fff7f7ff7fffcffc7ffcff7fffcff7fff7ffcf7ffcffcf7f7f7f7ffcf7fcffcf7f7ffffcffcffcf7ffcff7fcf7fcffffcf7fff7ff7fcffcffcffcff7ffff7ffffff7fcf7fcfcffcfcfcf7ffffcf
                                fff7ffff7fffff7f7fffcfcfffcffcff7fffcfcfcfcffffffff7fffffcf7ffcfcff7ff7fffffcffffcfcffcff7fffc7fcfffcfcffcff7ff7fcf7ffcf7ffcfcfffffcffcffcf7ffcffcf7fcfcff7ff7fffcfffccffcfcffc7ff7fffcff7ffc7f7fcfccffcf7ffcf7fcf7fffcfffcf7fff7f7fffcfc7fcf7ff7fcffcff7ffcffff7f7fcfffcfcfcffcf7ff7ffcf7fffcf7ffcf7fcfffcffff7fcf7f6ffcfcfcffc
                                f7ffcf7fffcf7ffffcfcff7fcff7ff7fffcfcf7ff7fcf7fcf7fff7fcf7fffcff7fffcffcf7fcf7fcf7ffcff7ffcf7fff7f7ff7fcf7fcfcffcfffcff7ffcff7f7fcf7f7fcf7ffcf7fcf7ffcf7fcf7ffc7fcf7ff7f7fcf7fffcff7f7f7ffcfffffcf7ff7f7ffcf7fff7ffcf7fcf7fffcfcfffc7ff7fff7ffcffcf7ff7ffcf7f7fcfffcf7fcffff7ff7ffcffcf7ffcf7fffcff7ffcf7ff7fcfff7fcfcf7fff7fcf7
                                ffcffffcfcfffcfcff7fcffff7ffcfffcff7fffcffff7fffcffcffcfffcfcf7ffcf7fcffcff7fff7ffcf7fcfcf7ffcfffffcfff7fff7ff7ff7fcf7fffcf7ffffcffffff7ffcf7fff7ffcf7ffcfcfcfffcf7fcffffcf7fcf7f7ffcfffcf7f7f7ff7fcffcfcf7ffcf7fcf7ffcf7fcf7f7fcf7ffcffcfcfcf7f7fff7ffcf7ffffcfcf7fffff7f7ffcfffcfcffffcf7ffcfcf7ffcff7ffcffcf7ffcfcfffcfffffff
                                fcfcf7fff7fcff7fcffff7fcfffcfcf7fcffcf7fcf7fffcff7ffcff7fcff7ffffcfff7f7fcffcfcffcffff7ffffcff7fccf7fcffcfcfcffcffcf7ffcfcffcf7ff7f7fcffcf7ffcfcfcf7ffcf7ff7f7f7fffcf7f7f7fff7ffcfcfcf7fcffffffcfffcf7ff7ffcf7fffcffcf7fffcfffff7ffcff7ff7fffcfffc7ffcf7ffcf7ff7fffcf7fcfffcff7fcff7f7fcfffcff7fffcff7fffcfcf7ffcffcf7fcf7fcf7fc
                                ff7fffcfcfff7ffff7fcffff7fcff7ffff7ffffffcffcff7ffcff7ffff7fffcf7fcfcfffff7ff7fcff7f7ffcf7ff7ffcfffff7fcf7fff7ff7ff7ffcf7fcffcfcffffcf7ffffcfcf7ffcfcf7ff7ffffcfc7f7ffffcfcfcfcf7ff7fcfcf7fccf7fcf7fff7ffcf7ffcf7fcf7ffcf7fcf7fcfcff7ffcffcf7fcf7ffcf7ffcf7ffcffcf7fffff7fcf7ffff7fffff7f7ff7ffcf7fcffcfcf7fffcffcf7fffffff7fff7
            `)
        }
        
    }
    
})
forever(function on_forever5() {
    if (world_gen_done == 1) {
        if (inmenu == 0) {
            if (tiles.tileAtLocationEquals(player1.tilemapLocation(), assets.tile`
                    myTile44
                `) || tiles.tileAtLocationEquals(player1.tilemapLocation(), assets.tile`
                    myTile50
                `)) {
                controller.moveSprite(player1, 35, 0)
                timer.throttle("action", 500, function on_throttle2() {
                    playerhealth.value += -5
                    scene.cameraShake(4, 100)
                    player1.startEffect(effects.fire, 100)
                })
            } else {
                controller.moveSprite(player1, 70, 0)
                player1.ay = 500
            }
            
        } else {
            controller.moveSprite(player1, 0, 0)
        }
        
        if (playerhealth.value == 0) {
            game.splash(death_messages._pickRandom())
            if (game.ask("you died do you want to respond")) {
                playerhealth.value = 100
                tiles.placeOnRandomTile(player1, assets.tile`
                    myTile26
                `)
            } else {
                game.gameOver(false)
            }
            
        }
        
    }
    
})
forever(function on_forever6() {
    
    if (controller.A.isPressed()) {
        if (world_gen_done == 1) {
            if (inbuild == 0) {
                if (tiles.tileAtLocationEquals(select.tilemapLocation(), assets.tile`
                    myTile1
                `) || tiles.tileAtLocationEquals(select.tilemapLocation(), assets.tile`
                    myTile15
                `)) {
                    if (tiles.tileAtLocationEquals(select.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), assets.tile`
                            myTile26
                        `) || (tiles.tileAtLocationEquals(select.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), assets.tile`
                            myTile26
                        `) || tiles.tileAtLocationEquals(select.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), assets.tile`
                            myTile46
                        `))) {
                        tiles.setTileAt(select.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), assets.tile`
                                transparency16
                            `)
                    }
                    
                    tiles.setWallAt(select.tilemapLocation(), false)
                    select.startEffect(effects.ashes, 200)
                    tiles.setTileAt(select.tilemapLocation(), assets.tile`
                            transparency16
                        `)
                    dirt += 1
                    timer.throttle("action", 500, function on_throttle3() {
                        
                    })
                } else if (tiles.tileAtLocationEquals(select.tilemapLocation(), assets.tile`
                    myTile13
                `)) {
                    tiles.setWallAt(select.tilemapLocation(), false)
                    select.startEffect(effects.ashes, 200)
                    tiles.setTileAt(select.tilemapLocation(), assets.tile`
                            transparency16
                        `)
                    stone += 1
                    timer.throttle("action", 500, function on_throttle4() {
                        
                    })
                } else if (tiles.tileAtLocationEquals(select.tilemapLocation(), assets.tile`
                    myTile14
                `)) {
                    tiles.setWallAt(select.tilemapLocation(), false)
                    select.startEffect(effects.ashes, 200)
                    tiles.setTileAt(select.tilemapLocation(), assets.tile`
                            transparency16
                        `)
                    blk_stone += 1
                    timer.throttle("action", 500, function on_throttle5() {
                        
                    })
                } else if (tiles.tileAtLocationEquals(select.tilemapLocation(), assets.tile`
                    myTile10
                `) || (tiles.tileAtLocationEquals(select.tilemapLocation(), assets.tile`
                    myTile11
                `) || (tiles.tileAtLocationEquals(select.tilemapLocation(), assets.tile`
                    myTile79
                `) || (tiles.tileAtLocationEquals(select.tilemapLocation(), assets.tile`
                    myTile80
                `) || (tiles.tileAtLocationEquals(select.tilemapLocation(), assets.tile`
                    myTile74
                `) || (tiles.tileAtLocationEquals(select.tilemapLocation(), assets.tile`
                    myTile70
                `) || (tiles.tileAtLocationEquals(select.tilemapLocation(), assets.tile`
                    myTile77
                `) || (tiles.tileAtLocationEquals(select.tilemapLocation(), assets.tile`
                    myTile78
                `) || (tiles.tileAtLocationEquals(select.tilemapLocation(), assets.tile`
                    myTile81
                `) || (tiles.tileAtLocationEquals(select.tilemapLocation(), assets.tile`
                    myTile83
                `) || tiles.tileAtLocationEquals(select.tilemapLocation(), assets.tile`
                    myTile82
                `))))))))))) {
                    timer.throttle("action", 500, function on_throttle6() {
                        
                        tiles.setWallAt(select.tilemapLocation(), false)
                        select.startEffect(effects.ashes, 200)
                        tiles.setTileAt(select.tilemapLocation(), assets.tile`
                                transparency16
                            `)
                        wood += 3
                    })
                } else if (tiles.tileAtLocationEquals(select.tilemapLocation(), assets.tile`
                    myTile19
                `)) {
                    select.startEffect(effects.ashes, 200)
                    tiles.setTileAt(select.tilemapLocation(), assets.tile`
                            transparency16
                        `)
                    sticks += 3
                } else if (tiles.tileAtLocationEquals(select.tilemapLocation(), assets.tile`
                    myTile16
                `)) {
                    tiles.setWallAt(select.tilemapLocation(), false)
                    select.startEffect(effects.ashes, 200)
                    tiles.setTileAt(select.tilemapLocation(), assets.tile`
                            transparency16
                        `)
                    timer.throttle("action", 500, function on_throttle7() {
                        
                    })
                    stone += 3
                } else if (tiles.tileAtLocationEquals(select.tilemapLocation(), assets.tile`
                    myTile3
                `)) {
                    tiles.setWallAt(select.tilemapLocation(), false)
                    select.startEffect(effects.ashes, 200)
                    tiles.setTileAt(select.tilemapLocation(), assets.tile`
                            transparency16
                        `)
                    timer.throttle("action", 500, function on_throttle8() {
                        
                    })
                } else if (tiles.tileAtLocationEquals(select.tilemapLocation(), assets.tile`
                    myTile6
                `)) {
                    if (tiles.tileAtLocationEquals(select.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), assets.tile`
                            myTile33
                        `) || (tiles.tileAtLocationEquals(select.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), assets.tile`
                            myTile42
                        `) || (tiles.tileAtLocationEquals(select.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), assets.tile`
                            myTile39
                        `) || tiles.tileAtLocationEquals(select.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), assets.tile`
                            myTile52
                        `)))) {
                        tiles.setTileAt(select.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), assets.tile`
                                transparency16
                            `)
                    }
                    
                    tiles.setWallAt(select.tilemapLocation(), false)
                    select.startEffect(effects.ashes, 200)
                    tiles.setTileAt(select.tilemapLocation(), assets.tile`
                            transparency16
                        `)
                    timer.throttle("action", 500, function on_throttle9() {
                        
                    })
                } else if (tiles.tileAtLocationEquals(select.tilemapLocation(), assets.tile`
                    myTile57
                `) || (tiles.tileAtLocationEquals(select.tilemapLocation(), assets.tile`
                    myTile56
                `) || (tiles.tileAtLocationEquals(select.tilemapLocation(), assets.tile`
                    myTile55
                `) || tiles.tileAtLocationEquals(select.tilemapLocation(), assets.tile`
                    myTile53
                `)))) {
                    tiles.setWallAt(select.tilemapLocation(), false)
                    select.startEffect(effects.ashes, 200)
                    tiles.setTileAt(select.tilemapLocation(), assets.tile`
                            transparency16
                        `)
                    timer.throttle("action", 500, function on_throttle10() {
                        
                    })
                } else if (tiles.tileAtLocationEquals(select.tilemapLocation(), assets.tile`
                    myTile65
                `) || (tiles.tileAtLocationEquals(select.tilemapLocation(), assets.tile`
                    myTile64
                `) || (tiles.tileAtLocationEquals(select.tilemapLocation(), assets.tile`
                    myTile61
                `) || tiles.tileAtLocationEquals(select.tilemapLocation(), assets.tile`
                    myTile60
                `)))) {
                    if (tiles.tileAtLocationEquals(select.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), assets.tile`
                            myTile46
                        `) || (tiles.tileAtLocationEquals(select.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), assets.tile`
                            myTile66
                        `) || (tiles.tileAtLocationEquals(select.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), assets.tile`
                            myTile71
                        `) || tiles.tileAtLocationEquals(select.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), assets.tile`
                            myTile2
                        `)))) {
                        tiles.setTileAt(select.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), assets.tile`
                                transparency16
                            `)
                    }
                    
                    tiles.setWallAt(select.tilemapLocation(), false)
                    select.startEffect(effects.ashes, 200)
                    dirt += 1
                    tiles.setTileAt(select.tilemapLocation(), assets.tile`
                            transparency16
                        `)
                    timer.throttle("action", 500, function on_throttle11() {
                        
                    })
                } else {
                    
                }
                
            }
            
            if (inmenu == 0) {
                if (inbuild == 1) {
                    if (dirt >= 1) {
                        if (buildM == 1) {
                            timer.throttle("action", 500, function on_throttle12() {
                                
                                tiles.setWallAt(select.tilemapLocation(), true)
                                select.startEffect(effects.ashes, 200)
                                tiles.setTileAt(select.tilemapLocation(), assets.tile`
                                    myTile1
                                `)
                                dirt += -1
                            })
                        }
                        
                    }
                    
                    if (wood >= 1) {
                        if (buildM == 2) {
                            timer.throttle("action", 500, function on_throttle13() {
                                
                                tiles.setWallAt(select.tilemapLocation(), true)
                                select.startEffect(effects.ashes, 200)
                                tileUtil.coverTile(select.tilemapLocation(), assets.tile`
                                    myTile9
                                `)
                                wood += -1
                            })
                        }
                        
                    }
                    
                    if (stone_wall >= 1) {
                        if (buildM == 3) {
                            timer.throttle("action", 500, function on_throttle14() {
                                
                                tiles.setWallAt(select.tilemapLocation(), true)
                                select.startEffect(effects.ashes, 200)
                                tiles.setTileAt(select.tilemapLocation(), assets.tile`
                                    myTile8
                                `)
                                stone_wall += -1
                            })
                        }
                        
                    }
                    
                    if (blk_stone_wall >= 1) {
                        if (buildM == 4) {
                            timer.throttle("action", 500, function on_throttle15() {
                                
                                tiles.setWallAt(select.tilemapLocation(), true)
                                select.startEffect(effects.ashes, 200)
                                tiles.setTileAt(select.tilemapLocation(), assets.tile`
                                    myTile7
                                `)
                                blk_stone_wall += -1
                            })
                        }
                        
                    }
                    
                    if (wdwall >= 1) {
                        if (buildM == 5) {
                            timer.throttle("action", 500, function on_throttle16() {
                                
                                tiles.setWallAt(select.tilemapLocation(), false)
                                select.startEffect(effects.ashes, 200)
                                tiles.setTileAt(select.tilemapLocation(), assets.tile`
                                    myTile17
                                `)
                                wdwall += -1
                            })
                        }
                        
                    }
                    
                    if (wdfloor >= 1) {
                        if (buildM == 6) {
                            timer.throttle("action", 500, function on_throttle17() {
                                
                                tiles.setWallAt(select.tilemapLocation(), true)
                                select.startEffect(effects.ashes, 200)
                                tiles.setTileAt(select.tilemapLocation(), assets.tile`
                                    myTile18
                                `)
                                wdfloor += -1
                            })
                        }
                        
                    }
                    
                    if (wdciling >= 1) {
                        if (buildM == 7) {
                            timer.throttle("action", 500, function on_throttle18() {
                                
                                tiles.setWallAt(select.tilemapLocation(), true)
                                select.startEffect(effects.ashes, 200)
                                tiles.setTileAt(select.tilemapLocation(), assets.tile`
                                    myTile23
                                `)
                                wdciling += -1
                            })
                        }
                        
                    }
                    
                }
                
            }
            
        }
        
    }
    
})
game.onUpdateInterval(20000, function on_update_interval() {
    if (world_gen_done == 1) {
        if (player1.y <= 3000) {
            for (let value14 of tiles.getTilesByType(assets.tile`
                myTile1
            `)) {
                if (tiles.tileAtLocationEquals(value14.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                        transparency16
                    `)) {
                    if (Math.percentChance(10)) {
                        tiles.setTileAt(value14.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                                myTile4
                            `)
                    }
                    
                }
                
            }
            for (let value142 of tiles.getTilesByType(assets.tile`
                myTile64
            `)) {
                if (tiles.tileAtLocationEquals(value142.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                        transparency16
                    `)) {
                    if (Math.percentChance(50)) {
                        tiles.setTileAt(value142.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                                myTile4
                            `)
                    }
                    
                }
                
            }
            if (Math.percentChance(15)) {
                tileUtil.replaceAllTiles(assets.tile`
                        myTile4
                    `, assets.tile`
                        myTile29
                    `)
                tileUtil.replaceAllTiles(assets.tile`
                        myTile29
                    `, assets.tile`
                        myTile31
                    `)
            }
            
            for (let value15 of tiles.getTilesByType(assets.tile`
                myTile31
            `)) {
                if (tiles.tileAtLocationEquals(value15.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                        transparency16
                    `)) {
                    if (Math.percentChance(15)) {
                        tiles.setTileAt(value15.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                                myTile32
                            `)
                    }
                    
                }
                
            }
        }
        
        if (player1.y >= 3000) {
            for (let value143 of tiles.getTilesByType(assets.tile`
                myTile55
            `)) {
                if (tiles.tileAtLocationEquals(value143.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                        myTile54
                    `)) {
                    if (Math.percentChance(25)) {
                        tileUtil.coverTile(value143.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                                myTile48
                            `)
                    }
                    
                }
                
            }
            if (Math.percentChance(25)) {
                tileUtil.replaceAllTiles(assets.tile`
                        myTile48
                    `, assets.tile`
                        myTile51
                    `)
                tileUtil.replaceAllTiles(assets.tile`
                        myTile51
                    `, assets.tile`
                        myTile58
                    `)
            }
            
            for (let value152 of tiles.getTilesByType(assets.tile`
                myTile58
            `)) {
                if (tiles.tileAtLocationEquals(value152.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                        myTile54
                    `)) {
                    if (Math.percentChance(25)) {
                        tileUtil.coverTile(value152.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                                myTile59
                            `)
                    }
                    
                }
                
            }
        }
        
    }
    
})
