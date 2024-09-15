import { readFile, writeFile } from 'fs/promises';
import { parse } from 'node-html-parser';

let res = await fetch('https://bindingofisaacrebirth.fandom.com/wiki/Items')
let html = await res.text();
const root = parse(html);
const tables = root.querySelectorAll('table').slice(0, 2);
let items = [];
tables.forEach(table => {
    let rows = table.querySelectorAll('tr').slice(1);
    rows.forEach(row => {
        let columns = row.querySelectorAll('td');
        items.push({
            name: columns[0].innerText.replaceAll('\n', '').trim(),
            id: parseInt(columns[1].innerText.replaceAll('\n', '').replaceAll('5.100.', '')),
            imageSrc: columns[2].querySelector('img')?.getAttribute('data-src'),
            description: columns[4].innerText.replaceAll('\n', ''),
            quality: parseInt(columns[5].innerText),
            link: 'https://bindingofisaacrebirth.fandom.com' + columns[0].querySelector('a').getAttribute('href')
        })
    })

})
items = items.filter(item => item.name !== '').map(el => {
    el.imageSrc = el.imageSrc.slice(0, el.imageSrc.indexOf('/revision'))
    return el
});
items.sort((a, b) => a.id - b.id)
await writeFile('items.json', JSON.stringify(items, null, 2));
console.log(items.length);


/*let files = await readFile('src/data/data/achievements.json', 'utf-8');
let achievements = JSON.parse(files);
let achievements2 = [];
Object.keys(achievements).forEach((id) => {
    let entry = achievements[id];
    entry.id = id;
    achievements2.push(entry);
})
await writeFile('src/data/data/achievements2.json', JSON.stringify(achievements2, null, 2));*/