import firstBy from 'thenby';

const process = (apts) => {
    var events = [];
    apts.forEach(x => {
        events.push({type: 'startTime', value: x.startTime.unix(), id: x.id});
        events.push({type: 'endTime', value: x.endTime.unix(), id: x.id});
    });
    var sortedEvents = events
        .sort(firstBy('value').thenBy((x,y) => {return x === 'endTime' ? 1 : -1}).thenBy('id'));

    const cloneAndSet = (prev =[], e) => {
        var next = prev.slice(0);
        for(var i = 0; i < next.length; i++) {
            var item = next[i];
            if (item.status === 'available') {
                item.status = 'used';
                item.id = e.id;
                item.column = i + 1;
                item.width = next.length + 1;
                return next;
            }
        }
        next.push({status: 'used', id: e.id, column: next.length+1, width: next.length+1});
        return next;
    };
    
    const cloneAndRemove = (apts, prev = [], e) => {
        var next = prev.slice(0);
        next.filter(x => x.id === e.id).forEach(x => {
            x.status = 'available';
            var target = apts.find(a => a.id === x.id);
            target.width = x.width;
            target.column = x.column;
        });
        return next.every(x=>x.status === 'available') ? [] : next;
    };

    var workingSet = [];

    const handleEvent = (e, apts, ws) => {
        if (e.type === 'startTime'){
            ws.push(cloneAndSet(ws[ws.length-1], e));
        } else {
            ws.push(cloneAndRemove(apts, ws[ws.length-1], e));
        }
    };

    sortedEvents.forEach(e => handleEvent(e, apts, workingSet));
    return apts;
};

export {
    process
}