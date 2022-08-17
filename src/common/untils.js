export default {
    debounce(that, fn, delay) {
        let timer = null
        return function(...arg) {
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                fn.apply(that, arg)
            }, delay)

        }

    },

    deepClone(o) { // 判断如果不是引用类型，直接返回数据即可    
        if (typeof o === 'string' || typeof o === 'number' || typeof o === 'boolean' || typeof o === 'undefined') { return o } else if (Array.isArray(o)) {
            // 如果是数组，则定义一个新数组，完成复制后返回  
            // 注意，这里判断数组不能用typeof，因为typeof Array 返回的是object     
            // --> object       
            var _arr = []

            o.forEach(item => { _arr.push(item) })
            return _arr
        } else if (typeof o === 'object') {
            var _o = {}
            for (let key in o) {
                _o[key] = deepClone(o[key])
            }
            return _o
        }
    }
}