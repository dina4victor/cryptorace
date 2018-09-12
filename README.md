Download and install mangodb in laptop
---------------------------------------
https://www.mongodb.com/download-center?jmp=nav#community

<h1>create database: </h1>
use cryptorace

<h1>Create Collection (table):</h1>
db.createCollection("players");

----------------
<h1>compile code</h1> 
npm install 

<h1>run</h1> 
npm start 

------------------
<h1>API's</h1> 

http://localhost:4000/                     --> test the connection returns "Crypto Race API" (GET)  <br>
http://localhost:4000/api/v1/player/PK2    --> get a player with PrivateKey PK2    (GET) <br>
http://localhost:4000/api/v1/player        --> get list of all the players  (GET) <br>
http://localhost:4000/api/v1/player/PK2  (provide the json content in body) --> save the new player PK2  (POST) <br>
http://localhost:4000/api/v1/player/PK2  (provide the json content in body) --> update the player PK2   (PUT) <br>


----------------------

<h1>JSON object of a player</h1> 

[
    {
        "_id": "5b985d44ef680d3c4c859b32",
        "privateKey": "PK1",
        "publicKey": "PA1",
        "coinCount": 10,
        "card": "Blockchain Management",
        "blocks": [
            {
                "resources": [
                    {
                        "_id": "5b985d44ef680d3c4c859b3a",
                        "name": "BlockChain",
                        "isHired": true
                    },
                    {
                        "_id": "5b985d44ef680d3c4c859b39",
                        "name": "Infrastructure",
                        "isHired": false
                    },
                    {
                        "_id": "5b985d44ef680d3c4c859b38",
                        "name": "Backend Developer",
                        "isHired": false
                    }
                ],
                "_id": "5b985d44ef680d3c4c859b37",
                "blockNo": 0,
                "startCount": 0,
                "endCount": 2,
                "boardPosition": 5
            },
            {
                "resources": [
                    {
                        "_id": "5b985d44ef680d3c4c859b36",
                        "name": "UI Developer",
                        "isHired": true
                    },
                    {
                        "_id": "5b985d44ef680d3c4c859b35",
                        "name": "Infrastructure",
                        "isHired": true
                    },
                    {
                        "_id": "5b985d44ef680d3c4c859b34",
                        "name": "Backend",
                        "isHired": false
                    }
                ],
                "_id": "5b985d44ef680d3c4c859b33",
                "blockNo": 1,
                "startCount": 2,
                "endCount": 3,
                "boardPosition": 11
            }
        ],
        "__v": 0
    }
]

-----
