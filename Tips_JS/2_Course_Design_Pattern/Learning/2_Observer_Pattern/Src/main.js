class Observer {
  //data that observer will contain
  constructor(name) {
    this.namePick = name;
  }

  updataStatus(location) {
    this.goToHelp(location);
  }

  goToHelp(location) {
    console.log(`${this.namePick} is coming to ${JSON.stringify(location)}`);
  }
}

//List of Observer

class Subject {
  constructor() {
    this.ObserverList = [];
  }

  addObserver(observer) {
    this.ObserverList.push(observer);
  }

  //change each observer
  notify(location) {
    this.ObserverList.forEach((observer) => {
      observer.updataStatus(location);
    });
  }
}

//test

//declare list
const subject = new Subject();

//Observers
let chihao0 = new Observer("chihao0");
let chihao2 = new Observer("chihao2");
let chihao1 = new Observer("chihao1");

//
subject.addObserver(chihao0);
subject.addObserver(chihao1);
subject.addObserver(chihao2);

//
subject.notify({ long: 143, lat: 345 });

//=> change one. the rest will change as well
