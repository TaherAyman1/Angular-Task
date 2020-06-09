import { Component, OnInit } from '@angular/core';
import { ApiService } from 'services/api-service';
import { Router } from '@angular/router';
import { HelpermethodsService } from 'services/helper-method';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: any;
  constructor(
    private service: ApiService,
    public router: Router,
    public spinner: HelpermethodsService
  ) {
    this.service.getPosts().subscribe((res: any) => {
      this.posts = res;
    });
  }
  directToDetails(id) {
    this.router.navigate(['posts', id]);
  }
  deleteById(id, event, index) {
    this.spinner.presentLoading();
    event.stopPropagation();
    const remove = this.service.deletePostById(id).subscribe(
      (res: any) => {
        console.log(res);
        this.posts.splice(index, 1);
        this.spinner.dismissLoading();
        this.spinner.presentToast('Post has been deleted successfully');
      },
      (err) => {
        this.spinner.dismissLoading();
        this.spinner.presentToast(
          'something went wrong please try again later'
        );
      },
      () => {
        remove.unsubscribe();
      }
    );
  }

  ngOnInit(): void {}
}
