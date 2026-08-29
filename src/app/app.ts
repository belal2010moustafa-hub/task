import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface TeamMember {
  name: string;
  age: number;
  department: string;
  isAvailable: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  departments: string[] = ['Development', 'Marketing', 'Design'];
  selectedDepartment: string = 'All';
  viewMode: 'card' | 'list' = 'card';

  members: TeamMember[] = [
    { name: 'Ahmed', age: 28, department: 'Development', isAvailable: true },
    { name: 'Esraa', age: 24, department: 'Marketing', isAvailable: false }
  ];

  newMember: TeamMember = {
    name: '',
    age: 18,
    department: 'Development',
    isAvailable: true
  };

  addMember() {
    if (!this.newMember.name.trim() || this.newMember.age <= 0) {
      alert('Please fill out all fields correctly!');
      return;
    }

    this.members.push({ ...this.newMember });

    this.newMember = {
      name: '',
      age: 18,
      department: 'Development',
      isAvailable: true
    };
  }

  toggleStatus(member: TeamMember) {
    member.isAvailable = !member.isAvailable;
  }

  get filteredMembers(): TeamMember[] {
    if (this.selectedDepartment === 'All') {
      return this.members;
    }
    return this.members.filter(m => m.department === this.selectedDepartment);
  }
}