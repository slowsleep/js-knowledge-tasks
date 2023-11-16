function transformUpvotes(arr) {
    return arr.map(i => i.includes('k') ? Number(i.replace('k', '')) * 1000 : Number(i));
}

console.log(transformUpvotes(['10k', '2.3k', '5k', '32', '28.4k']));
