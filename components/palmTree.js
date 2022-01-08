import Snap from "snapsvg";

class Leaf {
  audio;
  leafsvg;
  constructor(leafID, snapObj) {
    this.audio = new Audio("audio/string" + leafID + ".ogg");
    this.leafsvg = snapObj.select("#leaf" + leafID);
    this.leafsvg.addClass("clickable leaf");
  }
}

class PalmTree {
  constructor(h, w) {
    this.height = h;
    this.width = w;
  }

  draw(id) {
    var s = Snap(id);
    Snap.load("tree/palmtree.svg", function (f) {
      let leafs = [];
      for (let i = 0; i < 8; i++) {
        leafs[i] = new Leaf(i + 1, f);
        leafs[i].leafsvg.click(() => {

          leafs[i].audio.currentTime = 0;
          leafs[i].audio.play();
        });
      }
      s.append(f);
    });
  }
}

export default PalmTree;
