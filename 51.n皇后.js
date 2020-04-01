/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  if (n < 1) return [];
  let res = [];
  let cols = new Set();
  let pie = new Set();
  let na = new Set();
  dfs(cols, pie, na, res, n, 0, []);
  return genResult(res, n);
};

var dfs = function(cols, pie, na, res, n, row, cur) {
  if (row >= n) {
    res.push(cur);
    return;
  }
  for (const col of [...Array(n).keys()]) {
    if (cols.has(col) || pie.has(row + col) || na.has(row - col)) {
      continue;
    } else {
      cols.add(col);
      pie.add(row + col);
      na.add(row - col);
      dfs(cols, pie, na, res, n, row + 1, cur + [col]);
      cols.delete(col);
      pie.delete(row + col);
      na.delete(row - col);
    }
  }
};

var genResult = function(result, n) {
  let board = [];
  for (const res of result) {
    for (const i of res) {
      board.push(".".repeat(i) + "Q" + "." .repeat(n - i - 1));
    }
  }
  return chunk(board, n);
};

function chunk(arr, size) {
  let newArr =[];
  for(let i = 0; i < arr.length; i+=size){
    newArr.push(arr.slice(i, i+size));
  }
  return newArr;
}
// @lc code=end
 