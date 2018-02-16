const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"
const cities = gotCitiesCSV.split (',');
const best = bestThing.split(' ');
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestof = bestThing.split('');

// Katas #1 - Display an array from the cities in gotCitiesCSV

function One() {

    let destination = document.getElementById('div1');
    const div = document.createElement('div');
    div.textContent = JSON.stringify(cities);
    div1.appendChild(div);

}


// Katas #2 - Display an array of words from the sentence in bestThing

function Two() {

    let destination = document.getElementById('div2');

    const div = document.createElement('div');
    div.textContent = JSON.stringify(best);
    div2.appendChild(div);
}

// Katas #3 - Display a string separated by semi-colons instead of commas from gotCitiesCSV

function Three() {

    let destination = document.getElementById('div3');
    const div = document.createElement('div');
    let res = gotCitiesCSV.replace(/,/g, ';');
    div.textContent = res
    

    div3.appendChild(div);

    
}


// Katas #4 - Display a CSV (comma-separated) string from the lotrCitiesArray

function Four() {

    let destination = document.getElementById('div4');
    const div = document.createElement('div');
    div.textContent = lotrCitiesArray.toString();
    div4.appendChild(div);

}


// Katas #5 - Display the first 5 cities in lotrCitiesArray

function Five() {

    let destination = document.getElementById('div5');
    const div = document.createElement('div')
    div.textContent = lotrCitiesArray.slice(0,5)
    div5.appendChild(div);
}


// Katas #6 - Display the last 5 cities in lotrCitiesArray

function Six() {

    let destination = document.getElementById('div6');
    const div = document.createElement('div');
    div.textContent = lotrCitiesArray.slice(-5);
    div6.appendChild(div);

}


// Katas #7 - Display the 3rd to 5th city in lotrCitiesArray

function Seven() {

    let destination = document.getElementById('div7');
    const div = document.createElement('div');
    div.textContent = lotrCitiesArray.slice(2,5);
    div7.appendChild(div);
}


// Katas #8 - Using splice, remove "Rohan" from lotrCitiesArray

function Eight() {

    let destination = document.getElementById('div8');
    const div = document.createElement('div');
    let lotr = lotrCitiesArray.splice(2,1);
    div.textContent = lotrCitiesArray;
    div8.appendChild(div);
}


// Katas #9 - Using splice, remove all cities after "Dead Marshes" in lotrCitiesArray

function Nine() {

    let destination = document.getElementById('div9');
    const div = document.createElement('div');
    let lotr = lotrCitiesArray.splice(-2,2);
    div.textContent = lotrCitiesArray;
    div9.appendChild(div);
}


// Katas #10 - Using splice, add "Rohan" back to lotrCitiesArray right after "Gondor"

function Ten() {

    let destination = document.getElementById('div10');
    const div = document.createElement('div');
    let lotr = lotrCitiesArray.splice(2, 0, 'Rohan');
    div.textContent = lotrCitiesArray;
    div10.appendChild(div);
}


// Katas #11 - Using splice, rename "Dead Marshes" to "Deadest Marshes" in lotrCitiesArray

function Eleven() {

    let destination = document.getElementById('div11');
    const div = document.createElement('div');
    let lotr = lotrCitiesArray.splice(-1, 1, 'Deadest Marshes');
    div.textContent = lotrCitiesArray;
    div11.appendChild(div);
}


// Katas #12 - Using slice, display the first 14 characters from bestThing

function Twelve() {

    let destination = document.getElementById('div12');
    const div = document.createElement('div');
    let be = bestof.slice(0,14);
    div.textContent = be;
    div12.appendChild(div);


}


// Katas #13 - Using slice, display the last 12 characters from bestThing

function Thirteen() {

    let destination = document.getElementById('div13');
    const div = document.createElement('div');
    let be = bestof.slice(-12);
    div.textContent = be;
    div13.appendChild(div);
}


// Katas #14 - Using slice, display characters between the 23rd and 38th position of bestThing (i.e., "boolean is even"

function Fourteen() {

    let destination = document.getElementById('div14');
    const div = document.createElement('div');
    let be = bestof.slice(22, 38);
    div.textContent = be;
    div14.appendChild(div);
}

// Katas #15 - Repeat #13 using substring instead of slice.

function Fifteen() {

    let destination = document.getElementById('div15');
    const div = document.createElement('div');
    let be = bestThing.substring(bestThing.length - 12);
    div.textContent = be;
    div15.appendChild(div);

}


// Katas #16 - Repeat #14 using substr instead of slice.

function Sixteen() {

    let destination = document.getElementById('div16');
    const div = document.createElement('div');
    let be = bestThing.substring(22, 38);
    div.textContent = be;
    div16.appendChild(div);
}


// Katas #17 - Find and display the index of "only" in bestThing

function Seventeen() {

    let destination = document.getElementById('div17');
    const div = document.createElement('div');
    let be = bestThing.indexOf('only');
    div.textContent = be;
    div17.appendChild(div);
}


// Katas #18 - Find and display the index of the last word in bestThing

