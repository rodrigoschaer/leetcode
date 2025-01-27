/**
 * @param {number} numCurses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
  // numCourses     => total of courses

  // prerequisites:
  // [[0,1], [1,2]] => must take 0 before to take 1
  //                => 1 is a preq of 2, so 0 is a preq of 2

  // queries:
  // [[0,1], [0,2]] => must tell if 0 is preq of 1 (true) or 0 is preq of 2 (true)

  // ideas:
  // create an adjacency list but containing a set of preqs:
  // [[1,0], [1,2], [3,0], [2,4]] => { 0: #{1}, 2: #{1}, 3: #{1,0}, 4: #{2,0} }
  // [[3,4], [2,3], [1,2], [0,1]] => { 0: #{}, 2: #{}, 3: #{2}, 4: #{3} }

  const adjList = {};
  for (let [p, c] of prerequisites) {
    adjList[c] = adjList[c] || [];
    adjList[c].push(p);
  }

  const prereqs = {};
  for (let i = 0; i < numCourses; i++) {
    dfs(i, prereqs);
  }
  console.log({ prereqs });

  return queries.map(([p, c]) => prereqs[c].has(p));

  function dfs(currentCourse, prereqs) {
    if (prereqs[currentCourse]) return prereqs[currentCourse];

    const currPreqs = new Set();
    const currentDependencies = adjList[currentCourse] || [];
    console.log({ currentDependencies });
    for (const preq of currentDependencies) {
      for (const p of dfs(preq, prereqs)) currPreqs.add(p);
    }
    currPreqs.add(currentCourse);

    prereqs[currentCourse] = currPreqs;
    return currPreqs;
  }
};

console.log(
  checkIfPrerequisite(
    5,
    [
      [3, 4],
      [2, 3],
      [1, 2],
      [0, 1],
    ],
    [
      [0, 4],
      [4, 0],
      [1, 3],
      [3, 0],
    ],
  ),
);

//  [true, false, true, false]
