const oldestAmongTwo = function(person1, person2) {
    const curYear = new Date().getFullYear();

    let age1 = 0;
    let age2 = 0;

    if (person1["yearOfDeath"]) age1 = person1.yearOfDeath - person1.yearOfBirth;
    else age1 = curYear - person1.yearOfBirth;
    
    if (person2["yearOfDeath"]) age2 = person2.yearOfDeath - person2.yearOfBirth;
    else age2 = curYear - person2.yearOfBirth;

    return age1 > age2 ? person1 : person2;
}

const findTheOldest = function (people) {
    const oldest = people.reduce((acc, cur) => {
        return oldestAmongTwo(acc, cur);
    }, people[0]);
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
