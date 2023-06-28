import { Position } from "../../types/request/params";

export default class UpdatePointEarnPositionRequestDTO {
  oldPosition: number;
  newPosition: number;
  userId: number;

  constructor(data: Position, userId: number) {
    this.oldPosition = data.oldPosition;
    this.newPosition = data.newPosition;
    this.userId = userId;
  }
}
