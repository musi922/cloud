const paragraph = document.querySelector("#myParagraph").innerText.toLowerCase().split(/[,\s:;.]+/);
const wordCloud = document.querySelector('#myWordCloud');

let result = [];

// removing duplicates to the array of strings
const unique = [...new Set(paragraph)];

// creating an array of each individual word and it's occurence
for(let j=0;j<unique.length;j++){
    result.push({
        'text':unique[j],
        'occurence':countWords(unique[j])
    })
}

// function to check the occurence of a word
function countWords (word){
    let count = 0;
    for(let i=0; i<paragraph.length; i++){
        if(paragraph[i] === word){
            count++;
        }
    }
    return count;

}
console.log(result);
// sorting the array based on the occurence from biggest to lowest
result = result.sort(function(a,b){
    return b.occurence - a.occurence
}).slice(0,12)

console.log(result);


wordCloud.innerText=""
for(let m=0, fontSize = 64; m<result.length;m++,fontSize-=4){
    let wordContainer = document.createElement('p')
    let wordText = document.createTextNode(result[m]['text'])
    wordContainer.appendChild(wordText)
    wordCloud.appendChild(wordContainer)
    wordContainer.style.fontSize=fontSize+'px'

};








