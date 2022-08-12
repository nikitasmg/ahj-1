import {sum} from "../components/Sum";

test.each([
    ['Sum should return 0', [0,0], 0],
    ['Sum should return 2', [1,1], 2],
    ['Sum should return -10', [0,-10], -10],
    ['Sum should return 40', [20,20], 40],
])('objects should be equal ', (_, numbers, expected) => {
    expect(sum(...numbers)).toEqual(expected);
});

