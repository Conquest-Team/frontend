# About
Conquest - Geographical war and country game

# TODO

## In terms of API
1. StartCountry API
2. War API's
2.1. /v1/country/war/??? idk how these warswork, 

## In terms everything else
1. Alert modals
2. Make invites-invitable (but this kinda requires the API so.. whatever)
3. Advise Yeti on using Postgres and other shit

# API
> ***https://api.conquestga.me/v1/country/invites/send***
```js
{
   username: "somebody"
}

```
> ***https://api.conquestga.me/v1/country/invites/remove***
```js
{
  username: "somebody"
}
```

> ***https://api.conquestga.me/v1/user/invites/accept***
```js
{
  country: "United Imposters"
}
```

> ***https://api.conquestga.me/v1/user/invites/deny***
```js
{
  country: "United Imposters"
}
```

> ***https://api.conquestga.me/v1/user/invites/view***
```js
["United Imposters", "Amongus Union"]
```

> ***https://api.conquestga.me/v1/:COUNTRY/data***
api.conquestga.me/LVA/data (LVA being the iso_a3 code for the country)
```js
{
    ownedBy: {
        name: "United Imposters",
        populationSize: 5679028
    } // or Undefined (if no owner)
}
```

> ***https://api.conquestga.me/v1/claimedCountries***
```js
    {
        iso: "LVA",
        color: "#ff0000"
    },
    {
        iso: "LTU",
        color: "#00ff00"
    },
    {
        iso: "EST",
        color: "#0f0f0f"
    }
```

> ***wss://api.conquestga.me/v1/chat***  

Websocket-type protocol. (i can do this in c++)

Server to Client ->  
```js
{type: "authenicate", token: "blalblaba"}
{type: "chat", username: "hi", message: "poop"}
{type: "discord", username: "hi#6969", message: "shit poop godong"}
```

Client to Server -> 
```js
{type: "authenicationSuccess"} or {type: "authenicationFail"}
{message: "hello"}
```
The discord support would be baked in

> ***https://api.conquestga.me/v1/user/data***
```js
{
    country: {
        name: "United Imposters",
        flag: "https://i.redd.it/jpdd7xibew271.gif",
        color: "#ff00ff",
        ownedCountries: ["BLR", "POL", "UKR"]
        people: [
            {
                username: "y",
                rank: "Leader"
            }, 
            {
                username: "wynnj",
                rank: "Military Leader"
            },
            {
                username: "eperou",
                rank: "Peasant"
            }
        ],
        armySize: 1292,
        populationSize: 5679028,
        invites: [
            "DimeDead",
            "Allah",
            "bismallah"
        ]
    },
    user: {
        settings: {
            canBeInvited: false,
            seeChat: true
        }
    }
}
```