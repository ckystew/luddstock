import { Component, OnInit } from '@angular/core';
import { Group } from '../group';
// import { GROUPS } from '../mock-groups';
import { GroupService } from '../group.service';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})

export class GroupsComponent implements OnInit {
  selectedGroup: Group;
  groups: Group[];

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.getGroups();
  }

  onSelect(group: Group): void {
    this.selectedGroup = group;
  }

  getGroups(): void {
    this.groups = this.groupService.getGroups();
  }
}
