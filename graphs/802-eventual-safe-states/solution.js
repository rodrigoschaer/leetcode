/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
    // Brute: try to find a terminal node for each node!
    const safe = {}

    // Start by iterating over the array, explore for each path;
    let ans = [];
    for (let i = 0; i < graph.length; i++) {
        if (isSafe(graph, i)) ans.push(i)
    }
    return ans;

    // Recursively check if the children are safe
    function isSafe(graph, node) {
        if (node in safe) return safe[node];

        // Negative Space
        safe[node] = false;
        if (graph[node].some(adj => !isSafe(graph, adj))) return false;

        // Positive Space
        safe[node] = true;
        return true;
    }
};
