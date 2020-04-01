/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  if (n < 1) return 0;
  let res = [];
  let cols = new Set();
  let pie = new Set();
  let na = new Set();
  dfs(cols, pie, na, res, n, 0, []);
  return res.length
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
// @lc code=end

