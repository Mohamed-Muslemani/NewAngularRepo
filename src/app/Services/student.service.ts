import { Injectable } from '@angular/core';
import {userList} from "../Shared/mockStudent.data";
import {User} from "../Shared/Models/user";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor() { }

  private students: User[] = userList
  getStudents(): Observable<User[]>{
    return of(userList);
  }

  addStudent(newStudent:User) : Observable<User[]>{
    this.students.push(newStudent)
    return of(this.students);
  }
}
