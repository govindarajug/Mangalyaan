class Rover {
  constructor(startPosition, startDirection) {
    this.startPosition = startPosition;
    this.startDirection = startDirection;
  }

  equals(otherRover) {
    return otherRover instanceof Rover
      && this.startDirection === otherRover.startDirection
      && this.startPosition.x === otherRover.startPosition.x
      && this.startPosition.y === otherRover.startPosition.y;
  }
}

exports.Rover = Rover;
