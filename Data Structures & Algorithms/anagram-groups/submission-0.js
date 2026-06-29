class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
   groupAnagrams(strs) {
      let  dic = {}, key = "";
        for (let i = 0; i < strs.length; i++) {
            key = strs[i].split('').sort().join('');

            if(dic[key]){
                dic[key].push(strs[i]);
            }else{
                dic[key] = [strs[i]];
            }
        }
    return Object.values(dic);
    }
}

