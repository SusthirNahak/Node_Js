
import fs from 'fs';

fs.readFile('data.json', 'utf-8', (err, data) => {
    if (err) throw err;

    console.log(data);
    console.log(typeof data);

    let users = JSON.parse(data);
    console.log(users);

    let Males = users.filter((male)=>{
        if(male.gender === "Male"){
            return male.gender
        }
    })


    console.log(Males);
    let maleNames = Males.map((malen)=>{
        return malen.name
    })

    
    //let str=JSON.stringify(maleNames)

    fs.writeFile('male.txt', maleNames.join('\n'), (err) => {
        if (err) throw err;
        console.log('male data saved to male.txt');
    });
});