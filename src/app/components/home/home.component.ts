import { Component, OnInit } from '@angular/core';
import { IssuesService } from 'src/app/services/issues.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  issuesData = [
    {
      title: "overlay interfaces should be exported",
      labels: [
        {
          "id": 999100804,
          "name": "package: core",
          "color": "#1d76db"
        },
        {
            "id": 1143756678,
            "name": "type: bug",
            "color": "#cc2302"
        }
      ]
    },
    {
      title: "overlay interfaces should be exported",
      labels: [
        {
          "id": 999100804,
          "name": "package: core",
          "color": "#1d76db"
        },
        {
            "id": 1143756678,
            "name": "type: bug",
            "color": "#cc2302"
        }
      ]
    },
    {
      title: "overlay interfaces should be exported",
      labels: [
        {
          "id": 999100804,
          "name": "package: core",
          "color": "#1d76db"
        },
        {
            "id": 1143756678,
            "name": "type: bug",
            "color": "#cc2302"
        }
      ]
    },
    {
      title: "overlay interfaces should be exported",
      labels: [
        {
          "id": 999100804,
          "name": "package: core",
          "color": "#1d76db"
        },
        {
            "id": 1143756678,
            "name": "type: bug",
            "color": "#cc2302"
        }
      ]
    },
    {
      title: "overlay interfaces should be exported",
      labels: [
        {
          "id": 999100804,
          "name": "package: core",
          "color": "#1d76db"
        },
        {
            "id": 1143756678,
            "name": "type: bug",
            "color": "#cc2302"
        }
      ]
    },
    {
      title: "overlay interfaces should be exported",
      labels: [
        {
          "id": 999100804,
          "name": "package: core",
          "color": "#1d76db"
        },
        {
            "id": 1143756678,
            "name": "type: bug",
            "color": "#cc2302"
        }
      ]
    },
    {
      title: "overlay interfaces should be exported",
      labels: [
        {
          "id": 999100804,
          "name": "package: core",
          "color": "#1d76db"
        },
        {
            "id": 1143756678,
            "name": "type: bug",
            "color": "#cc2302"
        }
      ]
    },
    {
      title: "overlay interfaces should be exported",
      labels: [
        {
          "id": 999100804,
          "name": "package: core",
          "color": "#1d76db"
        },
        {
            "id": 1143756678,
            "name": "type: bug",
            "color": "#cc2302"
        }
      ]
    },
    {
      title: "overlay interfaces should be exported",
      labels: [
        {
          "id": 999100804,
          "name": "package: core",
          "color": "#1d76db"
        },
        {
            "id": 1143756678,
            "name": "type: bug",
            "color": "#cc2302"
        }
      ]
    },{
      title: "overlay interfaces should be exported",
      labels: [
        {
          "id": 999100804,
          "name": "package: core",
          "color": "#1d76db"
        },
        {
            "id": 1143756678,
            "name": "type: bug",
            "color": "#cc2302"
        }
      ]
    }
  ];

  length = 500;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  constructor(
    public issuesService: IssuesService
  ) { }

  ngOnInit(): void {
    this.setIssuesData();
    this.getIssuesLength();
  }

  setIssuesData(page?: number, per_page?: number) {
    if(!page) page = 1;
    if(!per_page) per_page = 10;
    this.issuesService.getIssuesData(page, per_page).subscribe( res => {
      console.log(res);
      if(res) {
        this.issuesData = [];
        res.forEach( 
          (data: any) => {
            this.issuesData.push({
              title: data.title,
              labels: data.labels.map( (label:any) => { return {id: label.id, name: label.name, color: "#" + label.color}})
            });
          }
        );
        console.log(this.issuesData, "after")
      }
    });
  }

  getIssuesLength() {
    this.issuesService.getNumberOfIssues().subscribe( (res: any) => { this.length = res.open_issues});
    console.log('a',this.length);
  }

  handlePaginatorEvent(data: any) {
    console.log('data: ',data);
    this.pageSize = data.pageSize;
    this.pageIndex = data.pageIndex;
    this.setIssuesData(data.pageIndex + 1, data.pageSize);
  }

}
