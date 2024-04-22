
import fs from 'fs';

fs.readFile('data.json', 'utf-8', (err, data) => {
    if (err) throw err;

    console.log(data);
    console.log(typeof data);

    let users = JSON.parse(data);
    console.log(users);

    let Females = users.filter((user)=>{
        if(user.gender === "Female"){
            return user.gender
        }
    })

    console.log(Females);
    let femaleNames = Females.map((female)=>{
        return female.name
    })

    
    //let str=JSON.stringify(maleNames)

    fs.writeFile('female.txt', femaleNames.join('\n'), (err) => {
        if (err) throw err;
        console.log('female data saved to female.txt');
    });
});