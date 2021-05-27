'use strict';

var R6MMainData = (function(R6MLangTerms, undefined){
  var DRONE_MED = 18,
    DRONE_SMALL = 14,
    mapRoomTerms = R6MLangTerms.terms.mapRooms,
    mapNameTerms = R6MLangTerms.terms.mapNames,
    objectiveTerms = R6MLangTerms.terms.objectives,
    floorTerms = R6MLangTerms.terms.floorNames,
    spawnTerms = R6MLangTerms.terms.spawnPoints,
    bankTerms = mapRoomTerms.bank,
    borderTerms = mapRoomTerms.border,
    chaletTerms = mapRoomTerms.chalet,
    clubTerms = mapRoomTerms.club,
    consulateTerms = mapRoomTerms.consulate,
    favelaTerms = mapRoomTerms.favela,
    fortressTerms = mapRoomTerms.fortress,
    herefordTerms = mapRoomTerms.hereford,
    houseTerms = mapRoomTerms.house,
    kanalTerms = mapRoomTerms.kanal,
    kafeTerms = mapRoomTerms.kafe,
    oregonTerms = mapRoomTerms.oregon,
    outbackTerms = mapRoomTerms.outback,
    planeTerms = mapRoomTerms.plane,
    skyscraperTerms = mapRoomTerms.skyscraper,
    bartlettTerms = mapRoomTerms.bartlett,
    coastlineTerms = mapRoomTerms.coastline,
    themeparkTerms = mapRoomTerms.themepark,
    towerTerms = mapRoomTerms.tower,
    yachtTerms = mapRoomTerms.yacht,
    villaTerms = mapRoomTerms.villa;

  var getMapData = function getMapData() {
    return {
      /*
      example: {
        name: mapNameTerms.example,
        imgUrlPrefix: 'example',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        floors: [
          {
            index: 0,
            top: 0,
            left: 0,
            background: true, // background, always visible
            dontSelect: true, // not a real floor, can't be selected
            png: false // jpg file
          },
          { index: 1, top: 500, left: 0, name: floorTerms.firstFloor, png: false },
          { index: 2, top: 0, left: -250, name: floorTerms.secondFloor, png: true }, // png file
          { index: 3, top: -50, left: -600, name: floorTerms.roof } // jpg file; default, can be left out
        ],
        hostageObjectives: [
          { floor: 1, top: 250, left: 0 },
          { floor: 2, top: 450, left: -120 }
        ],
        bombObjectives: [
          { floor: 1, top: 60, left: 90, set: 1, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 30, left: 140, set: 1, letter: objectiveTerms.bombShortB },
          { floor: 2, top: -120, left: 60, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 2, top: -110, left: 0, set: 2, letter: objectiveTerms.bombShortB }
        ],
        secureObjectives: [
          { floor: 1, top: 10, left: -40 },
          { floor: 2, top: 200, left: 110 }
        ],
        // corners of building
        zoomPoints: {
          topLeft: { top: -368, left: -483 },
          bottomRight: { top: 310, left: 397 }
        },
        // top left corner of compass (square around it)
        compassPoints: {
          top: 120, left: 250
        },
        ladders: [
          { floor: 1, top: -440, left: 554, otherFloor: 'up' },
          { floor: 2, top: -440, left: 554, otherFloor: 'down' }
        ],
        cameras: [
          {
            floor: 1,
            top: -150,
            left: -390,
            id: 1, // cam number
            location: exampleTerms.lobby, // room
            otherFloor: 'up' // the cam is 'up' and not in the first floor, but can still see it
          },
          {
            floor: 2,
            top: -150,
            left: -390,
            id: 1, // same cam as before
            location: exampleTerms.lobby,
            // what can be seen: array of unclosed polygons
            // array of array of points, where the points in the inner arrays are connected
            los: [
              [
                {top: -278, left: -414}, {top: -163, left: -434}, {top: 61, left: -413}
              ]
            ]
          },
          // outdoor cam: no floor
          {
            outdoor: true, top: 115, left: 562, id: 7, location: exampleTerms.backAlley,
            los: [[{top: 49, left: 577}, {top: 115, left: 584}, {top: 288, left: 571}]]
          }
        ],
        // middle point of hatches 'above'
        ceilingHatches: [
          // example: hatch from 2F to 1F
          { floor: 1, top: 10, left: -138 }
        ],
        skylights: [
          { floor: 1, otherFloor: 'up', top: -102, left: 320 },
          { floor: 2, top: -102, left: 320 },
          { floor: 3, otherFloor: 'down', top: -102, left: 320 }
        ],
        droneTunnels: [
          {
            floor: 0,
            top: -190,
            left: -422,
            rotate: 116, // 0: vertical, 90: horizontal
            size: 22 // length
          }
        ],
        spawnPoints: [
          { letter: spawnTerms.a, top: -590, left: -888, description: exampleTerms.spawnBoulevard },
          { letter: spawnTerms.b, top: -446, left: 641, description: exampleTerms.jewelryFront },
          { letter: spawnTerms.c, top: 534, left: 652, description: exampleTerms.spawnBackAlley }
        ],
        roomLabels: [
          { outdoor: true, description: exampleTerms.parkingLot, top: -575, left: -661 },
          { floor: 1, description: exampleTerms.garageRoof, top: 236, left: -274 },
          { floor: 1,
            smaller: true, // slightly smaller text
            hardToRead: true, // adds semitransparent gray background
            description: exampleTerms.elevators, top: 170, left: -183 },
          {
            floor: 2,
            veryHardToRead: true, // adds slightly less transparent gray background
            description: exampleTerms.executiveHallway,
            top: -166,
            left: 22
          }
        ]
      },
      */
      bank: {
        name: mapNameTerms.bank,
        imgUrlPrefix: 'bank',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        floors: [
          { index: 0, top: -715, left: -1275, background: true, name: floorTerms.basement },
          { index: 1, top: -537, left: -601, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -537, left: -601, name: floorTerms.secondFloor },
          { index: 3, top: -537, left: -601, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 0, top: -160, left: -69 },
          { floor: 1, top: -26, left: -15 },
          { floor: 1, top: 65, left: 281 },
          { floor: 2, top: -102, left: 138 }
        ],
        bombObjectives: [
          { floor: 0, top: 8, left: 193, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 0, top: 34, left: -31, set: 4, letter: objectiveTerms.bombShortB },
          { floor: 1, top: -26, left: 26, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: -100, left: 169, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 1, top: 160, left: 97, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 100, left: 345, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 2, top: -52, left: -13, set: 1, letter: objectiveTerms.bombShortB },
          { floor: 2, top: -151, left: 138, set: 1, letter: objectiveTerms.bombShortA }
        ],
        secureObjectives: [
          { floor: 0, top: 10, left: -67 },
          { floor: 1, top: 209, left: 113 },
          { floor: 1, top: -100, left: 125 },
          { floor: 2, top: -52, left: 138 }
        ],
        zoomPoints: {
          topLeft: { top: -368, left: -483 },
          bottomRight: { top: 310, left: 397 }
        },
        compassPoints: {
          top: 316, left: 741
        },
        ladders: [
          { floor: 1, top: -440, left: 554, otherFloor: 'down' },
          { floor: 0, top: -440, left: 554, otherFloor: 'up' },
          { floor: 1, top: -415, left: -711, otherFloor: 'up' },
          { floor: 2, top: -415, left: -711, otherFloor: 'down' },
          { floor: 1, top: 542, left: 588, otherFloor: 'up' },
          { floor: 2, top: 542, left: 588, otherFloor: 'down' }
        ],
        cameras: [
          { floor: 1, otherFloor: 'up', top: -157, left: -392, id: 1, location: bankTerms.lobby },
          {
            floor: 2, top: -157, left: -392, id: 1, location: bankTerms.lobby,
            los: [[{top: -278, left: -414}, {top: -163, left: -434}, {top: 61, left: -413}]]
          },
          {
            floor: 1, top: 100, left: 42, id: 2, location: bankTerms.officeHallway,
            los: [[{top: 85, left: -211},{top: 85, left: 61},{top: 136, left: 61}]]
          },
          {
            floor: 2, top: -171, left: 244, id: 3, location: bankTerms.skylightStairwell,
            los: [[{top: 91, left: 227},{top: -185, left: 227},{top: -185, left: 420}]]
          },
          {
            floor: 0, top: 119, left: -203, id: 4, location: bankTerms.vaultLobby,
            los: [[{top: 51, left: -220}, {top: 135, left: -220}, {top: 135, left: -12}]]
          },
          {
            outdoor: true, top: -431, left: 5, id: 5, location: bankTerms.plaza,
            los: [[{top: -490, left: -977},{top: -503, left: 36},{top: -302, left: 457}]]
          },
          {
            floor: 0, top: 148, left: -518, id: 6, location: bankTerms.garageRamp,
            los: [[{top: -363, left: -515},{top: 82, left: -538},{top: 212, left: -538},{top: 241, left: -530},{top: 269, left: -516},{top: 292, left: -494},{top: 312, left: -461},{top: 322, left: -427},{top: 324, left: -303}]]
          },
          { floor: 1, otherFloor: 'down', top: 148, left: -518, id: 6, location: bankTerms.garageRamp },
          {
            outdoor: true, top: 115, left: 562, id: 7, location: bankTerms.backAlley,
            los: [[{top: 49, left: 577}, {top: 115, left: 584}, {top: 288, left: 571}]]
          }
        ],
        ceilingHatches: [
          { floor: 0, top: 10, left: -138 },
          { floor: 0, top: 197, left: -190 },
          { floor: 0, top: 112, left: 88 },
          { floor: 0, top: 50, left: 169 },
          { floor: 0, top: -101, left: 320 },
          { floor: 1, top: 196, left: -123 },
          { floor: 1, top: 258, left: 55 },
          { floor: 1, top: 139, left: 139 },
          { floor: 1, top: 52, left: 134 }
        ],
        skylights: [
          { floor: 1, otherFloor: 'up', top: -102, left: 320 },
          { floor: 1, otherFloor: 'up', top: -176, left: -314 },
          { floor: 1, otherFloor: 'up', top: 32, left: -314 },
          { floor: 1, otherFloor: 'up', top: 201, left: -36 },
          { floor: 2, top: -102, left: 320 },
          { floor: 2, top: -176, left: -314 },
          { floor: 2, top: 40, left: -314 },
          { floor: 2, top: 201, left: -36 },
          { floor: 3, otherFloor: 'down', top: -102, left: 320 },
          { floor: 3, otherFloor: 'down', top: -176, left: -314 },
          { floor: 3, otherFloor: 'down', top: 40, left: -314 },
          { floor: 3, otherFloor: 'down', top: 201, left: -36 }
        ],
        droneTunnels: [
          { floor: 0, top: -190, left: -422, rotate: 116, size: 22 },
          { floor: 0, top: 59, left: -223, rotate: 116, size: DRONE_MED },
          { floor: 1, top: 80, left: -101, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: 5, left: 84, rotate: 0, size: DRONE_MED },
          { floor: 2, top: -6, left: 90, rotate: 0, size: DRONE_MED },
          { floor: 2, top: 89, left: 95, rotate: 0, size: DRONE_MED },
          { floor: 1, top: 277, left: 321, rotate: 90, size: DRONE_MED }
        ],
        spawnPoints: [
          { letter: spawnTerms.a, top: -590, left: -888, description: bankTerms.spawnBoulevard },
          { letter: spawnTerms.b, top: -446, left: 641, description: bankTerms.jewelryFront },
          { letter: spawnTerms.c, top: 534, left: 652, description: bankTerms.spawnBackAlley }
        ],
        roomLabels: [
          { outdoor: true, description: bankTerms.parkingLot, top: -575, left: -661 },
          { outdoor: true, description: bankTerms.boulevard, top: -575, left: -156 },
          { outdoor: true, description: bankTerms.jewelryFront, top: -575, left: 538 },
          { outdoor: true, description: bankTerms.plaza, top: -295, left: 239 },
          { outdoor: true, description: bankTerms.mainEntrance, top: -448, left: -225 },
          { outdoor: true, alwaysShow: true, description: bankTerms.garageRamp, top: -143, left: -486 },
          { outdoor: true, description: bankTerms.exteriorParking, top: -216, left: -720 },
          { floor: 1, description: bankTerms.garageRoof, top: 236, left: -274 },
          { floor: 2, description: bankTerms.garageRoof, top: 236, left: -274 },
          { floor: 3, description: bankTerms.garageRoof, top: 236, left: -274 },
          { outdoor: true, description: bankTerms.alleyAccess, top: 648, left: 647 },
          { outdoor: true, description: bankTerms.backAlleyRooftop, top: 495, left: 360 },
          { outdoor: true, description: bankTerms.backAlley, top: 336, left: 647 },
          { outdoor: true, floor: 3, description: bankTerms.highRoof, top: -13, left: -136 },
          { outdoor: true, floor: 3, description: bankTerms.lowRoof, top: 56, left: 129 },
          { floor: 0, description: bankTerms.vault, top: -150, left: -151 },
          { floor: 0, description: bankTerms.goldVault, top: -128, left: 100 },
          { floor: 0, description: bankTerms.serverRoomStairs, top: -161, left: 278 },
          { floor: 0, description: bankTerms.serverRoom, top: -59, left: 321 },
          { floor: 0, description: bankTerms.CCTVRoom, top: 53, left: 208 },
          { floor: 0, description: bankTerms.loadingDock, top: 167, left: 56 },
          { floor: 0, description: bankTerms.secureHallway, top: 53, left: 101 },
          { floor: 0, description: bankTerms.secureHallway, top: 114, left: 32 },
          { floor: 0, description: bankTerms.sewer, top: -255, left: 455 },
          { floor: 0, description: bankTerms.lockers, top: 4, left: 2 },
          { floor: 0, description: bankTerms.vaultLobby, top: 94, left: -128 },
          { floor: 0, description: bankTerms.vaultEntrance, top: 13, left: -189 },
          { floor: 0, description: bankTerms.mainStairway, top: 237, left: -34 },
          { floor: 0, description: bankTerms.bankGarage, top: 315, left: -137 },
          { floor: 0, smaller: true, description: bankTerms.elevators, top: 170, left: -183 },
          { floor: 1, description: bankTerms.printerRoom, top: 255, left: 265 },
          { floor: 1, description: bankTerms.tellersOffice, top: -92, left: 27 },
          { floor: 1, description: bankTerms.archives, top: -56, left: 153 },
          { floor: 1, description: bankTerms.tellers, top: -70, left: -90 },
          { floor: 1, description: bankTerms.loanOffice, top: 132, left: -328 },
          { floor: 1, description: bankTerms.officeHallway, top: 123, left: -81 },
          { floor: 1, description: bankTerms.mainStairway, top: 237, left: -34 },
          { floor: 1, description: bankTerms.skylightStairwell, top: -61, left: 318 },
          { floor: 1, description: bankTerms.lobby, top: -141, left: -234 },
          { floor: 2, description: bankTerms.lobby, top: -141, left: -234 },
          { floor: 1, description: bankTerms.openArea, top: 183, left: 162 },
          { floor: 1, description: bankTerms.staffRoom, top: 145, left: 283 },
          { floor: 1, description: bankTerms.electricalRoom, top: 18, left: 441 },
          { floor: 1, description: bankTerms.adminOffice, top: 34, left: 143 },
          { floor: 1, description: bankTerms.ATMs, top: -318, left: -223 },
          { floor: 1, smaller: true, description: bankTerms.elevators, top: 170, left: -118 },
          { floor: 1, smaller: true, description: bankTerms.elevators, top: 170, left: -183 },
          { floor: 2, hardToRead: true, description: bankTerms.executiveHallway, top: -166, left: 22 },
          { floor: 2, description: bankTerms.frontDesk, top: -41, left: -138 },
          { floor: 2, hardToRead: true, description: bankTerms.executiveLounge, top: -75, left: 39 },
          { floor: 2, hardToRead: true, description: bankTerms.CEOOffice, top: -32, left: 175 },
          { floor: 2, hardToRead: true, description: bankTerms.skylightStairwell, top: -8, left: 319 },
          { floor: 2, hardToRead: true, description: bankTerms.janitorCloset, top: 22, left: 149 },
          { floor: 2, description: bankTerms.hallway, top: 127, left: -20 },
          { floor: 2, description: bankTerms.mainStairway, top: 237, left: -34 },
          { floor: 2, description: bankTerms.terrace, top: 147, left: 320 },
          { floor: 2, hardToRead: true, description: bankTerms.stockTradingRoom, top: 235, left: 117 },
          { floor: 2, hardToRead: true, description: bankTerms.conferenceRoom, top: 22, left: -32 },
          { floor: 2, smaller: true, description: bankTerms.elevators, top: 170, left: -118 }
        ]
      },
      bartlett: {
        name: mapNameTerms.bartlett,
        imgUrlPrefix: 'bartlett',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        floors: [
          { index: 1, top: -715, left: -1275, background: true, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -465, left: -451, name: floorTerms.secondFloor },
          { index: 3, top: -465, left: -451, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 1, top: -96, left: -296 },
          { floor: 1, top: -199, left: 643 },
          { floor: 2, top: 265, left: 336 },
          { floor: 2, top: -171, left: 577 }
        ],
        bombObjectives: [
          { floor: 2, top: -116, left: 577, set: 1, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 92, left: 596, set: 1, letter: objectiveTerms.bombShortB },
          { floor: 1, top: 102, left: 524, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 1, top: -199, left: 573, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 1, top: -63, left: -255, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 293, left: -255, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 148, left: -265, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 2, top: -18, left: -298, set: 4, letter: objectiveTerms.bombShortB }
        ],
        secureObjectives: [
          { floor: 1, top: -172, left: -353, otherFloor: 'up' },
          { floor: 2, top: -172, left: -353, otherFloor: 'down' },
          { floor: 1, top: 125, left: 312 },
          { floor: 2, top: 193, left: -265 },
          { floor: 2, top: -17, left: 388 }
        ],
        zoomPoints: {
          topLeft: { top: -426, left: -389 },
          bottomRight: { top: 330, left: 731 }
        },
        compassPoints: {
          top: 392, left: 699
        },
        cameras: [
          {
            floor: 2, top: 175, left: 67, id: 1, location: bartlettTerms.compassHallway,
            los: [[{top: 14, left: 86}, {top: -58, left: 79}], [{top: 16, left: 27}, {top: -38, left: 9}], [{top: 124, left: 2}, {top: 29, left: -115}], [{top: 154, left: -147}, {top: 114, left: -324}], [{top: 178, left: -147}, {top: 172, left: -324}]]
          },
          {
            floor: 2, top: -185, left: 176, id: 2, location: bartlettTerms.vistaHallway,
            los: [[{top: 15, left: 143}, {top: -52, left: 159}, {top: -199, left: 159}, {top: -199, left: 207}, {top: -193, left: 207}, {top: -151, left: 432}], [{top: -101, left: 290}, {top: -87, left: 254}]]
          },
          {
            floor: 1, top: -188, left: -106, id: 3, location: bartlettTerms.archwayHall,
            los: [[{top: -144, left: -154}, {top: -110, left: -218}], [{top: -96, left: -154}, {top: -41, left: -190}], [{top: -43, left: -11}, {top: 81, left: 72}], [{top: 18, left: 21}, {top: 111, left: 72}], [{top: -43, left: 69}, {top: 13, left: 138}]]
          },
          {
            floor: 1, top: 177, left: -124, id: 4, location: bartlettTerms.lobby,
            los: [[{top: 111, left: 22},{top: 55, left: 71}],[{top: 26, left: -141},{top: 192, left: -141},{top: 192, left: 71}]]
          },
          {
            floor: 1, top: -400, left: 356, id: 5, location: bartlettTerms.diningRoom,
            los: [[{top: -196, left: 223},{top: -119, left: 145}], [{top: -197, left: 271},{top: -147, left: 247}], [{top: -142, left: 194},{top: -81, left: 145}]]
          },
          {
            outdoor: true, top: 666, left: 457, id: 6, location: bartlettTerms.mainGate,
            los: [[{top: 518, left: 633}, {top: 724, left: 431}]]
          },
          {
            outdoor: true, top: -525, left: 551, id: 7, location: bartlettTerms.parking,
            los: [[{top: -309, left: 710},{top: -163, left: 798}],[{top: -428, left: 130},{top: -390, left: 63}]]
          }
        ],
        ceilingHatches: [
          { floor: 1, top: 233, left: -337 },
          { floor: 1, top: 56, left: -17 },
          { floor: 1, top: 168, left: 194 },
          { floor: 1, top: 64, left: 374 },
          { floor: 1, top: -17, left: 482 },
          { floor: 1, top: 95, left: 558 },
          { floor: 2, top: -174, left: 433 }
        ],
        skylights: [
          { floor: 1, top: -319, left: 272, otherFloor: 'up' },
          { floor: 2, top: -319, left: 272 },
          { floor: 3, top: -319, left: 272 }
        ],
        droneTunnels: [
          { floor: 1, top: -274, left: 137, rotate: 90, size: DRONE_MED },
          { floor: 1, top: 109, left: 704, rotate: 90, size: DRONE_MED },
          { floor: 1, top: 176, left: 140, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: -31, left: -408, rotate: 0, size: 86 },
          { floor: 1, top: -69, left: -395, rotate: 90, size: 34 },

          { floor: 2, top: 1, left: 267, rotate: 90, size: 120 }
        ],
        spawnPoints: [
          { letter: spawnTerms.a, top: 595, left: -793, description: bartlettTerms.festival },
          { letter: spawnTerms.b, top: 646, left: 320, description: bartlettTerms.mainGate.removeBreakTags() },
          { letter: spawnTerms.c, top: -650, left: -329, description: bartlettTerms.courtyard }
        ],
        roomLabels: [
          { floor: 1, top: 186, left: -261, description: bartlettTerms.readingRoom, hardToRead: true },
          { floor: 1, top: 9, left: -254, description: bartlettTerms.lowerLibrary, hardToRead: true },
          { floor: 2, top: 9, left: -254, description: bartlettTerms.upperLibrary, hardToRead: true },
          { floor: 1, top: 143, left: -5, description: bartlettTerms.lobby, hardToRead: true },
          { floor: 1, top: 93, left: 109, description: bartlettTerms.coatRoom },
          { floor: 1, top: -123, left: -1, description: bartlettTerms.archwayHall, hardToRead: true },
          { floor: 1, top: -9, left: -1, description: bartlettTerms.archwayHall, hardToRead: true },
          { floor: 1, top: -94, left: 172, description: bartlettTerms.centralHallway, hardToRead: true },
          { floor: 1, top: -160, left: 298, description: bartlettTerms.centralHallway.removeBreakTags(), hardToRead: true },
          { floor: 1, top: -53, left: 249, description: bartlettTerms.eastStairs, hardToRead: true },
          { floor: 2, top: -53, left: 256, description: bartlettTerms.eastStairs, hardToRead: true },
          { floor: 1, top: -90, left: 401, description: bartlettTerms.bathroom },
          { floor: 1, top: -264, left: 265, description: bartlettTerms.diningRoom, hardToRead: true },
          { floor: 1, top: -247, left: 583, description: bartlettTerms.kitchen, hardToRead: true },
          { floor: 1, top: -254, left: 427, description: bartlettTerms.serviceRoom, hardToRead: true },
          { floor: 1, top: -34, left: 665, description: bartlettTerms.eastCorridor },
          { floor: 1, top: -46, left: 530, description: bartlettTerms.pantry },
          { floor: 1, top: 76, left: 567, description: bartlettTerms.pianoRoom, hardToRead: true },
          { floor: 1, top: 140, left: 253, description: bartlettTerms.lounge, hardToRead: true },
          { floor: 2, top: -250, left: 532, description: bartlettTerms.roof, hardToRead: true },
          { floor: 3, top: -250, left: 532, description: bartlettTerms.roof, hardToRead: true },
          { floor: 2, top: 106, left: -358, description: bartlettTerms.westCorridor, hardToRead: true },
          { floor: 2, top: 164, left: -207, description: bartlettTerms.classroom, hardToRead: true },
          { floor: 2, top: 164, left: -11, description: bartlettTerms.compassHallway, hardToRead: true },
          { floor: 2, top: -112, left: -109, description: bartlettTerms.vistaHallway, hardToRead: true },
          { floor: 2, top: -5, left: 57, description: bartlettTerms.vistaHallway.removeBreakTags(), hardToRead: true },
          { floor: 2, top: -157, left: 339, description: bartlettTerms.vistaHallway.removeBreakTags(), hardToRead: true },
          { floor: 2, top: 75, left: 189, description: bartlettTerms.frontOffice, hardToRead: true },
          { floor: 2, top: 185, left: 344, description: bartlettTerms.mainOffice, hardToRead: true },
          { floor: 2, top: 90, left: 654, description: bartlettTerms.rowingMuseum, hardToRead: true },
          { floor: 2, top: 37, left: 389, description: bartlettTerms.modelHall, hardToRead: true },
          { floor: 2, top: -61, left: 577, description: bartlettTerms.trophyRoom, hardToRead: true },
          { floor: 3, top: 30, left: -70, description: bartlettTerms.roof, hardToRead: true },
          { floor: 3, top: 30, left: 465, description: bartlettTerms.roof, hardToRead: true },
          { outdoor: true, top: 377, left: -200, description: bartlettTerms.frontPatio, hardToRead: true },
          { outdoor: true, top: 377, left: 289, description: bartlettTerms.frontPatio, hardToRead: true },
          { outdoor: true, top: 619, left: 36, description: bartlettTerms.frontEntrance, hardToRead: true },
          { outdoor: true, top: 619, left: -448, description: bartlettTerms.festival, hardToRead: true },
          { outdoor: true, top: -70, left: -797, description: bartlettTerms.campusField, hardToRead: true },
          { outdoor: true, top: -250, left: -251, description: bartlettTerms.terrace },
          { outdoor: true, top: -310, left: 69, description: bartlettTerms.terrace },
          { outdoor: true, top: -486, left: -127, description: bartlettTerms.backAlley, hardToRead: true },
          { outdoor: true, top: -431, left: 587, description: bartlettTerms.parking, hardToRead: true },
          { floor: 1, top: -204, left: 754, description: bartlettTerms.gardenPass },
          { floor: 1, top: 73, left: 754, description: bartlettTerms.gardenPass },
          { floor: 2, top: -204, left: 764, description: bartlettTerms.gardenPass },
          { floor: 2, top: 73, left: 764, description: bartlettTerms.gardenPass },
          { outdoor: true, top: 298, left: 655, description: bartlettTerms.mainGate, hardToRead: true },
          { outdoor: true, top: 615, left: 655, description: bartlettTerms.mainGate, hardToRead: true },
          { outdoor: true, top: 704, left: 573, description: bartlettTerms.eastBalcony, hardToRead: true },
          { outdoor: true, top: 704, left: -349, description: bartlettTerms.westBalcony, hardToRead: true }
        ]
      },
      border: {
        name: mapNameTerms.border,
        imgUrlPrefix: 'border',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        floors: [
          { index: 1, top: -175, left: -345, background: true, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -175, left: -345, name: floorTerms.secondFloor },
          { index: 3, top: -175, left: -345, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 1, top: 320, left: 330 },
          { floor: 1, top: 120, left: 470 },
          { floor: 2, top: 455, left: 315 },
          { floor: 2, top: 165, left: 630 }
        ],
        bombObjectives: [
          { floor: 1, top: 405, left: 315, set: 1, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 290, left: 185, set: 1, letter: objectiveTerms.bombShortB },
          { floor: 1, top: 110, left: 450, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 70, left: 220, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 1, top: 110, left: 740, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 260, left: 705, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 70, left: 575, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 105, left: 315, set: 4, letter: objectiveTerms.bombShortB }
        ],
        secureObjectives: [
          { floor: 1, top: 265, left: 710 },
          { floor: 1, top: 115, left: 455 },
          { floor: 2, top: 65, left: 340 },
          { floor: 2, top: 185, left: 660 }
        ],
        zoomPoints: {
          topLeft: { top: -60, left: 60 },
          bottomRight: { top: 530, left: 830 }
        },
        compassPoints: {
          top: 175, left: 1095
        },
        ladders: [
          { floor: 1, top: 275, left: -375, otherFloor: 'up' },
          { floor: 2, top: 275, left: -375, otherFloor: 'down' },
          { floor: 1, top: -115, left: 385, otherFloor: 'up' },
          { floor: 2, top: -115, left: 385, otherFloor: 'down' }
        ],
        cameras: [
          {
            floor: 1, otherFloor: 'up', top: 315, left: 810, id: 1, location: borderTerms.eastStairs,
            los: [[{top: 510, left: 745}, {top: 315, left: 810}, {top: 510, left: 810}]]
          },
          {
            floor: 2, top: 315, left: 810, id: 1, location: borderTerms.eastStairs,
            los: [[{top: 355, left: 630}, {top: 310, left: 815}, {top: 490, left: 815}]]
          },
          {
            floor: 2, top: 350, left: 400 , id: 2, location: borderTerms.mainHallway,
            los: [[{top: 125, left: 410}, {top: 350, left: 400}, {top: 335, left: 780}]]
          },
          {
            floor: 1, top: 330, left: 580, id: 3, location: borderTerms.mainLobby,
            los: [[{top: 345, left: 375}, {top: 330, left: 580}, {top: 55, left: 600}]]
          },
          {
            floor: 1, top: 155, left: 275, id: 4, location: borderTerms.exitHallway,
            los: [[{top: 275, left: 280}, {top: 155, left: 275}, {top: 155, left: 20}]]
          },
          {
            outdoor: true, top: 700, left: -50, id: 5, location: borderTerms.parkingLotEntrance,
            los: [[{top: 370, left: -335}, {top: 700, left: -50}, {top: 715, left: 765}]]
          },
          {
            outdoor: true, top: -175, left: 805, id: 6, location: borderTerms.crashScene,
            los: [[{top: -175, left: 125}, {top: -175, left: 805}, {top: 2458, left: 1240}]]
          },
          {
            outdoor: true, top: -35, left: 80, id: 7, location: borderTerms.parkingLotAlley,
            los: [[{top: -175, left: 230}, {top: -60, left: 50}, {top: 205, left: -290}]]
          }
        ],
        ceilingHatches: [
          { floor: 1, top: 70, left: 515 },
          { floor: 1, top: 135, left: 685 },
          { floor: 1, top: 175, left: 325 },
          { floor: 1, top: 305, left: 350 },
          { floor: 1, top: 480, left: 350 }
        ],
        skylights: [],
        droneTunnels: [
          { floor: 1, top: 25, left: 600, rotate: 0, size: 50 },
          { floor: 1, top: 155, left: 685, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: 200, left: 560, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: 5, left: 245, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: 340, left: 125, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: 510, left: 180, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: 325, left: 790, rotate: 90, size: 60 },
          { floor: 1, top: 310, left: 790, rotate: 0, size: 35 }
        ],
        spawnPoints: [
          { letter: spawnTerms.a, top: 410, left: -520, description: borderTerms.spawnEastVehicleEntrance },
          { letter: spawnTerms.b, top: 900, left: 245, description: borderTerms.spawnValley },
          { letter: spawnTerms.c, top: 170, left: 1400, description: borderTerms.spawnWestVehicleExit }
        ],
        roomLabels: [
          { floor: 2, top: 125, left: 565, description: borderTerms.archives, hardToRead: true },
          { floor: 2, top: 60, left: 275, description: borderTerms.armoryLockers, hardToRead: true },
          { floor: 2, top: 150, left: 350, smaller: true, description: borderTerms.armoryDesk, hardToRead: true },
          { floor: 2, top: 410, left: 300, description: borderTerms.securityRoom, hardToRead: true },
          { floor: 2, top: 430, left: 490, description: borderTerms.breakRoom, hardToRead: true },
          { floor: 2, top: 330, left: 490, description: borderTerms.mainHallway, hardToRead: true },
          { floor: 2, top: 230, left: 335, description: borderTerms.mainStairs, hardToRead: true },
          { floor: 2, top: 245, left: 505, description: borderTerms.fountain },
          { floor: 2, top: 240, left: 670, description: borderTerms.offices },
          { floor: 2, top: 480, left: 665, description: borderTerms.waitingRoom },
          { floor: 2, top: 345, left: 770, description: borderTerms.eastStairs, hardToRead: true },
          { floor: 1, top: 465, left: 765, description: borderTerms.eastStairs, hardToRead: true },
          { floor: 1, top: 180, left: 210, description: borderTerms.westMain, hardToRead: true },
          { floor: 1, top: 75, left: 265, description: borderTerms.ventilationRoom, hardToRead: true },
          { floor: 1, top: 375, left: 180, description: borderTerms.supplyRoom },
          { floor: 1, top: 405, left: 175, description: borderTerms.supplyCorridor },
          { floor: 1, top: 480, left: 180, description: borderTerms.detention, hardToRead: true },
          { floor: 1, top: 295, left: 530, description: borderTerms.mainLobby, hardToRead: true },
          { floor: 1, top: 385, left: 510, description: borderTerms.passportCheck, hardToRead: true },
          { floor: 1, top: 465, left: 330, description: borderTerms.customsInspection },
          { floor: 1, top: 330, left: 310, smaller: true, description: borderTerms.customsDesk, hardToRead: true },
          { floor: 1, top: 435, left: 660, description: borderTerms.waitingRoom },
          { floor: 1, top: 225, left: 685, description: borderTerms.tellers, hardToRead: true },
          { floor: 1, top: 270, left: 315, description: borderTerms.mainStairs, hardToRead: true },
          { floor: 1, top: 135, left: 345, description: borderTerms.serverRoom, hardToRead: true },
          { floor: 1, top: 175, left: 520, description: borderTerms.workshop },
          { floor: 1, top: 75, left: 700, description: borderTerms.bathroom },
          { outdoor: true, top: 185, left: -275, description: borderTerms.westTower },
          { outdoor: true, top: 520, left: -260, description: borderTerms.pedestrianExit },
          { outdoor: true, top: 580, left: 0, description: borderTerms.parkingLotEntrance },
          { outdoor: true, top: 245, left: -100, description: borderTerms.parkingLot, hardToRead: true },
          { outdoor: true, top: -130, left: -45, description: borderTerms.westRoad },
          { outdoor: true, top: -145, left: 490, description: borderTerms.vehicleCustoms },
          { outdoor: true, top: -130, left: 700, description: borderTerms.crashScene },
          { outdoor: true, top: 10, left: 970, description: borderTerms.eastRoad },
          { outdoor: true, top: 435, left: 1035, description: borderTerms.pedestrianEntrance },
          { outdoor: true, top: 685, left: 370, description: borderTerms.pedestrianCustoms },
          { outdoor: true, top: 665, left: 740, description: borderTerms.pedestrianCustoms },
          { outdoor: true, top: 800, left: 110, description: borderTerms.valley },
          { outdoor: true, top: 800, left: 715, description: borderTerms.valley },
          { outdoor: true, top: 760, left: 760, description: borderTerms.watchTower, hardToRead: true },
          { outdoor: true, top: 295, left: 815, description: borderTerms.eastAlley },
          { outdoor: true, top: 95, left: 120, description: borderTerms.parkingLotAlley },
          { outdoor: true, top: 405, left: 100, description: borderTerms.parkingLotAlley },
          { floor: 2, top: 40, left: 660, description: borderTerms.northBalcony },
          { floor: 2, top: 75, left: 760, smaller: true, description: borderTerms.eastBalcony, hardToRead: true },
          { floor: 2, top: 240, left: 205, description: borderTerms.westBalcony },
          { floor: 2, top: 405, left: 145, smaller: true, description: borderTerms.westBalcony, hardToRead: true },
          { floor: 2, top: 550, left: 285, description: borderTerms.southBalcony },
          { floor: 2, top: 550, left: 635, description: borderTerms.southBalcony },
          { floor: 3, top: 365, left: 450, description: borderTerms.roof },
          { floor: 3, top: 55, left: 240, description: borderTerms.roof},
          { floor: 3, top: 100, left: 715, description: borderTerms.roof }
        ]
      },
      chalet: {
        name: mapNameTerms.chalet,
        imgUrlPrefix: 'chalet',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        floors: [
          { index: 0, top: -175, left: -315, background: true, name: floorTerms.basement },
          { index: 1, top: -175, left: -315, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -175, left: -315, name: floorTerms.secondFloor },
          { index: 3, top: -175, left: -315, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 0, top: 500, left: 440 },
          { floor: 1, top: 476, left: 528 },
          { floor: 2, top: 135, left: 650 },
          { floor: 2, top: 530, left: 240 }
        ],
        bombObjectives: [
          { floor: 0, top: 542, left: 423, set: 4, letter: objectiveTerms.bombShortB },
          { floor: 0, top: 391, left: 514, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 92, left: 637, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 1, top: 265, left: 541, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 490, left: 428, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 1, top: 524, left: 217, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 115, left: 640, set: 1, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 215, left: 566, set: 1, letter: objectiveTerms.bombShortA }
        ],
        secureObjectives: [
          { floor: 0, top: 305, left: 583 },
          { floor: 1, top: 438, left: 478 },
          { floor: 2, top: 220, left: 430 },
          { floor: 2, top: 535, left: 215 }
        ],
        zoomPoints: {
          topLeft: { top: -130, left: 80 },
          bottomRight: { top: 680, left: 890 }
        },
        compassPoints: {
          top: 405, left: 1155
        },
        ladders: [
          { floor: 0, top: 645, left: 405, otherFloor: 'up' },
          { floor: 1, top: 645, left: 405, otherFloor: 'down' },
          { floor: 1, top: 380, left: 135, otherFloor: 'up' },
          { floor: 2, top: 380, left: 135, otherFloor: 'down' },
          { floor: 1, top: 575, left: 605, otherFloor: 'up' },
          { floor: 2, top: 575, left: 605, otherFloor: 'down' },
          { floor: 1, top: 267, left: 361, otherFloor: 'up' },
          { floor: 2, top: 267, left: 361, otherFloor: 'down' },

          { floor: 1, top: 600, left: -108, otherFloor: 'up' },
          { floor: 2, top: 600, left: -108, otherFloor: 'down' }
        ],
        cameras: [
          {
            floor: 2, top: -83, left: 650, id: 1, location: chaletTerms.solarium,
            los: [[{top: -71, left: 500}, {top: -67, left: 465},{top: -100, left: 464}, {top: -100, left: 662},{top: 194, left: 643}]]
          },
          {
            floor: 1, otherFloor: 'up', top: 363, left: 206, id: 2, location: chaletTerms.libraryStairs,
            los: [[{top: 378, left: 370}, {top: 360, left: 290}, {top: 360, left: 200}, {top: 395, left: 200}, {top: 390, left: 280}, {top: 410, left: 320}]]
          },
          {
            floor: 2, top: 363, left: 206, id: 2, location: chaletTerms.libraryStairs,
            los: [[{top: 335, left: 511}, {top: 335, left: 200}, {top: 390, left: 200}, {top: 390, left: 511}]]
          },
          {
            floor: 1, otherFloor: 'up', top: 570, left: 580, id: 3, location: chaletTerms.fireplace,
            los: [[{top: 545, left: 440}, {top: 545, left: 460}, {top: 570, left: 580}, {top: 370, left: 580}, {top: 360, left: 480}]]
          },
          {
            floor: 2, top: 570, left: 580, id: 3, location: chaletTerms.fireplace,
            los: [[{top: 500, left: 385}, {top: 530, left: 385}, {top: 490, left: 200}, {top: 520, left: 200}, {top: 560, left: 380}, {top: 615, left: 385}, {top: 615, left: 580}, {top: 400, left: 580}, {top: 405, left: 460}]]
          },
          {
            floor: 1, top: 143, left: 424, id: 4, location: chaletTerms.westMainEntrance,
            los: [[, {top: 35, left: 420}, {top: 143, left: 424}, {top: 205, left: 470}]]
          },
          {
            floor: 0, top: 415, left: 421, id: 5, location: chaletTerms.snowmobileGarage,
            los: [[{top: 410, left: 490}, {top: 410, left: 380}, {top: 600, left: 380}, {top: 600, left: 410}]]
          },
          {
            outdoor: true, top: -83, left: 37, id: 6, location: chaletTerms.backyard,
            los: [[{top: -140, left: 870},{top: -83, left: 37},{top: 40, left: -310}]]
          },
          {
            outdoor: true, top: 160, left: 1060, id: 7, location: chaletTerms.frontYard,
            los: [[{top: -10, left: 830},{top: 160, left: 1060},{top: 390, left: 945}]]
          }
        ],
        ceilingHatches: [
          { floor: 0, top: 538, left: 557 },
          { floor: 0, top: -70, left: 631 },
          { floor: 0, top: 307, left: 629 },
          { floor: 1, top: 475, left: 217 },
          { floor: 1, top: 414, left: 359 },
          { floor: 1, top: 164, left: 636 }
        ],
        skylights: [],
        droneTunnels: [
          { floor: 0, top: 612, left: 457, rotate: 0, size: DRONE_SMALL },
          { floor: 0, top: 378, left: 488, rotate: 90, size: DRONE_SMALL },
          { floor: 0, top: -83, left: 486, rotate: 0, size: DRONE_MED },
          { floor: 1, top: 5, left: 662, rotate: 90, size: DRONE_MED },
          { floor: 1, top: 229, left: 656, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: 217, left: 477, rotate: 90, size: 45 },
          { floor: 1, top: 300, left: 400, rotate: 0, size: 60 },
          { floor: 1, top: 539, left: 200, rotate: 90, size: DRONE_SMALL }
        ],
        spawnPoints: [
          { letter: spawnTerms.a, top: -175, left: 865, description: chaletTerms.spawnCampfire },
          { letter: spawnTerms.b, top: 400, left: 1080, description: chaletTerms.spawnCliffside },
          { letter: spawnTerms.c, top: 445, left: -195, description: chaletTerms.spawnLakeside }
        ],
        roomLabels: [
          // basement
          { floor: 0, hardToRead: true, smaller: true, top: 360, left: 245, description: chaletTerms.libraryStairs },
          { floor: 0, top: 395, left: 420, hardToRead: true, description: chaletTerms.blueHallway },
          { floor: 0, top: 495, left: 485, hardToRead: true, description: chaletTerms.snowmobileGarage },
          { floor: 0, top: 595, left: 415, hardToRead: true, description: chaletTerms.fireplaceStairs },
          { floor: 0, top: 500, left: 550, hardToRead: true, description: chaletTerms.storageRoom },
          { floor: 0, top: 335, left: 535, description: chaletTerms.wineCellar },
          { floor: 0, top: 250, left: 610, description: chaletTerms.basementHallway },
          { floor: 0, top: 165, left: 740, description: chaletTerms.backyardStairs },
          { floor: 0, top: -95, left: 238, hardToRead: true, smaller: true, description: chaletTerms.westMainStairs },
          { floor: 0, top: 35, left: 540, description: chaletTerms.carGarage },
          { floor: 0, top: -35, left: 630, smaller: true, hardToRead: true, description: chaletTerms.mainGarageEntrance },

          // first floor
          { floor: 1, hardToRead: true, smaller: true, top: 360, left: 245, description: chaletTerms.libraryStairs },
          { floor: 1, top: 355, left: 340, smaller: true, description: chaletTerms.gamingRoomHallway },
          { floor: 1, top: 505, left: 275, hardToRead: true, description: chaletTerms.gamingRoom },
          { floor: 1, top: 610, left: 295, hardToRead: true, description: chaletTerms.barStock },
          { floor: 1, top: 455, left: 390, description: chaletTerms.bar },
          { floor: 1, top: 610, left: 500, hardToRead: true, description: chaletTerms.fireplaceStairs },
          { floor: 1, top: 430, left: 525, hardToRead: true, description: chaletTerms.fireplace },
          { floor: 1, top: 320, left: 280, hardToRead: true, description: chaletTerms.mudroom },
          { floor: 1, top: 290, left: 485, smaller: true, description: chaletTerms.diningHallway },
          { floor: 1, top: 240, left: 580, hardToRead: true, description: chaletTerms.diningRoom },
          { floor: 1, hardToRead: true, smaller: true, top: -65, left: 500, description: chaletTerms.trophyStairs },
          { floor: 1, top: 120, left: 470, description: chaletTerms.westMainEntrance },
          { floor: 1, top: -30, left: 555, hardToRead: true, description: chaletTerms.trophyRoom },
          { floor: 1, top: 60, left: 555, hardToRead: true, description: chaletTerms.kitchenHallway },
          { floor: 1, top: 70, left: 640, description: chaletTerms.kitchen },
          { floor: 1, top: 165, left: 740, hardToRead: true, description: chaletTerms.backyardStairs },

          // second floor
          { floor: 2, top: 610, left: 500, hardToRead: true, description: chaletTerms.fireplace },
          { floor: 2, hardToRead: true, smaller: true, top: 360, left: 245, description: chaletTerms.libraryStairs },
          { floor: 2, top: 375, left: 400, description: chaletTerms.libraryHallway },
          { floor: 2, top: 435, left: 325, smaller: true, description: chaletTerms.libraryEntrance },
          { floor: 2, top: 485, left: 265, hardToRead: true, description: chaletTerms.library },
          { floor: 2, hardToRead: true, smaller: true, top: -65, left: 500, description: chaletTerms.trophyStairs },
          { floor: 2, top: 100, left: 500, hardToRead: true, description: chaletTerms.masterBathroom },
          { floor: 2, top: 75, left: 635, hardToRead: true, description: chaletTerms.masterBedroom },
          { floor: 2, top: -20, left: 575, hardToRead: true, description: chaletTerms.solarium },
          { floor: 2, top: 190, left: 485, description: chaletTerms.pianoRoom },
          { floor: 2, top: 445, left: 450, hardToRead: true, description: chaletTerms.mezzanine },
          { floor: 2, top: 310, left: 580, hardToRead: true, description: chaletTerms.office },

          // balcony
          { floor: 2, top: 610, left: 225, hardToRead: true, smaller: true, description: chaletTerms.libraryBalcony },
          { floor: 2, top: 450, left: 620, description: chaletTerms.officeBalcony },
          { floor: 2, top: 315, left: 345, description: chaletTerms.frontYard },

          // outside
          { outdoor: true, top: -90, left: 350, description: chaletTerms.woodenTrail },
          { outdoor: true, top: -800, left: 850, description: chaletTerms.campfireWood },
          { outdoor: true, top: -150, left: 940, description: chaletTerms.campfire },
          { outdoor: true, top: 455, left: 910, description: chaletTerms.backyard },
          { outdoor: true, top: 65, left: 1105, hardToRead: true, description: chaletTerms.gazeebo },
          { outdoor: true, top: 490, left: 1085, description: chaletTerms.cliffsideStairs },
          { outdoor: true, top: 600, left: 945, description: chaletTerms.cliffsideWoods },
          { outdoor: true, top: 720, left: 1090, description: chaletTerms.cliffside },
          { outdoor: true, top: 115, left: 915, description: chaletTerms.backyard },
          { outdoor: true, top: 405, left: 730, hardToRead: true, description: chaletTerms.backyardPatio },
          { outdoor: true, top: 265, left: -290, description: chaletTerms.helipadTrail },
          { outdoor: true, top: 500, left: -40, hardToRead: true, description: chaletTerms.helipad },
          { outdoor: true, top: 450, left: 125, description: chaletTerms.frontYardPatio },
          { outdoor: true, top: 100, left: 230, description: chaletTerms.frontYard },
          { outdoor: true, top: 700, left: 400, hardToRead: true, description: chaletTerms.snowmobiles }
        ]
      },
      club: {
        name: mapNameTerms.club,
        imgUrlPrefix: 'club-house',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        floors: [
          //
          { index: 0, top: -1098, left: -2409, background: true, name: floorTerms.basement },
          { index: 1, top: -472, left: -470, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -472, left: -477, name: floorTerms.secondFloor },
          { index: 3, top: -472, left: -440, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: -13, left: -17, smaller: true  },
          { floor: 2, top: -34, left: 173, smaller: true  },
          { floor: 1, top: 94, left: -281, smaller: true  },
          { floor: 0, top: -33, left: 9, smaller: true  }
        ],
        bombObjectives: [
          { floor: 2, top: -1, left: 17, set: 1, letter: objectiveTerms.bombShortA, smaller: true },
          { floor: 2, top: -12, left: -136, set: 1, letter: objectiveTerms.bombShortB, smaller: true },
          { floor: 2, top: 6, left: 176, set: 2, letter: objectiveTerms.bombShortA, smaller: true },
          { floor: 2, top: 106, left: 187, set: 2, letter: objectiveTerms.bombShortB, smaller: true },

          { floor: 1, top: -3, left: -102, set: 3, letter: objectiveTerms.bombShortA, smaller: true },
          { floor: 1, top: -35, left: 144, set: 3, letter: objectiveTerms.bombShortB, smaller: true },
          { floor: 0, top: -61, left: 31, set: 4, letter: objectiveTerms.bombShortA, smaller: true },
          { floor: 0, top: -159, left: 47, set: 4, letter: objectiveTerms.bombShortB, smaller: true }
        ],
        secureObjectives: [
          { floor: 1, top: 201, left: 227, smaller: true  },
          { floor: 1, top: 41, left: -82, smaller: true  },
          { floor: 2, top: -1, left: 14, smaller: true  },
          { floor: 0, top: -174, left: 32, smaller: true  }
        ],
        zoomPoints: {
          topLeft: { top: -336, left: -416 },
          bottomRight: { top: 275, left: 397 }
        },
        compassPoints: {
          top: -297, left: 403
        },
        ladders: [
          // Garage
          { floor: 1, top: 247, left: 177, otherFloor: 'down' },
          { floor: 0, top: 247, left: 177, otherFloor: 'up' },
          // Construction Balcony
          { floor: 1, top: -131, left: 181, otherFloor: 'up' },
          { floor: 2, top: -131, left: 181, otherFloor: 'down' },
          // Construction Spawn
          { floor: 1, top: -475, left: 312, otherFloor: 'up' },
          { floor: 2, top: -475, left: 312, otherFloor: 'down' }
        ],
        cameras: [
          {
            floor: 2, top: -121, left: -13, id: 1, location: clubTerms.bedroomHallway,
            los: [[{top: -111, left: -114},{top: -111, left: -2},{top: -140, left: -2}]]
          },
          {
            floor: 1, top: -73, left: -70, id: 2, location: clubTerms.bar,
            los: [[{top: -83, left: -144}, {top: -83, left: -4}]]
          },
          { floor: 1, otherFloor: 'up', top: 295, left: 240, id: 3, location: clubTerms.garage },
          {
            floor: 2, top: 306, left: 256, id: 3, location: clubTerms.garage,
            los: [[{top: 317, left: 135},{top: 317, left: 270},{top: 137, left: 270}]]
          },
          {
            floor: 0, top: -114, left: -73, id: 4, location: clubTerms.basementHallway,
            los: [[{top: -17, left: -87},{top: -125, left: -87},{top: -125, left: 91}]]
          },
          {
            outdoor: true, top: 281, left: -170, id: 5, location: clubTerms.vipParking,
            los: [[{top: 400, left: -282},{top: 280, left: -171},{top: 299, left: 105}]]
          },
          {
            outdoor: true, top: -158, left: -305, id: 6, location: clubTerms.graffitiArea,
            los: [[{top: 5, left: -364},{top: -160, left: -305},{top: -332, left: -275}]]
          },
          {
            outdoor: true, top: 329, left: 409, id: 7, location: clubTerms.kennels,
            los: [[{top: 442, left: 226},{top: 351, left: 430},{top: 193, left: 511}]]
          }
        ],
        ceilingHatches: [
          { floor: 0, top: 18, left: -63 },
          { floor: 0, top: -12, left: 173 },
          { floor: 0, top: -190, left: 44 },

          { floor: 1, top: 197, left: -216 },
          { floor: 1, top: 14, left: -144 },

          { floor: 2, top: -225, left: 63 }
        ],
        skylights: [],
        droneTunnels: [
          { floor: 0, top: -457, left: -17, rotate: 210, size: DRONE_SMALL },
          { floor: 1, top: 150, left: -379, rotate: 90, size: 51 },
          { floor: 1, top: 179, left: -186, rotate: 90, size: 10 },
          { floor: 1, top: 215, left: 114, rotate: 90, size: 10 },
          { floor: 1, top: 124, left: 140, rotate: 0, size: 8 },
          { floor: 2, top: -74, left: -152, rotate: 90, size: 10 },
          { floor: 2, top: 20, left: 281, rotate: 90, size: 10 },
          { floor: 2, top: 37, left: 241, rotate: 90, size: 8 }
        ],
        spawnPoints: [
          { letter: spawnTerms.a, top: 504, left: 74, description: clubTerms.mainGate },
          { letter: spawnTerms.b, top: 88, left: -776, description: clubTerms.shippingDock },
          { letter: spawnTerms.c, top: 187, left: 648, description: clubTerms.warehouse },
          { letter: spawnTerms.d, top: -500, left: 346, description: clubTerms.constructionSite }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: 435, left: -157, description: clubTerms.mainGate, hardToRead: true },
          { outdoor: true, top: 284, left: -483, description: clubTerms.junkyard, hardToRead: true },
          { outdoor: true, top: 94, left: -483, description: clubTerms.junkyard, hardToRead: true },
          { outdoor: true, top: 329, left: -249, description: clubTerms.vipParking, hardToRead: true },
          { outdoor: true, top: 260, left: -44, description: clubTerms.parking, hardToRead: true },
          { outdoor: true, top: 265, left: 342, description: clubTerms.kennels, hardToRead: true },
          { outdoor: true, top: -31, left: 375, description: clubTerms.kennels, hardToRead: true },
          { outdoor: true, top: -72, left: -407, description: clubTerms.recreationArea, hardToRead: true },
          { floor: 1, top: -152, left: 185, description: clubTerms.trash, hardToRead: true },
          { floor: 2, top: -152, left: 185, description: clubTerms.trash, hardToRead: true },
          { floor: 3, top: -152, left: 185, description: clubTerms.trash, hardToRead: true },
          { outdoor: true, top: -186, left: -189, description: clubTerms.graffitiArea, hardToRead: true },
          { outdoor: true, top: -348, left: 33, description: clubTerms.constructionSite, hardToRead: true },

          // basement
          { floor: 0, top: 227, left: 158, description: clubTerms.oilPit, hardToRead: true },
          { floor: 0, top: 15, left: 144, description: clubTerms.utilityRoom, hardToRead: true },
          { floor: 0, top: 47, left: -67, description: clubTerms.memorialRoom, hardToRead: true },
          { floor: 0, top: -22, left: 38, description: clubTerms.church, hardToRead: true },
          { floor: 0, top: 13, left: 251, description: clubTerms.blueStairs.removeBreakTags(), hardToRead: true },
          { floor: 0, top: -101, left: 3, description: clubTerms.basementHallway, hardToRead: true },
          { floor: 0, top: -114, left: 150, description: clubTerms.arsenalRoom, hardToRead: true },
          { floor: 0, top: -170, left: -4, description: clubTerms.arsenalRoom, hardToRead: true },
          { floor: 0, top: -190, left: -92, description: clubTerms.centralStairs, hardToRead: true },
          { floor: 0, top: -328, left: 134, description: clubTerms.escapeTunnel, hardToRead: true, smaller: true },
          { floor: 0, top: -423, left: -7, description: clubTerms.container, hardToRead: true, smaller: true },

          // 1F
          { floor: 1, top: 225, left: 188, description: clubTerms.garage, hardToRead: true },
          { floor: 1, top: 218, left: -345, description: clubTerms.sideEntrance, hardToRead: true },
          { floor: 1, top: 202, left: -238, description: clubTerms.changingRoom, hardToRead: true },
          { floor: 1, top: 121, left: -275, description: clubTerms.stripClub, hardToRead: true },
          { floor: 1, top: 98, left: 86, description: clubTerms.lobby, hardToRead: true },
          { floor: 1, top: 101, left: -29, description: clubTerms.frontPorch, hardToRead: true },
          { floor: 1, top: 85, left: 173, description: clubTerms.lounge, hardToRead: true },
          { floor: 1, top: 70, left: 256, description: clubTerms.lounge, hardToRead: true },
          { floor: 1, top: 63, left: -390, description: clubTerms.junkyardEntrance, hardToRead: true, smaller: true },
          { floor: 1, top: 50, left: 338, description: clubTerms.garageStorage, hardToRead: true },
          { floor: 1, top: 38, left: -163, description: clubTerms.poolTable, hardToRead: true },
          { floor: 1, top: -4, left: -61, description: clubTerms.bar, hardToRead: true },
          { floor: 1, top: -4, left: 49, description: clubTerms.stage, hardToRead: true },
          { floor: 1, top: 30, left: 304, description: clubTerms.blueStairs, hardToRead: true, smaller: true },
          { floor: 1, top: -32, left: 188, description: clubTerms.stockRoom, hardToRead: true },
          { floor: 1, top: 0, left: 274, description: clubTerms.easternStairs, hardToRead: true, smaller: true },
          { floor: 1, top: -62, left: -216, description: clubTerms.westernHallway, hardToRead: true, smaller: true },
          { floor: 1, top: -102, left: -167, description: clubTerms.toilets, hardToRead: true },
          { floor: 1, top: -97, left: -13, description: clubTerms.centralHallway, hardToRead: true },
          { floor: 1, top: -167, left: 22, description: clubTerms.kitchen, hardToRead: true },
          { floor: 1, top: -190, left: -76, description: clubTerms.centralStairs, hardToRead: true },
          { floor: 1, top: -247, left: -10, description: clubTerms.kitchenEntrance, hardToRead: true, smaller: true },

          // 2F
          { floor: 2, top: 225, left: 188, description: clubTerms.garage, hardToRead: true },
          { floor: 2, top: 123, left: -296, description: clubTerms.westernRoof, hardToRead: true },
          { floor: 2, top: 122, left: -1, description: clubTerms.centralSubroof, hardToRead: true },
          { floor: 2, top: 95, left: 202, description: clubTerms.cctvRoom, hardToRead: true },
          { floor: 2, top: 55, left: 330, description: clubTerms.easternSubroof, hardToRead: true },
          { floor: 2, top: 26, left: -109, description: clubTerms.gym, hardToRead: true },
          { floor: 2, top: -15, left: -21, description: clubTerms.bedroom, hardToRead: true },
          { floor: 2, top: 1, left: 81, description: clubTerms.construction, hardToRead: true },
          { floor: 2, top: -29, left: 179, description: clubTerms.cashRoom, hardToRead: true },
          { floor: 2, top: -31, left: 273, description: clubTerms.easternStairs, hardToRead: true, smaller: true },
          { floor: 2, top: -79, left: -207, description: clubTerms.balcony, hardToRead: true },
          { floor: 2, top: -69, left: -72, description: clubTerms.bathroom, hardToRead: true },
          { floor: 2, top: -117, left: -74, description: clubTerms.bedroomHallway, hardToRead: true },
          { floor: 2, top: -120, left: 27, description: clubTerms.secretStash, hardToRead: true, smaller: true },
          { floor: 2, top: -196, left: -69, description: clubTerms.centralStairs, hardToRead: true },
          { floor: 2, top: -196, left: 49, description: clubTerms.logisticOffice, hardToRead: true },

          // 3F
          { floor: 3, top: 44, left: 210, description: clubTerms.easternRoof, hardToRead: true },
          { floor: 3, top: 234, left: 210, description: clubTerms.easternRoof, hardToRead: true },
          { floor: 3, top: 123, left: -296, description: clubTerms.westernRoof, hardToRead: true },
          { floor: 3, top: 122, left: -1, description: clubTerms.centralSubroof, hardToRead: true },
          { floor: 3, top: -18, left: 89, description: clubTerms.centralSubroof, hardToRead: true },
          { floor: 3, top: 55, left: 330, description: clubTerms.easternSubroof, hardToRead: true },
          { floor: 3, top: -85, left: -60, description: clubTerms.centralRoof, hardToRead: true },
          { floor: 3, top: -79, left: -207, description: clubTerms.balcony, hardToRead: true }
        ]
      },
      coastline: {
        name: mapNameTerms.coastline,
        imgUrlPrefix: 'coastline',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        floors: [
          { index: 1, top: -715, left: -1275, background: true, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -241, left: -380, name: floorTerms.secondFloor },
          { index: 3, top: -241, left: -380, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: -46, left: 53 },
          { floor: 2, top: 148, left: 229 },
          { floor: 1, top: -72, left: 80 },
          { floor: 1, top: 150, left: -95 }
        ],
        bombObjectives: [
          { floor: 2, top: 45, left: -137, set: 1, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 203, left: -139, set: 1, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 14, left: 279, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 148, left: 264, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 1, top: -63, left: 165, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 1, top: -18, left: 63, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 181, left: -153, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 1, top: -24, left: -248, set: 4, letter: objectiveTerms.bombShortB }
        ],
        secureObjectives: [
          { floor: 1, top: 181, left: -189 },
          { floor: 1, top: -18, left: 15 },
          { floor: 2, top: 72, left: 229 },
          { floor: 2, top: 203, left: -194 }
        ],
        zoomPoints: {
          topLeft: { top: -134, left: -317 },
          bottomRight: { top: 375, left: 332 }
        },
        compassPoints: {
          top: 522, left: 610
        },
        cameras: [
          {
            floor: 1, top: 95, left: -84, id: 1, location: coastlineTerms.hallway,
            los: [
              [{top: 40, left: -30}, {top: -55, left: 41}],
              [{top: 25, left: -30}, {top: -73, left: 31}],
              [{top: -92, left: -64}, {top: -33, left: -74}, {top: -33, left: -101}, {top: 108, left: -101}, {top: 108, left: -64}, {top: 98, left: -64}, {top: 67, left: 16}]
            ]
          },
          {
            floor: 1, top: 292, left: 198, id: 2, location: coastlineTerms.mainLobby,
            los: [
              [{top: 149, left: 133}, {top: 288, left: 178}],
              [{top: 66, left: 154}, {top: 248, left: 177}],
              [{top: 248, left: 246}, {top: 200, left: 287}],
              [{top: 306, left: 186}, {top: 306, left: 287}]
            ]
          },
          {
            floor: 2, top: 316, left: -194, id: 3, location: coastlineTerms.aquarium,
            los: [
              [{top: 261, left: -210}, {top: 330, left: -210}, {top: 330, left: -46}, {top: 288, left: -46}, {top: 288, left: -37}, {top: 262, left: 86}],
              [{top: 275, left: -37}, {top: 262, left: -22}]
            ]
          },
          {
            floor: 2, top: 77, left: 156, id: 4, location: coastlineTerms.hallway,
            los: [
              [{top: 105, left: -46}, {top: 105, left: 110}, {top: 97, left: 120}],
              [{top: 64, left: -27}, {top: 64, left: 119}],
              [{top: 347, left: 172}, {top: 64, left: 172}, {top: 64, left: 127}]
            ]
          },
          {
            outdoor: true, top: -195, left: 415, id: 5, location: coastlineTerms.garageRoof,
            los: [
              [{top: -114, left: 436}, {top: -211, left: 436}, {top: -211, left: -342}]
            ]
          },
          {
            outdoor: true, top: 436, left: -300, id: 6, location: coastlineTerms.ruins,
            los: [
              [{top: 485, left: 743}, {top: 454, left: -355}, {top: 276, left: -355}, {top: -115, left: -525}]
            ]
          },
          {
            outdoor: true, top: -109, left: -551, id: 7, location: coastlineTerms.ruins,
            los: [
              [{top: -279, left: -250}, {top: -164, left: -538}, {top: -124, left: -589}, {top: -18, left: -565}],
              [{top: 485, left: -219}, {top: -43, left: -510}]
            ]
          }
        ],
        ceilingHatches: [
          { floor: 1, top: 74, left: -178 },
          { floor: 1, top: 315, left: -192 },
          { floor: 1, top: 274, left: 105 },
          { floor: 1, top: 77, left: 191 },
          { floor: 2, top: -72, left: 286 }
        ],
        skylights: [],
        droneTunnels: [
          { floor: 1, top: 63, left: 316, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: 258, left: 82, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: 226, left: -53, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: 215, left: -214, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: -81, left: -40, rotate: 90, size: 24 },
          { floor: 1, top: -90, left: -48, rotate: 0, size: 30 },
          { floor: 2, top: 223, left: -65, rotate: 0, size: DRONE_SMALL },
          { floor: 2, top: -4, left: -40, rotate: 90, size: DRONE_SMALL },
          { floor: 2, top: 94, left: 176, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: -86, left: -74, rotate: 0, size: DRONE_MED, otherFloor: 'up' },
          { floor: 2, top: -86, left: -74, rotate: 0, size: DRONE_MED, otherFloor: 'upanddown' },
          { floor: 3, top: -86, left: -74, rotate: 0, size: DRONE_MED, otherFloor: 'down' },
          { floor: 1, top: 334, left: 275, rotate: 0, size: DRONE_MED, otherFloor: 'up' },
          { floor: 2, top: 334, left: 275, rotate: 0, size: DRONE_MED, otherFloor: 'upanddown' },
          { floor: 3, top: 334, left: 275, rotate: 0, size: DRONE_MED, otherFloor: 'down' },
          { floor: 2, top: 235, left: -51, rotate: 0, size: DRONE_MED, otherFloor: 'up' },
          { floor: 3, top: 235, left: -51, rotate: 0, size: DRONE_MED, otherFloor: 'down' },
          { floor: 2, top: -81, left: 214, rotate: 0, size: DRONE_MED, otherFloor: 'up' },
          { floor: 3, top: -81, left: 214, rotate: 0, size: DRONE_MED, otherFloor: 'down' }
        ],
        spawnPoints: [
          { letter: spawnTerms.a, top: 186, left: 814, description: coastlineTerms.mainEntrance.removeBreakTags() },
          { letter: spawnTerms.b, top: -522, left: -280, description: coastlineTerms.poolSide },
          { letter: spawnTerms.c, top: 497, left: -525, description: coastlineTerms.ruins }
        ],
        roomLabels: [
          { floor: 1, top: -43, left: 265, description: coastlineTerms.serviceEntrance.removeBreakTags(), hardToRead: true  },
          { floor: 1, top: -14, left: 166, description: coastlineTerms.serviceEntrance, hardToRead: true },
          { floor: 1, top: 27, left: 265, description: coastlineTerms.toilets, hardToRead: true  },
          { floor: 1, top: 141, left: 220, description: coastlineTerms.mainLobby, hardToRead: true  },
          { floor: 1, top: 333, left: 249, description: coastlineTerms.southStairs, hardToRead: true  },
          { floor: 2, top: 333, left: 249, description: coastlineTerms.southStairs, hardToRead: true  },
          { floor: 1, top: 47, left: 44, description: coastlineTerms.kitchen, hardToRead: true },
          { floor: 1, top: -51, left: 12, description: coastlineTerms.kitchen, hardToRead: true },
          { floor: 1, top: 97, left: -38, description: coastlineTerms.hallway, hardToRead: true },
          { floor: 1, top: 319, left: 87, description: coastlineTerms.securityRoom, hardToRead: true },
          { floor: 1, top: 297, left: 4, description: coastlineTerms.sunRoom, hardToRead: true },
          { floor: 1, top: 269, left: -151, description: coastlineTerms.office, hardToRead: true },
          { floor: 1, top: 147, left: -151, description: coastlineTerms.blueBar, hardToRead: true },
          { floor: 1, top: 32, left: -215, description: coastlineTerms.sunriseBar, hardToRead: true },
          { floor: 1, top: -76, left: -249, description: coastlineTerms.poolEntrance, hardToRead: true },
          { floor: 1, top: -46, left: -86, description: coastlineTerms.northStairs, hardToRead: true },
          { floor: 2, top: -42, left: -59, description: coastlineTerms.northStairs, hardToRead: true },
          { floor: 2, top: 97, left: -38, description: coastlineTerms.hallway, hardToRead: true },
          { floor: 2, top: 3, left: -161, description: coastlineTerms.hookahLounge, hardToRead: true },
          { floor: 2, top: 168, left: -121, description: coastlineTerms.billiardsRoom, hardToRead: true },
          { floor: 2, top: 295, left: 175, description: coastlineTerms.hallway, hardToRead: true },
          { floor: 2, top: 292, left: 44, description: coastlineTerms.southHallway, hardToRead: true },
          { floor: 2, top: 301, left: -121, description: coastlineTerms.aquarium, hardToRead: true },
          { floor: 2, top: -57, left: 170, description: coastlineTerms.hallOfFame, hardToRead: true },
          { floor: 2, top: -36, left: 285, description: coastlineTerms.bathroom, hardToRead: true },
          { floor: 2, top: 27, left: 212, description: coastlineTerms.penthouse, hardToRead: true },
          { floor: 2, top: 212, left: 230, description: coastlineTerms.theater, hardToRead: true },
          { floor: 2, top: 1, left: -271, description: coastlineTerms.hookahDeck, hardToRead: true },
          { floor: 2, top: 36, left: 44, description: coastlineTerms.vipLounge, hardToRead: true },
          { outdoor: true, top: 167, left: -332, description: coastlineTerms.ruins, hardToRead: true },
          { floor: 1, top: -122, left: -17, description: coastlineTerms.cantina },
          { floor: 2, top: -122, left: 237, description: coastlineTerms.djBooth, hardToRead: true },
          { floor: 2, top: -122, left: -17, description: coastlineTerms.djBooth, hardToRead: true },
          { outdoor: true, top: -310, left: 189, description: coastlineTerms.pool },
          { outdoor: true, top: -296, left: -145, description: coastlineTerms.pool },
          { outdoor: true, top: -15, left: 412, description: coastlineTerms.mainEntrance, hardToRead: true },
          { outdoor: true, top: 305, left: 412, description: coastlineTerms.mainEntrance, hardToRead: true },
          { outdoor: true, top: 201, left: 44, description: coastlineTerms.courtyard, hardToRead: true },
          { outdoor: true, top: 421, left: -121, description: coastlineTerms.terrace },
          { outdoor: true, top: -387, left: 485, description: coastlineTerms.backAlley },
          { outdoor: true, top: -575, left: 211, description: coastlineTerms.poolSide },
          { outdoor: true, top: -166, left: -465, description: coastlineTerms.walkway, hardToRead: true },
          { floor: 2, top: 370, left: -121, description: coastlineTerms.balcony, hardToRead: true },
          { outdoor: true, top: -239, left: 445, description: coastlineTerms.garageRoof, hardToRead: true },
          { outdoor: true, top: 573, left: -211, description: coastlineTerms.southPromenade },
          { outdoor: true, top: 397, left: 43, description: coastlineTerms.southPromenade },
          { floor: 3 , top: 111, left: -121, description: coastlineTerms.rooftop, hardToRead: true },
          { floor: 3 , top: 78, left: 221, description: coastlineTerms.rooftop, hardToRead: true }
        ]
      },
      consulate: {
        name: mapNameTerms.consulate,
        imgUrlPrefix: 'consulate',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        floors: [
          { index: 0, top: -715, left: -1275, background: true, name: floorTerms.basement },
          { index: 1, top: -282, left: -452, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -282, left: -452, name: floorTerms.secondFloor },
          { index: 3, top: -282, left: -452, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 1, top: 41, left: 203 },
          { floor: 2, top: 121, left: -294 },
          { floor: 2, top: 45, left: 328 },
          { floor: 0, top: -34, left: 328 }
        ],
        bombObjectives: [
          { floor: 0, top: -34, left: 292, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 75, left: 115, set: 4, letter: objectiveTerms.bombShortB },
          { floor: 0, top: 56, left: -239, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 0, top: 130, left: -29, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 153, left: -255, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 153, left: 11, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 167, left: 11, set: 1, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 121, left: -256, set: 1, letter: objectiveTerms.bombShortB }
        ],
        secureObjectives: [
          { floor: 0, top: -26, left: -183 },
          { floor: 0, top: -34, left: 364 },
          { floor: 1, top: -6, left: 326 },
          { floor: 2, top: 0, left: 305 }
        ],
        zoomPoints: {
          topLeft: { top: -196, left: -354 },
          bottomRight: { top: 299, left: 455 }
        },
        compassPoints: {
          top: 314, left: 422
        },
        cameras: [
          {
            floor: 2, top: 26, left: -220, id: 1, location: consulateTerms.consulFrontDesk,
            los: [
              [{top: 85, left: -99}, {top: 85, left: -236}, {top: 2, left: -236}, {top: -31, left: -203}, {top: -31, left: -99}],
              [{top: 11, left: -93}, {top: -5, left: -17}],
              [{top: 44, left: -93}, {top: 60, left: -17}]
            ]
          },
          { floor: 2, top: -168, left: 11, id: 2, location: consulateTerms.mainStairs,
            los: [[
              {top: -108, left: -63}, {top: -137, left: -58}, {top: -168, left: -37}, {top: -185, left: -6},
              {top: -185, left: 28}, {top: -168, left: 59}, {top: -137, left: 80}, {top: -106, left: 85}
            ]]
          },
          { floor: 1, otherFloor: 'up', top: -168, left: 11, id: 2, location: consulateTerms.mainStairs },
          {
            floor: 1, top: -78, left: 374, id: 3, location: consulateTerms.visaOffice,
            los: [[{top: -52, left: 92}, {top: -61, left: 234}, {top: -97, left: 234}, {top: -97, left: 355}], [{top: -20, left: 391}, {top: 113, left: 418}]]
          },
          {
            floor: 1, top: 243, left: 11, id: 4, location: consulateTerms.frontDoor,
            los: [[{top: 165, left: 122}, {top: 217, left: 48}, {top: 258, left: 48}, {top: 258, left: 28}, {top: 279, left: 23}, {top: 279, left: -1}, {top: 258, left: -8}, {top: 258, left: -27}, {top: 215, left: -27}, {top: 215, left: -61}, {top: 168, left: -61}, {top: 96, left: -135}]]
          },
          {
            floor: 0, top: -79, left: 40, id: 5, location: consulateTerms.lockerHallway,
            los: [[{top: -54, left: -22}, {top: -92, left: 25}, {top: -92, left: 49}, {top: -117, left: 83}], [{top: -43, left: 87}, {top: 1, left: 133}]]
          },
          {
            floor: 0, top: -35, left: -150, id: 6, location: consulateTerms.garage,
            los: [[{top: -93, left: -135}, {top: -41, left: -135}, {top: -41, left: -100}, {top: 40, left: -100}]]
          },
          {
            outdoor: true, top: 498, left: -50, id: 7, location: consulateTerms.frontAlley,
            los: [[{top: 503, left: -435}, {top: 549, left: -52}, {top: 506, left: 464}]]
          },
          {
            outdoor: true, top: -32, left: -537, id: 8, location: consulateTerms.garageWay,
            los: [[{top: -48, left: -803}, {top: -94, left: -560}, {top: -32, left: -350}]]
          }
        ],
        ceilingHatches: [
          { floor: 0, top: 20, left: -172 },
          { floor: 0, top: 179, left: 108 },
          { floor: 0, top: -78, left: 150 },
          { floor: 0, top: 177, left: 316 },
          { floor: 0, top: -79, left: 374 },
          { floor: 0, top: 94, left: 2 },
          { floor: 1, top: 28, left: -320 },
          { floor: 1, top: 100, left: -37 },
          { floor: 1, top: 28, left: 261 }
        ],
        skylights: [
          { floor: 1, otherFloor: 'up', top: -102, left: 10 },
          { floor: 1, otherFloor: 'up', top: -24, left: -303 },
          { floor: 2, top: -24, left: -303 },
          { floor: 2, top: -102, left: 10 },
          { floor: 3, otherFloor: 'down', top: -24, left: -303 },
          { floor: 3, otherFloor: 'down', top: -102, left: 10 }
        ],
        droneTunnels: [
          { floor: 0, top: 26, left: -356, rotate: 90, size: DRONE_MED },
          { floor: 0, top: 103, left: 87, rotate: 90, size: DRONE_SMALL },
          { floor: 0, top: 200, left: 138, rotate: 0, size: DRONE_MED },
          { floor: 1, top: -1, left: -142, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: 186, left: 291, rotate: 90, size: DRONE_SMALL },
          { floor: 2, top: 67, left: 148, rotate: 90, size: DRONE_SMALL }
        ],
        spawnPoints: [
          { letter: spawnTerms.a, top: 412, left: 622, description: consulateTerms.spawnRiotBarricade },
          { letter: spawnTerms.b, top: 634, left: -329, description: consulateTerms.spawnPoliceLine },
          { letter: spawnTerms.c, top: -509, left: -664, description: consulateTerms.spawnGasStation },
          { letter: spawnTerms.d, top: -322, left: 745, description: consulateTerms.spawnSideEntrance }
        ],
        roomLabels: [
          { floor: 0, top: -81, left: -305, description: consulateTerms.exitStairs },
          { floor: 0, top: 129, left: -261, description: consulateTerms.garage },
          { floor: 0, top: -62, left: -67, description: consulateTerms.basementCorridor },
          { floor: 0, top: -11, left: -40, description: consulateTerms.securityRoom },
          { floor: 0, top: 94, left: -84, description: consulateTerms.cafeteria },
          { floor: 0, top: -150, left: 11, description: consulateTerms.mainStairs },
          { floor: 0, top: -9, left: 57, description: consulateTerms.lockerHallway },
          { floor: 0, top: 144, left: 139, smaller: true, description: consulateTerms.serviceStairs },
          { floor: 0, top: -68, left: 113, smaller: true, description: consulateTerms.electricRoom },
          { floor: 0, top: 98, left: 139, description: consulateTerms.storageRoom },
          { floor: 0, top: -24, left: 245, description: consulateTerms.archives },
          { floor: 0, top: 180, left: 245, description: consulateTerms.archivesCorridor },
          { floor: 1, top: -59, left: -237, description: consulateTerms.exitStairs },
          { floor: 1, top: 105, left: -276, description: consulateTerms.pressRoom },
          { floor: 1, top: -61, left: -133, smaller: true, description: consulateTerms.westCorridor },
          { floor: 1, top: -13, left: -133, smaller: true, description: consulateTerms.westCorridor },
          { floor: 1, top: 49, left: -105, description: consulateTerms.publicBathroom },
          { floor: 1, top: 167, left: -139, description: consulateTerms.antechamber },
          { floor: 1, top: 44, left: 9, description: consulateTerms.lobby },
          { floor: 1, top: -60, left: 192, description: consulateTerms.eastCorridor, hardToRead: true },
          { floor: 1, top: 52, left: 138, description: consulateTerms.tellers, hardToRead: true },
          { floor: 1, top: 144, left: 139, smaller: true, description: consulateTerms.serviceStairs },
          { floor: 1, top: 184, left: 184, smaller: true, description: consulateTerms.serviceStairs },
          { floor: 1, top: -9, left: 270, description: consulateTerms.visaOffice, hardToRead: true },
          { floor: 1, top: 112, left: 352, description: consulateTerms.visaOffice, hardToRead: true },
          { floor: 1, top: -50, left: 10, description: consulateTerms.mainStairs },
          { floor: 1, top: 160, left: 430, description: consulateTerms.visaEntrance },
          { floor: 1, top: 298, left: 10, description: consulateTerms.frontDoor },
          { floor: 2, top: 300, left: 10, description: consulateTerms.balcony },
          { floor: 3, top: 300, left: 10, description: consulateTerms.balcony },
          { floor: 2, top: 184, left: 184, smaller: true, description: consulateTerms.serviceStairs },
          { floor: 2, top: -48, left: 161, description: consulateTerms.copyRoom },
          { floor: 2, top: 39, left: -275, hardToRead: true, description: consulateTerms.cabinet },
          { floor: 2, top: -48, left: 279, hardToRead: true, description: consulateTerms.administrationOffice },
          { floor: 2, top: 112, left: 279, hardToRead: true, description: consulateTerms.administrationOffice },
          { floor: 2, top: -50, left: 10, description: consulateTerms.mainStairs },
          { floor: 2, top: 29, left: 182, description: consulateTerms.breakRoom },
          { floor: 2, top: 118, left: 148, description: consulateTerms.frontOffice },
          { floor: 2, top: 106, left: 33, hardToRead: true, description: consulateTerms.meetingRoom },
          { floor: 2, top: 28, left: 11, description: consulateTerms.hallway },
          { floor: 2, top: 27, left: -125, description: consulateTerms.consulFrontDesk },
          { floor: 2, top: -59, left: -149, description: consulateTerms.privateBathroom },
          { floor: 2, top: -59, left: -237, description: consulateTerms.exitStairs },
          { floor: 2, top: 123, left: -113, hardToRead: true, description: consulateTerms.waitingRoom },
          { floor: 2, top: 123, left: -200, hardToRead: true, description: consulateTerms.consulateOffice },
          { outdoor: true, top: 72, left: -602, description: consulateTerms.garageWay },
          { outdoor: true, top: -323, left: -267, description: consulateTerms.courtyard },
          { outdoor: true, top: -323, left: 256, description: consulateTerms.courtyard },
          { outdoor: true, top: -648, left: -93, description: consulateTerms.backCourtyard },
          { outdoor: true, top: -323, left: 577, description: consulateTerms.sideEntrance },
          { outdoor: true, top: -142, left: 451, description: consulateTerms.dumpster },
          { outdoor: true, top: 23, left: 592, description: consulateTerms.parking },
          { outdoor: true, top: 272, left: 592, description: consulateTerms.parking },
          { outdoor: true, top: -137, left: 227, description: consulateTerms.gardens },
          { outdoor: true, top: -137, left: -201, description: consulateTerms.gardens },
          { outdoor: true, top: 358, left: -522, description: consulateTerms.fountain },
          { outdoor: true, hardToRead: true, smaller: true, top: -80, left: -377, description: consulateTerms.emergencyExit },
          { outdoor: true, top: 66, left: -399, description: consulateTerms.garageRoof },
          { outdoor: true, top: -127, left: -660, description: consulateTerms.memorialGarden },
          { outdoor: true, top: 622, left: -85, description: consulateTerms.policeLine },
          { outdoor: true, top: 622, left: 358, description: consulateTerms.riotBarracade },
          { outdoor: true, top: 438, left: -219, description: consulateTerms.westFrontYard },
          { outdoor: true, top: 438, left: 224, description: consulateTerms.eastFrontYard },
          { outdoor: true, top: 438, left: 9, description: consulateTerms.frontAlley },
          { floor: 3, top: 42, left: -166, description: consulateTerms.buildingRoof },
          { floor: 3, top: 42, left: 177, description: consulateTerms.buildingRoof }
        ]
      },
      favela: {
        name: mapNameTerms.favela,
        imgUrlPrefix: 'favela',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        floors: [
          { index: 0, top: -715, left: -1275, background: true, dontSelect: true, png: true },
          { index: 1, top: -715, left: -1275, name: floorTerms.firstFloor, default: true, png: true },
          { index: 2, top: -715, left: -1275, name: floorTerms.secondFloor, png: true },
          { index: 3, top: -715, left: -1275, name: floorTerms.thirdFloor, png: true },
          { index: 4, top: -715, left: -1275, name: floorTerms.roof, png: true }
        ],
        hostageObjectives: [
          { floor: 2, top: 160, left: 320 },
          { floor: 2, top: 315, left: 385 },
          { floor: 1, top: 170, left: 355 },
          { floor: 1, top: 300, left: 350 }
        ],
        bombObjectives: [
          { floor: 2, top: 140, left: 405, set: 1, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 60, left: 435, set: 1, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 305, left: 375, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 180, left: 405, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 1, top: 340, left: 390, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 260, left: 400, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 1, top: 155, left: 240, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 15, left: 335, set: 4, letter: objectiveTerms.bombShortB }
        ],
        secureObjectives: [
          { floor: 2, top: 15, left: 340 },
          { floor: 2, top: 105, left: 440 },
          { floor: 1, top: 155, left: 365 },
          { floor: 1, top: 285, left: 350 }
        ],
        zoomPoints: {
          topLeft: { top: -130, left: -105 },
          bottomRight: { top: 425, left: 725 }
        },
        compassPoints: {
          top: 610, left: 325
        },
        ladders: [
          { outdoor: true, top: 75, left: 580 },
          { floor: 1, top: 270, left: 705, otherFloor: 'up' },
          { floor: 2, top: 270, left: 705, otherFloor: 'down' },
          { floor: 2, top: -195, left: 150, otherFloor: 'up' },
          { floor: 4, top: -195, left: 150, otherFloor: 'down' }
        ],
        cameras: [
          {
            outdoor: true, top: -35, left: 15, id: 1, location: favelaTerms.footballField,
            los: [[{top: -105, left: 300 }, {top: -95, left: 120}, {top: -35, left: 15}, {top: 210, left: 25}]]
          },
          {
            floor: 3, top: 90, left: 305, id: 2, location: favelaTerms.roof,
            los: [[{top: 400, left: 285}, {top: 90, left: 305}, {top: 130, left: 500}]]
          },
          {
            floor: 4, top: 90, left: 305, id: 2, location: favelaTerms.roof, otherFloor: 'down'
          },
          {
            outdoor: true, top: 510, left: 555, id: 3, location: favelaTerms.street,
            los: [[{top: 625, left: 120}, {top: 510, left: 555}, {top: 365, left: 925}]]
          },
          {
            floor: 3, top: 20, left: 540, id: 4, location: favelaTerms.trashChuteStairs,
            los: [[{top: 90, left: 470}, {top: 20, left: 540}], [{top: -45, left: 600}]]
          },
          {
            floor: 2, top: -90, left: 480, id: 5, location: favelaTerms.trashChuteStairs,
            los: [[{top: -65, left: 580}, {top: -95, left: 580}, {top: -95, left: 480}, {top: 160, left: 490}]]
          },
          {
            floor: 2, top: 405, left: 280, id: 6, location: favelaTerms.mezzanineStairs, otherFloor: 'up',
            los: [[{top: 290, left: 190}, {top: 405, left: 280}, {top: 235, left: 270}]]
          },
          {
            floor: 2, top: 405, left: 280, id: 6, location: favelaTerms.mezzanineStairs,
            los: [[{top: 45, left: 210}, {top: 240, left: 245}, {top: 405, left: 195}, {top: 405, left: 280}, {top: 240, left: 280}]]
          },
          {
            floor: 1, top: -90, left: 465, id: 7, location: favelaTerms.trashChuteStairs,
            los: [[{top: -60, left: 565}, {top: -90, left: 565}, {top: -90, left: 410}, {top: -45, left: 405}], [{top: 220, left: 480}, {top: -90, left: 465}, {top: 185, left: 500}]]
          }
        ],
        ceilingHatches: [
          { floor: 1, top: 60, left: 200 },
          { floor: 1, top: 350, left: 495 }
        ],
        skylights: [],
        droneTunnels: [
          { floor: 1, top: 290, left: 130, rotate: 0, size: 90 },
          { floor: 1, top: 340, left: 180, rotate: 90, size: 80 },
          { floor: 1, top: 150, left: 220, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: 85, left: 340, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: 160, left: 470, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: -40, left: 190, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: -70, left: 570, rotate: 90, size: 20 },
          { floor: 1, top: -45, left: 560, rotate: 0, size: 50 },
          { floor: 2, top: 215, left: 270, rotate: 90, size: DRONE_SMALL },
          { floor: 2, top: 200, left: 510, rotate: 0, size: 60 },
          { floor: 2, top: 230, left: 525, rotate: 90, size: 30 },
          { floor: 2, top: 295, left: 485, rotate: 90, size: DRONE_SMALL },
          { floor: 2, top: 10, left: 590, rotate: 90, size: DRONE_SMALL },
          { floor: 2, top: -60, left: 470, rotate: 90, size: DRONE_SMALL },
          { floor: 2, top: 35, left: 245, rotate: 0, size: DRONE_SMALL }
        ],
        spawnPoints: [
          { letter: spawnTerms.a, top: 40, left: 870, description: favelaTerms.rooftops },
          { letter: spawnTerms.b, top: 575, left: 5, description: favelaTerms.market },
          { letter: spawnTerms.c, top: -345, left: 145, description: favelaTerms.schoolAlley }
        ],
        roomLabels: [
          // 1F
          { floor: 1, top: -15, left: 210, description: favelaTerms.greenBathroom, smaller: true, hardToRead: true },
          { floor: 1, top: 70, left: 290, description: favelaTerms.greenApartment, hardToRead: true },
          { floor: 1, top: 55, left: 405, description: favelaTerms.greenFoosball, hardToRead: true },
          { floor: 1, top: -65, left: 445, description: favelaTerms.trashChuteStairs, hardToRead: true },
          { floor: 1, top: 5, left: 510, description: favelaTerms.trashChuteStairs, hardToRead: true },
          { floor: 1, top: 125, left: 390, description: favelaTerms.blueApartment, hardToRead: true },
          { floor: 1, top: 200, left: 420, description: favelaTerms.blueKitchen, hardToRead: true, smaller: true },
          { floor: 1, top: 125, left: 265, description: favelaTerms.blueBedroom, hardToRead: true },
          { floor: 1, top: 165, left: 490, description: favelaTerms.laundryHall, hardToRead: true, smaller: true },
          { floor: 1, top: 315, left: 245, description: favelaTerms.mezzanineStairs, hardToRead: true, smaller: true },
          { floor: 1, top: 155, left: 200, description: favelaTerms.footballHall, hardToRead: true, smaller: true },
          { floor: 1, top: 335, left: 330, description: favelaTerms.pinkApartment, hardToRead: true },
          { floor: 1, top: 275, left: 450, description: favelaTerms.pinkKitchen, hardToRead: true },
          { floor: 1, top: 270, left: 545, description: favelaTerms.pinkSolarium, hardToRead: true, smaller: true },

          // 2F
          { floor: 2, top: 0, left: 530, description: favelaTerms.trashChuteStairs, hardToRead: true },
          { floor: 2, top: 160, left: 455, description: favelaTerms.coinFarm, hardToRead: true },
          { floor: 2, top: 20, left: 385, description: favelaTerms.storage },
          { floor: 2, top: 10, left: 290, description: favelaTerms.armory, smaller: true },
          { floor: 2, top: 210, left: 225, description: favelaTerms.redCorridor },
          { floor: 2, top: 110, left: 205, description: favelaTerms.redStairs, smaller: true },
          { floor: 2, top: 275, left: 235, description: favelaTerms.mezzanineStairs, hardToRead: true },
          { floor: 2, top: 280, left: 425, description: favelaTerms.bunks, hardToRead: true },
          { floor: 2, top: 365, left: 460, description: favelaTerms.office, smaller: true, hardToRead: true },
          { floor: 2, top: 120, left: 300, description: favelaTerms.hackerDen, hardToRead: true },

          // 3F
          { floor: 3, top: -55, left: 475, description: favelaTerms.electrical, hardToRead: true },
          { floor: 3, top: 10, left: 505, description: favelaTerms.trashChuteStairs, hardToRead: true },
          { floor: 3, top: 100, left: 210, description: favelaTerms.redStairs, hardToRead: true },
          { floor: 3, top: 35, left: 360, description: favelaTerms.roof, hardToRead: true },
          { floor: 3, top: 220, left: 390, description: favelaTerms.roof, hardToRead: true },
          { floor: 3, top: 370, left: 235, description: favelaTerms.roof, hardToRead: true },

          // 4F
          { floor: 4, top: 35, left: 360, description: favelaTerms.roof, hardToRead: true },
          { floor: 4, top: 220, left: 390, description: favelaTerms.roof, hardToRead: true },
          { floor: 4, top: 370, left: 235, description: favelaTerms.roof, hardToRead: true },

          // outside
          { outdoor: true, top: -115, left: 415, description: favelaTerms.backAlley },
          { outdoor: true, top: -330, left: 355, description: favelaTerms.backAlley },
          { outdoor: true, top: -255, left: 155, description: favelaTerms.schoolyard },
          { outdoor: true, top: 95, left: 90, description: favelaTerms.footballField },
          { outdoor: true, top: 610, left: 125, description: favelaTerms.street },
          { outdoor: true, top: 465, left: 390, description: favelaTerms.street },
          { outdoor: true, top: 380, left: 720, description: favelaTerms.street, hardToRead: true },
          { outdoor: true, top: 235, left: 720, description: favelaTerms.rooftops, veryHardToRead: true },
          { outdoor: true, top: -40, left: 850, description: favelaTerms.rooftops, hardToRead: true },
          { outdoor: true, top: 130, left: 590, description: favelaTerms.courtyard },
          { outdoor: true, top: 355, left: -30, description: favelaTerms.marketAlley },
          { outdoor: true, top: -200, left: 355, description: favelaTerms.schoolRoof, hardToRead: true },
          { outdoor: true, top: -150, left: 185, description: favelaTerms.schoolRoof, hardToRead: true },
          { floor: 3, top: 400, left: 105, description: favelaTerms.marketRoof, hardToRead: true },
          { floor: 3, top: 455, left: 90, description: favelaTerms.marketRoof, hardToRead: true },
          { floor: 2, top: 325, left: 570, description: favelaTerms.solariumRoof, hardToRead: true },
          { floor: 3, top: 325, left: 570, description: favelaTerms.solariumRoof, hardToRead: true },
          { floor: 4, top: 325, left: 570, description: favelaTerms.solariumRoof, hardToRead: true },
          { outdoor: true, top: 440, left: 215, description: favelaTerms.tunnel },
          { outdoor: true, top: 270, left: 155, description: favelaTerms.tunnel },
          { floor: 2, top: -10, left: 225, description: favelaTerms.armoryBalcony },
          { floor: 2, top: -60, left: 365, description: favelaTerms.storageBalcony }
        ]
      },
      fortress: {
        name: mapNameTerms.fortress,
        imgUrlPrefix: 'fortress',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        floors: [
          { index: 0, top: -1678, left: -3250, background: true, dontSelect: true },
          // top pixel 1315, left pixel 2894
          { index: 1, top: 1315 - 1678, left: 2894 - 3250, name: floorTerms.firstFloor, default: true },
          // top pixel 1315, left pixel 2781
          { index: 2, top: 1315 - 1678, left: 2781 - 3250, name: floorTerms.secondFloor },
          // top pixel 1310, left pixel 2885
          { index: 3, top: 1310 - 1678, left: 2885 - 3250, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: -36, left: -25 },
          { floor: 2, top: 204, left: 215 },
          { floor: 1, top: 37, left: 63 },
          { floor: 1, top: 141, left: -202 }
        ],
        bombObjectives: [
          { floor: 2, top: -161, left: -178, set: 1, letter: objectiveTerms.bombShortB },
          { floor: 2, top: -178, left: 1, set: 1, letter: objectiveTerms.bombShortA },
          { floor: 2, top: -4, left: 144, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 258, left: 13, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 108, left: 196, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 1, top: 37, left: 93, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: -64, left: -268, set: 4, letter: objectiveTerms.bombShortB },
          { floor: 1, top: 141, left: -232, set: 4, letter: objectiveTerms.bombShortA }
        ],
        secureObjectives: [
          { floor: 2, top: -151, left: -148 },
          { floor: 2, top: 142, left: 54 },
          { floor: 1, top: 108, left: 166 },
          { floor: 1, top: -157, left: -10 }
        ],
        zoomPoints: {
          topLeft: { top: -344, left: -388 },
          bottomRight: { top: 436, left: 522 }
        },
        compassPoints: {},
        ladders: [
          { floor: 1, top: -238, left: 279, otherFloor: 'up' },
          { floor: 2, top: -238, left: 279, otherFloor: 'down' }
        ],
        cameras: [
          {
            floor: 2, top: -278, left: -267, id: 1, location: fortressTerms.towerStairs,
            los: [
              [{ top: -273, left: -194 }, { top: -260, left: -54 }],
              [{ top: -238, left: -249 }, { top: -165, left: -203 }]// 511, 584
            ]
          },
          {
            floor: 2, top: 46, left: -57, id: 2, location: fortressTerms.centralStairsHall,
            los: [
              [{ top: 34, left: -201 }, { top: 36, left: -154 }],
              [{ top: 38, left: 63 }, { top: 35, left: 96 }],
              [{ top: 142, left: -41 }, { top: 167, left: -33 }],
              [{ top: 177, left: -41 }, { top: 277, left: -29 }]
            ]
          },
          {
            floor: 2, top: 313, left: 330, id: 3, location: fortressTerms.oldTower,
            los: [
              [{ top: 287, left: 153 }, { top: 293, left: 153 }, { top: 309, left: 285 }, { top: 320, left: 285 }],
              [{ top: 322, left: 342 }, { top: 221, left: 402 }]
            ]
          },
          {
            floor: 1, top: -234, left: -176, id: 4, location: fortressTerms.lobby,
            los: [
              [{ top: -291, left: -194}, { top: -287, left: -220 }, { top: -239, left: -220}],
              [{ top: -191, left: -154 }, { top: -120, left: -112 }],
              [{ top: -196, left: -95 }, { top: -190, left: -64 }],
              [{ top: -227, left: -62 }, { top: -215, left: 81 }]
            ]
          },
          {
            floor: 1, top: 224, left: -40, id: 5, location: fortressTerms.hammamHallway,
            los: [
              [{ top: -4, left: -81 }, { top: -26, left: -84 }],
              [{ top: 244, left: -78 }, { top: 255, left: -76 }, { top: 255, left: -57 }, { top: 241, left: -53 }],
              [{ top: 233, left: 108 }, { top: 251, left: 262 }],
              [{ top: 203, left: 228 }, { top: 200, left: 293 }]
            ]
          },
          {
            outdoor: true, top: -234, left: -375, id: 6, location: fortressTerms.cannonOverlook,
            los: [[{ top: 0, left: -470 }, { top: -600, left: -320 }]]
          },
          {
            outdoor: true, top: 202, left: 415, id: 7, location: fortressTerms.courtyardPath,
            los: []
          },
          {
            floor: 3, top: 315, left: 123, id: 8, location: fortressTerms.oldRoof,
            los: [[
              { top: 328, left: -450 }, { top: 328, left: 0 }, { top: 350, left: 10 }, { top: 350, left: 120 },
              { top: 328, left: 130 }, { top: 500, left: 525 }
            ]]
          }
        ],
        ceilingHatches: [
          { floor: 2, top: 358, left: 89 },
          { floor: 1, top: 297, left: 322 },
          { floor: 1, top: 37, left: 56 },
          { floor: 1, top: -10, left: -63 }
        ],
        skylights: [
          { floor: 1, otherFloor: 'up', top: -113, left: 186 },
          { floor: 2, top: -113, left: 186 },
          { floor: 3, otherFloor: 'down', top: -113, left: 186 }
        ],
        droneTunnels: [
          // 1F
          // external walls, starting south west going ccw
          { floor: 1, top: 298, left: -98, rotate: 0, size: 23 },
          { floor: 1, top: 259, left: 106, rotate: 90, size: 23 },
          { floor: 1, top: 307, left: 263, rotate: 90, size: 23 },
          { floor: 1, top: -56, left: 259, rotate: 90, size: 23 },
          { floor: 1, top: -268, left: 287, rotate: 0, size: 23 },
          { floor: 1, top: -316, left: -13, rotate: 0, size: 51 },
          { floor: 1, top: -251, left: -283, rotate: 90, size: 40 },
          { floor: 1, top: -258, left: -260, rotate: 45, size: 23 },
          // internal walls, starting south, going north
          { floor: 1, top: 223, left: -109, rotate: 135, size: 10 },
          { floor: 1, top: 223, left: -93, rotate: 90, size: 29 },
          { floor: 1, top: 147, left: 22, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: -16, left: 61, rotate: 0, size: 44 },
          { floor: 1, top: -152, left: -97, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: -199, left: -194, rotate: 90, size: DRONE_SMALL },
          // 2F
          // external walls
          { floor: 2, top: 261, left: -83, rotate: 90, size: 23 },
          { floor: 2, top: -50, left: 280, rotate: 90, size: 23 },
          // internal walls
          { floor: 2, top: 282, left: 132, rotate: 0, size: DRONE_SMALL },
          { floor: 2, top: 185, left: 118, rotate: 90, size: DRONE_SMALL },
          { floor: 2, top: 74, left: 46, rotate: 0, size: DRONE_SMALL },
          { floor: 2, top: 32, left: -28, rotate: 0, size: DRONE_SMALL },
          { floor: 2, top: -117, left: 58, rotate: 90, size: DRONE_SMALL },
          { floor: 2, top: -235, left: -176, rotate: 0, size: DRONE_SMALL }
        ],
        spawnPoints: [
          { letter: spawnTerms.a, top: -690, left: -370, description: fortressTerms.mainGate },
          { letter: spawnTerms.b, top: -690, left: 170, description: fortressTerms.parking },
          { letter: spawnTerms.c, top: 670, left: 15, description: fortressTerms.garden },
          { letter: spawnTerms.d, top: 580, left: 415, description: fortressTerms.stable }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: 372, left: -260, description: fortressTerms.gardenPath, hardToRead: true },
          { floor: 1, top: 345, left: 0, description: fortressTerms.gardenPath, hardToRead: true },
          { outdoor: true, top: 400, left: 180, description: fortressTerms.gardenPath, hardToRead: true },
          { outdoor: true, top: 400, left: 370, description: fortressTerms.stablePath, veryHardToRead: true },
          { outdoor: true, top: 201, left: 509, description: fortressTerms.cliffside, veryHardToRead: true },
          { outdoor: true, top: -9, left: 499, description: fortressTerms.cliffside, veryHardToRead: true },
          { outdoor: true, top: -239, left: 419, description: fortressTerms.cliffside, veryHardToRead: true },
          { outdoor: true, top: -499, left: 380, description: fortressTerms.cliffside, veryHardToRead: true },
          { outdoor: true, top: 100, left: 410, description: fortressTerms.courtyardPath, hardToRead: true },
          { outdoor: true, top: -120, left: 350, description: fortressTerms.courtyardPath, hardToRead: true },
          { outdoor: true, top: 219, left: -401, description: fortressTerms.cannonOverlook, veryHardToRead: true },
          { outdoor: true, top: -19, left: -401, description: fortressTerms.cannonOverlook, veryHardToRead: true },
          { outdoor: true, top: -290, left: -341, description: fortressTerms.cannonOverlook, veryHardToRead: true },
          { outdoor: true, top: -350, left: 170, description: fortressTerms.unloadingZone, veryHardToRead: true },
          { outdoor: true, top: -403, left: -140, description: fortressTerms.frontEntrance, veryHardToRead: true },
          // 1F
          { floor: 1, top: 277, left: 325, description: fortressTerms.laundryRoom, hardToRead: true },
          { floor: 1, top: 156, left: -140, description: fortressTerms.hammam, veryHardToRead: true },
          { floor: 1, top: 255, left: -243, description: fortressTerms.hammam, veryHardToRead: true },
          { floor: 1, top: 280, left: -134, description: fortressTerms.showers, veryHardToRead: true },
          { floor: 1, top: 198, left: -45, description: fortressTerms.hammamHallway, hardToRead: true },
          { floor: 1, top: 246, left: 183, description: fortressTerms.hammamHallway.removeBreakTags(), hardToRead: true },
          { floor: 1, top: 202, left: 294, description: fortressTerms.oldTowerStairs, veryHardToRead: true },
          { floor: 1, top: 154, left: 120, description: fortressTerms.cafeteria, hardToRead: true },
          { floor: 1, top: 125, left: -13, description: fortressTerms.centralStairs, veryHardToRead: true },
          { floor: 1, top: 70, left: 279, description: fortressTerms.infirmary, veryHardToRead: true },
          { floor: 1, top: 39, left: 2, description: fortressTerms.kitchen, veryHardToRead: true },
          { floor: 1, top: 44, left: -180, description: fortressTerms.changingRoom },
          { floor: 1, top: -5, left: -100, description: fortressTerms.mainHallway, veryHardToRead: true },
          { floor: 1, top: 12, left: 170, description: fortressTerms.waitingRoom, hardToRead: true },
          { floor: 1, top: -35, left: -207, description: fortressTerms.sittingRoom, hardToRead: true },
          { floor: 1, top: -60, left: -35, description: fortressTerms.diningRoom, hardToRead: true },
          { floor: 1, top: -103, left: 143, description: fortressTerms.courtyard, hardToRead: true },
          { floor: 1, top: -170, left: -239, description: fortressTerms.musicRoom, hardToRead: true },
          { floor: 1, top: -223, left: -128, description: fortressTerms.lobby, hardToRead: true },
          { floor: 1, top: -229, left: 243, description: fortressTerms.courtyardLadder, hardToRead: true },
          { floor: 1, top: -251, left: -13, description: fortressTerms.office, hardToRead: true },
          { floor: 1, top: -285, left: -237, description: fortressTerms.lobbyStairs, veryHardToRead: true },
          // 2F
          { floor: 2, top: 190, left: -200, description: fortressTerms.hammamRoof, veryHardToRead: true },
          { floor: 2, top: 351, left: 0, description: fortressTerms.shishaLounge, veryHardToRead: true },
          { floor: 2, top: 317, left: 190, description: fortressTerms.shishaHallway, hardToRead: true },
          { floor: 2, top: 220, left: -49, description: fortressTerms.centralStairsHall, veryHardToRead: true },
          { floor: 2, top: 63, left: 31, description: fortressTerms.centralStairsHall.removeBreakTags(), hardToRead: true },
          { floor: 2, top: 230, left: 40, description: fortressTerms.dormitory, hardToRead: true },
          { floor: 2, top: 132, left: 120, description: fortressTerms.dormitory, hardToRead: true },
          { floor: 2, top: 232, left: 162, description: fortressTerms.gamesRoom, hardToRead: true },
          { floor: 2, top: 128, left: -7, description: fortressTerms.centralStairs, veryHardToRead: true },
          { floor: 2, top: 62, left: 200, description: fortressTerms.briefingRoom, veryHardToRead: true },
          { floor: 2, top: 1, left: 300, description: fortressTerms.courtyardBalcony, veryHardToRead: true },
          { floor: 2, top: -145, left: -241, description: fortressTerms.museum, hardToRead: true },
          { floor: 2, top: 6, left: -160, description: fortressTerms.museum, hardToRead: true },
          { floor: 2, top: 2, left: 0, description: fortressTerms.bathroom, hardToRead: true },
          { floor: 2, top: -98, left: -120, description: fortressTerms.commandersOffice, veryHardToRead: true },
          { floor: 2, top: -131, left: 7, description: fortressTerms.bedroom, veryHardToRead: true },
          { floor: 2, top: -101, left: 143, description: fortressTerms.courtyard, hardToRead: true },
          { floor: 2, top: -224, left: 247, description: fortressTerms.courtyardTower, veryHardToRead: true },
          { floor: 2, top: -297, left: -236, description: fortressTerms.towerStairs, veryHardToRead: true },
          { floor: 2, top: -246, left: -160, description: fortressTerms.towerHallway, veryHardToRead: true },
          { floor: 2, top: -279, left: 0, description: fortressTerms.towerRenovation, veryHardToRead: true },
          // Roof
          { floor: 3, top: 190, left: -200, description: fortressTerms.hammamRoof, veryHardToRead: true },
          { floor: 3, top: 230, left: 100, description: fortressTerms.oldRoof, veryHardToRead: true },
          { floor: 3, top: 282, left: 356, description: fortressTerms.oldTower, veryHardToRead: true },
          { floor: 3, top: -108, left: 0, description: fortressTerms.modernRoof, veryHardToRead: true },
          { floor: 3, top: 1, left: 300, description: fortressTerms.courtyardBalcony, veryHardToRead: true },
          { floor: 3, top: -288, left: -226, description: fortressTerms.westTower, veryHardToRead: true },
          { floor: 3, top: -288, left: 16, description: fortressTerms.eastTower, veryHardToRead: true },
          { floor: 3, top: -228, left: 280, description: fortressTerms.guardTower, veryHardToRead: true }
        ]
      },
      hereford: {
        name: mapNameTerms.hereford,
        imgUrlPrefix: 'hereford',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        floors: [
          // add `dontSelect: true, `, to this so we can put this in the bg and have a higher rez basement image
          // also set index to -1, set delete hereford-0.jpg and then rename hereford-0a.jpg to hereford-0.jpg
          // -1133, -1801 +300, +420
          { index: 0, top: -1433, left: -2221, background: true, name: floorTerms.basement },
          // uncomment when we have a way to not select a floor (on the fortress pr rn)
          //{ index: 0, top: -1560, left: -2440, name: floorTerms.basement },
          { index: 1, top: -238, left: -250, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -283, left: -250, name: floorTerms.secondFloor },
          { index: 3, top: -284, left: -250, name: floorTerms.thirdFloor },
          { index: 4, top: -284, left: -250, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 3, top: 58, left: -30 },
          { floor: 2, top: -59, left: 102 },
          { floor: 1, top: 83, left: -76 },
          { floor: 0, top: 73, left: -117 }
        ],
        bombObjectives: [
          { floor: 0, top: 58, left: -37, set: 4, letter: objectiveTerms.bombShortB },
          { floor: 0, top: -119, left: -100, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 72, left: -35, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 72, left: 73, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 2, top: -37, left: 147, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 2, top: -133, left: -9, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 3, top: 58, left: -60, set: 1, letter: objectiveTerms.bombShortB },
          { floor: 3, top: -198, left: -64, set: 1, letter: objectiveTerms.bombShortA }
        ],
        secureObjectives: [
          { floor: 2, top: 112, left: -47 },
          { floor: 2, top: -93, left: -9 },
          { floor: 1, top: -67, left: 69 },
          { floor: 0, top: -74, left: 79 }
        ],
        zoomPoints: {
          topLeft: { top: -280, left: -340 },
          bottomRight: { top: 234, left: 285 }
        },
        compassPoints: {
          top: -408, left: 330
        },
        ladders: [
          { floor: 0, top: 165, left: 95, otherFloor: 'up' },
          { floor: 1, top: 163, left: 112, otherFloor: 'down' }
        ],
        cameras: [
          { floor: 3, top: -54, left: 66, id: 1, location: herefordTerms.attic,
            los: [
              [{ top: -5, left: 78 }, { top: -204, left: 74 }],
              [{ top: -123, left: 59 }, { top: -218, left: 43 }]
            ]
          },
          { floor: 2, top: 8, left: 58, id: 2, location: herefordTerms.mainHallway,
            los: [
              [{ top: 4, left: 83 }, { top: 43, left: 96 }],
              [{ top: 49, left: 92 }, { top: 140, left: 161 }],
              [{ top: 46, left: 77 }, { top: 158, left: 134 }],
              [{ top: 45, left: 3 }, { top: 128, left: -122 }],
              [{ top: 33, left: 4 }, { top: 101, left: -103 }],
              [{ top: 3, left: 20}, { top: -14, left: 17 }, { top: -17, left: 54 }, { top: 2, left: 48 }]
            ]
          },
          { floor: 1, top: -16, left: 35, id: 3, location: herefordTerms.mainHallway,
            los: [
              [{ top: -7, left: 7 }, { top: 15, left: 3 }, { top: 16, left: 46 }, { top: -7, left: 34 }],
              [{ top: -20, left: -128 }, { top: -20, left: -241 }],
              [{ top: -34, left: -129 }, { top: -44, left: -194 }],
              [{ top: -138, left: 8 }, { top: -230, left: -18 }]
            ]
          },
          { floor: 0, top: -13, left: 35, id: 4, location: herefordTerms.mainHallway,
            los: [
              [{ top: -17, left: 44 }, { top: -75, left: 12 }]
            ]
          },
          { outside: true, top: -181, left: -326, id: 5, location: herefordTerms.westCourtyard,
            los: [
              [{ top: -359, left: -279 }, { top: -187, left: -328 }]
            ]
          },
          { outside: true, top: 218, left: 190, id: 6, location: herefordTerms.street,
            los: [
              [{ top: 329, left: -219 }, { top: 214, left: 237 }]
            ]
          },
          { outside: true, top: -361, left: 273, id: 7, location: herefordTerms.barnyard,
            los: [
              [{ top: -471, left: 100 }, { top: -363, left: 291 }]
            ]
          }
        ],
        ceilingHatches: [
          { floor: 0, top: -125, left: -119 },
          { floor: 0, top: 86, left: -230 },
          { floor: 0, top: 86, left: 123 },
          { floor: 1, top: 129, left: -111 },
          { floor: 1, top: -215, left: -3 },
          { floor: 2, top: -209, left: -167 },
          { floor: 2, top: -209, left: 147 },
          { floor: 2, top: 143, left: 147 },
          { floor: 2, top: 20, left: -62 }
        ],
        skylights: [],
        droneTunnels: [
          { floor: 1, top: 193, left: -65, rotate: 0, size: 9 },
          { floor: 1, top: 146, left: 141, rotate: 0, size: 9 },
          { floor: 1, top: 7, left: -244, rotate: 90, size: 9 },
          { floor: 1, top: -231, left: -13, rotate: 0, size: 9 },
          { floor: 2, top: 3, left: -115, rotate: 0, size: 9 },
          { floor: 4, top: -1, left: -41, rotate: 90, size: DRONE_SMALL, otherFloor: 'down' }
        ],
        spawnPoints: [
          { letter: spawnTerms.a, top: 93, left: -639, description: herefordTerms.controlTower },
          { letter: spawnTerms.b, top: 126, left: 753, description: herefordTerms.spitfireCourtyard },
          { letter: spawnTerms.c, top: -820, left: 39, description: herefordTerms.shootingRange }
        ],
        roomLabels: [
          // EXT
          { outside: true, top: 293, left: -274, description: herefordTerms.street, veryHardToRead: true },
          { outside: true, top: 290, left: -3, description: herefordTerms.street, veryHardToRead: true },
          { outside: true, top: 287, left: 225, description: herefordTerms.street, veryHardToRead: true },
          { outside: true, top: 205, left: -154, description: herefordTerms.street, veryHardToRead: true },
          { outside: true, top: 141, left: -313, description: herefordTerms.westCourtyard, veryHardToRead: true },
          { outside: true, top: -126, left: -300, description: herefordTerms.westCourtyard, veryHardToRead: true },
          { outside: true, top: 150, left: 247, description: herefordTerms.eastCourtyard, veryHardToRead: true },
          { outside: true, top: -188, left: 256, description: herefordTerms.eastCourtyard, veryHardToRead: true },
          { outside: true, top: -309, left: -186, description: herefordTerms.barnyard, veryHardToRead: true },
          { outside: true, top: -317, left: 143, description: herefordTerms.barnyard, veryHardToRead: true },
          // 4F
          { floor: 4, top: 135, left: -35, description: herefordTerms.rooftop, hardToRead: true },
          { floor: 4, top: -34, left: 121, description: herefordTerms.rooftop, hardToRead: true },
          { floor: 4, top: -161, left: -17, description: herefordTerms.rooftop, hardToRead: true },
          { floor: 4, top: 33, left: -187, description: herefordTerms.garageRoof, veryHardToRead: true},
          // 3F
          { floor: 3, top: 206, left: 27, description: herefordTerms.balcony, hardToRead: true },
          { floor: 3, top: 120, left: -50, description: herefordTerms.tractorStorage, hardToRead: true },
          { floor: 3, top: 127, left: 45, description: herefordTerms.mainStairs, hardToRead: true },
          { floor: 3, top: 96, left: 124, description: herefordTerms.attic, hardToRead: true },
          { floor: 3, top: -68, left: 66, description: herefordTerms.attic, hardToRead: true },
          { floor: 3, top: -157, left: 93, description: herefordTerms.attic, hardToRead: true },
          { floor: 3, top: -81, left: -146, description: herefordTerms.blueStairs, hardToRead: true },
          { floor: 3, top: -59, left: 176, description: herefordTerms.eastCourtyard, hardToRead: true },
          { floor: 3, top: -168, left: -128, description: herefordTerms.ammoStorage, hardToRead: true },
          { floor: 3, top: 33, left: -187, description: herefordTerms.garageRoof, veryHardToRead: true},
          // 2F
          { floor: 2, top: 197, left: 19, description: herefordTerms.balcony, hardToRead: true },
          { floor: 2, top: 90, left: -60, description: herefordTerms.loomRoom, hardToRead: true },
          { floor: 2, top: 122, left: 35, description: herefordTerms.mainStairs, hardToRead: true },
          { floor: 2, top: 97, left: 117, description: herefordTerms.laundryRoom, hardToRead: true },
          { floor: 2, top: 33, left: -187, description: herefordTerms.garageRoof, veryHardToRead: true },
          { floor: 2, top: 37, left: 75, description: herefordTerms.mainHallway.removeBreakTags(), hardToRead: true },
          { floor: 2, top: 30, left: -99, description: herefordTerms.loomCloset, hardToRead: true },
          { floor: 2, top: -61, left: -84, description: herefordTerms.blueHallway, hardToRead: true },
          { floor: 2, top: -81, left: 114, description: herefordTerms.masterBedroom, hardToRead: true },
          { floor: 2, top: -88, left: -148, description: herefordTerms.blueStairs, hardToRead: true },
          { floor: 2, top: -86, left: 10, description: herefordTerms.kidsRoom, hardToRead: true },
          { floor: 2, top: -154, left: 109, description: herefordTerms.bathroom, hardToRead: true },
          { floor: 2, top: -171, left: -116, description: herefordTerms.sewingRoom, hardToRead: true },
          // 1F
          { floor: 1, top: 181, left: 10, description: herefordTerms.prepArea, hardToRead: true },
          { floor: 1, top: 36, left: -68, description: herefordTerms.kitchen, hardToRead: true },
          { floor: 1, top: 113, left: 27, description: herefordTerms.mainStairs, hardToRead: true },
          { floor: 1, top: 28, left: 108, description: herefordTerms.diningRoom, hardToRead: true },
          { floor: 1, top: 54, left: -190, description: herefordTerms.garage, hardToRead: true },
          { floor: 1, top: 29, left: 25, description: herefordTerms.kitchenEntrance, hardToRead: true },
          { floor: 1, top: -13, left: -66, description: herefordTerms.mainHallway.removeBreakTags(), hardToRead: true },
          { floor: 1, top: -101, left: -161, description: herefordTerms.blueStairs, hardToRead: true },
          { floor: 1, top: -65, left: 99, description: herefordTerms.pianoRoom, hardToRead: true },
          { floor: 1, top: -87, left: -61, description: herefordTerms.livingRoom, hardToRead: true },
          { floor: 1, top: -160, left: -10, description: herefordTerms.foyer, hardToRead: true },
          { floor: 1, top: -171, left: 97, description: herefordTerms.barn, veryHardToRead: true },
          // Basement
          { floor: 0, top: 57, left: 157, description: herefordTerms.eastTunnel, veryHardToRead: true },
          { floor: 0, top: 60, left: -106, description: herefordTerms.fermentationChamber, hardToRead: true },
          { floor: 0, top: 102, left: 16, description: herefordTerms.mainStairs, hardToRead: true },
          { floor: 0, top: 53, left: -206, description: herefordTerms.generatorRoom, hardToRead: true },
          { floor: 0, top: 58, left: 96, description: herefordTerms.workshop, hardToRead: true },
          { floor: 0, top: 11, left: 13, description: herefordTerms.mainHallway, hardToRead: true },
          { floor: 0, top: -79, left: -215, description: herefordTerms.westTunnel, veryHardToRead: true },
          { floor: 0, top: -34, left: -75, description: herefordTerms.brewery, hardToRead: true },
          { floor: 0, top: -78, left: 83, description: herefordTerms.barrelStorage, hardToRead: true },
          { floor: 0, top: -112, left: -167, description: herefordTerms.blueStairs, hardToRead: true },
          { floor: 0, top: -173, left: 88, description: herefordTerms.barn, hardToRead: true }

        ]
      },
      house: {
        name: mapNameTerms.house,
        imgUrlPrefix: 'house',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        floors: [
          { index: 0, top: -383, left: -680, background: true, name: floorTerms.basement },
          { index: 1, top: -249, left: -234, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -253, left: -234, name: floorTerms.secondFloor },
          { index: 3, top: -282, left: -234, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 0, top: 56, left: 5 },
          { floor: 1, top: 16, left: 198 },
          { floor: 2, top: -140, left: -55 },
          { floor: 2, top: 28, left: 203 }
        ],
        bombObjectives: [
          { floor: 0, top: -16, left: 123, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 0, top: -115, left: -68, set: 4, letter: objectiveTerms.bombShortB },
          { floor: 1, top: 160, left: 62, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 144, left: -70, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 28, left: 133, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 70, left: -50, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 70, left: -85, set: 1, letter: objectiveTerms.bombShortA },
          { floor: 2, top: -140, left: -90, set: 1, letter: objectiveTerms.bombShortB }
        ],
        secureObjectives: [
          { floor: 0, top: -16, left: 158 },
          { floor: 1, top: -114, left: -71 },
          { floor: 2, top: 70, left: -15 },
          { floor: 2, top: 28, left: 168 }
        ],
        zoomPoints: {
          topLeft: { top: -250, left: -250 },
          bottomRight: { top: 250, left: 250 }
        },
        compassPoints: {
          top: 400, left: 560
        },
        ladders: [
          { floor: 1, top: -10, left: -331, otherFloor: 'up' },
          { floor: 2, top: -10, left: -331, otherFloor: 'down' },
          { floor: 1, top: 46, left: -270, otherFloor: 'up' },
          { floor: 2, top: 46, left: -270, otherFloor: 'down' }
        ],
        cameras: [
          { floor: 2, top: -8, left: -166, id: 5, location: houseTerms.backStairs },
          { floor: 1, top: -8, left: -166, otherFloor: 'up', id: 5, location: houseTerms.backStairs },
          { floor: 2, top: -70, left: 74, id: 4, location: houseTerms.upperHallway },
          { floor: 1, top: 13, left: 52, id: 3, location: houseTerms.kitchen },
          {
            floor: 0, top: -65, left: -122, id: 1, location: houseTerms.gym,
            los: [
              [{top: -89, left: -64}, {top: -140, left: 29}],
              [{top: -182, left: -67}, {top: -237, left: -34}],
              [{top: -182, left: -48}, {top: -218, left: -20}]
            ]
          },
          {
            floor: 0, top: -75, left: 85, id: 2, location: houseTerms.garage,
            los: [
              [{top: -85, left: 79}, {top: -167, left: 71}],
              [{top: 20, left: 202}, {top: 47, left: 232}],
              [{top: 40, left: 202}, {top: 47, left: 208}],
              [{top: 52, left: 96}, {top: 85, left: 101}],
              [{top: 52, left: 116}, {top: 85, left: 125}]
            ]
          },
          {
            outdoor: true, top: -175, left: -270, id: 6, location: houseTerms.treeHouseAlley,
            los: [[{top: -235, left: -320}, {top: -45, left: -184}]]
          },
          {
            outdoor: true, top: 394, left: 345, id: 7, location: houseTerms.apcArea,
            los: [[{top: 400, left: -130}, {top: 400, left: 618}]]
          }
        ],
        ceilingHatches: [
          { floor: 0, top: -106, left: -145 },
          { floor: 0, top: -20, left: -18 },
          { floor: 0, top: 32, left: 235 },
          { floor: 1, top: -70, left: 48 },
          { floor: 1, top: -20, left: 240 }
        ],
        skylights: [],
        droneTunnels: [
          { floor: 1, top: -74, left: -169, rotate: 351, size: 55, alternate: true },
          { floor: 1, top: 38, left: -141, rotate: 90, size: 10, alternate: true },
          { floor: 1, top: -183, left: 6, rotate: 0, size: 12, alternate: true },
          { floor: 1, top: 205, left: 21, rotate: 0, size: 12, alternate: true }
        ],
        spawnPoints: [
          // Construction Site and River Docks are commented out because they still exist in Training Grounds but not anywhere else.
          // { letter: spawnTerms.a, top: -589, left: -31, description: houseTerms.spawnConstructionSite },
          // { letter: spawnTerms.b, top: 218, left: 571, description: houseTerms.spawnRiverDocks },
          { letter: spawnTerms.a, top: -439, left: 118, description: houseTerms.spawnFrontStreet },
          { letter: spawnTerms.b, top: 515, left: -140, description: houseTerms.spawnAPCArea },
          { letter: spawnTerms.c, top: 468, left: 390, description: houseTerms.spawnSideStreet }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: 308, left: 271, description: houseTerms.apcArea },
          { outdoor: true, top: 308, left: -146, description: houseTerms.apcArea },
          { outdoor: true, top: 20, left: 461, description: houseTerms.sideStreet },
          { outdoor: true, top: -36, left: 315, description: houseTerms.garageEntrance },
          { outdoor: true, top: 150, left: 275, description: houseTerms.garageSide },
          { outdoor: true, top: 218, left: -265, description: houseTerms.patio },
          { outdoor: true, top: -142, left: -182, description: houseTerms.basementStairs },
          { outdoor: true, top: -70, left: -236, description: houseTerms.treeHouseAlley },
          { outdoor: true, top: -337, left: 160, description: houseTerms.frontYard },
          { outdoor: true, top: -337, left: -95, description: houseTerms.frontYard },
          { floor: 1, top: -193, left: 105, description: houseTerms.frontBalcony },
          { floor: 1, top: 237, left: -35, description: houseTerms.backPorch },
          { floor: 2, top: -235, left: 39, smaller: true, description: houseTerms.frontBalcony },
          { floor: 2, top: 245, left: 7, description: houseTerms.backPorch },
          { floor: 2, top: -208, left: 228, hardToRead: true, description: houseTerms.backPorchTop },
          { floor: 2, top: 105, left: 199, smaller: true, description: houseTerms.readingRoomBalcony },

          // Stairs
          { floor: 0, top: -65, left: 5, hardToRead: true, smaller: true, description: houseTerms.kitchenStairs },
          { floor: 0, top: -11, left: -127, hardToRead: true, description: houseTerms.backStairs },
          { floor: 1, top: 190, left: 165, hardToRead: true, smaller: true, description: houseTerms.redStairs },
          { floor: 1, top: -64, left: 16, hardToRead: true, smaller: true, description: houseTerms.kitchenStairs },
          { floor: 1, top: -153, left: 113, hardToRead: true, smaller: true, description: houseTerms.lobbyStairs },
          { floor: 1, top: -11, left: -127, hardToRead: true, description: houseTerms.backStairs },
          { floor: 2, top: 192, left: 166, hardToRead: true, smaller: true, description: houseTerms.redStairs },
          { floor: 2, top: -152, left: 114, hardToRead: true, smaller: true, description: houseTerms.lobbyStairs },
          { floor: 2, top: -11, left: -127, hardToRead: true, description: houseTerms.backStairs },

          // Basement
          { floor: 0, top: -198, left: -80, veryHardToRead: true, description: houseTerms.depot },
          { floor: 0, top: -135, left: -69, hardToRead: true, description: houseTerms.gym },
          { floor: 0, top: 20, left: 5, hardToRead: true, description: houseTerms.laundryRoom },
          { floor: 0, top: -36, left: 140, hardToRead: true, description: houseTerms.garage },
          { floor: 0, top: 37, left: 199, veryHardToRead: true, smaller: true, description: houseTerms.garageEntrance },

          // 1F
          { floor: 1, top: -150, left: -71, hardToRead: true, description: houseTerms.gameRoom },
          { floor: 1, top: 232, left: 114, hardToRead: true, smaller: true, description: houseTerms.backEntrance },
          { floor: 1, top: -112, left: 39, hardToRead: true, description: houseTerms.lobby },
          { floor: 1, top: -2, left: 66, hardToRead: true, description: houseTerms.kitchen },
          { floor: 1, top: -117, left: 198, hardToRead: true, description: houseTerms.office },
          { floor: 1, top: -20, left: 198, hardToRead: true, description: houseTerms.diningRoom },
          { floor: 1, top: 103, left: 184, hardToRead: true, description: houseTerms.connector },
          { floor: 1, top: 140, left: 62, hardToRead: true, description: houseTerms.tvRoom },
          { floor: 1, top: 124, left: -70, hardToRead: true, description: houseTerms.musicRoom },

          // 2F
          { floor: 2, top: -160, left: -72, hardToRead: true, description: houseTerms.pinkRoom },
          { floor: 2, top: -115, left: -1, hardToRead: true, description: houseTerms.girlsWalkIn },
          { floor: 2, top: 50, left: -50, hardToRead: true, description: houseTerms.carRoom },
          { floor: 2, top: 163, left: -55, hardToRead: true, description: houseTerms.playRoom },
          { floor: 2, top: -38, left: 5, hardToRead: true, description: houseTerms.upperHallway },
          { floor: 2, top: 36, left: 42, hardToRead: true, description: houseTerms.walkIn },
          { floor: 2, top: 8, left: 168, hardToRead: true, description: houseTerms.masterBedroom },
          { floor: 2, top: 131, left: 85, hardToRead: true, description: houseTerms.readingRoom },
          { floor: 2, top: -98, left: 195, hardToRead: true, description: houseTerms.bathroom },
          { floor: 2, top: -195, left: 112, hardToRead: true, description: houseTerms.bathroomHallway },

          // 3F/Roof
          { floor: 3, top: -10, left: 50, description: houseTerms.rooftop }

        ]
      },
      kafe: {
        name: mapNameTerms.kafe,
        imgUrlPrefix: 'kafe',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        floors: [
          { index: 0, top: -1170, left: -2437, background: true, name: '', dontSelect: true },
          { index: 1, top: -166, left: -224, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -173, left: -222, name: floorTerms.secondFloor },
          { index: 3, top: -187, left: -222, name: floorTerms.thirdFloor },
          { index: 4, top: -187, left: -222, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 1, top: 174, left: 9, smaller: true },
          { floor: 2, top: 70, left: 307, smaller: true },
          { floor: 2, top: 151, left: 34, smaller: true },
          { floor: 3, top: 178, left: 221, smaller: true }
        ],
        bombObjectives: [
          { floor: 1, top: 151, left: -32, smaller: true, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 120, left: 129, smaller: true, set: 4, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 207, left: 174, smaller: true, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 25, left: 242, smaller: true, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 59, left: 25, smaller: true, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 180, left: 174, smaller: true, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 3, top: 101, left: 318, smaller: true, set: 1, letter: objectiveTerms.bombShortA },
          { floor: 3, top: -38, left: 192, smaller: true, set: 1, letter: objectiveTerms.bombShortB }
        ],
        secureObjectives: [
          { floor: 1, top: 163, left: -9, smaller: true },
          { floor: 2, top: 23, left: 270, smaller: true },
          { floor: 2, top: 151, left: -61, smaller: true },
          { floor: 3, top: 92, left: -58, smaller: true }
        ],
        zoomPoints: {
          topLeft: { top: -209, left: -238 },
          bottomRight: { top: 335, left: 479 }
        },
        compassPoints: {
          top: 313, left: 505
        },
        ladders: [
          { floor: 1, top: 608, left: 298, otherFloor: 'up' },
          { floor: 2, top: 608, left: 298, otherFloor: 'down' },
          { floor: 1, top: 151, left: -374, otherFloor: 'up' },
          { floor: 2, top: 151, left: -374, otherFloor: 'down' },
          { floor: 1, top: -345, left: 290, otherFloor: 'up' },
          { floor: 2, top: -345, left: 290, otherFloor: 'down' }
        ],
        cameras: [
          { floor: 2, otherFloor: 'up', top: -129, left: 268, id: 1, location: kafeTerms.cocktailBalcony },
          {
            floor: 3, top: -126, left: 281, id: 1, location: kafeTerms.cocktailBalcony,
            los: []
          },
          {
            floor: 2, top: 135, left: 96, id: 2, location: kafeTerms.readingRoomCorridor,
            los: []
          },
          {
            floor: 1 , top: 62, left: 244 , id: 3, location: kafeTerms.vipCorridor,
            los: []
          },
          {
            floor: 1, top: 34, left: -197, id: 4, location: kafeTerms.bakery,
            los: []
          },
          {
            outdoor: true, top: -138, left: -328, id: 5, location: kafeTerms.westMainStreet,
            los: [[{top: 775 - 749, left: 808 - 1275}, {top: 592 - 749, left: 927 - 1275}, {top: 425 - 749, left: 1133 - 1275}]]
          },
          {
            outdoor: true, top: 445, left: 396, id: 6, location: kafeTerms.backAlley,
            los: [[{top: 1240 - 749, left: 1600 - 1275}, {top: 1204 - 749, left: 1685 - 1276}, {top: 993 - 749, left: 1710 - 1275}]]
          }
        ],
        ceilingHatches: [
          { floor: 1, top: 218, left: 184 },
          { floor: 2, top: 188, left: 30 },
          { floor: 2, top: 156, left: 339 },
          { floor: 2, top: -32, left: 55 },
          { floor: 3, top: -23, left: -31 },
          { floor: 3, top: -99, left: 59 }
        ],
        skylights: [
          { floor: 3, top: -27, left: 193 },
          { floor: 4, otherFloor: 'down', top: -15, left: 200 }
        ],
        droneTunnels: [
          { floor: 1, top: 247, left: 11, rotate: 0, size: 11 },
          { floor: 1, top: 152, left: 214, rotate: 90, size: 8 },
          { floor: 1, top: 28, left: -79, rotate: 0, size: 8 },
          { floor: 2, top: 119, left: 359, rotate: 0, size: 12 },
          { floor: 2, top: 108, left: 78, rotate: 90, size: 8 },
          { floor: 2, top: 11, left: 135, rotate: 0, size: 8 },
          { floor: 3, top: 34, left: -4, rotate: 90, size: 8 }
        ],
        spawnPoints: [
          { letter: spawnTerms.a, top: -528, left: 111, description: kafeTerms.riverDocks },
          { letter: spawnTerms.b, top: 112, left: -689, description: kafeTerms.christmasMarket },
          { letter: spawnTerms.c, top: 571, left: 161, description: kafeTerms.park }
          //{ letter: spawnTerms.d, top: -402, left: 904, description: kafeTerms.spawnRemoved }
        ],
        roomLabels: [
          // EXT
          { outdoor: true,  top: 827, left: 177, hardToRead: true, description: kafeTerms.backAlley },
          { outdoor: true,  top: 577, left: 387, hardToRead: true, description: kafeTerms.backAlley },
          { outdoor: true,  top: 344, left: -230, hardToRead: true, description: kafeTerms.garage },
          { outdoor: true,  top: 379, left: 131, hardToRead: true, description: kafeTerms.backAlley },
          { outdoor: true,  top: 74, left: -287, hardToRead: true, description: kafeTerms.bakeryParking },
          { outdoor: true, top: -229, left: -268, hardToRead: true, description: kafeTerms.westMainStreet },
          { outdoor: true,  top: -227, left: 153, hardToRead: true, description: kafeTerms.mainStreet },
          { outdoor: true,  top: -228, left: 631, hardToRead: true, description: kafeTerms.eastMainStreet },
          // Roof
          { floor: 4,  top: 174, left: -162, hardToRead: true, description: kafeTerms.bakeryRoof },
          { floor: 4,  top: 62, left: 149, hardToRead: true, description: kafeTerms.cafeRoofTop },
          { floor: 4,  top: 44, left: 404, hardToRead: true, description: kafeTerms.terrace },
          // 3F
          { floor: 3,  top: 174, left: -162, hardToRead: true, description: kafeTerms.bakeryRoof },
          { floor: 3, top: 140, left: 5, hardToRead: true, description: kafeTerms.cigarLounge },
          { floor: 3, top: 235, left: 208, hardToRead: true, description: kafeTerms.whiteCorridor },
          { floor: 3, top: 215, left: 320, hardToRead: true, description: kafeTerms.whiteStairs },
          { floor: 3,  top: 44, left: 404, hardToRead: true, description: kafeTerms.terrace },
          { floor: 3, top: 175, left: 167, hardToRead: true, description: kafeTerms.washrooms },
          { floor: 3, top: 163, left: 222, hardToRead: true, description: kafeTerms.barFreezer },
          { floor: 3, top: 146, left: 275, hardToRead: true, description: kafeTerms.cocktailLoungeEntrance },
          { floor: 3, top: 55, left: 331, hardToRead: true, description: kafeTerms.cocktailLounge },
          { floor: 3, top: 114, left: 196, hardToRead: true, description: kafeTerms.barBackstore },
          { floor: 3, top: 39, left: 39, hardToRead: true, description: kafeTerms.cigarShop },
          { floor: 3, top: 27, left: 193, hardToRead: true, description: kafeTerms.bar },
          { floor: 3, top: -76, left: -41, hardToRead: true, description: kafeTerms.redStairs },
          { floor: 3, top: -90, left: 33, hardToRead: true, description: kafeTerms.cigarBalcony },
          { floor: 3, top: -91, left: 328, hardToRead: true, description: kafeTerms.cocktailBalcony },
          // 2F
          { floor: 2,  top: 174, left: -162, hardToRead: true, description: kafeTerms.bakeryRoof },
          { floor: 2, top: 164, left: 0, hardToRead: true, description: kafeTerms.trainMuseum },
          { floor: 2, top: 195, left: 124, hardToRead: true, description: kafeTerms.fireplaceHall },
          { floor: 2, top: 139, left: 179, hardToRead: true, description: kafeTerms.readingRoomCorridor },
          { floor: 2, top: 211, left: 308, hardToRead: true, description: kafeTerms.whiteStairs },
          { floor: 2, top: 44, left: 404,  hardToRead: true,description: kafeTerms.terrace },
          { floor: 2, top: 143, left: 315, hardToRead: true, description: kafeTerms.laundryRoom },
          { floor: 2, top: 62, left: 191, hardToRead: true, description: kafeTerms.readingRoom },
          { floor: 2, top: 35, left: 304, hardToRead: true, description: kafeTerms.readingRoom },
          { floor: 2, top: 46, left: -4, hardToRead: true, description: kafeTerms.miningRoom },
          { floor: 2, top: 53, left: 104, hardToRead: true, description: kafeTerms.mainCorridor },
          { floor: 2, top: -13, left: 185, hardToRead: true, description: kafeTerms.pillarRoom },
          { floor: 2, top: -84, left: 49, hardToRead: true, description: kafeTerms.pillarRoom },
          { floor: 2, top: -80, left: 289, hardToRead: true, description: kafeTerms.pillarRoom },
          { floor: 2, top: -19, left: -3, hardToRead: true, description: kafeTerms.museumEntrance },
          { floor: 2, top: -86, left: -48, hardToRead: true, description: kafeTerms.redStairs },
          // 1F
          { floor: 1, top: 137, left: 238, hardToRead: true, description: kafeTerms.vipCorridor },
          { floor: 1, top: 264, left: 273, hardToRead: true, description: kafeTerms.vipCorridor },
          { floor: 1, top: 97, left: -163, hardToRead: true, description: kafeTerms.bakery },
          { floor: 1, top: 208, left: -96, hardToRead: true, description: kafeTerms.prepRoom },
          { floor: 1, top: 102, left: -23, hardToRead: true, description: kafeTerms.kitchenCooking },
          { floor: 1, top: 112, left: 126, hardToRead: true, description: kafeTerms.kitchenService},
          { floor: 1, top: 197, left: 169, hardToRead: true, description: kafeTerms.freezer },
          { floor: 1, top: 207, left: 296, hardToRead: true, description: kafeTerms.whiteStairs },
          { floor: 1,  top: 44, left: 400, hardToRead: true, description: kafeTerms.terrace },
          { floor: 1, top: 102, left: 295, hardToRead: true, description: kafeTerms.vipSection },
          { floor: 1, top: -3, left: 0, hardToRead: true, description: kafeTerms.mainCorridor },
          { floor: 1, top: -6, left: 171, hardToRead: true, description: kafeTerms.bar },
          { floor: 1, top: -49, left: 296, hardToRead: true, description: kafeTerms.diningRoom },
          { floor: 1, top: -27, left: -157, hardToRead: true, description: kafeTerms.smallBakery },
          { floor: 1, top: -79, left: -59, hardToRead: true, description: kafeTerms.redStairs },
          { floor: 1, top: -83, left: 10, hardToRead: true, description: kafeTerms.coatCheck },
          { floor: 1, top: -73, left: 108, hardToRead: true, description: kafeTerms.reception }
        ]
      },
      kanal: {
        name: mapNameTerms.kanal,
        imgUrlPrefix: 'kanal',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        floors: [
          { index: -1, top: -1190, left: -2218, background: true, name: floorTerms.subBasement },
          { index: 0, top: -346, left: -368, name: floorTerms.basement },
          { index: 1, top: -346, left: -366, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -362, left: -380, name: floorTerms.secondFloor },
          { index: 3, top: -359, left: -380, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 0, top: -30, left: -312, smaller: true },
          { floor: 1, top: -39, left: -305, smaller: true },
          { floor: 1, top: -168, left: 213, smaller: true },
          { floor: 2, top: -172, left: 135, smaller: true }
        ],
        bombObjectives: [
          { floor: 0, top: -30, left: -283, set: 4, letter: objectiveTerms.bombShortA, smaller: true },
          { floor: 0, top: -95, left: -334, set: 4, letter: objectiveTerms.bombShortB, smaller: true },
          { floor: 1, top: -39, left: -295, set: 3, letter: objectiveTerms.bombShortA, smaller: true },
          { floor: 1, top: -189, left: -149, set: 3, letter: objectiveTerms.bombShortB, smaller: true },
          { floor: 1, top: -246, left: 196, set: 2, letter: objectiveTerms.bombShortA, smaller: true },
          { floor: 1, top: -114, left: 84, set: 2, letter: objectiveTerms.bombShortB, smaller: true },
          { floor: 2, top: -172, left: 140, set: 1, letter: objectiveTerms.bombShortA, smaller: true },
          { floor: 2, top: -178, left: 265, set: 1, letter: objectiveTerms.bombShortB, smaller: true }
        ],
        secureObjectives: [
          { floor: 0, top: -30, left: -288, smaller: true },
          { floor: 1, top: -39, left: -300, smaller: true },
          { floor: 1, top: -168, left: 208, smaller: true },
          { floor: 2, top: -178, left: 260, smaller: true }
        ],
        zoomPoints: {
          topLeft: { top: -337, left: -507 },
          bottomRight: { top: 259, left: 547 }
        },
        compassPoints: {
          top: 168, left: 515
        },
        ladders: [
          { floor: -1, top: -36, left: -126, otherFloor: 'up' },
          { floor: 0, top: -36, left: -110, otherFloor: 'down' },
          { floor: -1, top: -240, left: -234, otherFloor: 'up' },
          { floor: 0, top: -235, left: -230, otherFloor: 'down' }
        ],
        cameras: [
          {
            floor: 2, top: -67, left: 216, id: 1, location: kanalTerms.controlRoomHallway,
            los: []
          },
          {
            floor: 1, top: -69, left: 163,  id: 2, location: kanalTerms.mapRoomCorridor,
            los: []
          },
          {
            floor: 1, top: 16, left: -180, id: 3, location: kanalTerms.radioRoomHallway,
            los: [
              [{top: -14, left: -164}, {top: -75, left: -146}],
              [{top: 18, left: -77}, {top: 21, left: 178}]
            ]
          },
          {
            floor: 0, top: -55, left: -191, id: 4, location: kanalTerms.supplyRoomCorridor,
            los: []
          },
          {
            outdoor: true, top: 437, left: -366, id: 5, location: kanalTerms.frontLawn,
            los: []
          },
          {
            outdoor: true, top: -391, left: -465, id: 6, location: kanalTerms.lockGate,
            los: []
          },
          {
            outdoor: true, top: -374, left: 430, id: 7, location: kanalTerms.constructionSite,
            los: []
          }
        ],
        ceilingHatches: [
          { floor: 0, top: -156, left: -106 },
          { floor: 0, top: -43, left: -342 },
          { floor: 1, top: -248, left: 302 },
          { floor: 1, top: -248, left: 126 },
          { floor: 1, top: -56, left: 86 }
        ],
        skylights: [],
        droneTunnels: [
          // north vents on coast guard
          { floor: 1, top: -346, left: -171, rotate: 0, size: 8 },
          { floor: 1, top: -341, left: -161, rotate: 0, size: DRONE_MED },
          { floor: 1, top: -346, left: -166, rotate: 90, size: DRONE_MED },

          { floor: 2, top: -353, left: -171, rotate: 0, size: 12 },
          { floor: 2, top: -353, left: -161, rotate: 0, size: 12 },
          { floor: 2, top: -353, left: -166, rotate: 90, size: DRONE_MED },

          { floor: 3, top: -353, left: -171, rotate: 0, size: 12 },
          { floor: 3, top: -340, left: -161, rotate: 0, size: 38 },
          { floor: 3, top: -353, left: -166, rotate: 90, size: DRONE_MED },
          { floor: 3, top: -324, left: -150, rotate: 90, size: 29 },

          // east vents on coast guard
          { floor: 1, top: -193, left: -55, rotate: 0, size: 8 },
          { floor: 1, top: -193, left: -66, rotate: 90, size: 30 },

          { floor: 2, top: -193, left: -56, rotate: 0, size: 10 },
          { floor: 2, top: -193, left: -54, rotate: 0, size: 10 },
          { floor: 2, top: -193, left: -55, rotate: 90, size: 10 },

          { floor: 3, top: -204, left: -95, rotate: 0, size: 35 },
          { floor: 3, top: -210, left: -87, rotate: 90, size: 9 },
          { floor: 3, top: -192, left: -53, rotate: 0, size: 11 },
          { floor: 3, top: -192, left: -74, rotate: 90, size: 51 },

          // west vents on coast guard
          { floor: 0, top: -206, left: -371, rotate: 0, size: 18 },
          { floor: 0, top: -202, left: -365, rotate: 90, size: 21 },

          { floor: 1, top: -211, left: -367, rotate: 0, size: 11 },
          { floor: 1, top: -211, left: -367, rotate: 90, size: 10 },

          { floor: 2, top: -211, left: -367, rotate: 0, size: 11 },
          { floor: 2, top: -211, left: -357, rotate: 90, size: 29 },

          { floor: 3, top: -211, left: -367, rotate: 0, size: 11 },
          { floor: 3, top: -211, left: -357, rotate: 90, size: 29 },

          // tunnel vents
          { floor: -1, top: -177, left: -348, rotate: 0, size: 11 },
          { floor: -1, top: -177, left: -298, rotate: 90, size: 109 },

          { floor: 0, top: -190, left: -365, rotate: 0, size: 11 },
          { floor: 0, top: -190, left: -366, rotate: 90, size: 11 },

          // basement bathroom
          { floor: 0, top: 55, left: -85, rotate: 90, size: 14 },
          // diving room
          { floor: 0, top: -335, left: -260, rotato: 0, size: 12 }

        ],
        spawnPoints: [
          { letter: spawnTerms.a, top: -495, left: -1004, description: kanalTerms.floatingDock },
          { letter: spawnTerms.b, top: 465, left: -426, description: kanalTerms.sailboats },
          { letter: spawnTerms.c, top: -432, left: 924, description: kanalTerms.constructionSite }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: 314, left: -4, hardToRead: true, description: kanalTerms.middleRoad },
          { outdoor: true, top: -79, left: -4, description: kanalTerms.middleRoad },
          { outdoor: true, top: 319, left: 178, hardToRead: true, description: kanalTerms.parking },
          { outdoor: true, top: 266, left: -261, hardToRead: true, description: kanalTerms.frontLawn },
          { outdoor: true, top: -471, left: -560, hardToRead: true, description: kanalTerms.lockGateTunnel },
          { outdoor: true, top: 139, left: -527, hardToRead: true, description: kanalTerms.lockGateTunnel },
          { outdoor: true, top: 69, left: -395, description: kanalTerms.forkliftAlley },
          { outdoor: true, top: -281, left: -395, hardToRead: true, description: kanalTerms.forkliftAlley },
          { outdoor: true, top: 108, left: 243, description: kanalTerms.parkingEntrance },
          { outdoor: true, top: -313, left: -635, hardToRead: true, description: kanalTerms.lockGate },
          { outdoor: true, top: 27, left: -453, hardToRead: true, description: kanalTerms.lockGate },
          { outdoor: true, top: -351, left: 511, hardToRead: true, description: kanalTerms.constructionSite },
          { outdoor: true, top: -81, left: 511, description: kanalTerms.constructionSite },
          { outdoor: true, top: -71, left: 851, hardToRead: true, description: kanalTerms.constructionSite },
          { floor: 0, top: -159, left: 192, hardToRead: true, description: kanalTerms.garage },
          { floor: 0, top: -269, left: -147, hardToRead: true, description: kanalTerms.divingAlcove },
          { outdoor: true, top: -410, left: -281, hardToRead: true, description: kanalTerms.quayContainers },
          { outdoor: true, top: -392, left: 169, hardToRead: true, description: kanalTerms.quayContainers },
          { outdoor: true, top: -448, left: -66, hardToRead: true, description: kanalTerms.docksBridge },
          // Stairs
          { floor: 0, top: -46, left: -123, veryHardToRead: true, description: kanalTerms.whiteStairs },
          { floor: 1, top: -44, left: -123, veryHardToRead: true, description: kanalTerms.whiteStairs },
          { floor: 2, top: -39, left: -123, veryHardToRead: true, description: kanalTerms.whiteStairs },
          { floor: 0, top: -28, left: 200, veryHardToRead: true, description: kanalTerms.redStairs },
          { floor: 1, top: -11, left: 214, veryHardToRead: true, description: kanalTerms.redStairs },
          { floor: 2, top: -7, left: 229, veryHardToRead: true, description: kanalTerms.redStairs },
          { floor: 1, top: -182, left: 394, veryHardToRead: true, description: kanalTerms.greenStairs },
          { floor: 2, top: -178, left: 411, veryHardToRead: true, description: kanalTerms.greenStairs },
          { floor: 0, top: -308, left: -337, veryHardToRead: true, description: kanalTerms.yellowStairs },
          { floor: 1, top: -308, left: -337, veryHardToRead: true, description: kanalTerms.yellowStairs },
          { floor: 1, top: -308, left: -102, veryHardToRead: true, description: kanalTerms.blueStairs },
          { floor: 2, top: -308, left: -102, veryHardToRead: true, description: kanalTerms.blueStairs },

          // Roof
          { floor: 2, top: -243, left: -213, hardToRead: true, description: kanalTerms.coastGuardRoof },
          { floor: 3, top: -243, left: -213, hardToRead: true, description: kanalTerms.coastGuardRoof },
          { floor: 2, top: -6, left: -253, hardToRead: true, description: kanalTerms.coastGuardRoof },
          { floor: 3, top: -6, left: -253, hardToRead: true, description: kanalTerms.coastGuardRoof },
          { floor: 2, top: 33, left: 134, hardToRead: true, description: kanalTerms.balconyRenovations },
          { floor: 3, top: 33, left: 134, hardToRead: true, description: kanalTerms.balconyRenovations },
          { floor: 2, top: 25, left: 3, hardToRead: true, description: kanalTerms.bridgeRoof },
          { floor: 3, top: 25, left: 3, hardToRead: true, description: kanalTerms.bridgeRoof },
          { floor: 3, top: -146, left: 207, hardToRead: true, description: kanalTerms.controlRoomRoof },
          { floor: 2, top: 8, left: 344, hardToRead: true, description: kanalTerms.balcony },
          { floor: 3, top: 8, left: 344, hardToRead: true, description: kanalTerms.balcony },
          { floor: 3, top: -260, left: -2, hardToRead: true, description: kanalTerms.upperBridgeRoof },

          // 2F
          { floor: 2, top: -32, left: 120, hardToRead: true, description: kanalTerms.renovations },
          { floor: 2, top: -42, left: 177, hardToRead: true, description: kanalTerms.roofEntrance },
          { floor: 2, top: -49, left: 302, hardToRead: true, description: kanalTerms.controlRoomHallway },
          { floor: 2, top: -126, left: 142, hardToRead: true, description: kanalTerms.radarRoom },
          { floor: 2, top: -211, left: 282, hardToRead: true, description: kanalTerms.serverRoom },
          { floor: 2, top: -179, left: 372, hardToRead: true, description: kanalTerms.serverRoomCorridor },
          { floor: 2, top: -218, left: -122, veryHardToRead: true, description: kanalTerms.printerRoom },
          { floor: 2, top: -235, left: 142, hardToRead: true, description: kanalTerms.controlRoom },
          { floor: 2, top: -249, left: -6, hardToRead: true, description: kanalTerms.upperBridge },

          // 1F
          { floor: 1, top: 80, left: -280, hardToRead: true, description: kanalTerms.archives },
          { floor: 1, top: 80, left: -139, hardToRead: true, description: kanalTerms.reception },
          { floor: 1, top: 39, left: 124, hardToRead: true, description: kanalTerms.modelRoom },
          { floor: 1, top: -1, left: 334, hardToRead: true, description: kanalTerms.museum },
          { floor: 1, top: -1, left: -278, hardToRead: true, description: kanalTerms.coastGuardMeetingRoom },
          { floor: 1, top: -221, left: -225, hardToRead: true, description: kanalTerms.radioRoomHallway },
          { floor: 1, top: -101, left: -185, hardToRead: true, description: kanalTerms.radioRoomHallway },
          { floor: 1, top: 24, left: -2, hardToRead: true, description: kanalTerms.lowerBridge },
          { floor: 1, top: -55, left: 280, hardToRead: true, description: kanalTerms.mapRoomCorridor },
          { floor: 1, top: -68, left: 111, hardToRead: true, description: kanalTerms.securityRoom },
          { floor: 1, top: -158, left: -122, hardToRead: true, description: kanalTerms.lounge },
          { floor: 1, top: -181, left: 221, hardToRead: true, description: kanalTerms.mapRoom },
          { floor: 1, top: -168, left: 322, hardToRead: true, description: kanalTerms.kitchen },
          { floor: 1, top: -102, left: 422, hardToRead: true, description: kanalTerms.constructionEntrance },
          { floor: 1, top: -191, left: -299, hardToRead: true, description: kanalTerms.radioRoom },
          { floor: 1, top: -194, left: 106, hardToRead: true, description: kanalTerms.projectorRoom },

          // Basement
          { floor: 0, top: 79, left: -315, hardToRead: true, description: kanalTerms.pipes },
          { floor: 0, top: -147, left: -189, hardToRead: true, description: kanalTerms.supplyRoomCorridor },
          { floor: 0, top: 72, left: -219, hardToRead: true, description: kanalTerms.supplyRoomCorridor.replace(new RegExp('<br/>'), ' ') },
          { floor: 0, top: 74, left: -129, hardToRead: true, description: kanalTerms.bathroom },
          { floor: 0, top: 0, left: -258, hardToRead: true, description: kanalTerms.supplyRoom },
          { floor: 0, top: -1, left: -102, hardToRead: true, description: kanalTerms.showerCorridor },
          { floor: 0, top: -103, left: -279, hardToRead: true, description: kanalTerms.kayaks },
          { floor: 0, top: -121, left: -128, hardToRead: true, description: kanalTerms.lockerRoom },
          { floor: 0, top: -226, left: -322, hardToRead: true, description: kanalTerms.divingRoom },
          { floor: -1, top: -31, left: -206, hardToRead: true, description: kanalTerms.tunnel01 }
        ]
      },
      oregon: {
        name: mapNameTerms.oregon,
        imgUrlPrefix: 'oregon',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        floors: [
          { index: 0, top: -525, left: -815, background: true, name: floorTerms.basement },
          { index: 1, top: -292, left: -408, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -295, left: -409, name: floorTerms.secondFloor },
          { index: 3, top: -304, left: -415, name: floorTerms.thirdFloor },
          { index: 4, top: -306, left: -411, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: 118, left: -32, smaller: true },
          { floor: 1, top: -84, left: 161, smaller: true },
          { floor: 1, top: 12, left: -11, smaller: true },
          { floor: 0, top: -37, left: 152, smaller: true }
        ],
        bombObjectives: [
          // kids
          { floor: 2, top: 161, left: -32, set: 1, letter: objectiveTerms.bombShortA, smaller: true },
          { floor: 2, top: 27, left: 29, set: 1, letter: objectiveTerms.bombShortB, smaller: true },
          // kitchen dining
          { floor: 1, top: -35, left: -198, set: 2, letter: objectiveTerms.bombShortA, smaller: true },
          { floor: 1, top: -3, left: -14, set: 2, letter: objectiveTerms.bombShortB, smaller: true },
          // meeting kitchen
          { floor: 1, top: -104, left: 122, set: 3, letter: objectiveTerms.bombShortA, smaller: true },
          { floor: 1, top: 24, left: -14, set: 3, letter: objectiveTerms.bombShortB, smaller: true },
          // basement
          { floor: 0, top: 118, left: 89, set: 4, letter: objectiveTerms.bombShortA, smaller: true },
          { floor: 0, top: -40, left: 163, set: 4, letter: objectiveTerms.bombShortB, smaller: true }
        ],
        secureObjectives: [
          { floor: 2, top: 94, left: 54, smaller: true },
          { floor: 1, top: -17, left: -195, smaller: true },
          { floor: 1, top: -56, left: 149, smaller: true },
          { floor: 0, top: 93, left: 94, smaller: true }
        ],
        zoomPoints: {
          topLeft: { top: -355, left: -509 },
          bottomRight: { top: 303, left: 463 }
        },
        compassPoints: {
          top: -297, left: -337
        },
        ladders: [
          { floor: 2, top: -255, left: 210, otherFloor: 'up' },
          { floor: 3, top: -264, left: 227, otherFloor: 'down' }
        ],
        cameras: [
          {
            floor: 2, top: 54, left: 242, id: 1, location: oregonTerms.armoryCorridor,
            los: [
              [{top: 231, left: 253}, {top: 36, left: 254}, {top: 36, left: 227},
                {top: 46, left: 223}, {top: 36, left: 150}],
              [{top: 80, left: 148}, {top: 61, left: 223}]
            ]
          },
          {
            floor: 1, top: 86, left: 168, id: 2, location: oregonTerms.lobby,
            los: [
              [{top: 75, left: 331}, {top: 89, left: 239}, {top: 77, left: 239}, {top: 77, left: 43}],
              [{top: 104, left: 241}, {top: 114, left: 331}]
            ]
          },
          {
            floor: 1, top: 203, left: -125, id: 3, location: oregonTerms.showerCorridor,
            los: [
              [{top: 75, left: -111}, {top: 213, left: -111}, {top: 213, left: -300}],
              [{top: 72, left: -139}, {top: 4, left: -153}],
              [{top: 72, left: -125}, {top: -50, left: -125}]
            ]
          },
          {
            floor: 1, top: -192, left: 230, id: 4, location: oregonTerms.rearStage,
            los: [
              [{top: -179, left: 43}, {top: -179, left: 245}, {top: -278, left: 245}],
              [{top: -224, left: 187}, {top: -247, left: 134}]
            ]
          },
          {
            floor: 0, top: 74, left: -53, id: 5, location: oregonTerms.freezer,
            los: [
              [{top: 58, left: 16}, {top: 72, left: 16}, {top: 72, left: 24}, {top: 63, left: 65}],
              [{top: 164, left: -68}, {top: 198, left: -63}]
            ]
          },
          {
            outdoor: true, top: 187, left: -502, id: 6, location: oregonTerms.junkyard,
            los: [[{top: -218, left: -548}, {top: 465, left: -499}]]
          },
          {
            outdoor: true, top: 216, left: 413, id: 7, location: oregonTerms.parking,
            los: [[{top: 444, left: 400}, {top: -29, left: 440}]]
          },
          {
            outdoor: true, top: -420, left: 325, id: 8, location: oregonTerms.constructionSite,
            los: [[{top: -411, left: 82}, {top: -427, left: 327}, {top: -331, left: 547}]]
          }
        ],
        ceilingHatches: [
          { floor: 0, top: 162, left: 177 },
          { floor: 0, top: 107, left: 13 },
          { floor: 0, top: -111, left: 183 },
          { floor: 1, top: 157, left: 318 },
          { floor: 1, top: 28, left: -90 }
        ],
        skylights: [],
        droneTunnels: [
          { floor: 0, top: 35, left: 236, rotate: 0, size: 47 },
          { floor: 0, top: 30, left: 67, rotate: 90, size: 8 },
          { floor: 0, top: 20, left: 120, rotate: 90, size: 10 },
          { floor: 1, top: -123, left: 91, rotate: 0, size: 8 },
          { floor: 1, top: -21, left: 73, rotate: 90, size: 10 },
          { floor: 1, top: 72, left: 57, rotate: 0, size: 10 },
          { floor: 1, top: 220, left: -119, rotate: 0, size: 12 },
          { floor: 1, top: 213, left: 0, rotate: 0, size: 23 },
          { floor: 1, top: -17, left: -307, rotate: 90, size: 14 },
          { floor: 2, top: -143, left: 148, rotate: 90, size: 14 }
        ],
        spawnPoints: [
          { letter: spawnTerms.a, top: 318, left: -692, description: oregonTerms.junkyard },
          { letter: spawnTerms.b, top: 487, left: 479, description: oregonTerms.street },
          { letter: spawnTerms.c, top: -353, left: 645, description: oregonTerms.constructionSite }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: 468, left: 260, description: oregonTerms.street, hardToRead: true },
          { outdoor: true, top: 143, left: -594, description: oregonTerms.junkyard, hardToRead: true },
          { outdoor: true, top: 325, left: -201, description: oregonTerms.busYard, hardToRead: true },
          { outdoor: true, top: 344, left: 172, description: oregonTerms.mainEntrance, hardToRead: true },
          { outdoor: true, top: 277, left: 407, description: oregonTerms.parking, hardToRead: true },
          { outdoor: true, top: -24, left: 407, description: oregonTerms.constructionSite, veryHardToRead: true },
          { outdoor: true, top: -370, left: 207, description: oregonTerms.constructionSite, hardToRead: true },
          { outdoor: true, top: -112, left: -243, description: oregonTerms.farmlands, hardToRead: true },
          { outdoor: true, top: -226, left: -5, description: oregonTerms.shootingRange, hardToRead: true },

          // Basement
          { floor: 0, top: 187, left: 163, description: oregonTerms.laundryStorage, hardToRead: true },
          { floor: 0, top: 171, left: 213, description: oregonTerms.laundryStairs, hardToRead: true, smaller: true },
          { floor: 0, top: 184, left: -61, description: oregonTerms.freezerStairs, hardToRead: true },
          { floor: 0, top: 98, left: -14, description: oregonTerms.freezer, hardToRead: true },
          { floor: 0, top: 98, left: 131, description: oregonTerms.laundryRoom, hardToRead: true },
          { floor: 0, top: -9, left: 93, description: oregonTerms.basementCorridor, hardToRead: true },
          { floor: 0, top: 35, left: 150, description: oregonTerms.supplyCloset, hardToRead: true },
          { floor: 0, top: -29, left: 195, description: oregonTerms.supplyRoom, hardToRead: true },
          { floor: 0, top: -87, left: 266, description: oregonTerms.blueBunker, hardToRead: true },
          { floor: 0, top: -102, left: 358, description: oregonTerms.bunker, hardToRead: true },
          { floor: 0, top: -149, left: 124, description: oregonTerms.boilerRoom, hardToRead: true },
          { floor: 0, top: -112, left: 197, description: oregonTerms.electricRoom, hardToRead: true },
          { floor: 0, top: -241, left: 146, description: oregonTerms.backStairs },

          // 1F
          { floor: 1, top: 190, left: 106, description: oregonTerms.classroom, hardToRead: true },
          { floor: 1, top: 145, left: 171, description: oregonTerms.lobby, hardToRead: true },
          { floor: 1, top: 189, left: 225, description: oregonTerms.mainStairs, hardToRead: true, smaller: true },
          { floor: 1, top: 208, left: -197, description: oregonTerms.showerCorridor, hardToRead: true },
          { floor: 1, top: 161, left: -17, description: oregonTerms.securityCorridor, hardToRead: true },
          { floor: 1, top: 191, left: -27, description: oregonTerms.whiteStairs, hardToRead: true },
          { floor: 1, top: 148, left: 292, description: oregonTerms.garage, hardToRead: true },
          { floor: 1, top: 94, left: -332, description: oregonTerms.smallTower, hardToRead: true },
          { floor: 1, top: 138, left: -208, description: oregonTerms.showers, hardToRead: true },
          { floor: 1, top: 111, left: -36, description: oregonTerms.security, hardToRead: true },
          { floor: 1, top: 15, left: -192, description: oregonTerms.diningHall, hardToRead: true },
          { floor: 1, top: 27, left: -45, description: oregonTerms.kitchen, hardToRead: true },
          { floor: 1, top: -39, left: 148, description: oregonTerms.meetingHall, hardToRead: true },
          { floor: 1, top: 59, left: 153, description: oregonTerms.split, hardToRead: true },
          { floor: 1, top: -144, left: 71, description: oregonTerms.kitchenCorridor, hardToRead: true, smaller: true },
          { floor: 1, top: -186, left: 151, description: oregonTerms.rearStage, hardToRead: true },
          { floor: 1, top: -250, left: 158, description: oregonTerms.towerStairs, hardToRead: true },

          // 2F
          { floor: 2, top: 251, left: 152, description: oregonTerms.balcony, hardToRead: true },
          { floor: 2, top: 188, left: 240, description: oregonTerms.mainStairs, hardToRead: true },
          { floor: 2, top: 84, left: -145, description: oregonTerms.diningHallRoof, hardToRead: true },
          { floor: 2, top: 205, left: -27, description: oregonTerms.whiteStairs, hardToRead: true },
          { floor: 2, top: 214, left: 115, description: oregonTerms.walkIn, hardToRead: true },
          { floor: 2, top: 167, left: 183, description: oregonTerms.masterBedroom, hardToRead: true },
          { floor: 2, top: 171, left: -268, description: oregonTerms.smallTowerRoof, hardToRead: true },
          { floor: 2, top: -19, left: -253, description: oregonTerms.smallTowerRoof, hardToRead: true },
          { floor: 2, top: 132, left: -29, description: oregonTerms.dormMainHall, hardToRead: true },
          { floor: 2, top: 80, left: 104, description: oregonTerms.dormMainHall, hardToRead: true },
          { floor: 2, top: 153, left: 94, description: oregonTerms.gameRoom, hardToRead: true },
          { floor: 2, top: 140, left: 302, description: oregonTerms.armory, hardToRead: true },
          { floor: 2, top: 112, left: 241, description: oregonTerms.armoryCorridor, hardToRead: true, smaller: true },
          { floor: 2, top: 71, left: -338, description: oregonTerms.smallTower, hardToRead: true },
          { floor: 2, top: 71, left: -230, description: oregonTerms.smallTowerOffice, hardToRead: true },
          { floor: 2, top: 75, left: 184, description: oregonTerms.trophyRoom, hardToRead: true },
          { floor: 2, top: 36, left: -26, description: oregonTerms.kidsDorms, hardToRead: true },
          { floor: 2, top: 10, left: 115, description: oregonTerms.attic, hardToRead: true },
          { floor: 2, top: -82, left: 174, description: oregonTerms.attic, hardToRead: true },
          { floor: 2, top: -110, left: 80, description: oregonTerms.meetingHallRoof, hardToRead: true },
          { floor: 2, top: -60, left: 233, description: oregonTerms.meetingHallRoof, hardToRead: true },
          { floor: 2, top: -189, left: 175, description: oregonTerms.bigTower, hardToRead: true },
          { floor: 2, top: -251, left: 168, description: oregonTerms.towerStairs, hardToRead: true },

          // 3F
          { floor: 3, top: 171, left: -32, description: oregonTerms.dormsRoof, hardToRead: true },
          { floor: 3, top: 31, left: -32, description: oregonTerms.dormsRoof, hardToRead: true },
          { floor: 3, top: 201, left: 177, description: oregonTerms.dormsRoof, hardToRead: true },
          { floor: 3, top: 84, left: -145, description: oregonTerms.diningHallRoof, hardToRead: true },
          { floor: 3, top: 73, left: -257, description: oregonTerms.smallTowerRoof, hardToRead: true },
          { floor: 3, top: 142, left: 321, description: oregonTerms.garageRoof, hardToRead: true },
          { floor: 3, top: -110, left: 80, description: oregonTerms.meetingHallRoof, hardToRead: true },
          { floor: 3, top: -60, left: 233, description: oregonTerms.meetingHallRoof, hardToRead: true },
          { floor: 3, top: 17, left: 154, description: oregonTerms.meetingHallRoof, hardToRead: true },
          { floor: 3, top: -198, left: 108, description: oregonTerms.towerRoof, hardToRead: true },
          { floor: 3, top: -218, left: 225, description: oregonTerms.bigTower, hardToRead: true },

          // 4F
          { floor: 4, top: 171, left: -32, description: oregonTerms.dormsRoof, hardToRead: true },
          { floor: 4, top: 31, left: -32, description: oregonTerms.dormsRoof, hardToRead: true },
          { floor: 4, top: 201, left: 177, description: oregonTerms.dormsRoof, hardToRead: true },
          { floor: 4, top: 84, left: -145, description: oregonTerms.diningHallRoof, hardToRead: true },
          { floor: 4, top: 73, left: -257, description: oregonTerms.smallTowerRoof, hardToRead: true },
          { floor: 4, top: 142, left: 321, description: oregonTerms.garageRoof, hardToRead: true },
          { floor: 4, top: -110, left: 80, description: oregonTerms.meetingHallRoof, hardToRead: true },
          { floor: 4, top: -60, left: 233, description: oregonTerms.meetingHallRoof, hardToRead: true },
          { floor: 4, top: 17, left: 154, description: oregonTerms.meetingHallRoof, hardToRead: true },
          { floor: 4, top: -198, left: 108, description: oregonTerms.towerRoof, hardToRead: true },
          { floor: 4, top: -232, left: 238, description: oregonTerms.towerRoof, hardToRead: true }
        ]
      },
      outback: {
        name: mapNameTerms.outback,
        imgUrlPrefix: 'outback',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        floors: [
          { index: 0, top: -1118, left: -2538, background: true, name: '', dontSelect: true },
          // top: 969 left: 2564
          { index: 1, top: -149, left: 26, name: floorTerms.firstFloor, default: true },
          // top: 967 left: 2568
          { index: 2, top: -151, left: 30, name: floorTerms.secondFloor },
          // top: 963 left: 2560
          { index: 3, top: -155, left: 22, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: -43, left: 275, smaller: true },
          { floor: 2, top: 187, left: 488, smaller: true },
          { floor: 1, top: -48, left: 331, smaller: true },
          { floor: 1, top: 267, left: 632, smaller: true }
        ],
        bombObjectives: [
          { floor: 2, top: -63, left: 275, set: 1, letter: objectiveTerms.bombShortA, smaller: true  },
          { floor: 2, top: 10, left: 388, set: 1, letter: objectiveTerms.bombShortB, smaller: true  },
          { floor: 2, top: 101, left: 566, set: 2, letter: objectiveTerms.bombShortA, smaller: true  },
          { floor: 2, top: 211, left: 493, set: 2, letter: objectiveTerms.bombShortB, smaller: true  },
          { floor: 1, top: -19, left: 221, set: 3, letter: objectiveTerms.bombShortA, smaller: true  },
          { floor: 1, top: -25, left: 309, set: 3, letter: objectiveTerms.bombShortB, smaller: true  },
          { floor: 1, top: 189, left: 609, set: 4, letter: objectiveTerms.bombShortA, smaller: true  },
          { floor: 1, top: 210, left: 465, set: 4, letter: objectiveTerms.bombShortB, smaller: true  }
        ],
        secureObjectives: [
          // dorms office garage kitchen
          { floor: 2, top: 4, left: 144, smaller: true },
          { floor: 2, top: 192, left: 464, smaller: true },
          { floor: 1, top: 325, left: 497, smaller: true },
          { floor: 1, top: 109, left: 468, smaller: true }
        ],
        zoomPoints: {
          topLeft: { top: -300, left: 0 },
          bottomRight: { top: 500, left: 500}
        },
        compassPoints: { top: 398, left: -110 },
        ladders: [],
        cameras: [
          { outdoor: true, top: 456, left: 815, id: 1, location: outbackTerms.gasPumps,
            los: [
              [{ top: 640, left: 713 }, { top: 456, left: 835 }, { top: -330, left: 745 }]
            ]
          },
          { outdoor: true, top: -211, left: 590, id: 2, location: outbackTerms.picnicArea,
            los: [
              [{ top: -201, left: 150 }, { top: -211, left: 590 }, { top: -270, left: 800 }]
            ]
          },
          { outdoor: true, top: 339, left: 241, id: 3, location: outbackTerms.motelParkingLot,
            los: [
              [{ top: 250, left: 106 }, { top: 480, left: 358 }],
              [{ top: -9, left: -41 }, { top: 160, left: 104 }],
              [{ top: -150, left: -25 }, { top: 69, left: 85 }]
            ]
          },
          { floor: 2, top: -101, left: 319, id: 4, location: outbackTerms.pianoRoom,
            los: [
              [{ top: -40, left: 371 }, { top: -21, left: 385 }],
              [{ top: -11, left: 302 }, { top: 10, left: 300 }]
            ]
          },
          { floor: 2, top: 452, left: 493, id: 5, location: outbackTerms.garageLounge,
            los: [
              [{ top: 310, left: 415 }, { top: 334, left: 441 }],
              [{ top: 243, left: 452 }, { top: 270, left: 460 }],
              [{ top: 235, left: 497 }, { top: 198, left: 498 }, { top: 198, left: 527 }, { top: 235, left: 518 }],
              [{ top: 235, left: 530 }, { top: 170, left: 542 }, { top: 170, left: 562 }, { top: 235, left: 550 }]
            ]
          },
          { floor: 1, otherFloor: 'up', top: 443, left: 497, id: 5, location: outbackTerms.garageLounge,
            los: [
              [{ top: 241, left: 450 }, { top: 453, left: 450 }],
              [{ top: 264, left: 535 }, { top: 453, left: 535 }]
            ]
          },
          { floor: 2, top: -56, left: 568, id: 6, location: outbackTerms.mezzanine,
            los: [
              [{ top: -63, left: 489 }, { top: -63, left: 576 }, { top: 27, left: 576 }],
              [{ top: 24, left: 529 }, { top: 65, left: 509 }],
              [{ top: 67, left: 502 }, { top: 162, left: 460 }],
              [{ top: 38, left: 486 }, { top: 125, left: 430 }]
            ]
          },
          { floor: 1, otherFloor: 'up', top: -56, left: 568, id: 6, location: outbackTerms.mezzanine, los: [] },
          { floor: 1, top: 28, left: 132, id: 7, location: outbackTerms.backEntrance, los: [] }
        ],
        ceilingHatches: [
          { floor: 1, top: 54, left: 144 },
          { floor: 1, top: -93, left: 258 },
          { floor: 1, top: 147, left: 475 }
        ],
        skylights: [],
        droneTunnels: [
          { floor: 1, top: 302, left: 690, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: 254, left: 554, rotate: 90, size: 12 },
          { floor: 1, top: 457, left: 497, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: 340, left: 421, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: 117, left: 407, rotate: 90, size: 12 },
          { floor: 1, top: -17, left: 435, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: -144, left: 290, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: 67, left: 97, rotate: 0, size: DRONE_SMALL },

          { floor: 2, top: 70, left: 189, rotate: 0, size: DRONE_SMALL },
          { floor: 2, top: 164, left: 418, rotate: 0, size: DRONE_SMALL },
          { floor: 2, top: -38, left: 483, rotate: 90, size: DRONE_SMALL },
          { floor: 2, top: 260, left: 617, rotate: 0, size: 49 },
          { floor: 2, top: 278, left: 620, rotate: 90, size: DRONE_SMALL }
        ],
        spawnPoints: [
          { letter: spawnTerms.a, top: -406, left: 634, description: outbackTerms.storageYard },
          { letter: spawnTerms.b, top: 755, left: 614, description: outbackTerms.gasPumps },
          { letter: spawnTerms.c, top: -145, left: -236, description: outbackTerms.camping }
        ],
        roomLabels: [
          { outside: true, top: 549, left: 319, description: outbackTerms.gasPumps, veryHardToRead: true },
          { outside: true, top: 444, left: 654, description: outbackTerms.gasPumps, veryHardToRead: true },
          { outside: true, top: 394, left: 369, description: outbackTerms.motelParkingLot, veryHardToRead: true },
          { outside: true, top: 224, left: 211, description: outbackTerms.motelParkingLot, veryHardToRead: true },
          { outside: true, top: -28, left: 744, description: outbackTerms.restaurantParking, veryHardToRead: true },
          { outside: true, top: 262, left: 729, description: outbackTerms.restaurantParking, veryHardToRead: true },
          { floor: 1, top: 96, left: 118, description: outbackTerms.motelWalkway, veryHardToRead: true },
          { floor: 1, top: 148, left: 258, description: outbackTerms.motelWalkway, veryHardToRead: true },
          { floor: 1, top: -43, left: 647, description: outbackTerms.restaurantEntrance, veryHardToRead: true },
          { floor: 1, top: -57, left: 458, description: outbackTerms.loadingBay, hardToRead: true },
          { outside: true, top: -155, left: 468, description: outbackTerms.picnicArea, veryHardToRead: true },
          { outside: true, top: -195, left: 184, description: outbackTerms.miniGolf, veryHardToRead: true },

          { floor: 1, top: 292, left: 434, description: outbackTerms.garageStairs, hardToRead: true },
          { floor: 1, top: -64, left: 68, description: outbackTerms.motelBackStairs, hardToRead: true },
          { floor: 1, top: -84, left: 112, description: outbackTerms.backStairs, hardToRead: true },
          { floor: 1, top: -83, left: 383, description: outbackTerms.pianoStairs, veryHardToRead: true },
          { floor: 1, top: -79, left: 579, description: outbackTerms.restaurantStairs, veryHardToRead: true },
          { floor: 1, top: -103, left: 496, description: outbackTerms.terraceStairs, veryHardToRead: true },

          { floor: 1, top: 400, left: 495, description: outbackTerms.garage, hardToRead: true },
          { floor: 1, top: 300, left: 504, description: outbackTerms.garage, hardToRead: true },
          { floor: 1, top: 380, left: 574, description: outbackTerms.waitingRoom, veryHardToRead: true },
          { floor: 1, top: 324, left: 642, description: outbackTerms.convenienceStore, hardToRead: true },
          { floor: 1, top: 281, left: 574, description: outbackTerms.beerFridge, hardToRead: true },
          { floor: 1, top: 206, left: 644, description: outbackTerms.gearStore, hardToRead: true },
          { floor: 1, top: 205, left: 515, description: outbackTerms.compressorRoom, hardToRead: true },
          { floor: 1, top: 149, left: 375, description: outbackTerms.motelReception, hardToRead: true },
          { floor: 1, top: 95, left: 250, description: outbackTerms.reptileHallway, hardToRead: true },
          { floor: 1, top: 18, left: 380, description: outbackTerms.reptileHallway, hardToRead: true },
          { floor: 1, top: 99, left: 459, description: outbackTerms.kitchen, hardToRead: true },
          { floor: 1, top: 124, left: 554, description: outbackTerms.restaurant, hardToRead: true },
          { floor: 1, top: -4, left: 554, description: outbackTerms.restaurant, hardToRead: true },
          { floor: 1, top: -2, left: 120, description: outbackTerms.backEntrance, hardToRead: true },
          { floor: 1, top: -35, left: 183, description: outbackTerms.bushrangerRoom, veryHardToRead: true },
          { floor: 1, top: -49, left: 321, description: outbackTerms.natureRoom, hardToRead: true },
          { floor: 1, top: 60, left: 625, description: outbackTerms.restaurantLobby, hardToRead: true },
          { floor: 1, top: 11, left: 459, description: outbackTerms.kitchenHallway, hardToRead: true },
          { floor: 1, top: -92, left: 203, description: outbackTerms.bathroomHall, veryHardToRead: true },
          { floor: 1, top: -48, left: 237, description: outbackTerms.closet, veryHardToRead: true },
          { floor: 1, top: -100, left: 256, description: outbackTerms.bathroom, hardToRead: true },

          { floor: 2, top: 267, left: 438, description: outbackTerms.garageStairs, hardToRead: true },
          { floor: 2, top: -64, left: 68, description: outbackTerms.motelBackStairs, hardToRead: true },
          { floor: 2, top: -84, left: 112, description: outbackTerms.backStairs, hardToRead: true },
          { floor: 2, top: -83, left: 383, description: outbackTerms.pianoStairs, veryHardToRead: true },
          { floor: 2, top: -79, left: 579, description: outbackTerms.restaurantStairs, veryHardToRead: true },
          { floor: 2, top: -103, left: 496, description: outbackTerms.terraceStairs, veryHardToRead: true },

          { floor: 2, top: 407, left: 494, description: outbackTerms.garageLounge, hardToRead: true },
          { floor: 2, top: 279, left: 507, description: outbackTerms.garageLounge, hardToRead: true },
          { floor: 2, top: 307, left: 626, description: outbackTerms.convenienceStoreRoof, hardToRead: true },
          { floor: 2, top: 140, left: 250, description: outbackTerms.motelBalcony, hardToRead: true },
          { floor: 2, top: 215, left: 451, description: outbackTerms.office, hardToRead: true },
          { floor: 2, top: 206, left: 607, description: outbackTerms.officeSupplies, hardToRead: true },
          { floor: 2, top: 110, left: 467, description: outbackTerms.mechanicalBull, hardToRead: true },
          { floor: 2, top: 127, left: 545, description: outbackTerms.partyRoom, hardToRead: true },
          { floor: 2, top: 127, left: 607, description: outbackTerms.electricalRoom, hardToRead: true },
          { floor: 2, top: 51, left: 372, description: outbackTerms.gamesRoom, veryHardToRead: true },
          { floor: 2, top: 38, left: 127, description: outbackTerms.dorms, hardToRead: true },
          { floor: 2, top: 51, left: 274, description: outbackTerms.showers, hardToRead: true },
          { floor: 2, top: -3, left: 513, description: outbackTerms.mezzanine, hardToRead: true },
          { floor: 2, top: -47, left: 251, description: outbackTerms.laundry, veryHardToRead: true },
          { floor: 2, top: 11, left: 250, description: outbackTerms.motelHallway, hardToRead: true },
          { floor: 2, top: -51, left: 338, description: outbackTerms.pianoRoom, hardToRead: true },
          { floor: 2, top: -22, left: 446, description: outbackTerms.terrace, hardToRead: true },

          { floor: 3, top: 307, left: 626, description: outbackTerms.convenienceStoreRoof, hardToRead: true },
          { floor: 3, top: 0, left: 550, description: outbackTerms.restaurantRoof, hardToRead: true },
          { floor: 3, top: 280, left: 490, description: outbackTerms.garageRoof, hardToRead: true },
          { floor: 3, top: 0, left: 220, description: outbackTerms.motelRoof, hardToRead: true }
        ]
      },
      plane: {
        name: mapNameTerms.plane,
        imgUrlPrefix: 'plane',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        floors: [
          { index: 1, top: -715, left: -1275, background: true, name: floorTerms.firstFloor },
          { index: 2, top: -715, left: -920, name: floorTerms.secondFloor, default: true },
          { index: 3, top: -715, left: -920, name: floorTerms.thirdFloor },
          { index: 4, top: -715, left: -920, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: 30, left: 358, smaller: true },
          { floor: 2, top: -12, left: -278, smaller: true },
          { floor: 1, top: -47, left: 75, smaller: true },
          { floor: 2, top: 30, left: -15, smaller: true }
        ],
        bombObjectives: [
          { floor: 1, top: -10, left: 103, set: 3, letter: objectiveTerms.bombShortB, smaller: true },
          { floor: 1, top: -33, left: -203, set: 3, letter: objectiveTerms.bombShortA, smaller: true },
          { floor: 2, top: 31, left: 293, set: 1, letter: objectiveTerms.bombShortB, smaller: true },
          { floor: 2, top: -28, left: 459, set: 1, letter: objectiveTerms.bombShortA, smaller: true },
          { floor: 2, top: 30, left: 14, set: 2, letter: objectiveTerms.bombShortA, smaller: true },
          { floor: 2, top: -45, left: -105, set: 2, letter: objectiveTerms.bombShortB, smaller: true }
        ],
        secureObjectives: [
          { floor: 1, top: -10, left: 75, smaller: true },
          { floor: 2, top: -45, left: -140, smaller: true },
          { floor: 2, top: 31, left: 325, smaller: true },
          { floor: 2, top: 30, left: -43, smaller: true }
        ],
        zoomPoints: {
          topLeft: { top: -218, left: -515 },
          bottomRight: { top: 178, left: 482 }
        },
        compassPoints: {
          top: 97, left: 418
        },
        ladders: [
          { floor: 2, top: -33, left: -186, otherFloor: 'up' },
          { floor: 3, top: -33, left: -186, otherFloor: 'down' },
          { floor: 2, top: -4, left: -373, otherFloor: 'up' },
          { floor: 3, top: -4, left: -373, otherFloor: 'down' },
          { floor: 1, top: -166, left: -232, otherFloor: 'up' },
          { floor: 2, top: -166, left: -232, otherFloor: 'down' },
          { floor: 1, top: -127, left: -330, otherFloor: 'up' },
          { floor: 2, top: -127, left: -330, otherFloor: 'down' },
          { floor: 1, top: -323, left: -304, otherFloor: 'up' },
          { floor: 2, top: -323, left: -304, otherFloor: 'down' },
          { floor: 1, top: -152, left: 248, otherFloor: 'up' },
          { floor: 2, top: -152, left: 248, otherFloor: 'down' },
          { floor: 1, top: -296, left: 145, otherFloor: 'up' },
          { floor: 2, top: -296, left: 145, otherFloor: 'down' },
          { floor: 1, top: 136, left: 329, otherFloor: 'up' },
          { floor: 2, top: 136, left: 329, otherFloor: 'down' },
          { floor: 1, top: 207, left: 335, otherFloor: 'up' },
          { floor: 2, top: 207, left: 335, otherFloor: 'upanddown' },
          { floor: 3, top: 207, left: 335, otherFloor: 'down' },
          { floor: 2, top: 156, left: -470, otherFloor: 'up' },
          { floor: 3, top: 156, left: -470, otherFloor: 'upanddown' },
          { floor: 4, top: 156, left: -470, otherFloor: 'down' },
          { floor: 1, top: 218, left: -497, otherFloor: 'up' },
          { floor: 2, top: 218, left: -497, otherFloor: 'down' }
        ],
        cameras: [
          {
            floor: 3, top: -14, left: 248, id: 1, location: planeTerms.cabinStaff,
            los: [
              [{top: -27, left: 142}, {top: -27, left: 265}, {top: 35, left: 265}],
              [{top: 17, left: 148}, {top: 0, left: 216}]
            ]
          },
          {
            floor: 2, top: -60, left: 188, id: 2, location: planeTerms.frontHallway,
            los: [
              [{top: 51, left: 228}, {top: -1, left: 214}],
              [{top: -27, left: 218}, {top: -5, left: 232}],
              [{top: 51, left: 206}, {top: -32, left: 200}, {top: -32, left: 173}, {top: -73, left: 173}, {top: -73, left: 299}, {top: -49, left: 299}, {top: -39, left: 436}]
            ]
          },
          {
            floor: 2, top: -41, left: -215, id: 3, location: planeTerms.pressSectionA,
            los: [
              [{top: -72, left: -318}, {top: -72, left: -199}, {top: -24, left: -199}, {top: 12, left: -192}],
              [{top: 10, left: -318}, {top: -25, left: -234}]
            ]
          },
          {
            floor: 1, top: 33, left: 21, id: 4, location: planeTerms.luggageHold,
            los: [
              [{top: -67, left: 6}, {top: 47, left: 6}, {top: 47, left: 116}],
              [{top: -6, left: 119}, {top: -28, left: 170}]
            ]
          },
          {
            floor: 1, top: -49, left: -289, id: 5, location: planeTerms.cargoHold,
            los: [[{top: 44, left: -304}, {top: -62, left: -304}, {top: -62, left: -100}]]
          }
        ],
        ceilingHatches: [
          { floor: 2, top: 17, left: -116 },
          { floor: 2, top: -34, left: 49 },
          { floor: 2, top: 22, left: 111 },
          { floor: 2, top: 22, left: 407 },
          { floor: 1, top: 24, left: 72 },
          { floor: 1, top: -2, left: -218 },
          { floor: 1, top: 8, left: -78 },
          { floor: 3, top: -10, left: -496 }
        ],
        skylights: [],
        droneTunnels: [
          { floor: 2, top: -42, left: 172, rotate: 90, size: DRONE_SMALL, alternate: true }
        ],
        spawnPoints: [
          { letter: spawnTerms.a, top: -428, left: 434, description: planeTerms.spawnOfficialEntrance },
          { letter: spawnTerms.b, top: -489, left: -408, description: planeTerms.spawnReporterEntrance },
          { letter: spawnTerms.c, top: 385, left: 342, description: planeTerms.spawnServiceEntrance }
        ],
        roomLabels: [
          { floor: 2, top: -1, left: 325, description: planeTerms.meetingRoom, smaller: true, hardToRead: true },
          { floor: 2, top: -20, left: 408, description: planeTerms.frontHallway, smaller: true, hardToRead: true },
          { floor: 2, top: 9, left: 474, description: planeTerms.executiveOffice, smaller: true, hardToRead: true },
          { outdoor: true, top: -295, left: 389, description: planeTerms.mainEntrance },
          { floor: 2, top: -37, left: 247, description: planeTerms.frontHallway.removeBreakTags(), smaller: true,  hardToRead: true },
          { floor: 2, top: -5, hardToRead: true, left: 240, smaller: true, description: planeTerms.frontStairs },
          { floor: 2, top: 33, left: 233, description: planeTerms.pantry, smaller: true, hardToRead: true },
          { floor: 2, top: 33, left: 158, description: planeTerms.kitchen, smaller: true },
          { floor: 2, top: -32, left: 114, smaller: true, description: planeTerms.executiveHallway, hardToRead: true },
          { floor: 2, top: -11, left: -15, description: planeTerms.executiveBedroom, smaller: true, hardToRead: true },
          { floor: 2, top: 40, left: 68, hardToRead: true, smaller: true, description: planeTerms.changeRoom },
          { floor: 2, top: -4, hardToRead: true, smaller: true, left: 84, description: planeTerms.laund },
          { outdoor: true, top: 162, left: 277, hardToRead: true, description: planeTerms.frontServiceEntrance },
          { outdoor: true, top: 223, left: -85, description: planeTerms.rightWing },
          { outdoor: true, top: 221, left: -609, hardToRead: true, description: planeTerms.backServiceEntrance },
          { outdoor: true, top: -295, left: -367, description: planeTerms.reporterEntrance },
          { outdoor: true , top: -295, left: -124, description: planeTerms.leftWing },
          { floor: 2, top: -3, left: -109, description: planeTerms.staffSection, smaller: true, hardToRead: true },
          { floor: 2, top: 0, left: -184, smaller: true, description: planeTerms.securityRoom, hardToRead: true },
          { floor: 2, top: -44, left: -270, description: planeTerms.pressSectionA, smaller: true, hardToRead: true },
          { floor: 2, top: -44, left: -375, description: planeTerms.pressSectionB, smaller: true, hardToRead: true },
          { floor: 2, top: 2, hardToRead: true, smaller: true, left: -408, description: planeTerms.backStairs },
          { floor: 1, top: 2, hardToRead: true, smaller: true, left: -400, description: planeTerms.backStairs },
          { floor: 2, top: 2, left: -337, smaller: true, description: planeTerms.pressBathroom },
          { floor: 1, top: 34, left: -202, description: planeTerms.cargoHold, hardToRead: true, smaller: true },
          { floor: 1, top: -13, left: -48, smaller: true, description: planeTerms.serviceCorridor, hardToRead: true },
          { floor: 1, top: 16, left: -44, description: planeTerms.storage, smaller: true, hardToRead: true },
          { floor: 1, top: -3, left: 38, description: planeTerms.luggageHold, smaller: true, hardToRead: true },
          { floor: 1, top: 25, left: 174, smaller: true, description: planeTerms.firstAidStation, hardToRead: true },
          { floor: 1, top: 20, left: 262, smaller: true, description: planeTerms.cargoFrontEntrance, hardToRead: true },
          { floor: 1, top: -6, left: 253, smaller: true, description: planeTerms.frontStairs, hardToRead: true },
          { floor: 2, top: -5, left: 160, smaller: true, description: planeTerms.cockpitStairs },
          { floor: 3, top: -5, left: 175, smaller: true, description: planeTerms.cockpitStairs },
          { floor: 3, top: 20, left: 241, hardToRead: true, description: planeTerms.cabinStaff, smaller: true },
          { floor: 3, top: 3, left: 315, description: planeTerms.radioCabin, hardToRead: true },
          { floor: 3, top: 3, left: 402, description: planeTerms.cabin, hardToRead: true },
          { floor: 3, top: 99, left: 358, hardToRead: true, description: planeTerms.caterer },
          { floor: 3, top: 3, left: 8, hardToRead: true, description: planeTerms.serverRoomA },
          { floor: 3, top: 3, left: -221, hardToRead: true, description: planeTerms.serverRoomB },
          { floor: 3, top: 0, left: -428, hardToRead: true, description: planeTerms.serverRoomB },
          { floor: 1, top: -30, left: 222, smaller: true, description: planeTerms.technicalSeating },
          { floor: 2, top: 112, left: -453, hardToRead: true, description: planeTerms.caterer },
          { floor: 2, top: -54, left: -177, hardToRead: true, description: planeTerms.ladderRoom, smaller: true }
        ]
      },
      skyscraper: {
        name: mapNameTerms.skyscraper,
        imgUrlPrefix: 'skyscraper',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        floors: [
          { index: 1, top: -175, left: -630, background: true, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -175, left: -630, name: floorTerms.secondFloor },
          { index: 3, top: -175, left: -630, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: 295, left: 200 },
          { floor: 2, top: 390, left: 500 },
          { floor: 1, top: 340, left: 45 },
          { floor: 1, top: 495, left: 455 }
        ],
        bombObjectives: [
          { floor: 2, top: 320, left: 175, set: 1, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 285, left: 30, set: 1, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 500, left: 545, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 385, left: 495, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 1, top: 335, left: 40, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 435, left: 50, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 1, top: 450, left: 550, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 490, left: 450, set: 4, letter: objectiveTerms.bombShortB }
        ],
        secureObjectives: [
          { floor: 2, top: 290, left: 35 },
          { floor: 2, top: 525, left: 520 },
          { floor: 1, top: 330, left: 35 },
          { floor: 1, top: 455, left: 555 }
        ],
        zoomPoints: {
          topLeft: { top: -105, left: -75 },
          bottomRight: { top: 600, left: 655 }
        },
        compassPoints: {
          top: 370, left: 875
        },
        cameras: [
          {
            floor: 1, otherFloor: 'up', top: 365, left: 310, id: 1, location: skyscraperTerms.drums,
            los: [[{top: 315, left: 250}, {top: 365, left: 310}, {top: 245, left: 295}]]
          },
          {
            floor: 2, top: 365, left: 310, id: 1, location: skyscraperTerms.drums,
            los: [[{top: 230, left: 245}, {top: 365, left: 310}, {top: 520, left: 310}]]
          },
          {
            floor: 1, top: 145, left: 115, id: 2, location: skyscraperTerms.restaurant,
            los: [[{top: 385, left: 180}, {top: 265, left: 145}, {top: 265, left: 110}, {top: 145, left: 115}, {top: 145, left: 230}, {top: 265, left: 230}, {top: 265, left: 185}, {top: 380, left: 255}]]
          },
          {
            floor: 1, otherFloor: 'up', top: 280, left: 555, id: 3, location: skyscraperTerms.houseStairs,
            los: [[{top: 360, left: 495}, {top: 280, left: 555}, {top: 315, left: 475}]]
          },
          {
            floor: 2, top: 280, left: 555, id: 3, location: skyscraperTerms.houseStairs,
            los: [[{top: 360, left: 560}, {top: 280, left: 555}, {top: 290, left: 315}]]
          },
          {
            floor: 1, top: 335, left: 415, id: 4, location: skyscraperTerms.houseLobby,
            los: [[{top: 245, left: 415}, {top: 335, left: 415}, {top: 480, left: 495}]]
          },
          {
            outdoor: true, top: -10, left: -30, id: 5, location: skyscraperTerms.westGarden,
            los: [[{top: -80, left: 210}, {top: -10, left: -30}, {top: 570, left: -120}]]
          },
          {
            outdoor: true, top: 150, left: 690, id: 6, location: skyscraperTerms.eastGarden,
            los: [[{top: 620, left: 675}, {top: 150, left: 690}, {top: 135, left: 285}]]
          },
          {
            outdoor: true, top: 670, left: 700, id: 7, location: skyscraperTerms.ventilationUnits,
            los: [[{top: 660, left: 295}, {top: 670, left: 700}, {top: 465, left: 755}]]
          }
        ],
        ceilingHatches: [
          { floor: 1, top: 527, left: 581 },
          { floor: 1, top: 463, left: 118 }
        ],
        skylights: [],
        droneTunnels: [
          { floor: 1, top: 150, left: 45, rotate: 0, size: 30 },
          { floor: 1, top: 160, left: 55, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: 245, left: 410, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: 245, left: 310, rotate: 90, size: 8 },
          { floor: 1, top: 255, left: 310, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: 535, left: 610, rotate: 90, size: DRONE_SMALL },
          { floor: 2, top: 420, left: 620, rotate: 90, size: DRONE_MED },
          { floor: 2, top: 385, left: 330, rotate: 0, size: DRONE_SMALL },
          { floor: 2, top: 345, left: 250, rotate: 90, size: DRONE_SMALL }
        ],
        spawnPoints: [
          { letter: spawnTerms.a, top: 120, left: -355, description: skyscraperTerms.helipad },
          { letter: spawnTerms.b, top: -100, left: 665, description: skyscraperTerms.tower },
          { letter: spawnTerms.c, top: 680, left: 380, description: skyscraperTerms.ventilationUnits }
        ],
        roomLabels: [
          // first floor
          { floor: 1, top: 505, left: 45, description: skyscraperTerms.kitchen },
          { floor: 1, top: 480, left: 245, description: skyscraperTerms.pantry },
          { floor: 1, top: 485, left: 365, description: skyscraperTerms.delivery },
          { floor: 1, top: 360, left: 470, description: skyscraperTerms.houseLobby },
          { floor: 1, top: 295, left: 275, description: skyscraperTerms.coatCheck, hardToRead: true },
          { floor: 1, top: 290, left: 355, description: skyscraperTerms.reception, hardToRead: true },
          { floor: 1, top: 430, left: 545, description: skyscraperTerms.bedroom, hardToRead: true },
          { floor: 1, top: 390, left: 585, description: skyscraperTerms.bedroomCloset, hardToRead: true, smaller: true },
          { floor: 1, top: 325, left: 585, description: skyscraperTerms.sideEntrance, hardToRead: true, smaller: true },
          { floor: 1, top: 555, left: 540, description: skyscraperTerms.walkIn, hardToRead: true },
          { floor: 1, top: 440, left: 445, description: skyscraperTerms.bathroom, hardToRead: true },
          { floor: 1, top: 300, left: 530, description: skyscraperTerms.houseStairs, hardToRead: true },
          { floor: 1, top: 205, left: 170, description: skyscraperTerms.restaurant },
          { floor: 1, top: 200, left: 70, description: skyscraperTerms.toilet },
          { floor: 1, top: 305, left: 55, description: skyscraperTerms.bbq },
          { floor: 1, top: 375, left: 255, description: skyscraperTerms.bar },
          { floor: 1, top: 355, left: 165, description: skyscraperTerms.sushiBar, hardToRead: true },
          { floor: 1, top: 265, left: 30, description: skyscraperTerms.backHallway },
          { floor: 1, top: 425, left: 185, description: skyscraperTerms.restaurantStairs, hardToRead: true },
          { floor: 1, top: 170, left: 15, description: skyscraperTerms.backStairs, hardToRead: true },

          // second floor
          { floor: 2, top: 460, left: 175, description: skyscraperTerms.restaurantStairs, hardToRead: true },
          { floor: 2, top: 510, left: 25, description: skyscraperTerms.geisha, hardToRead: true },
          { floor: 2, top: 515, left: 125, description: skyscraperTerms.makeupRoom, hardToRead: true },
          { floor: 2, top: 405, left: 140, description: skyscraperTerms.hallway },
          { floor: 2, top: 200, left: 95, description: skyscraperTerms.hallway },
          { floor: 2, top: 275, left: 170, description: skyscraperTerms.teaRoom, hardToRead: true },
          { floor: 2, top: 255, left: 30, description: skyscraperTerms.karaoke, hardToRead: true },
          { floor: 2, top: 170, left: 15, description: skyscraperTerms.backStairs },
          { floor: 2, top: 410, left: 260, description: skyscraperTerms.drums },
          { floor: 2, top: 320, left: 275, description: skyscraperTerms.mezzanine },
          { floor: 2, top: 230, left: 310, description: skyscraperTerms.shrine, hardToRead: true },
          { floor: 2, top: 315, left: 360, description: skyscraperTerms.dragon },
          { floor: 2, top: 430, left: 360, description: skyscraperTerms.terrace, hardToRead: true },
          { floor: 2, top: 330, left: 460, description: skyscraperTerms.vipClearance, hardToRead: true },
          { floor: 2, top: 300, left: 530, description: skyscraperTerms.houseStairs },
          { floor: 2, top: 505, left: 450, description: skyscraperTerms.lounge },
          { floor: 2, top: 365, left: 515, description: skyscraperTerms.exhibitionRoom, hardToRead: true },
          { floor: 2, top: 400, left: 590, description: skyscraperTerms.display, hardToRead: true },
          { floor: 2, top: 465, left: 545, description: skyscraperTerms.office, hardToRead: true },
          { floor: 2, top: 170, left: 205, description: skyscraperTerms.shrineBalcony },
          { floor: 2, top: 580, left: 440, description: skyscraperTerms.officeBalcony, hardToRead: true },
          { floor: 2, top: 295, left: 605, description: skyscraperTerms.officeBalcony, hardToRead: true },
          { floor: 2, top: 555, left: 310, description: skyscraperTerms.terraceBalcony },
          { floor: 2, top: 555, left: 75, description: skyscraperTerms.geishaBalcony },

          // outside
          { outdoor: true, top: 275, left: -95, description: skyscraperTerms.peacefullTree },
          { outdoor: true, top: -85, left: -85, description: skyscraperTerms.contemplationGarden, hardToRead: true },
          { outdoor: true, top: 35, left: -5, description: skyscraperTerms.westGarden },
          { outdoor: true, top: 5, left: 260, description: skyscraperTerms.gazeebo, hardToRead: true },
          { outdoor: true, top: -10, left: 390, description: skyscraperTerms.bridge },
          { outdoor: true, top: 185, left: 530, description: skyscraperTerms.eastGarden },
          { outdoor: true, top: 380, left: 660, description: skyscraperTerms.sandGarden },
          { outdoor: true, top: 360, left: 750, description: skyscraperTerms.sidePath, hardToRead: true },
          { outdoor: true, top: 500, left: 735, description: skyscraperTerms.sideStairs },
          { outdoor: true, top: 695, left: 510, description: skyscraperTerms.ventilationUnits, hardToRead: true },
          { outdoor: true, top: 70, left: 505, description: skyscraperTerms.tower },
          { outdoor: true, top: 170, left: -215, description: skyscraperTerms.helipad, hardToRead: true },
          { floor: 1, top: 215, left: 350, description: skyscraperTerms.mainEntrance },
          { floor: 1, top: 265, left: 570, description: skyscraperTerms.houseBalcony, hardToRead: true }
        ]
      },
      themepark: {
        name: mapNameTerms.themepark,
        imgUrlPrefix: 'themepark',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        floors: [
          { index: 0, top: -806, left: -984, background: true, dontSelect: true },
          { index: 1, top: -295, left: -287, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -292, left: -287, name: floorTerms.secondFloor },
          { index: 3, top: -297, left: -285, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: 123, left: 149, smaller: true },
          { floor: 2, top: 118, left: 1, smaller: true },
          { floor: 1, top: -86, left: 102, smaller: true },
          { floor: 1, top: -97, left: -146, smaller: true }
        ],
        bombObjectives: [
          { floor: 2, top: -99, left: 166, set: 1, letter: objectiveTerms.bombShortA, smaller: true },
          { floor: 2, top: 56, left: 111, set: 1, letter: objectiveTerms.bombShortB, smaller: true },
          { floor: 2, top: -8, left: -16, set: 2, letter: objectiveTerms.bombShortA, smaller: true },
          { floor: 2, top: 111, left: 46, set: 2, letter: objectiveTerms.bombShortB, smaller: true },
          { floor: 1, top: 99, left: 114, set: 3, letter: objectiveTerms.bombShortA, smaller: true },
          { floor: 1, top: -70, left: 183, set: 3, letter: objectiveTerms.bombShortB, smaller: true },
          { floor: 1, top: -101, left: -109, set: 4, letter: objectiveTerms.bombShortA, smaller: true },
          { floor: 1, top: -207, left: -135, set: 4, letter: objectiveTerms.bombShortB, smaller: true }
        ],
        secureObjectives: [
          { floor: 2, top: -99, left: 177, smaller: true },
          { floor: 2, top: -38, left: -24, smaller: true },
          { floor: 1, top: 84, left: 91, smaller: true },
          { floor: 1, top: -128, left: -105, smaller: true }
        ],
        zoomPoints: {
          topLeft: { top: -344, left: -303 },
          bottomRight: { top: 283, left: 533 }
        },
        compassPoints: {
          top: 430, left: 594
        },
        ladders: [
        ],
        cameras: [
          {
            floor: 2, top: -28, left: 381, id: 1, location: themeparkTerms.dragonStairs,
            los: []
          },
          { floor: 2, top: 48, left: -212, id: 2, location: themeparkTerms.arcadeEntrance },
          { floor: 1, otherFloor: 'up', top: 48, left: -218, id: 2, location: themeparkTerms.arcadeEntrance },
          {
            floor: 1, top: 122, left: 213, id: 3, location: themeparkTerms.dragonStairs,
            los: []
          },
          {
            floor: 1, top: -175, left: -8, id: 4, location: themeparkTerms.jointCorridor,
            los: [
              [{top: -207, left: 72}, {top: -189, left: 15}, {top: -189, left: -25}, {top: 24, left: -25}]
            ]
          },
          {
            outdoor: true, top: -384, left: -286, id: 5, location: themeparkTerms.teacups,
            los: [
              [{top: -159, left: -402}, {top: -399, left: -302}, {top: -572, left: -176}]
            ]
          },
          {
            outdoor: true, top: -246, left: 583, id: 6, location: themeparkTerms.serviceEntrance,
            los: [
              [{top: -330, left: 555}, {top: -49, left: 731}]
            ]
          },
          {
            outdoor: true, top: 296, left: -359, id: 7, location: themeparkTerms.guestInfo,
            los: [
              [{top: 159, left: -617}, {top: 460, left: -111}]
            ]
          }
        ],
        ceilingHatches: [
          { floor: 1, top: -28, left: 39 },
          { floor: 1, top: 129, left: -73 },
          { floor: 1, top: -186, left: 342},
          { floor: 2 , top: -112, left: 75},
          { floor: 2 , top: 150, left: 332}
        ],
        skylights: [],
        droneTunnels: [
          { floor: 1, top: 212, left: -60, rotate: 0, size: DRONE_MED },
          { floor: 1, top: 212, left: 103, rotate: 0, size: DRONE_MED },
          { floor: 1, top: 125, left: -237, rotate: 90, size: DRONE_MED },
          { floor: 1, top: -25, left: -219, rotate: 0, size: 23 },
          { floor: 1, top: -20, left: -251, rotate: 90, size: 74 },
          { floor: 1, top: -271, left: -148, rotate: 0, size: DRONE_MED },
          { floor: 1, top: -257, left: 58, rotate: 0, size: 47 },
          { floor: 1, top: -205, left: 255, rotate: 0, size: DRONE_MED },
          { floor: 1, top: 136, left: 373, rotate: 90, size: 38 },

          { floor: 1, top: 29, left: -74, rotate: 0, size: 10 },
          { floor: 1, top: 2, left: 197, rotate: 90, size: 10 },
          { floor: 1, top: -66, left: 17, rotate: 90, size: 10 },
          { floor: 1, top: -167, left: -26, rotate: 90, size: 10 },

          { floor: 2, top: -135, left: -145, rotate: 0, size: DRONE_MED },

          { floor: 2, top: 209, left: 94, rotate: 90, size: 10 },
          { floor: 2, top: -73, left: 94, rotate: 90, size: 10 },
          { floor: 2, top: -37, left: 28, rotate: 90, size: 10 },
          { floor: 2, top: -122, left: 285, rotate: 0, size: 10 }
        ],
        spawnPoints: [
          { letter: spawnTerms.a, top: 510, left: -610, description: themeparkTerms.mainEntrance },
          { letter: spawnTerms.b, top: -638, left: -620, description: themeparkTerms.teacups },
          { letter: spawnTerms.c, top: 191, left: 957, description: themeparkTerms.bumperCars }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: 372, left: -13, description: themeparkTerms.palms, hardToRead: true },
          { outdoor: true, top: 514, left: 430, description: themeparkTerms.roboCircuit, hardToRead: true },
          { outdoor: true, top: 370, left: 300, description: themeparkTerms.castleEntrance, hardToRead: true },
          { outdoor: true, top: 170, left: 450, description: themeparkTerms.castleEntrance, hardToRead: true },
          { outdoor: true, top: 246, left: -300, description: themeparkTerms.guestInfo, hardToRead: true },
          { outdoor: true, top: -41, left: -561, description: themeparkTerms.village, hardToRead: true },
          { outdoor: true, top: -111, left: -350, description: themeparkTerms.sweetShop, hardToRead: true },
          { outdoor: true, top: -90, left: 680, description: themeparkTerms.serviceEntrance, hardToRead: true },
          { outdoor: true, top: -351, left: 68, description: themeparkTerms.backAlley, hardToRead: true },
          { outdoor: true, top: -303, left: 380, description: themeparkTerms.backAlley, hardToRead: true },

          // 1F
          { floor: 1, top: -170, left: 443, description: themeparkTerms.castleEntrance, hardToRead: true },
          { floor: 1, top: 129, left: -174, description: themeparkTerms.arcadeEntrance, hardToRead: true },
          { floor: 1, top: 108, left: -71, description: themeparkTerms.barrelRoom, hardToRead: true },
          { floor: 1, top: 140, left: 104, description: themeparkTerms.throneRoom, hardToRead: true },
          { floor: 1, top: 179, left: 290, description: themeparkTerms.maintenance, hardToRead: true },
          { floor: 1, top: 59, left: 242, description: themeparkTerms.dragonStairs, hardToRead: true },
          { floor: 1, top: 37, left: 35, description: themeparkTerms.blueRoom, hardToRead: true, smaller: true },
          { floor: 1, top: 6, left: -106, description: themeparkTerms.jointCorridor, hardToRead: true },
          { floor: 1, top: -87, left: -6, description: themeparkTerms.jointCorridor, hardToRead: true },
          { floor: 1, top: -8, left: 124, description: themeparkTerms.armory, hardToRead: true },
          { floor: 1, top: -98, left: 104, description: themeparkTerms.armory, hardToRead: true },
          { floor: 1, top: -50, left: -164, description: themeparkTerms.lab, hardToRead: true },
          { floor: 1, top: -67, left: 218, description: themeparkTerms.redCorridor, hardToRead: true },
          { floor: 1, top: -76, left: 290, description: themeparkTerms.gongRoom, hardToRead: true },
          { floor: 1, top: -157, left: 100, description: themeparkTerms.yellowCorridor.removeBreakTags(), hardToRead: true },
          { floor: 1, top: -154, left: 302, description: themeparkTerms.tellers, hardToRead: true },
          { floor: 1, top: -198, left: -191, description: themeparkTerms.storage, hardToRead: true },
          { floor: 1, top: -224, left: -60, description: themeparkTerms.arcadeToilet, hardToRead: true },
          { floor: 1, top: -226, left: 166, description: themeparkTerms.lockerRoom, hardToRead: true },

          { floor: 1, top: 1, left: -249, description: themeparkTerms.arcadeStairs, hardToRead: true },
          { floor: 1, top: -240, left: 79, description: themeparkTerms.yellowStairs, hardToRead: true },

          { floor: 2, top: -170, left: 443, description: themeparkTerms.castleEntrance, hardToRead: true },
          { floor: 2, top: 128, left: -110, description: themeparkTerms.upperArcade, hardToRead: true },
          { floor: 2, top: -79, left: -133, description: themeparkTerms.upperArcade, hardToRead: true },
          { floor: 2, top: 197, left: -7, description: themeparkTerms.breakRoom, hardToRead: true },
          { floor: 2, top: 191, left: 153, description: themeparkTerms.initiationRoom, hardToRead: true, smaller: true },
          { floor: 2, top: 65, left: 152, description: themeparkTerms.initiationRoom, hardToRead: true },
          { floor: 2, top: 188, left: 303, description: themeparkTerms.controlRoom, hardToRead: true },
          { floor: 2, top: 123, left: -30, description: themeparkTerms.bunk, hardToRead: true },
          { floor: 2, top: 4, left: -52, description: themeparkTerms.dayCare, hardToRead: true },
          { floor: 2, top: -66, left: 60, description: themeparkTerms.yellowCorridor, hardToRead: true },
          { floor: 2, top: -8, left: 154, description: themeparkTerms.waitingRoom, hardToRead: true },
          { floor: 2, top: -205, left: -205, description: themeparkTerms.cafeTerrace, hardToRead: true },
          { floor: 2, top: -26, left: 293, description: themeparkTerms.cashCorridor, hardToRead: true },
          { floor: 2, top: -82, left: 127, description: themeparkTerms.office, hardToRead: true },
          { floor: 2, top: -142, left: 167, description: themeparkTerms.office, hardToRead: true },
          { floor: 2, top: -94, left: 340, description: themeparkTerms.cashStash, hardToRead: true },
          { floor: 2, top: -100, left: -18, description: themeparkTerms.cafeCorridor, hardToRead: true },
          { floor: 2, top: -186, left: -56, description: themeparkTerms.cafe, hardToRead: true },
          { floor: 2, top: -163, left: 267, description: themeparkTerms.officeShower, hardToRead: true },
          { floor: 2, top: -223, left: 157, description: themeparkTerms.officeVault, hardToRead: true },

          { floor: 2, top: 59, left: 374, description: themeparkTerms.dragonStairs, hardToRead: true },
          { floor: 2, top: 107, left: 274, description: themeparkTerms.dragonStairs, hardToRead: true },

          { floor: 2, top: -224, left: 72, description: themeparkTerms.yellowStairs, hardToRead: true },
          { floor: 2, top: 6, left: -245, description: themeparkTerms.arcadeStairs, hardToRead: true },

          { floor: 3, top: -56, left: 342, description: themeparkTerms.roof, hardToRead: true },
          { floor: 3, top: -6, left: -54, description: themeparkTerms.roof, hardToRead: true }
        ]
      },
      tower: {
        name: mapNameTerms.tower,
        imgUrlPrefix: 'tower',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        floors: [
          { index: 1, top: -715, left: -1275, name: floorTerms.firstFloor, background: true },
          { index: 2, top: -715, left: -715, name: floorTerms.secondFloor, default: true },
          { index: 3, top: -715, left: -1115, name: floorTerms.thirdFloor },
          { index: 4, top: -715, left: -1115, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: 331, left: -257 },
          { floor: 2, top: -186, left: 253 },
          { floor: 1, top: -72, left: -171 },
          { floor: 1, top: -177, left: 376 }
        ],
        bombObjectives: [
          { floor: 2, top: 8, left: -344, set: 1, letter: objectiveTerms.bombShortA },
          { floor: 2, top: -210, left: -344, set: 1, letter: objectiveTerms.bombShortB },
          { floor: 2, top: -130, left: 253, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 18, left: 146, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 1, top: -221, left: 193, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 21, left: 193, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 1, top: -143, left: -132, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 1, top: -72, left: -352, set: 4, letter: objectiveTerms.bombShortB }
        ],
        secureObjectives: [
          { floor: 2, top: -152, left: 208 },
          { floor: 2, top: 502, left: 64 },
          { floor: 1, top: -143, left: 223 },
          { floor: 1, top: -143, left: -210 }
        ],
        zoomPoints: {
          topLeft: { top: -665, left: -694 },
          bottomRight: { top: 662, left: 584 }
        },
        compassPoints: {
          top: 380, left: 932
        },
        ladders: [
          { floor: 3, top: 245, left: -139, otherFloor: 'up' },
          { floor: 4, top: 245, left: -139, otherFloor: 'down' },
          { floor: 3, top: 65, left: 116, otherFloor: 'up' },
          { floor: 4, top: 65, left: 116, otherFloor: 'down' }
        ],
        cameras: [
          {
            floor: 2, top: -349, left: 43, id: 1, location: towerTerms.galleryMain,
            los: [
              [{top: -363, left: -85}, {top: -363, left: 60}, {top: -190, left: 60}, {top: -190, left: 16}, {top: 110, left: -21}]
            ]
          },
          {
            floor: 2, top: 47, left: 463, id: 2, location: towerTerms.exhibitHallway,
            los: [
              [{top: -29, left: 479}, {top: 62, left: 479}, {top: 62, left: 272}, {top: 27, left: 272}, {top: -11, left: 71}],
              [{top: 5, left: 272}, {top: -33, left: 127}]
            ]
          },
          {
            floor: 2, top: 220, left: -67, id: 3, location: towerTerms.companyReception,
            los: [
              [{top: 437, left: -50}, {top: 366, left: -54}, {top: 366, left: -84}, {top: 206, left: -84}, {top: 206, left: 330}],
              [{top: 374, left: 11}, {top: 438, left: 43}]
            ]
          },
          {
            floor: 1, top: 335, left: -133, id: 4, location: towerTerms.traditionalHall,
            los: [
              [{top: 2, left: -133}, {top: 121, left: -134}, {top: 121, left: -150}, {top: 346, left: -150}],
              [{top: 302, left: -93}, {top: 261, left: 113}, {top: 202, left: 113}, {top: 178, left: 134}, {top: 121, left: 218}],
              [{top: 217, left: 55}, {top: 121, left: 147}]
            ]
          },
          {
            floor: 1, top: 154, left: -459, id: 5, location: towerTerms.westBalcony,
            los: [
              [{top: -341, left: -476}, {top: 170, left: -476}, {top: 170, left: -99}]
            ]
          },
          {
            floor: 2, top: -627, left: -13, id: 6, location: towerTerms.centerAtrium,
            los: [
              [{top: -365, left: -576}, {top: -669, left: -13}, {top: -368, left: 543}]
            ]
          },
          {
            floor: 1, top: 592, left: -21, id: 7, location: towerTerms.fountain,
            los: [
              [{top: 375, left: -274}, {top: 441, left: -182}, {top: 530, left: -201}, {top: 536, left: -183}, {top: 591, left: -197}, {top: 597, left: -176}, {top: 607, left: -179}, {top: 607, left: 141}, {top: 596, left: 137}, {top: 590, left: 160}, {top: 534, left: 145}, {top: 528, left: 168}, {top: 440, left: 146}, {top: 374, left: 230}]
            ]
          }
        ],
        ceilingHatches: [
          { floor: 2, top: -233, left: -67 },
          { floor: 2, top: -27, left: 44 },
          { floor: 1, top: -274, left: -328 },
          { floor: 1, top: 307, left: -315 },
          { floor: 1, top: 158, left: -54 },
          { floor: 1, top: -66, left: 87 },
          { floor: 1, top: 450, left: 342 },
          { floor: 1, top: 505, left: -162 },
          { floor: 1, top: -128, left: -170 }
        ],
        skylights: [],
        droneTunnels: [
          { floor: 1, top: -331, left: 92, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: -331, left: -131, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: -303, left: 376, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: 100, left: -416, rotate: 0, size: 44 },
          { floor: 1, top: 377, left: -21, rotate: 0, size: 70 },
          { floor: 2, top: -369, left: -120, rotate: 0, size: DRONE_SMALL },
          { floor: 2, top: 342, left: -155, rotate: 0, size: 20 },
          { floor: 2, top: 349, left: -161, rotate: 90, size: 24 },
          { floor: 2, top: 324, left: 249, rotate: 90, size: 192 },
          { floor: 2, top: -46, left: 417, rotate: 90, size: DRONE_SMALL },
          //North Air Duct
          { floor: 3, top: -208, left: -167, rotate: 0, size: 330 },
          { floor: 3, top: -64, left: -167, rotate: 0, size: 40, otherFloor: 'up' },
          { floor: 4, top: -49, left: -133, rotate: 90, size: 80 },
          { floor: 4, top: -64, left: -167, rotate: 0, size: 40, otherFloor: 'down' },
          //East Air Duct
          { floor: 4, top: -49, left: 270, rotate: 0, size: 12, otherFloor: 'down' },
          { floor: 4, top: -49, left: 176, rotate: 90, size: 204 },
          { floor: 2, top: 62, left: 370, rotate: 0, size: DRONE_MED, otherFloor: 'up' },
          { floor: 3, top: -4, left: 370, rotate: 0, size: 128 },
          { floor: 3, top: 54, left: 370, rotate: 0, size: DRONE_SMALL, otherFloor: 'down' },
          { floor: 2, top: -64, left: 390, rotate: 0, size: 12, otherFloor: 'up' },
          { floor: 2, top: -64, left: 404, rotate: 90, size: 40 },
          { floor: 3, top: -64, left: 387, rotate: 0, size: 12, otherFloor: 'down' },
          { floor: 3, top: -64, left: 261, rotate: 0, size: 12, otherFloor: 'up' },
          { floor: 3, top: -64, left: 323, rotate: 90, size: 140 },
          //West Air Duct
          { floor: 2, top: 195, left: -369, rotate: 0, size: DRONE_MED, otherFloor: 'up' },
          { floor: 2, top: 121, left: -404, rotate: 0, size: 12, otherFloor: 'up' },
          { floor: 2, top: 121, left: -407, rotate: 90, size: 20 },
          { floor: 3, top: 153, left: -369, rotate: 0, size: 74 },
          { floor: 3, top: 186, left: -369, rotate: 0, size: 12, otherFloor: 'down' },
          { floor: 3, top: 121, left: -406, rotate: 0, size: 12, otherFloor: 'down' },
          { floor: 3, top: 121, left: -275, rotate: 0, size: 12, otherFloor: 'up' },
          { floor: 3, top: 121, left: -340, rotate: 90, size: 144 },
          { floor: 4, top: 121, left: -288, rotate: 0, size: 12, otherFloor: 'down' },
          { floor: 4, top: 121, left: -230, rotate: 90, size: 128 }
        ],
        spawnPoints: [
          { letter: spawnTerms.a, top: -627, left: -317, description: towerTerms.northRoof, floor: 4 },
          { letter: spawnTerms.b, top: 575, left: 527, description: towerTerms.southRoof, floor: 4 }
        ],
        roomLabels: [
          // Air Ducts
          { floor: 4, top: -43, left: -200, description: towerTerms.northAirDuct, hardToRead: true },
          { floor: 3, top: -210, left: -211, description: towerTerms.northAirDuct, hardToRead: true },
          { floor: 4, top: -78, left: 177, description: towerTerms.eastAirDuct, hardToRead: true },
          { floor: 3, top: -93, left: 324, description: towerTerms.eastAirDuct, hardToRead: true },
          { floor: 3, top: 92, left: -338, description: towerTerms.westAirDuct, hardToRead: true },
          { floor: 4, top: 92, left: -231, description: towerTerms.westAirDuct, hardToRead: true },
          // 4F/Exterior
          { floor: 4, top: -594, left: 224, description: towerTerms.northRoofNotShown, hardToRead: true },
          { floor: 4, top: 356, left: -10, description: towerTerms.roofAccess, hardToRead: true },
          { floor: 4, top: -214, left: -10, description: towerTerms.roofAccess, hardToRead: true },
          { floor: 4, top: 606, left: -265, description: towerTerms.southRoofNotShown, hardToRead: true },
          { floor: 4, top: 165, left: 11, description: towerTerms.elevator, hardToRead: true },
          // 3F:
          { floor: 3, top: 90, left: -14, description: towerTerms.ventilation, hardToRead: true },
          { floor: 3, top: -219, left: -14, description: towerTerms.ventilation, hardToRead: true },
          { floor: 3, top: -614, left: -14, description: towerTerms.mezzanine, hardToRead: true },
          { floor: 3, top: -366, left: -315, description: towerTerms.mezzanine, hardToRead: true },
          { floor: 3, top: -366, left: 295, description: towerTerms.mezzanine, hardToRead: true },
          { floor: 3, top: 165, left: 11, description: towerTerms.elevator, hardToRead: true },
          // 1F:
          { floor: 1, top: -439, left: -384, description: towerTerms.westAtrium, hardToRead: true },
          { floor: 1, top: -438, left: 334, description: towerTerms.eastAtrium, hardToRead: true },
          { floor: 1, top: -473, left: -167, description: towerTerms.centerAtrium, hardToRead: true },
          { floor: 1, top: -473, left: 114, description: towerTerms.centerAtrium, hardToRead: true },
          { floor: 1, top: -342, left: -26, description: towerTerms.mainReception, hardToRead: true },
          { floor: 1, top: -259, left: -244, description: towerTerms.kitchen, hardToRead: true },
          { floor: 1, top: 59, left: -453, description: towerTerms.westBalcony, hardToRead: true },
          { floor: 1, top: -211, left: -453, description: towerTerms.westBalcony, hardToRead: true },
          { floor: 1, top: -80, left: -232, description: towerTerms.restaurant, hardToRead: true },
          { floor: 1, top: -131, left: -353, description: towerTerms.birdRoom, hardToRead: true },
          { floor: 1, top: 48, left: -185, description: towerTerms.restaurantReception, hardToRead: true },
          { floor: 1, top: 48, left: 11, description: towerTerms.centerHallway, hardToRead: true },
          { floor: 1, top: -235, left: -20, description: towerTerms.centerHallway, hardToRead: true },
          { floor: 1, top: -164, left: 135, description: towerTerms.teaRoom, hardToRead: true },
          { floor: 1, top: -120, left: 347, description: towerTerms.lounge, hardToRead: true },
          { floor: 1, top: -256, left: 473, description: towerTerms.eastBalcony, hardToRead: true },
          { floor: 1, top: -24, left: 473, description: towerTerms.eastBalcony, hardToRead: true },
          { floor: 1, top: 30, left: 297, description: towerTerms.bar, hardToRead: true },
          { floor: 1, top: 151, left: -3, description: towerTerms.elevator, hardToRead: true },
          { floor: 1, top: 156, left: 197, description: towerTerms.barHallway, hardToRead: true },
          { floor: 1, top: 156, left: -260, description: towerTerms.restaurantHallway, hardToRead: true },
          { floor: 1, top: 265, left: -23, description: towerTerms.traditionalHall, hardToRead: true },
          { floor: 1, top: 252, left: -217, description: towerTerms.bonsaiRoom, hardToRead: true },
          { floor: 1, top: 252, left: 180, description: towerTerms.gameRoom, hardToRead: true },
          { floor: 1, top: 508, left: -24, description: towerTerms.fountain, hardToRead: true },
          { floor: 1, top: 442, left: -308, description: towerTerms.westObservatory, hardToRead: true },
          { floor: 1, top: 442, left: 250, description: towerTerms.eastObservatory, hardToRead: true },
          // 1F to 2F:
          { floor: 1, top: -518, left: -23, description: towerTerms.northStairs, hardToRead: true },
          { floor: 2, top: -528, left: -23, description: towerTerms.northStairs, hardToRead: true },
          { floor: 1, top: -1, left: -619, description: towerTerms.westStairs, hardToRead: true },
          { floor: 2, top: -1, left: -619, description: towerTerms.westStairs, hardToRead: true },
          { floor: 1, top: 119, left: 409, description: towerTerms.eastStairs, hardToRead: true },
          { floor: 2, top: 119, left: 409, description: towerTerms.eastStairs, hardToRead: true },
          // 2F:
          { floor: 2, top: 165, left: 11, description: towerTerms.elevator, hardToRead: true },
          { floor: 2, top: 87, left: -9, description: towerTerms.elevator, hardToRead: true },
          { floor: 2, top: -439, left: -384, description: towerTerms.westAtrium, hardToRead: true },
          { floor: 2, top: -438, left: 334, description: towerTerms.eastAtrium, hardToRead: true },
          { floor: 2, top: -473, left: -167, description: towerTerms.centerAtrium, hardToRead: true },
          { floor: 2, top: -473, left: 114, description: towerTerms.centerAtrium, hardToRead: true },
          { floor: 2, top: -469, left: -23, description: towerTerms.infoBooth, hardToRead: true },
          { floor: 2, top: -396, left: -17, description: towerTerms.galleryMain, hardToRead: true },
          { floor: 2, top: -121, left: -17, description: towerTerms.galleryMain, hardToRead: true },
          { floor: 2, top: -203, left: -129, description: towerTerms.galleryAnnex, hardToRead: true },
          { floor: 2, top: 9, left: -282, description: towerTerms.lanternRoom, hardToRead: true },
          { floor: 2, top: -254, left: 276, description: towerTerms.mediaCenter, hardToRead: true },
          { floor: 2, top: 23, left: 378, description: towerTerms.exhibitHallway, hardToRead: true },
          { floor: 2, top: 10, left: 200, description: towerTerms.exhibitRoom, hardToRead: true },
          { floor: 2, top: -237, left: 447, description: towerTerms.eastBalcony, hardToRead: true },
          { floor: 2, top: 119, left: 483, description: towerTerms.eastBalcony, hardToRead: true },
          { floor: 2, top: -211, left: -282, description: towerTerms.giftShop, hardToRead: true },
          { floor: 2, top: -211, left: -466, description: towerTerms.westBalcony, hardToRead: true },
          { floor: 2, top: 73, left: -471, description: towerTerms.westBalcony, hardToRead: true },
          { floor: 2, top: 163, left: -210, description: towerTerms.officesHallway, hardToRead: true },
          { floor: 2, top: 269, left: -283, description: towerTerms.offices, hardToRead: true },
          { floor: 2, top: 373, left: -500, description: towerTerms.supplyRoom, hardToRead: true },
          { floor: 2, top: 475, left: -345, description: towerTerms.meetingRoom, hardToRead: true },
          { floor: 2, top: 524, left: -21, description: towerTerms.ceoOffice, hardToRead: true },
          { floor: 2, top: 488, left: 274, description: towerTerms.bathroom, hardToRead: true },
          { floor: 2, top: 312, left: 453, description: towerTerms.serverRoom, hardToRead: true },
          { floor: 2, top: 257, left: 75, description: towerTerms.companyReception, hardToRead: true },
          { outdoor: true, top: -606, left: -481, description: towerTerms.northRappel },
          { outdoor: true, top: -606, left: 453, description: towerTerms.northRappel },
          { outdoor: true, top: 572, left: 453, description: towerTerms.southRappel },
          { outdoor: true, top: 572, left: -481, description: towerTerms.southRappel }
        ]
      },
      yacht: {
        name: mapNameTerms.yacht,
        imgUrlPrefix: 'yacht',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        floors: [
          { index: 1, top: -715, left: -1275, background: true, name: floorTerms.firstFloor },
          { index: 2, top: -261, left: -840, name: floorTerms.secondFloor, default: true },
          { index: 3, top: -261, left: -840, name: floorTerms.thirdFloor },
          { index: 4, top: -261, left: -840, name: floorTerms.fourthFloor },
          { index: 5, top: -261, left: -840, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 4, top: 13, left: 16 },
          { floor: 3, top: -55, left: 129 },
          { floor: 2, top: 93, left: 81 },
          { floor: 1, top: -24, left: -415 }
        ],
        bombObjectives: [
          { floor: 4, top: 14, left: 141, set: 1, letter: objectiveTerms.bombShortA },
          { floor: 4, top: -32, left: -6, set: 1, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 11, left: -297, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 9, left: -101, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 93, left: 45, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 2, top: -86, left: 52, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 1, top: -95, left: -275, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 116, left: -259, set: 4, letter: objectiveTerms.bombShortB }
        ],
        secureObjectives: [
            { floor: 3, top: -6, left: 31 },
            { floor: 2, top: 33, left: -150 },
            { floor: 2, top: 61, left: 343 },
            { floor: 4, top: 14, left: 180 }
        ],
        zoomPoints: {
          topLeft: { top: -139, left: -610 },
          bottomRight: { top: 160, left: 590 }
        },
        compassPoints: {
          top: 331, left: 220
        },
        ladders: [
          { floor: 3, top: -11, left: 232, otherFloor: 'up' },
          { floor: 4, top: -11, left: 232, otherFloor: 'down' },
          { floor: 1, top: -109, left: -239, otherFloor: 'up' },
          { floor: 2, top: -109, left: -239, otherFloor: 'down' },
          { floor: 3, top: 116, left: -206, otherFloor: 'up' },
          { floor: 4, top: 116, left: -206, otherFloor: 'down' },
          { floor: 3, top: 116, left: 331, otherFloor: 'up' },
          { floor: 4, top: 116, left: 331, otherFloor: 'down' },
          { floor: 3, top: -93, left: 331, otherFloor: 'up' },
          { floor: 4, top: -93, left: 331, otherFloor: 'down' },
          { floor: 2, top: -39, left: 610, otherFloor: 'up' },
          { floor: 3, top: -39, left: 610, otherFloor: 'down' }
        ],
        cameras: [
          {
            floor: 4, top: 87, left: -134, id: 1, location: yachtTerms.helipadEntrance,
            los: [
              [{top: -41, left: -112}, {top: -78, left: -92}],
              [{top: 102, left: -31}, {top: 102, left: 103}],
              [{top: 102, left: -42}, {top: 102, left: -145}],
              [{top: 22, left: -61}, {top: 47, left: -86}]
            ]
          },
          {
            floor: 3, top: 21, left: 264, id: 2, location: yachtTerms.bedroomHallway,
            los: [[{top: 35, left: 152}, {top: 35, left: 280}, {top: -78, left: 280}]]
          },
          {
            floor: 3, top: 86, left: -227, id: 3, location: yachtTerms.lounge,
            los: [
              [{top: -5, left: -117}, {top: -32, left: -80}],
              [{top: 37, left: -32}, {top: 64, left: -139}, {top: 102, left: -139}, {top: 102, left: -243}, {top: -77, left: -243}]
            ]
          },
          {
            floor: 2, top: 13, left: 262, id: 4, location: yachtTerms.frontStairs,
            los: [
              [{top: 26, left: -36}, {top: 26, left: 280}, {top: -36, left: 280}],
              [{top: -45, left: 280}, {top: -48, left: 280}],
              [{top: -79, left: 280}, {top: -76, left: 280}],
              [{top: -68, left: 280}, {top: -65, left: 280}],
              [{top: -58, left: 280}, {top: -55, left: 280}],
              [{top: -80, left: 234}, {top: -40, left: 248}]
            ]
          },
          {
            floor: 2, top: 124, left: -266, id: 5, location: yachtTerms.backStairs,
            los: [
              [{top: -116, left: -258}, {top: 49, left: -271}, {top: 49, left: -281}, {top: 138, left: -281}, {top: 138, left: -15}],
              [{top: 77, left: -194}, {top: 99, left: -233}]
            ]
          },
          {
            floor: 1, top: -43, left: 63, id: 6, location: yachtTerms.engineHallway,
            los: [
              [{top: -21, left: -61}, {top: -21, left: 80}, {top: -88, left: 80}],
              [{top: -88, left: -138}, {top: -56, left: -32}],
              [{top: -73, left: -230}, {top: -60, left: -72}]
            ]
          },
          {
            floor: 3, top: 10, left: 631, id: 7, location: yachtTerms.frontDeck,
            los: [[{top: -105, left: 592}, {top: 12, left: 675}, {top: 127, left: 596}]]
          },
          { floor: 2, otherFloor: 'up', top: 10, left: 631, id: 7, location: yachtTerms.frontDeck },
          { floor: 4, otherFloor: 'down', top: 10, left: 631, id: 7, location: yachtTerms.frontDeck },
          { floor: 5, otherFloor: 'down', top: 10, left: 631, id: 7, location: yachtTerms.frontDeck },
          {
            floor: 3, top: 114, left: -477, id: 8, location: yachtTerms.spaDeck,
            los: [[{top: 119, left: -661}, {top: 152, left: -553}, {top: 152, left: 358}]]
          },
          { floor: 2, otherFloor: 'up', top: 114, left: -477, id: 8, location: yachtTerms.spaDeck },
          { floor: 4, otherFloor: 'down', top: 114, left: -477, id: 8, location: yachtTerms.spaDeck },
          { floor: 5, otherFloor: 'down', top: 114, left: -477, id: 8, location: yachtTerms.spaDeck }
        ],
        ceilingHatches: [
          { floor: 3, top: -63, left: 81 },
          { floor: 3, top: -45, left: 189 },
          { floor: 3, top: 0, left: 235 },
          { floor: 2, top: -45, left: -210 },
          { floor: 2, top: 46, left: -74 },
          { floor: 2, top: 56, left: 25 },
          { floor: 2, top: 71, left: 310 },
          { floor: 2, top: -34, left: 310 },
          { floor: 1, top: 15, left: -550 },
          { floor: 1, top: 14, left: -328  },
          { floor: 1, top: -53, left: 155 }
        ],
        skylights: [],
        droneTunnels: [
          { floor: 1, top: 63, left: -550, rotate: 90, size: 108 },
          { floor: 1, top: -36, left: -550, rotate: 90, size: 108 },
          { floor: 2, top: 103, left: -155, rotate: 0, size: DRONE_SMALL },
          { floor: 2, top: 129, left: -289, rotate: 90, size: DRONE_MED },
          { floor: 3, top: -83, left: -190, rotate: 0, size: DRONE_MED },
          { floor: 3, top: -83, left: 175, rotate: 0, size: DRONE_MED },
          { floor: 3, top: 106, left: -52, rotate: 0, size: DRONE_MED },
          { floor: 3, top: 62, left: 177, rotate: 90, size: DRONE_MED },
          { floor: 3, top: 106, left: 147, rotate: 0, size: DRONE_MED },
          { floor: 3, top: 106, left: 289, rotate: 0, size: DRONE_MED },
          { floor: 3, top: 0, left: 217, rotate: 90, size: DRONE_MED }
        ],
        spawnPoints: [
          { letter: spawnTerms.a, top: -532, left: -187, description: yachtTerms.spawnSubmarine },
          { letter: spawnTerms.b, top: 413, left: -737, description: yachtTerms.spawnZodiak },
          { letter: spawnTerms.c, top: 354, left: 596, description: yachtTerms.spawnSnowMobile }
        ],
        roomLabels: [
          { floor: 4, top: 59, left: 17, description: yachtTerms.mapsRoom },
          { floor: 4, top: 62, left: 121, description: yachtTerms.cockpit },
          { floor: 4, top: 100, left: 21, description: yachtTerms.cockpitHallway },
          { floor: 4, top: -29, left: 64, description: yachtTerms.captainsOffice },
          { floor: 4, top: 14, left: 323, description: yachtTerms.cockpitBalcony },
          { floor: 4, top: 27, left: -83, description: yachtTerms.topDeckStairs },
          { floor: 4, top: -53, left: -103, description: yachtTerms.helipadEntrance },
          { floor: 4, top: 24, left: -258, description: yachtTerms.helipad },
          { floor: 3, top: 14, left: -359, description: yachtTerms.spaDeck },
          { floor: 3, top: 138, left: -89, description: yachtTerms.eastDeck },
          { floor: 3, top: -89, left: -89, description: yachtTerms.westDeck },
          { floor: 3, top: 138, left: 226, description: yachtTerms.eastDeck },
          { floor: 3, top: -89, left: 226, description: yachtTerms.westDeck },
          { floor: 3, top: 17, left: 390, description: yachtTerms.frontDeck },
          { floor: 3, top: 17, left: 723, description: yachtTerms.frontDeck },
          { floor: 3, top: 20, left: 801, description: yachtTerms.kingOfTheWorld, hardToRead: true, smaller: true },
          { floor: 5, top: 17, left: 108, description: yachtTerms.roof },
          { floor: 3, top: 17, left: 325, description: yachtTerms.masterBedroom },
          { floor: 3, top: 4, left: 77, description: yachtTerms.casino },
          { floor: 3, top: -9, left: 170, description: yachtTerms.pokerRoom },
          { floor: 3, top: 78, left: 210, description: yachtTerms.bathroom },
          { floor: 3, top: 36, left: 200, smaller: true, description: yachtTerms.bedroomHallway },
          { floor: 3, top: 101, left: 65, description: yachtTerms.casinoHallway },
          { floor: 3, top: -25, left: -49, smaller: true, description: yachtTerms.globeHallway },
          { floor: 3, top: 49, left: -179, description: yachtTerms.lounge },
          { floor: 3, top: 26, left: -102, hardToRead: true, smaller: true, description: yachtTerms.topDeckStairs.removeBreakTags() },
          { floor: 2, top: 103, left: 127, description: yachtTerms.cafeteria },
          { floor: 1, top: -15, left: -361, description: yachtTerms.engine },
          { floor: 1, hardToRead: true, top: 18, left: -516, description: yachtTerms.backEntrance },
          { floor: 1, top: 18, left: -634, description: yachtTerms.rearDeck },
          { floor: 1, top: -33, left: -274, description: yachtTerms.serverRoom },
          { floor: 1, top: 74, left: -274, description: yachtTerms.engineStorage },
          { floor: 2, top: -40, left: -314, description: yachtTerms.engineControl },
          { floor: 2, top: 14, left: -517, description: yachtTerms.rearDeck },
          { floor: 1, top: 18, left: -215, description: yachtTerms.backStairs },
          { floor: 1, top: -95, left: -192, smaller: true, description: yachtTerms.emergencyExit },
          { floor: 1, top: -26, left: -7, description: yachtTerms.engineHallway },
          { floor: 1, top: -48, left: 204, description: yachtTerms.frontStairs },
          { floor: 2, top: -12, left: -157, description: yachtTerms.kitchen },
          { floor: 2, top: -26, left: 47, description: yachtTerms.staffDormitory },
          { floor: 4, top: -94, left: -18, description: yachtTerms.westBalcony },
          { floor: 4, top: 143, left: -18, description: yachtTerms.eastBalcony },
          { floor: 2, top: 133, left: -143, description: yachtTerms.kitchenHallway },
          { floor: 2, top: 78, left: -259, description: yachtTerms.backStairs },
          { floor: 2, top: -53, left: -91, description: yachtTerms.kitchenStairs },
          { floor: 2, top: -21, left: -36, smaller: true, description: yachtTerms.kitchenPantry },
          { floor: 2, top: -18, left: 143, description: yachtTerms.infirmary },
          { floor: 2, top: -50, left: 364, description: yachtTerms.borealSubRoom },
          { floor: 2, top: 24, left: 60, description: yachtTerms.cafeteriaHallway },
          { floor: 2, top: -25, left: 204, description: yachtTerms.frontStairs },
          { floor: 2, top: -76, left: -256, smaller: true, description: yachtTerms.engineUtility },
          { floor: 3, top: -57, left: 252, description: yachtTerms.frontStairs },
          { outdoor: true, hardToRead: true, top: -262, left: -43, description: yachtTerms.submarine },
          { outdoor: true, hardToRead: true, top: -206, left: -306, description: yachtTerms.westGlacier },
          { outdoor: true, hardToRead: true, top: 232, left: 617, description: yachtTerms.eastHullBreach },
          { outdoor: true, hardToRead: true, top: 388, left: 100, description: yachtTerms.eastGlacier },
          { outdoor: true, hardToRead: true, top: 388, left: -304, description: yachtTerms.frozenRiver },
          { outdoor: true, top: 245, left: -569, hardToRead: true, description: yachtTerms.zodiac },
          { outdoor: true, hardToRead: true, top: -145, left: 261, description: yachtTerms.westHullBreach },
          { floor: 2, top: -15, left: 553, description: yachtTerms.anchorName },
          { floor: 2, top: 85, left: 454, description: yachtTerms.aklarkSubEntrance, smaller: true, hardToRead: true }
        ]
      },
      villa: {
        name: mapNameTerms.villa,
        imgUrlPrefix: 'villa',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        floors: [
          { index: 0, top: -720, left: -1280, background: true, name: floorTerms.basement },
          { index: 1, top: -480, left: 0, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -480, left: 0, name: floorTerms.secondFloor },
          { index: 3, top: -480, left: 0, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: 62, left: 284 },
          { floor: 2, top: -315, left: 347 },
          { floor: 1, top: 100, left: 295 },
          { floor: 0, top: -197, left: 487 }
        ],
        bombObjectives: [
          { floor: 2, top: 103, left: 191, set: 1, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 62, left: 324, set: 1, letter: objectiveTerms.bombShortB },

          { floor: 2, top: -204, left: 417, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 2, top: -204, left: 306, set: 2, letter: objectiveTerms.bombShortB },

          { floor: 1, top: -105, left: 220, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 75, left: 145, set: 3, letter: objectiveTerms.bombShortB },

          { floor: 1, top: -333, left: 417, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 1, top: -225, left: 428, set: 4, letter: objectiveTerms.bombShortB }
        ],
        secureObjectives: [
          { floor: 2, top: 170, left: 309 },
          { floor: 2, top: -205, left: 529 },
          { floor: 1, top: -105, left: 260 },
          { floor: 0, top: -161, left: 370 }
        ],
        zoomPoints: {
          topLeft: { left: 0, top: -420 },
          bottomRight: { left: 270, top: 640 }
        },
        compassPoints: {
        },
        ladders: [],
        cameras: [
          {floor: 2, top: -353, left: 381, id: 1, location: villaTerms.astronomyRoom,
            los: [[{top: -397, left: 393}, {top: -280, left: 393}, {top: -280, left: 380}, {top: -244, left: 381}, {top: -244, left: 346}, {top: -280, left: 357}, {top: -280, left: 255}, {top: -350, left: 255}, {top: -350, left: 335}, {top: -355, left: 335}, {top: -368, left: 255}, {top: -397, left: 255}, {top: -397, left: 393}]]},
          {floor: 2, top: -65, left: 140, id: 2, location: villaTerms.classicalHall,
            los: [[{top: -80, left: 125}, {top: -80, left: 248}, {top: -46, left: 248}, {top: -46, left: 176}, {top: -33, left: 198}, {top: 3, left: 198}, {top: -46, left: 155}, {top: -46, left: 137}, {top: 21, left: 161}, {top: 21, left: 132}, {top: 226, left: 132}, {top: 226, left: 110}, {top: 21, left: 110}, {top: 21, left: 103}, {top: -19, left: 103}, {top: -80, left: 125}]]},
          {floor: 1, top: -207, left: 254, id: 3, location: villaTerms.backHallway,
            los: [[{top: -207, left: 254}, {top: -193, left: 223}, {top: -218, left: 223}, {top: -212, left: 240}, {top: -228, left: 240}, {top: -228, left: 254}, {top: -253, left: 254}, {top: -278, left: 269}, {top: -268, left: 269}, {top: -268, left: 310}, {top: -258, left: 310}, {top: -290, left: 346}, {top: -290, left: 369}, {top: -284, left: 369}, {top: -240, left: 310}, {top: -232, left: 296}, {top: -228, left: 296}, {top: -228, left: 320}, {top: -220, left: 320}, {top: -229, left: 369}, {top: -182, left: 369}, {top: -192, left: 320}, {top: -188, left: 320}, {top: -188, left: 280}, {top: -207, left: 254}]]},
          {floor: 1, top: 206, left: 157, id: 4, location: villaTerms.mainEntrance,
            los: [[{top: 206, left: 157}, {top: 189, left: 35}, {top: 158, left: 35}, {top: 158, left: 61}, {top: 175, left: 94}],
            [{top: 151, left: 111}, {top: 170, left: 127}],
            [{top: 151, left: 160}, {top: 91, left: 163}, {top: 91, left: 192}, {top: 151, left: 174}],
            [{top: 173, left: 206}, {top: 151, left: 239}, {top: 151, left: 267}, {top: 206, left: 157}]]},
          {floor: 0, top: -128, left: 288, id: 5, location: villaTerms.archHallway,
            los: [[{top: -143, left: 327}, {top: -128, left: 288}, {top: -86, left: 252}],
            [{top: -163, left: 246}, {top: -167, left: 241}, {top: -193, left: 241}, {top: -158, left: 267}],
            [{top: -162, left: 274}, {top: -204, left: 258}, {top: -204, left: 273}, {top: -250, left: 265}, {top: -250, left: 274}, {top: -254, left: 274}, {top: -302, left: 269}, {top: -302, left: 290}, {top: -163, left: 290}]]},
          {outdoor: true, top: -82, left: 53, id: 6, location: villaTerms.stableYard,
            los: [[{top: -77, left: 95  }, {top: -86, left: 82}, {top: -97, left: 174}], [{top: -404, left: 248}, {top: -720, left: 414}]]},
          {outdoor: true, top: 360, left: 366, id: 7, location: villaTerms.ruins, los: [[{top: 480, left: 340}, {top: 390, left: 386}, {top: 40, left: 650}]]},
          {outdoor: true, top: -73, left: 685, id: 8, location: villaTerms.driveway,
          los: [[{top: 290, left: 392}, {top: -73, left: 686}, {top: -130, left: 720}]]}
        ],
        ceilingHatches: [
          // scale is off b/w map and hatch, so rescaling to fit.
          { floor: 1, top: -59, left: 109, width: 25, height: 25 },
          { floor: 1, top: -304, left: 300, width: 25, height: 25 },
          { floor: 1, top: 213, left: 360, width: 25, height: 25 },
          { floor: 1, top: -169, left: 556, width: 25, height: 25 },

          { floor: 0, top: -111, left: 296, width: 25, height: 25 },
          { floor: 0, top: -325, left: 498, width: 25, height: 25 }
        ],
        skylights: [
          {floor: 1, otherFloor: 'up', top: -176, left: 345 },
          {floor: 2, top: -193, left: 368 }
        ],
        droneTunnels: [
          { floor: 0, top: -197, left: 296, rotate: 90, size: 12 },
          { floor: 0, top: -315, left: 521, rotate: 90, size: 57 },
          { floor: 1, top: 274, left: 169, rotate: 0, size: 44 },
          { floor: 1, top: 224, left: 359, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: 89, left: 90, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: 64, left: 372, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: -123, left: 491, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: -155, left: 177, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: -295, left: 235, rotate: 90, size: DRONE_SMALL },
          { floor: 2, top: -32, left: 200, rotate: 90, size: 10 },
          { floor: 2, top: -85, left: 227, rotate: 0, size: DRONE_SMALL },
          { floor: 2, top: -279, left: 580, rotate: 0, size: DRONE_SMALL },
          { floor: 2, top: -360, left: 409, rotate: 0, size: DRONE_SMALL }
        ],
        spawnPoints: [
          { letter: spawnTerms.a, top: -371, left: -155, description: villaTerms.spawnMainRoad },
          { letter: spawnTerms.b, top: 428, left: 371, description: villaTerms.spawnRuins },
          { letter: spawnTerms.c, top: -290, left: 845, description: villaTerms.spawnFountain }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: 380, left: 100, description: villaTerms.ruins, hardToRead: true },
          { outdoor: true, top: 180, left: -50, description: villaTerms.roundabout, hardToRead: true },
          { floor: 1, top: 270, left: 290, description: villaTerms.greenhouse },
          { floor: 1, top: 160, left: 60, description: villaTerms.frontEntrance, veryHardToRead: true },
          { floor: 3, top: 86, left: 263, description: villaTerms.roof, hardToRead: true },
          { outdoor: true, top: 189, left: 460, description: villaTerms.terrace },
          { outdoor: true, top: 59, left: 460, description: villaTerms.terrace, hardToRead: true },
          { floor: 0, top: 59, left: 320, description: villaTerms.cryptTunnel },
          { floor: 0, top: 120, left: 512, description: villaTerms.crypt, hardToRead: true },
          { outdoor: true, top: 110, left: 600, description: villaTerms.cryptEntrance, hardToRead: true },
          { outdoor: true, top: 119, left: 700, description: villaTerms.garden, hardToRead: true },
          { outdoor: true, top: -20, left: 610, description: villaTerms.driveway, hardToRead: true },
          { outdoor: true, top: -180, left: 653, description: villaTerms.driveway, hardToRead: true },
          { outdoor: true, top: -370, left: 672, description: villaTerms.driveway, hardToRead: true },
          { outdoor: true, top: -80, left: -80, description: villaTerms.mainRoad, hardToRead: true },
          { outdoor: true, top: -40, left: 530, description: villaTerms.balcony, hardToRead: true },
          { outdoor: true, top: -110, left: 724, description: villaTerms.pergola, hardToRead: true },
          { outdoor: true, top: -170, left: 90, description: villaTerms.stableYard, hardToRead: true },
          { floor: 3, top: -248, left: 481, description: villaTerms.skylightRoof, hardToRead: true },
          { floor: 2, top: -95, left: 530, description: villaTerms.bedroomRoof, hardToRead: true },
          { outdoor: true, top: -131, left: 820, description: villaTerms.chapel, hardToRead: true },
          { floor: 0, top: -230, left: 570, description: villaTerms.garage, veryHardToRead: true },
          { outdoor: true, top: -390, left: 740, description: villaTerms.fountain, hardToRead: true },
          // hidden under stable's roof
          { outdoor: true, top: -281, left: 80, description: villaTerms.stable, hardToRead: true },
          { floor: 0, top: -380, left: 260, description: villaTerms.cellarTunnel, veryHardToRead: true },
          { outdoor: true, top: -390, left: 420, description: villaTerms.sideRoad, veryHardToRead: true },
          // 2F
          { floor: 2, top: 282, left: 310, description: villaTerms.veranda },
          { floor: 2, top: 206, left: 121, description: villaTerms.classicalHall, hardToRead: true },
          { floor: 2, top: -14, left: 150, description: villaTerms.classicalHall, hardToRead: true },
          { floor: 2, top: -60, left: 2830, description: villaTerms.classicalHall, hardToRead: true },
          { floor: 2, top: 184, left: 350, description: villaTerms.study, hardToRead: true },
          { floor: 2, top: 70, left: 165, description: villaTerms.gamesRoom, veryHardToRead: true },
          { floor: 2, top: 108, left: 320, description: villaTerms.aviatorRoom, hardToRead: true },
          { floor: 2, top: 6, left: 255, description: villaTerms.huntingVault },
          { floor: 2, top: -38, left: 348, description: villaTerms.landing, veryHardToRead: true },
          { floor: 2, top: -109, left: 286, description: villaTerms.trophyEntrance, veryHardToRead: true },
          { floor: 2, top: -159, left: 447, description: villaTerms.statuaryRoom, hardToRead: true },
          { floor: 2, top: -243, left: 297, description: villaTerms.trophyRoom, veryHardToRead: true },
          { floor: 2, top: -235, left: 520, description: villaTerms.masterBedroom, veryHardToRead: true },
          { floor: 2, top: -317, left: 296, description: villaTerms.astronomyRoom, veryHardToRead: true },
          { floor: 2, top: -313, left: 440, description: villaTerms.masterBathroom, hardToRead: true },
          { floor: 2, top: -313, left: 533, description: villaTerms.walkInCloset, veryHardToRead: true },
          // 1F
          { floor: 1, top: 197, left: 200, description: villaTerms.mainEntrance, veryHardToRead: true },
          { floor: 1, top: 191, left: 347, description: villaTerms.artStudio, hardToRead: true },
          { floor: 1, top: 127, left: 165, description: villaTerms.library, hardToRead: true },
          { floor: 1, top: 44, left: 135, description: villaTerms.library, hardToRead: true },
          { floor: 1, top: 95, left: 250, description: villaTerms.mainHallway, veryHardToRead: true },
          { floor: 1, top: 16, left: 310, description: villaTerms.mainHallway, veryHardToRead: true },
          { floor: 1, top: -74, left: 347, description: villaTerms.mainHallway, veryHardToRead: true },
          { floor: 1, top: 72, left: 319, description: villaTerms.pianoRoom, hardToRead: true },
          { floor: 1, top: 50, left: 204, description: villaTerms.gallery, hardToRead: true },
          { floor: 1, top: -26, left: 113, description: villaTerms.toilet, hardToRead: true },
          { floor: 1, top: -41, left: 281, description: villaTerms.livingRoom, veryHardToRead: true },
          { floor: 1, top: -131, left: 279, description: villaTerms.livingRoom, veryHardToRead: true },
          { floor: 1, top: -40, left: 463, description: villaTerms.bicycleStorage, hardToRead: true },
          { floor: 1, top: -128, left: 430, description: villaTerms.memorialRoom, veryHardToRead: true },
          { floor: 1, top: -172, left: 207, description: villaTerms.mudroom, veryHardToRead: true },
          { floor: 1, top: -204, left: 347, description: villaTerms.skylightHallway, hardToRead: true },
          { floor: 1, top: -189, left: 528, description: villaTerms.laundry, hardToRead: true },
          { floor: 1, top: -232, left: 280, description: villaTerms.backHallway, veryHardToRead: true },
          { floor: 1, top: -247, left: 480, description: villaTerms.diningRoom, hardToRead: true },
          { floor: 1, top: -254, left: 340, description: villaTerms.chinaRoom, hardToRead: true },
          { floor: 1, top: -325, left: 371, description: villaTerms.kitchen, veryHardToRead: true },
          { floor: 1, top: -339, left: 502, description: villaTerms.pantry, hardToRead: true },
          // B
          { floor: 0, top: -40, left: 288, description: villaTerms.tastingRoom, veryHardToRead: true },
          { floor: 0, top: -196, left: 268, description: villaTerms.archHallway, veryHardToRead: true },
          { floor: 0, top: -190, left: 371, description: villaTerms.artStorage, hardToRead: true },
          { floor: 0, top: -210, left: 466, description: villaTerms.oldOffice, veryHardToRead: true },
          { floor: 0, top: -291, left: 357, description: villaTerms.wineCellar, veryHardToRead: true },
          // Stairs
          { floor: 1, top: 262, left: 170, description: villaTerms.mainStairs, veryHardToRead: true },
          { floor: 2, top: 273, left: 180, description: villaTerms.mainStairs, veryHardToRead: true },
          { floor: 0, top: -40, left: 370, description: villaTerms.redStairs, veryHardToRead: true },
          { floor: 1, top: -40, left: 400, description: villaTerms.redStairs, veryHardToRead: true },
          { floor: 2, top: -43, left: 420, description: villaTerms.redStairs, hardToRead: true },
          { floor: 0, top: -331, left: 257, description: villaTerms.backStairs, veryHardToRead: true },
          { floor: 1, top: -316, left: 270, description: villaTerms.backStairs, veryHardToRead: true },
          { floor: 2, top: -370, left: 310, description: villaTerms.backStairs, veryHardToRead: true },
          { floor: 0, top: -321, left: 519, description: villaTerms.pantryStairs, veryHardToRead: true },
          { floor: 1, top: -315, left: 541, description: villaTerms.pantryStairs, veryHardToRead: true }
        ]
      }
      /*emptytemplate: {
        name: 'Empty',
        imgUrlPrefix: 'empty',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        floors: [],
        hostageObjectives: [],
        bombObjectives: [],
        secureObjectives: [],
        zoomPoints: {
          topLeft: {},
          bottomRight: {}
        },
        compassPoints: {
        },
        ladders: [
        ],
        cameras: [],
        ceilingHatches: [],
        skylights: [],
        droneTunnels: [],
        spawnPoints: [],
        roomLabels: []
      }*/
    };
  };

  return  {
    getMapData: getMapData
  };
})(R6MLangTerms);
