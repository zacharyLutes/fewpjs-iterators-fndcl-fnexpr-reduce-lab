const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = 0;
// Code your solution here
const reducer = () => {
    for (const item of batteryBatches) {
        totalBatteries += item;
    }
    return totalBatteries;
}
win = reducer(batteryBatches);