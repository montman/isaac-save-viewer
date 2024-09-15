import { readFile, writeFile } from 'fs/promises';
import { parse } from 'node-html-parser';

let res = await fetch('https://bindingofisaacrebirth.fandom.com/wiki/Achievements')
let html = await res.text();
const root = parse(html);
const tables = root.querySelectorAll('table').slice(0, 4);
let items = await readFile('items.json', 'utf-8');
items = JSON.parse(items);
let achievements = [];
tables.forEach(table => {
    let rows = table.querySelectorAll('tr').slice(1);
    rows.forEach(row => {
        let columns = row.querySelectorAll('td');
        let link = columns[0].querySelector('a');
        achievements.push({
            imageSrc: columns[1].querySelector('img')?.getAttribute('data-src'),
            name: columns[0].innerText.replaceAll('&#32;', '').replaceAll('\n', ''),
            link: link ? ('https://bindingofisaacrebirth.fandom.com' + link.getAttribute('href')) : null,
            description: columns[2].innerText.replaceAll('&#32;', '').replaceAll('\n', ''),
            unlock: columns[3].innerText.replaceAll('&#32;', '').replaceAll('\n', ''),
            id: parseInt(columns[4].innerText.replaceAll('&#32;', '').replaceAll('\n', '')),
        })
    })

})
achievements = achievements.map(a => {
    a.imageSrc = a.imageSrc.slice(0, a.imageSrc.indexOf('/revision'))
    if (a.link) {
        let item = items.find(i => i.link == a.link);
        if (item) {
            a.item = item;
            delete a.item.link;

        }
        delete a.link;
    }
    return a;
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