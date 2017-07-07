
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


/**
 * 检查一个string 是不是符合url的格式，不强校验http|https|ftp
 * @param  {[String]} url
 * @return {[Boolean]}
 */
export function checkUrl(url){
	const reg = /^(\w+)\:\/\/([^\/]+)\/(.*)$/;
	return reg.exec(url)
}





