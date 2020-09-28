var plan=document.querySelector(".plan")
plan.animate(
    [
        {transform:"translate(100px,100px)"},
        {transform:"translate(300px,200px)"},
        {transform:"translate(500px,300px)"},
        {transform:"translate(700px,300px)"},
        {transform:"translate(1000px,300px)"}
    ],
    {
        duration:4000,
        iterations:Infinity,
    }
)

var bird=document.querySelector(".bird")
bird.animate(
    [
        {transform:"translateX(0px)"},
        {transform:"translateX(100px)"},
        {transform:"translateX(300px)"},
        {transform:"translateX(400px)"},
        {transform:"translateX(500px)"},
        {transform:"translateX(700px)"},
        {transform:"translateX(800px)"},
        {transform:"translateX(1000px)"}
    ],
    {
        duration:7000,
        iterations:Infinity,
    }
)

var clouda=document.querySelector(".clouda")
clouda.animate(
    [
        {transform:"translateX(800px)"},
        {transform:"translateX(500px)"},
        {transform:"translateX(300px)"},
        {transform:"translateX(100px)"},
        {transform:"translateX(-200px)"},
    ],
    {
        duration:7000,
        iterations:Infinity,
    }
)

var cloudb=document.querySelector(".cloudb")
cloudb.animate(
    [
        {transform:"translateX(0px)"},
        {transform:"translateX(-100px)"},
        {transform:"translateX(-300px)"},
        {transform:"translateX(-400px)"},
        {transform:"translateX(-700px)"},
        // {transform:"translateX(500px)"}
        // {transform:"translateX(500px)"},
        // {transform:"translateX(400px)"},
        // {transform:"translateX(200px)"},
        // {transform:"translateX(-200px)"},
    ],
    {
        duration:9000,
        iterations:Infinity,
    }
)
