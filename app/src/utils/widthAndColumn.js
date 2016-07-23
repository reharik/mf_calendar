import firstBy from 'thenby';
import moment from 'moment';

const process = (apts, date) => {
    var events = [];
    var workingSet = [];
    var widthOffset = 1;

    apts.forEach(x => {
        events.push({type: 'startTime', value: x.startTime.unix(), id: x.id});
        events.push({type: 'endTime', value: x.endTime.unix(), id: x.id});
    });
    const sortedEvents = events
        .sort(firstBy('value').thenBy((x,y) => {return x === 'endTime' ? 1 : -1}).thenBy('id'));

    // posible alt
    // const updateWip = wip => wip.forEach(x => {
    //     const sameStart = wip.filter(s => s.startTime.isSame(x.startTime));
    //     x.width = sameStart > x.width || 1 ? sameStart : x.width
    // });
    
    const updateWip = wip => wip.forEach(x => x.width = wip.length > x.width || 1 ? wip.length : x.width);

    const updateItem = (item, e) => {
        item.status = 'used';
        item.id = e.id;
    };

    const addToWip = (wip = [], e) => {
        var item = wip.find(item => item.status === 'available');
        if(item){
            updateItem(item, e);
        } else {
            item = {status: 'used', id: e.id, column: wip.length + 1 };
            wip.push(item);
        }
        updateWip(wip);
        return wip;
    };

    const updateApt = (apts, item) => {
        var target = apts.find(a => a.id === item.id);
        target.width = Math.round((100 / item.width) - widthOffset);
        target.column = target.width * (item.column - 1);
    };

    const removeFromWip = (apts, wip, e) => {
        var item = wip.find(x => x.id === e.id);
        if (!item) { return; }
        item.status = 'available';
        updateApt(apts, item);
        return wip.every(x=>x.status === 'available') ? [] : wip;
    };

    const handleEvent = (e, apts, ws) => {
        if (e.type === 'startTime'){
            addToWip(ws, e);
        } else {
            removeFromWip(apts, ws, e);
        }
    };

    sortedEvents.forEach(e => handleEvent(e, apts, workingSet));
    return apts;
};

export {
    process
}