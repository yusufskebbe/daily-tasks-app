import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

interface Jobs {
  id: number;
  jobName: string;
  price: number;
  date?: string;
}

@Injectable({
  providedIn: "root",
})
export class ClientService {
  private laodJobSubjects = new BehaviorSubject<Jobs[]>([]);
  loadJobs$ = this.laodJobSubjects.asObservable();

  recievedMoney = 0;

  constructor() {
    const storedJobs = this.loadJobs();
    if (storedJobs) {
      this.laodJobSubjects.next(storedJobs);
    }
    const storedMoney = localStorage.getItem("recievedMoney");
    this.recievedMoney = storedMoney ? Number(storedMoney) : 0;
  }

  loadJobs() {
    const items = localStorage.getItem("jobs");
    if (items) {
      return JSON.parse(items);
    }
  }

  createNewJob(job: Jobs) {
    const currentJob = this.loadJobs() || [];
    currentJob.push(job);
    localStorage.setItem("jobs", JSON.stringify(currentJob));

    this.laodJobSubjects.next(currentJob);
  }

  completeJob(job: Jobs) {
    const currentJob = this.loadJobs() || [];
    const updatedJobs = currentJob.filter((job: Jobs) => job.id !== job.id);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));

    this.recievedMoney = Number(this.recievedMoney) + Number(job.price);

    localStorage.setItem("recievedMoney", JSON.stringify(this.recievedMoney));
    this.laodJobSubjects.next(updatedJobs);
  }
}
