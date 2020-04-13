import { Curator } from '../services/Curator';

export interface ExhibitItemProps {
  icon?: string;
  iconPath?: string;
  name: string;
  component: JSX.Element;
  curator: Curator;
}

export interface ExhibitItemState {}
