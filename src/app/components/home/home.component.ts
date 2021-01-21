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

  constructor(
    public issuesService: IssuesService
  ) { }

  ngOnInit(): void {
    console.log(this.issuesData);
    this.issuesService.getIssuesData().subscribe( res => {
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

}
