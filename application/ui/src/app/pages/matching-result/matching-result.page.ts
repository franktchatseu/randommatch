import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-matching-result',
  templateUrl: './matching-result.page.html',
  styleUrls: ['./matching-result.page.scss'],
})
export class MatchingResultPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit () {
    const param = this.route.snapshot.params[ 'data' ];
    console.log( param );
  }

  usersgroups = [
    {
      group: "Match 1",
      nomber:6,
      users: [
        {
        name: "Frank tchatseu",
        group: "Service client",
        phone: "696812610",
        avatar:"https://avatars.githubusercontent.com/u/50463560?s=400&u=d082fa7694a0d14dc2e464adc8e6e7ef4ce49aaa&v=4"
      },
      {
        name: "Yannick Youmie",
        group: "Service client",
        phone: "696812610",
        avatar:"/assets/img/speakers/rabbit.jpg"
      },
      {
        name: "Prestilien Pindoh",
        group: "Service client",
        phone: "696812610",
        avatar:"/assets/img/speakers/puppy.jpg"
      },
      ]
    },
    {
      group: "Match 2",
      nomber:6,
      users: [
        {
        name: "Frank tchatseu",
        group: "Service client",
        phone: "696812610",
        avatar:"https://avatars.githubusercontent.com/u/50463560?s=400&u=d082fa7694a0d14dc2e464adc8e6e7ef4ce49aaa&v=4"
      },
      {
        name: "Yannick Youmie",
        group: "Service client",
        phone: "696812610",
        avatar:"/assets/img/speakers/rabbit.jpg"
      },
      {
        name: "Prestilien Pindoh",
        group: "Service client",
        phone: "696812610",
        avatar:"/assets/img/speakers/puppy.jpg"
      },
      ]
    },
    {
      group: "Match 3",
      nomber:6,
      users: [
        {
        name: "Frank tchatseu",
        group: "Service client",
        phone: "696812610",
        avatar:"https://avatars.githubusercontent.com/u/50463560?s=400&u=d082fa7694a0d14dc2e464adc8e6e7ef4ce49aaa&v=4"
      },
      {
        name: "Yannick Youmie",
        group: "Service client",
        phone: "696812610",
        avatar:"/assets/img/speakers/rabbit.jpg"
      },
      {
        name: "Prestilien Pindoh",
        group: "Service client",
        phone: "696812610",
        avatar:"/assets/img/speakers/puppy.jpg"
      },
      ]
    },
    {
      group: "Match 4",
      nomber:6,
      users: [
        {
        name: "Frank tchatseu",
        group: "Service client",
        phone: "696812610",
        avatar:"https://avatars.githubusercontent.com/u/50463560?s=400&u=d082fa7694a0d14dc2e464adc8e6e7ef4ce49aaa&v=4"
      },
      {
        name: "Yannick Youmie",
        group: "Service client",
        phone: "696812610",
        avatar:"/assets/img/speakers/rabbit.jpg"
      },
      {
        name: "Prestilien Pindoh",
        group: "Service client",
        phone: "696812610",
        avatar:"/assets/img/speakers/puppy.jpg"
      },
      ]
    },
  ];


}
