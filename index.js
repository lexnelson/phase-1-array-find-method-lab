const results = function(element) {
    return (element.result === 'W')
}
function superbowlWin(array) {
    const wins = array.find(results)
    if (wins === undefined) {
        return undefined;
    } else {
        return wins.year;
    }
}