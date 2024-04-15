import { uniqueId } from '../services/seido-helpers';

export default function Animal() {

    this.id = undefined;
    this.name = undefined;
    this.type = undefined;
  }
  
  Animal.prototype = {
    
    seed: function (_sgen) {
      const a = new Animal();
      a.id = uniqueId();
      a.name = _sgen.petName;
      a.type = _sgen.fromString("Elephant, Lion, Tiger, Giraff, Zebra");
      return a;
    },
    
    seedMany: function (_sgen, nrOfItems) {
      return _sgen.toArray(nrOfItems, this.createRandom)
    }
  }