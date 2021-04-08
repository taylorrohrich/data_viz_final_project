getCoordinates = (angle,radius)=>{
    x = Math.cos(angle)*radius
    y = Math.sin(angle) * radius
    return [x,y]
}

const getAnchorPoints= ()=>{
    let pi = Math.PI
    anchorPoints = []
    startingPoint = Math.PI / 2
    for (i=0;i<10;i++){
        anchorPoints.push(startingPoint)
        startingPoint -= (2* pi/ 10) 
    }
    return anchorPoints
}

radius = 10
anchorPoints = getAnchorPoints.map(angle=>getCoordinates(angle,radius))