import { AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { APIResponse, Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sort!:string;
  games!:Array<Game>;
  constructor(private httpservice:HttpService,private activatedRoute:ActivatedRoute,private router:Router) { 
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
      if(params['game-search'])
         this.searchGames('metacrit',params['game-search']);
      else
         this.searchGames('metacrit');
    })
  }
  
  searchGames(ordering:string,search?:string):void{
    this.httpservice.getGameList(ordering,search).subscribe((gamelist:APIResponse<Game>)=>{
      this.games=gamelist.results;
      console.log(gamelist);
    })
  }

  openGameDetails(id:number){
    this.router.navigate(['details',id]);
  }

}
