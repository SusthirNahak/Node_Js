// import fs from 'fs'
// let data = fs.readFile('data.json','utf-8',(err,data)=>{
//     if (err) throw err
//     console.log(data);
//     console.log(typeof data);
//     let sf_data = JSON.parse(data)
//     console.log(sf_data);

//     let emails = sf_data.map(sf=>sf.email)
//  fs.writeFile('email.txt',emails,(err)=>{
//     if (err) throw err
//     console.log("emails saved!!");
//  })
// })





import fs from 'fs';

fs.readFile('data.json', 'utf-8', (err, data) => {
    if (err) throw err;

    console.log(data);
    console.log(typeof data);
    //  the datas we are getting in data is string by JSON.parse method we are converting string to js object
    let sf_data = JSON.parse(data);
    console.log(sf_data);

    let emails = sf_data.map((sf)=>{
        return sf.email
    });
    console.log(emails);

    fs.writeFile('email.txt', emails.join('\n'), (err) => {
        if (err) throw err;
        console.log('Emails saved to email.txt');
    });
});