const words = document.querySelector("#myParagraph").innerText.split(/[.:;!,"\s]+/);
let paragraph = document.querySelector('#myParagraph')
let spans = document.querySelectorAll('span')


const uniqueWords = [...new Set(words)]
let obj={}
for(let i=0;i<words.length;i++){
    let count = 0;
    for(let j=0;j<uniqueWords.length;j++){
    if(words[i].includes(uniqueWords[j])){
        count++
        obj[words[i]] = count;
    }
    }
    count=0

}
let newArr=Object.entries(obj)
let sortedArr=newArr.sort((a,b)=>b[1] - a[1]).splice(0,5)
let arr=[]
let newpar=paragraph.textContent.split(' ')

for(let j=0;j<sortedArr.length;j++){
arr.push(sortedArr[j][0])
}

for (let i = 0 ; i< paragraph.textContent.length; i++){
    if(arr.includes(newpar[i])){
       if(newpar[i][0].toUpperCase() === newpar[i][0]){
        newpar[i] = `<span class="upper">${newpar[i]}</span>`
    }else  newpar[i] = `<span>${newpar[i]}</span>`
    }
}
console.log(newpar);

paragraph.innerHTML = newpar.join(' ')

