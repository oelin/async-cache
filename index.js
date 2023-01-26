const hash = require('object-hash')


module.exports = f => {
        const cache = new Map()

        return async (...a) => {
                const key = hash(a)

                if (cache.has(key))
                        return new Promise(resolve => resolve(cache.get(key)));

                const value = await f(...a)
                cache.set(key, value)

                return value
        }
}
