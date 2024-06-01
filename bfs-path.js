function findNeighbors(node, matrix) {
    // Up

    // Down

    // Left

    // Right

    // Your code here 
    let res = [];
    let [row, col] = node;
    let up = [row-1, col];
    let down = [row+1, col];
    let left = [row, col-1];
    let right = [row, col+1];
    let check = [up, down, left, right];

    for (let i = 0; i < check.length; i++) {
        let el = check[i];
        if (el[0] >= 0 && el[1] >= 0 && el[0] <= matrix.length-1 && el[1] <= matrix[0].length-1) {
            res.push(el);
        }  
    }
    

    return res;
}


function bfsPath(matrix, startNode, endValue) {
    // Your code here 
    // find all 4 neighbors of the startNode

    // option 1: using simple breadth-first search

    let queue = [startNode];
    let visited = new Set();
    // let res = [startNode];
    let res = [];

    while (queue.length) {
        
        let currentNode = queue.shift();
        res.push(currentNode);

        if (matrix[currentNode[0]][currentNode[1]] === endValue) {
            // res.slice()
            return res;
        }
        if (!visited.has(currentNode.toString())) {
            visited.add(currentNode.toString());
        }

        let neighbors = findNeighbors(currentNode, matrix);

        for (let neighbor of neighbors) {
            if (!visited.has(neighbor.toString())) {
                visited.add(neighbor.toString());
                queue.push(neighbor);
                // res.push(neighbor);
                // console.log('res and level: ', res, ' & ', res.length);
            }
        }
    }
    return false;

    // // [different results] Option 2: finding shortestPath towards endValue through breadth-first search
    // let queue = [[startNode]];
    // let visited = new Set([startNode].toString());

    // while (queue.length) {
    //     let currentPath = queue.shift();
    //     let lastC = currentPath[currentPath.length-1];

    //     if (matrix[lastC[0]][lastC[1]] === endValue) return currentPath;

    //     if (!visited.has(lastC.toString())) {
    //         visited.add(lastC.toString());
    //     }

    //     let neighbors = findNeighbors(lastC, matrix);

    //     for (let neighbor of neighbors) {
    //         if (!visited.has(neighbor.toString())) {
    //             visited.add(neighbor.toString());
    //             queue.push(currentPath.concat([neighbor]));
    //         }
    //     }

    
    // }
    // return false;

}


// ***** UNCOMMENT FOR LOCAL TESTING *****

const matrix1 = [ 
    [  1,  2,  3,  4 ],
    [  5,  6,  7,  8 ],
    [  9, 10, 11, 12 ],
    [ 13, 14, 15, 16 ]
];

// // EXAMPLE TESTS #1. Tests for findNeighbors function
// console.log(findNeighbors([1,1], matrix1)) // Finds all 4 neighbors from an
// // internal node (left, right, down, up)
// // [ [ 0, 1 ], [ 2, 1 ], [ 1, 2 ], [ 1, 0 ] ]

// console.log(findNeighbors([0,0], matrix1)); // Finds two neighbors from a
// // corner node // [ [ 1, 0 ], [ 0, 1 ] ]

// console.log(findNeighbors([3,1], matrix1)); // Finds three neighbors from
// // an edge node // [ [ 2, 1 ], [ 3, 2 ], [ 3, 0 ] ]


// EXAMPLE TESTS #2. Tests for bfsPath function

console.log(bfsPath(matrix1, [0,0], 16)); // can traverse the entire matrix
// returns an array of coordinates with no duplicates:

// [
//     [ 0, 0 ], [ 1, 0 ],
//     [ 0, 1 ], [ 2, 0 ],
//     [ 1, 1 ], [ 0, 2 ],
//     [ 3, 0 ], [ 2, 1 ],
//     [ 1, 2 ], [ 0, 3 ],
//     [ 3, 1 ], [ 2, 2 ],
//     [ 1, 3 ], [ 3, 2 ],
//     [ 2, 3 ], [ 3, 3 ]
//  ]

// Note for debugging purposes: The coordinates should represent the following matrix values, in order:
// 1 5 2 9 6 3 13 10 7 4 14 11 8 15 12 16

console.log(bfsPath(matrix1, [2,2], 11)); // returns a single node if end
// // value is located at start node
// // [ [ 2, 2 ] ]

console.log(bfsPath(matrix1, [1,2], 8)); // can handle various start nodes 
// // and end values
// // [ [ 1, 2 ], [ 0, 2 ], [ 2, 2 ], [ 1, 1 ], [ 1, 3 ] ]

// console.log(bfsPath(matrix1, [0,0], 17)); // can return false if end value 
// // is not found
// // false

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [findNeighbors, bfsPath];

