import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatFormFieldModule, MatNativeDateModule, MatInputModule, MatCheckboxModule, MatDatepickerModule, MatToolbarModule, MatButtonModule, MatButtonToggleModule, MatTabsModule, MatCardModule } from '@angular/material';

import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'

import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { CommonHeaderComponent } from './common/common-header/common-header.component';
import { HomeComponent } from './home/home.component';
import { ManHomeCategoryComponent } from './home/man-home-category/man-home-category.component';
import { HomeDefaultComponent } from './home/home-default/home-default.component';
import { WomanHomeCategoryComponent } from './home/woman-home-category/woman-home-category.component';
import { HotDealsHomeCategoryComponent } from './home/hot-deals-home-category/hot-deals-home-category.component';
import { KidsHomeCategoryComponent } from './home/kids-home-category/kids-home-category.component';
import { RevSliderComponent } from './home/rev-slider/rev-slider.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { ClothesCollectionComponent } from './common/clothes-collection/clothes-collection.component';
import { NotFoundComponent } from './common/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonHeaderComponent,
    HomeComponent,
    ManHomeCategoryComponent,
    HomeDefaultComponent,
    WomanHomeCategoryComponent,
    KidsHomeCategoryComponent,
    HotDealsHomeCategoryComponent,
    RevSliderComponent,
    ProductCarouselComponent,
    ClothesCollectionComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'clothes-collection/:type', component: ClothesCollectionComponent},
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
