if(localStorage.getItem("token")) {
    const tokenRequest = await fetch("https://api.melon.rest/api/v1/@me/info", {
        headers: {
            "x-token": localStorage.getItem("token")
        }
    })    

    if(!tokenRequest.ok) {
        localStorage.removeItem("token");
        location = "/"
    } else {
        const json = await tokenRequest.json();

        document.getElementById("game").style.opacity = "100%";
        document.getElementById("loading").style.opacity = "0%";

        [...document.getElementsByClassName("username")].forEach(x => x.innerHTML += json.username)
    }
} else {
    location = "/"
}

const data = {
    country: {
        name: "United Imposters",
        flag: "https://i.redd.it/jpdd7xibew271.gif",
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

const people = document.getElementById("people");
const invites = document.getElementById("invites");

data.country.people.forEach(x => {
    const li = document.createElement("li");
    li.innerText = `${x.username} (${x.rank})`
    people.appendChild(li);
})

if(data.country.invites.length !== 0) {
    data.country.invites.forEach(x => {
        const li = document.createElement("li");
        li.innerText = x;
        invites.appendChild(li);
    })
} else {
    invites.innerText = "None to be found!"
}

document.getElementById("countryName").innerText += data.country.name;
document.getElementById("army").innerText += " "+data.country.armySize.toLocaleString();
document.getElementById("population").innerText += " "+data.country.populationSize.toLocaleString();

document.getElementById("countryFlag").src = data.country.flag;