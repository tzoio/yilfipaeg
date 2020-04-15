import { Curator } from '../services/Curator';

export interface DisplayProps {
  curator: Curator;
}

export interface DisplayState {
  exhibit: JSX.Element;
}
