function moreModels(params) {
    params = sortT(params)
    let orderBrends = params.sort((a, b) => b.models.length - a.models.length)
    return orderBrends[0]
}

function lessModels(params) {
    params = sortT(params)
    let orderBrends = params.sort((a, b) => a.models.length - b.models.length)
    return orderBrends[0]
}

function moreModelsList(params, number) {
    params = sortT(params)
    let orderBrends = params.sort((a, b) => b.models.length - a.models.length)
    let list = []
    orderBrends.forEach((item, i) => {
        if (i <= number) {
            list.push(`${item.brand}-${item.models.length}`)
        }
    })

    return list
}

function lessModelsList(params, number) {
    params = sortT(params)
    let orderBrends = params.sort((a, b) => a.models.length - b.models.length)
    let list = []
    orderBrends.forEach((item, i) => {
        if (i <= number) {
            list.push(`${item.brand}-${item.models.length}`)
        }
    })

    return list
}

function uniqModel(params, brand) {
    params = sortT(params)
    let car = params.filter(item => item.brand.toLowerCase() === brand.toLowerCase())
    return car[0].models
}

export {
    moreModels,
    lessModels,
    moreModelsList,
    lessModelsList,
    uniqModel
}

function sortT(params) {
    let helper = params.map(item => item.brand)
    helper = helper.sort()
    let anser = []

    helper.forEach(name => {
        params.forEach(item => {
            if (item.brand === name) {
                anser.push(item)
            }
        })
    })
    return anser
}