class Person {
  #email;
  #id;

  constructor(name, email, id) {
    this.name = name;
    this.setEmail(email);
    this.setId(id);
  }

  getEmail() {
    return this.#email;
  }

  setEmail(email) {
    if (email && email.includes("@")) {
      this.#email = email;
    } else {
      console.log("Invalid email format");
    }
  }

  getId() {
    return this.#id;
  }

  setId(id) {
    if (id) {
      this.#id = id;
    } else {
      console.log("Invalid ID");
    }
  }

  describeRole() {
    console.log(`${this.name} is a member of the school.`);
  }
}

class Principal extends Person {
  constructor(name, email, id) {
    super(name, email, id);
    this.members = [];
  }

  addMember(member) {
    this.members.push(member);
    console.log(`${member.name} has been added to the school.`);
  }

  removeMember(id) {
    this.members = this.members.filter(m => m.getId() !== id);
    console.log(`Member with ID ${id} was removed.`);
  }

  listMembers() {
    console.log("--- All School Members ---");
    this.members.forEach(m => console.log(`Name: ${m.name}, ID: ${m.getId()}`));
  }

  describeRole() {
    console.log(`Principal ${this.name} manages the school and its members.`);
  }
}

class Teacher extends Person {
  constructor(name, email, id, subject) {
    super(name, email, id);
    this.subject = subject;
    this.grades = {};
  }

  gradeStudent(studentName, grade) {
    this.grades[studentName] = grade;
    console.log(`Graded ${studentName}: ${grade}`);
  }

  listGradedStudents() {
    console.log(`--- Graded Students by ${this.name} (${this.subject}) ---`);
    for (let student in this.grades) {
      console.log(`${student}: ${this.grades[student]}`);
    }
  }

  describeRole() {
    console.log(`Teacher ${this.name} teaches ${this.subject}.`);
  }
}

class Student extends Person {
  constructor(name, email, id) {
    super(name, email, id);
    this.enrolledSubjects = [];
  }

  enroll(subject) {
    this.enrolledSubjects.push(subject);
    console.log(`${this.name} enrolled in ${subject}.`);
  }

  viewSubjects() {
    console.log(`--- Enrolled Subjects for ${this.name} ---`);
    console.log(this.enrolledSubjects.join(", "));
  }

  describeRole() {
    console.log(`Student ${this.name} is studying hard.`);
  }
}

const principal = new Principal("Dr. Ahmed", "ahmed@school.com", "P101");
const teacher = new Teacher("Mr. Omar", "omar@school.com", "T201", "Mathematics");
const student1 = new Student("Belal", "belal@school.com", "S301");
const student2 = new Student("Sara", "sara@school.com", "S302");

principal.addMember(teacher);
principal.addMember(student1);
principal.addMember(student2);

principal.listMembers();

teacher.gradeStudent("Belal", "A");
teacher.gradeStudent("Sara", "B+");
teacher.listGradedStudents();

student1.enroll("Mathematics");
student1.enroll("Physics");
student1.viewSubjects();

const allMembers = [principal, teacher, student1, student2];

console.log("\n--- Polymorphism Demonstration ---");
allMembers.forEach(member => {
  member.describeRole();
});