function Eighteen() {

    let destination = document.getElementById('div18');
    const div = document.createElement('div');
    let be = bestThing.indexOf('bit');
    div.textContent = be;
    div18.appendChild(div);
}


// Katas #19 - Find and display all cities from gotCitiesCSV  that use double vowels ("aa","ee", etc.)

function Nineteen() {

    let destination = document.getElementById('div19');
    const div = document.createElement('div');
    let search = /aa|ee|ii|oo|uu/gi;
    

    let result = cities.filter(elem => search.test(elem));
            
             div.textContent = result;
             div19.appendChild(div);
        
    
}


// Katas #20 - Find and display all cities from lotrCitiesArray that end with "or"

function Twenty() {

    let destination = document.getElementById('div20');
    const div = document.createElement('div');
    let search = /or$/i;

    let result = lotrCitiesArray.filter(elem => search.test(elem));
    
        div.textContent = result;
        div20.appendChild(div);

}


// Katas #21 - Find and display all the words in bestThing that start with a "b"

function TwentyOne() {

    let destination = document.getElementById('div21');
    const div = document.createElement('div');
    let search = /^b/gi;

    let result = best.filter(elem => search.test(elem));

        div.textContent = result;
        div21.appendChild(div);
}


// Katas #22 - Display "Yes" or "No" if lotrCitiesArray includes "Mirkwood"

function TwentyTwo() {

    let destination = document.getElementById('div22');
    const div = document.createElement('div');

    if (lotrCitiesArray.includes('Mirkwood')) {

        div.textContent = "Yes";
        div22.appendChild(div);
    }
}


// Katas #23 - Display "Yes" or "No" if lotrCitiesArray includes "Hollywood"

function TwentyThree() {

    let destination = document.getElementById('div23');
    const div = document.createElement('div');

    if (lotrCitiesArray.includes('Hollywood')) {

        div.textContent = 'Yes';
        div23.appendChild(div);

    }

        else {

            div.textContent = 'No';
            div23.appendChild(div);
        }
    
}


// Katas #24 - Display the index of "Mirkwood" in lotrCitiesArray

function TwentyFour() {

    let destination = document.getElementById('div24');
    const div = document.createElement('div');

    div.textContent = lotrCitiesArray.indexOf('Mirkwood');
    div24.appendChild(div);
}


// Katas #25 - Find and display the first city in lotrCitiesArray that has more than one word

function TwentyFive() {

    let destination = document.getElementById('div25');
    const div = document.createElement('div');

    let search = / /gi;

    let result = lotrCitiesArray.filter(elem => search.test(elem));

    div.textContent = result;
    div25.appendChild(div);
}


// Katas #26 - Reverse the order in lotrCitiesArray

function TwentySix() {

    let destination = document.getElementById('div26');
    const div = document.createElement('div');

    div.textContent = lotrCitiesArray.reverse();
    div26.appendChild(div);
}


// Katas #27 - Sort lotrCitiesArray alphabetically

function TwentySeven() {

    let destination = document.getElementById('div27');
    const div = document.createElement('div');

    div.textContent = lotrCitiesArray.sort();
    div27.appendChild(div);
}


// Katas #28 - Sort lotrCitiesArray by the number of characters in each city (i.e., shortest city names go first)

function TwentyEight() {

    let destination = document.getElementById('div28');
    const div = document.createElement('div');

    div.textContent = lotrCitiesArray.sort(function(a, b) {return b.length - a.length});
    div28.appendChild(div);
}


// Katas #29 - Using pop, remove the last city from lotrCitiesArray

function TwentyNine() {

    let destination = document.getElementById('div29');
    const div = document.createElement('div');

    div.textContent = lotrCitiesArray.pop();
    div29.appendChild(div);
}


// Katas #30 - Using push, add back the city from lotrCitiesArray that was removed in #29 to the back of the array

function Thirty() {

    let destination = document.getElementById('div30');
    const div = document.createElement('div');

    let pushy = lotrCitiesArray.push('Rohan');
    div.textContent = pushy
    div30.appendChild(div);
}


// Katas #31 - Using shift, remove the first city from lotrCitiesArray

function ThirtyOne() {

    let destination = document.getElementById('div31');
    const div = document.createElement('div');

    div.textContent = lotrCitiesArray.shift();
    div31.appendChild(div);
}


// Katas #32 -Using unshift, add back the city from lotrCitiesArray that was removed in #31 to the front of the array

function ThirtyTwo() {

    let destination = document.getElementById('div32');
    const div = document.createElement('div');

    div.textContent = lotrCitiesArray.unshift('Deadest Marshes');
    div32.appendChild(div);
}


One();
Two();
Three();
Four();
Five();
Six();
Seven();
Eight();
Nine();
Ten();
Eleven();
Twelve();
Thirteen();
Fourteen();
Fifteen();
Sixteen();
Seventeen();
Eighteen();
Nineteen();
Twenty();
TwentyOne();
TwentyTwo();
TwentyThree();
TwentyFour();
TwentyFive();
TwentySix();
TwentySeven();
TwentyEight();
TwentyNine();
Thirty();
ThirtyOne();
ThirtyTwo();