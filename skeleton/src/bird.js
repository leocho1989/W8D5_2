const CONSTANTS = {
  GRAVITY:  0.4,
  FLAP_SPEED:  8,
  TERMINAL_VEL:  12,
  BIRD_WIDTH:  40,
  BIRD_HEIGHT:  30
};

export default class Bird {

  constructor(dimensions) {
    this.dimensions = dimensions;
    this.x = this.dimensions.width / 3;
    this.y = this.dimensions.height / 2;
    this.vel = 0;
  }

  flap() {
    //if this were a more realistic bird simulation, we would be adding to the velocity
    //instead of just assigning it outright
    //to make the experience more fun and 'bouncy' we just set it directly
    this.vel = -1 * CONSTANTS.FLAP_SPEED;
  }
}