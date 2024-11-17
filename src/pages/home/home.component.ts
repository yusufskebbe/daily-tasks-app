import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ClientService } from "../../services/client.service";
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ToastrModule, ToastrService } from "ngx-toastr";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { NgxGradientTextComponent } from "@omnedia/ngx-gradient-text";
import { NgxAuroraComponent } from "@omnedia/ngx-aurora";
import { NgxStarrySkyComponent } from "@omnedia/ngx-starry-sky";

import { NgxNeonUnderlineComponent } from "@omnedia/ngx-neon-underline";

interface Jobs {
  id: number;
  jobName: string;
  price: number;
  date?: string;
}

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,

    NgxStarrySkyComponent,
    NgxNeonUnderlineComponent,
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
  jobs: Jobs[] = [];
  filterForm: any;

  dataSource = new MatTableDataSource<Jobs>();

  displayedColumns: string[] = ["jobName", "price", "date", "actions"];

  dailyGiro = 0;
  recievedMoney = 0;

  constructor(
    private jobService: ClientService,
    private formBuilder: FormBuilder,
    private toast: ToastrService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      jobName: ["", Validators.required],
      price: ["", Validators.required],
      date: ["", Validators.required],
    });

    this.jobService.loadJobs$.subscribe((jobs: any) => {
      this.dataSource.data = jobs;
      this.dataSource.data.length = jobs.length;
    });

    const storedMoney = localStorage.getItem("recievedMoney");
    this.recievedMoney = storedMoney ? Number(storedMoney) : 0;
  }

  generateId() {
    return Math.floor(Math.random() * 1000);
  }

  createJob() {
    const { jobName, price, date } = this.filterForm.value;

    if (this.filterForm.invalid) {
      this.markFormAsTouched();
      return;
    }
    const job: Jobs = {
      id: this.generateId(),
      jobName: jobName,
      price: price,
      date: date,
    };

    this.jobService.createNewJob(job);

    this.toast.success("İş Başarıyla Oluşturuldu");
    this.dailyGiro = +this.dailyGiro + +price;
    this.filterForm.reset();
  }

  deleteJob(element: any) {
    this.jobService.completeJob(element.id);
    this.toast.success("İş Başarıyla Silindi");

    const updatedMoney = localStorage.getItem("recievedMoney");
    this.recievedMoney = updatedMoney ? Number(updatedMoney) : 0;
  }

  markFormAsTouched() {
    this.filterForm.markAllAsTouched();
  }
}
