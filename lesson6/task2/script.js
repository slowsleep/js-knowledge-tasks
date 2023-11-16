function nameSection(url) {
    return url.split('/')[4];
}

console.log(nameSection('https://www.reddit.com/r/2nordic4you/'));
console.log(nameSection('https://www.reddit.com/r/2nordic4you/comments/10fbofj/how_to_get_a_flair/'));
