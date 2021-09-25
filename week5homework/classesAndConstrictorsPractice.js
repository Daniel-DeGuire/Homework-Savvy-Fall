/* JS Classes & Constructors Practice
(This task is unrelated to the tasks above.)  */

/* In a new .js file, create a few classes. Create one "general category" class, then two more specific classes which extend from the first class 
For example: Perhaps you are creating a web store that sells video games and game consoles. You could create a general Item class to hold properties that any and every item for sale shares in common, like id, name, or price.
Then, extend Item with a class for GameConsoles and a class for VideoGames and include properties specific to each category of item. */

class MissouriMTBTrail {
    constructor(name, type, miles, region) {
        this.name = name;
        this.type = type;
        this.miles = miles;
        this.region = region; 
    }
}

class OzarkTrailMTBTrail extends MissouriMTBTrail {
    constructor(name, type, miles, region, district)  {
        super(name, type, miles, region);
        this.district = district;
    }
    ozarkBike() {
        return console.log(`Hi! ${this.name} is in the ${this.district} MTNF district`)
}
    }

    class STLTrailMTBTrail extends MissouriMTBTrail {
        constructor(name, type, miles, region, metro)  {
            super(name, type, miles, region);
            this.metro = metro;
        }
        STLBike() {
            return console.log(`Hi! ${this.name} is in the ${this.metro} Metro Area`)
    }
        }

const councilBluffLake = new OzarkTrailMTBTrail("Council Bluff Lake", "Single Track", 11, "Southwest MO", "Salem/Potosi")

const chubbTrail = new STLTrailMTBTrail("Chubb Trail", "Single Track", 8, "St Louis County", "West County")

councilBluffLake.ozarkBike();

chubbTrail.STLBike();