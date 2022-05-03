function rule1(params) {
    params = sortT(params)
    let orderBrends = params.sort((a, b) => b.models.length - a.models.length)
    return orderBrends[0]
}

function rule2(params) {
    params = sortT(params)
    let orderBrends = params.sort((a, b) => a.models.length - b.models.length)
    return orderBrends[0]
}

function rule3(params, number) {
    params = sortT(params)
    let orderBrends = params.sort((a, b) => b.models.length - a.models.length)
    let list = []
    orderBrends.map((item, i) => {
        if (i <= number) {
            list.push(`${item.brand}-${item.models.length}`)
        }
    })

    return list
}

function rule4(params, number) {
    params = sortT(params)
    let orderBrends = params.sort((a, b) => a.models.length - b.models.length)
    let list = []
    orderBrends.map((item, i) => {
        if (i <= number) {
            list.push(`${item.brand}-${item.models.length}`)
        }
    })

    return list
}

function rule5(params, brand) {
    params = sortT(params)
    let car = params.filter(item => item.brand.toLowerCase() === brand.toLowerCase())
    return car[0].models
}


export {
    rule1,
    rule2,
    rule3,
    rule4,
    rule5
}

function sortT(params) {
    let helper = params.map(item => item.brand)
    helper = helper.sort()

    let anser = []
    helper.map(name => {
  params.map(item => {
            if (item.brand === name) {
                anser.push( item)
            }
        })
    })

    return anser
}