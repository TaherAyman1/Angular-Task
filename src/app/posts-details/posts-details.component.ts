import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'services/api-service';
import { HelpermethodsService } from 'services/helper-method';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.scss'],
})
export class PostsDetailsComponent implements OnInit {
  id: number;
  userId: number;
  title: string;
  body: string;

  constructor(
    public route: ActivatedRoute,
    public service: ApiService,
    public spinner: HelpermethodsService
  ) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.spinner.presentLoading();
    const post = this.service.getPostById(this.id).subscribe(
      (data: any) => {
        console.log(data, 'here is the data');
        this.id = data.id;
        this.userId = data.userId;
        this.title = data.title;
        this.body = data.body;
        this.spinner.dismissLoading();
      },
      (err) => {
        this.spinner.dismissLoading();
        this.spinner.presentToast(
          'something went wrong please try again later'
        );
      },
      () => {
        post.unsubscribe();
      }
    );
  }
  updateById(id) {
    const payload = {
      body: this.body,
      title: this.title,
    };
    this.spinner.presentLoading();
    const update = this.service.updatePostById(id, payload).subscribe(
      (res: any) => {
        console.log(res);
        this.spinner.dismissLoading();
        this.spinner.presentToast('you have updated the post successfully');
      },
      (err) => {
        this.spinner.dismissLoading();
        this.spinner.presentToast(
          'something went wrong please try again later'
        );
      },
      () => {
        update.unsubscribe();
      }
    );
  }
}
