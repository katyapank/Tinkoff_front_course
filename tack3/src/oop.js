class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    lengthtoPoint() {
        return (this.length = Math.sqrt(this.x ** 2 + this.y ** 2));
    }
}

class Point3D extends Point {
    constructor(x = 0, y = 0, z = 0) {
        super(x, y);
        this.z = z;
    }
    static vectorLength(a, b) {
        return Math.sqrt(
            (a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2
        );
    }
}

class Queue {
    constructor(initArr = []) {
        this.array = [];
        this.size = initArr.length;
        if (this.size !== 0) {
            for (let i = 0; i < this.size; ++i) {
                this.array[i] = initArr[i];
            }
        }
    }

    push(...values) {
        for (let value of values) {
            this.array.push(value);
            this.size += 1;
        }
    }

    pop() {
        if (this.size > 0) {
            let tmp = this.array[0];
            this.array = this.array.slice(1);
            this.size -= 1;
            return tmp;
        }
    }

    clear() {
        this.array = [];
        this.size = 0;
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
