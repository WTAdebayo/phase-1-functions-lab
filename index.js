// Code your solution in this file!
//returns distance from hq in block

const scuber = 42
const blockInFeet = 264

function distanceFromHqInBlocks(blockNumber) {
    if (scuber > blockNumber) {
    return scuber - blockNumber}
        else 
        return blockNumber - scuber;
}

//returns distance from hq in feet

function distanceFromHqInFeet(distanceFromHqFeet) {
    return blockInFeet * distanceFromHqInBlocks(distanceFromHqFeet); 
}

//returns distance from starting location to ending location in feet

function distanceTravelledInFeet(start, finish) {
    if (start > finish)
        return (start - finish) * blockInFeet;
            else
            return (finish - start) * blockInFeet;
}

//returns fare based on distance travelled

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <400) {
        return 0
}
    else if (distanceTravelledInFeet(start,destination) < 2000) {
        return .02 * ((distanceTravelledInFeet(start, destination)) - 400)
    }

    else if (distanceTravelledInFeet(start, destination) < 2500) {
        return 25
}
    else if (distanceTravelledInFeet(start, destination) >= 2500) {
        return 'cannot travel that far'
}
}