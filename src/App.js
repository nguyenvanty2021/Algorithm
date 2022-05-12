import './App.css';
import solution1 from './img/solution1.png'
import solution3 from './img/solution3.png'
import solution4 from './img/solution4.png'
import solution21 from './img/solution2-1.png'
import solution22 from './img/solution2-2.png'
import solution5 from './img/solution5.png'
function App() {
  const valueSolution1 = -123
  const valueSolution2 = '2137 asdasda 5'
  const valueSolution3a = 'hello', valueSolution3b = 'll'
  const valueSolution4a = [2, 5, 10], valueSolution4b = 19
  const valueSolution5a = 'A man, a plan, a canal: Panama'
  const valueSolution6a = [1,5,4,2,3,1]
  var reverse = function(x) {
    // Math.abs(x): trị tuyệt đối -> giúp bỏ dấu - đi // dùng Math.abs khi đầu vào chỉ là số
    // toString(): parse về string
    // split(''): chuyển thành mảng ký tự. Example: '123' = ['1','2','3']
    // reverse(): đảo mảng
    // join(''): parse về số lại
    // Math.sign(x): nếu x là số dương trả về 1, số âm trả về -1, số 0 trả về 0
    const absReversed = Math.abs(x).toString().split('').reverse().join('');
    if (absReversed > 2**31) return 0;
    return absReversed * Math.sign(x);
  };
  var myAtoi = function(str) {
    // min = -2^31, max = 2^31-1
    let i=0, sign = 1, num = 0, MIN = -2147483648, MAX = 2147483647;
    // bỏ khoảng trắng đầu, cuối của chuỗi
    str = str.trim();
    // nếu ký tự đầu tiên là + thì return 1, - thì return -1 -> với i lúc này = 0 -> dùng cách này thay Math.abs khi đầu vào là số và chuỗi
    if (str[i]==='-' || str[i]==='+') {
      // sau đó tăng i lên 1 -> với i lúc này = 1
      sign = str[i++]==='-'?-1:1; 
    }
    // parseInt(' ') = NaN
    // parseInt('a') = NaN
    // parseInt('1') = 1 // typeof number
    while (str[i] && parseInt(str[i]) <= 9 && parseInt(str[i]) >= 0) {
        num = num*10 + parseInt(str[i++]);
    }
    num = sign*num;
    return num<=MIN?MIN:num>=MAX?MAX:num;
};
var strStr = function(haystack, needle) {
  if (haystack === needle || needle === "" || haystack === '') {
      return 0;
  }
  // haystack = 'hello', needle = 'll'
  for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] === needle[0]) {
          // needle[0] = l
          // haystack[i] = l -> i = 2
          // haystack.substring(i, i + needle.length) = haystack.substring(2, 2+2=4) -> nghĩa là cắt chuỗi từ vị trí 2 đến 3 -> lấy ra 2 chữ ll trong text 'hello'
          let temp = haystack.substring(i, i + needle.length);
          if (temp === needle) {
              return i;
          }
      }
  }
  return -1;
};
// candidates = [2, 5, 10], target = 19
var combinationSum = function(candidates, target) {
  const result = [];
  function permute(arr=[], sum=0, idx=0) {
      if(sum > target) return;
      if(sum === target) result.push(arr);
      for(let i = idx; i < candidates.length; i++) {
          permute([...arr, candidates[i]], sum+candidates[i], i);
      }
  }
  permute()
  return result;
};
var isPalindrome = function(s) {
  var strippedString = s.replace(/\W/g, '');
  return strippedString
};
var reverseWords = function(s) {
  // s.split(" ") -> Example: 'the sky is blue' = ['the', 'sky', 'is', 'blue']
  // .join(' ') parse về string lại với mỗi string cách nhau 1 ' '
  return s.split(" ").reverse().filter(w => w !== "").join(" ");
};
// cách 1: 0(logN)
var findPeakElement = function(nums) {
  let left = 0, right = nums.length-1, mid;
  
  while(left < right) {
      mid = Math.floor((right+left)/2);
      if(nums[mid] > nums[mid+1]) right = mid;
      else left = mid+1;
  }
  return left;
};
// cách 2: O(n)
var findPeakElement2 = function(nums) {
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] > nums[i+1]) return i;
  }
  return nums.length-1;
};
  return (
    <div className="App">
     <div> <img src={solution1} /></div>
     input: {valueSolution1}, result: {reverse(valueSolution1)}
     <br/>
     <div> <img src={solution21} /></div>
     <div> <img src={solution22} /></div>
     input: {valueSolution2}, result: {myAtoi(valueSolution2)}
     <br/>
     <div> <img src={solution3} /></div>
     {`text: ${valueSolution3a}, char find: ${valueSolution3b}`}, index: {strStr(valueSolution3a, valueSolution3b)}
     <br/>
     <div> <img src={solution4} /></div>
     {`array: ${JSON.stringify(valueSolution4a)}, sum: ${valueSolution4b}`}, result:  {JSON.stringify(combinationSum(valueSolution4a, valueSolution4b))}
     <br/>
     <p>bỏ tất cả ký tự (space, phẩy, :...)</p>
     {`text: ${valueSolution5a}, result: ${isPalindrome(valueSolution5a)}`}
     <br/>
     <p>đảo từ</p>
     {reverseWords('the sky is blue')}
     <br/>
     <div> <img src={solution5} /></div>
    {`text: ${JSON.stringify(valueSolution6a)}, redsult: ${findPeakElement(valueSolution6a)}`}
    </div>
  );
}
export default App;
