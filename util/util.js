
/**
 * [multiToSingel description]
 * @example
 * var arr = [1,2,[34,5,[3,4,6,[4444]]]]; reuturn [1, 2, 34, 5, 3, 4, 6, 4444]
 * @param  {[Array]} array
 * @return {[Array]}  a new array
 */
export function multiToSingel(arr){
	let newArr = [];
	return function(arr){
		for(var k in arr){
			if(arr[k] instanceof Array){
				arguments.callee(arr[k])
			}else{
				newArr.push(arr[k])
			}
		}
		return newArr
	}(arr)
}
