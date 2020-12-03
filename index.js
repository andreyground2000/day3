// Repeat
function repeat2(string, count) {
    string = String(string);
    count = Number(count);
    let res = "";
    if (!count) {
        return `""`;
    } else if (count < 0) {
        throw new Error('Your number is negative');
    } else if (count === Infinity) {
        throw new Error("Ooops...Infinity number");
    } else {
        for (let i = 0; i < Math.round(count); i++) {
            res+=string;
        }
    }
    return res;
}

console.log(repeat2("cv", 3));

//Includes
function includes2(word, matches) {
    word = String(word);
    matches = String(matches);
    let reg = new RegExp(matches);
    return reg.test(word);
}

console.log(includes2("asdfg", "fg"));

//concat
function concat2() {
    let str = "";
    for (let item of arguments) {
        str += item;
    }
    return str;
}

console.log(concat2("hello", 12, {name: "serg"}, ["bang", 35]));

//substring
function substring2(word, start, leng = word.length) {
    let res = "";
    for (let i = 0; i < word.length; i++) {
        if (i === start) {
            for (let j = i; j <= leng -1; j++) {
                res += word[j];
            }    
        } 

    }
    return res;
}

console.log(substring2("asdfgh", 1, 3));

//substr
function substr2(word, start, leng) {
    let res = "";
    for (let i = start; i < word.length; i++) {
            res += word[i];
            if (i > leng) {
                break;
            }       
    }
    return res;
}

console.log(substr2("asdfgh", 2, 4));



