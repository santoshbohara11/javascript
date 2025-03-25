const students=[{
    name:'Alice',
    grade:9,
    score:40
},
{
    name:'Naresh',
    grade:10,
    score:70
},
{
    name:'Kamal',
    grade:11,
    score:90
},
{
    name:'Santosh',
    grade:7,
    score:60
},
{
    name:'Yogesh',
    grade:8,
    score:80
},
{
    name:'Navraj',
    grade:5,
    score:86
}
]


const score=students.filter((students)=>{
    return students.score>50
})
console.log(score)


// sorting
console.log(score.sort((a,b)=>a.score-b.score))

