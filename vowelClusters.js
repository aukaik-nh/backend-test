function countVowelClusters(word) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    let inCluster = false;


    for (let char of word) {
        if (vowels.includes(char)) {
            if (!inCluster) {
                count++;
                inCluster = true;
            }
        } else {
            inCluster = false;
        }
    }


    return count;
}
const input = "beautiful";
const result = countVowelClusters(input);
console.log(result);




