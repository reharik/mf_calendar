import firstBy from 'thenby';

const process = _apts => {

  let events = [];
  let workingSet = [];
  const widthOffset = 1;


    // posible alt
    // const updateWip = wip => wip.forEach(x => {
    //     const sameStart = wip.filter(s => s.startTime.isSame(x.startTime));
    //     x.width = sameStart > x.width || 1 ? sameStart : x.width
    // });

  const updateWip = (wip, start) => {
    var sameSlot = wip.filter(x => x.value === start );
    var sameOrEarlierSlot = wip.filter(x => x.value <= start );
    sameSlot.forEach(y => {
      y.width = (sameOrEarlierSlot.length > y.width || 1) ? sameOrEarlierSlot.length : y.width;
    });
  };

  const updateItem = (item, e) => {
    item.status = 'used';
    item.id = e.id;
  };

  const addToWip = (wip = [], e) => {
    let item = wip.find(item => item.status === 'available'); // eslint-disable-line no-shadow

    if (item) {
      updateItem(item, e);
      item.column = wip.filter(x => x.status === 'used').length;
    } else {
      item = {status: 'used', id: e.id, value: e.value, column: wip.length + 1};
      wip.push(item);
    }
    updateWip(wip, e.value);
    return wip;
  };

  const updateApt = (apts, item) => {// eslint-disable-line no-shadow
    let target = apts.find(a => a.id === item.id);
    target.width = Math.round((100 / item.width) - widthOffset);
    target.margin = target.width * (item.column - 1);
    target.column = item.column;
  };

  const removeFromWip = (apts, wip, e) => {// eslint-disable-line no-shadow
    let item = wip.find(x => x.id === e.id);
    if (!item) { return; }
    item.status = 'available';
    updateApt(apts, item);
    if (wip.indexOf(item) + 1 === wip.length) {
      wip.pop();
    }
    wip = wip.every(x=>x.status === 'available') ? [] : wip;
  };

  const handleEvent = (e, apts, ws) => {// eslint-disable-line no-shadow
    if (e.type === 'startTime') {
      addToWip(ws, e);
    } else {
      removeFromWip(apts, ws, e);
    }
  };

  _apts.forEach(x => {
    events.push({type: 'startTime', value: x.startTime.unix() + 1, id: x.id});
    events.push({type: 'endTime', value: x.endTime.unix(), id: x.id});
  });

  const sortedEvents = events
    .sort(firstBy('value').thenBy('slots', -1).thenBy(x => {return x === 'endTime' ? 1 : -1;})
      .thenBy('id'));
  sortedEvents.forEach(e => handleEvent(e, _apts, workingSet));
  return _apts.sort(firstBy('startTime').thenBy('slots', -1));
};

export {
  process
};
