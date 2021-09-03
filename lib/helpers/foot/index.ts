import { SoccerBotFoot } from '../../shared/interfaces';

export const coerceFoot = (foot: string): SoccerBotFoot => {
  if (['right', 'Right'].includes(foot)) {
    return SoccerBotFoot.RIGHT;
  } else if (['left', 'Left'].includes(foot)) {
    return SoccerBotFoot.LEFT;
  }
  return undefined;
};
