
function rule1(params) {
    let orderBrends = params.sort((a, b) => b.models.length - a.models.length)
    return orderBrends[0]
}

function rule2(params) {
    let orderBrends = params.sort((a, b) => a.models.length - b.models.length)
    return orderBrends[0]
}

function rule3(params, number ) {
    
    let orderBrends = params.sort((a, b) => b.models.length - a.models.length)
    let list = []
    orderBrends.map((item,i) => {if(i<=number){list.push(`${item.brand}-${item.models.length}`)}})
    
    return list
}

function rule4(params, number ) {
    
    let orderBrends = params.sort((a, b) => a.models.length - b.models.length)
    let list = []
    orderBrends.map((item,i) => {if(i<=number){list.push(`${item.brand}-${item.models.length}`)}})
    
    return list
}







export{ rule1, rule2, rule3, rule4 }