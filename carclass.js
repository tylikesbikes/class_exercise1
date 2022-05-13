class Vehicle {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    };

    honk() {
        return 'Beep';
    }

    toString() {
        return `The vehicle is a ${make} ${model} from ${year}`;
    }
}


class Car extends Vehicle {
    constructor(make, model, year, numWheels) {
        super(make,model,year);
        this.numWheels = numWheels;
    }   
}

class Motorcycle extends Vehicle {
    constructor (make, model, year, numWheels) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return 'VROOOM!';
    }
}

// create a class called Garage.  it should include an array called vehicles and a capacity -- the total # of vehicles that will fit.
// when you create a garage, vehicles will always be empty; you only specify the capacity


//A garage should also have an add method, which attempts to add a vehicle to the array of vehicles. However, if you try to add something which is not a vehicle, 
//the garage should return the message “Only vehicles are allowed in here!”. Also, if the garage is at capacity, it should say “Sorry, we’re full.”

class Garage {
    constructor (capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(veh) {
        if (veh instanceof Vehicle) {
            if (this.vehicles.length<this.capacity) {
                this.vehicles.push(veh);
            } else {
                'Sorry, we\'re full';
            }
        } else {
            console.log('Only vehicles are allowed in here!');
        }
    }
}