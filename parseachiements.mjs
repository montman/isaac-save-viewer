import { readFile, writeFile } from 'fs/promises';
import { parse } from 'node-html-parser';

let res = await fetch('https://bindingofisaacrebirth.fandom.com/wiki/Achievements')
let html = await res.text();
const root = parse(html);
const tables = root.querySelectorAll('table').slice(0, 4);
let achievements = [];
tables.forEach(table => {
    let rows = table.querySelectorAll('tr').slice(1);
    rows.forEach(row => {
        let columns = row.querySelectorAll('td');
        achievements.push({
            imageSrc: columns[1].querySelector('img')?.getAttribute('data-src'),
            name: columns[0].innerText.replaceAll('&#32;', '').replaceAll('\n', ''),
            description: columns[2].innerText.replaceAll('&#32;', '').replaceAll('\n', ''),
            unlock: columns[3].innerText.replaceAll('&#32;', '').replaceAll('\n', ''),
            id: parseInt(columns[4].innerText.replaceAll('&#32;', '').replaceAll('\n', '')),
        })
    })

})
await writeFile('achievements.json', JSON.stringify(achievements, null, 2));


/*let files = await readFile('src/data/data/achievements.json', 'utf-8');
let achievements = JSON.parse(files);
let achievements2 = [];
Object.keys(achievements).forEach((id) => {
    let entry = achievements[id];
    entry.id = id;
    achievements2.push(entry);
})
await writeFile('src/data/data/achievements2.json', JSON.stringify(achievements2, null, 2));*/