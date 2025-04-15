function getPermutations(str) {  
    if (str.length === 1) return [str];

    const result = [];
 
    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        const remaining = str.slice(0, i) + str.slice(i + 1); 
        const perms = getPermutations(remaining);
        for (let perm of perms) {
            result.push(currentChar + perm);
        }
    }

    return result;
}

const input = "ABC";
const perms = getPermutations(input);
perms.forEach(p => console.log(p));
