import firstBy from 'thenby';

const process = _apts => {
  let events = [];
  let workingSet = [];
  const widthOffset = 1;

  _apts.forEach(x => {
    events.push({type: 'startTime', value: x.startTime.unix(), id: x.id});
    events.push({type: 'endTime', value: x.endTime.unix(), id: x.id});
  });
  const sortedEvents = events
    .sort(firstBy('value').thenBy(x => {return x === 'endTime' ? 1 : -1;})
      .thenBy('id'));

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
    let item = wip.find(item => item.status === 'available'); // eslint-disable-line no-shadow
    if (item) {
      updateItem(item, e);
    } else {
      item = {status: 'used', id: e.id, column: wip.length + 1 };
      wip.push(item);
    }
    updateWip(wip);
    return wip;
  };

  const updateApt = (apts, item) => {// eslint-disable-line no-shadow
    let target = apts.find(a => a.id === item.id);
    target.width = Math.round((100 / item.width) - widthOffset);
    target.column = target.width * (item.column - 1);
  };

  const removeFromWip = (apts, wip, e) => {// eslint-disable-line no-shadow
    let item = wip.find(x => x.id === e.id);
    if (!item) { return null; }
    item.status = 'available';
    updateApt(apts, item);
    return wip.every(x=>x.status === 'available') ? [] : wip;
  };

  const handleEvent = (e, apts, ws) => {// eslint-disable-line no-shadow
    if (e.type === 'startTime') {
      addToWip(ws, e);
    } else {
      removeFromWip(apts, ws, e);
    }
  };

  sortedEvents.forEach(e => handleEvent(e, _apts, workingSet));
  return _apts.sort(firstBy('startTime').thenBy('column'));
};

export {
    process
};
