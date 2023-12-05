'use strict';
function fioToName(fio) {
    let [lastName, firstName] = fio.split(' ');
    return `${firstName} ${lastName}`;
}

function filterUnique(array) {
    const newSet = new Set(array);
    return Array.from(newSet);
}

function calculateSalaryDifference(array) {
    if (!array.length) return false;
    else {
        const max = array.reduce(function (acc, item) {
            if (acc < item) acc = item;
            return acc;
        });
        const min = array.reduce(function (acc, item) {
            if (acc > item) acc = item;
            return acc;
        });
        return max / min;
    }
}

class Dictionary {
    constructor() {
        this.map = new Map();
    }
    get(def) {
        if (typeof def === 'string' && this.map.has(def))
            return this.map.get(def);
        else return false;
    }
    set(def, desc) {
        if (typeof def === 'string' && typeof desc === 'string') {
            this.map.set(def, desc);
        } else return false;
    }
    showSelectedWord(def) {
        if (typeof def === 'string') {
            if (this.map.has(def)) console.log(def + ' ' + this.get(def));
            else return false;
        } else return false;
    }
    remove(def) {
        if (typeof def === 'string') {
            if (this.map.has(def)) {
                this.map.delete(def);
                return true;
            } else return false;
        } else return false;
    }

    showAllWords() {
        for (let key of this.map.keys()) {
            console.log(key + ' ' + this.get(key));
        }
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference,
};
