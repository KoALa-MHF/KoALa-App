import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { environment } from '../environments/environment';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LANGUAGE_CODE } from './core/components/header/header.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './features/auth/auth.module';
import { LayoutComponent } from './layout.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    CoreModule,
    SharedModule,
    AuthModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: LANGUAGE_CODE.GERMAN,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [
          HttpClient,
        ],
      },
    }),
    ToastModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        const uri: string = environment.production ? 'https://koala-app.de/graphql' : 'http://localhost:4200/graphql';
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: uri,
          }),
        };
      },
      deps: [
        HttpLink,
      ],
    },
    MessageService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}
