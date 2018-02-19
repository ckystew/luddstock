import { Injectable } from '@angular/core';
import { Group } from './group';
import { GROUPS } from './mock-groups';


@Injectable()
export class GroupService {

  constructor() { }

  getGroups(): Group[] {
    return GROUPS;
  }
}
