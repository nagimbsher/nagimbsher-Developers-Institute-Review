const planets =[
    {name:"Mercury",moons: 0},
    {name:"Venus",moons: 0},
    {name:"Earth",moons: 0},
    {name:"Mars",moons: 0},
    {name:"Jupiter",moons: 0},
    {name:"Sarurn",moons: 0},
    {name:"Uranus",moons: 0},
    {name:"Neptune",moons: 0},
]
for (const planet of planets){
    const planetDiv = document.createElement("div")
    planetDiv.classList.add("planet", planet.name.toLowerCase())

    for (let i = 0;i <planet.moons; i++){
        const moonDiv = document.createElement("div")
        moonDiv.classList.add("moon")
        moonDiv.style.left = i * 10 +"px"
        planetDiv.appendChild(moonDiv)
    }
    const section = document.querySelector(".listPlanets")
    section?.appendChild(planetDiv)
}