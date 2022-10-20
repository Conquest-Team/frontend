let claimed = [
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
        color: "#f0f0f0"
    }
]

let fakeDataCountries = {
    LTU: {
        name: "Baltic Monkies",
        populationSize: 5679028
    },
    EST: {
        name: "JAJA town 3400699",
        populationSize: 1028425
    },
    LVA: {
        name: "Funky monkey country",
        populationSize: 1232123e12
    }
}
function adjust(color, amount) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}

function style(feature) {
    let style = {
        stroke: true,
        fill: true,
        fillColor: 'rgb(51, 46, 46)',
        fillOpacity: 0.4,
        color: "blueviolet"
    };
    
    let claim = claimed.find(x => x.iso == feature.properties.iso_a3);

    if(claim) {
        style.fillColor = claim.color;
        style.color = adjust(claim.color, -90)
    }

    return style;
}

const map = L.map('map').setView([39.74739, -105], 4);
let old = "";

let layer = L.geoJson(await (await fetch("./assets/mapData.json")).json(), {
    clickable: true,
    style,
    onEachFeature: function (feature, layer) {
        layer.on("click", () => {
            prompt("Would you want to start a new country here? (unifinished, i need modals from dimedead for this and also i need to figure out how creating a new country would work)")
        })
        layer.on('mousemove', function (event) {
            let name = feature.properties.name;
            
            if(claimed.find(x => x.iso == feature.properties.iso_a3)) {
                if(!layer._tooltipHandlersAdded) {
                    let fine = fakeDataCountries[feature.properties.iso_a3];

                    console.log("requesting " + feature.properties.name + " information (Layer Hover)")
                    layer.bindTooltip("<h4>"+feature.properties.name+"</h4>Owned by <span>"+fine.name+"</span>. <br>Population: "+fine.populationSize.toLocaleString()).openTooltip();
                }
            }

            if(old != name) {
                old = name;
                console.log(old)
            } 
        });
    }
}).addTo(map);